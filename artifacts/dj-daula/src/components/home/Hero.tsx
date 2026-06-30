import { Link } from 'wouter'
import { useEffect, useState } from 'react'
import ParticleCanvas from '@/components/ParticleCanvas'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const handleScrollToMusic = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('music')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const animStyle = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  })

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-daula-black overflow-hidden"
      aria-label="Hero"
    >
      <ParticleCanvas />

      {/* Diagonal grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #ffffff,
            #ffffff 1px,
            transparent 1px,
            transparent 24px
          )`,
        }}
      />

      {/* Strong purple uplighting — top-left stage light */}
      <div
        className="absolute -top-[20%] -left-[15%] w-[900px] h-[900px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(160,0,255,0.45) 0%, rgba(100,0,200,0.15) 40%, transparent 70%)',
        }}
      />
      {/* Purple accent top-right */}
      <div
        className="absolute -top-[10%] right-0 w-[500px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at top right, rgba(140,0,255,0.30) 0%, transparent 65%)',
        }}
      />
      {/* Red floor wash — bottom center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(206,31,31,0.55) 0%, rgba(180,0,0,0.2) 40%, transparent 70%)',
        }}
      />
      {/* Warm red mid-stage glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(206,31,31,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Neon top bar — glowing red scanline */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        aria-hidden="true"
        style={{
          background: '#CE1F1F',
          boxShadow: '0 0 12px 3px rgba(206,31,31,0.8), 0 0 40px 8px rgba(206,31,31,0.4)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center flex flex-col items-center gap-6 md:gap-8">
        {/* Label */}
        <div className="flex items-center gap-3" style={animStyle(0.2)}>
          <span
            className="w-8 h-px"
            aria-hidden="true"
            style={{ background: '#CE1F1F', boxShadow: '0 0 8px rgba(206,31,31,0.9)' }}
          />
          <p
            className="text-xs font-semibold tracking-[0.35em] uppercase text-daula-red"
            style={{ textShadow: '0 0 12px rgba(206,31,31,0.8)' }}
          >
            Surrey&apos;s South Asian Wedding DJ
          </p>
          <span
            className="w-8 h-px"
            aria-hidden="true"
            style={{ background: '#CE1F1F', boxShadow: '0 0 8px rgba(206,31,31,0.9)' }}
          />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-balance leading-[0.95] text-daula-white">
          <span className="inline-block" style={animStyle(0.35)}>
            One DJ.{" "}
          </span>
          <span
            className="inline-block neon-text-red"
            style={animStyle(0.55)}
          >
            Your Night.
          </span>
          <br />
          <span
            className="inline-block opacity-40"
            style={animStyle(0.75)}
          >
            No&nbsp;Substitutes.
          </span>
        </h1>

        <p
          className="text-base md:text-lg text-daula-gray-light leading-relaxed max-w-xl text-balance"
          style={animStyle(0.95)}
        >
          15 years. 500+ events. Bhangra to Bollywood and everything between&nbsp;&mdash; you booked Daula, you get Daula, at every single event.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2" style={animStyle(1.15)}>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm active:scale-[0.98] transition-all duration-200 text-center neon-btn-red"
          >
            Book Your Date &rarr;
          </Link>
          <a
            href="#music"
            onClick={handleScrollToMusic}
            className="w-full sm:w-auto text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm active:scale-[0.98] transition-all duration-200 text-center neon-btn-outline"
          >
            Listen to the Vibe &darr;
          </a>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mt-2" style={animStyle(1.35)}>
          <span className="text-xs tracking-[0.2em] uppercase text-daula-gray-light">Surrey, BC</span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            aria-hidden="true"
            style={{ background: '#CE1F1F', boxShadow: '0 0 6px rgba(206,31,31,1)' }}
          />
          <span className="text-xs tracking-[0.2em] uppercase text-daula-gray-light">International</span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            aria-hidden="true"
            style={{ background: '#CE1F1F', boxShadow: '0 0 6px rgba(206,31,31,1)' }}
          />
          <span className="text-xs tracking-[0.2em] uppercase text-daula-gray-light">Est. 2010</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
        style={{
          opacity: mounted ? 0.6 : 0,
          transition: 'opacity 1s ease 0.6s',
        }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-daula-gray-light">Scroll</span>
        <div
          className="w-px h-8"
          style={{ background: '#CE1F1F', boxShadow: '0 0 6px rgba(206,31,31,0.9)' }}
        />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to top, #0F0F0F, transparent)' }}
      />
    </section>
  )
}
