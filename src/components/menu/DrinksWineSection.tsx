import MenuItem from './MenuItem';

export default function DrinksWineSection() {
  return (
    <section className="mb-20 md:mb-40 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        {/* Text Column (Left on Desktop) */}
        <div className="md:col-span-5 md:sticky top-40">
          <div className="mb-20">
            <h2 className="font-headline text-4xl mb-6">Signature Cocktails</h2>
            <div className="w-24 h-px bg-primary-container mb-12"></div>
            <div className="space-y-12">
              <MenuItem
                image="/images/items/cocktail-negroni.png"
                title="Negroni Sbagliato"
                price="22"
                description="Campari, sweet vermouth, and Ferrari Maximum Blanc de Blancs."
              />
              <MenuItem
                image="/images/items/cocktail-negroni.png"
                title="L'Oro Martini"
                price="24"
                description="Italian gin, dry vermouth, and a house-cured golden olive."
              />
            </div>
          </div>

          <div>
            <h2 className="font-headline text-4xl mb-6">I Nostri Vini</h2>
            <div className="w-24 h-px bg-primary-container mb-12"></div>
            <div className="space-y-12">
              <MenuItem
                image="/images/items/wine-red.png"
                title="Chianti Classico Riserva"
                price="18/85"
                description="Antinori, 2018 - Tuscany. Deep red with notes of cherry and spice."
              />
              <MenuItem
                image="/images/items/wine-red.png"
                title="Barolo DOCG"
                price="25/120"
                description="Prunotto, 2017 - Piedmont. The 'King of Wines', intense and structured."
              />
            </div>
          </div>
        </div>

        {/* Image Column (Right on Desktop) */}
        <div className="md:col-span-7 flex flex-col gap-12">
          <div className="relative overflow-hidden aspect-[4/5] bg-surface-container-highest">
            <img
              alt="Wine Gallery"
              className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000"
              src="/images/wine-1.png"
            />
            <div className="absolute bottom-8 left-8 bg-surface-container/80 backdrop-blur-md px-6 py-4 border border-white/10 hidden md:block">
              <p className="font-headline italic text-lg text-primary">
                "La Cantina di l'Oro"
              </p>
              <p className="font-label text-[10px] uppercase tracking-widest mt-1">
                The Wine Cellar
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-surface-container-low overflow-hidden">
               <div className="w-full h-full p-8 flex flex-col justify-center border border-primary/10">
                 <span className="font-label text-[9px] uppercase tracking-widest text-primary mb-4 block">Sommelier Choice</span>
                 <p className="font-headline text-sm italic opacity-80 leading-relaxed">
                   "A great wine is like a great story—it reveals itself in layers."
                 </p>
               </div>
            </div>
            <div className="aspect-square bg-surface-container-low overflow-hidden">
              <img
                alt="Negroni Cocktail"
                className="w-full h-full object-cover"
                src="/images/items/cocktail-negroni.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
