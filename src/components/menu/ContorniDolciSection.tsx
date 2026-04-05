import MenuItem from './MenuItem';

export default function ContorniDolciSection() {
  return (
    <section id="contorni" className="mb-12 md:mb-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* Text Column (Left on Desktop) */}
        <div className="md:col-span-5 md:sticky top-40">
          <div className="mb-20">
            <h2 className="font-headline text-4xl mb-6">Contorni</h2>
            <div className="w-24 h-px bg-primary-container mb-12"></div>
            <div className="space-y-12">
              <MenuItem
                image="/images/items/side-potatoes.png"
                title="Patate al Forno"
                price="12"
                description="Triple-cooked mountain potatoes with wild rosemary and smoked sea salt."
              />
              <MenuItem
                image="/images/items/side-zucchini.png"
                title="Fiori di Zucca"
                price="18"
                description="Tempura zucchini flowers stuffed with buffalo ricotta and salted anchovies."
              />
            </div>
          </div>

          <div>
            <h2 className="font-headline text-4xl mb-6">Dolci</h2>
            <div className="w-24 h-px bg-primary-container mb-12"></div>
            <div className="space-y-12">
              <MenuItem
                image="/images/items/tiramisu.png"
                title="Tiramisù al Pistacchio"
                price="18"
                description="Bronte pistachio cream, espresso-soaked savoiardi, and white chocolate shavings."
              />
              <MenuItem
                image="/images/items/dessert-millefoglie.png"
                title="Millefoglie"
                price="20"
                description="Hand-folded puff pastry, Tahitian vanilla chantilly, and seasonal wild berries."
              />
            </div>
          </div>
        </div>

        {/* Images Column (Right on Desktop) */}
        <div className="md:col-span-7 flex flex-col gap-12">
          <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-highest">
            <img
              alt="Millefoglie Dessert"
              className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-1000"
              src="/images/items/dessert-millefoglie.png"
            />
            <div className="absolute top-8 right-8 bg-surface-container/80 backdrop-blur-md px-6 py-4 border border-white/10 hidden md:block">
              <p className="font-headline italic text-lg text-primary">
                "Pasticceria d'Autore"
              </p>
              <p className="font-label text-[10px] uppercase tracking-widest mt-1">
                Fine Patisserie
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-surface-container-low overflow-hidden">
              <img
                alt="Rosemary Potatoes"
                className="w-full h-full object-cover grayscale-[0.3]"
                src="/images/items/side-potatoes.png"
              />
            </div>
            <div className="aspect-square bg-surface-container-low overflow-hidden md:translate-y-12">
              <img
                alt="Zucchini Flowers"
                className="w-full h-full object-cover"
                src="/images/items/side-zucchini.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
