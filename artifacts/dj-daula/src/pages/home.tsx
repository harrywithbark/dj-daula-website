import Nav from '@/components/home/Nav'
import Hero from '@/components/home/Hero'
import CredibilityBar from '@/components/home/CredibilityBar'
import Positioning from '@/components/home/Positioning'
import EventsPreview from '@/components/home/EventsPreview'
import MarqueeTicker from '@/components/MarqueeTicker'
import MusicPreview from '@/components/home/MusicPreview'
import BeatVisualizer from '@/components/BeatVisualizer'
import GalleryPreview from '@/components/home/GalleryPreview'
import Testimonials from '@/components/home/Testimonials'
import AboutPreview from '@/components/home/AboutPreview'
import BookCta from '@/components/home/BookCta'
import Footer from '@/components/home/Footer'

const TICKER_ITEMS = [
  'Bhangra',
  'Bollywood',
  'UK Grime',
  'House',
  'Hip-Hop',
  'Punjabi',
  'Surrey, BC',
  '500+ Events',
  '15 Years',
  'Sangeet',
  'Mehndi',
  'Reception',
  'Open Format',
  'No Substitutes',
  'International',
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Beat strip after hero — like a club LED wall */}
        <BeatVisualizer barCount={96} height={28} className="opacity-60" />

        <CredibilityBar />

        {/* Scrolling marquee between sections */}
        <MarqueeTicker items={TICKER_ITEMS} speed={1.2} />

        <Positioning />

        <EventsPreview />

        {/* Second beat strip — between events and music */}
        <BeatVisualizer barCount={96} height={24} className="opacity-50" />

        <MusicPreview />

        {/* Third marquee — music to gallery */}
        <MarqueeTicker items={[...TICKER_ITEMS].reverse()} speed={0.9} />

        <GalleryPreview />
        <Testimonials />
        <AboutPreview />
        <BookCta />
      </main>
      <Footer />
    </>
  )
}
