import AboutHero from './components/AboutHero';
import ZackLeeSection from './components/ZackLeeSection';
import WhyUs from './components/WhyUs';
import InvestmentProgram from './components/InvestmentProgram';
import PromoSection from './components/PromoSection';
import Commitment from './components/Commitment';

export default function CompanyProfilePage() {
  return (
    <main className="flex flex-col w-full min-h-screen  text-gray-800">
      <AboutHero />
      <ZackLeeSection />
      <WhyUs />
      <InvestmentProgram />
      <PromoSection />
      <Commitment />
    </main>
  );
}
