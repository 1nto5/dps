import { Link } from 'react-router-dom'
import { newsArticles } from '../data/news'
import AnimatedSection from './AnimatedSection'

export default function News() {
  return (
    <section id="news" className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sage-500 font-semibold uppercase tracking-wider text-sm">Aktualności</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3 mb-6">
            Co słychać w naszym Domu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bądź na bieżąco z wydarzeniami i aktualnościami z życia naszej placówki.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {newsArticles.map((article, index) => (
            <AnimatedSection key={article.id} delay={((index % 2) + 1) * 100 as 100 | 200}>
              <article className="bg-warm-50 p-8 rounded-2xl hover:shadow-lg transition-shadow h-full">
                <span className="text-sage-500 text-sm font-medium">{article.date}</span>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">{article.title}</h3>
                <p className="text-gray-600">{article.excerpt}</p>
                <Link
                  to={`/aktualnosci/${article.id}`}
                  className="inline-block mt-4 text-sage-600 font-medium hover:text-sage-700 transition-colors"
                >
                  Czytaj więcej →
                </Link>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
