import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageShell from '@/components/PageShell'
import { EVENTS } from '@/lib/events-data'

export const metadata: Metadata = {
  title: 'Events — DJ Daula',
  description:
    'Sangeet, Reception, Mehndi/Dholki, Engagement Party, Full Weekend Package. DJ Daula covers every night of your South Asian wedding weekend in Surrey, BC.',
}

export default function EventsPage() {
  return (
    <PageShell>
      {/* Page header */}
      <section className="bg-daula-black py-16 md:py-24 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-4">
            Events
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-daula-white text-balance max-w-3xl">
            Every night of your wedding weekend, covered.
          </h1>
          <p className="text-daula-gray-light mt-4 text-base max-w-xl leading-relaxed">
            From intimate Mehndi evenings to full-floor Sangeet sets and open-format receptions — one DJ across all of it.
          </p>
        </div>
      </section>

      {/* Event cards — full version with images */}
      <section className="bg-daula-gray py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col gap-6">
            {EVENTS.map((event, i) => (
              <article
                key={event.id}
                className="group bg-daula-black border border-daula-gray-mid overflow-hidden hover:border-daula-red/50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(206,31,31,0.12)]"
                aria-label={event.name}
              >
                {/* On desktop: alternate image left/right */}
                <div className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className="relative w-full md:w-2/5 aspect-[16/9] md:aspect-auto md:min-h-[280px] overflow-hidden flex-shrink-0 bg-daula-gray-mid">
                    <Image
                      src={event.imgSrc}
                      alt={event.imgAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-85"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    {/* Red line bottom edge */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-daula-red scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                      aria-hidden="true"
                    />
                    {/* Genre chip */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-[10px] font-semibold tracking-widest uppercase text-daula-white/80 bg-daula-black/70 px-2.5 py-1 backdrop-blur-sm">
                        {event.accentLabel}
                      </span>
                    </div>
                    {/* Badge */}
                    {event.badge && (
                      <div className="absolute top-4 right-4">
                        <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 ${event.badgeColor}`}>
                          {event.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between gap-6 p-6 md:p-8 flex-1">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-black text-daula-white tracking-tight mb-3">
                        {event.name}
                      </h2>
                      <p className="text-daula-gray-light leading-relaxed text-sm md:text-base">
                        {event.description}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-daula-gray-mid pt-5">
                      {/* Included */}
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-daula-gray-light mb-3">
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

                      {/* CTA */}
                      <div className="flex flex-col gap-3 sm:ml-auto sm:self-end">
                        <Link
                          href="/contact"
                          className="bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-5 py-2.5 hover:bg-daula-red/90 transition-colors duration-200 text-center whitespace-nowrap"
                        >
                          Enquire for {event.name} &rarr;
                        </Link>
                        <p className="text-xs text-daula-gray-light/60 text-center">
                          See{' '}
                          <Link href="/packages" className="underline underline-offset-2 hover:text-daula-white transition-colors duration-200">
                            Packages
                          </Link>{' '}
                          for full details &amp; pricing.
                        </p>
                      </div>
                    </div>
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
