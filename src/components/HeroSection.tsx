export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-on-surface/30 z-10"></div>
      <img
        alt="Elegant Parisian dining room"
        className="absolute inset-0 w-full h-full object-cover"
        data-alt="Luxurious dining room with Eiffel Tower view"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJwa61HZBhd6B4RPO7gmUE9JMbiyvcIvIWbYNWdHo_6ssO0-hwIjsZ9O4XJ0uIFWm53N3WaNYjGAQW9JOmDn_f3WahsxXWKd1TZeQhNPtiJmWWhmRePtUefdZEQnszf78F1geVaw7tnmows8jv0p7m1RdhCPE2bM563i-ajZrEEFAffElPiholDmiv5CCykn6Dr33JwogYpY-fzu76IdAg7gi9vFfDhl1EZIYoJ9o-UYg_TmZR52RKH0esZyAvjm0RQb--3ofLAM4x"
      />
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <span className="block font-label text-xs uppercase tracking-[0.4em] text-surface mb-6 opacity-90">
          Paris · 1st Arrondissement
        </span>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-surface leading-tight mb-8 font-light">
          The Soul of Italy,<br />
          <span className="italic font-normal">the Heart of Paris</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-surface/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          A culinary journey where tradition meets contemporary artistry,
          crafted under the light of three Michelin stars.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-primary text-on-primary px-10 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] transition-all hover:bg-primary-container">
            Reservations
          </button>
          <button className="border border-surface/30 backdrop-blur-md text-surface px-10 py-5 rounded-sm font-label text-xs uppercase tracking-[0.2em] transition-all hover:bg-surface hover:text-on-surface">
            View Menu
          </button>
        </div>
      </div>
      <div className="absolute bottom-12 left-12 z-20 hidden lg:block">
        <div className="flex gap-1">
          <span
            className="material-symbols-outlined text-primary text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-primary text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span
            className="material-symbols-outlined text-primary text-sm"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
        </div>
        <p className="font-label text-[10px] uppercase tracking-widest text-surface mt-2">
          Michelin Excellence 2024
        </p>
      </div>
    </section>
  );
}
