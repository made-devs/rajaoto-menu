// app/components/Hero.jsx

'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { promoData } from '../data/promo';

export const Hero = () => {
  const mainScrollRef = useRef(null);
  const supportScrollRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);
  const [activeMainIndex, setActiveMainIndex] = useState(0);
  const [activeSupportIndex, setActiveSupportIndex] = useState(0);

  const supportPromos = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    image: `/promo/promo-support${i + 1}.webp`,
    title: `Promo Gratis #${i + 1}`,
  }));

  const scroll = (ref, direction) => {
    if (!ref.current) return;
    const scrollAmount = ref === mainScrollRef ? 450 : 220;
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const openModal = (imageSrc, title) => {
    setModalImage({ src: imageSrc, title });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleMainScroll = () => {
      if (!mainScrollRef.current) return;
      const index = Math.round(mainScrollRef.current.scrollLeft / 450);
      setActiveMainIndex(index);
    };

    const handleSupportScroll = () => {
      if (!supportScrollRef.current) return;
      const index = Math.round(supportScrollRef.current.scrollLeft / 220);
      setActiveSupportIndex(index);
    };

    const mainRef = mainScrollRef.current;
    const supportRef = supportScrollRef.current;

    mainRef?.addEventListener('scroll', handleMainScroll);
    supportRef?.addEventListener('scroll', handleSupportScroll);

    return () => {
      mainRef?.removeEventListener('scroll', handleMainScroll);
      supportRef?.removeEventListener('scroll', handleSupportScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      <section className="relative z-10 mt-5 py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-gradient-to-b from-[#FFD700] to-[#FFA500] rounded-full"></div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    5 Promo <span className="text-yellow-300">Akhir Tahun</span>
                  </h3>
                  <p className="text-neutral-200 text-sm mt-1">
                    Promo utama dengan nilai fantastis
                  </p>
                </div>
              </div>
              <div className="hidden md:flex gap-3">
                <button
                  onClick={() => scroll(mainScrollRef, 'left')}
                  className="w-12 h-12 bg-neutral-800/80 hover:bg-[#FFD700] text-white hover:text-black rounded-xl flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll(mainScrollRef, 'right')}
                  className="w-12 h-12 bg-neutral-800/80 hover:bg-[#FFD700] text-white hover:text-black rounded-xl flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              ref={mainScrollRef}
              className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing hide-scrollbar"
            >
              {promoData.map((promo, index) => (
                <div
                  key={promo.id}
                  className="min-w-[320px] max-w-[320px] md:min-w-[420px] md:max-w-[420px] snap-center flex-shrink-0 group"
                >
                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#FFD700]/50 hover:shadow-[0_20px_60px_-15px_rgba(255,215,0,0.15)] hover:-translate-y-2">
                    <div
                      className="relative w-full overflow-hidden cursor-pointer"
                      style={{ aspectRatio: '4/5' }}
                      onClick={() => openModal(promo.image, promo.title)}
                    >
                      <Image
                        src={promo.image}
                        alt={promo.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1.5 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black text-xs font-black rounded-lg uppercase tracking-wide shadow-lg">
                          {promo.badge}
                        </span>
                        <span className="px-3 py-1.5 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-lg">
                          {promo.category}
                        </span>
                      </div>
                      <h4 className="text-white text-xl md:text-2xl font-bold mb-3 group-hover:text-[#FFD700] transition-colors duration-300 leading-tight">
                        {promo.title}
                      </h4>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-5 line-clamp-2">
                        {promo.description}
                      </p>
                      <button
                        onClick={() => openModal(promo.image, promo.title)}
                        className="w-full py-3.5 bg-neutral-800 hover:bg-[#FFD700] text-white hover:text-black font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-neutral-700 hover:border-[#FFD700]"
                      >
                        <span>Lihat Detail</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transform group-hover:translate-x-1 transition-transform"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {promoData.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeMainIndex
                      ? 'w-8 bg-[#FFD700]'
                      : 'w-2 bg-neutral-700 hover:bg-neutral-600'
                  }`}
                  onClick={() =>
                    mainScrollRef.current?.scrollTo({
                      left: index * 450,
                      behavior: 'smooth',
                    })
                  }
                />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-1 h-8 bg-gradient-to-b from-[#FFD700] to-[#FFA500] rounded-full"></div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    25 Promo <span className="text-yellow-300">Gratis</span>
                  </h3>
                  <p className="text-neutral-200 text-sm mt-1">
                    Bonus tambahan untuk setiap transaksi
                  </p>
                </div>
              </div>
              <div className="hidden md:flex gap-3">
                <button
                  onClick={() => scroll(supportScrollRef, 'left')}
                  className="w-10 h-10 bg-neutral-800/80 hover:bg-[#FFD700] text-white hover:text-black rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={() => scroll(supportScrollRef, 'right')}
                  className="w-10 h-10 bg-neutral-800/80 hover:bg-[#FFD700] text-white hover:text-black rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              ref={supportScrollRef}
              className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scroll-smooth cursor-grab active:cursor-grabbing hide-scrollbar"
            >
              {supportPromos.map((promo, index) => (
                <div
                  key={promo.id}
                  className="min-w-[180px] max-w-[180px] md:min-w-[200px] md:max-w-[200px] snap-center flex-shrink-0 group"
                >
                  <div
                    className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#FFD700]/50 hover:shadow-[0_10px_40px_-10px_rgba(255,215,0,0.15)] hover:-translate-y-1 cursor-pointer"
                    onClick={() => openModal(promo.image, promo.title)}
                  >
                    <div
                      className="relative w-full overflow-hidden"
                      style={{ aspectRatio: '4/5' }}
                    >
                      <Image
                        src={promo.image}
                        alt={promo.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FFD700] bg-[#FFD700]/10 px-2 py-1 rounded-md">
                        #{promo.id}
                      </span>
                      <span className="text-xs font-semibold text-neutral-400 group-hover:text-white transition-colors">
                        GRATIS
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 max-w-md mx-auto">
              <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      ((activeSupportIndex + 1) / supportPromos.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <p className="text-center text-neutral-500 text-xs mt-2">
                {activeSupportIndex + 1} dari {supportPromos.length} promo
              </p>
            </div>
          </div>
        </div>
      </section>

      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-14 right-0 w-12 h-12 bg-neutral-800 hover:bg-[#FFD700] text-white hover:text-black rounded-xl flex items-center justify-center transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div
              className="relative w-full rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl"
              style={{ aspectRatio: '4/5', maxHeight: '80vh' }}
            >
              <Image
                src={modalImage.src}
                alt={modalImage.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold">
                {modalImage.title}
              </h3>
              <p className="text-neutral-500 text-sm mt-2">
                Klik di luar gambar atau tekan ESC untuk menutup
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
