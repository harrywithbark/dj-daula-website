import { Link } from 'wouter'
import PageShell from '@/components/PageShell'
import ServicesList from '@/components/home/ServicesList'
import ScrollReveal from '@/components/ScrollReveal'

const CORE_SERVICES = [
  {
    title: 'DJ Performance',
    description:
      'Seamless, beat-matched sets that read the room and move every generation to the floor. South Asian, Bollywood, Bhangra, R&B, Hip-Hop, House and the classics — blended live and in the moment.',
    idealFor: 'Every event',
  },
  {
    title: 'Wedding Entertainment',
    description:
      'Full ceremony-to-afterparty coordination. Timed entrances, first dances and the complete energy arc planned to the minute alongside your planner and family.',
    idealFor: 'Weddings & receptions',
  },
  {
    title: 'Receptions',
    description:
      'A refined soundtrack for dinner and speeches that builds into an unstoppable late-night celebration — every moment landed on cue, nothing left to chance.',
    idealFor: 'Wedding receptions',
  },
  {
    title: 'Jaggo Nights',
    description:
      'High-energy traditional jaggo vibes — dhol, gharas, lighting and crowd-leading hype crafted for the loudest, most electric night of the week.',
    idealFor: 'Pre-wedding celebrations',
  },
  {
    title: 'Private Parties',
    description:
      'Birthdays, anniversaries and milestone celebrations curated around your guest list and the music you actually love — no generic playlists, ever.',
    idealFor: 'Private celebrations',
  },
  {
    title: 'Corporate Events',
    description:
      'Brand-conscious entertainment for galas, launches and award nights — professional, punctual and polished from load-in to the final song.',
    idealFor: 'Corporate functions',
  },
]

const ADD_ONS = [
  {
    title: 'MC Services',
    description:
      'A professional MC who keeps your reception on schedule, commands the room and coordinates every announcement, speech and transition with confidence.',
    idealFor: 'Receptions & ceremonies',
    badge: 'Add-on',
  },
  {
    title: 'Low Fog',
    description:
      'A cinematic dancefloor cloud for first dances and grand entrances — dramatic, photogenic and completely safe indoors.',
    idealFor: 'First dances & entrances',
    badge: 'Add-on',
  },
  {
    title: 'Sparklers',
    description:
      'Cold-spark fountains that frame your biggest moments in light without the heat, smoke or risk of open flame. Stunning on camera.',
    idealFor: 'Entrances & cake cuts',
    badge: 'Add-on',
  },
  {
    title: 'Photobooth',
    description:
      'A premium open-air booth with curated props, instant prints and a digital gallery your guests will keep coming back to all night.',
    idealFor: 'Keepsakes & guest fun',
    badge: 'Add-on',
  },
  {
    title: 'Dholi',
    description:
      'A live dhol player to drive baraats, entrances and jaggo nights with thunderous, authentic percussion that no speaker can replicate.',
    idealFor: 'Traditional moments',
    badge: 'Add-on',
  },
  {
    title: 'Bhangra Team',
    description:
      'A choreographed live performance crew that transforms your entrance or interval into an unforgettable showpiece your guests will talk about for years.',
    idealFor: 'Showstopper moments',
    badge: 'Add-on',
  },
  {
    title: 'Live Musicians',
    description:
      'Sitar, tabla, harmonium and more — live instruments woven into the soundtrack for a truly bespoke atmosphere that elevates every moment.',
    idealFor: 'Ceremonies & receptions',
    badge: 'Add-on',
  },
  {
    title: 'Dancefloor Enhancements',
    description:
      'LED dancefloors, intelligent lighting rigs and colour-matched uplighting tuned to your palette and venue for an atmosphere guests feel instantly.',
    idealFor: 'Atmosphere upgrades',
    badge: 'Add-on',
  },
  {
    title: 'Lighting & Visual Production',
    description:
      'Full-scale production lighting with projection, screens and immersive visual effects that transform any venue into a statement. One team, no third parties.',
    idealFor: 'Large events & productions',
    badge: 'Add-on',
  },
]

