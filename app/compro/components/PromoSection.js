export default function PromoSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fff10a]">
            30 Promo Senilai 8 Juta Rupiah
          </h2>
          <p className="text-gray-300 text-lg">
            Sebagai bentuk apresiasi untuk pelanggan dan investor awal, RAJA OTO
            memberikan:
          </p>
        </div>

        {/* Promo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Premium Promo */}
          <div className="group bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-500/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-yellow-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#fff10a] mb-3">
                5 Promo Spesial Premium
              </h3>
              <p className="text-gray-300">
                Layanan eksklusif untuk perawatan maksimal kendaraan Anda.
              </p>
              <div className="mt-6 inline-block px-6 py-2 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                <span className="text-yellow-400 font-semibold">
                  Premium Service
                </span>
              </div>
            </div>
          </div>

          {/* Free Promo */}
          <div className="group bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30 hover:border-green-500/60 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">
                25 Promo Gratis
              </h3>
              <p className="text-gray-300">
                Berbagai layanan gratis yang menguntungkan dan bernilai tinggi.
              </p>
              <div className="mt-6 inline-block px-6 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                <span className="text-green-400 font-semibold">
                  100% Gratis
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Total Value Box */}
        <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 backdrop-blur-md p-8 rounded-2xl border border-purple-500/30 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white mb-2">
            Total 30 Promo Besar
          </p>
          <p className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-2">
            Senilai 8 Juta Rupiah
          </p>
          <p className="text-gray-300 text-lg">Hanya di RAJA OTO Indonesia</p>
        </div>

        {/* Small Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-[#fff10a] font-bold text-lg mb-2">
              TERBATAS
            </div>
            <div className="text-sm text-gray-400">Slot Terbatas</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-[#fff10a] font-bold text-lg mb-2">
              EKSKLUSIF
            </div>
            <div className="text-sm text-gray-400">Pelanggan Khusus</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-[#fff10a] font-bold text-lg mb-2">PREMIUM</div>
            <div className="text-sm text-gray-400">Layanan Terbaik</div>
          </div>
          <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-[#fff10a] font-bold text-lg mb-2">
              BEST DEAL
            </div>
            <div className="text-sm text-gray-400">Harga Spesial</div>
          </div>
        </div>
      </div>
    </section>
  );
}
