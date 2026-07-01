import { Link } from 'wouter'
import PageShell from '@/components/PageShell'

const MIX_SECTIONS = [
  {
    id: 'sangeet',
    title: 'Sangeet Sets',
    subtitle: 'Deep Bhangra, Bollywood peak-hour, live mic transitions.',
    mixes: [
      {
        title: 'Sangeet Set — Vol. 1',
        description: 'The floor-filler that defines the weekend.',
        timestamps: null,
        embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
      },
      {
        title: 'Sangeet Set — Vol. 2',
        description: 'A second set for the couples who want options before they book.',
        timestamps: null,
        embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
      },
    ],
  },
  {
    id: 'reception',
    title: 'Reception Sets',
    subtitle: 'Open-format. Hip-Hop, Top 40, R&B — for every guest at every table.',
    mixes: [
      {
        title: 'Reception Set',
        description: 'From first dance through peak floor — Hip-Hop, R&B, Bollywood in one.',
        timestamps: null,
        embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
      },
      {
        title: 'Reception Vol. 2',
        description: 'A late-night open-format set — when the older guests have gone home.',
        timestamps: null,
        embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
      },
    ],
  },
  {
    id: 'crossover',
    title: 'Crossover · Club · NYE',
    subtitle: 'His signature UK Grime × Punjabi × House sound.',
    mixes: [
      {
        title: 'NYE DIVERGENT',
        description: 'UK Grime × House × Punjabi — his signature crossover sound, seamless across cultures.',
        timestamps: null,
        embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
      },
      {
        title: 'Crossover Vol. 2',
        description: 'When the wedding crowd becomes the club crowd.',
        timestamps: null,
        embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
      },
    ],
  },
]

export default function MusicPage() {
  return (
    <PageShell>
      <section className="bg-mesh-dark py-16 md:py-20 border-b border-daula-gray-mid">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
            Music &amp; Mixes
          </p>
          <h1 className="text-display-xl text-daula-white text-balance">
            This is what your night sounds like.
          </h1>
        </div>
      </section>

      {MIX_SECTIONS.map((section, si) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-16 md:py-20 border-b border-daula-gray-mid ${si % 2 === 0 ? 'bg-daula-black' : 'bg-daula-gray'}`}
          aria-labelledby={`${section.id}-heading`}
        >
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="mb-10">
              <h2
                id={`${section.id}-heading`}
                className="text-2xl md:text-3xl font-black text-daula-white tracking-tight mb-2"
              >
                {section.title}
              </h2>
              <p className="text-daula-gray-light text-sm">{section.subtitle}</p>
            </div>

            <div className="flex flex-col gap-6">
              {section.mixes.map((mix) => (
                <div
                  key={mix.title}
                  className="border border-daula-gray-mid bg-daula-black p-6 md:p-8"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-daula-white mb-1">{mix.title}</h3>
                    <p className="text-sm text-daula-gray-light">{mix.description}</p>
                    {mix.timestamps && (
                      <p className="text-xs text-daula-gray-light/70 mt-2 font-mono">
                        {mix.timestamps}
                      </p>
                    )}
                  </div>
                  <iframe
                    title={mix.title}
                    src={mix.embedUrl}
                    width="100%"
                    height="120"
                    allow="autoplay"
                    loading="lazy"
                    className="border-0 w-full"
                    style={{ colorScheme: 'normal' }}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="text-sm font-semibold text-daula-red hover:text-daula-white transition-colors duration-200"
              >
                Like this? Book your date &rarr;
              </Link>
            </div>
          </div>
        </section>
      ))}
    </PageShell>
  )
}
