import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, ShoppingBag, Users, Leaf, Heart, Star } from 'lucide-react'
import EmailCapture from '@/components/EmailCapture'
import HomeAnimated from '@/components/HomeAnimated'

export const metadata: Metadata = {
  title: 'Single Details — God Is in the Single Details',
}

const gifts = [
  {
    icon: 'book' as const,
    title: '5 Journal Prompts for Wholeness',
    desc: 'Guided questions to help you reflect on your identity, healing, and purpose.',
  },
  {
    icon: 'star' as const,
    title: '7-Day Mind Renewal Scripture Guide',
    desc: 'Seven days of Scripture to renew your mind and strengthen your spirit.',
  },
  {
    icon: 'heart' as const,
    title: '"Becoming Whole Before Love" Mini Devotional',
    desc: 'A short devotional journey toward wholeness, identity, and surrender.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden grad-hero min-h-[calc(100vh-72px)] flex items-center">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="animate-fade-in-up stagger-1 inline-flex items-center gap-2 bg-blush/40 dark:bg-blush/10 border border-blush dark:border-blush/30 rounded-full px-4 py-1.5 mb-8">
            <Leaf className="w-4 h-4 text-sage-dark" />
            <span className="font-sans text-xs font-bold text-warm-muted dark:text-[#C09AA8] tracking-widest uppercase">
              For Single Women
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-warm-brown dark:text-cream leading-tight mb-6">
            <span className="block animate-fade-in-up stagger-2">
              Singleness is not punishment.
            </span>
            <em className="block text-rose-deep animate-fade-in-up stagger-3">
              It&apos;s preparation.
            </em>
          </h1>

          <p className="animate-fade-in-up stagger-4 font-sans text-warm-muted dark:text-[#C09AA8] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Welcome to Single Details — a community where your season of singleness is seen,
            honored, and valued for what it truly is.
            You are being <strong className="text-warm-brown dark:text-cream font-bold">prepared</strong>,{' '}
            <strong className="text-warm-brown dark:text-cream font-bold">called</strong>, and{' '}
            <strong className="text-warm-brown dark:text-cream font-bold">loved</strong> for more than you know.
          </p>

          <div className="animate-fade-in-up stagger-5 flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              href="/book"
              className="flex items-center gap-2 bg-rose-deep text-white px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-darker hover:shadow-lg hover:scale-105 no-underline text-base"
            >
              <BookOpen className="w-5 h-5" />
              Get the Book
            </Link>
            <Link
              href="/merch"
              className="flex items-center gap-2 border-2 border-rose-deep text-rose-deep px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-deep hover:text-white hover:scale-105 no-underline text-base"
            >
              <ShoppingBag className="w-5 h-5" />
              Browse Merch
            </Link>
            <Link
              href="/subscribe"
              className="flex items-center gap-2 border-2 border-sage text-sage-dark px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-sage hover:text-white hover:scale-105 no-underline text-base"
            >
              <Users className="w-5 h-5" />
              Join the Community
            </Link>
          </div>

          <p className="animate-fade-in-up stagger-6 font-sans text-sm text-warm-light dark:text-[#9B7A88] italic">
            God is in the Single Details.
          </p>
        </div>
      </section>

      <HomeAnimated />

      <section className="relative overflow-hidden grad-form py-20 px-4 sm:px-6" id="free-gift">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="font-sans text-xs font-bold text-blush tracking-widest uppercase">
            Your Free Gift Awaits
          </span>
          <h2 className="font-serif text-4xl text-cream mt-3 mb-4">
            Join the Single Details Community
          </h2>
          <p className="font-sans text-blush-medium leading-relaxed mb-10 max-w-xl mx-auto">
            Sign up for free and receive a handpicked gift to encourage your heart — plus
            book updates, event invites, and community love delivered to your inbox.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {gifts.map((gift) => (
              <div
                key={gift.title}
                className="bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-5 text-left"
              >
                <div className="w-10 h-10 rounded-full bg-blush/50 flex items-center justify-center mb-3 shadow-sm">
                  {gift.icon === 'book'  && <BookOpen className="w-6 h-6 text-rose-deep" />}
                  {gift.icon === 'star'  && <Star     className="w-6 h-6 text-sage-dark" />}
                  {gift.icon === 'heart' && <Heart    className="w-6 h-6 text-rose-deep" />}
                </div>
                <h4 className="font-serif text-base text-cream mb-1">{gift.title}</h4>
                <p className="font-sans text-xs text-blush-medium leading-relaxed">{gift.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-[#2A1D26] rounded-3xl p-8 shadow-xl">
            <EmailCapture compact />
          </div>
        </div>
      </section>

      <section className="bg-cream dark:bg-[#1C1218] py-12 px-4 text-center transition-colors duration-300">
        <p className="font-serif text-xl italic text-warm-muted dark:text-[#C09AA8]">
          &ldquo;God is in the Single Details.&rdquo;
        </p>
        <div className="w-8 h-0.5 bg-rose rounded mx-auto mt-4" />
      </section>
    </>
  )
}
