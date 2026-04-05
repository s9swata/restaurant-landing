import TopNavBar from '@/components/TopNavBar';
import MenuFooter from '@/components/menu/MenuFooter';
import MenuHero from '@/components/menu/MenuHero';
import AntipastiSection from '@/components/menu/AntipastiSection';
import PrimiSection from '@/components/menu/PrimiSection';
import SecondiSection from '@/components/menu/SecondiSection';
import ContorniDolciSection from '@/components/menu/ContorniDolciSection';
import TastingMenuSection from '@/components/menu/TastingMenuSection';
import DrinksWineSection from '@/components/menu/DrinksWineSection';
import QuoteSection from '@/components/menu/QuoteSection';

export default function MenuPage() {
  return (
    <main id="menu" className="bg-surface min-h-screen">
      <TopNavBar />
      <div className="pt-32 md:pt-48">
        <MenuHero />
        <div className="space-y-32">
          <AntipastiSection />
          <PrimiSection />
          <SecondiSection />
          <ContorniDolciSection />
          <TastingMenuSection />
          <DrinksWineSection />
          <QuoteSection />
        </div>
      </div>
      <MenuFooter />
    </main>
  );
}
