'use client'

import { useRef, ReactNode } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number
  scale?: number
}

export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  scale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (isMobile || prefersReduced) {
    return <div className={className}>{children}</div>
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -maxTilt
    const rotateY = ((x - cx) / cx) * maxTilt

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`

    // Move shine overlay
    const shine = el.querySelector<HTMLDivElement>('[data-shine]')
    if (shine) {
      const shineX = (x / rect.width) * 100
      const shineY = (y / rect.height) * 100
      shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.07) 0%, transparent 60%)`
      shine.style.opacity = '1'
    }
  }

  const handleMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`
    el.style.willChange = 'auto'

    const shine = el.querySelector<HTMLDivElement>('[data-shine]')
    if (shine) shine.style.opacity = '0'
  }

  const handleMouseEnter = () => {
    const el = ref.current
    if (el) el.style.willChange = 'transform'
  }

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.12s cubic-bezier(0.22, 1, 0.36, 1)',
        position: 'relative',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Shine overlay */}
      <div
        data-shine
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.2s ease',
          borderRadius: 'inherit',
          zIndex: 1,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>
    </div>
  )
}
