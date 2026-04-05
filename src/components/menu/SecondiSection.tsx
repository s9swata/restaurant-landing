import MenuItem from './MenuItem';

export default function SecondiSection() {
  return (
    <section id="secondi" className="mb-12 md:mb-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        <div className="md:col-span-5 md:sticky top-40">
          <h2 className="font-headline text-4xl mb-6">Secondi</h2>
          <div className="w-24 h-px bg-primary-container mb-12"></div>
          <div className="space-y-12">
            <MenuItem
              image="/images/items/turbot.png"
              title="Filetto di Rombo"
              price="58"
              description="Wild turbot fillet, charcoal-grilled artichokes, and a light champagne emulsion."
            />
            <MenuItem
              image="/images/items/lamb-rack.png"
              title="Agnello di Montagna"
              price="65"
              description="Dorset lamb rack in herb crust, smoked eggplant purée, and wild berry jus."
            />
            <MenuItem
              image="/images/items/beef-cheek.png"
              title="Guancia al Barolo"
              price="62"
              description="36-hour slow-cooked beef cheek in Barolo wine, parsnip cream, and dehydrated kale."
            />
          </div>
        </div>
        <div className="md:col-span-7 flex flex-col gap-12 pt-8 md:pt-0">
          <div className="relative overflow-hidden aspect-video md:aspect-4/5 bg-surface-container-highest shadow-lg">
            <img
              alt="Secondi main course"
              className="w-full h-full object-cover grayscale-[0.1] hover:scale-105 transition-transform duration-700"
              src="/images/secondi-1.webp"
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="aspect-square bg-surface-container-low overflow-hidden">
               <img
                alt="Detail course"
                className="w-full h-full object-cover opacity-80"
                src="/images/secondi-2.webp"
              />
            </div>
            <div className="flex flex-col justify-center p-4 border-l border-outline-variant/20 italic font-headline text-primary">
               "The essence of land and sea, balanced by fire."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
