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

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.sectionId);
    const ratioMap = new Map<string, number>(sectionIds.map((id) => [id, 0]));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap.set(entry.target.id, entry.intersectionRatio);
        });
        // pick the section with the highest visibility ratio
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
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl flex justify-between items-center px-12 py-6 max-w-none transition-colors duration-500">
      <div className="text-2xl font-headline italic text-primary">
        L&apos;Oro d&apos;Italia
      </div>
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
      <button className="bg-primary text-on-primary px-8 py-3 rounded-sm font-label text-xs uppercase tracking-[0.2em] scale-95 duration-300 ease-in-out hover:scale-100 transition-transform">
        Book a Table
      </button>
    </nav>
  );
}

