// app/components/ServiceCard.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // <-- tambahkan import Link
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ServiceCard = ({ title, slug, packages = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 3;
  const totalItems = packages.length;
  const maxIndex = totalItems > itemsToShow ? totalItems - itemsToShow : 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="space-y-3 h-[290px] md:h-[430px] flex flex-col justify-between">
      {/* Title dengan background image seperti Hero, tapi text di kiri */}
      <div className="relative w-full h-auto">
        <Image
          src="/bg-text-service.webp"
          alt="Service Background"
          width={1920}
          height={400}
          className="w-full h-auto"
        />

        <h4
          className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-3 text-white text-sm md:text-[28px] font-extrabold z-10 px-2 md:px-6 whitespace-nowrap text-left"
          style={{
            textShadow:
              "-1px 0 0 #000, 0px 5px 4px #000, 0px -1px 0px #000, 1px 0px 0px #000",
          }}
        >
          {title}
        </h4>
      </div>

      <div className="relative flex-1 flex flex-col justify-between">
        <div className="overflow-hidden flex-1">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
            }}
          >
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-1 h-full flex flex-col"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <div className="overflow-hidden rounded-md border-2 border-red-600">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                {/* Container untuk nama package, price dan button - fixed height */}
                <div className="flex flex-col items-center h-[5.5rem] mt-2">
                  {/* Nama package di bawah gambar - tinggi konsisten */}
                  <div className="flex items-center justify-center md:px-5 font-bold text-white text-center text-[11px] md:text-sm max-h-[2.2rem]">
                    {pkg.name}
                  </div>
                  {/* Price */}
                  <div className="text-yellow-400 mt-2 font-bold text-sm">
                    {pkg.price}
                  </div>
                  {/* Button DETAIL - kapsul dengan border yellow dan gradasi */}
                  {pkg.slug ? (
                    <Link
                      href={pkg.slug}
                      className="bg-gradient-to-r from-gray-600 to-black text-white text-xs md:text-sm font-bold mt-2 py-1 px-3 md:px-6 rounded-full border-2 border-yellow-400 shadow inline-block text-center transition hover:from-gray-700 hover:to-gray-900"
                      aria-label={`Detail ${pkg.name}`}
                    >
                      LIHAT PAKET
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-600 text-white text-sm font-bold mt-2 py-1 px-3 md:px-6 rounded-full border-2 border-yellow-400/40 opacity-40 cursor-not-allowed"
                      aria-disabled="true"
                      aria-label={`Detail tidak tersedia ${pkg.name}`}
                    >
                      DETAIL
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-black/50 p-1 text-white transition-opacity hover:bg-black/80 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-black/50 p-1 text-white transition-opacity hover:bg-black/80 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
