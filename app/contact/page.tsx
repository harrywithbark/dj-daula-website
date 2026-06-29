'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import type { InquiryPayload } from '@/app/api/inquiry/route'

// Config — toggle once scarcity is actually true
const SHOW_SCARCITY_NOTE = false

const EVENT_OPTIONS = [
  'Sangeet',
  'Wedding Reception',
  'Mehndi / Dholki',
  'Engagement Party',
  'Full Weekend Package',
  "Not sure yet",
]

const GUEST_COUNT_OPTIONS = [
  'Under 100',
  '100–200',
  '200–350',
  '350–500',
  '500+',
  "Not sure yet",
]

const REFERRAL_OPTIONS = [
  'Instagram',
  'TikTok',
  'YouTube / SoundCloud',
  'Friend or family referral',
  'Attended an event Daula DJed',
  'Google search',
  'Other',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

function FormField({
  label,
  required,
  children,
  id,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
  id: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-daula-white">
        {label}
        {required && <span className="text-daula-red ml-1" aria-label="required">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass =
  'w-full bg-daula-black border border-daula-gray-mid text-daula-white placeholder-daula-gray-light px-4 py-3 text-sm focus:outline-none focus:border-daula-red transition-colors duration-200'

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])

  const toggleEvent = (event: string) => {
    setSelectedEvents((prev) =>
      prev.includes(event) ? prev.filter((e) => e !== event) : [...prev, event]
    )
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)

    const payload: InquiryPayload = {
      name: (data.get('name') as string) ?? '',
      partnerName: (data.get('partnerName') as string) ?? '',
      weddingDate: (data.get('weddingDate') as string) ?? '',
      venue: (data.get('venue') as string) ?? '',
      events: selectedEvents,
      guestCount: (data.get('guestCount') as string) ?? '',
      referralSource: (data.get('referralSource') as string) ?? '',
    }

    if (!payload.name.trim()) {
      setFormState('error')
      setErrorMsg('Please enter your name.')
      return
    }
    if (!payload.weddingDate) {
      setFormState('error')
      setErrorMsg('Please enter your wedding date.')
      return
    }
    if (payload.events.length === 0) {
      setFormState('error')
      setErrorMsg('Please select at least one event.')
      return
    }

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok) {
        setFormState('error')
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.')
      } else {
        setFormState('success')
      }
    } catch {
      setFormState('error')
      setErrorMsg('Network error. Please try again or message on WhatsApp.')
    }
  }

  return (
    <PageShell>
      {/* Page header */}
      <section className="bg-daula-black py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
            Book / Inquire
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-daula-white text-balance mb-3">
            Let&apos;s check your date.
          </h1>
          <p className="text-daula-gray-light text-base">
            No commitment. No pressure. Just a conversation about your wedding.
          </p>
          {SHOW_SCARCITY_NOTE && (
            <p className="mt-3 text-xs text-daula-gold tracking-wide">
              Currently booking 2026 and 2027 dates &mdash; limited weekends available.
            </p>
          )}
        </div>
      </section>

      <section className="bg-daula-gray py-12 md:py-16 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            {/* Form — takes 2/3 width on large screens */}
            <div className="lg:col-span-2">
              {formState === 'success' ? (
                <div className="bg-daula-black border border-daula-gray-mid p-8 flex flex-col gap-4">
                  <div className="w-2 h-8 bg-daula-red" aria-hidden="true" />
                  <h2 className="text-2xl font-black text-daula-white">
                    Got it &mdash; Daula will be in touch.
                  </h2>
                  <p className="text-daula-gray-light text-sm leading-relaxed">
                    Every enquiry is answered personally within 24 hours. Keep an eye on your inbox.
                  </p>
                  <div className="flex gap-3 mt-2">
                    {/* TODO: add real WhatsApp number */}
                    <a
                      href="https://wa.me/17780000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-daula-gray-light hover:text-daula-white transition-colors duration-200"
                    >
                      Want a faster response? &rarr; WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Your name" required id="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Your first &amp; last name"
                        className={inputClass}
                        required
                      />
                    </FormField>
                    <FormField label="Partner's name" id="partnerName">
                      <input
                        id="partnerName"
                        name="partnerName"
                        type="text"
                        autoComplete="off"
                        placeholder="Partner's first &amp; last name"
                        className={inputClass}
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Wedding date" required id="weddingDate">
                      <input
                        id="weddingDate"
                        name="weddingDate"
                        type="date"
                        className={inputClass}
                        required
                        style={{ colorScheme: 'dark' }}
                      />
                    </FormField>
                    <FormField label="Venue (if confirmed)" id="venue">
                      <input
                        id="venue"
                        name="venue"
                        type="text"
                        placeholder="Venue name or city"
                        className={inputClass}
                      />
                    </FormField>
                  </div>

                  {/* Events checkboxes */}
                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-daula-white">
                      Events needed <span className="text-daula-red ml-1" aria-label="required">*</span>
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {EVENT_OPTIONS.map((option) => {
                        const checked = selectedEvents.includes(option)
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleEvent(option)}
                            aria-pressed={checked}
                            className={`px-3 py-2.5 text-xs font-medium text-left transition-colors duration-200 border ${
                              checked
                                ? 'bg-daula-red border-daula-red text-daula-white'
                                : 'bg-daula-black border-daula-gray-mid text-daula-gray-light hover:border-daula-white/30 hover:text-daula-white'
                            }`}
                          >
                            {option}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Approximate guest count" id="guestCount">
                      <select
                        id="guestCount"
                        name="guestCount"
                        className={`${inputClass} cursor-pointer`}
                        defaultValue=""
                      >
                        <option value="" disabled>Select a range</option>
                        {GUEST_COUNT_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </FormField>
                    <FormField label="How did you find Daula?" id="referralSource">
                      <select
                        id="referralSource"
                        name="referralSource"
                        className={`${inputClass} cursor-pointer`}
                        defaultValue=""
                      >
                        <option value="" disabled>Select one</option>
                        {REFERRAL_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {/* Error message */}
                  {formState === 'error' && errorMsg && (
                    <p className="text-sm text-daula-red" role="alert">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="bg-daula-red text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm hover:bg-daula-red/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed self-start"
                  >
                    {formState === 'loading' ? 'Sending...' : 'Check Availability \u2192'}
                  </button>

                  <p className="text-xs text-daula-gray-light">
                    Daula personally responds to every enquiry within 24 hours.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar — secondary contact methods */}
            <aside className="flex flex-col gap-6" aria-label="Alternative contact methods">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-daula-gray-light mb-4">
                  Other ways to reach Daula
                </p>

                <div className="flex flex-col gap-4">
                  {/* WhatsApp */}
                  <div className="bg-daula-black border border-daula-gray-mid p-5">
                    <p className="text-sm font-semibold text-daula-white mb-1">WhatsApp</p>
                    <p className="text-xs text-daula-gray-light mb-3">
                      Fastest response &mdash; same day.
                    </p>
                    {/* TODO: add real WhatsApp number */}
                    <a
                      href="https://wa.me/17780000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-daula-red hover:text-daula-white transition-colors duration-200"
                    >
                      Message on WhatsApp &rarr;
                    </a>
                  </div>

                  {/* Email */}
                  <div className="bg-daula-black border border-daula-gray-mid p-5">
                    <p className="text-sm font-semibold text-daula-white mb-1">Email</p>
                    <p className="text-xs text-daula-gray-light mb-3">
                      Prefer email? Every message gets a personal reply.
                    </p>
                    {/* TODO: confirm domain + email before launch */}
                    <a
                      href="mailto:bookings@djdaula.com"
                      className="text-xs font-semibold text-daula-red hover:text-daula-white transition-colors duration-200"
                    >
                      bookings@djdaula.com &rarr;
                    </a>
                  </div>

                  {/* FAQ link */}
                  <p className="text-xs text-daula-gray-light">
                    Have a quick question?{' '}
                    <Link href="/faq" className="text-daula-white underline underline-offset-2 hover:text-daula-red transition-colors duration-200">
                      See the FAQ
                    </Link>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
