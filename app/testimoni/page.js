// app/testimoni/page.jsx
"use client";

import { useState, useMemo } from "react";
import { testimoniData } from "../data/testimoni";
import { TestimoniCard } from "../components/TestimoniCard";

const categories = [
  { key: "semua", label: "Semua" },
  { key: "kaki-kaki", label: "Kaki-Kaki & Anti Karat" },
  { key: "ac", label: "Servis AC" },
  { key: "engine", label: "Mesin & Diesel" },
  { key: "detailing", label: "Coating & Detailing" },
];

export default function TestimoniPage() {
  const [activeFilter, setActiveFilter] = useState("semua");

  const filteredTestimoni = useMemo(() => {
    if (activeFilter === "semua") {
      return testimoniData;
    }
    return testimoniData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="p-4">
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
                ? "bg-red-600 text-white"
                : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Testimoni Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTestimoni.map((item) => (
          <TestimoniCard key={item.id} testimoni={item} />
        ))}
      </div>
    </section>
  );
}
