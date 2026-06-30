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
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-daula-black/90 backdrop-blur-md border-t border-daula-red/30 px-5 py-3 flex items-center justify-between"
      style={{
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
        className="bg-daula-red text-daula-white text-xs font-semibold tracking-wide px-5 py-2.5 hover:bg-daula-red/90 transition-colors duration-200"
      >
        Book Now &rarr;
      </Link>
    </div>
  )
}