export default function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-mesh-dark py-16 md:py-24 border-b border-daula-gray-mid relative overflow-hidden">
        <div
          className="absolute -top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(206,31,31,0.07) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-4">
              Services
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-display-xl text-daula-white text-balance mb-5">
              One team.
              <br />
              <span className="text-daula-red">Every part of the night.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-daula-gray-light text-base md:text-lg max-w-2xl leading-relaxed">
              From the music that drives the floor to the spectacle that frames your biggest moments — build a package that fits your celebration exactly. Every service delivered and coordinated by Daula's team. No third-party headaches.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Entertainment */}
      <section className="section-light py-16 md:py-20 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
              Core entertainment
            </p>
            <h2 className="text-display-md text-balance mb-3" style={{ color: '#111' }}>
              The foundation of every event
            </h2>
            <p className="text-sm max-w-xl mb-10" style={{ color: '#555' }}>
              The headline services — the music, the coordination and the energy that carry your celebration from start to finish.
            </p>
          </ScrollReveal>
          <ServicesList items={CORE_SERVICES} columns={3} />
        </div>
      </section>

      {/* Premium Add-ons */}
      <section className="bg-mesh-dark py-16 md:py-20 border-b border-daula-gray-mid relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(206,31,31,0.06) 0%, transparent 65%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
              Premium add-ons
            </p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-daula-white mb-3">
              Upgrades that make the moment
            </h2>
            <p className="text-daula-gray-light text-sm max-w-xl mb-10">
              Layer in the spectacle. Each add-on is delivered and coordinated by our team — one booking, one point of contact.
            </p>
          </ScrollReveal>
          <ServicesList items={ADD_ONS} columns={3} />
        </div>
      </section>

      {/* Multi-DJ packages note */}
      <section className="bg-daula-gray py-12 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <div className="border border-daula-gray-mid bg-daula-black p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
              <div className="flex-1">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-daula-red mb-2">
                  Multi-day &amp; multi-DJ packages
                </p>
                <h3 className="text-xl md:text-2xl font-black text-daula-white mb-2">
                  Sangeet. Wedding. Reception. All covered.
                </h3>
                <p className="text-sm text-daula-gray-light leading-relaxed max-w-2xl">
                  Multi-day celebrations can be booked as a single package — two or three DJs across your Sangeet, Wedding and Reception, all coordinated through one point of contact. Every DJ is vetted and familiar with the full event plan so your energy stays consistent throughout.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-block bg-daula-red text-daula-white font-semibold tracking-wide px-7 py-3.5 text-sm hover:bg-daula-red/90 transition-colors duration-200 text-center"
                >
                  Ask about packages &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tailored packages / bespoke quote */}
      <section className="bg-daula-black py-16 md:py-20 border-b border-daula-gray-mid relative overflow-hidden">
        <div
          className="absolute -top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(206,31,31,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
                Tailored packages
              </p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-daula-white mb-4">
                Built around your event, not a price list.
              </h2>
              <p className="text-daula-gray-light text-sm leading-relaxed mb-8 max-w-xl">
                Every celebration is different — your venue, your guest count, your vision. Mix and match the DJ set with any add-ons that suit your night, and Daula will put together a transparent, itemised quote within 24 hours. No hidden costs, no generic packages.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="border border-daula-gray-mid bg-daula-gray p-6 max-w-2xl mb-8">
                <p className="text-sm text-daula-gray-light leading-relaxed">
                  <span className="text-daula-white font-semibold">Why no prices listed?</span>{' '}
                  Travel, duration, event type and timing all affect the final cost. A custom quote means you pay for what you actually need — nothing more, nothing less.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm text-center neon-btn-red"
                >
                  Request a quote &rarr;
                </Link>
                <Link
                  href="/packages"
                  className="border border-daula-white/20 text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 text-center"
                >
                  View event packages
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA strip */}
      <section className="bg-daula-gray py-14 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-daula-white mb-3">
              Ready to fill your dancefloor?
            </h2>
            <p className="text-daula-gray-light text-sm mb-8 max-w-lg">
              Tell us your date and we&apos;ll craft a tailored entertainment package — usually with a reply within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="text-daula-white font-semibold tracking-wide px-8 py-3.5 text-sm text-center neon-btn-red"
              >
                Start your enquiry &rarr;
              </Link>
              <Link
                href="/events"
                className="border border-daula-white/20 text-daula-white font-medium tracking-wide px-8 py-3.5 text-sm hover:border-daula-white/50 hover:bg-daula-white/5 transition-all duration-200 text-center"
              >
                See all events
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  )
}
