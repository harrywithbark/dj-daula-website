import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from './use-mobile'

/**
 * Returns a ref to attach to an element and a CSS transform string.
 * On mobile the transform is always '0px' to avoid iOS Safari jank.
 * Uses a passive scroll listener for smooth performance.
 */
export function useParallax(speed: number = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return

    const handleScroll = () => {
      const el = ref.current
      if (!el) return
      const rect    = el.getBoundingClientRect()
      const centerY = rect.top + rect.height / 2
      const viewH   = window.innerHeight
      const delta   = centerY - viewH / 2
      setOffset(delta * speed)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile, speed])

  const style = isMobile
    ? {}
    : { transform: `translateY(${offset}px)`, willChange: 'transform' as const }

  return { ref, style }
}
