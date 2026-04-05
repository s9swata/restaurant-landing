import MenuItem from './MenuItem';

export default function TastingMenuSection() {
  return (
    <section className="mb-20 md:mb-40 py-24 md:py-48 px-4 md:px-8 bg-surface text-on-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center mb-24">
        <span className="font-label text-[10px] uppercase tracking-[0.5em] text-primary block mb-6">
          The Ultimate Experience
        </span>
        <h2 className="font-headline text-5xl md:text-7xl mb-8">Percorso d'Oro</h2>
        <p className="font-body text-lg text-outline max-w-2xl mx-auto leading-relaxed italic">
          "A curated seven-course journey through the heart of Italy, 
          reimagined for the modern palate."
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-b border-outline-variant/30 py-16">
          <div className="space-y-10">
            <MenuItem
              image="/images/items/crudo-scampi.png"
              title="I. Benvenuto"
              price=""
              description="Chef's daily inspiration from the sea."
            />
            <MenuItem
              image="/images/items/burrata.png"
              title="II. L'Inizio"
              price=""
              description="Burrata in cenere, volcanic essence."
            />
            <MenuItem
              image="/images/items/risotto-gold.png"
              title="III. La Tradizione"
              price=""
              description="Saffron risotto with 24k gold leaf."
            />
          </div>
          <div className="space-y-10">
            <MenuItem
              image="/images/items/tagliolini-truffle.png"
              title="IV. Il Pregiato"
              price=""
              description="Hand-rolled tagliolini, black winter truffle."
            />
            <MenuItem
              image="/images/items/beef-cheek.png"
              title="V. La Memoria"
              price=""
              description="Slow-cooked beef cheek, Barolo reduction."
            />
            <MenuItem
              image="/images/items/tiramisu.png"
              title="VI. La Dolcezza"
              price=""
              description="Pistachio tiramisù, deconstructed."
            />
          </div>
        </div>

        <div className="text-center">
            <div className="inline-block p-12 bg-surface-container-low border border-primary/5">
                <p className="font-label text-sm tracking-widest text-primary mb-4">DEGUSTAZIONE</p>
                <p className="font-headline text-3xl mb-2">185 per person</p>
                <p className="text-outline text-xs uppercase tracking-widest">+95 Optional Wine Pairing</p>
            </div>
        </div>
      </div>
    </section>
  );
}
