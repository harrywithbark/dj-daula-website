import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageShell from '@/components/PageShell'
import PackagesClient from '@/components/PackagesClient'
import { EVENTS } from '@/lib/events-data'

// TODO: add real pricing once Chetan provides it — currently quote-on-request by design.
// Confirm whether this is intentional long-term vs. temporary until pricing is set.

export const metadata: Metadata = {
  title: 'Packages — DJ Daula',
  description:
    'DJ Daula packages for Sangeet, Reception, Mehndi/Dholki, Engagement Party, and Full Weekend. Custom quotes — no generic pricing, every wedding is different.',
}

export default function PackagesPage() {
  return (
    <PageShell>
      {/* Page header */}
      <section className="bg-daula-black py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
            Packages
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-daula-white text-balance mb-4">
            Every wedding is different.
            <br />
            So is every quote.
          </h1>
          <p className="text-daula-gray-light text-base max-w-xl">
            No fixed pricing lists. Your date, your events, your venue &mdash; Daula builds a quote around what you actually need.
          </p>
        </div>
      </section>

      {/* Package cards */}
      <section className="bg-daula-gray py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <PackagesClient />

          {/* Note on pricing philosophy */}
          <div className="mt-10 border border-daula-gray-mid p-6 bg-daula-black max-w-2xl">
            <p className="text-sm text-daula-gray-light leading-relaxed">
              <span className="text-daula-white font-semibold">Why no prices listed?</span>{' '}
              No two weddings are the same. Travel, duration, event type, and timing all affect the cost. A custom quote means you pay for what you actually need &mdash; no packages you don&apos;t want.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-daula-black py-14 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-daula-red text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm hover:bg-daula-red/90 transition-colors duration-200 text-center"
          >
            Request a quote &rarr;
          </Link>
          <Link
            href="/events"
            className="border border-daula-white/20 text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 text-center"
          >
            See all events
          </Link>
        </div>
      </section>
    </PageShell>
  )
}
