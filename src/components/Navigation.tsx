import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AccessibilityControls from './AccessibilityControls'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const location = useLocation()

  const links = [
    { href: '/#home', label: 'Strona główna' },
    { href: '/#about', label: 'O nas' },
    { href: '/#services', label: 'Usługi' },
    { href: '/#gallery', label: 'Galeria' },
    { href: '/#contact', label: 'Kontakt' },
  ]

  const moreLinks = [
    { href: '/aktualnosci', label: 'Aktualności' },
    { href: '/dokumenty', label: 'Dokumenty' },
    { href: '/rodo', label: 'RODO' },
    { href: '/bip', label: 'BIP' },
  ]

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === '/') {
      e.preventDefault()
      const hash = href.replace('/', '')
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[80px]">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-[48px] h-[48px] bg-sage-500 rounded-full flex items-center justify-center shrink-0">
              <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className="text-[18px] font-semibold text-sage-700 whitespace-nowrap">Dom Pomocy Społecznej</span>
              <span className="block text-[13px] text-sage-500">im. Jana Pawła II w Szczytnie</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="text-[16px] text-gray-600 hover:text-sage-600 transition-colors font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <div className="relative">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
                className="text-[16px] text-gray-600 hover:text-sage-600 transition-colors font-medium whitespace-nowrap flex items-center gap-1"
              >
                Więcej
                <svg className={`w-4 h-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {moreOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-4 py-2 text-[15px] text-gray-600 hover:bg-sage-50 hover:text-sage-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <AccessibilityControls />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-600"
              aria-label="Menu"
            >
              <svg className="w-[24px] h-[24px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="block py-2 text-[16px] text-gray-600 hover:text-sage-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-200 mt-2 pt-2">
              {moreLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-[16px] text-gray-600 hover:text-sage-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
