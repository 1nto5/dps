import AnimatedSection from './AnimatedSection'

export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Troska',
      description: 'Każdy mieszkaniec jest dla nas wyjątkowy. Otaczamy go ciepłem i zrozumieniem.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Bezpieczeństwo',
      description: 'Zapewniamy całodobową opiekę i profesjonalny nadzór medyczny.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Wspólnota',
      description: 'Budujemy przyjazną atmosferę, w której każdy czuje się jak w domu.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: 'Profesjonalizm',
      description: 'Nasz wykwalifikowany personel nieustannie podnosi swoje kwalifikacje.',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <span className="text-sage-500 font-semibold uppercase tracking-wider text-sm">O nas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-6">
              Dom Pomocy Społecznej im. Jana Pawła II
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nasza placówka przeznaczona jest dla osób przewlekle psychicznie chorych.
              Dbamy o dobre samopoczucie naszych podopiecznych, nie zapominając o indywidualności
              każdego z nich.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Zapewniamy godne warunki życia ze szczególnym poszanowaniem prawa do wolności,
              intymności i poczucia bezpieczeństwa. Nasi wykwalifikowani terapeuci wspierają
              mieszkańców w aktywizacji i rozwijaniu zainteresowań.
            </p>
            <div className="flex gap-8">
              <div>
                <span className="text-4xl font-bold text-sage-600">196</span>
                <p className="text-gray-500 text-sm">miejsc</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-sage-600">171</span>
                <p className="text-gray-500 text-sm">mieszkańców</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-sage-600">2</span>
                <p className="text-gray-500 text-sm">lokalizacje</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              <div className="rounded-2xl shadow-xl w-full h-[500px] overflow-hidden">
                <img
                  src="https://dpsszczytno.pl/wp-content/uploads/2022/12/human-g38c32091f_1920.jpg"
                  alt="Dom Pomocy Społecznej im. Jana Pawła II"
                  className="w-full h-full object-cover scale-105 blur-[1px]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-sage-500 text-white p-6 rounded-2xl shadow-lg">
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sage-100">Opieka całodobowa</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          {values.map((value, index) => (
            <AnimatedSection key={index} delay={(index + 1) * 100 as 100 | 200 | 300 | 400}>
              <div className="bg-warm-50 p-8 rounded-2xl hover:shadow-lg transition-shadow h-full">
                <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
