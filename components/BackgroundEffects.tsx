export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 glow-purple animate-pulse-glow" />
      <div className="absolute inset-0 glow-blue" />
      <div className="absolute inset-0 glow-pink" />
      <div className="absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-purple/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-blue/15 blur-[100px]" />
      <div className="absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-pink/10 blur-[90px]" />
    </div>
  );
}
