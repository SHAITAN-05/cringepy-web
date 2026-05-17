export const SITE = {
  name: "CringePy",
  title: "CringePy — AI Sosyal Koçluk",
  subtitle:
    "Mesajlarını, flörtlerini ve sosyal konuşmalarını yapay zekâ ile analiz et. Daha doğal, daha etkileyici ve daha özgüvenli konuş.",
  description:
    "CringePy — AI sosyal koçluk uygulaması. Flört modu, arkadaş modu, mesaj analizi ve sesli koçluk ile daha özgüvenli iletişim.",
  url: "https://cringepy.app",
  supportEmail: "support@cringepy.app",
} as const;

export const NAV_LINKS = [
  { href: "/#coaches", label: "AI Koçlar" },
  { href: "/#flirt", label: "Flört" },
  { href: "/#friend", label: "Arkadaş" },
  { href: "/#analysis", label: "Analiz" },
  { href: "/#voice", label: "Sesli Koç" },
  { href: "/#premium", label: "Premium" },
] as const;

export const COACHES = [
  {
    id: "mert",
    name: "Mert",
    role: "Özgüven koçu",
    emoji: "👱‍♂️",
    color: "#7B2FFF",
    desc: "Sert geri bildirim, net aksiyon planı ve özgüven odaklı koçluk.",
  },
  {
    id: "lina",
    name: "Lina",
    role: "Duygu koçu",
    emoji: "👱‍♀️",
    color: "#FF5CCF",
    desc: "Empati, duygusal zeka ve ilişkilerde doğru tonu yakalaman için.",
  },
  {
    id: "kira",
    name: "Kira",
    role: "Analiz koçu",
    emoji: "🤖",
    color: "#1EA7FF",
    desc: "Veri odaklı cringe skoru, mesaj analizi ve objektif öneriler.",
  },
  {
    id: "kedi",
    name: "Kedi",
    role: "Evcil koç",
    emoji: "🐱",
    color: "#5CFFB2",
    desc: "Hafif, eğlenceli ve stres düşürücü mini koçluk seansları.",
  },
] as const;

export const PRODUCT_SECTIONS = [
  {
    id: "flirt",
    eyebrow: "Flört Modu",
    title: "Mesajlarında doğru tonu yakala",
    desc: "Yazdığın mesajları analiz et, alternatif cevaplar al ve red flag uyarılarıyla daha güvenli flört et.",
    icon: "💬",
    accent: "pink",
    bullets: ["Mesaj önerileri", "Ton ve enerji analizi", "Red flag uyarıları", "Doğal sohbet akışı"],
  },
  {
    id: "friend",
    eyebrow: "Arkadaş Modu",
    title: "Sosyal çevreni genişlet",
    desc: "Yakındaki kullanıcıları keşfet, ortak ilgi alanlarına göre eşleş ve etkinliklerle tanış.",
    icon: "🤝",
    accent: "green",
    bullets: ["Yakındaki kullanıcılar", "Ortak ilgi alanları", "Şehir ve mesafe", "Etkinlik keşfi"],
  },
  {
    id: "analysis",
    eyebrow: "Mesaj Analizi",
    title: "Cringe skorunu öğren",
    desc: "Sohbet ekran görüntülerini ve mesaj geçmişini analiz ederek kişisel cringe raporu al.",
    icon: "📊",
    accent: "blue",
    bullets: ["Cringe skoru", "Ekran görüntüsü analizi", "Boyut bazlı geri bildirim", "İlerleme takibi"],
  },
  {
    id: "voice",
    eyebrow: "Sesli Koçluk",
    title: "Konuşarak pratik yap",
    desc: "AI koçuna sesli mesaj gönder; anlık geri bildirim ve pratik önerilerle özgüven kazan.",
    icon: "🎙️",
    accent: "purple",
    bullets: ["Sesli mesaj analizi", "7/24 koç erişimi", "Kişiselleştirilmiş ton", "Hızlı geri bildirim"],
  },
] as const;

export const PREMIUM_FEATURES = [
  "Sınırsız AI koç mesajı",
  "Gelişmiş cringe ve mesaj raporu",
  "Öncelikli yeni özellikler",
  "Reklamsız premium deneyim",
  "Tüm koçlara tam erişim",
] as const;

export const FAQ = [
  {
    q: "CringePy ücretsiz mi?",
    a: "Temel özellikler ücretsizdir. Premium ile sınırsız koç mesajı ve gelişmiş analizler açılır.",
  },
  {
    q: "Hangi platformlarda çıkacak?",
    a: "Önce App Store (iOS), ardından Google Play (Android) planlanmaktadır.",
  },
  {
    q: "Verilerim güvende mi?",
    a: "Evet. Gizlilik politikamız ve hesap silme seçeneği uygulama içinden erişilebilir.",
  },
] as const;

export const FOOTER_LEGAL = [
  { href: "/privacy", label: "Gizlilik" },
  { href: "/terms", label: "Kullanım Koşulları" },
  { href: "/support", label: "Destek" },
  { href: "/delete-account", label: "Hesap Silme" },
] as const;
