import servicePackages from './services_new';

const catSlug = (c) =>
  c
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
const formatK = (num) =>
  'IDR ' + new Intl.NumberFormat('id-ID').format(num / 1000) + 'K';

export const serviceCategories = Array.from(
  servicePackages
    .reduce((map, item) => {
      const cat = item.category;
      if (!map.has(cat)) {
        map.set(cat, {
          title: 'PAKET ' + cat.toUpperCase(),
          packages: [],
        });
      }
      const slug = catSlug(cat);
      map.get(cat).packages.push({
        name: item.name.toUpperCase(),
        image: item.image,
        slug: `/paket/${slug}/${item.id}`,
        price: formatK(item.priceDiscount),
      });
      return map;
    }, new Map())
    .values(),
);

