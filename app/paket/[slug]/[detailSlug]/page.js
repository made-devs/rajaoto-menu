// app/paket/[slug]/[detailSlug]/page.jsx
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { packagesData } from '../../../data/packages'; // Sesuaikan path jika perlu

export default function PackageDetailPage() {
  const params = useParams();
  const { slug, detailSlug } = params;

  // Cari data kategori paketnya dulu
  const categoryData = packagesData[slug];

  // Kemudian cari paket spesifik di dalam kategori itu
  const packageDetail = categoryData?.packages.find(
    (p) => p.detailSlug === detailSlug
  );

  // Jika paket tidak ditemukan, tampilkan pesan
  if (!packageDetail) {
    return (
      <div className="text-center py-10 px-4">
        <h2 className="text-2xl font-bold">Detail Paket Tidak Ditemukan</h2>
        <p className="text-zinc-400 mt-2">
          Silakan kembali ke halaman sebelumnya.
        </p>
      </div>
    );
  }

  return (
    <section className="p-4 text-center">
      <h2 className="text-2xl font-black tracking-wider px-10 mb-4">
        {packageDetail.title}
      </h2>

      <div className="mb-4">
        <Image
          src={packageDetail.image}
          alt={packageDetail.title}
          width={400}
          height={550} // Sesuaikan jika rasio gambar beda
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>

      <div className="mb-6">
        {packageDetail.normalPrice && (
          <p className="text-lg text-zinc-400 line-through">
            HARGA NORMAL {packageDetail.normalPrice}
          </p>
        )}
        <p className="text-2xl font-extrabold text-yellow-300">
          HARGA DISCOUNT {packageDetail.discountPrice}
        </p>
      </div>

      {/* Tampilkan deskripsi jika ada */}
      {packageDetail.description && (
        <div className="text-center text-sm space-y-4 bg-[#1a1a1a] p-4 rounded-lg">
          {packageDetail.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      )}
    </section>
  );
}
