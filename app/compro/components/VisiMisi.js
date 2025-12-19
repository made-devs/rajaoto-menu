export default function VisiMisi() {
  const misiPoints = [
    {
      title: 'Standarisasi Teknologi',
      desc: 'Menghadirkan layanan servis mobil berbasis mesin (machine-based) untuk menjamin akurasi 100% dan menghilangkan human error.',
    },
    {
      title: 'Transparansi Mutlak',
      desc: 'Membangun kepercayaan pelanggan melalui sistem laporan digital dan rincian biaya yang jujur tanpa ada harga tersembunyi.',
    },
    {
      title: 'Ekosistem Inklusif',
      desc: 'Membuka kesempatan bagi masyarakat luas untuk memiliki aset bisnis otomotif melalui program investasi yang terjangkau.',
    },
    {
      title: 'Edukasi Berkelanjutan',
      desc: 'Memberikan pemahaman teknis kepada pemilik kendaraan agar lebih cerdas dalam merawat aset transportasi mereka.',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Visi Box dengan Glassmorphism */}
        <div className="mb-4 p-10 rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl shadow-[0_5px_10px_rgba(255,215,0,0.85)]">
          <h2 className="text-yellow-500 font-mono text-xs tracking-[0.4em] uppercase mb-6 text-center">
            Vision
          </h2>
          <p className="text-2xl font-black text-white text-center leading-tight uppercase italic tracking-tighter">
            &quot;Menjadi jaringan bengkel modern terbesar di Indonesia yang{' '}
            <span className="text-yellow-500">mendemokratisasi</span> kualitas
            servis premium.&quot;
          </p>
        </div>

        {/* Misi Grid */}
        <div className="grid grid-cols-1 gap-4">
          {misiPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-white/5 bg-zinc-950/60 backdrop-blur-lg shadow-[0_5px_5px_rgba(255,215,0,0.55)] hover:bg-zinc-900/80 transition-all duration-500 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6 group-hover:bg-yellow-500 transition-colors">
                <span className="text-yellow-500 font-black group-hover:text-black">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white uppercase mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
