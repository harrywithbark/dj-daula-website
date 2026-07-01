import { useState } from 'react'
import { Link } from 'wouter'
import PageShell from '@/components/PageShell'

const SHOW_SCARCITY_NOTE = false

const EVENT_OPTIONS = [
  'Sangeet',
  'Wedding Reception',
  'Mehndi / Dholki',
  'Engagement Party',
  'Full Weekend Package',
  'Other',
]

const GUEST_COUNT_OPTIONS = [
  'Under 100',
  '100–200',
  '200–400',
  '400+',
]

const REFERRAL_OPTIONS = [
  'Google Search',
  'Instagram',
  'Friend / Family referral',
  'Venue recommendation',
  'Other DJ referral',
  'Other',
]

type FormState = 'idle' | 'loading' | 'success' | 'error'

const inputClass = 'w-full bg-white border text-sm px-4 py-3 focus:outline-none transition-colors duration-200 placeholder:text-gray-400'
const inputStyle = { borderColor: 'rgba(0,0,0,0.18)', color: '#111' }

function FormField({ label, required, id, children }: { label: string; required?: boolean; id: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium" style={{ color: '#111' }}>
        {label}
        {required && <span className="text-daula-red ml-1" aria-label="required">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [selectedEvents, setSelectedEvents] = useState<string[]>([])

  const toggleEvent = (option: string) => {
    setSelectedEvents((prev) =>
      prev.includes(option) ? prev.filter((e) => e !== option) : [...prev, option]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = (data.get('name') as string)?.trim()
    const weddingDate = data.get('weddingDate') as string

    if (!name) {
      setErrorMsg('Name is required.')
      setFormState('error')
      return
    }
    if (!weddingDate) {
      setErrorMsg('Wedding date is required.')
      setFormState('error')
      return
    }
    if (selectedEvents.length === 0) {
      setErrorMsg('Please select at least one event.')
      setFormState('error')
      return
    }

    setFormState('loading')
    setErrorMsg(null)

    try {
      const payload = {
        name,
        partnerName: data.get('partnerName') as string,
        weddingDate,
        venue: data.get('venue') as string,
        events: selectedEvents,
        guestCount: data.get('guestCount') as string,
        referralSource: data.get('referralSource') as string,
      }

      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setFormState('success')
      } else {
        const body = await res.json().catch(() => ({}))
        setErrorMsg(body.error || 'Something went wrong. Please try again.')
        setFormState('error')
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setFormState('error')
    }
  }

  return (
    <PageShell>
      <section className="bg-mesh-dark py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
            Book / Inquire
          </p>
          <h1 className="text-display-lg text-daula-white text-balance mb-3">
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

      <section className="section-light py-12 md:py-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
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
                        placeholder="Your first & last name"
                        className={inputClass}
                        style={inputStyle}
                        required
                      />
                    </FormField>
                    <FormField label="Partner's name" id="partnerName">
                      <input
                        id="partnerName"
                        name="partnerName"
                        type="text"
                        autoComplete="off"
                        placeholder="Partner's first & last name"
                        className={inputClass}
                        style={inputStyle}
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
                        style={{ ...inputStyle, colorScheme: 'light' }}
                      />
                    </FormField>
                    <FormField label="Venue (if confirmed)" id="venue">
                      <input
                        id="venue"
                        name="venue"
                        type="text"
                        placeholder="Venue name or city"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </FormField>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium" style={{ color: '#111' }}>
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
                                ? 'bg-daula-red border-daula-red text-white'
                                : ''
                            }`}
                            style={!checked ? { borderColor: 'rgba(0,0,0,0.18)', color: '#555', background: 'white' } : undefined}
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
                        style={inputStyle}
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
                        style={inputStyle}
                        defaultValue=""
                      >
                        <option value="" disabled>Select one</option>
                        {REFERRAL_OPTIONS.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  {formState === 'error' && errorMsg && (
                    <p className="text-sm text-daula-red" role="alert">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="bg-daula-red text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm hover:bg-daula-red/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed self-start"
                  >
                    {formState === 'loading' ? 'Sending...' : 'Check Availability →'}
                  </button>

                  <p className="text-xs text-daula-gray-light">
                    Daula personally responds to every enquiry within 24 hours.
                  </p>
                </form>
              )}
            </div>

            <aside className="flex flex-col gap-6" aria-label="Alternative contact methods">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#888' }}>
                  Other ways to reach Daula
                </p>

                <div className="flex flex-col gap-4">
                  <div className="glass-card-light p-5">
                    <p className="text-sm font-semibold mb-1" style={{ color: '#111' }}>WhatsApp</p>
                    <p className="text-xs mb-3" style={{ color: '#666' }}>
                      Fastest response &mdash; same day.
                    </p>
                    <a
                      href="https://wa.me/17780000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-daula-red hover:opacity-80 transition-opacity duration-200"
                    >
                      Message on WhatsApp &rarr;
                    </a>
                  </div>

                  <div className="glass-card-light p-5">
                    <p className="text-sm font-semibold mb-1" style={{ color: '#111' }}>Email</p>
                    <p className="text-xs mb-3" style={{ color: '#666' }}>
                      Prefer email? Every message gets a personal reply.
                    </p>
                    <a
                      href="mailto:bookings@djdaula.com"
                      className="text-xs font-semibold text-daula-red hover:opacity-80 transition-opacity duration-200"
                    >
                      bookings@djdaula.com &rarr;
                    </a>
                  </div>

                  <p className="text-xs" style={{ color: '#888' }}>
                    Have a quick question?{' '}
                    <Link href="/faq" className="underline underline-offset-2 hover:text-daula-red transition-colors duration-200" style={{ color: '#111' }}>
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
