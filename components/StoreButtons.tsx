type Props = {
  layout?: "row" | "col";
  className?: string;
};

export function StoreButtons({ layout = "row", className = "" }: Props) {
  const flex = layout === "col" ? "flex-col" : "flex-col sm:flex-row";

  return (
    <div className={`flex ${flex} items-stretch justify-center gap-3 ${className}`}>
      <a
        href="#download"
        className="glass group flex min-h-[56px] min-w-[220px] flex-1 items-center justify-center gap-3 rounded-2xl border border-white/10 px-5 py-3.5 transition hover:border-purple/40 hover:bg-white/5 sm:max-w-[260px]"
      >
        <span className="text-2xl" aria-hidden>
          
        </span>
        <span className="text-left text-sm leading-tight">
          <span className="block text-xs text-muted">Yakında</span>
          <span className="font-bold text-white">App Store&apos;da</span>
        </span>
      </a>
      <a
        href="#download"
        className="glass group flex min-h-[56px] min-w-[220px] flex-1 items-center justify-center gap-3 rounded-2xl border border-white/10 px-5 py-3.5 transition hover:border-green/40 hover:bg-white/5 sm:max-w-[260px]"
      >
        <span className="text-xl font-bold text-green" aria-hidden>
          ▶
        </span>
        <span className="text-left text-sm leading-tight">
          <span className="block text-xs text-muted">Yakında</span>
          <span className="font-bold text-white">Google Play&apos;de</span>
        </span>
      </a>
    </div>
  );
}
