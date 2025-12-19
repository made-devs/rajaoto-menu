export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* 1. STRATEGI DARK OVERLAY: Meredam background motif agar tidak terlalu nabrak */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 2. STRATEGI GLASSMORPHISM: Container utama dengan blur tinggi */}
        <div className="p-8  rounded-[3rem] border border-white/10 bg-zinc-950/70 backdrop-blur-2xl shadow-[0_10px_15px_rgba(255,215,0,0.85)]">
          <div className="inline-block px-4 py-1 mb-8 border border-yellow-500/30 bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-widest rounded-full">
            The Future of Workshop
          </div>

          <h1 className="text-5xl font-black mb-12 leading-[0.9] tracking-tighter uppercase text-white">
            TENTANG <span className="text-yellow-500 italic">KAMI</span>
          </h1>

          <div className="grid grid-cols-1 gap-12 items-start mt-12">
            {/* Quote Section dengan Border Kuning Solid */}
            <div className="border-l-4 border-yellow-500 pl-8">
              <p className="text-xl  font-light leading-tight italic text-zinc-100">
                &quot;Raja Oto lahir dari satu visi besar: menghadirkan bengkel
                modern yang benar-benar bisa dipercaya.&quot;
              </p>
              <p className="mt-4 text-yellow-500 font-bold uppercase tracking-widest text-sm">
                Standar Mesin, Bukan Feeling.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Kami membangun ekosistem otomotif di mana pelanggan merasa aman,
                transparan, dan dilayani seperti di bengkel kelas premium dengan
                harga yang masuk akal.
              </p>

              {/* Stats Section (fix mobile overflow) */}
              <div className="flex flex-col sm:flex-row sm:items-end gap-6">
                <div className="flex flex-col min-w-0">
                  <span className="text-3xl sm:text-4xl font-black text-white leading-none">
                    100%
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-yellow-500 font-bold">
                    Machine Based
                  </span>
                </div>

                {/* Divider: horizontal on mobile, vertical on >=sm */}
                <div className="h-px w-full bg-white/10 sm:h-12 sm:w-px" />

                <div className="flex flex-col min-w-0">
                  <span className="text-3xl sm:text-4xl font-black text-white leading-none break-words">
                    PREMIUM
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-yellow-500 font-bold">
                    Standard Service
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
