import { Link } from 'wouter'
import { EVENTS } from '@/lib/events-data'

function EventCard({ event }: { event: (typeof EVENTS)[number] }) {
  return (
    <Link
      href={`/event/${event.id}`}
      className="group relative block aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-daula-black cursor-pointer"
      aria-label={`${event.name} — click to view details`}
    >
      <img
        src={event.imgSrc}
        alt={event.imgAlt}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay — darker at bottom for text readability */}
      <div
        className="absolute inset-0 bg-daula-black/30 group-hover:bg-daula-black/40 transition-colors duration-500"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-daula-black/0 group-hover:bg-daula-red/10 transition-colors duration-500"
        aria-hidden="true"
      />

      {/* Bottom fade for text */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-daula-black/60 group-hover:bg-daula-black/70 transition-colors duration-500"
        style={{ background: 'linear-gradient(to top, rgba(15,15,15,0.85) 0%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Badge */}
      {event.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 ${event.badgeColor}`}>
            {event.badge}
          </span>
        </div>
      )}

      {/* Bold text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-10">
        <p className="text-[10px] font-semibold tracking-widest uppercase text-daula-red mb-2">
          {event.accentLabel}
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-daula-white tracking-tight leading-none uppercase group-hover:translate-x-1 transition-transform duration-300">
          {event.name}
        </h3>

        {/* Hover arrow */}
        <div className="mt-4 flex items-center gap-2 text-daula-white/0 group-hover:text-daula-white/80 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-xs font-semibold tracking-wide">View details</span>
          <span className="text-sm" aria-hidden="true">&rarr;</span>
        </div>
      </div>

      {/* Red bottom line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-daula-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        aria-hidden="true"
      />
    </Link>
  )
}

export default function EventsPreview() {
  return (
    <section
      className="bg-daula-black py-20 md:py-28 border-b border-daula-gray-mid"
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
            Click any card below to explore the full experience.
          </p>
        </div>

        {/* Bold photo-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/events"
            className="text-sm font-semibold text-daula-red hover:text-daula-white transition-colors duration-200 border border-daula-red/30 hover:border-daula-red px-6 py-3"
          >
            View all services &rarr;
          </Link>
          <Link
            href="/contact"
            className="text-sm text-daula-gray-light hover:text-daula-white transition-colors duration-200"
          >
            Planning a full weekend? Let&apos;s talk &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
