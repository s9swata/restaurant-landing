import TopNavBar from '@/components/TopNavBar';
import HeroSection from '@/components/HeroSection';
import OurStorySection from '@/components/OurStorySection';
import SignatureMenuSection from '@/components/SignatureMenuSection';
import ExperienceLocationSection from '@/components/ExperienceLocationSection';
import AccoladesSection from '@/components/AccoladesSection';
import ReservationsSection from '@/components/ReservationsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <OurStorySection />
        <SignatureMenuSection />
        <ExperienceLocationSection />
        <AccoladesSection />
        <ReservationsSection />
      </main>
      <Footer />
    </>
  );
}
