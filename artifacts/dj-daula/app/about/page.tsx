import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="pt-16">
      <section className="bg-daula-black py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">About</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-daula-white text-balance">
            I learned to DJ in Surrey&apos;s clubs.
            <br />
            Now I run your dance floor.
          </h1>
        </div>
      </section>

      <section className="bg-daula-gray py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="flex flex-col gap-6 text-daula-gray-light leading-relaxed text-base">
              <p>
                I&apos;m Chetan &mdash; DJ Daula. I cut my teeth in Surrey&apos;s club scene, where you learn to read a room before the first drop or you don&apos;t last. That same skill goes into every wedding: Bhangra, Bollywood, UK Grime, and House &mdash; blended so the whole family stays on the floor, not just the young ones.
              </p>
              <p>
                Fifteen years and hundreds of South Asian weddings across Vancouver and beyond. I&apos;ve run 200-person Sangeets where the floor never empties, and intimate Mehndis where the energy has to be just right. Your crowd is different from everyone else&apos;s. I build the set around that &mdash; not a template.
              </p>
              <p>
                It started the way it usually does: bedroom sets, a pub residency, then the club circuit. I built my name in Surrey&apos;s South Asian scene one night at a time &mdash; no shortcuts, no ghost DJs, no sending someone else in my place.
              </p>
              <p className="text-xl font-bold text-daula-white">You book me. You get me. Every night.</p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href="/contact" className="bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-6 py-3 hover:bg-daula-red/90 transition-colors duration-200 text-center">
                  Let&apos;s plan your wedding &rarr;
                </Link>
                <Link href="/music" className="border border-daula-white/20 text-daula-white text-sm font-medium px-6 py-3 hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 text-center">
                  Listen to the mixes &rarr;
                </Link>
              </div>
            </div>
            <div className="relative aspect-[3/4] bg-daula-black overflow-hidden">
              <img src="/about-daula.png" alt="DJ Daula (Chetan)" className="object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 w-1 h-20 bg-daula-red" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-daula-black py-14 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-daula-gray-mid">
            {[
              { stat: '15', label: 'Years behind the decks' },
              { stat: '500+', label: 'South Asian events' },
              { stat: '4', label: 'Event types covered' },
              { stat: '1', label: 'DJ. No swaps. Ever.' },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center md:px-8">
                <dt className="text-4xl md:text-5xl font-black text-daula-red mb-1">{stat}</dt>
                <dd className="text-xs text-daula-gray-light tracking-wide">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  )
}
