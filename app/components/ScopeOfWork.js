// app/components/ScopeOfWork.jsx
'use client';

import Image from 'next/image';

export const ScopeOfWork = () => {
  return (
    <div className="mt-12 mb-8">
      {/* --- Judul --- */}
      <div className="text-center text-white space-y-2 mb-8">
        <h2 className="text-3xl font-bold">TJM AUTO CARE</h2>
        <h3 className="text-2xl font-black tracking-wider">
          LINGKUP PEKERJAAN
        </h3>
      </div>

      {/* --- Gambar Utama --- */}
      <div className="w-full">
        <Image
          src="/image/compro2.webp"
          alt="Lingkup Pekerjaan TJM Auto Care"
          width={500}
          height={700}
          className="w-full h-auto"
        />
      </div>

      {/* --- Teks Konsep --- */}
      <div className="text-center text-white p-6 space-y-4 mt-4">
        <h3 className="text-xl font-black tracking-wider">
          DENGAN MENGUSUNG KONSEP
        </h3>
        <p className="font-semibold text-sm leading-relaxed">
          “BENGKEL MOBIL TERLENGKAP & TERDEPAN” KAMI MELAYANI BERBAGAI JENIS
          KENDARAAN DENGAN FASILITAS DAN PERALATAN MODERN SERTA TENAGA KERJA
          BERSERTIFIKAT DAN BERPENGALAMAN DI BIDANG OTOMOTIF.
        </p>
      </div>
    </div>
  );
};
