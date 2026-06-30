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
          width="14"
          height="14"
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
      className="bg-daula-white py-20 md:py-28 border-b border-gray-200"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-black tracking-tight text-daula-black text-balance"
          >
            From couples who trusted
            <br />
            Daula with their night.
          </h2>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Every review is unedited. Every couple is real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) =>
            t.placeholder ? (
              <article
                key={i}
                className="border border-dashed border-gray-300 p-8 flex flex-col items-center justify-center text-center gap-3 min-h-56"
                aria-label="Testimonial placeholder"
              >
                <div className="w-8 h-0.5 bg-gray-300 mb-1" aria-hidden="true" />
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400">
                  Review coming soon
                </p>
                <p className="text-xs text-gray-400 max-w-[180px] leading-relaxed">
                  Real review from a recent couple to be added here.
                </p>
              </article>
            ) : (
              <article
                key={i}
                className="group bg-white border border-gray-100 p-7 flex flex-col gap-5 hover:border-gray-300 hover:shadow-md transition-all duration-200"
                aria-label={`Testimonial from ${t.names}`}
              >
                <StarRating />
                <div aria-hidden="true" className="text-5xl font-black text-daula-red/15 leading-none -mb-2 select-none">
                  &ldquo;
                </div>
                <blockquote className="text-sm text-gray-700 leading-relaxed flex-1">
                  {t.quote}
                </blockquote>
                <footer className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className="w-8 h-8 rounded-full bg-daula-red flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <span className="text-xs font-black text-daula-white">
                      {t.names?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-daula-black tracking-wide">{t.names}</p>
                    <p className="text-xs text-gray-500">
                      {t.event}, {t.year}
                    </p>
                  </div>
                </footer>
              </article>
            )
          )}
        </div>

        <div className="mt-8">
          <a
            href="#"
            className="text-sm font-semibold text-daula-black border border-daula-black/20 px-5 py-2.5 hover:bg-daula-black hover:text-daula-white transition-all duration-200 inline-flex items-center gap-2"
            aria-label="Read more reviews on Google"
          >
            Read more on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
