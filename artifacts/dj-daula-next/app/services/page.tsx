import Link from 'next/link'
import ServicesList from '@/components/home/ServicesList'
import ScrollReveal from '@/components/ScrollReveal'

const CORE_SERVICES = [
  { title: 'DJ Performance', description: 'Seamless, beat-matched sets that read the room and move every generation to the floor. South Asian, Bollywood, Bhangra, R&B, Hip-Hop, House and the classics.', idealFor: 'Every event' },
  { title: 'Wedding Entertainment', description: 'Full ceremony-to-afterparty coordination. Timed entrances, first dances and the complete energy arc planned to the minute.', idealFor: 'Weddings & receptions' },
  { title: 'Receptions', description: 'A refined soundtrack for dinner and speeches that builds into an unstoppable late-night celebration — every moment landed on cue.', idealFor: 'Wedding receptions' },
  { title: 'Jaggo Nights', description: 'High-energy traditional jaggo vibes — dhol, gharas, lighting and crowd-leading hype crafted for the loudest, most electric night of the week.', idealFor: 'Pre-wedding celebrations' },
  { title: 'Private Parties', description: 'Birthdays, anniversaries and milestone celebrations curated around your guest list and the music you actually love — no generic playlists, ever.', idealFor: 'Private celebrations' },
  { title: 'Corporate Events', description: 'Brand-conscious entertainment for galas, launches and award nights — professional, punctual and polished from load-in to the final song.', idealFor: 'Corporate functions' },
]

const ADD_ONS = [
  { title: 'MC Services', description: 'A professional MC who keeps your reception on schedule, commands the room and coordinates every announcement.', idealFor: 'Receptions & ceremonies', badge: 'Add-on' },
  { title: 'Low Fog', description: 'A cinematic dancefloor cloud for first dances and grand entrances — dramatic, photogenic and completely safe indoors.', idealFor: 'First dances & entrances', badge: 'Add-on' },
  { title: 'Sparklers', description: 'Cold-spark fountains that frame your biggest moments in light without the heat, smoke or risk of open flame.', idealFor: 'Entrances & cake cuts', badge: 'Add-on' },
  { title: 'Photobooth', description: 'A premium open-air booth with curated props, instant prints and a digital gallery your guests will keep coming back to.', idealFor: 'Keepsakes & guest fun', badge: 'Add-on' },
  { title: 'Dholi', description: 'A live dhol player to drive baraats, entrances and jaggo nights with thunderous, authentic percussion.', idealFor: 'Traditional moments', badge: 'Add-on' },
  { title: 'Bhangra Team', description: 'A choreographed live performance crew that transforms your entrance or interval into an unforgettable showpiece.', idealFor: 'Showstopper moments', badge: 'Add-on' },
  { title: 'Live Musicians', description: 'Sitar, tabla, harmonium and more — live instruments woven into the soundtrack for a truly bespoke atmosphere.', idealFor: 'Ceremonies & receptions', badge: 'Add-on' },
  { title: 'Dancefloor Enhancements', description: 'LED dancefloors, intelligent lighting rigs and colour-matched uplighting tuned to your palette and venue.', idealFor: 'Atmosphere upgrades', badge: 'Add-on' },
  { title: 'Lighting & Visual Production', description: 'Full-scale production lighting with projection, screens and immersive visual effects. One team, no third parties.', idealFor: 'Large events & productions', badge: 'Add-on' },
]

export default function ServicesPage() {
  return (
    <main className="pt-16">
      <section className="bg-mesh-dark py-16 md:py-24 border-b border-daula-gray-mid relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-4">Services</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-display-xl text-daula-white text-balance mb-5">
              One team.<br /><span className="text-daula-red">Every part of the night.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-daula-gray-light text-base md:text-lg max-w-2xl leading-relaxed">
              From the music that drives the floor to the spectacle that frames your biggest moments — build a package that fits your celebration exactly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-light py-16 md:py-20 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">Core entertainment</p>
            <h2 className="text-display-md text-balance mb-3" style={{ color: '#111' }}>The foundation of every event</h2>
            <p className="text-sm max-w-xl mb-10" style={{ color: '#555' }}>The headline services — the music, the coordination and the energy.</p>
          </ScrollReveal>
          <ServicesList items={CORE_SERVICES} columns={3} />
        </div>
      </section>

      <section className="bg-mesh-dark py-16 md:py-20 border-b border-daula-gray-mid relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">Premium add-ons</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-daula-white mb-3">Upgrades that make the moment</h2>
            <p className="text-daula-gray-light text-sm max-w-xl mb-10">Layer in the spectacle. Each add-on is delivered and coordinated by our team.</p>
          </ScrollReveal>
          <ServicesList items={ADD_ONS} columns={3} />
        </div>
      </section>

      <section className="bg-daula-gray py-12 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="border border-daula-gray-mid bg-daula-black p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-daula-red mb-2">Multi-day &amp; multi-DJ packages</p>
                <h3 className="text-xl md:text-2xl font-black text-daula-white mb-2">Sangeet. Wedding. Reception. All covered.</h3>
                <p className="text-sm text-daula-gray-light leading-relaxed max-w-2xl">Multi-day celebrations can be booked as a single package — all coordinated through one point of contact.</p>
              </div>
              <Link href="/contact" className="inline-block bg-daula-red text-daula-white font-semibold tracking-wide px-7 py-3.5 text-sm hover:bg-daula-red/90 transition-colors duration-200 text-center flex-shrink-0">Ask about packages &rarr;</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-daula-gray py-14 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-daula-white mb-3">Ready to fill your dancefloor?</h2>
            <p className="text-daula-gray-light text-sm mb-8 max-w-lg">Tell us your date and we&apos;ll craft a tailored entertainment package — usually with a reply within 24 hours.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm text-center neon-btn-red">Start your enquiry &rarr;</Link>
              <Link href="/events" className="border border-daula-white/20 text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 text-center">See all events</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
