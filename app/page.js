// app/page.jsx

import { Hero } from './components/Hero';
import { ServiceSection } from './components/ServiceSection';
import { promoData } from './data/promo';

export default function HomePage() {
  // Get month name from validUntil of the first promo (e.g. '2026-05-31')
  const getPromoMonth = () => {
    if (!promoData || promoData.length === 0) return 'Mei';
    const dateStr = promoData[0].validUntil; // '2026-05-31'
    const monthIndex = parseInt(dateStr.split('-')[1], 10) - 1;
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    return months[monthIndex] || 'Mei';
  };

  const monthName = getPromoMonth();

  return (
    <>
      <div className="text-center mt-30 px-10">
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 border border-[#FFD700]/30 rounded-full bg-[#FFD700]/5 backdrop-blur-md">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FFD700]"></span>
          </span>
          <span className="text-[#FFD700] text-sm font-bold tracking-widest uppercase">
            Limited Time Offer
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Flash Sale <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
            Bulan {monthName}
          </span>
        </h2>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
          Nikmati berbagai promo eksklusif Flash Sale Bulan {monthName}.
          Penawaran terbatas!
        </p>
      </div>
      <Hero />
      <ServiceSection />
    </>
  );
}

