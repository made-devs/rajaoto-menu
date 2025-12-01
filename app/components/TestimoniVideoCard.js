'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

export function TestimoniVideoCarousel({ videos, title = 'Testimoni Video' }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const openModal = (index) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const modalPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const modalNext = () => {
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  if (!videos || videos.length === 0) return null;

  const VideoModal = () => (
    <div
      className="fixed inset-0 z-[9999] bg-black/90"
      onClick={closeModal}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-all"
        aria-label="Close"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div
        className="relative w-[90vw] max-w-3xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={`${videos[activeIndex].videoUrl}?autoplay=1`}
          title={`Testimoni ${videos[activeIndex].name}`}
          className="w-full h-full rounded-xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Modal Navigation */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          modalPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          modalNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-all"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
        <p className="font-bold">{videos[activeIndex].name}</p>
        <p className="text-sm text-gray-300">{videos[activeIndex].service}</p>
        <p className="text-xs text-gray-400 mt-1">
          {activeIndex + 1} / {videos.length}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {videos.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 flex-grow-0 basis-[85%] sm:basis-[45%] lg:basis-[32%] mr-4"
              >
                <div
                  className="relative aspect-video rounded-xl overflow-hidden shadow-md cursor-pointer group"
                  onClick={() => openModal(index)}
                >
                  <Image
                    src={item.thumbnail}
                    alt={`Testimoni Video ${item.name}`}
                    fill
                    sizes="(max-width: 768px) 85vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </div>
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <p className="text-white font-bold text-sm">{item.name}</p>
                    <p className="text-gray-300 text-xs">{item.service}</p>
                  </div>
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
        Geser atau klik tombol untuk melihat video lainnya
      </p>

      {mounted && modalOpen && createPortal(<VideoModal />, document.body)}
    </>
  );
}
