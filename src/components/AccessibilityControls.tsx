import { useEffect, useState } from 'react'

type FontSize = 'normal' | 'large'

export default function AccessibilityControls() {
  const [highContrast, setHighContrast] = useState(() =>
    localStorage.getItem('highContrast') === 'true'
  )
  const [fontSize, setFontSize] = useState<FontSize>(() =>
    (localStorage.getItem('fontSize') as FontSize) || 'normal'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast)
    localStorage.setItem('highContrast', String(highContrast))
  }, [highContrast])

  useEffect(() => {
    document.documentElement.classList.remove('font-normal', 'font-large')
    document.documentElement.classList.add(`font-${fontSize}`)
    localStorage.setItem('fontSize', fontSize)
  }, [fontSize])

  const toggleFontSize = () => {
    setFontSize(fontSize === 'normal' ? 'large' : 'normal')
  }

  const fontLabels: Record<FontSize, string> = {
    normal: 'A',
    large: 'A+',
  }

  return (
    <div className="flex items-center gap-[8px]">
      <button
        onClick={toggleFontSize}
        className="px-[12px] py-[8px] rounded-lg bg-sage-100 hover:bg-sage-200 text-sage-700 transition-colors font-bold text-[14px] min-w-[48px]"
        aria-label={`Zmień rozmiar czcionki (obecnie: ${fontSize})`}
        title="Powiększ czcionkę"
      >
        {fontLabels[fontSize]}
      </button>

      <button
        onClick={() => setHighContrast(!highContrast)}
        className={`p-[8px] rounded-lg transition-colors ${
          highContrast
            ? 'bg-black text-yellow-400 hover:bg-gray-900'
            : 'bg-sage-100 hover:bg-sage-200 text-sage-700'
        }`}
        aria-label={highContrast ? 'Wyłącz wysoki kontrast' : 'Włącz wysoki kontrast'}
        title="Wysoki kontrast"
        aria-pressed={highContrast}
      >
        <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
    </div>
  )
}
