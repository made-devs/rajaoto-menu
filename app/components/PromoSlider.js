// app/components/PromoSlider.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PromoSlider = ({ promos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
  };

  if (!promos || promos.length === 0) {
    return null;
  }

  const currentPromo = promos[currentIndex];

  return (
    <div className="space-y-4">
      <div className="relative px-10">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {promos.map((promo, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-opacity hover:bg-black/80"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-opacity hover:bg-black/80"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="text-center space-y-4">
        <h2 className="text-xl font-bold">{currentPromo.title}</h2>
        <Link
          href={`/promo/${currentPromo.slug}`}
          className="inline-block rounded-full border border-red-600 bg-gradient-to-br from-[#484149] via-[#333238] to-[#1F1D20] px-8 py-2 text-sm font-bold text-white shadow-md transition-transform hover:scale-105"
        >
          SELENGKAPNYA
        </Link>
      </div>
    </div>
  );
};
