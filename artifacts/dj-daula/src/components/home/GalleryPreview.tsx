import { Link } from 'wouter'
import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const GALLERY_ITEMS = [
  { caption: 'Sangeet · Fusion Banquet Hall · Surrey, BC · 2024', span: 'md:col-span-2', w: 1200, h: 800 },
  { caption: 'Reception · Crystal Ballroom · Vancouver, BC · 2024', span: '', w: 600, h: 800 },
  { caption: 'Mehndi · Private Residence · Surrey, BC · 2024', span: '', w: 600, h: 600 },
  { caption: 'Sangeet · Aria Banquet · Burnaby, BC · 2023', span: 'md:col-span-2', w: 1200, h: 600 },
  { caption: 'Reception · Sheraton Vancouver Airport · 2023', span: '', w: 600, h: 600 },
]

export default function GalleryPreview() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  return (
    <section
      className="bg-daula-gray bg-subtle-grid py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
                Gallery
              </p>
              <h2
                id="gallery-heading"
                className="text-display-lg text-daula-white text-balance"
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
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[200px]">
          {GALLERY_ITEMS.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <figure
                className={`relative overflow-hidden bg-daula-black group ${item.span}`}
              >
                {/* Skeleton */}
                {!loadedImages.has(i) && (
                  <div className="absolute inset-0 bg-daula-gray animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-daula-gray-mid/30 to-transparent animate-shimmer" />
                  </div>
                )}
                <img
                  src={`/placeholder.svg?height=${item.h}&width=${item.w}`}
                  alt={item.caption}
                  onLoad={() => setLoadedImages(prev => new Set(prev).add(i))}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                {/* Mobile: always visible caption overlay at bottom */}
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-daula-black/90 to-transparent p-3 md:opacity-0 md:group-hover:opacity-100 md:bg-daula-black/70 md:inset-0 md:flex md:items-end transition-opacity duration-300">
                  <span className="text-xs text-daula-white leading-snug">{item.caption}</span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
