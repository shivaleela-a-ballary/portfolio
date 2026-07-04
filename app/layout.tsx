import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Shivaleela Ballary | AI Engineer & Software Developer',
  description: 'Award-winning portfolio of Shivaleela Ballary - AI Engineer and Software Developer. Specializing in Machine Learning, Computer Vision, and LLMs.',
  generator: 'v0.app',
  openGraph: {
    title: 'Shivaleela Ballary | AI Engineer & Software Developer',
    description: 'Building intelligent software that solves real-world problems.',
    url: 'https://shivaleela.dev',
    siteName: 'Shivaleela Ballary',
    images: [
      {
        url: 'https://shivaleela.dev/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth bg-background ${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="antialiased bg-background text-foreground font-inter">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
