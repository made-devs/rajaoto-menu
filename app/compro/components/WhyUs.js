export default function WhyUs() {
  const services = [
    {
      icon: '🔧',
      name: 'Engine Tune Up Machine',
    },
    {
      icon: '💨',
      name: 'Carbon & Intake Machine',
    },
    {
      icon: '❄️',
      name: '3R AC Machine',
    },
    {
      icon: '💉',
      name: 'Injector Needle Valve Machine',
    },
    {
      icon: '🧹',
      name: 'Deep Cleaning Evaporator / Dashboard Total',
    },
    {
      icon: '✨',
      name: 'Coating Interior, Jok, Glass, Headlamp & Engine Bay',
    },
    {
      icon: '🔩',
      name: 'Rematching Disc Brake',
    },
    {
      icon: '⚡',
      name: 'Diagnosa Kaki-Kaki & Electrical',
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fff10a]">
            ⚡ Kenapa RAJA OTO Berbeda?
          </h2>
          <p className="text-gray-300 text-lg">
            Kami menghadirkan layanan paling lengkap se-Indonesia dengan standar
            machine-based.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-5 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-yellow-500/20 rounded-lg text-2xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <span className="font-medium text-[#fff10a]">{service.name}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-yellow-500/20 text-center">
          <p className="text-lg md:text-xl font-semibold text-white mb-2">
            Dan puluhan layanan premium lainnya
          </p>
          <p className="text-gray-300">
            Semua machine-based, bergaransi, dan harga transparan — standar yang
            tidak dimiliki bengkel umum.
          </p>
        </div>

        {/* Stats/Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-[#fff10a] mb-1">100%</div>
            <div className="text-sm text-white">Machine-Based</div>
          </div>
          <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-[#fff10a] mb-1">50+</div>
            <div className="text-sm text-white">Layanan Premium</div>
          </div>
          <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-[#fff10a] mb-1">✓</div>
            <div className="text-sm text-white">Bergaransi</div>
          </div>
          <div className="text-center p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
            <div className="text-3xl font-bold text-[#fff10a] mb-1">💯</div>
            <div className="text-sm text-white">Harga Transparan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
