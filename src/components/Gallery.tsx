import AnimatedSection from './AnimatedSection'

export default function Gallery() {
  const images = [
    {
      src: 'https://dpsszczytno.pl/wp-content/uploads/2022/12/sg21.jpg',
      alt: 'Budynek główny',
      span: 'col-span-2 row-span-2',
    },
    {
      src: 'https://dpsszczytno.pl/wp-content/uploads/2022/12/sports-gdf1fb729f_1920.jpg',
      alt: 'Aktywność fizyczna',
      span: '',
    },
    {
      src: 'https://dpsszczytno.pl/wp-content/uploads/2022/12/senior-gcdd96feaf_1920.jpg',
      alt: 'Nasi mieszkańcy',
      span: '',
    },
    {
      src: 'https://dpsszczytno.pl/wp-content/uploads/2022/12/retiree-ge983707ea_1920.jpg',
      alt: 'Czas wolny',
      span: '',
    },
    {
      src: 'https://dpsszczytno.pl/wp-content/uploads/2022/12/elderly-g15705b4f6_1920.jpg',
      alt: 'Opieka',
      span: '',
    },
    {
      src: 'https://dpsszczytno.pl/wp-content/uploads/2022/12/human-g38c32091f_1920.jpg',
      alt: 'Wsparcie',
      span: 'col-span-2',
    },
  ]

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sage-500 font-semibold uppercase tracking-wider text-sm">Galeria</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-6">
            Poznaj nasz dom
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Zapraszamy do wirtualnego spaceru po naszym ośrodku.
            Zobacz miejsca, w których nasi mieszkańcy spędzają czas.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <AnimatedSection key={index} delay={((index % 4) + 1) * 100 as 100 | 200 | 300 | 400}>
              <div className={`relative overflow-hidden rounded-2xl group ${image.span}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover min-h-[200px] scale-105 blur-[0.5px] group-hover:scale-110 group-hover:blur-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium">{image.alt}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
