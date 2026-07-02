import Link from 'next/link'
import { EVENTS } from '@/lib/events-data'

export default function EventsPage() {
  return (
    <main className="pt-16">
      <section className="bg-daula-black py-16 md:py-24 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-4">Events</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-daula-white text-balance max-w-3xl">
            Every night of your wedding weekend, covered.
          </h1>
          <p className="text-daula-gray-light mt-4 text-base max-w-xl leading-relaxed">
            From intimate Mehndi evenings to full-floor Sangeet sets — one DJ across all of it.
          </p>
        </div>
      </section>

      <section className="bg-daula-gray py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col gap-6">
          {EVENTS.map((event, i) => (
            <article key={event.id} className="group bg-daula-black border border-daula-gray-mid overflow-hidden hover:border-daula-red/50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(206,31,31,0.12)]">
              <div className={`flex flex-col md:flex-row ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="relative w-full md:w-2/5 aspect-[16/9] md:aspect-auto md:min-h-[280px] overflow-hidden flex-shrink-0 bg-daula-gray-mid">
                  <img src={event.imgSrc} alt={event.imgAlt} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-85" />
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-daula-red scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" aria-hidden="true" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-daula-white/80 bg-daula-black/70 px-2.5 py-1 backdrop-blur-sm">{event.accentLabel}</span>
                  </div>
                  {event.badge && (
                    <div className="absolute top-4 right-4">
                      <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 ${event.badgeColor}`}>{event.badge}</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-between gap-6 p-6 md:p-8 flex-1">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-daula-white tracking-tight mb-3">{event.name}</h2>
                    <p className="text-daula-gray-light leading-relaxed text-sm md:text-base">{event.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-daula-gray-mid pt-5">
                    <div>
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-daula-gray-light mb-3">What&apos;s included</p>
                      <ul className="flex flex-col gap-2">
                        {event.included.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-daula-gray-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-daula-red mt-1.5 flex-shrink-0" aria-hidden="true" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-3 sm:ml-auto sm:self-end">
                      <Link href="/contact" className="bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-5 py-2.5 hover:bg-daula-red/90 transition-colors duration-200 text-center whitespace-nowrap">
                        Enquire for {event.name} &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
