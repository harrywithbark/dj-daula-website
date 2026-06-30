import { useEffect, useState } from 'react'

export default function Preloader() {
  const [show, setShow] = useState(true)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true)
      setTimeout(() => setShow(false), 600)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-daula-black"
      style={{
        opacity: fade ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: fade ? 'none' : 'all',
      }}
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <img
            src="/logo-da.png"
            alt="DJ Daula"
            className="w-20 h-20 object-contain"
            style={{
              animation: 'preloaderPulse 1.2s ease-in-out infinite',
            }}
          />
          <div
            className="absolute inset-0 rounded-full"
            style={{
              animation: 'preloaderRing 1.2s ease-in-out infinite',
              border: '2px solid rgba(206,31,31,0.4)',
            }}
          />
        </div>
        <p
          className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-gray-light"
          style={{
            animation: 'preloaderText 1.2s ease-in-out infinite',
          }}
        >
          Loading
        </p>
      </div>

      <style>{`
        @keyframes preloaderPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
        }
        @keyframes preloaderRing {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 0; }
        }
        @keyframes preloaderText {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
