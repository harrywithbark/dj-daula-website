import Link from 'next/link'

// TODO: replace these SoundCloud embed URLs with Chetan's real mix URLs
// Format: https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/[TRACK_ID]&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false
const MIXES = [
  {
    id: 'sangeet',
    title: 'Sangeet Special',
    genre: 'Bhangra + Bollywood',
    description: 'This is what your guests will hear when the floor is packed.',
    // TODO: replace with real Sangeet mix SoundCloud track ID
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
  },
  {
    id: 'nye',
    title: 'NYE DIVERGENT',
    genre: 'UK Grime × House × Punjabi',
    description: "His signature crossover sound — seamless across cultures.",
    // TODO: replace with real NYE DIVERGENT SoundCloud track ID
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
  },
  {
    id: 'reception',
    title: 'Reception Set',
    genre: 'Hip-Hop × R&B × Top 40',
    description: 'For the guests who came for everything.',
    // TODO: replace with real Reception mix SoundCloud track ID
    embedUrl:
      'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
  },
]

export default function MusicPreview() {
  return (
    <section
      id="music"
      className="bg-daula-black py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="music-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
            Listen First
          </p>
          <h2
            id="music-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-daula-white text-balance mb-4"
          >
            Before you book — listen.
          </h2>
          <p className="text-daula-gray-light text-base">
            Every mix is a sample of what your night could sound like.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {MIXES.map((mix) => (
            <div
              key={mix.id}
              className="border border-daula-gray-mid bg-daula-gray p-6 md:p-8"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h3 className="text-lg font-bold text-daula-white">{mix.title}</h3>
                  <span className="text-xs font-medium tracking-wide text-daula-red bg-daula-red/10 px-3 py-1 flex-shrink-0">
                    {mix.genre}
                  </span>
                </div>
                <p className="text-sm text-daula-gray-light">{mix.description}</p>
              </div>

              {/* SoundCloud embed — lazy loaded */}
              <div className="w-full overflow-hidden">
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
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="/contact"
            className="bg-daula-red text-daula-white text-sm font-semibold tracking-wide px-6 py-3 hover:bg-daula-red/90 transition-colors duration-200"
          >
            Like what you hear? Check your date &rarr;
          </Link>
          <Link
            href="/music"
            className="text-sm text-daula-gray-light hover:text-daula-white transition-colors duration-200"
          >
            See full mix library &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
