import { Link } from 'wouter'

const MIXES = [
  {
    title: 'Sangeet Set — Vol. 1',
    genre: 'Bhangra · Bollywood',
    description: 'The floor-filler that defines the weekend.',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
  },
  {
    title: 'Reception Set',
    genre: 'Hip-Hop · R&B · Open Format',
    description: 'From first dance through peak floor.',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
  },
  {
    title: 'NYE DIVERGENT',
    genre: 'UK Grime · House · Punjabi',
    description: 'His signature crossover sound.',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-daula-red mb-3">
              Music
            </p>
            <h2
              id="music-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-daula-white text-balance"
            >
              This is what your night
              <br className="hidden md:block" /> sounds like.
            </h2>
          </div>
          <Link
            href="/music"
            className="text-sm text-daula-gray-light hover:text-daula-white transition-colors duration-200 flex-shrink-0"
          >
            See all mixes &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MIXES.map((mix) => (
            <div
              key={mix.title}
              className="bg-daula-gray border border-daula-gray-mid p-5"
            >
              <p className="text-[10px] font-semibold tracking-widest uppercase text-daula-red mb-1">
                {mix.genre}
              </p>
              <h3 className="text-base font-black text-daula-white mb-1">{mix.title}</h3>
              <p className="text-xs text-daula-gray-light mb-4">{mix.description}</p>
              <iframe
                title={mix.title}
                src={mix.embedUrl}
                width="100%"
                height="80"
                allow="autoplay"
                loading="lazy"
                className="border-0 w-full"
                style={{ colorScheme: 'normal' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
