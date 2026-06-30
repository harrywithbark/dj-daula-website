import { Link } from 'wouter'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-daula-black overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle diagonal grain */}
      <div
        className="absolute inset-0 opacity-[0.04]"
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

      {/* Purple stage uplighting — top left, like the photo */}
      <div
        className="absolute -top-1/3 -left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(180,0,255,0.13) 0%, transparent 65%)',
        }}
      />

      {/* Purple uplighting — right side, mirrored */}
      <div
        className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(180,0,255,0.07) 0%, transparent 60%)',
        }}
      />

      {/* Red glow at bottom — warmth from the decks */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(206,31,31,0.20) 0%, transparent 70%)',
        }}
      />

      <div
        className="absolute top-0 left-0 right-0 h-px bg-daula-red/40"
        aria-hidden="true"
      />

      <div
        className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center flex flex-col items-center gap-6 md:gap-8"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-daula-red" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-daula-red">
            Surrey&apos;s South Asian Wedding DJ
          </p>
          <span className="w-6 h-px bg-daula-red" aria-hidden="true" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-balance leading-[0.95]">
          One DJ.{' '}
          <span className="text-daula-red">Your Night.</span>
          <br />
          No&nbsp;Substitutes.
        </h1>

        <p className="text-base md:text-lg text-daula-gray-light leading-relaxed max-w-xl text-balance">
          15 years. 500+ events. Bhangra to Bollywood and everything between&nbsp;&mdash; you booked Daula, you get Daula, at every single event.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-daula-red text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm hover:bg-daula-red/90 active:scale-[0.98] transition-all duration-200 text-center"
          >
            Book Your Date &rarr;
          </Link>
          <a
            href="#music"
            className="w-full sm:w-auto border border-daula-white/25 text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm hover:border-daula-white/60 hover:bg-daula-white/5 active:scale-[0.98] transition-all duration-200 text-center"
          >
            Listen to the Vibe &darr;
          </a>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs tracking-[0.2em] uppercase text-daula-gray-light">Surrey, BC</span>
          <span className="w-1 h-1 rounded-full bg-daula-red" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-daula-gray-light">International</span>
          <span className="w-1 h-1 rounded-full bg-daula-red" aria-hidden="true" />
          <span className="text-xs tracking-[0.2em] uppercase text-daula-gray-light">Est. 2010</span>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
        style={{
          opacity: mounted ? 0.4 : 0,
          transition: 'opacity 1s ease 0.6s',
        }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-daula-gray-light">Scroll</span>
        <div className="w-px h-8 bg-daula-red/60" />
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to top, #0F0F0F, transparent)' }}
      />
    </section>
  )
}
