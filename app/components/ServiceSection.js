// app/components/ServiceSection.jsx

import { serviceCategories } from '../data/services';
import { ServiceCard } from './ServiceCard';

export const ServiceSection = () => (
  <section className="space-y-8 p-4">
    <h3 className="text-center text-2xl md:text-4xl font-black underline italic text-white">
      CATEGORY SERVICE
    </h3>
    {serviceCategories.map((category, index) => (
      <ServiceCard
        key={index}
        title={category.title}
        slug={category.slug}
        packages={category.packages} // gunakan struktur baru
      />
    ))}
  </section>
);
