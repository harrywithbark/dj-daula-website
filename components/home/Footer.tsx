import Link from 'next/link'
import Logo from '@/components/Logo'
import AftershockBadge from '@/components/AftershockBadge'

const PAGE_LINKS = [
  { label: 'Music', href: '/music' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Packages', href: '/packages' },
  { label: 'Book Now', href: '/contact' },
]

// Social icons as inline SVGs — no emoji, no external icon lib needed
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
  {
    label: 'Instagram',
    // TODO: confirm @dj_daula handle is correct
    href: 'https://instagram.com/dj_daula',
    Icon: InstagramIcon,
  },
  {
    label: 'SoundCloud',
    href: 'https://soundcloud.com/djdaula',
    Icon: SoundCloudIcon,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@djdaula',
    Icon: YouTubeIcon,
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@djdaula',
    Icon: TikTokIcon,
  },
  // NOTE: Facebook deliberately excluded — inactive page (165 likes) is worse than no link
]

export default function Footer() {
  return (
    <footer className="bg-daula-black border-t border-daula-gray-mid" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Logo variant="dark" accent="gold" />
            <p className="text-sm text-daula-gray-light leading-relaxed">
              Surrey&apos;s South Asian Wedding DJ
              <br />
              Available Worldwide
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-daula-gray-light hover:text-daula-white transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links column */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-daula-gray-light mb-4">
              Pages
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-daula-gray-light hover:text-daula-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-daula-gray-light mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-2 text-sm" role="list">
              <li>
                {/* TODO: add real WhatsApp number */}
                <a
                  href="https://wa.me/17780000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-daula-gray-light hover:text-daula-white transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                {/* TODO: confirm domain + email before launch */}
                <a
                  href="mailto:bookings@djdaula.com"
                  className="text-daula-gray-light hover:text-daula-white transition-colors duration-200"
                >
                  bookings@djdaula.com
                </a>
              </li>
              <li>
                {/* TODO: confirm @dj_daula handle is correct */}
                <a
                  href="https://instagram.com/dj_daula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-daula-gray-light hover:text-daula-white transition-colors duration-200"
                >
                  @dj_daula
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-daula-gray-mid flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-daula-gray-light">
            &copy; 2026 DJ Daula &middot; Surrey, BC
          </p>
          <AftershockBadge />
        </div>
      </div>
    </footer>
  )
}
