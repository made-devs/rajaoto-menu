'use client';

import { galleryCategories } from '@/app/data/gallery';

export default function GalleryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="w-full py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.slug)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                activeCategory === category.slug
                  ? 'bg-[#fff10a] text-black shadow-lg shadow-[#fff10a]/30'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
