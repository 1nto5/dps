import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    // Delay observer to allow CSS opacity:0 to apply first
    const timer = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (ref.current) {
          observer.observe(ref.current)
        }
      })
    })

    return () => {
      cancelAnimationFrame(timer)
      observer.disconnect()
    }
  }, [threshold])

  return { ref, isVisible }
}
