import MenuItem from './MenuItem';

export default function SecondiSection() {
  return (
    <section className="mb-20 md:mb-40 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
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
        <div className="md:col-span-7">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative aspect-[16/9] overflow-hidden">
              <img
                alt="Secondi main course"
                className="w-full h-full object-cover"
                data-alt="Beautifully seared lamb rack served with roasted vegetables and a glossy red wine reduction on dark slate"
                src="/images/secondi-1.webp"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                alt="Detail of ingredients"
                className="w-full h-full object-cover"
                data-alt="Fresh purple artichokes and garden herbs on a marble surface with soft natural light"
                src="/images/secondi-2.webp"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-12">
              <img
                alt="Wine pairing"
                className="w-full h-full object-cover"
                data-alt="A glass of deep red Barolo wine standing next to a bottle in a dim, sophisticated cellar atmosphere"
                src="/images/secondi-3.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
