"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./PhoneMockup.module.css";

const CYCLE_MS = 5000;
const USER_TEXT = "Bu mesaj çok mu cringe?";
const LINA_TEXT = "Biraz fazla ciddi. Şunu dene — daha sıcak ve kısa.";
const SCORE_START = 32;
const SCORE_END = 12;
const TYPE_MS = 42;
const LINA_DELAY_MS = 1500;
const LINA_TYPING_MS = 700;
const SCORE_DELAY_MS = 3200;
const SCORE_ANIM_MS = 900;

function easeOutCubic(t: number): number {
  return 1 - (1 - t) ** 3;
}

function lerpColor(from: string, to: string, t: number): string {
  const parse = (hex: string) => {
    const h = hex.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  };
  const [r1, g1, b1] = parse(from);
  const [r2, g2, b2] = parse(to);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

export function PhoneMockup() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [cycleKey, setCycleKey] = useState(0);
  const [typedLen, setTypedLen] = useState(0);
  const [showLinaTyping, setShowLinaTyping] = useState(false);
  const [showLinaMsg, setShowLinaMsg] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(SCORE_START);
  const [scoreProgress, setScoreProgress] = useState(0);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    setTypedLen(0);
    setShowLinaTyping(false);
    setShowLinaMsg(false);
    setShowScore(false);
    setScore(SCORE_START);
    setScoreProgress(0);

    const timers: ReturnType<typeof setTimeout>[] = [];
    const intervals: ReturnType<typeof setInterval>[] = [];
    let typeIndex = 0;

    const typeInterval = setInterval(() => {
      typeIndex += 1;
      setTypedLen(typeIndex);
      if (typeIndex >= USER_TEXT.length) {
        clearInterval(typeInterval);
      }
    }, TYPE_MS);
    intervals.push(typeInterval);

    timers.push(
      setTimeout(() => setShowLinaTyping(true), LINA_DELAY_MS),
      setTimeout(() => {
        setShowLinaTyping(false);
        setShowLinaMsg(true);
      }, LINA_DELAY_MS + LINA_TYPING_MS),
      setTimeout(() => setShowScore(true), SCORE_DELAY_MS),
      setTimeout(() => setCycleKey((k) => k + 1), CYCLE_MS),
    );

    return () => {
      timers.forEach(clearTimeout);
      intervals.forEach(clearInterval);
    };
  }, [cycleKey]);

  useEffect(() => {
    if (!showScore) return;

    setScore(SCORE_START);
    setScoreProgress(0);

    let raf = 0;
    const start = performance.now();

    const animateScore = (now: number) => {
      const p = Math.min(1, (now - start) / SCORE_ANIM_MS);
      const eased = easeOutCubic(p);
      setScore(Math.round(SCORE_START + (SCORE_END - SCORE_START) * eased));
      setScoreProgress(eased);
      if (p < 1) {
        raf = requestAnimationFrame(animateScore);
      }
    };

    raf = requestAnimationFrame(animateScore);
    return () => cancelAnimationFrame(raf);
  }, [showScore, cycleKey]);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rotateY: px * 14,
      rotateX: -py * 10,
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  const scoreColor = lerpColor("#FF6B6B", "#5CFFB2", scoreProgress);
  const userTyped = USER_TEXT.slice(0, typedLen);

  return (
    <div
      ref={wrapperRef}
      className={`relative mx-auto w-full max-w-[320px] lg:mx-0 lg:ml-auto ${styles.wrapper} ${
        entered ? styles.enter : "opacity-0"
      }`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`absolute -inset-6 rounded-[3.5rem] bg-gradient-to-br from-purple/40 via-pink/30 to-purple/20 blur-3xl ${styles.glow}`}
        aria-hidden
      />

      <div className={styles.levitate}>
        <div
          className="relative rounded-[2.75rem] border border-white/15 bg-card/90 p-3 shadow-2xl shadow-purple/25 backdrop-blur transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative overflow-hidden rounded-[2.25rem] bg-bg">
            <div className="border-b border-white/8 bg-card/80 px-4 py-3">
              <p className="text-center text-sm font-bold">
                Cringe<span className="text-pink">Py</span>
              </p>
              <p className="mt-0.5 text-center text-[10px] text-muted">AI Sosyal Koçluk</p>
            </div>

            <div className="min-h-[200px] space-y-3 p-4 pb-24">
              <p className="ml-auto max-w-[88%] min-h-[2.5rem] rounded-2xl rounded-tr-md bg-gradient-to-r from-purple/40 to-pink/30 px-3 py-2.5 text-xs leading-relaxed">
                {userTyped}
                {typedLen < USER_TEXT.length ? (
                  <span className="ml-0.5 inline-block h-3 w-[2px] animate-pulse bg-white/80 align-middle" />
                ) : (
                  <span> 😅</span>
                )}
              </p>

              {showLinaTyping && !showLinaMsg ? (
                <p
                  className={`max-w-[92%] rounded-2xl rounded-tl-md glass px-3 py-2.5 text-xs text-muted ${styles.linaTyping}`}
                >
                  <span className="font-semibold text-pink">Lina</span>
                  <span className={`ml-1 ${styles.dots}`}>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </span>
                </p>
              ) : null}

              {showLinaMsg ? (
                <p
                  className={`max-w-[92%] rounded-2xl rounded-tl-md glass px-3 py-2.5 text-xs leading-relaxed text-muted ${styles.linaMessage}`}
                >
                  <span className="font-semibold text-pink">Lina:</span> {LINA_TEXT}
                </p>
              ) : null}

              {showScore ? (
                <p
                  className={`max-w-[92%] rounded-2xl rounded-tl-md border px-3 py-2 text-xs ${styles.scoreReveal}`}
                  style={{
                    borderColor: `${scoreColor}55`,
                    backgroundColor: `${scoreColor}18`,
                    color: scoreColor,
                    transition: "color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease",
                  }}
                >
                  <span className="font-semibold">Skor:</span> Cringe {score} → {SCORE_END}
                  {score <= SCORE_END ? " ✓" : ""}
                </p>
              ) : null}
            </div>

            <div
              className={`absolute bottom-5 inset-x-4 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple via-purple to-blue py-3 text-xs font-bold text-white ${styles.ctaPulse}`}
            >
              <span aria-hidden>🎙️</span>
              AI Koç&apos;a yaz
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
