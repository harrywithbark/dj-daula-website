// TODO: replace the third testimonial with a real one from Chetan

const TESTIMONIALS = [
  {
    quote:
      'DJ Daula had our entire family on the dance floor from the first song. The way he moved from Bhangra into something everyone could vibe with — even our elders — was flawless. Our Sangeet was the highlight of the whole weekend.',
    names: 'Simran & Harjot',
    event: 'Sangeet',
    year: '2024',
  },
  {
    quote:
      'We had a mixed crowd — Punjabi family, Western friends — and Daula handled it perfectly. Bhangra sets, then Top 40, back to Punjabi. Nobody sat down all night. He reads a room like no one else.',
    names: 'Priya & Michael',
    event: 'Reception',
    year: '2023',
  },
  // TODO: replace with real testimonial
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
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-daula-gold" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      className="bg-daula-white py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-black tracking-tight text-daula-black text-balance mb-12"
        >
          From couples who trusted Daula with their night.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) =>
            t.placeholder ? (
              <article
                key={i}
                className="border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center gap-3 min-h-48"
                aria-label="Testimonial placeholder"
              >
                <p className="text-xs font-medium tracking-widest uppercase text-gray-400">
                  Testimonial coming soon
                </p>
                <p className="text-xs text-gray-400">
                  {/* TODO: replace with real testimonial */}
                  Real review from a recent couple to be added here.
                </p>
              </article>
            ) : (
              <article
                key={i}
                className="bg-gray-50 p-6 flex flex-col gap-4 border border-gray-100"
                aria-label={`Testimonial from ${t.names}`}
              >
                <StarRating />
                <blockquote className="text-sm text-gray-700 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="text-xs font-semibold text-daula-black tracking-wide">
                  {t.names}{' '}
                  <span className="font-normal text-gray-500">
                    — {t.event}, {t.year}
                  </span>
                </footer>
              </article>
            )
          )}
        </div>

        <div className="mt-8">
          {/* TODO: replace with real Google Reviews link */}
          <a
            href="#"
            className="text-sm font-medium text-daula-black border border-daula-black/20 px-5 py-2.5 hover:bg-daula-black hover:text-daula-white transition-all duration-200 inline-flex items-center gap-2"
            aria-label="Read more reviews on Google"
          >
            Read more reviews &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
