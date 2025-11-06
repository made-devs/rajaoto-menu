// app/components/AboutUs.jsx
"use client";

import Image from "next/image";

export const AboutUs = () => {
  return (
    <div className="mt-8">
      <div className="px-4"></div>

      <div className="relative text-center my-8">
        <div className="relative inline-block px-4">
          <Image
            src="/image/bg-comprotext.webp"
            alt="Background"
            width={345}
            height={40}
            className="w-full h-auto"
          />
          <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl font-black tracking-wider">
            TENTANG KAMI
          </h3>
        </div>
      </div>

      <div className="text-center text-white px-6 space-y-4">
        <p className="font-bold leading-relaxed">
          MERUPAKAN KEMITRAAN BERBASIS DIGITAL DENGAN LAYANAN QUICK SERVICE -
          HEAVY SERVICE.
        </p>
        <p className="font-semibold leading-relaxed">
          KAMI MEMULAI LAYANAN DENGAN METODE HOME SERVICE PADA TAHUN 2020 DAN
          MEMBUKA CABANG PERTAMA DI BEKASI DAN SEKARANG SUDAH TERSEBAR DI 25
          KOTA BESAR DI INDONESIA.
        </p>
      </div>
    </div>
  );
};
