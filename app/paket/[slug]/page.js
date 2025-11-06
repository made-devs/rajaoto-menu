// app/paket/[slug]/page.jsx
'use client';

import { useParams } from 'next/navigation';
import { packagesData } from '../../data/packages';
import { PackageCard } from '../../components/PackageCard';

export default function PaketDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const pageData = packagesData[slug];

  if (!pageData) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Paket Tidak Ditemukan</h2>
      </div>
    );
  }

  return (
    <>
      <section className="py-4">
        {/* Cek jika ada sub-kategori */}
        {pageData.subCategories && Array.isArray(pageData.subCategories) ? (
          pageData.subCategories.map((subCategory) => (
            <div key={subCategory.subTitle} className="mb-10">
              <h2 className="text-center text-2xl font-black tracking-wider mb-4">
                {subCategory.subTitle}
              </h2>
              <div className="grid grid-cols-2 gap-4 px-4">
                {/* Cek lagi di dalam sub-kategori */}
                {subCategory.packages &&
                  Array.isArray(subCategory.packages) &&
                  subCategory.packages.map((pkg, index) => (
                    <PackageCard
                      key={`${pkg.title}-${index}`}
                      packageData={pkg}
                      categorySlug={slug}
                    />
                  ))}
              </div>
            </div>
          ))
        ) : (
          // Jika tidak ada sub-kategori, tampilkan paket utama
          <div>
            <h2 className="text-center text-2xl font-black tracking-wider mb-4">
              {pageData.pageTitle}
            </h2>
            <div className="grid grid-cols-2 gap-4 px-4">
              {/* Cek paket utama */}
              {pageData.packages &&
                Array.isArray(pageData.packages) &&
                pageData.packages.map((pkg, index) => (
                  <PackageCard
                    key={`${pkg.title}-${index}`}
                    packageData={pkg}
                    categorySlug={slug}
                  />
                ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
