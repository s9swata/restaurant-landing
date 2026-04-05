import MenuItem from './MenuItem';

export default function DrinksWineSection() {
  return (
    <section id="drinks" className="mb-12 md:mb-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        <div className="md:col-span-5 md:sticky top-40">
          <div className="mb-16">
            <h2 className="font-headline text-4xl mb-6">Signature Cocktails</h2>
            <div className="w-24 h-px bg-primary-container mb-12"></div>
            <div className="space-y-12">
              <MenuItem
                image="/images/items/cocktail-negroni.png"
                title="Negroni Sbagliato"
                price="22"
                description="Prosecco, Campari, house vermouth blend, orange zest."
              />
              <MenuItem
                image="/images/items/cocktail-martini.png"
                title="L'Oro Martini"
                price="24"
                description="Bergamot-infused gin, dry vermouth, house-cured golden olive."
              />
            </div>
          </div>
          <div>
            <h2 className="font-headline text-4xl mb-6">Vini al Calice</h2>
            <div className="w-24 h-px bg-primary-container mb-12"></div>
            <div className="space-y-12">
              <MenuItem
                image="/images/items/wine-red.png"
                title="Barolo DOCG"
                price="28"
                description="Nebbiolo 2018 - Intense, structured, eternal."
              />
              <MenuItem
                image="/images/items/wine-white.png"
                title="Vermentino di Gallura"
                price="18"
                description="White flowers, sea salt, Mediterranean sun."
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="relative overflow-hidden aspect-video md:aspect-4/5 bg-surface-container-highest shadow-lg">
            <img
              alt="Wine and spirits"
              className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700"
              src="/images/wine-pour.png"
            />
            <div className="absolute top-8 right-8 bg-surface/95 backdrop-blur-md p-6 max-w-xs hidden sm:block border-l-2 border-primary/20">
              <p className="font-headline text-base md:text-lg italic text-primary">
                &quot;Wine is the geographic signature of the land, translated into a liquid poem.&quot;
              </p>
              <span className="block mt-4 font-label text-[10px] uppercase tracking-widest opacity-60">
                Sommelier Matteo Romano
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
