'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Data dummy - ganti dengan data asli
  const galleryItems = [
    {
      id: 1,
      src: '/images/gallery/facility-1.jpg',
      category: 'facilities',
      title: 'Ruang Tunggu Premium',
      description: 'Ruang tunggu ber-AC dengan fasilitas WiFi gratis',
    },
    {
      id: 2,
      src: '/images/gallery/service-1.jpg',
      category: 'services',
      title: 'Engine Tune Up',
      description: 'Proses tune up dengan mesin modern',
    },
    {
      id: 3,
      src: '/images/gallery/machine-1.jpg',
      category: 'machines',
      title: 'Carbon Cleaning Machine',
      description: 'Mesin pembersih carbon terbaru',
    },
    {
      id: 4,
      src: '/images/gallery/before-after-1.jpg',
      category: 'before-after',
      title: 'Detailing Result',
      description: 'Hasil detailing eksterior mobil',
    },
    {
      id: 5,
      src: '/images/gallery/team-1.jpg',
      category: 'team',
      title: 'Tim Teknisi',
      description: 'Tim teknisi berpengalaman dan profesional',
    },
    {
      id: 6,
      src: '/images/gallery/facility-2.jpg',
      category: 'facilities',
      title: 'Workshop Area',
      description: 'Area kerja yang luas dan modern',
    },
  ];

  return (
    <>
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-[4/3] bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 cursor-pointer hover:border-yellow-500/50 transition-all duration-300"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-yellow-500 transition-colors"
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
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-xl mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-400">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
