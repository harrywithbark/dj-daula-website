import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import { EVENTS } from '@/components/home/EventsPreview'

export const metadata: Metadata = {
  title: 'Events — DJ Daula',
  description:
    'Sangeet, Reception, Mehndi/Dholki, Engagement Party, Full Weekend Package. DJ Daula covers every night of your South Asian wedding weekend in Surrey, BC.',
}

export default function EventsPage() {
  return (
    <PageShell>
      {/* Page header */}
      <section className="bg-daula-black py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
            Events
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-daula-white text-balance">
            Every night of your wedding weekend, covered.
          </h1>
        </div>
      </section>

      {/* Event cards — full version */}
      <section className="bg-daula-gray py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col gap-5">
            {EVENTS.map((event) => (
              <article
                key={event.id}
                className="bg-daula-black border border-daula-gray-mid p-6 md:p-8 relative"
                aria-label={event.name}
              >
                {event.badge && (
                  <span
                    className={`absolute top-6 right-6 text-[10px] font-bold tracking-widest uppercase px-2 py-1 ${event.badgeColor}`}
                  >
                    {event.badge}
                  </span>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h2 className="text-2xl font-black text-daula-white tracking-tight mb-3">
                      {event.name}
                    </h2>
                    <p className="text-daula-gray-light leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-5 py-2.5 hover:bg-daula-red/90 transition-colors duration-200"
                    >
                      Enquire for {event.name} &rarr;
                    </Link>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-daula-gray-light mb-3">
                      What&apos;s included
                    </p>
                    <ul className="flex flex-col gap-2" role="list">
                      {event.included.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-daula-gray-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-daula-red mt-1.5 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-daula-gray-light/60 mt-4">
                      See{' '}
                      <Link href="/packages" className="underline underline-offset-2 hover:text-daula-white transition-colors duration-200">
                        Packages
                      </Link>{' '}
                      for full details &amp; pricing.
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-daula-black py-16 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-daula-red text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm hover:bg-daula-red/90 transition-colors duration-200 text-center"
          >
            Planning a full weekend? Let&apos;s talk &rarr;
          </Link>
          <Link
            href="/contact"
            className="border border-daula-white/20 text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 text-center"
          >
            Check availability
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
