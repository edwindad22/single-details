import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SiteNotification from '@/components/SiteNotification'
import FloralBackground from '@/components/FloralBackground'
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
  var t = localStorage.getItem('sd-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
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
      <body
        className="min-h-screen flex flex-col bg-cream dark:bg-[#140A0E] text-warm-brown dark:text-cream font-sans antialiased relative transition-colors duration-300"
        suppressHydrationWarning
      >
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <ThemeProvider>
          <FloralBackground />
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <SiteNotification />
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
