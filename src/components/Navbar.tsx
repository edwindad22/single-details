import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Leaf } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/book', label: 'The Book' },
  { to: '/merch', label: 'Merch & Resources' },
  { to: '/subscribe', label: 'Community' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-blush shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Brand — icon scales on hover */}
        <Link to="/" className="flex items-center gap-2 no-underline group">
          <div className="w-8 h-8 rounded-full bg-rose-gradient flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <Leaf className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-serif text-xl font-semibold text-warm-brown leading-none transition-colors duration-150 group-hover:text-rose-deep">
            Single Details
          </span>
        </Link>

        {/* Desktop nav — links have animated underline */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link font-sans text-sm tracking-wide transition-colors duration-150 no-underline pb-0.5 ${
                  active ? 'text-rose-deep font-bold nav-active' : 'text-warm-muted hover:text-rose-deep'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/subscribe"
            className="bg-rose-deep text-white px-5 py-2 rounded-full font-sans text-sm font-bold tracking-wide transition-all duration-200 hover:bg-rose-darker hover:shadow-md hover:scale-105 no-underline inline-block"
          >
            Join Community
          </Link>
        </div>

        {/* Mobile menu button — icon swaps with rotation */}
        <button
          className="md:hidden text-warm-muted hover:text-rose-deep transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block transition-transform duration-300 ${menuOpen ? 'rotate-90' : 'rotate-0'}`}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </span>
        </button>
      </div>

      {/* Mobile menu — height-animated open/close, no flash */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream border-t border-blush px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link, i) => {
            const active = location.pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
                className={`font-sans text-base no-underline transition-all duration-200 pl-2 border-l-2 ${
                  active
                    ? 'text-rose-deep font-bold border-rose-deep'
                    : 'text-warm-muted hover:text-rose-deep border-transparent hover:border-rose/40'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            to="/subscribe"
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
