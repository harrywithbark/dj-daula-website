import Link from 'next/link'
import Image from 'next/image'

// TODO: replace with real gallery photos — prioritise dance floor energy shots
// Caption format: [Event type] · [Venue or City] · [Year]
// Spans: control how much space each image gets in the bento grid
const GALLERY_ITEMS = [
  {
    caption: 'Sangeet · Fusion Banquet Hall · Surrey, BC · 2024',
    width: 1200,
    height: 800,
    colSpan: 'col-span-2',
    rowSpan: 'row-span-2',
  },
  {
    caption: 'Reception · Crystal Ballroom · Vancouver, BC · 2024',
    width: 800,
    height: 600,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    caption: 'Mehndi · Private Residence · Surrey, BC · 2023',
    width: 800,
    height: 600,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    caption: 'Sangeet · Aria Banquet · Burnaby, BC · 2023',
    width: 800,
    height: 600,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    caption: 'Reception · Sheraton Vancouver Airport · 2023',
    width: 800,
    height: 600,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    caption: 'Full Weekend · Anvil Centre · New Westminster · 2022',
    width: 800,
    height: 600,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
]

export default function GalleryPreview() {
  return (
    <section
      className="bg-daula-gray py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
              Gallery
            </p>
            <h2
              id="gallery-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-daula-white text-balance"
            >
              The dance floor doesn&apos;t lie.
            </h2>
          </div>
          <p className="text-daula-gray-light text-sm max-w-xs">
            Hundreds of events. One standard: the dance floor never empties.
          </p>
        </div>

        {/* Bento grid — first image spans 2 cols × 2 rows on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[220px] gap-2 md:gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden bg-daula-black group ${item.colSpan} ${item.rowSpan}`}
            >
              <Image
                src={`/placeholder.svg?height=${item.height}&width=${item.width}`}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-75 group-hover:opacity-100"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Red bottom reveal bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-daula-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                aria-hidden="true"
              />

              {/* Caption overlay */}
              <figcaption className="absolute inset-0 bg-daula-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                <span className="text-xs text-daula-white leading-snug">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/gallery"
            className="text-sm font-semibold text-daula-white border border-daula-white/20 px-6 py-3 hover:border-daula-red/60 hover:bg-daula-white/5 transition-all duration-200 inline-flex items-center"
          >
            See the full gallery &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
