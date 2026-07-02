'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const sectionRef  = useRef<HTMLElement>(null)
  const videoRef    = useRef<HTMLVideoElement>(null)
  const textRef     = useRef<HTMLDivElement>(null)
  const isMobile    = useIsMobile()

  useEffect(() => { setMounted(true) }, [])

  // Scroll-driven parallax — direct DOM write, zero React re-renders
  useEffect(() => {
    if (isMobile) return

    const onScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const scrolled = Math.max(0, -section.getBoundingClientRect().top)

      // Video drifts DOWN at 45% of scroll speed (appears to linger behind)
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${scrolled * 0.45}px)`
      }
      // Text floats UP slightly faster than the page
      if (textRef.current) {
        textRef.current.style.transform = `translateY(-${scrolled * 0.12}px)`
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isMobile])

  const handleScrollToMusic = (e: React.MouseEvent) => {
    e.preventDefault()
    document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' })
  }

  const anim = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(22px)',
    transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  })

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-end bg-daula-black overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Video — scaled slightly so parallax drift never shows edges ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          zIndex: 'var(--z-bg)' as React.CSSProperties['zIndex'],
          transform: 'translateY(0)',
          willChange: 'transform',
          scale: '1.12',       /* buffer so edges never show during drift */
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Light tint — lets video breathe */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'rgba(8,8,8,0.38)',
          zIndex: 'var(--z-bg)' as React.CSSProperties['zIndex'],
        }}
      />

      {/* Bottom scrim — text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.08) 58%, transparent 78%)',
          zIndex: 'var(--z-bg)' as React.CSSProperties['zIndex'],
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
          zIndex: 'var(--z-bg)' as React.CSSProperties['zIndex'],
        }}
      />


      {/* Stage lights */}
      <div
        className="absolute -top-[20%] -left-[15%] w-[900px] h-[900px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(160,0,255,0.1) 0%, rgba(100,0,200,0.03) 40%, transparent 70%)',
          zIndex: 'var(--z-base)' as React.CSSProperties['zIndex'],
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[420px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(206,31,31,0.18) 0%, rgba(180,0,0,0.06) 40%, transparent 70%)',
          zIndex: 'var(--z-base)' as React.CSSProperties['zIndex'],
        }}
      />


      {/* ── Text block — parallax floats up on scroll ─────────────── */}
      <div
        ref={textRef}
        className="relative w-full max-w-7xl mx-auto px-5 md:px-12 pb-20 md:pb-28"
        style={{
          zIndex: 'var(--z-base)' as React.CSSProperties['zIndex'],
          willChange: 'transform',
        }}
      >
        {/* Label */}
        <div className="flex items-center gap-3 mb-5" style={anim(0.2)}>
          <span
            className="w-6 h-px"
            aria-hidden="true"
            style={{ background: '#CE1F1F', boxShadow: '0 0 8px rgba(206,31,31,0.9)' }}
          />
          <p
            className="text-xs font-semibold tracking-[0.35em] uppercase text-daula-red"
            style={{ textShadow: '0 0 12px rgba(206,31,31,0.8)' }}
          >
            Surrey&apos;s South Asian Wedding DJ
          </p>
        </div>

        {/* Headline */}
        <h1 className="text-display-xl text-daula-white mb-5 leading-none">
          <span className="block neon-text-red" style={anim(0.35)}>
            Your Night
          </span>
          <span
            className="block"
            style={{ ...anim(0.5), opacity: mounted ? 0.85 : 0 }}
          >
            by DJ Daula
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-sm md:text-base text-daula-gray-light leading-relaxed max-w-md mb-8"
          style={anim(0.7)}
        >
          Fifteen years. Five hundred+ weddings. Bhangra to Bollywood and everything your crowd didn&apos;t know they needed&nbsp;&mdash; you book me, I show up. Every night.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-3" style={anim(0.9)}>
          <Link
            href="/contact"
            className="text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm active:scale-[0.98] transition-all duration-200 text-center neon-btn-red"
          >
            Book Your Date &rarr;
          </Link>
          <a
            href="#music"
            onClick={handleScrollToMusic}
            className="text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm active:scale-[0.98] transition-all duration-200 text-center neon-btn-outline"
          >
            Listen to the Vibe &darr;
          </a>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mt-6" style={anim(1.1)}>
          <span className="text-xs tracking-[0.2em] uppercase text-daula-gray-light/70">Surrey, BC</span>
          <span className="w-1 h-1 rounded-full" aria-hidden="true" style={{ background: '#CE1F1F', boxShadow: '0 0 5px rgba(206,31,31,1)' }} />
          <span className="text-xs tracking-[0.2em] uppercase text-daula-gray-light/70">International</span>
          <span className="w-1 h-1 rounded-full" aria-hidden="true" style={{ background: '#CE1F1F', boxShadow: '0 0 5px rgba(206,31,31,1)' }} />
          <span className="text-xs tracking-[0.2em] uppercase text-daula-gray-light/70">Est. 2010</span>
        </div>
      </div>

      {/* Scroll indicator — vertical, right side */}
      <div
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2"
        aria-hidden="true"
        style={{
          opacity: mounted ? 0.5 : 0,
          transition: 'opacity 1s ease 1.3s',
          zIndex: 'var(--z-base)' as React.CSSProperties['zIndex'],
        }}
      >
        <span
          className="text-[9px] tracking-[0.25em] uppercase text-daula-gray-light"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, #CE1F1F, transparent)', boxShadow: '0 0 6px rgba(206,31,31,0.6)' }}
        />
      </div>
    </section>
  )
}
