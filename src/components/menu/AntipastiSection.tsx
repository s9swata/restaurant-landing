import MenuItem from './MenuItem';

export default function AntipastiSection() {
  return (
    <section id="antipasti" className="mb-12 md:mb-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        <div className="md:col-span-5 md:sticky top-40">
          <h2 className="font-headline text-4xl mb-6">Antipasti</h2>
          <div className="w-24 h-px bg-primary-container mb-12"></div>
          <div className="space-y-12">
            <MenuItem
              image="/images/items/crudo-scampi.png"
              title="Crudo di Scampi"
              price="38"
              description="Langoustines from the Tyrrhenian Sea, cold-pressed citrus oil, sea fennel, and volcanic salt."
              labels={["Seasonal Garnish"]}
            />
            <MenuItem
              image="/images/items/burrata.png"
              title="Burrata in Cenere"
              price="32"
              description="Hand-tied burrata, vegetable ash, confit heirloom tomatoes, and aged balsamic pearls."
            />
            <MenuItem
              image="/images/items/wagyu-carpaccio.png"
              title="Carpaccio di Wagyu"
              price="45"
              description="A5 Kagoshima wagyu, porcini dust, truffle emulsion, and toasted hazelnuts."
            />
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col gap-12">
          <div className="relative overflow-hidden aspect-video md:aspect-[4/5] bg-surface-container-highest">
            <img
              alt="Antipasti presentation"
              className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700"
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
                &quot;The beginning of the ritual.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
