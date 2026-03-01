import { Link } from 'react-router-dom'
import { Heart, Instagram, Facebook, Mail, Leaf } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-warm-brown text-cream mt-auto">
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand column */}
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

        {/* Navigation column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-lg text-blush font-semibold mb-1">Explore</h4>
          {[
            { to: '/', label: 'Home' },
            { to: '/book', label: 'The Book' },
            { to: '/merch', label: 'Merch & Resources' },
            { to: '/subscribe', label: 'Join Community' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-sans text-sm text-cream/70 hover:text-blush transition-colors no-underline"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Connect column */}
        <div className="flex flex-col gap-3">
          <h4 className="font-serif text-lg text-blush font-semibold mb-1">Connect</h4>
          <p className="font-sans text-sm text-cream/70 leading-relaxed">
            For speaking engagements, collaborations, or just to say hello — reach out.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-blush/40 flex items-center justify-center text-cream/70 hover:text-blush hover:border-blush transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-blush/40 flex items-center justify-center text-cream/70 hover:text-blush hover:border-blush transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
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

      {/* Bottom bar */}
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
