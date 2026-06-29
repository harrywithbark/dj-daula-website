import Link from 'next/link'

export const EVENTS = [
  {
    id: 'sangeet',
    name: 'Sangeet',
    description:
      'The high-energy night that sets the tone for the whole weekend. Deep Bhangra, peak-hour Bollywood, and the floor-filling sets your family will talk about for years.',
    badge: 'Most Booked',
    badgeColor: 'bg-daula-red text-daula-white',
    included: ['3–5 hour set', 'Full sound system', 'Custom Bhangra/Bollywood set', 'Live mic transitions'],
  },
  {
    id: 'reception',
    name: 'Wedding Reception',
    description:
      'Open-format for every guest at every table. Seamless transitions from first dance to peak floor — Hip-Hop, Top 40, Bollywood, R&B, all in one night.',
    badge: null,
    badgeColor: '',
    included: ['4–6 hour set', 'Full sound system', 'First dance coordination', 'Open-format mixing'],
  },
  {
    id: 'mehndi',
    name: 'Mehndi / Dholki',
    description:
      'A more intimate, high-vibe gathering. Daula keeps the energy right — not too big, not too quiet — while the henna flows and the family warms up for the weekend ahead.',
    badge: null,
    badgeColor: '',
    included: ['2–4 hour set', 'Sound system', 'Coordinated playlist pacing', 'Family-friendly format'],
  },
  {
    id: 'engagement',
    name: 'Engagement Party',
    description:
      'The first celebration of many. Lock in the vibe early with a set that blends backgrounds, generations, and playlists — so everyone leaves knowing this wedding is going to be different.',
    badge: null,
    badgeColor: '',
    included: ['2–4 hour set', 'Sound system', 'Mixed-audience format', 'Custom playlist consultation'],
  },
  {
    id: 'full-weekend',
    name: 'Full Weekend Package',
    description:
      'One DJ across every night of your wedding weekend. No handoffs, no inconsistency — just Daula reading the same crowd from night one through the last song of the reception.',
    badge: 'Best Value',
    badgeColor: 'bg-daula-gold text-daula-black',
    included: ['All events covered', 'Consistent DJ across every night', 'Custom set planning per event', 'Priority booking'],
  },
]

export default function EventsPreview() {
  return (
    <section
      className="bg-daula-gray py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="events-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2
          id="events-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-daula-white text-balance mb-4"
        >
          Every night of your wedding weekend, covered.
        </h2>
        <p className="text-daula-gray-light text-base mb-12">
          From intimate Mehndi evenings to full-floor Sangeet sets and open-format receptions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {EVENTS.map((event) => (
            <article
              key={event.id}
              className="bg-daula-black border border-daula-gray-mid p-6 flex flex-col gap-4 relative"
              aria-label={event.name}
            >
              {event.badge && (
                <span
                  className={`absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-2 py-1 ${event.badgeColor}`}
                >
                  {event.badge}
                </span>
              )}
              <h3 className="text-lg font-bold text-daula-white">{event.name}</h3>
              <p className="text-sm text-daula-gray-light leading-relaxed flex-1">
                {event.description}
              </p>
              <ul className="flex flex-col gap-1.5" role="list">
                {event.included.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-daula-gray-light">
                    <span className="w-1 h-1 rounded-full bg-daula-red mt-1.5 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="text-xs font-semibold tracking-wide text-daula-red hover:text-daula-white transition-colors duration-200 mt-1"
              >
                Enquire for {event.name} &rarr;
              </Link>
            </article>
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
