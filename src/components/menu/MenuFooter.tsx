export default function MenuFooter() {
  return (
    <footer className="bg-[#f6f3ed] dark:bg-[#151512] w-full py-20 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-start text-center md:text-left">
        <div className="space-y-6">
          <div className="text-xl font-headline text-on-background">
            Oro e Cenere
          </div>
          <p className="font-body text-sm text-outline max-w-xs leading-relaxed">
            Via della Conciliazione, 15
            <br />
            00193 Roma RM, Italy
          </p>
          <p className="font-body text-sm text-outline">
            reservations@oroecenere.it
            <br />
            +39 06 123 4567
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-primary mb-2">
            Connect
          </span>
          <a
            className="font-body text-sm text-outline hover:text-on-background transition-colors"
            href="#"
          >
            Instagram
          </a>
          <a
            className="font-body text-sm text-outline hover:text-on-background transition-colors"
            href="#"
          >
            Michelin Guide
          </a>
          <a
            className="font-body text-sm text-outline hover:text-on-background transition-colors"
            href="#"
          >
            TableCheck
          </a>
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex justify-center md:justify-start gap-8">
            <a
              className="font-label text-sm tracking-widest uppercase text-outline hover:text-on-background transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-label text-sm tracking-widest uppercase text-outline hover:text-on-background transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
          <div className="pt-8 border-t border-outline-variant/20 font-label text-sm tracking-widest uppercase text-outline">
            © 2024 Oro e Cenere. Crafted for the Discerning Palette.
          </div>
        </div>
      </div>
    </footer>
  );
}
