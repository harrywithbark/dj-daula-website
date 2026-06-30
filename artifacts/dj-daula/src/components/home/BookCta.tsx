import { Link } from 'wouter'

const SHOW_SCARCITY_NOTE = false

export default function BookCta() {
  return (
    <section
      className="relative bg-daula-gray py-20 md:py-28 border-b border-daula-gray-mid overflow-hidden"
      aria-labelledby="book-cta-heading"
    >
      {/* === BOOK CTA: Soft gold glow from bottom-left === */}
      <div
        className="absolute -bottom-1/3 -left-1/4 w-[600px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.10) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2
            id="book-cta-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-daula-white text-balance mb-3"
          >
            Your date. Your music.
            <br />
            <span className="text-daula-red">Let&apos;s make it happen.</span>
          </h2>
          <p className="text-daula-gray-light text-base mb-10">
            Check availability &mdash; no commitment required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-daula-black border border-daula-gray-mid p-5 flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-daula-red">
                Fill the form
              </p>
              <p className="text-sm text-daula-gray-light leading-relaxed flex-1">
                Share your event details and Daula responds personally within 24 hours.
              </p>
              <Link
                href="/contact"
                className="text-xs font-semibold text-daula-white hover:text-daula-red transition-colors duration-200"
              >
                Check availability &rarr;
              </Link>
            </div>

            <div className="bg-daula-black border border-daula-gray-mid p-5 flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-daula-red">
                WhatsApp
              </p>
              <p className="text-sm text-daula-gray-light leading-relaxed flex-1">
                Fastest response. Drop a message and hear back the same day.
              </p>
              <a
                href="https://wa.me/17780000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-daula-white hover:text-daula-red transition-colors duration-200"
              >
                Message on WhatsApp &rarr;
              </a>
            </div>

            <div className="bg-daula-black border border-daula-gray-mid p-5 flex flex-col gap-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-daula-red">
                Email
              </p>
              <p className="text-sm text-daula-gray-light leading-relaxed flex-1">
                Prefer email? Write directly &mdash; every enquiry is answered personally.
              </p>
              <a
                href="mailto:bookings@djdaula.com"
                className="text-xs font-semibold text-daula-white hover:text-daula-red transition-colors duration-200"
              >
                bookings@djdaula.com &rarr;
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="bg-daula-red text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm hover:bg-daula-red/90 transition-colors duration-200 text-center"
            >
              Check Availability &rarr;
            </Link>
            <a
              href="https://wa.me/17780000000"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-daula-white/20 text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 text-center"
            >
              Message on WhatsApp &rarr;
            </a>
          </div>

          {SHOW_SCARCITY_NOTE && (
            <p className="mt-6 text-xs text-daula-gold tracking-wide">
              Currently booking 2026 and 2027 dates &mdash; limited weekends available.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
