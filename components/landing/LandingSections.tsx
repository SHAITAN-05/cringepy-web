import { COACHES, FAQ, PREMIUM_FEATURES, PRODUCT_SECTIONS } from "@/lib/site";
import { Section } from "@/components/Section";
import { StoreButtons } from "@/components/StoreButtons";

const accentMap: Record<string, { border: string; glow: string; text: string }> = {
  pink: { border: "border-pink/35", glow: "from-pink/25", text: "text-pink" },
  green: { border: "border-green/35", glow: "from-green/25", text: "text-green" },
  blue: { border: "border-blue/35", glow: "from-blue/25", text: "text-blue" },
  purple: { border: "border-purple/35", glow: "from-purple/25", text: "text-purple" },
};

export function CoachesSection() {
  return (
    <Section
      id="coaches"
      eyebrow="AI Koçlar"
      title="Kişiliğine uygun koçunu seç"
      subtitle="Özgüven, duygu, analiz veya eğlence — her koç farklı bir yaklaşım sunar."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {COACHES.map((coach) => (
          <article
            key={coach.id}
            className="glass group rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ borderColor: `${coach.color}40` }}
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
              style={{ backgroundColor: `${coach.color}22` }}
            >
              {coach.emoji}
            </span>
            <h3 className="mt-5 text-xl font-bold">{coach.name}</h3>
            <p className="text-sm font-semibold" style={{ color: coach.color }}>
              {coach.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{coach.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ProductBlock({
  section,
  reverse,
}: {
  section: (typeof PRODUCT_SECTIONS)[number];
  reverse?: boolean;
}) {
  const accent = accentMap[section.accent] ?? accentMap.purple;

  return (
    <Section
      id={section.id}
      eyebrow={section.eyebrow}
      title={section.title}
      subtitle={section.desc}
      className="scroll-mt-24"
    >
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div
          className={`glass rounded-3xl border bg-gradient-to-br to-transparent p-8 sm:p-10 ${accent.border} ${accent.glow}`}
        >
          <span className="text-5xl">{section.icon}</span>
          <ul className="mt-8 space-y-3">
            {section.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-white/90">
                <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-current ${accent.text}`} />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-strong rounded-3xl border border-white/10 p-6 sm:p-8">
          <p className={`text-xs font-bold uppercase tracking-widest ${accent.text}`}>
            {section.eyebrow}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            CringePy&apos;de {section.eyebrow.toLowerCase()} ile sosyal becerini adım adım
            geliştir. Gerçek zamanlı öneriler, kişisel skor ve koç geri bildirimi tek yerde.
          </p>
          <div className="mt-6 rounded-2xl border border-white/8 bg-bg/80 p-4">
            <p className="text-xs text-muted">Örnek geri bildirim</p>
            <p className="mt-2 text-sm font-medium text-white">
              &quot;Mesajın samimi ama biraz uzun — kısalt ve soruyla bitir.&quot;
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function FlirtSection() {
  return <ProductBlock section={PRODUCT_SECTIONS[0]} />;
}

export function FriendSection() {
  return <ProductBlock section={PRODUCT_SECTIONS[1]} reverse />;
}

export function AnalysisSection() {
  return <ProductBlock section={PRODUCT_SECTIONS[2]} />;
}

export function VoiceSection() {
  return <ProductBlock section={PRODUCT_SECTIONS[3]} reverse />;
}

export function PremiumSection() {
  return (
    <Section
      id="premium"
      eyebrow="Premium Özellikler"
      title="Sınırları kaldır, tam deneyimi yaşa"
      subtitle="Sınırsız koçluk, gelişmiş analiz ve öncelikli özellikler."
    >
      <div className="glass-strong mx-auto max-w-4xl overflow-hidden rounded-3xl border border-purple/30">
        <div className="relative bg-gradient-to-br from-purple/25 via-pink/15 to-blue/20 px-6 py-12 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-pink/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-pink">CringePy+</p>
              <p className="mt-4 text-3xl font-extrabold sm:text-4xl">
                <span className="text-gradient">Premium</span> ile öne geç
              </p>
              <p className="mt-4 text-muted">
                Tüm modlara sınırsız erişim, derin analiz raporları ve reklamsız deneyim.
              </p>
            </div>
            <ul className="space-y-3">
              {PREMIUM_FEATURES.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/8 bg-bg/50 px-4 py-3 text-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/20 text-green text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-10 flex justify-center">
            <StoreButtons />
          </div>
        </div>
      </div>
    </Section>
  );
}

export function FAQSection() {
  return (
    <Section id="faq" eyebrow="SSS" title="Merak edilenler">
      <div className="mx-auto max-w-2xl space-y-3">
        {FAQ.map((item) => (
          <details
            key={item.q}
            className="glass group rounded-2xl border border-white/8 p-5 open:border-purple/40"
          >
            <summary className="cursor-pointer list-none font-semibold marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span className="text-xl text-purple transition group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

export function DownloadSection() {
  return (
    <section id="download" className="scroll-mt-24 border-t border-white/8 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">Yakında mağazalarda</h2>
        <p className="mt-4 text-lg text-muted">
          CringePy çok yakında App Store ve Google Play&apos;de. Haberdar olmak için takipte kal.
        </p>
        <StoreButtons className="mt-10" />
      </div>
    </section>
  );
}
