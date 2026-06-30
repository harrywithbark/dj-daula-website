import { Link, useLocation } from 'wouter'
import { useEffect, useState } from 'react'
import Logo from '@/components/Logo'

const NAV_LINKS = [
  { label: 'Music', href: '/music' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [pathname] = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-daula-black/95 backdrop-blur-sm border-b border-daula-red/40'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-18"
        aria-label="Primary navigation"
      >
        <Logo variant="dark" accent="red" />

        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-daula-white'
                    : 'text-daula-gray-light hover:text-daula-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-4 py-2 hover:bg-daula-red/90 transition-all duration-200 hover:shadow-[0_0_12px_rgba(0,240,255,0.3)]"
            aria-label="Book your date"
          >
            Book Your Date&nbsp;&rarr;
          </Link>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-[2px] bg-daula-white transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
            />
            <span
              className={`block w-6 h-[2px] bg-daula-white transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-[2px] bg-daula-white transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-daula-black border-t border-daula-gray-mid px-5 pb-6 pt-4"
        >
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-base font-medium tracking-wide border-b border-daula-gray-mid transition-colors duration-200 ${
                    pathname === link.href
                      ? 'text-daula-white'
                      : 'text-daula-gray-light hover:text-daula-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
