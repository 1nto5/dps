import AnimatedSection from './AnimatedSection'

export default function BIP() {
  const bipSections = [
    {
      title: 'Informacje ogólne',
      links: [
        'Status prawny',
        'Organizacja',
        'Przedmiot działalności',
        'Kompetencje',
      ],
    },
    {
      title: 'Organy i osoby sprawujące funkcje',
      links: [
        'Dyrekcja',
        'Kadra zarządzająca',
        'Struktura organizacyjna',
      ],
    },
    {
      title: 'Prawo',
      links: [
        'Regulamin organizacyjny',
        'Statut',
        'Zarządzenia wewnętrzne',
        'Uchwały',
      ],
    },
    {
      title: 'Dane ekonomiczne',
      links: [
        'Majątek',
        'Budżet',
        'Sprawozdania finansowe',
        'Zamówienia publiczne',
      ],
    },
  ]

  return (
    <section id="bip" className="pt-32 pb-24 bg-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sage-500 font-semibold uppercase tracking-wider text-sm">BIP</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-6">
            Biuletyn Informacji Publicznej
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dostęp do informacji publicznej zgodnie z ustawą z dnia 6 września 2001 r.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bipSections.map((section, index) => (
            <AnimatedSection key={index} delay={((index % 4) + 1) * 100 as 100 | 200 | 300 | 400}>
              <div className="bg-white p-6 rounded-2xl shadow-sm h-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-4 border-b border-gray-100">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-sage-600 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4 text-sage-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Informacja o BIP</h4>
                <p className="text-gray-600 leading-relaxed">
                  Biuletyn Informacji Publicznej to urzędowy publikator teleinformatyczny, składający się
                  z ujednoliconego systemu stron w sieci teleinformatycznej. BIP został stworzony w celu
                  powszechnego udostępniania informacji publicznej.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
