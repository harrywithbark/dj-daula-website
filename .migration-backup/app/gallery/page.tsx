'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import PageShell from '@/components/PageShell'

// TODO: replace with real gallery photos — prioritize dance floor energy shots
// Include venue names in captions for local SEO: "[DJ] [Venue] Surrey" searches
const ALL_ITEMS = [
  { caption: 'Sangeet · Fusion Banquet Hall · Surrey, BC · 2024', filter: 'Sangeet', w: 800, h: 600 },
  { caption: 'Reception · Crystal Ballroom · Vancouver, BC · 2024', filter: 'Reception', w: 800, h: 600 },
  { caption: 'Mehndi · Private Residence · Surrey, BC · 2024', filter: 'Mehndi / Dholki', w: 800, h: 600 },
  { caption: 'Sangeet · Aria Banquet · Burnaby, BC · 2023', filter: 'Sangeet', w: 800, h: 600 },
  { caption: 'Reception · Sheraton Vancouver Airport · 2023', filter: 'Reception', w: 800, h: 600 },
  { caption: 'Sangeet · Anvil Centre · New Westminster · 2023', filter: 'Sangeet', w: 800, h: 600 },
  { caption: 'Mehndi / Dholki · Langley · 2023', filter: 'Mehndi / Dholki', w: 800, h: 600 },
  { caption: 'Reception · Fairmont Pacific Rim · Vancouver · 2022', filter: 'Reception', w: 800, h: 600 },
  { caption: 'Sangeet · Cascades Casino · Langley · 2022', filter: 'Sangeet', w: 800, h: 600 },
]

const FILTERS = ['All', 'Sangeet', 'Reception', 'Mehndi / Dholki']

export default function GalleryPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.filter === active)

  return (
    <PageShell>
      {/* Page header */}
      <section className="bg-daula-black py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
            Gallery
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-daula-white text-balance mb-4">
            The dance floor doesn&apos;t lie.
          </h1>
          <p className="text-daula-gray-light text-base">
            Hundreds of nights. One standard.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="bg-daula-gray py-12 md:py-16 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Gallery filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                  active === f
                    ? 'bg-daula-red text-daula-white'
                    : 'bg-daula-black border border-daula-gray-mid text-daula-gray-light hover:text-daula-white hover:border-daula-white/30'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {filtered.map((item, i) => (
              <figure
                key={i}
                className="relative overflow-hidden bg-daula-black group aspect-[4/3]"
              >
                <Image
                  src={`/placeholder.svg?height=${item.h}&width=${item.w}`}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <figcaption className="absolute inset-0 bg-daula-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-xs text-daula-white leading-snug">{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-daula-gray-light text-sm text-center py-12">
              No items for this filter yet.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-daula-black py-14 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Link
            href="/contact"
            className="bg-daula-red text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm hover:bg-daula-red/90 transition-colors duration-200 inline-flex items-center"
          >
            Inspired? Check your date &rarr;
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
