import { SITE } from "@/lib/site";
import { StoreButtons } from "@/components/StoreButtons";
import { PhoneMockup } from "@/components/landing/PhoneMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-purple/25 blur-[100px]" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-pink/15 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-purple/35 bg-purple/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-purple">
              <span className="h-2 w-2 rounded-full bg-green shadow-[0_0_8px_#5CFFB2]" />
              Yapay zekâ destekli
            </p>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              <span className="text-gradient">{SITE.title}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              {SITE.subtitle}
            </p>

            <StoreButtons className="mt-10 justify-start" layout="col" />

            <dl className="mt-12 grid grid-cols-3 gap-3 border-t border-white/8 pt-8 sm:gap-6">
              <div>
                <dt className="text-2xl font-bold text-white">4</dt>
                <dd className="mt-1 text-xs text-muted">AI koç</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-pink">AI</dt>
                <dd className="mt-1 text-xs text-muted">Mesaj analizi</dd>
              </div>
              <div>
                <dt className="text-2xl font-bold text-green">24/7</dt>
                <dd className="mt-1 text-xs text-muted">Koçluk</dd>
              </div>
            </dl>
          </div>

          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
