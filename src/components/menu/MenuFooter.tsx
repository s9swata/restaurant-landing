export default function MenuFooter() {
  return (
    <footer className="bg-[#f6f3ed] dark:bg-[#151512] w-full py-20 px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto items-start text-center md:text-left">
        <div className="space-y-6">
          <div className="text-xl font-headline text-on-background">
            L&apos;Oro d&apos;Italia
          </div>
          <p className="font-body text-sm text-outline max-w-xs leading-relaxed">
            22 Rue de Rivoli
            <br />
            75001 Paris, France
          </p>
          <p className="font-body text-sm text-outline">
            reservations@lorditalia.fr
            <br />
            +33 1 40 20 40 00
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
            © 2026 L&apos;Oro d&apos;Italia Paris. Excellence in Viticulture &amp; Cuisine.
          </div>
        </div>
      </div>
    </footer>
  );
}
