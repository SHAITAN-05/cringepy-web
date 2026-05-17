import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Kullanım Koşulları"
      description={`${SITE.name} uygulamasını kullanırken geçerli şartlar.`}
    >
      <p>Son güncelleme: {new Date().getFullYear()}</p>
      <h2>Hizmet</h2>
      <p>
        CringePy, yapay zekâ destekli sosyal koçluk ve eğlence amaçlı analiz sunar. Tıbbi, hukuki
        veya profesyonel danışmanlık yerine geçmez.
      </p>
      <h2>Hesap</h2>
      <p>
        Hesabınızın güvenliğinden siz sorumlusunuz. Yanlış, yasa dışı veya başkalarının haklarını
        ihlal eden içerik paylaşmamayı kabul edersiniz.
      </p>
      <h2>Premium</h2>
      <p>
        Ücretli abonelikler uygulama mağazası kurallarına tabidir. İptal ve iade işlemleri ilgili
        mağaza politikaları üzerinden yürütülür.
      </p>
      <h2>Sorumluluk sınırı</h2>
      <p>
        AI yanıtları öneri niteliğindedir. CringePy, kullanıcı kararlarından doğan sonuçlardan
        sorumlu tutulamaz.
      </p>
      <h2>İletişim</h2>
      <p>
        <a href={`mailto:${SITE.supportEmail}`} className="text-purple hover:underline">
          {SITE.supportEmail}
        </a>
      </p>
    </LegalPage>
  );
}
