// app/components/VisionMission.jsx
'use client';

import Image from 'next/image';

const MissionItem = ({ number, text }) => (
  <li className="flex items-start gap-4">
    <span className="font-bold text-lg">{number}.</span>
    <p className="font-semibold leading-relaxed flex-1">{text}</p>
  </li>
);

export const VisionMission = () => {
  const missions = [
    'MEMBERIKAN LAYANAN OTOMOTIF BERKUALITAS TINGGI Menyediakan perawatan dan perbaikan kendaraan dengan standar profesional, didukung mekanik bersertifikat dan teknologi terkini.',
    'MENGHADIRKAN SOLUSI LENGKAP DALAM SATU TEMPAT Menjadi “one stop solution” untuk segala kebutuhan otomotif, mulai dari servis ringan, AC, detailing, gurah mesin hingga proteksi anti karat.',
    'MENGUTAMAKAN KEPUASAN DAN KENYAMANAN PELANGGAN Menyediakan layanan cepat, transparan, dan ramah dengan fasilitas pendukung seperti ruang tunggu nyaman dan sistem booking online.',
    'MENINGKATKAN AKSESIBILITAS LEWAT LAYANAN PROMO & PROGRAM KEMITRAAN Memberikan promo DAN BONUS RUTIN SENILAI RATUSAN JUTA RUPIAH SETIAP BULANNYA, serta program referral dan fleet service partnership untuk pelanggan individu maupun korporasi.',
    'MENGEMBANGKAN SDM DAN INOVASI SECARA BERKELANJUTAN Melatih tim secara berkala dan mengadopsi inovasi otomotif terbaru agar dapat selalu memberikan solusi terbaik bagi pelanggan.',
    'MENJADI MITRA PERAWATAN MOBIL YANG ANDAL DAN BERKELANJUTAN Membangun hubungan jangka panjang dengan pelanggan melalui kepercayaan, transparansi, dan hasil kerja yang memuaskan.',
  ];

  return (
    <section className="py-8 text-white">
      <div className="px-4">
        {/* --- VISI --- */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">VISI TJM GROUP</h2>
          <p className="text-lg font-semibold leading-relaxed max-w-xl mx-auto">
            Menjadi bengkel mobil terlengkap, terdepan dan terpercaya di
            Indonesia yang memberikan layanan berkualitas tinggi, pengalaman
            pelanggan terbaik, serta nilai tambah melalui inovasi dan promo yang
            menguntungkan.
          </p>
        </div>
      </div>

      <Image
        src="/redline.webp"
        alt="Redline separator"
        width={500}
        height={5}
        className="w-full rotate-180 h-auto my-8"
      />

      <div className="px-4">
        {/* --- MISI --- */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">MISI TJM GROUP</h2>
          <ul className="space-y-6 text-left max-w-xl mx-auto">
            {missions.map((mission, index) => (
              <MissionItem key={index} number={index + 1} text={mission} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
