import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPage({ title, description, children }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32">
      <Link href="/" className="text-sm font-medium text-purple hover:text-white">
        ← Ana sayfa
      </Link>
      <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 text-muted">{description}</p>
      <div className="prose-legal mt-10">{children}</div>
    </article>
  );
}
