import AboutHero from './components/AboutHero';
import ZackLeeSection from './components/ZackLeeSection';
import WhyUs from './components/StandardService';
import InvestmentProgram from './components/InvestmentProgram';
import PromoSection from './components/PromoSection';
import Commitment from './components/Commitment';
import VisiMisi from './components/VisiMisi';
import StandardService from './components/StandardService';
import { Hero } from '../components/Hero';

export default function CompanyProfilePage() {
  return (
    <main className="flex flex-col w-full min-h-screen  text-gray-800">
      <Hero />
      <ZackLeeSection />
      <AboutHero />
      <VisiMisi />
      <StandardService />
      {/* <InvestmentProgram /> */}
      {/* <PromoSection /> */}
      <Commitment />
    </main>
  );
}
