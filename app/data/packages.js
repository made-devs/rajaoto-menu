import servicePackages from './services_new';

const catSlug = (c) =>
  c
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
const formatK = (num) =>
  'IDR ' + new Intl.NumberFormat('id-ID').format(num / 1000) + 'K';

const generatedPackagesData = {};

// Hardcoded default fallback galleries to preserve original design
const galleryMap = {
  'rebuild-kaki-kaki': [
    '/gallery/kakikaki1.webp',
    '/gallery/kakikaki2.webp',
    '/gallery/kakikaki3.webp',
    '/gallery/kakikaki4.webp',
  ],
  ac: [
    '/gallery/ac1.webp',
    '/gallery/ac2.webp',
    '/gallery/ac3.webp',
    '/gallery/ac4.webp',
  ],
  detailing: [
    '/gallery/detailing1.webp',
    '/gallery/detailing2.webp',
    '/gallery/detailing3.webp',
    '/gallery/detailing4.webp',
  ],
  'detailing-velg': [
    '/gallery/velg1.webp',
    '/gallery/velg2.webp',
    '/gallery/velg3.webp',
    '/gallery/velg4.webp',
  ],
  diesel: [
    '/gallery/diesel1.webp',
    '/gallery/diesel2.webp',
    '/gallery/diesel3.webp',
    '/gallery/diesel4.webp',
  ],
  'fuel-system': [
    '/gallery/fuel-system1.webp',
    '/gallery/fuel-system2.webp',
    '/gallery/fuel-system3.webp',
  ],
  'nano-ceramic-coating': [
    '/gallery/coating1.webp',
    '/gallery/coating2.webp',
    '/gallery/coating3.webp',
    '/gallery/coating4.webp',
  ],
  'kaki-kaki-oli': [
    '/gallery/oli1.webp',
    '/gallery/oli2.webp',
    '/gallery/oli3.webp',
  ],
  racksteer: ['/gallery/racksteer.webp'],
  shockbreaker: [
    '/gallery/shockbreaker1.webp',
    '/gallery/shockbreaker2.webp',
    '/gallery/shockbreaker3.webp',
  ],
  steering: [
    '/gallery/steering1.webp',
    '/gallery/steering2.webp',
    '/gallery/steering3.webp',
  ],
};

servicePackages.forEach((item) => {
  const slug = catSlug(item.category);
  if (!generatedPackagesData[slug]) {
    generatedPackagesData[slug] = {
      pageTitle: 'PAKET ' + item.category.toUpperCase(),
      gallery: galleryMap[slug] ||
        galleryMap[item.category.toLowerCase()] || [
          '/gallery/kakikaki1.webp',
          '/gallery/kakikaki2.webp',
        ],
      packages: [],
    };
  }

  generatedPackagesData[slug].packages.push({
    title: item.name.toUpperCase(),
    category: slug,
    detailSlug: item.id,
    image: item.image,
    description:
      item.features && item.features.length > 0
        ? item.features
        : [item.description],
    subtitle: item.category.toUpperCase(),
    normalPrice: formatK(item.priceNormal),
    discountPrice: formatK(item.priceDiscount),
    promo: item.promo,
  });
});

export const packagesData = generatedPackagesData;
export default packagesData;
