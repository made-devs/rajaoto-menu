export default function StandardService() {
  const machines = [
    "Engine Tune Up Machine",
    "Carbon & Intake Machine",
    "3R AC Machine",
    "Injector Needle Valve Machine",
    "Rematching Disc Brake",
    "Diagnosa Electrical",
  ];

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* 1. STRATEGI DARK OVERLAY: Meredam motif background agar fokus ke teks */}
      {/* <div className="absolute inset-0 bg-black/50 pointer-events-none z-0" /> */}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 2. STRATEGI GLASSMORPHISM: Kontainer utama yang transparan tapi buram */}
        <div className="p-8 md:p-16 rounded-[3rem] border border-white/10 bg-zinc-950/80 backdrop-blur-3xl shadow-2xl">
          {/* Header Section */}
          <div className="mb-16">
            <h2
              className="
                text-2xl sm:text-3xl md:text-5xl
                font-black text-white uppercase tracking-tighter
                leading-[1.05]
                flex flex-col sm:flex-row
                items-start sm:items-center
                gap-3 sm:gap-4
                max-w-full
              "
            >
              <span className="w-12 h-2 bg-yellow-500 rounded-full shrink-0" />
              <span className="min-w-0 break-words">
                Professional{" "}
                <span className="text-yellow-500 italic">
                  Machine Standards
                </span>
              </span>
            </h2>

            <p className="mt-4 text-zinc-400 font-light max-w-xl">
              Investasi teknologi terbaru untuk menjamin presisi pengerjaan yang
              tidak bisa dicapai dengan cara manual.
            </p>
          </div>

          {/* Grid Mesin dengan Efek Card yang Tajam */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {machines.map((name, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl border border-white/5 bg-white/[0.03] flex flex-col justify-between hover:bg-yellow-500 transition-all duration-500 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex justify-between items-start mb-12">
                  <span className="text-zinc-500 group-hover:text-black/50 font-mono text-xs tracking-widest">
                    SYSTEM // 0{idx + 1}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 group-hover:bg-black"></div>
                </div>
                <h4 className="text-xl font-black uppercase text-white group-hover:text-black leading-none tracking-tighter transition-colors">
                  {name}
                </h4>
              </div>
            ))}
          </div>

          {/* Footer Quote dengan Glass Effect Tambahan */}
          <div className="mt-12 p-8 rounded-2xl bg-black/40 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-4 items-start">
              <span className="text-4xl text-yellow-500 font-serif leading-none">
                "
              </span>
              <p className="text-zinc-300 max-w-xl text-sm md:text-base italic font-light leading-relaxed">
                Kami tidak menggunakan sistem perkiraan. Semua diagnosa
                dilakukan oleh mesin canggih untuk akurasi 100% dan keamanan
                kendaraan Anda.
              </p>
            </div>

            <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-8">
              <span className="block text-2xl font-black text-white tracking-tighter leading-none mb-1">
                RAJA OTO
              </span>
              <span className="text-[10px] text-yellow-500 font-bold uppercase tracking-[0.3em]">
                Tech-Driven Workshop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
