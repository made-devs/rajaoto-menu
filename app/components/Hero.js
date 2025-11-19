// app/components/Hero.jsx

"use client";

import Image from "next/image";
import { useCallback, useRef, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Hero = () => {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://placehold.co/1512x648/FFF10A/000000/png?text=Promo+1&font=Montserrat",
      title: "Promo 1",
    },
    {
      id: 2,
      image:
        "https://placehold.co/1512x648/FFFF00/000000/png?text=Promo+2&font=Montserrat",
      title: "Promo 2",
    },
    {
      id: 3,
      image:
        "https://placehold.co/1512x648/FFFF00/000000/png?text=Promo+3&font=Montserrat",
      title: "Promo 3",
    },
    {
      id: 4,
      image:
        "https://placehold.co/1512x648/FFFF00/000000/png?text=Promo+4&font=Montserrat",
      title: "Promo 4",
    },
  ];

  // Pause autoplay saat hover, resume saat mouse leave
  const handleMouseEnter = () => autoplay.current.stop();
  const handleMouseLeave = () => autoplay.current.play();

  // Update indikator saat slide berubah
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // Klik indikator
  const scrollTo = useCallback(
    (idx) => {
      if (emblaApi) emblaApi.scrollTo(idx);
      autoplay.current.stop();
    },
    [emblaApi]
  );

  return (
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

      {/* Slide Section */}
      <div
        className="relative w-full p-6 md:p-10 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide) => (
              <div key={slide.id} className="embla__slide flex-shrink-0 w-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1512}
                  height={648}
                  className="w-full h-auto"
                  priority={true}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-[2px] md:bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition ${
                idx === selectedIndex ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
