import Image from 'next/image';

export default function ZackLeeSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fff10a]">
            🎥 Pesan dari Zack Lee
          </h2>
          <p className="text-white text-lg">
            Komisaris & Co-Owner RAJA OTO Indonesia
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
          {/* Area Foto */}
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] bg-gradient-to-br from-yellow-500/20 to-gray-800 rounded-xl overflow-hidden shadow-2xl relative group">
              <Image
                src="/images/zack-lee.jpg"
                alt="Zack Lee - Komisaris & Co-Owner Raja Oto"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                <p className="text-white font-bold text-xl">Zack Lee</p>
                <p className="text-[#fff10a] text-sm font-medium">
                  Komisaris & Co-Owner
                </p>
              </div>
            </div>
          </div>

          {/* Area Konten */}
          <div className="w-full md:w-2/3">
            <blockquote className="relative">
              <div className="absolute -left-2 -top-2 text-6xl text-yellow-300 font-serif">
                &quot;
              </div>
              <p className="text-lg md:text-xl italic text-white leading-relaxed pl-6 mb-6">
                Saya sudah bertahun-tahun melihat teman, keluarga, dan
                orang-orang dekat kecewa saat servis mobil. Harga nggak jelas,
                pengerjaan asal-asalan, dan nggak ada jaminan. Itu yang bikin
                saya memutuskan untuk terjun langsung dan membangun RAJA OTO.
                Saya ingin ada bengkel yang jujur, lengkap, modern, dan bisa
                diandalkan semua orang.
              </p>
            </blockquote>

            <div className="border-l-4 border-[#fff10a] pl-4 py-2 bg-yellow-500/5">
              <p className="text-white leading-relaxed">
                Zack Lee bukan hanya wajah RAJA OTO. Ia adalah komisaris,
                co-owner, dan penggerak utama dalam membangun budaya kerja
                profesional, ramah, dan berstandar tinggi.
              </p>
            </div>

            {/* Badge/Label */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-yellow-500/40 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30">
                Visioner
              </span>
              <span className="px-4 py-2 bg-blue-500/40 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                Profesional
              </span>
              <span className="px-4 py-2 bg-green-500/40 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                Terpercaya
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
