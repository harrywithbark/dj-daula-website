import Hero from '@/components/home/Hero'
import CredibilityBar from '@/components/home/CredibilityBar'
import Positioning from '@/components/home/Positioning'
import EventsPreview from '@/components/home/EventsPreview'
import MarqueeTicker from '@/components/MarqueeTicker'
import MusicPreview from '@/components/home/MusicPreview'
import GalleryPreview from '@/components/home/GalleryPreview'
import Testimonials from '@/components/home/Testimonials'
import AboutPreview from '@/components/home/AboutPreview'
import BookCta from '@/components/home/BookCta'

const TICKER_ITEMS = [
  'Bhangra', 'Bollywood', 'UK Grime', 'House', 'Hip-Hop', 'Punjabi',
  'Surrey, BC', '500+ Events', '15 Years', 'Sangeet', 'Mehndi',
  'Reception', 'Open Format', 'No Substitutes', 'International',
]

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CredibilityBar />
      <MarqueeTicker items={TICKER_ITEMS} speed={1.2} />
      <Positioning />
      <EventsPreview />
      <MusicPreview />
      <MarqueeTicker items={[...TICKER_ITEMS].reverse()} speed={0.9} />
      <GalleryPreview />
      <Testimonials />
      <AboutPreview />
      <BookCta />
    </main>
  )
}
