export default function Documents() {
  const documents = [
    {
      category: 'Dokumenty do pobrania',
      items: [
        { name: 'Wniosek o przyjęcie do DPS', type: 'PDF', size: '245 KB' },
        { name: 'Regulamin Domu Pomocy Społecznej', type: 'PDF', size: '312 KB' },
        { name: 'Cennik usług', type: 'PDF', size: '98 KB' },
        { name: 'Karta praw mieszkańca', type: 'PDF', size: '156 KB' },
      ],
    },
    {
      category: 'Sprawozdania',
      items: [
        { name: 'Sprawozdanie roczne 2024', type: 'PDF', size: '1.2 MB' },
        { name: 'Sprawozdanie roczne 2023', type: 'PDF', size: '1.1 MB' },
        { name: 'Raport z kontroli 2024', type: 'PDF', size: '456 KB' },
      ],
    },
  ]

  return (
    <section id="documents" className="pt-32 pb-24 bg-warm-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sage-500 font-semibold uppercase tracking-wider text-sm">Dokumenty</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-6">
            Dokumenty do pobrania
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Znajdziesz tu wszystkie niezbędne dokumenty i formularze.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {documents.map((section, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">{section.category}</h3>
              <ul className="space-y-4">
                {section.items.map((doc, docIndex) => (
                  <li key={docIndex}>
                    <a
                      href="#"
                      className="flex items-center justify-between p-4 rounded-xl hover:bg-sage-50 transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 group-hover:bg-sage-200 transition-colors">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800 block">{doc.name}</span>
                          <span className="text-sm text-gray-500">{doc.type} • {doc.size}</span>
                        </div>
                      </div>
                      <svg className="w-5 h-5 text-sage-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
