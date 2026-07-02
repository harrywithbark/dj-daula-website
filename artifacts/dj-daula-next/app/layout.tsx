import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Nav from '@/components/home/Nav'
import Footer from '@/components/home/Footer'
import Preloader from '@/components/Preloader'
import MobileStickyCta from '@/components/MobileStickyCta'
import Providers from '@/components/Providers'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "DJ Daula — Surrey's South Asian Wedding DJ",
  description:
    '15 years. 500+ events. Bhangra to Bollywood and everything between. Based in Surrey, BC — available worldwide.',
  openGraph: {
    title: "DJ Daula — Surrey's South Asian Wedding DJ",
    description: '15 years. 500+ events. No substitutes, ever.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <body>
        <Providers>
          <Preloader />
          <Nav />
          {children}
          <Footer />
          <MobileStickyCta />
        </Providers>
      </body>
    </html>
  )
}
