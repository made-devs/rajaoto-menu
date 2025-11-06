// app/components/PackageCard.jsx

import Image from 'next/image';
import Link from 'next/link'; // Import Link

export const PackageCard = ({ packageData, categorySlug }) => {
  const { title, image, subtitle, normalPrice, discountPrice, detailSlug } =
    packageData;

  // Fungsi render harga (tetap sama)
  const renderPrice = (priceString) => {
    if (priceString.startsWith('START FROM')) {
      const parts = priceString.split(' ');
      const value = parts.pop();
      const currency = parts.pop();
      const prefix = parts.join(' ');
      return (
        <div>
          {' '}
          <span className="text-xs">{prefix}</span>{' '}
          <div className="flex items-baseline justify-center gap-1">
            {' '}
            <span className="text-sm font-semibold">{currency}</span>{' '}
            <span className="text-2xl font-black">{value}</span>{' '}
          </div>{' '}
        </div>
      );
    }
    const [currency, value] = priceString.split(' ');
    return (
      <div className="flex items-baseline justify-center gap-1">
        {' '}
        <span className="text-sm font-semibold">{currency}</span>{' '}
        <span className="text-2xl font-black">{value}</span>{' '}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center text-center bg-[#1a1a1a] rounded-lg overflow-hidden border border-zinc-700">
      <div className="relative w-full">
        <Image
          src={image}
          alt={title}
          width={300}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-3 w-full flex flex-col justify-between flex-grow">
        <div className="min-h-[6rem]">
          <h3 className="font-bold text-sm leading-tight mb-2">{subtitle}</h3>
          {normalPrice && (
            <p className="text-zinc-400 line-through text-[11px]">
              HARGA NORMAL {normalPrice}
            </p>
          )}
          <div className="text-red-500 mt-1">
            <p className="text-xs font-semibold">
              {discountPrice.includes('START FROM') ? '' : 'HARGA DISCOUNT'}
            </p>
            {renderPrice(discountPrice)}
          </div>
        </div>

        {/* Tombol diubah menjadi Link */}
        <Link
          href={`/paket/${categorySlug}/${detailSlug}`}
          className="mt-3 inline-block w-full rounded-full border border-red-600 bg-gradient-to-br from-[#484149] via-[#333238] to-[#1F1D20] px-4 py-1.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-105"
        >
          SELENGKAPNYA
        </Link>
      </div>
    </div>
  );
};
