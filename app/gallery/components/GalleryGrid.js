'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function GalleryGrid({ images, onImageClick }) {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {images.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-white/60 text-lg">
              Tidak ada foto dalam kategori ini
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square rounded-lg md:rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#fff10a]/50 transition-all duration-300 shadow-lg"
                onClick={() => onImageClick(image, index)}
              >
                <Image
                  src={image.image}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-2 left-2 md:top-3 md:left-3">
                  <span className="px-2 py-1 md:px-3 md:py-1.5 bg-[#fff10a] text-black text-xs font-semibold rounded-full">
                    {image.categoryName}
                  </span>
                </div>

                {/* Info on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-sm md:text-base line-clamp-2">
                    {image.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm mt-1 flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {image.location}
                  </p>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
