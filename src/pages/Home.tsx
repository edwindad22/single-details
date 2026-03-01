import { Link } from 'react-router-dom'
import { BookOpen, ShoppingBag, Users, Leaf, Heart, Star } from 'lucide-react'
import EmailCapture from '../components/EmailCapture'
import { useInView } from '../hooks/useInView'

// ── Decorative SVG petal / leaf for hero background ─────────────────────────
function PetalDecor({
  className,
  size = 120,
  color = '#C97080',
  opacity = 0.12,
}: {
  className?: string
  size?: number
  color?: string
  opacity?: number
}) {
  return (
    <svg
      className={`absolute pointer-events-none select-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="60" cy="60" rx="45" ry="25" fill={color} fillOpacity={opacity} transform="rotate(-30 60 60)" />
      <ellipse cx="60" cy="60" rx="45" ry="25" fill={color} fillOpacity={opacity * 0.6} transform="rotate(30 60 60)" />
      <ellipse cx="60" cy="60" rx="20" ry="10" fill={color} fillOpacity={opacity * 0.4} />
    </svg>
  )
}

// ── Free gift items ──────────────────────────────────────────────────────────
const gifts = [
  {
    icon: <BookOpen className="w-6 h-6 text-rose-deep" />,
    title: '5 Journal Prompts for Wholeness',
    desc: 'Guided questions to help you reflect on your identity, healing, and purpose.',
  },
  {
    icon: <Star className="w-6 h-6 text-sage-dark" />,
    title: '7-Day Mind Renewal Scripture Guide',
    desc: 'Seven days of Scripture to renew your mind and strengthen your spirit.',
  },
  {
    icon: <Heart className="w-6 h-6 text-rose" />,
    title: '"Becoming Whole Before Love" Mini Devotional',
    desc: 'A short devotional journey toward wholeness, identity, and surrender.',
  },
]

const pillars = [
  {
    icon: <Heart className="w-8 h-8 text-rose-deep" />,
    title: 'Heal',
    desc: 'Receive healing from heartbreak, rejection, and the weight of waiting.',
    color: 'bg-blush-light border-blush',
  },
  {
    icon: <Leaf className="w-8 h-8 text-sage-dark" />,
    title: 'Grow',
    desc: 'Deepen your intimacy with God and discover who He created you to be.',
    color: 'bg-sage/10 border-sage/30',
  },
  {
    icon: <Star className="w-8 h-8 text-rose" />,
    title: 'Embrace',
    desc: 'Step into singleness as a gift — a divinely appointed season of purpose.',
    color: 'bg-blush-light border-blush',
  },
]

export default function Home() {
  const { ref: aboutRef,   inView: aboutInView   } = useInView(0.12)
  const { ref: pillarsRef, inView: pillarsInView } = useInView(0.12)
  const { ref: giftRef,    inView: giftInView    } = useInView(0.1)
  const { ref: taglineRef, inView: taglineInView } = useInView(0.5)

  return (
    <main className="flex-1">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-hero-gradient min-h-[calc(100vh-72px)] flex items-center">
        {/* Decorative petals */}
        <PetalDecor className="top-8 -left-8"   size={180} opacity={0.1} />
        <PetalDecor className="-top-4 right-16" size={140} color="#7A9E7E" opacity={0.1} />
        <PetalDecor className="bottom-10 right-4" size={200} opacity={0.08} />
        <PetalDecor className="bottom-20 left-20" size={100} color="#7A9E7E" opacity={0.08} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Pre-tagline — first to appear */}
          <div className="animate-fade-in-up stagger-1 inline-flex items-center gap-2 bg-blush/40 border border-blush rounded-full px-4 py-1.5 mb-8">
            <Leaf className="w-4 h-4 text-sage-dark" />
            <span className="font-sans text-xs font-bold text-warm-muted tracking-widest uppercase">
              A Faith Journey for Single Women
            </span>
          </div>

          {/* Main tagline — line by line stagger */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-brown leading-tight mb-6">
            <span className="block animate-fade-in-up stagger-2">
              Singleness is not punishment.
            </span>
            <em className="block text-rose-deep animate-fade-in-up stagger-3">
              It's preparation.
            </em>
          </h1>

          {/* Welcome message */}
          <p className="animate-fade-in-up stagger-4 font-sans text-warm-muted text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Welcome to Single Details — a community where your season of singleness is seen,
            honored, and celebrated as the sacred space God designed it to be.
            You are being <strong className="text-warm-brown font-bold">prepared</strong>,{' '}
            <strong className="text-warm-brown font-bold">positioned</strong>, and{' '}
            <strong className="text-warm-brown font-bold">lovingly shaped</strong> for purpose.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up stagger-5 flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              to="/book"
              className="flex items-center gap-2 bg-rose-deep text-white px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-darker hover:shadow-lg hover:scale-105 no-underline text-base"
            >
              <BookOpen className="w-5 h-5" />
              Get the Book
            </Link>
            <Link
              to="/merch"
              className="flex items-center gap-2 border-2 border-rose-deep text-rose-deep px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-deep hover:text-white hover:scale-105 no-underline text-base"
            >
              <ShoppingBag className="w-5 h-5" />
              Browse Merch
            </Link>
            <Link
              to="/subscribe"
              className="flex items-center gap-2 border-2 border-sage text-sage-dark px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-sage hover:text-white hover:scale-105 no-underline text-base"
            >
              <Users className="w-5 h-5" />
              Join the Community
            </Link>
          </div>

          {/* Sub-message */}
          <p className="animate-fade-in-up stagger-6 font-sans text-sm text-warm-light italic">
            God is in the Single Details.
          </p>
        </div>
      </section>

      {/* ── ABOUT / STORY ────────────────────────────────────────────────── */}
      <section className="bg-cream py-20 px-4 sm:px-6" id="story">
        <div className="max-w-5xl mx-auto">

          {/* Section header — slides in when About enters view */}
          <div ref={aboutRef} className={`text-center mb-12 transition-none ${aboutInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="font-sans text-xs font-bold text-rose tracking-widest uppercase">
              The Story Behind Single Details
            </span>
            <h2 className="font-serif text-4xl text-warm-brown mt-3 mb-4">
              Why This Book Was Written
            </h2>
            <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'linear-gradient(135deg, #A8405A, #C97080)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Author photo — slides in from left */}
            <div className={`relative ${aboutInView ? 'animate-slide-from-left stagger-2' : 'opacity-0'}`}>
              <div className="rounded-3xl overflow-hidden bg-blush-light aspect-[4/5] flex items-center justify-center border border-blush">
                <div className="text-center px-8">
                  <div className="w-20 h-20 rounded-full bg-rose/20 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-10 h-10 text-rose" />
                  </div>
                  <p className="font-sans text-sm text-warm-muted italic">Author photo coming soon</p>
                  <p className="font-serif text-lg text-rose-deep mt-2">Jesula</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-sage/20 -z-10" />
            </div>

            {/* Story text — slides in from right */}
            <div className={`flex flex-col gap-6 ${aboutInView ? 'animate-slide-from-right stagger-3' : 'opacity-0'}`}>
              <p className="font-sans text-warm-muted leading-relaxed">
                <em className="font-serif text-warm-brown text-lg">Single Details</em>{' '}
                was born out of a deeply personal season of heartbreak, healing, and
                rediscovering my identity in Christ. In 2013, I experienced a heartbreak I didn't
                foresee. I found myself wrestling with rejection, disappointment, and questions
                about my worth.
              </p>
              <p className="font-sans text-warm-muted leading-relaxed">
                However, what began as a painful season became a sacred turning point. In that
                vulnerable place, kneeling before Him with my alabaster box — broken and
                surrendered — God met me, not with condemnation, but with compassion and
                restoration.
              </p>
              <p className="font-sans text-warm-muted leading-relaxed">
                I came to understand that healing is not automatic but an intentional process.
                Forgiveness, surrender, and inner work are not optional; they are foundational
                to wholeness and a healthy relationship with God and others.
              </p>
              <blockquote className="scripture">
                <p className="mb-1">
                  "Now to Him who is able to do exceedingly abundantly above all that we ask or
                  think, according to the power that works in us…"
                </p>
                <footer className="font-sans text-sm text-rose-deep font-bold not-italic">
                  — Ephesians 3:20
                </footer>
              </blockquote>
              <p className="font-sans text-warm-muted leading-relaxed">
                <em>Single Details</em> was written to help women recognize that God is present
                and purposeful in the details of their daily lives. It is an invitation to heal,
                to grow, and to embrace singleness not as punishment, but as preparation.
              </p>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-rose-deep text-white px-6 py-3 rounded-full font-sans font-bold tracking-wide transition-all hover:bg-rose-darker hover:shadow-lg hover:scale-105 no-underline w-fit"
              >
                <BookOpen className="w-5 h-5" />
                Learn More About the Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS ────────────────────────────────────────────────── */}
      <section className="bg-cream-medium py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`rounded-2xl border p-8 text-center flex flex-col items-center gap-4 ${pillar.color} ${
                  pillarsInView
                    ? `animate-fade-in-up stagger-${i + 1}`
                    : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-2xl text-warm-brown">{pillar.title}</h3>
                <p className="font-sans text-warm-muted leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE GIFT / EMAIL CAPTURE ────────────────────────────────────── */}
      <section
        className="bg-rose-deeper relative overflow-hidden py-20 px-4 sm:px-6"
        style={{ background: 'linear-gradient(135deg, #3D1520 0%, #A8405A 60%, #C97080 100%)' }}
        id="free-gift"
      >
        <PetalDecor className="top-0 -right-8 opacity-10"  size={200} color="#FDF8F3" opacity={0.06} />
        <PetalDecor className="-bottom-8 -left-8 opacity-10" size={180} color="#FDF8F3" opacity={0.06} />

        <div ref={giftRef} className="relative z-10 max-w-3xl mx-auto text-center">
          <span className={`font-sans text-xs font-bold text-blush tracking-widest uppercase ${giftInView ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
            Your Free Gift Awaits
          </span>
          <h2 className={`font-serif text-4xl text-cream mt-3 mb-4 ${giftInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            Join the Single Details Community
          </h2>
          <p className={`font-sans text-blush-medium leading-relaxed mb-10 max-w-xl mx-auto ${giftInView ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
            Sign up for free and receive a handpicked gift to encourage your heart — plus
            book updates, event invites, and community love delivered to your inbox.
          </p>

          {/* Gift cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {gifts.map((gift, i) => (
              <div
                key={gift.title}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-left ${
                  giftInView ? `animate-fade-in-up stagger-${i + 3}` : 'opacity-0'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  {gift.icon}
                </div>
                <h4 className="font-serif text-base text-cream mb-1">{gift.title}</h4>
                <p className="font-sans text-xs text-blush-medium leading-relaxed">{gift.desc}</p>
              </div>
            ))}
          </div>

          {/* Email form */}
          <div className={`bg-white rounded-3xl p-8 shadow-xl ${giftInView ? 'animate-fade-in-up stagger-6' : 'opacity-0'}`}>
            <EmailCapture title="" subtitle="" compact />
          </div>
        </div>
      </section>

      {/* ── BOTTOM TAGLINE ───────────────────────────────────────────────── */}
      <section className="bg-cream py-12 px-4 text-center">
        <div ref={taglineRef}>
          <p className={`font-serif text-xl italic text-warm-muted ${taglineInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            "God is in the Single Details."
          </p>
          <div className={`w-8 h-0.5 bg-rose rounded mx-auto mt-4 ${taglineInView ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`} />
        </div>
      </section>

    </main>
  )
}
