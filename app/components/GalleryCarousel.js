'use client';

import { useCallback, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export function GalleryCarousel({ images, title }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Pastikan component sudah mounted di client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll saat lightbox terbuka
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

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const lightboxPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const lightboxNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  // Lightbox Component
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
      {/* Close Button */}
      <button
        onClick={closeLightbox}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all"
        aria-label="Close"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Lightbox Image */}
      <div
        className="relative"
        style={{ width: '90vw', height: '70vh', maxWidth: '1024px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[activeIndex]}
          alt={`Dokumentasi ${title} ${activeIndex + 1}`}
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

      {/* Image Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );

  return (
    <>
      <div className="mt-12 mb-8">
        <h2 className="text-center text-xl font-black tracking-wider mb-6 uppercase">
          Dokumentasi Pengerjaan
        </h2>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex ml-[-8px]">
              {images.map((imgUrl, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex-grow-0 basis-[85%] md:basis-[45%] lg:basis-[35%] pl-4 pr-4"
                >
                  <div
                    className="relative aspect-video rounded-xl overflow-hidden shadow-md border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Dokumentasi ${title} ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 35vw"
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
      </div>

      {/* Render Lightbox via Portal */}
      {mounted && lightboxOpen && createPortal(<Lightbox />, document.body)}
    </>
  );
}
