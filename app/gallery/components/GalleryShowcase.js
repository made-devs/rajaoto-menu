export default function GalleryShowcase() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/20">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ingin Melihat Langsung?
          </h2>
          <p className="text-gray-300 mb-6">
            Kunjungi bengkel kami dan lihat sendiri fasilitas modern serta
            layanan premium RAJA OTO.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 hover:scale-105">
            Lokasi Kami
          </button>
        </div>
      </div>
    </section>
  );
}
