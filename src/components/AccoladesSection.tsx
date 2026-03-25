export default function AccoladesSection() {
  return (
    <section className="py-24 bg-surface border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex flex-col items-center">
            <div className="flex gap-1 mb-2">
              <span
                className="material-symbols-outlined text-primary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-primary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span
                className="material-symbols-outlined text-primary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
            </div>
            <p className="font-label text-[10px] uppercase tracking-[0.2em]">
              Michelin Guide 2026
            </p>
          </div>
          <div className="text-center">
            <p className="font-headline italic text-2xl text-on-surface mb-1">
              Le Monde
            </p>
            <p className="font-label text-[10px] uppercase tracking-[0.2em]">
              &quot;A Masterpiece of Fusion&quot;
            </p>
          </div>
          <div className="text-center">
            <p className="font-headline italic text-2xl text-on-surface mb-1">
              The New York Times
            </p>
            <p className="font-label text-[10px] uppercase tracking-[0.2em]">
              &quot;Paris&apos;s Finest Italian Soul&quot;
            </p>
          </div>
          <div className="text-center">
            <p className="font-headline italic text-2xl text-on-surface mb-1">
              Vogue Living
            </p>
            <p className="font-label text-[10px] uppercase tracking-[0.2em]">
              &quot;Atmospheric Perfection&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
