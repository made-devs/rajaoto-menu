// app/components/Hero.jsx

'use client';

import Image from 'next/image';
import { useCallback, useRef, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export const Hero = () => {
  // Main carousel
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
      dragFree: false,
    },
    [autoplay.current]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Support carousel
  const autoplaySupport = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  const [emblaSupportRef, emblaSupportApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
      dragFree: false,
    },
    [autoplaySupport.current]
  );
  const [selectedSupportIndex, setSelectedSupportIndex] = useState(0);

  const slides = [
    { id: 1, image: '/promo/promo1.webp', title: 'Promo 1' },
    { id: 2, image: '/promo/promo2.webp', title: 'Promo 2' },
    { id: 3, image: '/promo/promo3.webp', title: 'Promo 3' },
    { id: 4, image: '/promo/promo4.webp', title: 'Promo 4' },
    { id: 5, image: '/promo/promo5.webp', title: 'Promo 5' },
  ];

  // Generate support slides (1-25)
  const supportSlides = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    image: `/promo/promo-support${i + 1}.webp`,
    title: `Promo Support ${i + 1}`,
  }));

  const handleMouseEnter = () => autoplay.current.stop();
  const handleMouseLeave = () => autoplay.current.play();

  const handleSupportMouseEnter = () => autoplaySupport.current.stop();
  const handleSupportMouseLeave = () => autoplaySupport.current.play();

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaSupportApi) return;
    const onSelect = () =>
      setSelectedSupportIndex(emblaSupportApi.selectedScrollSnap());
    emblaSupportApi.on('select', onSelect);
    onSelect();
    return () => emblaSupportApi.off('select', onSelect);
  }, [emblaSupportApi]);

  const scrollTo = useCallback(
    (idx) => {
      if (emblaApi) emblaApi.scrollTo(idx);
      autoplay.current.stop();
    },
    [emblaApi]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollSupportPrev = useCallback(() => {
    if (emblaSupportApi) emblaSupportApi.scrollPrev();
  }, [emblaSupportApi]);

  const scrollSupportNext = useCallback(() => {
    if (emblaSupportApi) emblaSupportApi.scrollNext();
  }, [emblaSupportApi]);

  const handleImageClick = (slide) => {
    setSelectedImage(slide);
    autoplay.current.stop();
  };

  const closePopup = () => {
    setSelectedImage(null);
    autoplay.current.play();
  };

  return (
    <>
      <section className="w-full">
        <div className="relative w-full h-auto">
          <Image
            src="/bg-text-hero.webp"
            alt="Hero Background"
            width={1920}
            height={400}
            className="w-full h-auto mt-[7rem] md:mt-[10rem]"
            priority={true}
          />

          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black text-md md:text-[32px] font-extrabold z-10 px-4 md:px-6 whitespace-nowrap">
            RAJANYA OTOMOTIF MASA KINI
          </h1>
        </div>

        {/* Main Slide Section - 3 Cards Carousel */}
        <div
          className="relative w-full py-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Title */}
          <h2 className="text-center text-white text-xl md:text-2xl font-bold mb-6">
            <span className="text-[#fff10a]">5</span> Promo Autentik
          </h2>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#fff10a] hover:text-black transition-all duration-300"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#fff10a] hover:text-black transition-all duration-300"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Embla Carousel */}
          <div className="overflow-hidden px-12 md:px-20" ref={emblaRef}>
            <div className="flex gap-3 md:gap-4">
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-none w-[calc((100%-1.5rem)/3)] md:w-[calc((100%-2rem)/3)] cursor-pointer group"
                  onClick={() => handleImageClick(slide)}
                >
                  <div className="relative aspect-[4/5] rounded-lg md:rounded-xl overflow-hidden border-2 border-white/10 group-hover:border-[#fff10a]/50 transition-all duration-300 shadow-lg">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 w-7 h-7 md:w-10 md:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
                  idx === selectedIndex
                    ? 'bg-[#fff10a] w-6 md:w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Support Carousel - Smaller Size */}
        <div
          className="relative w-full py-4 md:py-6"
          onMouseEnter={handleSupportMouseEnter}
          onMouseLeave={handleSupportMouseLeave}
        >
          {/* Title */}
          <h2 className="text-center text-white text-lg md:text-xl font-bold mb-4">
            <span className="text-[#fff10a]">25</span> Promo Gratis
          </h2>

          {/* Navigation Buttons */}
          <button
            onClick={scrollSupportPrev}
            className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#fff10a] hover:text-black transition-all duration-300"
            aria-label="Previous support slide"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={scrollSupportNext}
            className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[#fff10a] hover:text-black transition-all duration-300"
            aria-label="Next support slide"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Embla Support Carousel */}
          <div className="overflow-hidden px-10 md:px-16" ref={emblaSupportRef}>
            <div className="flex gap-2 md:gap-3">
              {supportSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-none w-[calc((100%-1rem)/4)] md:w-[calc((100%-1.5rem)/5)] cursor-pointer group"
                  onClick={() => handleImageClick(slide)}
                >
                  <div className="relative aspect-[4/5] rounded-md md:rounded-lg overflow-hidden border border-white/10 group-hover:border-[#fff10a]/50 transition-all duration-300 shadow-md">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-1 right-1 md:top-2 md:right-2 w-5 h-5 md:w-7 md:h-7 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-3 h-3 md:w-4 md:h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Indicator - Simpler dots */}
          <div className="flex justify-center gap-1 mt-4">
            {Array.from(
              { length: Math.ceil(supportSlides.length / 5) },
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaSupportApi?.scrollTo(idx * 5)}
                  className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-all duration-300 ${
                    Math.floor(selectedSupportIndex / 5) === idx
                      ? 'bg-[#fff10a] w-4 md:w-6'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to support slide group ${idx + 1}`}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Popup Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-start justify-center p-4"
          onClick={closePopup}
        >
          <div
            className="relative max-w-lg w-full mt-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute -top-12 right-0 text-white hover:text-[#fff10a] transition-colors z-10"
              aria-label="Close popup"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
                priority
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-xl">
                {selectedImage.title}
              </h3>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  // Combine both slide arrays for navigation
                  const allSlides = [...slides, ...supportSlides];
                  const currentIndex = allSlides.findIndex(
                    (s) => s.image === selectedImage.image
                  );
                  const prevIndex =
                    currentIndex === 0
                      ? allSlides.length - 1
                      : currentIndex - 1;
                  setSelectedImage(allSlides[prevIndex]);
                }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#fff10a] hover:text-black transition-all duration-300"
              >
                Sebelumnya
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const allSlides = [...slides, ...supportSlides];
                  const currentIndex = allSlides.findIndex(
                    (s) => s.image === selectedImage.image
                  );
                  const nextIndex =
                    currentIndex === allSlides.length - 1
                      ? 0
                      : currentIndex + 1;
                  setSelectedImage(allSlides[nextIndex]);
                }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-[#fff10a] hover:text-black transition-all duration-300"
              >
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
