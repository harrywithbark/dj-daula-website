import { Link } from 'wouter'
import { useState } from 'react'
import { EVENTS } from '@/lib/events-data'

export { EVENTS }

function EventCard({ event }: { event: (typeof EVENTS)[number] }) {
  const [, setHovered] = useState(false)

  return (
    <article
      className="group relative bg-daula-black border border-daula-gray-mid overflow-hidden flex flex-col transition-all duration-300 hover:border-daula-red/60 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(206,31,31,0.15)]"
      aria-label={event.name}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-daula-gray-mid">
        <img
          src={event.imgSrc}
          alt={event.imgAlt}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-90"
        />

        <div
          className="absolute inset-0 bg-daula-black/50 transition-opacity duration-300 group-hover:bg-daula-red/10"
          aria-hidden="true"
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

      <div className="flex flex-col gap-4 p-6 flex-1">
        <h3 className="text-lg font-black text-daula-white tracking-tight group-hover:text-daula-white transition-colors duration-200">
          {event.name}
        </h3>
        <p className="text-sm text-daula-gray-light leading-relaxed flex-1">{event.description}</p>

        <ul className="flex flex-col gap-1.5 border-t border-daula-gray-mid pt-4" role="list">
          {event.included.map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-daula-gray-light">
              <span
                className="w-1 h-1 rounded-full bg-daula-red mt-1.5 flex-shrink-0 transition-colors duration-200 group-hover:bg-daula-red"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        <Link
          href={`/packages#${event.id}`}
          className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-daula-red hover:text-daula-white transition-colors duration-200 mt-1"
          aria-label={`See ${event.name} package details`}
        >
          See package details
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  )
}

export default function EventsPreview() {
  return (
    <section
      className="bg-daula-gray py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="events-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
              Services
            </p>
            <h2
              id="events-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-daula-white text-balance"
            >
              Every night of your wedding
              <br className="hidden md:block" /> weekend, covered.
            </h2>
          </div>
          <p className="text-daula-gray-light text-sm max-w-sm">
            From intimate Mehndi evenings to full-floor Sangeet sets and open-format receptions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/contact"
            className="bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-6 py-3 hover:bg-daula-red/90 transition-colors duration-200"
          >
            Planning a full weekend? Let&apos;s talk &rarr;
          </Link>
          <Link
            href="/events"
            className="text-sm text-daula-gray-light hover:text-daula-white transition-colors duration-200"
          >
            See all events &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
