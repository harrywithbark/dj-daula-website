const PILLARS = [
  {
    title: 'No substitutes. Ever.',
    body: 'You booked Daula. You get Daula — at every event, no surprises, no swaps.',
  },
  {
    title: '15 years behind the decks.',
    body: 'Not 15 years of the company. 15 years of Chetan — reading crowds, building sets, knowing exactly when to drop.',
  },
  {
    title: 'Open-format South Asian specialist.',
    body: 'Bhangra, Bollywood, UK Grime, House, Hip-Hop — seamlessly blended so nobody sits down.',
  },
  {
    title: 'From Surrey. For Surrey — and beyond.',
    body: 'Local with no travel fees across the Lower Mainland. Available for destination weddings worldwide.',
  },
]

export default function Positioning() {
  return (
    <section
      className="bg-daula-black py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="positioning-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2
          id="positioning-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-daula-white text-balance mb-14 md:mb-16"
        >
          When you book Daula,
          <br />
          <span className="text-daula-red">you get Daula.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-daula-gray-mid">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="px-8 py-8 border-b border-r border-daula-gray-mid"
            >
              <h3 className="text-lg font-bold text-daula-white mb-2 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-sm text-daula-gray-light leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
