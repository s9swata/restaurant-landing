export default function AntipastiSection() {
  return (
    <section className="mb-20 md:mb-40 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-5 md:sticky top-40">
          <h2 className="font-headline text-4xl mb-6">Antipasti</h2>
          <div className="w-24 h-px bg-primary-container mb-12"></div>
          <div className="space-y-16">
            <div className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline text-xl text-on-surface">
                  Crudo di Scampi
                </h3>
                <span className="text-primary font-label text-sm tracking-widest">
                  38
                </span>
              </div>
              <p className="text-outline font-body leading-relaxed mb-3">
                Langoustines from the Tyrrhenian Sea, cold-pressed citrus oil,
                sea fennel, and volcanic salt.
              </p>
              <span className="inline-block bg-secondary-container/40 px-3 py-1 rounded-sm text-on-secondary-container font-label text-[10px] uppercase tracking-wider">
                Seasonal Garnish
              </span>
            </div>
            <div className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline text-xl text-on-surface">
                  Burrata in Cenere
                </h3>
                <span className="text-primary font-label text-sm tracking-widest">
                  32
                </span>
              </div>
              <p className="text-outline font-body leading-relaxed">
                Hand-tied burrata, vegetable ash, confit heirloom tomatoes, and
                aged balsamic pearls.
              </p>
            </div>
            <div className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline text-xl text-on-surface">
                  Carpaccio di Wagyu
                </h3>
                <span className="text-primary font-label text-sm tracking-widest">
                  45
                </span>
              </div>
              <p className="text-outline font-body leading-relaxed">
                A5 Kagoshima wagyu, porcini dust, truffle emulsion, and toasted
                hazelnuts.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col gap-12">
          <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-highest">
            <img
              alt="Antipasti presentation"
              className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700"
              data-alt="Gourmet Italian appetizer on a textured ceramic plate with artistic plating of seafood and herbs in dramatic lighting"
              src="/images/antipasto-1.webp"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-surface-container-low overflow-hidden">
              <img
                alt="Fine dining details"
                className="w-full h-full object-cover"
                data-alt="Close-up of artisan bread and high-quality olive oil in a minimalist setting with soft afternoon shadows"
                src="/images/antipasto-2.webp"
              />
            </div>
            <div className="flex flex-col justify-end p-4 border-l border-outline-variant/20">
              <p className="font-headline italic text-lg text-secondary">
                "The beginning of the ritual."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
