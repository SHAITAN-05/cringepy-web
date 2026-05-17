import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hesap Silme",
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Hesap Silme"
      description="CringePy hesabınızı ve ilişkili verileri kalıcı olarak silme."
    >
      <h2>Uygulama içinden</h2>
      <ol>
        <li>CringePy uygulamasını açın</li>
        <li>Profil sekmesine gidin</li>
        <li>Yasal ve destek bölümünden hesap silme seçeneğini kullanın</li>
        <li>Onaylayın — işlem geri alınamaz</li>
      </ol>
      <h2>E-posta ile talep</h2>
      <p>
        Uygulamaya erişemiyorsanız kayıtlı e-posta adresinizden{" "}
        <a href={`mailto:${SITE.supportEmail}`} className="text-purple hover:underline">
          {SITE.supportEmail}
        </a>{" "}
        adresine &quot;Hesap silme talebi&quot; konulu mail gönderin.
      </p>
      <h2>Silinen veriler</h2>
      <ul>
        <li>Hesap ve profil bilgileri</li>
        <li>Koçluk geçmişi ve analiz verileri (yasal saklama süreleri hariç)</li>
        <li>Premium abonelik bağlantısı (mağaza aboneliğini ayrıca iptal etmeniz gerekebilir)</li>
      </ul>
      <h2>Süre</h2>
      <p>Talepler genellikle 30 gün içinde tamamlanır; yasal yükümlülükler saklıdır.</p>
    </LegalPage>
  );
}
