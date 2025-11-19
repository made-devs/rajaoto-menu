export default function InvestmentProgram() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Background Pattern/Decoration */}
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fff10a]">
            💰 Program 5 Juta Bisa Punya RAJA OTO
          </h2>
          <p className="text-xl text-gray-300">
            Raja Oto juga membuka peluang bagi siapa pun untuk naik kelas.
          </p>
        </div>

        {/* Main Quote Box */}
        <div className=" backdrop-blur-md p-8 md:p-12 rounded-2xl border border-blue-500/30 mb-8 shadow-2xl">
          <div className="text-center">
            <div className="text-6xl text-[#fff10a] font-serif mb-4">
              &quot;
            </div>
            <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
              Hanya dengan{' '}
              <span className="text-[#fff10a] font-bold">5 juta rupiah</span>,
              Anda bisa menjadi bagian dari pemilik RAJA OTO Indonesia.
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-10">
          <p className="text-white text-center leading-relaxed">
            Program ini dibuat langsung oleh Zack Lee dan tim untuk memberi
            kesempatan masyarakat memiliki aset bisnis otomotif tanpa modal
            ratusan juta.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-[#fff10a] font-bold mb-2">Modal Terjangkau</h3>
            <p className="text-white text-sm">
              Investasi mulai dari 5 juta rupiah saja
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="text-[#fff10a] font-bold mb-2">
              Peluang Berkembang
            </h3>
            <p className="text-white text-sm">
              Menjadi bagian dari bisnis otomotif terpercaya
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-[#fff10a] font-bold mb-2">
              Bimbingan Langsung
            </h3>
            <p className="text-white text-sm">
              Didampingi oleh Zack Lee dan tim profesional
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 hover:scale-105">
            Pelajari Program Investasi
          </button>
        </div>
      </div>
    </section>
  );
}
