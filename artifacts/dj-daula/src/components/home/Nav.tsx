'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Music', href: '/music' },
  { label: 'Services', href: '/services' },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const pathname = usePathname()
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-sm border-b' : 'border-b border-transparent'
      }`}
      style={scrolled
        ? { background: 'rgba(255,255,255,0.97)', borderColor: 'rgba(206,31,31,0.25)' }
        : { background: 'transparent' }
      }
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-18"
        aria-label="Primary navigation"
      >
        <Link href="/" aria-label="DJ Daula — home">
          <img
            src="/daula-logo-nav.png"
            alt="DJ Daula"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-500 ${
                  pathname === link.href
                    ? 'text-daula-red'
                    : 'hover:text-daula-red'
                }`}
                style={pathname === link.href ? {} : { color: scrolled ? '#333' : '#fff' }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="text-daula-white text-sm font-semibold tracking-wide px-4 py-2 transition-all duration-200 neon-btn-red"
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
              className={`block w-6 h-[2px] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
              style={{ background: scrolled ? '#222' : '#fff' }}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              style={{ background: scrolled ? '#222' : '#fff' }}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
              style={{ background: scrolled ? '#222' : '#fff' }}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t px-5 pb-6 pt-4"
          style={{ background: '#fff', borderColor: 'rgba(0,0,0,0.08)' }}
        >
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-base font-medium tracking-wide border-b transition-colors duration-200 ${
                    pathname === link.href ? 'text-daula-red' : 'hover:text-daula-red'
                  }`}
                  style={{
                    color: pathname === link.href ? undefined : '#333',
                    borderColor: 'rgba(0,0,0,0.08)',
                  }}
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
