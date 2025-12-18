"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Play, Youtube } from "lucide-react";

export function TestimoniVideoCarousel({ videos, title = "Testimoni Video" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const openModal = (index) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const modalPrev = () =>
    setActiveIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const modalNext = () =>
    setActiveIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  if (!videos || videos.length === 0) return null;

  // UI Modal dengan Efek Glassmorphism & Portrait Ratio
  const VideoModal = () => (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={closeModal}
    >
      {/* Tombol Close Industrial */}
      <button
        onClick={closeModal}
        className="absolute top-6 right-6 z-50 bg-yellow-500 hover:bg-yellow-400 p-3 rounded-full transition-all active:scale-95 shadow-lg"
      >
        <X className="w-6 h-6 text-black" />
      </button>

      <div className="relative flex items-center justify-center w-full max-w-5xl h-full py-10">
        {/* Navigasi Modal */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            modalPrev();
          }}
          className="hidden md:flex absolute left-0 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-2xl backdrop-blur-md transition-all"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>

        {/* Iframe Portrait (YouTube Shorts) */}
        <div
          className="relative h-full aspect-[9/16] bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videos[activeIndex].id}?autoplay=1&modestbranding=1&rel=0`}
            title={videos[activeIndex].name}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Info Overlay di Modal */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
            <p className="text-yellow-500 font-mono text-[10px] tracking-widest uppercase mb-1">
              Customer Story
            </p>
            <h4 className="text-white text-xl font-black uppercase tracking-tighter">
              {videos[activeIndex].name}
            </h4>
            <p className="text-zinc-400 text-sm">
              {videos[activeIndex].service}
            </p>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            modalNext();
          }}
          className="hidden md:flex absolute right-0 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-2xl backdrop-blur-md transition-all"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative py-12">
      {/* Container Carousel dengan Glass Backdrop */}
      <div className="relative z-10 p-4 pt-8 md:p-8 rounded-[2.5rem] border border-white/5 bg-zinc-950/40 backdrop-blur-sm">
        <div className="flex justify-between items-end mb-8 px-4">
          <div>
            <h2 className="text-white text-3xl font-black uppercase tracking-tighter italic">
              Real <span className="text-yellow-500">Testimonials</span>
            </h2>
            <p className="text-zinc-500 text-sm mt-1">
              Dengarkan kata mereka yang sudah merasakan standar kami.
            </p>
          </div>

          {/* Custom Navigasi Industrial */}
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-3 border border-white/10 rounded-xl hover:bg-white/5 transition-all text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 bg-yellow-500 rounded-xl hover:bg-yellow-400 transition-all text-black"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          {/* ganti: flex gap-4 -> flex -ml-4 (container offset) */}
          <div className="flex ml-4">
            {videos.map((item, index) => (
              <div
                key={item.id}
                // ganti: basis[...] group -> tambah ml-4 (spacing per slide)
                className="flex-shrink-0 flex-grow-0 basis-[70%] sm:basis-[35%] lg:basis-[22%] group ml-4"
              >
                <div
                  className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-zinc-900 shadow-xl"
                  onClick={() => openModal(index)}
                >
                  {/* Thumbnail */}
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                  />

                  {/* Industrial Play Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex items-center justify-center scale-90 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-500">
                      <Play className="w-6 h-6 text-white group-hover:text-black fill-current" />
                    </div>
                  </div>

                  {/* Info Tag */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <p className="text-white font-black text-sm uppercase tracking-tighter">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Youtube className="w-3 h-3 text-red-600" />
                      <span className="text-[10px] text-zinc-400 font-mono uppercase tracking-widest">
                        {item.service}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {mounted && modalOpen && createPortal(<VideoModal />, document.body)}
    </section>
  );
}
