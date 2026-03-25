export default function TastingMenuSection() {
  return (
    <section className="mb-40 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-primary text-on-primary p-12 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.3em] opacity-80 mb-6 block">
              The Ultimate Expression
            </span>
            <h2 className="font-headline text-5xl font-light mb-8">
              Gran Degustazione "Cenere"
            </h2>
            <p className="font-body text-lg opacity-90 max-w-md leading-relaxed">
              A 10-course odyssey curated by Chef Bianchi, exploring the
              elemental relationship between fire, smoke, and pure ingredients.
            </p>
          </div>
          <div className="flex items-center gap-8 border-t border-on-primary/20 pt-8 mt-12">
            <div className="flex flex-col">
              <span className="font-label text-[10px] uppercase opacity-60">
                Full Experience
              </span>
              <span className="font-headline text-2xl">245</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label text-[10px] uppercase opacity-60">
                Wine Pairing
              </span>
              <span className="font-headline text-2xl">180</span>
            </div>
            <button className="ml-auto bg-surface-container-lowest text-primary px-8 py-3 rounded-sm font-label text-xs uppercase tracking-[0.2em] hover:bg-surface-container-high transition-colors">
              Reserve Now
            </button>
          </div>
        </div>
        <div className="bg-surface-container-high relative overflow-hidden flex items-center justify-center p-8 group">
          <img
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-40 group-hover:scale-110 transition-transform duration-1000"
            data-alt="Abstract close-up of charcoal embers glowing with a soft orange light, evoking a kitchen fire"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC7YHrKTv_chNyB7xBav-g8JcCBlYJI20A_tUWxFwZCK5v8Sdorgx_4267IMPfjSnhsfwgimUef3TH5PK7EMFIVplwuD7c7X1pptOFrSsP8o1SGvzFC3Kz2Ggoqq53mFsvRxodIOwH636jmRUmbIa4oD6Xya9xODKjSuvRpCIE92cjk_qRfsbZcd8TZZc2IlanQP2AV7-Beldjol4Q_OXowIPbw-IKZ3TkmhvFl8FoikwdFK45-u1PH20V5m7Ehng66lZqNs3SoX1s"
          />
          <div className="relative z-10 text-center">
            <h3 className="font-headline text-2xl mb-4 italic">Dolci</h3>
            <p className="font-body text-sm text-outline mb-6">
              The sweetness of the embers.
            </p>
            <a
              className="font-label text-[10px] uppercase tracking-widest border-b border-outline pb-1 hover:text-primary transition-colors"
              href="#"
            >
              View Selection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
