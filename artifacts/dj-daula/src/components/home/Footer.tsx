'use client'

import Link from 'next/link'
import AftershockBadge from '@/components/AftershockBadge'

const PAGE_LINKS = [
  { label: 'Music', href: '/music' },
  { label: 'Services', href: '/services' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Packages', href: '/packages' },
  { label: 'Book Now', href: '/contact' },
]

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function SoundCloudIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M1.5 14.5c0 1.4 1.1 2.5 2.5 2.5h14a4 4 0 0 0 0-8 5 5 0 0 0-9.7 1.5 2 2 0 0 0-2.3 1M1.5 14.5a2 2 0 0 1 2-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <polygon points="10,9 16,12 10,15" fill="currentColor" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/dj_daula', Icon: InstagramIcon },
  { label: 'SoundCloud', href: 'https://soundcloud.com/djdaula', Icon: SoundCloudIcon },
  { label: 'YouTube', href: 'https://youtube.com/@djdaula', Icon: YouTubeIcon },
  { label: 'TikTok', href: 'https://tiktok.com/@djdaula', Icon: TikTokIcon },
]

export default function Footer() {
  return (
    <footer
      className="relative section-light border-t overflow-hidden"
      style={{ borderColor: 'rgba(0,0,0,0.1)' }}
      role="contentinfo"
    >
      {/* Red accent line */}
      <div
        className="h-px w-full"
        aria-hidden="true"
        style={{
          background: 'linear-gradient(to right, transparent, #CE1F1F 30%, #CE1F1F 70%, transparent)',
          boxShadow: '0 0 6px 1px rgba(206,31,31,0.3)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-14 pb-10 relative" style={{ zIndex: 'var(--z-base)' as React.CSSProperties['zIndex'] }}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <img
              src="/daula-logo-footer.png"
              alt="DJ Daula logo"
              className="h-16 w-auto object-contain"
              style={{ maxWidth: '180px' }}
            />
            <p className="text-sm leading-relaxed" style={{ color: '#444' }}>
              Surrey&apos;s South Asian Wedding DJ
              <br />
              Available Worldwide
            </p>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: '#666' }}>
              15 years behind the decks. 500+ events. One DJ — no substitutes, ever. From Bhangra to Bollywood and everything between.
            </p>
            <div className="flex items-center gap-4 mt-1">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-daula-red transition-colors duration-200 hover:scale-110 transform"
                  style={{ color: '#666' }}
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#999' }}>
              Pages
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-daula-red transition-colors duration-200"
                    style={{ color: '#444' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#999' }}>
              Reach Daula
            </p>
            <ul className="flex flex-col gap-2 text-sm" role="list">
              <li>
                <a href="https://wa.me/17780000000" target="_blank" rel="noopener noreferrer"
                  className="hover:text-daula-red transition-colors duration-200" style={{ color: '#444' }}>
                  WhatsApp — fastest response
                </a>
              </li>
              <li>
                <a href="mailto:bookings@djdaula.com"
                  className="hover:text-daula-red transition-colors duration-200" style={{ color: '#444' }}>
                  bookings@djdaula.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/dj_daula" target="_blank" rel="noopener noreferrer"
                  className="hover:text-daula-red transition-colors duration-200" style={{ color: '#444' }}>
                  @dj_daula on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}>
          <p className="text-xs" style={{ color: '#888' }}>
            &copy; 2026 DJ Daula &middot; Surrey, BC
          </p>
          <AftershockBadge />
        </div>
      </div>
    </footer>
  )
}
