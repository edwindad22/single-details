import Link from 'next/link'
import { Heart, Mail, Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-brown text-cream mt-auto relative z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-rose flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-serif text-xl font-semibold text-cream">Single Details</span>
          </div>
          <p className="font-sans text-sm text-blush leading-relaxed">
            Divine Roots &amp; Details
          </p>
          <p className="font-sans text-sm text-blush-medium leading-relaxed italic">
            "God is in the Single Details of your life."
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-lg text-blush font-semibold mb-1">Explore</h4>
          {[
            { href: '/',         label: 'Home' },
            { href: '/book',     label: 'The Book' },
            { href: '/merch',    label: 'Merch & Resources' },
            { href: '/subscribe', label: 'Join Community' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-cream/70 hover:text-blush transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Connect */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-lg text-blush font-semibold mb-1">Connect</h4>
          <p className="font-sans text-sm text-cream/70 leading-relaxed">
            For speaking engagements, collaborations, or just to say hello — reach out.
          </p>
          <div className="flex gap-4 mt-2">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-blush/40 flex items-center justify-center text-cream/70 hover:text-blush hover:border-blush transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-blush/40 flex items-center justify-center text-cream/70 hover:text-blush hover:border-blush transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href="mailto:hello@singledetails.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full border border-blush/40 flex items-center justify-center text-cream/70 hover:text-blush hover:border-blush transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-sans text-xs text-cream/40">
          © {new Date().getFullYear()} Single Details · Divine Roots &amp; Details. All rights reserved.
        </p>
        <p className="font-sans text-xs text-cream/40 flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-rose fill-rose" /> &amp; faith
        </p>
      </div>
    </footer>
  )
}
