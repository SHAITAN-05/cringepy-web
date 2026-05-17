import type { Metadata } from "next";
import Link from "next/link";

import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Destek",
};

export default function SupportPage() {
  return (
    <LegalPage
      title="Destek"
      description="CringePy ile ilgili yardım ve iletişim kanalları."
    >
      <h2>E-posta</h2>
      <p>
        Teknik sorunlar, hesap ve faturalandırma için:{" "}
        <a href={`mailto:${SITE.supportEmail}`} className="text-purple hover:underline">
          {SITE.supportEmail}
        </a>
      </p>
      <h2>Yanıt süresi</h2>
      <p>Genellikle 2–3 iş günü içinde yanıt verilir.</p>
      <h2>Sık konular</h2>
      <ul>
        <li>Giriş sorunları (Apple / Google / e-posta)</li>
        <li>Premium abonelik ve yenileme</li>
        <li>Hesap ve veri silme</li>
        <li>Gizlilik talepleri</li>
      </ul>
      <h2>Hesap silme</h2>
      <p>
        Kalıcı hesap silme adımları için{" "}
        <Link href="/delete-account" className="text-purple hover:underline">
          hesap silme sayfasına
        </Link>{" "}
        bakın veya uygulama içi Profil → Ayarlar üzerinden talep oluşturun.
      </p>
    </LegalPage>
  );
}
