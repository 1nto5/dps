import { useParams, Link } from 'react-router-dom'
import { newsArticles } from '../data/news'

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>()
  const article = newsArticles.find((a) => a.id === id)

  if (!article) {
    return (
      <section className="pt-32 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Artykuł nie znaleziony</h1>
          <p className="text-gray-600 mb-8">Przepraszamy, nie możemy znaleźć tego artykułu.</p>
          <Link
            to="/aktualnosci"
            className="inline-block px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-600 transition-colors"
          >
            Wróć do aktualności
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/aktualnosci"
          className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Wróć do aktualności
        </Link>

        <article>
          <header className="mb-8">
            <span className="text-sage-500 text-sm font-medium">{article.date}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">{article.title}</h1>
          </header>

          <div className="prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter((line) => line.startsWith('- '))
                return (
                  <ul key={index} className="list-disc list-inside text-gray-600 space-y-2 my-4">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
