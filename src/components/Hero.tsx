export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 blur-[2px]"
        style={{
          backgroundImage: 'url(https://dpsszczytno.pl/wp-content/uploads/2022/12/sg21.jpg)',
        }}
      >
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-sage-900/80 via-sage-800/60 to-warm-50"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-[80px]">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Dom Pomocy Społecznej
          <span className="block text-warm-300">im. Jana Pawła II</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Zapewniamy całodobową opiekę dla osób przewlekle psychicznie chorych, dbając o godne warunki życia z poszanowaniem prawa do wolności, intymności i bezpieczeństwa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-white hover:bg-warm-100 text-sage-700 font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            Skontaktuj się z nami
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-sage-700 hover:bg-sage-800 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl border-2 border-white/50"
          >
            Dowiedz się więcej
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
