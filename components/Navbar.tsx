"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { NAV_LINKS } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong py-3 shadow-lg shadow-black/20" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple to-blue text-lg font-bold shadow-lg shadow-purple/30">
            ⌣
          </span>
          <span className="text-lg font-bold tracking-tight">
            Cringe<span className="text-pink">Py</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#download"
            className="btn-primary rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          >
            Yakında İndir
          </a>
        </div>

        <button
          type="button"
          className="glass rounded-lg p-2 md:hidden"
          aria-label="Menü"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 bg-white" />
          <span className="mt-1 block h-0.5 w-5 bg-white" />
          <span className="mt-1 block h-0.5 w-5 bg-white" />
        </button>
      </div>

      {open ? (
        <div className="glass-strong mx-4 mt-3 rounded-2xl p-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#download"
              className="btn-primary mt-2 rounded-full px-4 py-3 text-center text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              Yakında İndir
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
