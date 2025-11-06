// app/components/TjmGroup.jsx
'use client';

import Image from 'next/image';

export const TjmGroup = () => {
  return (
    <section className="py-8 px-4">
      {/* --- TJM GROUP Section --- */}
      <div className="grid grid-cols-2 gap-4 items-center">
        {/* Left Image */}
        <div className="relative w-full aspect-[4/8] rounded-2xl overflow-hidden">
          <Image
            src="/image/compro3.webp"
            alt="TJM Group Workshop"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Text Boxes */}
        <div className="space-y-4 text-white text-center">
          <h2 className="text-xl font-bold mb-4">TJM GROUP</h2>
          <div className="p-3 border-2 border-red-600 rounded-2xl bg-gradient-to-br from-[#484149] via-[#333238] to-[#1F1D20]">
            <p className="text-[10px] font-semibold leading-relaxed">
              BERPENGALAMAN DI OTOMOTIF, MEMILIKI 25 CABANG DI INDONESIA, 15
              LINI BISNIS, DAN DIKENAL SEBAGAI PELOPOR BENGKEL DENGAN PROMO
              SERTA PAKET TERLENGKAP.
            </p>
          </div>
          <div className="p-3 border-2 border-red-600 rounded-2xl bg-gradient-to-br from-[#484149] via-[#333238] to-[#1F1D20]">
            <p className="text-[10px] font-semibold leading-relaxed">
              KAMI JUGA MEMILIKI RATUSAN RIBU PELANGGAN AKTIF DAN DENGAN RATUSAN
              RIBU PENGIKUT ASLI DI MEDIA SOSIAL DAN DIDUKUNG OLEH TIM AHLI.
            </p>
          </div>
        </div>
      </div>

      {/* --- #pasticepat Section --- */}
      <div className="mt-16 text-center text-white">
        <h2 className="text-2xl font-black italic mb-4">#pasticepat</h2>
        <div className="space-y-4 text-sm font-semibold leading-relaxed max-w-xl mx-auto">
          <p>
            TAGLINE KAMI TIDAK HANYA MENUNJUKAN BAHWA TJM AUTO CARE MELAKUKAN
            LAYANAN YANG CEPAT TETAPI JUGA TEPAT UNTUK SOLUSI KENDARAAN ANDA.
          </p>
          <p>
            DI BEKALI DENGAN SOP YANG SUDAH TERSTANDARISASI SERTA TRAINER YANG
            BERSERTIFIKASI SEHINGGA MEMBERIKAN RASA NYAMAN DAN AMAN SETELAH ANDA
            SERVICE DAN PERAWATAN DI TJM AUTO CARE.
          </p>
        </div>
      </div>
    </section>
  );
};
