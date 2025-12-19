// app/testimoni/page.jsx
'use client';

import { useState, useMemo } from 'react';
import { testimoniData } from '../data/testimoni';
import { TestimoniCard } from '../components/TestimoniCard';
import { TestimoniImageCarousel } from '../components/TestimoniImageCard';
import { TestimoniVideoCarousel } from '../components/TestimoniVideoCard';
import { Hero } from '../components/Hero';

const categories = [
  { key: 'semua', label: 'Semua' },
  { key: 'kaki-kaki', label: 'Kaki-Kaki & Anti Karat' },
  { key: 'ac', label: 'Servis AC' },
  { key: 'engine', label: 'Mesin & Diesel' },
  { key: 'detailing', label: 'Coating & Detailing' },
];

export default function TestimoniPage() {
  const [activeFilter, setActiveFilter] = useState('semua');

  const filteredReviews = useMemo(() => {
    if (activeFilter === 'semua') {
      return testimoniData.reviews;
    }
    return testimoniData.reviews.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  const filteredImages = useMemo(() => {
    if (activeFilter === 'semua') {
      return testimoniData.images;
    }
    return testimoniData.images.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  const filteredVideos = useMemo(() => {
    if (activeFilter === 'semua') {
      return testimoniData.videos;
    }
    return testimoniData.videos.filter(
      (item) => item.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section className="p-4">
      <Hero />
      <h1 className="text-center text-4xl font-black tracking-wider mb-8 text-white">
        TESTIMONI PELANGGAN
      </h1>

      {/* Filter Buttons */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveFilter(category.key)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              activeFilter === category.key
                ? 'bg-red-600 text-white'
                : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Section Testimoni Text/Review */}
      <div className="mb-12">
        <h2 className="text-2xl font-black text-white mb-6 text-center">
          💬 REVIEW PELANGGAN
        </h2>
        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map((item) => (
              <TestimoniCard key={item.id} testimoni={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">
            Belum ada review untuk kategori ini.
          </p>
        )}
      </div>

      {/* Section Testimoni Gambar - Carousel */}
      <div className="mb-12">
        <h2 className="text-2xl font-black text-white mb-6 text-center">
          TESTIMONI FOTO
        </h2>
        {filteredImages.length > 0 ? (
          <TestimoniImageCarousel images={filteredImages} />
        ) : (
          <p className="text-center text-gray-400">
            Belum ada testimoni foto untuk kategori ini.
          </p>
        )}
      </div>

      {/* Section Testimoni Video - Carousel */}
      <TestimoniVideoCarousel videos={filteredVideos} />
    </section>
  );
}
