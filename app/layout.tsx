import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SiteNotificationServer from '@/components/SiteNotificationServer'
import { ThemeProvider } from '@/contexts/ThemeContext'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Single Details',
    default: 'Single Details — God Is in the Single Details',
  },
  description:
    'A sacred space for single women to heal, grow, and prepare — mind, body, and soul — while walking intimately with God.',
  openGraph: {
    siteName: 'Single Details',
    type: 'website',
  },
}

const THEME_INIT_SCRIPT = `
try {
  var t = localStorage.getItem('sd-theme') || 'light';
  if (t === 'dark') document.documentElement.classList.add('dark');
} catch(e) {}
`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Runs before React hydrates — prevents dark mode flash */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body
        className="min-h-screen flex flex-col dark:bg-[#140A0E] text-warm-brown dark:text-cream font-sans antialiased relative transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* Watercolor texture — full page, behind everything */}
          <div className="fixed inset-0 -z-10 pointer-events-none dark:hidden" aria-hidden="true">
            <Image
              src="/bg-sample.jpg"
              alt=""
              fill
              priority
              quality={95}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          {/*
            Corner flower overlays.
            bg-sample.jpg natural size: 641 × 929px
            — top-right flower cluster:  x≈370–641, y≈185–375
            — bottom-left flower cluster: x≈0–260,  y≈665–929
            CSS background-position crops to exactly those regions.
            mix-blend-mode: multiply dissolves the cream bg so only flower
            colours show — no rectangular box visible.
          */}

          {/*
            Corner flower overlays.
            bg-sample.jpg natural size: 641 × 929px
            — top-right cluster:  x≈370–641, y≈200–380
            — bottom-left cluster: x≈0–270,  y≈670–929
            mask-image fades the div edges to transparent so no rectangular
            box appears on any background colour.
          */}

          {/* Top-right flower */}
          <div
            className="flower-overlay fixed right-0 z-[55] pointer-events-none dark:hidden"
            style={{
              top: 60,
              width: 320,
              height: 260,
              backgroundImage: "url('/bg-sample.jpg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '641px 929px',
              backgroundPosition: '-321px -200px',
              WebkitMaskImage: 'radial-gradient(ellipse 200px 180px at 75% 45%, black 35%, transparent 72%)',
              maskImage: 'radial-gradient(ellipse 200px 180px at 75% 45%, black 35%, transparent 72%)',
            }}
            aria-hidden="true"
          />

          {/* Bottom-left flower */}
          <div
            className="flower-overlay fixed left-0 bottom-0 z-[55] pointer-events-none dark:hidden"
            style={{
              width: 300,
              height: 280,
              backgroundImage: "url('/bg-sample.jpg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: '641px 929px',
              backgroundPosition: '0px -649px',
              WebkitMaskImage: 'radial-gradient(ellipse 200px 190px at 28% 72%, black 35%, transparent 72%)',
              maskImage: 'radial-gradient(ellipse 200px 190px at 28% 72%, black 35%, transparent 72%)',
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <SiteNotificationServer />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
