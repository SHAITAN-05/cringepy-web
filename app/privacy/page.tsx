import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      description={`${SITE.name} uygulamasında kişisel verilerinizin nasıl işlendiğini açıklar.`}
    >
      <p>Son güncelleme: {new Date().getFullYear()}</p>
      <h2>Toplanan veriler</h2>
      <p>
        Hesap bilgileri (e-posta, ad), profil tercihleri, konum (izin verdiğinizde), sohbet ve
        analiz içerikleri ile cihaz tanımlayıcıları işlenebilir.
      </p>
      <h2>Kullanım amacı</h2>
      <ul>
        <li>AI koçluk ve kişiselleştirilmiş öneriler sunmak</li>
        <li>Hesap güvenliği ve kimlik doğrulama</li>
        <li>Uygulama performansını iyileştirmek</li>
      </ul>
      <h2>Paylaşım</h2>
      <p>
        Verileriniz yalnızca hizmet sağlayıcılar (ör. kimlik doğrulama, barındırma) ile sınırlı ve
        sözleşmeye bağlı olarak paylaşılır. Verileriniz üçüncü taraflara satılmaz.
      </p>
      <h2>Haklarınız</h2>
      <p>
        Verilerinize erişim, düzeltme ve silme talebinde bulunabilirsiniz. Hesap silme:{" "}
        <a href="/delete-account" className="text-purple hover:underline">
          Hesap silme sayfası
        </a>
        .
      </p>
      <h2>İletişim</h2>
      <p>
        Sorularınız için:{" "}
        <a href={`mailto:${SITE.supportEmail}`} className="text-purple hover:underline">
          {SITE.supportEmail}
        </a>
      </p>
    </LegalPage>
  );
}
