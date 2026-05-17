import Link from "next/link";

import { PhoneMockup } from "@/components/landing/PhoneMockup";
import {
  AnalysisSection,
  CoachesSection,
  DownloadSection,
  FAQSection,
  FlirtSection,
  FriendSection,
  PremiumSection,
  VoiceSection,
} from "@/components/landing/LandingSections";

const STATS = [
  { icon: "👥", value: "10.000+", label: "Aktif kullanıcı" },
  { icon: "📈", value: "%94", label: "Özgüven artışı" },
  { icon: "🕐", value: "7/24", label: "AI Koç desteği" },
  { icon: "⭐", value: "20+", label: "AI Koç seçeneği" },
] as const;

const AVATARS = ["A", "B", "C", "D"] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        {/* Ambient glow — section uses overflow-visible so phone is not clipped */}
        <div
          className="pointer-events-none absolute inset-0 overflow-visible"
          aria-hidden
        >
          <div className="absolute left-1/2 top-16 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-purple/20 blur-[120px] sm:top-24" />
          <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-pink/15 blur-[100px] lg:right-[8%] lg:top-40 lg:h-96 lg:w-96" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue/10 blur-[90px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(280px,360px)] lg:gap-12 xl:gap-16">
            {/* Hero copy */}
            <div className="order-1 lg:order-none lg:max-w-xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-purple/40 bg-purple/10 px-4 py-1.5 text-xs font-semibold text-purple">
                <span aria-hidden>✦</span>
                AI destekli özgüven koçun
              </p>

              <h1 className="mt-6 text-[2.35rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem]">
                <span className="text-white">Cringe&apos;i yen,</span>
                <br />
                <span className="bg-gradient-to-r from-purple via-pink to-purple bg-clip-text text-transparent">
                  özgüvenini
                </span>{" "}
                <span className="text-white">geri al.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                AI destekli koçlarınla mesajlarını geliştir, sosyal konuşmalarını analiz et ve
                daha doğal iletişim kur.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple via-purple to-pink px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple/35 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple/45"
                >
                  Ücretsiz Başla
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="#coaches"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[10px]"
                    aria-hidden
                  >
                    ▶
                  </span>
                  Nasıl Çalışır?
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <div className="flex -space-x-2">
                  {AVATARS.map((letter, i) => (
                    <span
                      key={letter}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-bg text-xs font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, hsl(${260 + i * 18}, 70%, 55%), hsl(${300 + i * 12}, 75%, 58%))`,
                        zIndex: AVATARS.length - i,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-amber-400" aria-hidden>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="text-sm text-muted">
                  <span className="font-semibold text-white">2.847+</span> kişi CringePy&apos;yi
                  seviyor
                </p>
              </div>
            </div>

            {/* Phone — visible overflow, responsive placement */}
            <div className="order-2 flex justify-center overflow-visible px-2 py-4 sm:py-6 lg:order-none lg:justify-end lg:py-8">
              <div className="relative w-full max-w-[300px] sm:max-w-[320px]">
                <PhoneMockup />
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/8 pt-10 sm:mt-16 sm:grid-cols-4 sm:gap-8 lg:mt-20">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl" aria-hidden>
                  {stat.icon}
                </p>
                <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoachesSection />
      <FlirtSection />
      <FriendSection />
      <AnalysisSection />
      <VoiceSection />
      <PremiumSection />
      <FAQSection />
      <DownloadSection />
    </>
  );
}
