// app/components/PromoDetailSlider.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const PromoDetailSlider = ({ slides, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex];

  return (
    <div className="space-y-4">
      <div className="relative px-10">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Image
                  src={slide.image}
                  alt={`Promo image ${index + 1}`}
                  width={400}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {slides.length > 1 && (
          <>
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
          </>
        )}
      </div>

      <div className="text-center px-4 space-y-2">
        {/* Judul promo dinamis di sini */}
        <h2 className="text-lg font-bold tracking-wide">{title}</h2>

        {/* Deskripsi hanya muncul jika ada dan akan merender HTML */}
        {currentSlide.description && (
          <p
            className="text-sm font-medium text-gray-300"
            dangerouslySetInnerHTML={{ __html: currentSlide.description }}
          />
        )}
      </div>
    </div>
  );
};
