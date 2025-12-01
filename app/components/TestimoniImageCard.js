'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimoniImageCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxOpen]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const lightboxPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const lightboxNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  const Lightbox = () => (
    <div
      className="fixed inset-0 z-[9999] bg-black/90"
      onClick={closeLightbox}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <button
        onClick={closeLightbox}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all"
        aria-label="Close"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div
        className="relative"
        style={{ width: '90vw', height: '80vh', maxWidth: '800px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[activeIndex].image}
          alt={`Testimoni ${activeIndex + 1}`}
          fill
          sizes="90vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Lightbox Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          lightboxPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          lightboxNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Counter Only */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );

  return (
    <>
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 flex-grow-0 basis-[70%] sm:basis-[50%] lg:basis-[35%] mr-4"
              >
                <div
                  className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={item.image}
                    alt={`Testimoni ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 70vw, (max-width: 1024px) 50vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 z-10 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 z-10 transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <p className="text-center text-xs text-gray-400 mt-3">
        Geser atau klik tombol untuk melihat foto lainnya
      </p>

      {mounted && lightboxOpen && createPortal(<Lightbox />, document.body)}
    </>
  );
}
