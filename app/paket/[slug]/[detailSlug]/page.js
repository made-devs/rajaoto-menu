'use client';

import React, { useLayoutEffect, useRef, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { CheckCircle, Wrench, ShieldCheck, X } from 'lucide-react';
import gsap from 'gsap';
import { packagesData } from '../../../data/packages';

export default function PackageDetailPage() {
  const params = useParams();
  const router = useRouter();
  const containerRef = useRef(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // 1. Logic Data Fetching
  const slug = params?.slug;
  const detailSlug = params?.detailSlug;
  const categoryData = packagesData[slug];
  const packageDetail = categoryData?.packages.find(
    (p) => p.detailSlug === detailSlug
  );

  // 2. GSAP Animation
  useLayoutEffect(() => {
    if (!containerRef.current || !packageDetail) return;

    let ctx = gsap.context(() => {
      gsap.from('.hero-image', {
        scale: 1.2,
        duration: 1.5,
        ease: 'power2.out',
      });

      gsap.from('.animate-up', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.2)',
      });

      gsap.from('.sticky-cta', {
        y: 100,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [packageDetail]);

  // 3. Render Not Found
  if (!packageDetail) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-center p-6">
        <Wrench className="w-16 h-16 text-zinc-800 mb-4" />
        <h2 className="text-xl font-bold text-zinc-200">
          Paket Tidak Ditemukan
        </h2>
        <button
          onClick={() => router.back()}
          className="mt-4 text-yellow-500 hover:text-yellow-400 font-semibold"
        >
          Kembali ke Menu
        </button>
      </div>
    );
  }

  // 4. Helper Kalkulasi Harga & Diskon
  const parseAmount = (priceStr) => {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, '')) || 0;
  };
  const valNormal = parseAmount(packageDetail.normalPrice);
  const valDiscount = parseAmount(packageDetail.discountPrice);
  const saveAmount = ((valNormal - valDiscount) * 1000).toLocaleString('id-ID');

  // Hitung persentase diskon
  const discountPercent =
    valNormal > 0
      ? Math.round(((valNormal - valDiscount) / valNormal) * 100)
      : 0;

  return (
    <main
      ref={containerRef}
      className="min-h-screen bg-zinc-950 text-zinc-100 font-sans pb-28 relative overflow-hidden max-w-md mx-auto shadow-2xl shadow-zinc-900"
    >
      {/* --- BAGIAN 1: IMAGE CONTAINER (1:1 Clean & Clickable) --- */}
      {/* Arrow Back dihapus agar tampilan clean */}
      <header className="relative w-full aspect-square rounded-b-[2rem] overflow-hidden group">
        <div
          className="w-full h-full cursor-zoom-in"
          onClick={() => setIsLightboxOpen(true)}
        >
          <img
            src={packageDetail.image}
            alt={packageDetail.title}
            className="hero-image w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 pointer-events-none"></div>
        </div>
      </header>

      {/* --- BAGIAN 2: TITLE & BADGES --- */}
      <section className="px-6 mt-6 animate-up relative z-20">
        {packageDetail.promo && (
          <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold bg-yellow-500 text-black rounded-full uppercase tracking-wider">
            {packageDetail.promo}
          </span>
        )}
        {packageDetail.subtitle && (
          <p className="text-zinc-400 text-xs font-bold tracking-widest uppercase mb-1">
            {packageDetail.subtitle}
          </p>
        )}
        <h1 className="text-3xl font-black uppercase leading-tight tracking-tight text-zinc-100">
          {packageDetail.title}
        </h1>
      </section>

      {/* --- BAGIAN 3: PRICING CARD --- */}
      <section className="px-5 mt-6 relative z-20 animate-up">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl shadow-black/50">
          <div className="flex justify-between items-end mb-2">
            <div>
              {packageDetail.normalPrice && (
                <p className="text-zinc-500 text-sm line-through font-medium mb-1">
                  {packageDetail.normalPrice}
                </p>
              )}
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-yellow-400 tracking-tighter">
                  {packageDetail.discountPrice}
                </span>
                <span className="text-xs text-zinc-400 font-normal">/ net</span>
              </div>
            </div>

            {valNormal > valDiscount && (
              <div className="flex flex-col items-end gap-2">
                {/* Badge Persentase Diskon */}
                <div className="bg-rose-600 px-2 py-1 rounded text-center shadow-lg shadow-rose-900/20">
                  <span className="text-xs font-black text-white tracking-tighter">
                    {discountPercent}% OFF
                  </span>
                </div>
                {/* Badge Hemat Nominal */}
                <div className="bg-zinc-800 px-3 py-2 rounded-lg text-right border border-zinc-700">
                  <span className="block text-[10px] text-zinc-400 uppercase">
                    Hemat
                  </span>
                  <span className="font-bold text-green-400 text-sm">
                    Rp {saveAmount}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-3" />
        </div>
      </section>

      {/* --- BAGIAN BARU: TEBUS MURAH BUTTON --- */}
      <section className="px-6 mt-4 animate-up relative z-20">
        <button className="w-full group relative overflow-hidden bg-gradient-to-r from-red-600 to-red-800 rounded-xl p-4 shadow-lg shadow-red-900/30 active:scale-95 transition-all">
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <div className="relative flex items-center justify-between">
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-bold text-red-200 uppercase tracking-wider">
                Promo Spesial
              </span>
              <span className="text-lg font-black text-white italic tracking-tight">
                DAPATKAN TEBUS MURAH
              </span>
            </div>
            <div className="bg-white/20 p-2 rounded-full">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
          </div>
        </button>
      </section>

      {/* --- BAGIAN 4: DESCRIPTION --- */}
      <section className="px-6 mt-8 animate-up">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-yellow-500" />
          Detail Pengerjaan
        </h3>

        {packageDetail.description && (
          <div className="space-y-4">
            {packageDetail.description.map((item, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="mt-1 min-w-[20px]">
                  <CheckCircle className="w-5 h-5 text-zinc-600 group-hover:text-yellow-500 transition-colors" />
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed border-b border-zinc-900 pb-2 w-full group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* STICKY CTA */}
      <div className="sticky-cta fixed bottom-0 left-0 w-full z-50 px-4 pb-6 pt-4 bg-gradient-to-t from-black via-zinc-950/90 to-transparent backdrop-blur-sm">
        <div className="max-w-md mx-auto">
          <a
            href={`https://wa.me/6285385544501?text=${encodeURIComponent(
              `Halo Raja Oto, saya ingin booking paket ${packageDetail.title}.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-yellow-500 hover:bg-yellow-400 active:scale-95 text-black font-black text-lg py-4 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
          >
            <Wrench className="w-5 h-5 fill-black" />
            Booking Sekarang
          </a>
          <p className="text-center text-[10px] text-zinc-500 mt-2">
            Slot terbatas hari ini. Pembayaran di bengkel.
          </p>
        </div>
      </div>

      {/* --- LIGHTBOX MODAL --- */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Wrapper Relative agar button absolute mengacu ke sini */}
          <div className="relative max-w-full max-h-full">
            {/* Tombol Close dipindah ke dalam wrapper relative */}
            <button
              className="absolute top-2 right-2 bg-zinc-900/80 backdrop-blur border border-zinc-700 p-2 rounded-full text-zinc-200 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all z-50 shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={packageDetail.image}
              alt={packageDetail.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg scale-in-95 animate-in duration-300 shadow-2xl shadow-black"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
}
