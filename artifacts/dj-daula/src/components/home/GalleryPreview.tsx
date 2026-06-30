import { Link } from 'wouter'

const GALLERY_ITEMS = [
  { caption: 'Sangeet · Fusion Banquet Hall · Surrey, BC · 2024', span: 'md:col-span-2', w: 1200, h: 800 },
  { caption: 'Reception · Crystal Ballroom · Vancouver, BC · 2024', span: '', w: 600, h: 800 },
  { caption: 'Mehndi · Private Residence · Surrey, BC · 2024', span: '', w: 600, h: 600 },
  { caption: 'Sangeet · Aria Banquet · Burnaby, BC · 2023', span: 'md:col-span-2', w: 1200, h: 600 },
  { caption: 'Reception · Sheraton Vancouver Airport · 2023', span: '', w: 600, h: 600 },
]

export default function GalleryPreview() {
  return (
    <section
      className="bg-daula-gray py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
              Gallery
            </p>
            <h2
              id="gallery-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-daula-white text-balance"
            >
              The dance floor
              <br className="hidden md:block" /> doesn&apos;t lie.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm text-daula-gray-light hover:text-daula-white transition-colors duration-200 flex-shrink-0"
          >
            View full gallery &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[200px]">
          {GALLERY_ITEMS.map((item, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden bg-daula-black group ${item.span}`}
            >
              <img
                src={`/placeholder.svg?height=${item.h}&width=${item.w}`}
                alt={item.caption}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 bg-daula-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-xs text-daula-white leading-snug">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
