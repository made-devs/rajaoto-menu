// app/tebus-murah/page.jsx
'use client';

// Impor data dan komponen yang sama
import { packagesData } from '../data/packages';
import { PackageCard } from '../components/PackageCard';

export default function TebusMurahPage() {
  // Tidak pakai useParams(), kita tentukan slug secara manual
  const slug = 'tebus-murah';
  const pageData = packagesData[slug];

  // Jika karena suatu hal data tidak ada, tampilkan pesan
  if (!pageData) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Paket Tidak Ditemukan</h2>
      </div>
    );
  }

  // Tampilannya kita samakan persis dengan halaman paket lain
  return (
    <>
      <section className="py-4">
        <div>
          <h2 className="text-center text-2xl font-black tracking-wider mb-4">
            {pageData.pageTitle}
          </h2>
          <div className="grid grid-cols-2 gap-4 px-4">
            {pageData.packages &&
              Array.isArray(pageData.packages) &&
              pageData.packages.map((pkg, index) => (
                <PackageCard
                  key={`${pkg.title}-${index}`}
                  packageData={pkg}
                  categorySlug={slug} // Kirim slug manual ke komponen card
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
