'use client';
import { useState } from 'react';

export default function GalleryFilter() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'facilities', label: 'Fasilitas' },
    { id: 'services', label: 'Layanan' },
    { id: 'machines', label: 'Mesin & Alat' },
    { id: 'before-after', label: 'Before & After' },
    { id: 'team', label: 'Tim Profesional' },
  ];

  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#fff10a] text-black shadow-lg shadow-yellow-500/50'
                  : 'bg-white/5 backdrop-blur-sm text-white border border-white/10 hover:bg-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
