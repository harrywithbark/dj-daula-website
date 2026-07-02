'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ADD_ONS, EVENTS } from '@/lib/events-data'

type EventId = typeof EVENTS[number]['id']

interface PackageModalProps {
  eventId: EventId
  isOpen: boolean
  onClose: () => void
}

export default function PackageModal({ eventId, isOpen, onClose }: PackageModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const event = EVENTS.find((e) => e.id === eventId)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      modalRef.current?.focus()
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!event) return null

  const suggestedAddOns = event.suggestedAddOns?.map((id) => ADD_ONS.find((addon) => addon.id === id)).filter(Boolean) || []

  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-sm z-40 transition-opacity duration-200 ${isOpen ? 'opacity-100 bg-daula-black/80' : 'opacity-0 pointer-events-none bg-daula-black/0'}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-title-${eventId}`}
        ref={modalRef}
        tabIndex={-1}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 transition-opacity duration-200 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-daula-black border border-daula-gray-mid rounded-none">
          <div className="sticky top-0 bg-daula-black border-b border-daula-gray-mid p-5 md:p-6 flex items-start justify-between gap-4 z-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-daula-red mb-1">
                {event.accentLabel}
              </p>
              <h2 id={`modal-title-${eventId}`} className="text-2xl md:text-3xl font-black text-daula-white">
                {event.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close package details"
              className="text-daula-gray-light hover:text-daula-white text-2xl font-light mt-1 flex-shrink-0"
            >
              ✕
            </button>
          </div>

          <div className="p-5 md:p-6 space-y-6">
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-daula-gray-mid -mx-5 md:-mx-6" style={{ width: 'calc(100% + 2.5rem)' }}>
              <img
                src={event.imgSrc}
                alt={event.imgAlt}
                className="object-cover w-full h-full opacity-70"
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm text-daula-gray-light leading-relaxed">{event.description}</p>
              <p className="text-sm text-daula-white leading-relaxed">{event.details}</p>
            </div>

            <div className="border-t border-daula-gray-mid pt-5">
              <h3 className="text-xs font-semibold tracking-widest uppercase text-daula-white mb-3">
                What&apos;s included
              </h3>
              <ul className="space-y-2" role="list">
                {event.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-daula-gray-light">
                    <span className="w-2 h-2 rounded-full bg-daula-red mt-1.5 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {suggestedAddOns.length > 0 && (
              <div className="border-t border-daula-gray-mid pt-5">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-daula-white mb-3">
                  Popular add-ons
                </h3>
                <div className="space-y-2" role="list">
                  {suggestedAddOns.map((addon) => {
                    if (!addon) return null
                    const isPremium = 'isPremium' in addon && addon.isPremium
                    return (
                      <div
                        key={addon.id}
                        className={`flex items-start gap-3 p-3 border transition-all duration-200 ${
                          isPremium
                            ? 'bg-daula-gray border-[#00F0FF]/40 hover:border-[#00F0FF]/80 hover:shadow-[0_0_16px_rgba(0,240,255,0.2)]'
                            : 'bg-daula-gray border-daula-gray-mid hover:border-daula-red/30'
                        }`}
                        role="listitem"
                      >
                        <input
                          type="checkbox"
                          id={addon.id}
                          className={`w-4 h-4 mt-0.5 cursor-pointer ${isPremium ? 'accent-[#00F0FF]' : 'accent-daula-red'}`}
                          aria-label={addon.name}
                        />
                        <label htmlFor={addon.id} className="cursor-pointer flex-1 min-w-0">
                          <div className={`text-sm font-semibold flex items-center gap-2 ${isPremium ? 'text-[#00F0FF]' : 'text-daula-white'}`}>
                            {addon.name}
                            {isPremium && <span className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/40 rounded-full">Premium</span>}
                          </div>
                          <div className={`text-xs mt-0.5 ${isPremium ? 'text-[#00F0FF]/70' : 'text-daula-gray-light'}`}>{addon.description}</div>
                        </label>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            <div className="text-xs text-daula-gray-light border border-daula-gray-mid p-3 bg-daula-gray">
              <p>
                <span className="text-daula-white font-semibold">More add-ons available:</span> Uplighting, second microphone, dance coaching, photo booth, live drums, MC setup, and more. Ask in your custom quote.
              </p>
            </div>

            <div className="border-t border-daula-gray-mid pt-5">
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-4 py-3.5 hover:bg-daula-red/90 transition-colors duration-200 text-center block"
              >
                Get a custom quote for {event.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
