"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./PhoneMockup.module.css";

const CYCLE_MS = 5000;
const CONTEXT_MSG =
  "Bu kızla konuşmaya çalışıyorum ama cevaplarım çok mu itici kaçıyor?";
const USER_TEXT = "Bu mesaj çok mu cringe?";
const LINA_TEXT =
  "Samimiyetin güzel — bu mesajı biraz daha hafif ve rahat bir tona çekelim.";
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
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setEntered(true));
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanTilt(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(t);
      mq.removeEventListener("change", update);
    };
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

  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!canTilt) return;
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({
        rotateY: Math.max(-10, Math.min(10, px * 12)),
        rotateX: Math.max(-8, Math.min(8, -py * 8)),
      });
    },
    [canTilt],
  );

  const onMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
  }, []);

  const scoreColor = lerpColor("#FF6B6B", "#5CFFB2", scoreProgress);
  const userTyped = USER_TEXT.slice(0, typedLen);

  return (
    <div
      ref={wrapperRef}
      className={`relative mx-auto w-full ${styles.wrapper} ${entered ? styles.enter : "opacity-0"}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className={`absolute -inset-8 rounded-full ${styles.haloRing}`} aria-hidden />
      <div
        className={`absolute -inset-5 rounded-[3.5rem] bg-gradient-to-br from-purple/45 via-pink/35 to-purple/15 blur-3xl ${styles.glow}`}
        aria-hidden
      />

      <div className={styles.levitate}>
        <div
          className={`relative rounded-[2.75rem] border border-white/15 bg-card/95 p-2.5 shadow-[0_24px_80px_rgba(123,47,255,0.35)] backdrop-blur-xl transition-transform duration-300 ease-out will-change-transform sm:p-3 ${styles.phoneFrame}`}
          style={{
            transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative overflow-hidden rounded-[2.2rem] bg-bg">
            {/* Coach header */}
            <div className="flex items-center gap-2.5 border-b border-white/8 bg-card/90 px-3 py-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink to-purple text-sm shadow-lg shadow-pink/30">
                👩
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-bold text-white">Lina</p>
                <p className="text-[10px] text-pink/90">İlişki Koçu · AI</p>
              </div>
              <span className="rounded-full bg-green/15 px-2 py-0.5 text-[9px] font-semibold text-green">
                ● Aktif
              </span>
            </div>

            <div className="min-h-[220px] space-y-2.5 p-3 pb-[4.5rem] sm:p-3.5">
              <p className="ml-auto max-w-[92%] rounded-2xl rounded-tr-md border border-white/6 bg-white/[0.06] px-3 py-2 text-[11px] leading-relaxed text-muted/90">
                {CONTEXT_MSG}
              </p>

              <p className="ml-auto max-w-[90%] min-h-[2.25rem] rounded-2xl rounded-tr-md bg-gradient-to-r from-purple/50 to-pink/35 px-3 py-2 text-[11px] leading-relaxed text-white shadow-[0_4px_16px_rgba(123,47,255,0.2)]">
                {userTyped}
                {typedLen < USER_TEXT.length ? (
                  <span className="ml-0.5 inline-block h-3 w-[2px] animate-pulse bg-pink align-middle" />
                ) : (
                  <span> 😅</span>
                )}
              </p>

              {showLinaTyping && !showLinaMsg ? (
                <p
                  className={`max-w-[88%] rounded-2xl rounded-tl-md glass px-3 py-2 text-[11px] text-muted ${styles.linaTyping}`}
                >
                  <span className="font-semibold text-pink">Lina yazıyor</span>
                  <span className={`ml-1 ${styles.dots}`}>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </span>
                </p>
              ) : null}

              {showLinaMsg ? (
                <p
                  className={`max-w-[92%] rounded-2xl rounded-tl-md glass px-3 py-2.5 text-[11px] leading-relaxed text-muted ${styles.linaMessage}`}
                >
                  <span className="font-semibold text-pink">Lina:</span> {LINA_TEXT}{" "}
                  <span aria-hidden>😊</span>
                </p>
              ) : null}

              {showScore ? (
                <div
                  className={`max-w-[95%] rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 ${styles.scoreReveal}`}
                >
                  <p className="text-[11px] font-semibold text-white/90">
                    Skor:{" "}
                    <span style={{ color: scoreColor }}>
                      Cringe {score} → {SCORE_END}
                    </span>
                    {score <= SCORE_END ? (
                      <span className="ml-1 text-green">✓</span>
                    ) : null}
                  </p>
                  <div className="relative mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-150 ease-out"
                      style={{
                        width: `${Math.max(8, scoreProgress * 100)}%`,
                        background: `linear-gradient(90deg, #FF6B6B, ${scoreColor})`,
                        boxShadow: `0 0 12px ${scoreColor}88`,
                      }}
                    />
                    <span
                      className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-green shadow-[0_0_10px_#5CFFB2]"
                      style={{
                        left: `calc(${scoreProgress * 100}% - 5px)`,
                        opacity: scoreProgress > 0.05 ? 1 : 0,
                        transition: "left 0.15s ease-out, opacity 0.2s",
                      }}
                      aria-hidden
                    />
                  </div>
                </div>
              ) : null}
            </div>

            <div
              className={`absolute bottom-3 inset-x-3 flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-purple via-[#9333ea] to-pink py-2.5 text-[11px] font-bold text-white sm:bottom-3.5 sm:py-3 sm:text-xs ${styles.ctaPulse}`}
            >
              <span aria-hidden>✦</span>
              AI Koç&apos;a yaz
            </div>

            <div className="flex justify-around border-t border-white/6 bg-card/80 px-2 py-2">
              {["Koçlar", "Analiz", "Sohbet", "Profil"].map((tab, i) => (
                <span
                  key={tab}
                  className={`text-[8px] font-medium ${i === 0 ? "text-pink" : "text-muted/70"}`}
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
