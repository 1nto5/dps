import { ReactNode } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

interface Props {
  children: ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right'
  delay?: number
}

export default function AnimatedSection({ children, className = '', direction = 'up', delay = 0 }: Props) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  const animationClass = direction === 'up'
    ? 'animate-on-scroll'
    : direction === 'left'
      ? 'animate-on-scroll-left'
      : 'animate-on-scroll-right'

  const delayClass = delay > 0 ? `animate-delay-${delay}` : ''

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </div>
  )
}
