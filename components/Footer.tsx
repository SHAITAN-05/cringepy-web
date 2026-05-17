import Link from "next/link";

import { FOOTER_LEGAL, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold">
              Cringe<span className="text-pink">Py</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{SITE.subtitle}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Ürün</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <Link href="/#coaches" className="hover:text-white">
                  AI Koçlar
                </Link>
              </li>
              <li>
                <Link href="/#premium" className="hover:text-white">
                  Premium
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white">
                  SSS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Yasal</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {FOOTER_LEGAL.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/8 pt-8 text-center text-xs text-muted">
          © {new Date().getFullYear()} {SITE.name}. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
