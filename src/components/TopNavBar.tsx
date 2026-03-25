export default function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-12 py-6 max-w-none transition-colors duration-500">
      <div className="text-2xl font-serif italic text-primary">
        L&apos;Oro d&apos;Italia
      </div>
      <div className="hidden md:flex items-center gap-12 font-['Noto_Serif'] font-light tracking-wide">
        <a
          className="text-on-surface opacity-80 hover:opacity-100 hover:text-primary transition-all"
          href="#menu"
        >
          Menu
        </a>
        <a
          className="text-primary border-b border-primary/30 pb-1 hover:opacity-100 transition-all"
          href="#reservations"
        >
          Reservations
        </a>
        <a
          className="text-on-surface opacity-80 hover:opacity-100 hover:text-primary transition-all"
          href="#"
        >
          Our Story
        </a>
        <a
          className="text-on-surface opacity-80 hover:opacity-100 hover:text-primary transition-all"
          href="#"
        >
          Location
        </a>
      </div>
      <button className="bg-primary text-on-primary px-8 py-3 rounded-sm font-label text-xs uppercase tracking-[0.2em] scale-95 duration-300 ease-in-out hover:scale-100 transition-transform">
        Book a Table
      </button>
    </nav>
  );
}
