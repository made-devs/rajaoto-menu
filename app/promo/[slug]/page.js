// app/promo/[slug]/page.jsx
"use client";

import { useParams } from "next/navigation";
import { promoData } from "../../data/promos";
import { PromoDetailSlider } from "../../components/PromoDetailSlider";

export default function PromoDetailPage() {
  const params = useParams();
  const slug = params.slug;

  const promo = promoData.find((p) => p.slug === slug);

  if (!promo || !promo.details) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Promo Tidak Ditemukan</h2>
      </div>
    );
  }

  return (
    <section className="py-8 flex-grow flex flex-col justify-center">
      {/* Judul statis di atas */}
      <h1 className="text-center text-2xl font-black tracking-wider mb-6">
        PROMO BULAN INI
      </h1>

      <PromoDetailSlider slides={promo.details.slides} title={promo.title} />
    </section>
  );
}
