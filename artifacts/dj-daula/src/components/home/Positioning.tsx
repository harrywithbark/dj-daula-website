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
      className="relative bg-daula-black py-20 md:py-28 border-b border-daula-gray-mid overflow-hidden"
      aria-labelledby="positioning-heading"
    >
      {/* === POSITIONING: Cyan wash from the left side === */}
      <div
        className="absolute -left-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[600px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,240,255,0.09) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <h2
            id="positioning-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-daula-white text-balance"
          >
            When you book Daula,
            <br />
            <span className="text-daula-red">you get Daula.</span>
          </h2>
          <p className="text-daula-gray-light text-sm max-w-xs leading-relaxed">
            Four reasons the couples who do their research keep coming back to the same name.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-daula-gray-mid">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative px-8 py-8 border-b border-r border-daula-gray-mid overflow-hidden hover:bg-daula-gray transition-colors duration-300"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-daula-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"
                aria-hidden="true"
              />
              <span className="text-xs font-black tracking-widest text-daula-red/40 group-hover:text-daula-red transition-colors duration-200 mb-3 block">
                {pillar.number}
              </span>
              <h3 className="text-lg font-black text-daula-white mb-2 tracking-tight relative z-10">
                {pillar.title}
              </h3>
              <p className="text-sm text-daula-gray-light leading-relaxed relative z-10">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
