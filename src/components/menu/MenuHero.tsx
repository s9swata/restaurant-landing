export default function MenuHero() {
  return (
    <header className="px-4 md:px-8 mb-12 md:mb-32 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 border-b border-outline-variant/15 pb-10">
        <div className="max-w-2xl text-center md:text-left">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary mb-4 block">
            Spring Collection 2026
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-light leading-tight mb-6">
            The Culinary Anthology
          </h1>
          <p className="font-body text-base md:text-lg text-outline leading-relaxed max-w-lg mx-auto md:mx-0">
            A curated journey through the Italian landscape, translated into
            texture and fire. Every dish is a dialogue between tradition and the
            avant-garde.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1 italic font-headline text-primary opacity-90">
          <span className="text-sm md:text-base">Executive Chef Lorenzo Bianchi</span>
          <span className="text-xs md:text-sm opacity-60">Michelin ☆☆☆ Paris</span>
        </div>
      </div>
    </header>
  );
}
