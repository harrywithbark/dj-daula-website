'use client'

// TODO: confirm all FAQ answers with Chetan before launch — these are placeholder answers only.
// None of this content should be published as final without Chetan's sign-off.

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import PageShell from '@/components/PageShell'

// Note: metadata export can't be used in 'use client' — moved to a server wrapper below
const FAQ_ITEMS = [
  {
    question: 'How far in advance should we book?',
    answer:
      'South Asian weddings book 12–24 months out. The sooner you reach out, the better your chance of locking in your dates — especially for peak wedding season weekends. That said, always worth checking even with shorter timelines.',
  },
  {
    question: 'Do you take song requests during the event?',
    answer:
      'Yes — within reason. A good DJ reads the floor, not a list. We&apos;ll do a pre-event consultation to capture the songs that matter to you and your family, and Daula factors those in as he builds the night. Requests are welcome; the floor is the final boss.',
  },
  {
    question: 'Can you DJ multiple events in one wedding weekend?',
    answer:
      'Absolutely — that&apos;s the Full Weekend Package. One DJ across every night means a consistent read of your crowd, consistent energy, and no handoff surprises. It&apos;s often better value too.',
  },
  {
    question: 'Do you bring your own sound equipment, or does the venue need to provide it?',
    answer:
      'Daula brings professional-grade sound and lighting equipment to every event. If the venue has a house system, we&apos;ll assess and integrate where it makes sense — but you&apos;re never dependent on it.',
  },
  {
    question: 'What areas do you travel to, and do you charge travel fees?',
    answer:
      'Based in Surrey, BC — no travel fees anywhere in the Lower Mainland. Available for destination weddings across Canada and internationally; travel fees apply for events outside the Lower Mainland and are confirmed at the time of booking.',
  },
  {
    question: 'Do you offer MC services alongside DJing?',
    answer:
      'Yes. Daula can handle MC duties alongside DJing for events where a full MC presence is needed — introductions, crowd direction, set transitions. Confirm this when you inquire so it&apos;s built into the quote.',
  },
  {
    question: 'What&apos;s your backup plan if there&apos;s an equipment issue?',
    answer:
      'Redundant equipment — backup laptop, backup audio interface, backup cables. Professional gigs carry backup gear as standard. No equipment failure has ever stopped a set.',
  },
  {
    question: 'How does payment and deposit work?',
    answer:
      'A deposit is required to hold your date; the balance is due before the event. Payment methods and exact terms are confirmed at booking. Reach out via the form or WhatsApp and Daula will walk you through it.',
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-daula-gray-mid">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-base font-semibold text-daula-white">{question}</span>
        <span
          className={`flex-shrink-0 w-5 h-5 flex items-center justify-center text-daula-red transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p
            className="text-sm text-daula-gray-light leading-relaxed"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </div>
      )}
    </div>
  )
}

export default function FaqPage() {
  return (
    <PageShell>
      {/* Page header */}
      <section className="bg-daula-black py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
            FAQ
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-daula-white text-balance mb-4">
            Common questions.
          </h1>
          <p className="text-daula-gray-light text-base max-w-xl">
            If your question isn&apos;t here, just reach out &mdash; Daula responds personally to every enquiry.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-daula-gray py-12 md:py-16 border-b border-daula-gray-mid">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="border-t border-daula-gray-mid">
            {FAQ_ITEMS.map((item) => (
              <FaqItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-daula-black py-14 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-daula-white font-semibold text-lg mb-4">
            Still have a question?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-6 py-3 hover:bg-daula-red/90 transition-colors duration-200 text-center"
            >
              Ask Daula directly &rarr;
            </Link>
            {/* TODO: add real WhatsApp number */}
            <a
              href="https://wa.me/17780000000"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-daula-white/20 text-daula-white text-sm font-medium px-6 py-3 hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 text-center"
            >
              Message on WhatsApp &rarr;
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
