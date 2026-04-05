import MenuItem from './MenuItem';

export default function PrimiSection() {
  return (
    <section id="primi" className="mb-12 md:mb-32 bg-surface-container-low py-10 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="relative mb-12 md:mb-24">
            <img
              alt="Primi pasta"
              className="w-full h-48 sm:h-72 md:h-[600px] object-cover"
              src="/images/primi-pasta.webp"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-48 h-48 md:w-64 md:h-64 bg-surface p-4 md:p-8 hidden sm:block shadow-xl">
              <span className="font-label text-[9px] md:text-[10px] uppercase tracking-widest text-primary block mb-2 md:mb-4">
                Chef&apos;s Signature
              </span>
              <p className="font-headline text-xs md:text-sm leading-relaxed italic">
                The Tagliolini is hand-rolled daily at dawn, using 40 egg yolks
                per kilogram of flour.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          <h2 className="font-headline text-4xl mb-6">Primi</h2>
          <div className="w-24 h-px bg-primary-container mb-12"></div>
          <div className="space-y-12">
            <MenuItem
              image="/images/items/tagliolini-truffle.png"
              title="Tagliolini al Tartufo"
              price="52"
              description="House-made 40-egg yolk tagliolini, mountain butter, and freshly shaved black winter truffle."
              labels={["Limited Availability"]}
            />
            <MenuItem
              image="/images/items/risotto-gold.png"
              title="Risotto all'Oro"
              price="48"
              description="Acquerello carnaroli rice, 24k gold leaf, saffron pistils from Abruzzo, and bone marrow essence."
            />
            <MenuItem
              image="/images/items/pasta-tortelli.png"
              title="Tortelli di Zucca"
              price="42"
              description="Roasted pumpkin filling, crushed amaretti, sage brown butter, and parmigiano reggiano 36 months."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
