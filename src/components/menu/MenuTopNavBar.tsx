export default function MenuTopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f3]/80 backdrop-blur-xl transition-all duration-300">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1920px] mx-auto">
        <div className="text-2xl font-headline font-light uppercase tracking-tighter text-on-background">
          Oro e Cenere
        </div>
        <div className="hidden md:flex items-center space-x-12">
          <a
            className="font-headline font-light tracking-wide text-primary border-b border-primary pb-1"
            href="#"
          >
            Menu
          </a>
          <a
            className="font-headline font-light tracking-wide text-on-background opacity-70 hover:opacity-100 transition-opacity"
            href="#"
          >
            Reservations
          </a>
          <a
            className="font-headline font-light tracking-wide text-on-background opacity-70 hover:opacity-100 transition-opacity"
            href="#"
          >
            Our Story
          </a>
          <a
            className="font-headline font-light tracking-wide text-on-background opacity-70 hover:opacity-100 transition-opacity"
            href="#"
          >
            Private Dining
          </a>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-sm font-label text-sm uppercase tracking-widest hover:bg-primary-container transition-colors duration-300">
          Book a Table
        </button>
      </div>
    </nav>
  );
}
