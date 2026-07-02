'use client'

import { useState, useEffect } from 'react'
import { EVENTS } from '@/lib/events-data'
import PackageModal from './PackageModal'
import TiltCard from '@/components/TiltCard'

type EventId = typeof EVENTS[number]['id']

export default function PackagesClient() {
  const [selectedPackage, setSelectedPackage] = useState<EventId | null>(null)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && EVENTS.some((e) => e.id === hash)) {
      setSelectedPackage(hash as EventId)
    }
  }, [])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {EVENTS.map((event) => (
          <TiltCard key={event.id} maxTilt={5} scale={1.015}>
          <article
            className="group bg-daula-black border border-daula-gray-mid flex flex-col overflow-hidden hover:border-daula-red/50 transition-all duration-300 hover:shadow-[0_8px_32px_rgba(206,31,31,0.12)] cursor-pointer h-full"
            onClick={() => setSelectedPackage(event.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedPackage(event.id)
              }
            }}
            aria-label={`${event.name} package — click for details`}
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-daula-gray-mid flex-shrink-0">
              <img
                src={event.imgSrc}
                alt={event.imgAlt}
                className="object-cover w-full h-full opacity-70 group-hover:opacity-85 transition-all duration-500 group-hover:scale-105"
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
                  {event.included.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-daula-gray-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-daula-red mt-1.5 flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                  {event.included.length > 3 && (
                    <li className="text-xs text-daula-red font-semibold mt-1">
                      +{event.included.length - 3} more →
                    </li>
                  )}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-daula-gray-mid">
                <p className="text-xs text-daula-gray-light mb-3">
                  Click for full details &amp; add-ons
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPackage(event.id)
                  }}
                  className="w-full bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-4 py-3 hover:bg-daula-red/90 transition-colors duration-200 text-center"
                >
                  See details
                </button>
              </div>
            </div>
          </article>
          </TiltCard>
        ))}
      </div>

      <PackageModal
        eventId={selectedPackage || 'sangeet'}
        isOpen={selectedPackage !== null}
        onClose={() => setSelectedPackage(null)}
      />
    </>
  )
}
