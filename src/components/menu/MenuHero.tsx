export default function MenuHero() {
  return (
    <header className="px-8 mb-32 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-outline-variant/15 pb-12">
        <div className="max-w-2xl">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Spring Collection 2024
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-light leading-tight mb-8">
            The Culinary Anthology
          </h1>
          <p className="font-body text-lg text-outline leading-relaxed max-w-lg">
            A curated journey through the Italian landscape, translated into
            texture and fire. Every dish is a dialogue between tradition and the
            avant-garde.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 italic font-headline text-primary">
          <span>Executive Chef Lorenzo Bianchi</span>
          <span className="text-sm opacity-60">Michelin ☆☆☆</span>
        </div>
      </div>
    </header>
  );
}
