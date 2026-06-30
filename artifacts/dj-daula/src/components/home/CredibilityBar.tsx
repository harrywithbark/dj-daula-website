import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 15, suffix: '+', label: 'Years Behind the Decks' },
  { value: 500, suffix: '+', label: 'South Asian Events' },
  { value: 3, suffix: ' Provinces', label: 'Covered Locally' },
  { value: 100, suffix: '%', label: 'No DJ Substitutes. Ever.' },
]

function AnimatedNumber({
  target,
  suffix,
  active,
}: {
  target: number
  suffix: string
  active: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1200
    const steps = 40
    const increment = target / steps
    const interval = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function CredibilityBar() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="bg-daula-black border-b border-daula-gray-mid py-12 md:py-16"
      aria-label="Credentials"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-daula-gray-mid" role="list">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-daula-black px-6 py-8 md:py-10 flex flex-col gap-1 items-center text-center"
              role="listitem"
            >
              <p className="text-3xl md:text-4xl font-black text-daula-white tabular-nums leading-none">
                <AnimatedNumber target={stat.value} suffix={stat.suffix} active={active} />
              </p>
              <p className="text-xs font-medium tracking-wide text-daula-gray-light mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
