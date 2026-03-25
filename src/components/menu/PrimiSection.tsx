export default function PrimiSection() {
  return (
    <section className="mb-40 bg-surface-container-low py-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="relative mb-24">
            <img
              alt="Primi pasta"
              className="w-full h-[600px] object-cover"
              data-alt="Exquisite handmade pasta dish with golden truffles and a rich creamy sauce on an elegant white plate"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOGpcw0Xh_ReHsjm8vGjxTQPz-MNCTFsPD5G5-5ZUDLtyLZgLX7wwr8dsTE6hp2JGmA5oaGrVRMQ6R6H-RIBghIpNJ_tHzpK4qFYQTsre2VQPWuMfujL318orKfhj5FwxgEMENVe0KQMzpDe4-Cf60aV6L4ZlOa5o-RD2WlFP5-ra1luxtI27Px79rWnG29PVHje6AmuiHrKcZraEWm4DRkeQ2PFLTiQuUqqHBt9JygXZtig1wwfNdabPJ63CYnryLdT09NGGdapNN"
            />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-surface p-8 hidden md:block shadow-xl">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary block mb-4">
                Chef's Signature
              </span>
              <p className="font-headline text-sm leading-relaxed italic">
                The Tagliolini is hand-rolled daily at dawn, using 40 egg yolks
                per kilogram of flour.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          <h2 className="font-headline text-4xl mb-6">Primi</h2>
          <div className="w-24 h-px bg-primary-container mb-12"></div>
          <div className="space-y-16">
            <div className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline text-xl text-on-surface">
                  Tagliolini al Tartufo
                </h3>
                <span className="text-primary font-label text-sm tracking-widest">
                  52
                </span>
              </div>
              <p className="text-outline font-body leading-relaxed mb-3">
                House-made 40-egg yolk tagliolini, mountain butter, and freshly
                shaved black winter truffle.
              </p>
              <span className="inline-block bg-secondary-container/40 px-3 py-1 rounded-sm text-on-secondary-container font-label text-[10px] uppercase tracking-wider">
                Limited Availability
              </span>
            </div>
            <div className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline text-xl text-on-surface">
                  Risotto all'Oro
                </h3>
                <span className="text-primary font-label text-sm tracking-widest">
                  48
                </span>
              </div>
              <p className="text-outline font-body leading-relaxed">
                Acquerello carnaroli rice, 24k gold leaf, saffron pistils from
                Abruzzo, and bone marrow essence.
              </p>
            </div>
            <div className="group cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-headline text-xl text-on-surface">
                  Tortelli di Zucca
                </h3>
                <span className="text-primary font-label text-sm tracking-widest">
                  42
                </span>
              </div>
              <p className="text-outline font-body leading-relaxed">
                Roasted pumpkin filling, crushed amaretti, sage brown butter,
                and parmigiano reggiano 36 months.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
