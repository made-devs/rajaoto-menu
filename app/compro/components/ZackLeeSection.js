import Image from 'next/image';

export default function ZackLeeSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* 1. STRATEGI DARK OVERLAY: Menjinakkan background motif agar tidak distraksi */}
      {/* <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" /> */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 2. STRATEGI GLASSMORPHISM: Kontainer utama dengan efek blur tebal */}
        <div className="p-8 md:p-16 rounded-[3rem] border border-white/10 bg-zinc-950/80 backdrop-blur-3xl shadow-2xl">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            {/* Foto Area dengan Industrial Frame */}
            <div className="w-full md:w-2/5 relative group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/about1.webp"
                  alt="Zack Lee"
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* Overlay Hitam Tipis di Foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Badge "The Visionary" yang melayang */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 py-4 px-6 shadow-2xl hidden md:block -rotate-2">
                <p className="text-black font-black text-xl uppercase leading-none italic tracking-tighter">
                  The Visionary
                </p>
              </div>
            </div>

            {/* Area Konten Teks */}
            <div className="w-full md:w-3/5">
              <div className="inline-block mb-6">
                <h2 className="text-yellow-500 font-mono text-xs uppercase tracking-[0.4em] mb-2">
                  Direct Message
                </h2>
                <div className="h-[2px] w-full bg-yellow-500/30" />
              </div>

              <h3 className="text-5xl md:text-7xl font-black text-white uppercase mb-10 leading-[0.9] tracking-tighter">
                ZACK <br />
                <span className="text-yellow-400 italic">LEE</span>
              </h3>

              {/* Quote dengan Gaya Premium */}
              <div className="relative mb-10">
                <span className="absolute -left-6 -top-4 text-6xl text-yellow-500/20 font-serif">
                  &quot;
                </span>
                <p className="text-xl md:text-2xl font-light italic text-zinc-100 leading-relaxed pl-4">
                  Saya bosan melihat orang kecewa saat servis mobil. Harga tidak
                  jelas, pengerjaan asal-asalan. Di{' '}
                  <span className="text-yellow-500 font-bold not-italic">
                    RAJA OTO
                  </span>
                  , kami membangun standar kejujuran baru.
                </p>
              </div>

              {/* Deskripsi Tambahan */}
              <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 border-l-4 border-l-yellow-500">
                <p className="text-zinc-400 text-base leading-relaxed font-light">
                  Zack Lee sebagai Komisaris & Co-Owner memastikan setiap unit
                  RAJA OTO memiliki standar kerja profesional, ramah, dan
                  berteknologi tinggi bagi seluruh pelanggan di Indonesia.
                </p>
              </div>

              {/* Nama & Jabatan Mobile Style */}
              <div className="mt-8 flex items-center gap-4 md:hidden">
                <div className="w-10 h-[2px] bg-yellow-500" />
                <p className="text-white font-bold uppercase text-sm tracking-widest">
                  Komisaris & Co-Owner
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
