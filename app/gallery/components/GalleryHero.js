'use client';

import Image from 'next/image';

export default function GalleryHero() {
  return (
    <div className="relative w-full">
      <Image
        src="/bg-text-hero.webp"
        alt="Gallery Background"
        width={1920}
        height={400}
        className="w-full h-auto mt-[7rem] md:mt-[10rem]"
        priority={true}
      />

      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black text-lg md:text-[32px] font-extrabold z-10 px-4 md:px-6 whitespace-nowrap">
        GALERI RAJA OTO
      </h1>
    </div>
  );
}
