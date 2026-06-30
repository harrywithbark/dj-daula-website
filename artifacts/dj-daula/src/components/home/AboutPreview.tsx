import { Link } from 'wouter'

export default function AboutPreview() {
  return (
    <section
      className="bg-daula-black py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red">
              About Daula
            </p>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-black tracking-tight text-daula-white text-balance leading-tight"
            >
              I came up in Surrey&apos;s clubs.
              <br />
              Now I do your wedding.
            </h2>
            <p className="text-daula-gray-light text-base leading-relaxed">
              I&apos;m Chetan &mdash; DJ Daula. I started behind the decks in Surrey&apos;s club scene, building a sound that blends Bhangra, Bollywood, UK Grime, and House into something that hits different at every event.
            </p>
            <p className="text-lg font-bold text-daula-white">
              Book Daula. Get Daula.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-6 py-3 hover:bg-daula-red/90 transition-colors duration-200 text-center"
              >
                Let&apos;s talk about your wedding &rarr;
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-daula-gray-light hover:text-daula-white transition-colors duration-200 flex items-center justify-center sm:justify-start gap-1"
              >
                Read the full story &rarr;
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] bg-daula-gray overflow-hidden">
            <img
              src="/placeholder.svg?height=800&width=640"
              alt="DJ Daula behind the decks at a Sangeet — mid-set action shot"
              className="object-cover w-full h-full"
            />
            <div
              className="absolute bottom-0 left-0 w-1 h-16 bg-daula-red"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
