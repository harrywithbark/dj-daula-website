import { Link } from 'wouter'
import { useEffect, useState } from 'react'

export default function MobileStickyCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight * 0.7
      setVisible(scrollY > heroHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-daula-black/95 backdrop-blur-md px-5 py-3 flex items-center justify-between"
      style={{
        borderTop: '1px solid rgba(206,31,31,0.6)',
        boxShadow: '0 -4px 24px rgba(206,31,31,0.2)',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div className="flex flex-col">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-daula-gray-light">
          Ready to book?
        </span>
        <span className="text-xs font-bold text-daula-white">
          Check availability
        </span>
      </div>
      <Link
        href="/contact"
        className="text-daula-white text-xs font-semibold tracking-wide px-5 py-2.5 transition-all duration-200 neon-btn-red"
      >
        Book Now &rarr;
      </Link>
    </div>
  )
}
