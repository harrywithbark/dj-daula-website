import Nav from '@/components/home/Nav'
import Hero from '@/components/home/Hero'
import CredibilityBar from '@/components/home/CredibilityBar'
import Positioning from '@/components/home/Positioning'
import EventsPreview from '@/components/home/EventsPreview'
import MusicPreview from '@/components/home/MusicPreview'
import GalleryPreview from '@/components/home/GalleryPreview'
import Testimonials from '@/components/home/Testimonials'
import AboutPreview from '@/components/home/AboutPreview'
import BookCta from '@/components/home/BookCta'
import Footer from '@/components/home/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityBar />
        <Positioning />
        <EventsPreview />
        <MusicPreview />
        <GalleryPreview />
        <Testimonials />
        <AboutPreview />
        <BookCta />
      </main>
      <Footer />
    </>
  )
}
