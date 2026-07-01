import { Link } from 'wouter'
import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

export default function AboutPreview() {
  const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <section
      className="section-light py-20 md:py-28 border-b border-black/10"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#CE1F1F' }}>
                About Daula
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2
                id="about-heading"
                className="text-display-lg text-balance"
                style={{ color: '#111111' }}
              >
                I came up in Surrey&apos;s clubs.
                <br />
                <span style={{ color: '#CE1F1F' }}>Now I do your wedding.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base leading-relaxed" style={{ color: '#555' }}>
                I&apos;m Chetan &mdash; DJ Daula. I started behind the decks in Surrey&apos;s club scene, building a sound that blends Bhangra, Bollywood, UK Grime, and House into something that hits different at every event.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg font-bold" style={{ color: '#111' }}>
                Book Daula. Get Daula.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="text-daula-white text-sm font-semibold tracking-wide px-6 py-3 text-center neon-btn-red"
                >
                  Let&apos;s talk about your wedding &rarr;
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium transition-colors duration-200 flex items-center justify-center sm:justify-start gap-1"
                  style={{ color: '#666' }}
                >
                  Read the full story &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2}>
            <div className="relative aspect-[4/5] bg-daula-gray overflow-hidden">
              {!imgLoaded && (
                <div className="absolute inset-0 bg-daula-gray animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-daula-gray-mid/30 to-transparent animate-shimmer" />
                </div>
              )}
              <img
                src="/about-daula.png"
                alt="DJ Daula — Chetan, Surrey's South Asian wedding DJ"
                onLoad={() => setImgLoaded(true)}
                className={`object-cover w-full h-full transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              <div
                className="absolute bottom-0 left-0 w-1 h-16"
                aria-hidden="true"
                style={{ background: '#CE1F1F', boxShadow: '0 0 12px rgba(206,31,31,0.8)' }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
