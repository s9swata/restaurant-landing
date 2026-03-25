import MenuHero from '@/components/menu/MenuHero';
import AntipastiSection from '@/components/menu/AntipastiSection';
import PrimiSection from '@/components/menu/PrimiSection';
import SecondiSection from '@/components/menu/SecondiSection';
import TastingMenuSection from '@/components/menu/TastingMenuSection';
import QuoteSection from '@/components/menu/QuoteSection';

export default function MenuSection() {
  return (
    <section id="menu">
      <MenuHero />
      <AntipastiSection />
      <PrimiSection />
      <SecondiSection />
      <TastingMenuSection />
      <QuoteSection />
    </section>
  );
}
