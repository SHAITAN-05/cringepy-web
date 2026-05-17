import Link from "next/link";

import { PhoneMockup } from "@/components/landing/PhoneMockup";

const STATS = [
  { icon: "👥", value: "10.000+", label: "Aktif kullanıcı" },
  { icon: "📈", value: "%94", label: "Özgüven artışı" },
  { icon: "🕐", value: "7/24", label: "AI Koç desteği" },
  { icon: "⭐", value: "20+", label: "AI Koç seçeneği" },
] as const;

const AVATARS = [
  { initials: "E", from: "#7B2FFF", to: "#FF5CCF" },
  { initials: "M", from: "#1EA7FF", to: "#7B2FFF" },
  { initials: "S", from: "#FF5CCF", to: "#FF8A5C" },
  { initials: "K", from: "#5CFFB2", to: "#1EA7FF" },
] as const;

export function LandingHero() {
  return (
    <section className="relative min-h-[100svh] overflow-x-clip pt-[5.5rem] pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* CringePy ambient field — no overflow-hidden on section */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple/25 blur-[110px]" />
        <div className="absolute right-[-10%] top-24 h-[22rem] w-[22rem] rounded-full bg-pink/20 blur-[120px] lg:right-[5%] lg:h-[26rem] lg:w-[26rem]" />
        <div className="absolute bottom-8 left-1/3 h-56 w-56 rounded-full bg-blue/10 blur-[100px]" />
        <div
          className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple/50 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,400px)] lg:gap-10 xl:gap-14">
          {/* Copy */}
          <div className="order-1 min-w-0 lg:order-none">
            <p className="inline-flex items-center gap-2 rounded-full border border-purple/35 bg-purple/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-purple shadow-[0_0_24px_rgba(123,47,255,0.15)]">
              <span aria-hidden>✨</span>
              AI destekli özgüven koçun
            </p>

            <h1 className="mt-7 text-[2.25rem] font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              <span className="block text-white">Cringe&apos;i yen,</span>
              <span className="mt-1 block">
                <span className="bg-gradient-to-r from-[#a78bfa] via-pink to-[#f472b6] bg-clip-text text-transparent">
                  özgüvenini
                </span>{" "}
                <span className="text-white">geri al.</span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg sm:leading-relaxed">
              AI destekli koçlarınla mesajlarını geliştir, sosyal konuşmalarını analiz et ve daha
              doğal iletişim kur.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple via-[#9333ea] to-pink px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_32px_rgba(123,47,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,92,207,0.35)]"
              >
                Ücretsiz Başla
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href="#coaches"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/22 hover:bg-white/[0.08]"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-white/10 to-white/5 text-[11px] text-pink"
                  aria-hidden
                >
                  ▶
                </span>
                Nasıl Çalışır?
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
              <div className="flex -space-x-2.5">
                {AVATARS.map((avatar, i) => (
                  <span
                    key={avatar.initials}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-bg text-xs font-bold text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${avatar.from}, ${avatar.to})`,
                      zIndex: AVATARS.length - i,
                    }}
                  >
                    {avatar.initials}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-0.5 text-amber-400/90" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-sm">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-muted">
                <span className="font-semibold text-white">2.847+</span> kişi CringePy&apos;yi
                seviyor
              </p>
            </div>
          </div>

          {/* Phone column — padding prevents glow / levitate clip */}
          <div className="order-2 flex min-w-0 justify-center lg:order-none lg:justify-end">
            <div className="relative w-full max-w-[min(100%,340px)] px-1 py-6 sm:px-2 sm:py-8 lg:max-w-[360px] lg:py-10">
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100%,420px)] w-[min(100%,340px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple/30 via-pink/25 to-purple/10 blur-3xl"
                aria-hidden
              />
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Stats — glass panel */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_0_60px_rgba(123,47,255,0.08)] backdrop-blur-xl sm:p-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="group text-center sm:border-r sm:border-white/[0.06] sm:last:border-r-0 sm:pr-6 sm:text-left sm:last:pr-0"
                >
                  <p
                    className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-purple/15 text-lg sm:mx-0"
                    aria-hidden
                  >
                    {stat.icon}
                  </p>
                  <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
