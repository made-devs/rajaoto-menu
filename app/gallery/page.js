'use client';

import { useState, useMemo } from 'react';
import GalleryHero from './components/GalleryHero';
import GalleryFilter from './components/GalleryFilter';
import GalleryGrid from './components/GalleryGrid';
import GalleryShowcase from './components/GalleryShowcase';
import { getImagesByCategory } from '@/app/data/gallery';
import { Hero } from '../components/Hero';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showcaseImages, setShowcaseImages] = useState([]);

  const filteredImages = useMemo(() => {
    return getImagesByCategory(activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setSelectedImage(null);
    setShowcaseImages([]);
  };

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    setShowcaseImages(filteredImages);
  };

  const handleCloseShowcase = () => {
    setSelectedImage(null);
    setShowcaseImages([]);
  };

  const handleNavigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex =
        currentIndex === 0 ? showcaseImages.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === showcaseImages.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(showcaseImages[newIndex]);
  };

  return (
    <main className="flex flex-col w-full min-h-screen text-gray-800">
      <Hero />
      {/* Section Title */}
      <div className="text-center py-8 px-4">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Dokumentasi <span className="text-[#fff10a]">Workshop</span> Kami
        </h2>
        <p className="text-white mt-2 text-sm md:text-base max-w-2xl mx-auto">
          Lihat berbagai aktivitas dan hasil kerja tim Raja Oto dalam melayani
          pelanggan setia kami
        </p>
      </div>

      <GalleryFilter
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <GalleryGrid images={filteredImages} onImageClick={handleImageClick} />

      {/* Image Count */}
      <div className="text-center pb-8">
        <p className="text-white text-sm">
          Menampilkan{' '}
          <span className="text-[#fff10a] font-bold">
            {filteredImages.length}
          </span>{' '}
          foto
        </p>
      </div>

      {selectedImage && (
        <GalleryShowcase
          image={selectedImage}
          images={showcaseImages}
          currentIndex={currentIndex}
          onClose={handleCloseShowcase}
          onNavigate={handleNavigate}
        />
      )}
    </main>
  );
}
