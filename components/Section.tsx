import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, subtitle, children, className = "" }: Props) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow ? (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p> : null}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
