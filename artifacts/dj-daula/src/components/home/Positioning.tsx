'use client'

import ScrollReveal, { StaggerContainer } from '@/components/ScrollReveal'
import TiltCard from '@/components/TiltCard'

const PILLARS = [
  {
    number: '01',
    title: 'You booked Daula. You get Daula.',
    body: 'No substitutes. No subcontractors. No surprises. The DJ at your Sangeet is the same DJ at your Reception — every single time.',
  },
  {
    number: '02',
    title: '15 years. Not 15 years of the company.',
    body: 'Not 15 years of the company. 15 years of Chetan — reading crowds, building sets, knowing exactly when to drop.',
  },
  {
    number: '03',
    title: 'Open-format South Asian specialist.',
    body: 'Bhangra, Bollywood, UK Grime, House, Hip-Hop — seamlessly blended so nobody sits down.',
  },
  {
    number: '04',
    title: 'From Surrey. For Surrey — and beyond.',
    body: 'Local with no travel fees across the Lower Mainland. Available for destination weddings worldwide.',
  },
]

export default function Positioning() {
  return (
    <section
      className="relative section-light py-20 md:py-28 border-b border-black/10 overflow-hidden"
      aria-labelledby="positioning-heading"
    >
      {/* Subtle warm red glow — bottom right */}
      <div
        className="absolute -right-1/4 bottom-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(206,31,31,0.04) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
            <h2
              id="positioning-heading"
              className="text-display-lg text-balance"
              style={{ color: '#111111' }}
            >
              When you book Daula,{' '}
              <span className="text-daula-red" style={{ textShadow: '0 0 12px rgba(206,31,31,0.18)' }}>
                you get Daula.
              </span>
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#666' }}>
              Four reasons the couples who do their research keep coming back to the same name.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.12}>
          {PILLARS.map((pillar) => (
            <TiltCard key={pillar.title} maxTilt={5} scale={1.015}>
              <div
                className="glass-card-light group relative p-8 overflow-hidden cursor-default h-full"
                style={{ borderRadius: 0 }}
              >
                {/* Left red accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
                  aria-hidden="true"
                  style={{ background: '#CE1F1F', boxShadow: '0 0 8px rgba(206,31,31,0.5)' }}
                />
                <span
                  className="text-xs font-black tracking-widest mb-3 block"
                  style={{ color: 'rgba(206,31,31,0.4)' }}
                >
                  {pillar.number}
                </span>
                <h3
                  className="text-lg font-black mb-2 tracking-tight group-hover:text-daula-red transition-colors duration-300"
                  style={{ color: '#111111' }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#555' }}>
                  {pillar.body}
                </p>
              </div>
            </TiltCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
