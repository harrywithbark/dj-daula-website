import ScrollReveal from '@/components/ScrollReveal'
import TiltCard from '@/components/TiltCard'

const TESTIMONIALS = [
  {
    quote:
      'DJ Daula had our entire family on the dance floor from the first song. The way he moved from Bhangra into something everyone could vibe with — even our elders — was flawless. Our Sangeet was the highlight of the whole weekend.',
    names: 'Simran & Harjot',
    event: 'Sangeet',
    year: '2024',
    placeholder: false,
  },
  {
    quote:
      'We had a mixed crowd — Punjabi family, Western friends — and Daula handled it perfectly. Bhangra sets, then Top 40, back to Punjabi. Nobody sat down all night. He reads a room like no one else.',
    names: 'Priya & Michael',
    event: 'Reception',
    year: '2023',
    placeholder: false,
  },
  {
    quote: null,
    names: null,
    event: null,
    year: null,
    placeholder: true,
  },
]

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="Five stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-daula-gold"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      className="relative section-light py-20 md:py-28 border-b border-black/10 overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Subtle red ambient glow bottom-center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(206,31,31,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
                Reviews
              </p>
              <h2
                id="testimonials-heading"
                className="text-display-lg text-balance"
                style={{ color: '#111111' }}
              >
                From couples who trusted
                <br />
                Daula with their night.
              </h2>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#666' }}>
              Every review is unedited. Every couple is real.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) =>
            t.placeholder ? (
              <ScrollReveal key={i} delay={i * 0.15}>
                <article
                  className="border border-dashed p-8 flex flex-col items-center justify-center text-center gap-3 min-h-56"
                  style={{ borderColor: 'rgba(0,0,0,0.15)' }}
                  aria-label="Testimonial placeholder"
                >
                  <div className="w-8 h-0.5 mb-1" style={{ background: 'rgba(0,0,0,0.15)' }} aria-hidden="true" />
                  <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#888' }}>
                    Review coming soon
                  </p>
                  <p className="text-xs max-w-[180px] leading-relaxed" style={{ color: '#aaa' }}>
                    Real review from a recent couple to be added here.
                  </p>
                </article>
              </ScrollReveal>
            ) : (
              <ScrollReveal key={i} delay={i * 0.15}>
                <TiltCard maxTilt={4} scale={1.01} className="h-full">
                  <article
                    className="glass-card-light group relative p-7 flex flex-col gap-5 overflow-hidden h-full"
                    style={{ borderRadius: 0 }}
                    aria-label={`Testimonial from ${t.names}`}
                  >
                    {/* Left-border red accent on hover */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[2px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
                      aria-hidden="true"
                      style={{ background: '#CE1F1F', boxShadow: '0 0 8px rgba(206,31,31,0.4)' }}
                    />

                    <StarRating />

                    <div
                      aria-hidden="true"
                      className="text-5xl font-black leading-none -mb-2 select-none"
                      style={{ color: 'rgba(206,31,31,0.1)' }}
                    >
                      &ldquo;
                    </div>

                    <blockquote className="text-sm leading-relaxed flex-1" style={{ color: '#444' }}>
                      {t.quote}
                    </blockquote>

                    <footer className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                      <div
                        className="w-8 h-8 bg-daula-red flex items-center justify-center flex-shrink-0"
                        aria-hidden="true"
                      >
                        <span className="text-xs font-black text-white">
                          {t.names?.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-bold tracking-wide" style={{ color: '#111' }}>{t.names}</p>
                        <p className="text-xs" style={{ color: '#666' }}>
                          {t.event}, {t.year}
                        </p>
                      </div>
                    </footer>
                  </article>
                </TiltCard>
              </ScrollReveal>
            )
          )}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-8">
            <a
              href="#"
              className="text-sm font-semibold px-5 py-2.5 inline-flex items-center gap-2 transition-all duration-200"
              style={{
                color: '#111',
                border: '1px solid rgba(0,0,0,0.2)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(206,31,31,0.5)'
                e.currentTarget.style.color = '#CE1F1F'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'
                e.currentTarget.style.color = '#111'
              }}
              aria-label="Read more reviews on Google"
            >
              Read more on Google &rarr;
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
