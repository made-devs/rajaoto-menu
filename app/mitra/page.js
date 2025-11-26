'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const MitraPage = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const benefits = [
    {
      icon: 'crown',
      title: 'Jadi Owner Raja Oto',
      description: 'Miliki bisnis bengkel dengan brand yang sudah terpercaya',
    },
    {
      icon: 'trending',
      title: 'Potensi Profit Tinggi',
      description: 'Industri otomotif terus berkembang setiap tahunnya',
    },
    {
      icon: 'users',
      title: 'Full Support & Training',
      description: 'Pendampingan bisnis dan pelatihan dari tim profesional',
    },
    {
      icon: 'building',
      title: 'Sistem Modern & Mudah',
      description: 'Model bisnis modern & mudah dijalankan',
    },
  ];

  const stats = [
    { value: '50+', label: 'Mitra Pertama' },
    { value: '2025', label: 'Launching' },
    { value: '100%', label: 'Full Support' },
  ];

  const packages = [
    {
      name: 'Paket Bronze',
      price: '5 Juta',
      features: [
        'Lisensi Brand Raja Oto',
        'Training Dasar',
        'Marketing Kit Digital',
        'Support Online',
      ],
      popular: false,
    },
    {
      name: 'Paket Silver',
      price: '15 Juta',
      features: [
        'Semua fitur Bronze',
        'Training Lanjutan',
        'Peralatan Dasar',
        'Support Prioritas',
        'Konsultasi Bisnis',
      ],
      popular: false,
    },
    {
      name: 'Paket Gold',
      price: '50 Juta',
      features: [
        'Semua fitur Silver',
        'Full Setup Bengkel',
        'Peralatan Lengkap',
        'Marketing Campaign',
        'Dedicated Account Manager',
        'Revenue Sharing',
      ],
      popular: true,
    },
  ];

  const IconComponent = ({ name, className }) => {
    const icons = {
      crown: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3l3.5 4L12 3l3.5 4L19 3v13a2 2 0 01-2 2H7a2 2 0 01-2-2V3z"
          />
        </svg>
      ),
      trending: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      users: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      building: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      rocket: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
      ),
      zap: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      phone: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      play: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      ),
      x: (
        <svg
          className={className}
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
      ),
      arrow: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      ),
      check: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      sparkles: (
        <svg
          className={className}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    };
    return icons[name] || null;
  };

  return (
    <main className="flex flex-col w-full min-h-screen">
      {/* Main Investment Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#FFF10A 1px, transparent 1px), linear-gradient(90deg, #FFF10A 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#FFF10A]/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#FFF10A]/5 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-6 md:mb-8">
              <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-[#FFF10A]" />
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFF10A] blur-xl opacity-50 animate-pulse" />
                <div className="relative inline-flex items-center gap-2 bg-[#FFF10A] text-black px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-black tracking-wider shadow-lg shadow-[#FFF10A]/30">
                  <IconComponent
                    name="rocket"
                    className="w-4 h-4 animate-bounce"
                  />
                  <span>PELUANG INVESTASI</span>
                </div>
              </div>
              <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-[#FFF10A]" />
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight">
              Peluang{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FFF10A]">Investasi</span>
                <span className="absolute -inset-2 bg-[#FFF10A]/20 blur-2xl rounded-full" />
              </span>{' '}
              & Kemitraan
            </h2>
            <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
              Bergabunglah dengan jaringan bengkel Raja Oto dan raih kesuksesan
              di industri otomotif Indonesia
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid  gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FFF10A] to-amber-500 rounded-2xl md:rounded-3xl blur-lg opacity-30" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#FFF10A]/30">
                  <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-6 border border-red-500/30">
                    <IconComponent
                      name="zap"
                      className="w-4 h-4 animate-pulse"
                    />
                    PENAWARAN TERBATAS
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white mb-4 leading-tight">
                    Masuk Industri Bisnis Otomotif Hanya Dengan
                  </h3>

                  <div className="relative mb-4 md:mb-6">
                    <div className="absolute -inset-2 bg-[#FFF10A] blur-2xl opacity-30" />
                    <div className="relative bg-[#FFF10A] rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                      <p className="text-black text-sm md:text-lg font-bold mb-1">
                        Mulai Dari
                      </p>
                      <p className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none">
                        5 Juta
                      </p>
                      <p className="text-black text-lg md:text-xl font-bold mt-1">
                        Rupiah!
                      </p>
                    </div>
                  </div>

                  <div className="text-center mb-4 md:mb-6">
                    <p className="text-gray-400 text-sm md:text-lg mb-2">
                      Miliki Raja Oto Sekarang!
                    </p>
                    <p className="text-[#FFF10A] text-xl md:text-2xl lg:text-3xl font-black">
                      Jadi Owner Raja Oto!
                    </p>
                  </div>

                  <a
                    href="https://wa.me/6285119881371?text=Halo%20Raja%20Oto%2C%20saya%20tertarik%20dengan%20peluang%20investasi%20dan%20kemitraan%20Raja%20Oto.%20Mohon%20info%20lebih%20lanjut."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-3 w-full overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-[#FFF10A] rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-full bg-[#FFF10A] text-black py-3 md:py-4 rounded-xl font-black text-sm md:text-lg flex items-center justify-center gap-2 md:gap-3 shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                      <IconComponent
                        name="phone"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                      Hubungi Kami Sekarang
                      <IconComponent
                        name="arrow"
                        className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </a>
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 text-center border border-white/10 hover:border-[#FFF10A]/50 transition-all duration-300"
                  >
                    <p className="text-xl md:text-2xl lg:text-3xl font-black text-[#FFF10A] mb-1 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </p>
                    <p className="text-gray-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-black text-white text-center mb-8 md:mb-12">
              Keuntungan Menjadi <span className="text-[#FFF10A]">Mitra</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-black rounded-xl md:rounded-2xl p-5 md:p-6 border border-gray-800 hover:border-[#FFF10A]/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-[#FFF10A]/5 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="relative inline-block mb-3 md:mb-4">
                      <div className="absolute inset-0 bg-[#FFF10A] blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                      <div className="relative bg-[#FFF10A]/10 group-hover:bg-[#FFF10A] p-3 md:p-4 rounded-xl transition-all duration-500">
                        <IconComponent
                          name={benefit.icon}
                          className="w-6 h-6 md:w-7 md:h-7 text-[#FFF10A] group-hover:text-black transition-colors duration-500"
                        />
                      </div>
                    </div>

                    <h4 className="text-white font-black text-base md:text-lg mb-2 group-hover:text-[#FFF10A] transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="absolute top-3 md:top-4 right-3 md:right-4 text-[#FFF10A]/10 font-black text-4xl md:text-5xl">
                    0{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-white text-base md:text-lg mb-4">
              Tertarik menjadi bagian dari kesuksesan Raja Oto?
            </p>
            <a
              href="https://wa.me/6285119881371?text=Halo%20Raja%20Oto%2C%20saya%20ingin%20bertanya%20tentang%20kemitraan."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FFF10A]/50 text-white hover:text-[#FFF10A] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold transition-all duration-300"
            >
              <IconComponent name="sparkles" className="w-5 h-5" />
              Konsultasi Gratis
              <IconComponent
                name="arrow"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 bg-[#FFF10A] text-black rounded-full p-3 hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-2xl z-10"
            >
              <IconComponent name="x" className="w-6 h-6" />
            </button>

            <div
              className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-[#FFF10A]/30 bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                title="Raja Oto Investment Opportunity"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MitraPage;
