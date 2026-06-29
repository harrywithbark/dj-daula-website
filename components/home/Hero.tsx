import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-daula-black overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image placeholder — swap for real DJ booth shot with red uplighting */}
      <div
        className="absolute inset-0 bg-daula-black"
        aria-hidden="true"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
        }}
      />

      {/* Red glow top edge */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-daula-red/60"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-5 md:px-8 text-center flex flex-col items-center gap-6 md:gap-8">
        {/* Pre-label */}
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red">
          Surrey&apos;s South Asian Wedding DJ
        </p>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance leading-[1.05]">
          One DJ.{' '}
          <span className="text-daula-red">Your Night.</span>
          <br />
          No Substitutes.
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-lg text-daula-gray-light leading-relaxed max-w-2xl text-balance">
          15 years. 500+ events. Bhangra to Bollywood and everything between &mdash; you booked Daula, you get Daula, at every single event.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-daula-red text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm hover:bg-daula-red/90 transition-colors duration-200 text-center"
          >
            Book Your Date &rarr;
          </Link>
          <a
            href="#music"
            className="w-full sm:w-auto border border-daula-white/30 text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm hover:border-daula-white/60 hover:bg-daula-white/5 transition-all duration-200 text-center"
          >
            Listen to the Vibe &darr;
          </a>
        </div>

        {/* Trust line */}
        <p className="text-xs tracking-[0.2em] uppercase text-daula-gray-light mt-2">
          Surrey, BC &nbsp;&middot;&nbsp; International
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-daula-black to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  )
}
