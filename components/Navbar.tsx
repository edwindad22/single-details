'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Leaf } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/book',      label: 'The Book' },
  { href: '/merch',     label: 'Merch & Resources' },
  { href: '/subscribe', label: 'Community' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 dark:bg-[#140A0E]/95 border-b border-blush/60 dark:border-[#4A1E30] shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-2 no-underline group">
          <div className="w-8 h-8 rounded-full bg-rose-gradient flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-serif text-xl font-semibold text-warm-brown dark:text-cream leading-none transition-colors duration-150 group-hover:text-rose-deep">
            Single Details
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link font-sans text-sm tracking-wide transition-colors duration-150 no-underline pb-0.5 ${
                  active
                    ? 'text-rose-deep font-bold nav-active'
                    : 'text-warm-muted dark:text-[#E8A0B0] hover:text-rose-deep dark:hover:text-rose'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/subscribe"
            className="bg-rose-deep text-white px-5 py-2 rounded-full font-sans text-sm font-bold tracking-wide transition-all duration-200 hover:bg-rose-darker hover:shadow-md hover:scale-105 no-underline inline-block"
          >
            Join Community
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="text-warm-muted dark:text-[#E8A0B0] hover:text-rose-deep transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block transition-transform duration-300 ${menuOpen ? 'rotate-90' : 'rotate-0'}`}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream/90 dark:bg-[#140A0E]/95 border-t border-blush/60 dark:border-[#4A1E30] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link, i) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                className={`font-sans text-base no-underline transition-all duration-200 pl-2 border-l-2 ${
                  active
                    ? 'text-rose-deep font-bold border-rose-deep'
                    : 'text-warm-muted dark:text-[#E8A0B0] hover:text-rose-deep border-transparent hover:border-rose/40'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/subscribe"
            onClick={() => setMenuOpen(false)}
            className="bg-rose-deep text-white px-5 py-2 rounded-full font-sans text-sm font-bold text-center no-underline mt-2 transition-all hover:bg-rose-darker"
          >
            Join Community
          </Link>
        </div>
      </div>
    </nav>
  )
}
