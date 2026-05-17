import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SITE } from "@/lib/site";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: {
    default: "CringePy",
    template: "%s | CringePy",
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  applicationName: "CringePy",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  openGraph: {
    title: SITE.title,
    description: SITE.subtitle,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${geist.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-bg font-sans text-white antialiased">
        <BackgroundEffects />
        <Navbar />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
