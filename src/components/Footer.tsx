export default function Footer() {
  return (
    <footer className="bg-surface-container-low w-full py-20 px-12 mt-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-outline-variant/15">
      <div className="flex flex-col items-center md:items-start">
        <div className="text-lg font-serif text-on-surface mb-4">
          L&apos;Oro d&apos;Italia
        </div>
        <p className="font-['Manrope'] text-xs uppercase tracking-[0.2em] text-[#7f7667] max-w-xs text-center md:text-left">
          © 2024 L&apos;Oro d&apos;Italia Paris. Excellence in Viticulture &amp; Cuisine.
        </p>
      </div>
      <div className="flex gap-8 font-['Manrope'] text-xs uppercase tracking-[0.2em]">
        <a
          className="text-outline hover:text-primary transition-colors opacity-80 hover:opacity-100"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="text-outline hover:text-primary transition-colors opacity-80 hover:opacity-100"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="text-outline hover:text-primary transition-colors opacity-80 hover:opacity-100"
          href="#"
        >
          Press Kit
        </a>
        <a
          className="text-outline hover:text-primary transition-colors opacity-80 hover:opacity-100"
          href="#"
        >
          Careers
        </a>
      </div>
      <div className="flex gap-4">
        <a className="text-primary hover:opacity-70 transition-all" href="#">
          <span className="material-symbols-outlined">public</span>
        </a>
        <a className="text-primary hover:opacity-70 transition-all" href="#">
          <span className="material-symbols-outlined">camera</span>
        </a>
      </div>
    </footer>
  );
}
