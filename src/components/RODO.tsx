export default function RODO() {
  return (
    <section id="rodo" className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sage-500 font-semibold uppercase tracking-wider text-sm">RODO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-6">
            Ochrona danych osobowych
          </h2>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-warm-50 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Administrator danych osobowych</h3>
            <p className="text-gray-600 leading-relaxed">
              Administratorem Pani/Pana danych osobowych jest Dom Pomocy Społecznej im. Jana Pawła II
              w Szczytnie z siedzibą przy ul. Wielbarskiej 2, 12-100 Szczytno.
            </p>
          </div>

          <div className="bg-warm-50 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Inspektor Ochrony Danych</h3>
            <p className="text-gray-600 leading-relaxed">
              W sprawach związanych z ochroną danych osobowych można kontaktować się z Inspektorem
              Ochrony Danych pod adresem e-mail: <a href="mailto:iod@dpsszczytno.pl" className="text-sage-600 hover:text-sage-700">iod@dpsszczytno.pl</a>
            </p>
          </div>

          <div className="bg-warm-50 p-8 rounded-2xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Cel przetwarzania danych</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Pani/Pana dane osobowe przetwarzane są w celu:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Realizacji zadań wynikających z przepisów o pomocy społecznej</li>
              <li>Zapewnienia właściwej opieki mieszkańcom</li>
              <li>Prowadzenia dokumentacji medycznej</li>
              <li>Kontaktu z rodziną mieszkańca</li>
            </ul>
          </div>

          <div className="bg-warm-50 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Prawa osób</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Przysługuje Pani/Panu prawo do:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych (w określonych przypadkach)</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Wniesienia skargi do organu nadzorczego</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
