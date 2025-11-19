import GalleryHero from './components/GalleryHero';
import GalleryFilter from './components/GalleryFilter';
import GalleryGrid from './components/GalleryGrid';
import GalleryShowcase from './components/GalleryShowcase';

export default function GalleryPage() {
  return (
    <main className="flex flex-col w-full min-h-screen text-gray-800">
      <GalleryHero />
      <GalleryFilter />
      <GalleryGrid />
      <GalleryShowcase />
    </main>
  );
}
