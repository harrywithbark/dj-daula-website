'use client'

import Link from 'next/link'
import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

const MIXES = [
  {
    title: 'Sangeet Set — Vol. 1',
    genre: 'Bhangra · Bollywood',
    description: 'Peak Bhangra and Bollywood — the set your cousins will ask for on repeat.',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
  },
  {
    title: 'Reception Set',
    genre: 'Hip-Hop · R&B · Open Format',
    description: 'First dance to last song — the room builds, then it pops off.',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
  },
  {
    title: 'NYE DIVERGENT',
    genre: 'UK Grime · House · Punjabi',
    description: 'Where Punjabi roots meet UK Grime and House — my signature sound.',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djdaula&color=%23CE1F1F&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false',
  },
]

function MusicCard({ mix }: { mix: typeof MIXES[number] }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="group bg-daula-gray border border-daula-gray-mid p-5 hover:border-daula-red/30 transition-colors duration-300">
      <p className="text-[10px] font-semibold tracking-widest uppercase text-daula-red mb-1">
        {mix.genre}
      </p>
      <h3 className="text-base font-black text-daula-white mb-1">{mix.title}</h3>
      <p className="text-xs text-daula-gray-light mb-4">{mix.description}</p>

      {/* Custom branded player wrapper */}
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={() => setPlaying(!playing)}
            className="w-8 h-8 rounded-full bg-daula-red flex items-center justify-center hover:bg-daula-red/80 transition-colors duration-200"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-daula-white">
              {playing ? (
                <>
                  <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
                  <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
                </>
              ) : (
                <polygon points="5,3 19,12 5,21" fill="currentColor" />
              )}
            </svg>
          </button>
          <div className="flex-1 flex items-center gap-1">
            <span className="text-[10px] text-daula-gray-light font-mono">00:00</span>
            <div className="flex-1 h-1 bg-daula-gray-mid rounded-full overflow-hidden">
              <div className="h-full w-0 bg-daula-red rounded-full" />
            </div>
            <span className="text-[10px] text-daula-gray-light font-mono">--:--</span>
          </div>
        </div>
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
    </div>
  )
}

export default function MusicPreview() {
  return (
    <section
      id="music"
      className="bg-daula-black py-20 md:py-28 border-b border-daula-gray-mid"
      aria-labelledby="music-heading"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
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
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MIXES.map((mix, i) => (
            <ScrollReveal key={mix.title} delay={0.1 + i * 0.12}>
              <MusicCard mix={mix} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
