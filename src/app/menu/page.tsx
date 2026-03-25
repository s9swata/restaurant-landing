import MenuTopNavBar from '@/components/menu/MenuTopNavBar';
import MenuHero from '@/components/menu/MenuHero';
import AntipastiSection from '@/components/menu/AntipastiSection';
import PrimiSection from '@/components/menu/PrimiSection';
import SecondiSection from '@/components/menu/SecondiSection';
import TastingMenuSection from '@/components/menu/TastingMenuSection';
import QuoteSection from '@/components/menu/QuoteSection';
import MenuFooter from '@/components/menu/MenuFooter';

export default function MenuPage() {
  return (
    <>
      <MenuTopNavBar />
      <main className="pt-32">
        <MenuHero />
        <AntipastiSection />
        <PrimiSection />
        <SecondiSection />
        <TastingMenuSection />
        <QuoteSection />
      </main>
      <MenuFooter />
    </>
  );
}
