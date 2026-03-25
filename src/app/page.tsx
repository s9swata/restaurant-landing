import TopNavBar from '@/components/TopNavBar';
import HeroSection from '@/components/HeroSection';
import OurStorySection from '@/components/OurStorySection';
import MenuSection from '@/components/MenuSection';
import ExperienceLocationSection from '@/components/ExperienceLocationSection';
import AccoladesSection from '@/components/AccoladesSection';
import ReservationsSection from '@/components/ReservationsSection';
import MenuFooter from '@/components/menu/MenuFooter';

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <OurStorySection />
        <MenuSection />
        <ExperienceLocationSection />
        <AccoladesSection />
        <ReservationsSection />
      </main>
      <MenuFooter />
    </>
  );
}

