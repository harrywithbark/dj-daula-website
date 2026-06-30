import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageShell from '@/components/PageShell'

export const metadata: Metadata = {
  title: 'About — DJ Daula',
  description:
    'DJ Daula is Chetan — Surrey\'s South Asian wedding DJ. 15 years behind the decks, 500+ events. From the club scene to your wedding night.',
}

export default function AboutPage() {
  return (
    <PageShell>
      {/* Page header */}
      <section className="bg-daula-black py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-daula-white text-balance">
            I came up in Surrey&apos;s clubs.
            <br />
            Now I do your wedding.
          </h1>
        </div>
      </section>

      {/* Bio + photo */}
      <section className="bg-daula-gray py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Bio text */}
            <div className="flex flex-col gap-6 text-daula-gray-light leading-relaxed text-base">
              {/* Para 1 */}
              <p>
                I&apos;m Chetan &mdash; DJ Daula. I started behind the decks in Surrey&apos;s club scene, building a sound that blends Bhangra, Bollywood, UK Grime, and House into something that hits different at every event.
              </p>

              {/* Para 2 */}
              <p>
                After 15 years and hundreds of South Asian weddings across Vancouver and beyond, I know exactly how to read a dance floor and keep it moving &mdash; whether that&apos;s a 200-person Sangeet or an intimate family Mehndi. Your crowd isn&apos;t the same as anyone else&apos;s, and I don&apos;t treat it that way.
              </p>

              {/* Para 3 — origin story. TODO: get real details from Chetan: pub name, how the club residency happened, timeline from bedroom DJ to weddings */}
              <p>
                It started the way it usually does &mdash; bedroom sets, then a pub residency, then the club circuit. I built a name in Surrey&apos;s South Asian scene the slow way: one floor at a time, one crowd at a time. When couples started asking me to do their weddings, I realised that everything I&apos;d learned in the clubs &mdash; reading energy, knowing when to hold back and when to drop &mdash; was exactly what made a great wedding night.
              </p>
              {/* TODO: get real origin story details from Chetan (pub name, club residency details, how he transitioned to weddings) */}

              <p className="text-xl font-bold text-daula-white">
                Book Daula. Get Daula.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  className="bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-6 py-3 hover:bg-daula-red/90 transition-colors duration-200 text-center"
                >
                  Let&apos;s talk about your wedding &rarr;
                </Link>
                <Link
                  href="/music"
                  className="border border-daula-white/20 text-daula-white text-sm font-medium px-6 py-3 hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 text-center"
                >
                  Listen to the mixes &rarr;
                </Link>
              </div>
            </div>

            {/* Photo — TODO: swap with real mid-set action shot behind the decks, not a posed headshot */}
            <div className="relative aspect-[3/4] bg-daula-black overflow-hidden">
              <Image
                src="/placeholder.svg?height=960&width=720"
                alt="DJ Daula (Chetan) behind the decks at a Sangeet — mid-set action shot"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute bottom-0 left-0 w-1 h-20 bg-daula-red"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip */}
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
    </PageShell>
  )
}
