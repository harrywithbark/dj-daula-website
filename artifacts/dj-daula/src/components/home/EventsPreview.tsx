'use client'

import Link from 'next/link'
import { EVENTS } from '@/lib/events-data'
import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import TiltCard from '@/components/TiltCard'

function EventCard({ event }: { event: (typeof EVENTS)[number] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <TiltCard maxTilt={6} scale={1.02}>
    <Link
      href={`/event/${event.id}`}
      className="group relative block aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-daula-black cursor-pointer"
      aria-label={`${event.name} — click to view details`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={event.imgSrc}
        alt={event.imgAlt}
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
      />

      <div
        className="absolute inset-0 bg-daula-black/30 group-hover:bg-daula-black/45 transition-colors duration-500"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(206,31,31,0.08) 0%, transparent 70%)',
          opacity: hovered ? 1 : 0,
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-2/3 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.4) 60%, transparent 100%)' }}
        aria-hidden="true"
      />

      {event.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 ${event.badgeColor}`}
            style={
              event.badge === 'Best Value'
                ? { backgroundColor: 'rgba(255,215,0,0.12)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.35)' }
                : undefined
            }
          >
            {event.badge}
          </span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-10">
        <p
          className="text-[10px] font-semibold tracking-widest uppercase mb-2 transition-colors duration-300"
          style={{ color: hovered ? '#FFD700' : '#CE1F1F' }}
        >
          {event.accentLabel}
        </p>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-daula-white tracking-tight leading-none uppercase group-hover:translate-x-1 transition-transform duration-300">
          {event.name}
        </h3>

        <div
          className="mt-4 flex items-center gap-2 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
          style={{
            opacity: hovered ? 1 : 0,
            color: '#FFD700',
          }}
        >
          <span className="text-xs font-semibold tracking-wide">View details</span>
          <span className="text-sm" aria-hidden="true">&rarr;</span>
        </div>
      </div>

      {/* Neon gold bottom line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to right, #FFD700, rgba(255,215,0,0.4))' }}
      />

      {/* Border glow on hover */}
      <div
        className="absolute inset-0 border border-transparent group-hover:border-daula-red/40 transition-colors duration-500 pointer-events-none"
        aria-hidden="true"
      />
    </Link>
    </TiltCard>
  )
}

export default function EventsPreview() {
  return (
    <section
      className="relative bg-mesh-dark py-20 md:py-28 border-b border-daula-gray-mid overflow-hidden"
      aria-labelledby="events-heading"
    >
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(206,31,31,0.04) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
                Events
              </p>
              <h2
                id="events-heading"
                className="text-display-lg text-daula-white text-balance"
              >
                Every night of your wedding
                <br className="hidden md:block" /> weekend — handled.
              </h2>
            </div>
            <p className="text-daula-gray-light text-sm max-w-sm">
              Tap any event to see how I run it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {EVENTS.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/events"
              className="text-sm font-semibold transition-colors duration-200 border px-6 py-3"
              style={{
                color: '#FFD700',
                borderColor: 'rgba(255,215,0,0.35)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.8)'
                e.currentTarget.style.backgroundColor = 'rgba(255,215,0,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.35)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
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
        </ScrollReveal>
      </div>
    </section>
  )
}
