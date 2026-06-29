import Link from 'next/link'
import Image from 'next/image'

// TODO: replace with real gallery photos — prioritize dance floor energy shots over equipment/empty venue
// Caption format: [Event type] · [Venue or City] · [Year]
const GALLERY_ITEMS = [
  { caption: 'Sangeet · Fusion Banquet Hall · Surrey, BC · 2024', width: 800, height: 600 },
  { caption: 'Reception · Crystal Ballroom · Vancouver, BC · 2024', width: 800, height: 600 },
  { caption: 'Mehndi · Private Residence · Surrey, BC · 2023', width: 800, height: 600 },
  { caption: 'Sangeet · Aria Banquet · Burnaby, BC · 2023', width: 800, height: 600 },
  { caption: 'Reception · Sheraton Vancouver Airport · 2023', width: 800, height: 600 },
  { caption: 'Full Weekend · Anvil Centre · New Westminster · 2022', width: 800, height: 600 },
]

export default function GalleryPreview() {
  return (
    <section
      className="bg-daula-gray py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12">
          <h2
            id="gallery-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-daula-white text-balance mb-4"
          >
            The dance floor doesn&apos;t lie.
          </h2>
          <p className="text-daula-gray-light text-base">
            Hundreds of events. One standard: the dance floor never empties.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {GALLERY_ITEMS.map((item, i) => (
            <figure
              key={i}
              className="relative overflow-hidden bg-daula-black group aspect-[4/3]"
            >
              <Image
                src={`/placeholder.svg?height=${item.height}&width=${item.width}`}
                alt={item.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Caption overlay on hover */}
              <figcaption className="absolute inset-0 bg-daula-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-xs text-daula-white leading-snug">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/gallery"
            className="text-sm font-semibold text-daula-white border border-daula-white/20 px-6 py-3 hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 inline-flex items-center"
          >
            See the full gallery &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
