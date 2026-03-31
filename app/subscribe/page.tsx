import type { Metadata } from 'next'
import { BookOpen, Star, Heart, Leaf } from 'lucide-react'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Join the Community',
  description:
    'Join the Single Details community. Receive your free gift and be the first to hear about book launches and encouragement.',
}

const gifts = [
  {
    number: '01',
    icon: 'book' as const,
    title: '5 Journal Prompts for Wholeness',
    desc: 'Five questions to help you think honestly about who you are, where you are healing, and what you are called to.',
    color: 'bg-blush-light dark:bg-[#2A1D26] border-blush dark:border-[#3D1F30]',
  },
  {
    number: '02',
    icon: 'star' as const,
    title: '7-Day Mind Renewal Scripture Guide',
    desc: 'Seven days, seven Scriptures, and seven declarations to renew your mind and stand firm in truth.',
    color: 'bg-sage/10 dark:bg-sage/5 border-sage/30 dark:border-sage/20',
  },
  {
    number: '03',
    icon: 'heart' as const,
    title: '"Becoming Whole Before Love" Mini Devotional',
    desc: 'A short devotional through healing, identity, and surrender — so you walk into every season whole.',
    color: 'bg-blush-light dark:bg-[#2A1D26] border-blush dark:border-[#3D1F30]',
  },
]

const testimonials = [
  {
    quote:
      'This community reminded me that my season has purpose. I stopped seeing singleness as something to escape and started seeing it as a gift.',
    name: 'A. Williams',
    role: 'Community Member',
  },
  {
    quote:
      'The journal prompts changed how I pray. I never knew I had so much to work through — and God was waiting for me to bring it all to Him.',
    name: 'M. Joseph',
    role: 'Community Member',
  },
]

export default function SubscribePage() {
  return (
    <>
      {/* Header */}
      <section className="grad-hero-alt py-20 px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blush/40 dark:bg-blush/10 border border-blush dark:border-blush/30 rounded-full px-4 py-1.5 mb-8">
          <Leaf className="w-4 h-4 text-sage-dark" />
          <span className="font-sans text-xs font-bold text-warm-muted dark:text-[#C09AA8] tracking-widest uppercase">
            Single Details Community
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-warm-brown dark:text-cream mb-4 leading-tight">
          You Are Not Here by Accident
        </h1>
        <p className="font-sans text-warm-muted dark:text-[#C09AA8] text-lg leading-relaxed max-w-2xl mx-auto">
          If you are here, it is because something in your heart knows this season means more.
          Join the Single Details community and receive your free gift — a collection of resources
          to encourage, strengthen, and remind you that God is working in every detail.
        </p>
      </section>

      {/* Free gift cards */}
      <section className="bg-cream dark:bg-[#1C1218] py-16 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-sans text-xs font-bold text-rose tracking-widest uppercase">
              Your Free Welcome Gift
            </span>
            <h2 className="font-serif text-3xl text-warm-brown dark:text-cream mt-2">
              What You&apos;ll Receive When You Join
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {gifts.map((gift) => (
              <div
                key={gift.title}
                className={`rounded-2xl border p-6 flex flex-col gap-4 ${gift.color}`}
              >
                <div className="flex items-start gap-3">
                  <span className="font-serif text-4xl font-bold text-rose-deep/20 leading-none">
                    {gift.number}
                  </span>
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-[#2A1D26] border border-blush dark:border-[#3D1F30] flex items-center justify-center flex-shrink-0 shadow-sm">
                    {gift.icon === 'book'  && <BookOpen className="w-7 h-7 text-rose-deep" />}
                    {gift.icon === 'star'  && <Star    className="w-7 h-7 text-sage-dark" />}
                    {gift.icon === 'heart' && <Heart   className="w-7 h-7 text-rose" />}
                  </div>
                </div>
                <h3 className="font-serif text-xl text-warm-brown dark:text-cream leading-snug">{gift.title}</h3>
                <p className="font-sans text-sm text-warm-muted dark:text-[#C09AA8] leading-relaxed">{gift.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-cream-dark dark:bg-[#2A1D26] rounded-2xl p-6 text-center mb-12">
            <p className="font-sans text-warm-muted dark:text-[#C09AA8] leading-relaxed">
              <strong className="text-warm-brown dark:text-cream">Plus,</strong> as a community member you&apos;ll
              be the first to hear about book updates, launch announcements, events, and
              blog posts — all to keep you fed and close to God.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="grad-form py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-lg mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-3">
              Join the Community
            </h2>
            <p className="font-sans text-blush-medium">
              Enter your details below to receive your free gift and join thousands of
              sisters walking this same road.
            </p>
          </div>
          <div className="bg-white dark:bg-[#2A1D26] rounded-3xl p-8 shadow-2xl">
            <EmailCapture compact />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream-medium dark:bg-[#211620] py-16 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-warm-brown dark:text-cream">What Sisters Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-[#2A1D26] rounded-2xl border border-blush dark:border-[#3D1F30] p-7 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-rose fill-rose" />
                  ))}
                </div>
                <p className="font-serif text-warm-muted dark:text-[#C09AA8] italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-auto">
                  <p className="font-sans text-sm font-bold text-warm-brown dark:text-cream">{t.name}</p>
                  <p className="font-sans text-xs text-warm-light dark:text-[#9B7A88]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture footer */}
      <section className="bg-cream dark:bg-[#1C1218] py-14 px-4 text-center transition-colors duration-300">
        <blockquote className="max-w-2xl mx-auto text-center border-t-2 border-rose/30 pt-6">
          <p className="font-serif text-xl text-warm-muted dark:text-[#C09AA8] italic leading-relaxed">
            &ldquo;Now to Him who is able to do exceedingly abundantly above all that we ask or think,
            according to the power that works in us…&rdquo;
          </p>
          <footer className="font-sans text-sm text-rose-deep font-bold not-italic mt-3">
            — Ephesians 3:20
          </footer>
        </blockquote>
      </section>
    </>
  )
}
