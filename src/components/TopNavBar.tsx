'use client';

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Menu', href: '#menu', sectionId: 'menu' },
  { label: 'Reservations', href: '#reservations', sectionId: 'reservations' },
  { label: 'Our Story', href: '#our-story', sectionId: 'our-story' },
  { label: 'Location', href: '#location', sectionId: 'location' },
] as const;

type SectionId = (typeof NAV_LINKS)[number]['sectionId'] | '';

export default function TopNavBar() {
  const [active, setActive] = useState<SectionId>('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.sectionId);
    const ratioMap = new Map<string, number>(sectionIds.map((id) => [id, 0]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap.set(entry.target.id, entry.intersectionRatio);
        });
        let topId: SectionId = '';
        let topRatio = 0;
        ratioMap.forEach((ratio, id) => {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id as SectionId;
          }
        });
        if (topRatio > 0) setActive(topId);
      },
      { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl transition-colors duration-500">
      {/* Main bar */}
      <div className="flex justify-between items-center px-6 md:px-12 py-5 md:py-6">
        <div className="text-2xl font-headline italic text-primary">
          L&apos;Oro d&apos;Italia
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-12 font-headline font-light tracking-wide">
          {NAV_LINKS.map(({ label, href, sectionId }) => {
            const isActive = active === sectionId;
            return (
              <a
                key={sectionId}
                href={href}
                onClick={() => setActive(sectionId)}
                className={`transition-all ${
                  isActive
                    ? 'text-primary border-b border-primary pb-1'
                    : 'text-on-surface opacity-80 hover:opacity-100 hover:text-primary'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-primary text-on-primary px-8 py-3 rounded-sm font-label text-xs uppercase tracking-[0.2em] scale-95 duration-300 ease-in-out hover:scale-100 transition-transform">
            Book a Table
          </button>
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-6 h-[1.5px] bg-on-surface transition-transform duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-on-surface transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-on-surface transition-transform duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-96 border-t border-outline-variant/15' : 'max-h-0'
        } bg-surface/95 backdrop-blur-xl`}
      >
        <div className="flex flex-col px-6 py-4 gap-0">
          {NAV_LINKS.map(({ label, href, sectionId }) => {
            const isActive = active === sectionId;
            return (
              <a
                key={sectionId}
                href={href}
                onClick={() => {
                  setActive(sectionId);
                  setMenuOpen(false);
                }}
                className={`py-4 font-headline font-light tracking-wide border-b border-outline-variant/10 last:border-0 transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface opacity-80'
                }`}
              >
                {label}
              </a>
            );
          })}
          <a
            href="#reservations"
            onClick={() => setMenuOpen(false)}
            className="mt-4 bg-primary text-on-primary py-3 rounded-sm font-label text-xs uppercase tracking-[0.2em] text-center"
          >
            Book a Table
          </a>
        </div>
      </div>
    </nav>
  );
}


