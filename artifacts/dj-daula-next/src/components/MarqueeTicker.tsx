'use client'

import { useEffect, useRef } from 'react'

interface MarqueeTickerProps {
  items: string[]
  speed?: number
  className?: string
}

export default function MarqueeTicker({
  items,
  speed = 1,
  className = '',
}: MarqueeTickerProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number>(0)
  const posRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const move = () => {
      posRef.current -= speed * 0.5
      const width = track.scrollWidth / 2
      if (Math.abs(posRef.current) >= width) {
        posRef.current = 0
      }
      track.style.transform = `translateX(${posRef.current}px)`
      animRef.current = requestAnimationFrame(move)
    }

    animRef.current = requestAnimationFrame(move)
    return () => cancelAnimationFrame(animRef.current)
  }, [speed])

  const content = items.map((item, i) => (
    <span
      key={i}
      className="inline-flex items-center gap-3 shrink-0 px-4"
    >
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ background: '#CE1F1F', boxShadow: '0 0 4px rgba(206,31,31,0.9)' }}
      />
      <span className="text-xs font-semibold tracking-[0.2em] uppercase text-daula-gray-light whitespace-nowrap">
        {item}
      </span>
    </span>
  ))

  return (
    <div
      className={`relative overflow-hidden border-y border-daula-gray-mid bg-daula-black/80 backdrop-blur-sm ${className}`}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex items-center py-3"
        style={{ willChange: 'transform' }}
      >
        {content}
        {content}
      </div>
    </div>
  )
}
