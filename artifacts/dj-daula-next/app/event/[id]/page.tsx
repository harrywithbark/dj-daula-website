import Link from 'next/link'
import { notFound } from 'next/navigation'
import { EVENTS, ADD_ONS } from '@/lib/events-data'

interface Props {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return EVENTS.map((e) => ({ id: e.id }))
}

export default async function EventDetailPage({ params }: Props) {
  const { id } = await params
  const event = EVENTS.find((e) => e.id === id)
  if (!event) notFound()

  const suggestedAddOns = event.suggestedAddOns
    ?.map((sid) => ADD_ONS.find((a) => a.id === sid))
    .filter(Boolean) ?? []

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[420px] bg-daula-black overflow-hidden">
        <img src={event.imgSrc} alt={event.imgAlt} className="absolute inset-0 object-cover w-full h-full opacity-60" />
        <div className="absolute inset-0 bg-daula-black/40" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: 'linear-gradient(to top, #0F0F0F, transparent)' }} aria-hidden="true" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-10 md:pb-14 max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center gap-3 mb-4">
            {event.badge && <span className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 ${event.badgeColor}`}>{event.badge}</span>}
            <span className="text-[10px] font-semibold tracking-widest uppercase text-daula-red">{event.accentLabel}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-daula-white">{event.name}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-daula-black py-12 md:py-16 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-black text-daula-white tracking-tight">The vibe</h2>
                <p className="text-base text-daula-gray-light leading-relaxed">{event.description}</p>
                <p className="text-base text-daula-gray-light leading-relaxed">{event.details}</p>
              </div>
              <div className="border-t border-daula-gray-mid pt-8">
                <h2 className="text-xl md:text-2xl font-black text-daula-white tracking-tight mb-6">What&apos;s included</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {event.included.map((item) => (
                    <div key={item} className="flex items-start gap-3 p-4 bg-daula-gray border border-daula-gray-mid">
                      <span className="w-2 h-2 rounded-full bg-daula-red mt-1.5 flex-shrink-0" aria-hidden="true" />
                      <span className="text-sm text-daula-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              {suggestedAddOns.length > 0 && (
                <div className="border-t border-daula-gray-mid pt-8">
                  <h2 className="text-xl md:text-2xl font-black text-daula-white tracking-tight mb-2">Popular add-ons</h2>
                  <p className="text-sm text-daula-gray-light mb-6">Enhance your {event.name.toLowerCase()} with these extras.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {suggestedAddOns.map((addon) => {
                      if (!addon) return null
                      const isPremium = 'isPremium' in addon && addon.isPremium
                      return (
                        <div key={addon.id} className={`p-4 border ${isPremium ? 'bg-daula-gray border-[#00F0FF]/30' : 'bg-daula-gray border-daula-gray-mid'}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-sm font-semibold ${isPremium ? 'text-[#00F0FF]' : 'text-daula-white'}`}>{addon.name}</span>
                            {isPremium && <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/40">Premium</span>}
                          </div>
                          <p className={`text-xs ${isPremium ? 'text-[#00F0FF]/70' : 'text-daula-gray-light'}`}>{addon.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
            <aside className="flex flex-col gap-6">
              <div className="sticky top-24 bg-daula-gray border border-daula-gray-mid p-6">
                <p className="text-xs font-semibold tracking-widest uppercase text-daula-red mb-3">Book this event</p>
                <p className="text-sm text-daula-gray-light leading-relaxed mb-6">Ready to lock in your date? Daula responds personally within 24 hours.</p>
                <Link href="/contact" className="block w-full bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-5 py-3.5 hover:bg-daula-red/90 transition-colors duration-200 text-center">
                  Enquire for {event.name} &rarr;
                </Link>
                <div className="mt-5 pt-5 border-t border-daula-gray-mid flex flex-col gap-3">
                  <a href="https://wa.me/17780000000" target="_blank" rel="noopener noreferrer" className="text-sm text-daula-gray-light hover:text-daula-white transition-colors">WhatsApp &rarr;</a>
                  <a href="mailto:bookings@djdaula.com" className="text-sm text-daula-gray-light hover:text-daula-white transition-colors">bookings@djdaula.com &rarr;</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-daula-gray py-14 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="text-xl md:text-2xl font-black text-daula-white tracking-tight mb-8">Other events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {EVENTS.filter((e) => e.id !== event.id).map((e) => (
              <Link key={e.id} href={`/event/${e.id}`} className="group relative block aspect-[4/3] overflow-hidden bg-daula-black">
                <img src={e.imgSrc} alt={e.imgAlt} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-85" />
                <div className="absolute inset-0 bg-daula-black/40 group-hover:bg-daula-black/30 transition-colors duration-300" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: 'linear-gradient(to top, rgba(15,15,15,0.8), transparent)' }}>
                  <p className="text-sm font-bold text-daula-white uppercase tracking-wide group-hover:translate-x-1 transition-transform duration-300">{e.name}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-daula-red scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
