import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageShell from '@/components/PageShell'
import { EVENTS } from '@/lib/events-data'

// TODO: add real pricing once Chetan provides it — currently quote-on-request by design.
// Confirm whether this is intentional long-term vs. temporary until pricing is set.

export const metadata: Metadata = {
  title: 'Packages — DJ Daula',
  description:
    'DJ Daula packages for Sangeet, Reception, Mehndi/Dholki, Engagement Party, and Full Weekend. Custom quotes — no generic pricing, every wedding is different.',
}

export default function PackagesPage() {
  return (
    <PageShell>
      {/* Page header */}
      <section className="bg-daula-black py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
            Packages
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-daula-white text-balance mb-4">
            Every wedding is different.
            <br />
            So is every quote.
          </h1>
          <p className="text-daula-gray-light text-base max-w-xl">
            No fixed pricing lists. Your date, your events, your venue &mdash; Daula builds a quote around what you actually need.
          </p>
        </div>
      </section>

      {/* Package cards */}
      <section className="bg-daula-gray py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EVENTS.map((event) => (
              <article
                key={event.id}
                className="group bg-daula-black border border-daula-gray-mid flex flex-col overflow-hidden hover:border-daula-red/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(206,31,31,0.12)]"
                aria-label={`${event.name} package`}
              >
                {/* Image */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-daula-gray-mid flex-shrink-0">
                  <Image
                    src={event.imgSrc}
                    alt={event.imgAlt}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-85 transition-all duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-daula-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-daula-white/80 bg-daula-black/70 px-2.5 py-1 backdrop-blur-sm">
                      {event.accentLabel}
                    </span>
                  </div>
                  {event.badge && (
                    <div className="absolute top-3 right-3">
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 ${event.badgeColor}`}>
                        {event.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-5 p-6 flex-1">
                  <div>
                    <h2 className="text-xl font-black text-daula-white mb-2">{event.name}</h2>
                    <p className="text-sm text-daula-gray-light leading-relaxed">
                      {event.description}
                    </p>
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
                  </div>

                  {/* Pricing placeholder — TODO: replace with real price once Chetan provides it */}
                  <div className="mt-auto pt-4 border-t border-daula-gray-mid">
                    <p className="text-xs text-daula-gray-light mb-3">
                      Pricing varies by date, location, and event length.
                    </p>
                    <Link
                      href="/contact"
                      className="w-full bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-4 py-3 hover:bg-daula-red/90 transition-colors duration-200 text-center block"
                    >
                      Get a custom quote &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Note on pricing philosophy */}
          <div className="mt-10 border border-daula-gray-mid p-6 bg-daula-black max-w-2xl">
            <p className="text-sm text-daula-gray-light leading-relaxed">
              <span className="text-daula-white font-semibold">Why no prices listed?</span>{' '}
              No two weddings are the same. Travel, duration, event type, and timing all affect the cost. A custom quote means you pay for what you actually need &mdash; no packages you don&apos;t want.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-daula-black py-14 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-daula-red text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm hover:bg-daula-red/90 transition-colors duration-200 text-center"
          >
            Request a quote &rarr;
          </Link>
          <Link
            href="/events"
            className="border border-daula-white/20 text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 text-center"
          >
            See all events
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
