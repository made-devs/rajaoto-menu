// app/components/SocialSlider.jsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SocialSlider = ({ socialData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? socialData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === socialData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8 flex-grow">
      {/* Slider */}
      <div className="relative w-full max-w-xs px-8">
        {' '}
        {/* Padding horizontal ditambah di sini */}
        <div className="relative aspect-[9/19] w-full">
          <div className="overflow-hidden h-full rounded-[40px]">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {socialData.map((social, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-full relative"
                >
                  <Image
                    src={social.screenshot}
                    alt={`${social.name} screenshot`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-opacity" // Hapus -translate-x-1/2
          aria-label="Previous social media"
        >
          <ChevronLeft className="h-12 w-12" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-opacity" // Hapus translate-x-1/2
          aria-label="Next social media"
        >
          <ChevronRight className="h-12 w-12" />
        </button>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-white tracking-wider">
        SOSIAL MEDIA
      </h2>

      {/* Icons */}
      <div className="flex items-center justify-center gap-3">
        {socialData.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 relative"
          >
            <Image
              src={social.icon}
              alt={social.name}
              fill
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
