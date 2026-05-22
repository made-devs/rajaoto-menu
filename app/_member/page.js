// app/member/page.jsx
'use client';

import Image from 'next/image';

// Data untuk halaman ini ditaruh langsung di sini
const packageDetail = {
  title: 'PAKET MEMBER TAHUNAN KOMPLIT',
  image: '/image/paketmember.webp', // Ganti dengan link gambar yang benar
  normalPrice: 'IDR 12.500K',
  discountPrice: 'IDR 2.500K',
};

export default function MemberPage() {
  if (!packageDetail) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Paket Tidak Ditemukan</h2>
      </div>
    );
  }

  return (
    <section className="p-4">
      <div className="space-y-4">
        <h1 className="text-center text-2xl font-black tracking-wider">
          {packageDetail.title}
        </h1>

        <div className="relative aspect-square w-full overflow-hidden rounded-md border-2 border-red-600">
          <Image
            src={packageDetail.image}
            alt={packageDetail.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-center space-y-2">
          {packageDetail.normalPrice && (
            <p className="text-lg font-semibold text-gray-400 line-through whitespace-nowrap">
              HARGA NORMAL {packageDetail.normalPrice}
            </p>
          )}
          <div className="font-black">
            <span className="text-lg text-red-500">HARGA DISCOUNT</span>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl text-red-500">IDR</span>
              <span className="text-5xl tracking-tighter">
                {packageDetail.discountPrice.replace('IDR ', '')}
              </span>
            </div>
          </div>
        </div>

        {packageDetail.description && (
          <div className="space-y-4 text-center text-sm font-medium leading-relaxed text-gray-300 pt-4">
            {packageDetail.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
