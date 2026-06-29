import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'DJ Daula — Surrey\'s South Asian Wedding DJ',
  description:
    'DJ Daula (Chetan) — Surrey, BC South Asian wedding DJ. 15 years, 500+ events. Bhangra, Bollywood, UK Grime, House. Book your Sangeet, Reception, and full wedding weekend.',
  generator: 'v0.app',
  keywords: [
    'DJ Daula',
    'South Asian wedding DJ',
    'Surrey BC DJ',
    'Punjabi wedding DJ',
    'Bhangra DJ',
    'Bollywood DJ',
    'wedding DJ Vancouver',
    'Sangeet DJ',
  ],
  openGraph: {
    title: 'DJ Daula — Surrey\'s South Asian Wedding DJ',
    description: '15 years. 500+ events. One DJ. Your night. No substitutes.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0F0F0F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-daula-black`}>
      <body className="font-sans antialiased bg-daula-black text-daula-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
