// app/components/CompanyProfile.jsx
'use client';

import Image from 'next/image';

export const CompanyProfile = () => {
  return (
    <section>
      {/* --- Title Section --- */}
      <div className="relative text-center my-8">
        <div className="relative inline-block">
          <Image
            src="/image/bg-comprotext.webp"
            alt="Background"
            width={345}
            height={40}
            className="w-full h-auto"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-black tracking-wider">
            COMPANY PROFILE
          </h1>
        </div>
        <h2 className="text-white text-3xl font-extrabold">TJM AUTO CARE</h2>
      </div>

      {/* --- Main Image Section --- */}
      <div className="px-4">
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
          <Image
            src="/image/compro1.webp"
            alt="TJM Auto Care Workshop"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* --- Services Text Section --- */}
      <div className="text-center text-white p-6 space-y-2">
        <h3 className="font-extrabold tracking-wider">
          MENAWARKAN LAYANAN PERAWATAN MOBIL
        </h3>
        <p className="text-sm font-semibold leading-relaxed">
          SERVICE BERKALA | OLI | SPOORING & BALANCING | TUNE UP | BAN | AC
          RINGAN | FLUSHING OLI TRANSMISI | ANTI KARAT | KAKI-KAKI | COATING |
          DETAILING
        </p>
      </div>
    </section>
  );
};
