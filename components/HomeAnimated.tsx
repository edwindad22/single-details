'use client'

import Link from 'next/link'
import { BookOpen, Leaf, Heart, Star } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const pillars = [
  {
    icon: <Heart className="w-8 h-8 text-rose-deep" />,
    title: 'Heal',
    desc: 'Receive healing from heartbreak, rejection, and the weight of waiting.',
    color: 'bg-blush-light dark:bg-[#2A1D26] border-blush dark:border-[#3D1F30]',
  },
  {
    icon: <Leaf className="w-8 h-8 text-sage-dark" />,
    title: 'Grow',
    desc: 'Grow closer to God and discover who He made you to be.',
    color: 'bg-sage/10 dark:bg-sage/5 border-sage/30 dark:border-sage/20',
  },
  {
    icon: <Star className="w-8 h-8 text-rose" />,
    title: 'Embrace',
    desc: 'Receive singleness as a gift — a season God set apart for you.',
    color: 'bg-blush-light dark:bg-[#2A1D26] border-blush dark:border-[#3D1F30]',
  },
]

export default function HomeAnimated() {
  const { ref: aboutRef,   inView: aboutInView   } = useInView(0.12)
  const { ref: pillarsRef, inView: pillarsInView } = useInView(0.12)

  return (
    <>
      <section className="bg-cream dark:bg-[#1C1218] py-20 px-4 sm:px-6 transition-colors duration-300" id="story">
        <div className="max-w-5xl mx-auto">
          <div ref={aboutRef} className={`text-center mb-12 ${aboutInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="font-sans text-xs font-bold text-rose tracking-widest uppercase">
              The Story Behind Single Details
            </span>
            <h2 className="font-serif text-4xl text-warm-brown dark:text-cream mt-3 mb-4">
              Why This Book Was Written
            </h2>
            <div className="divider-rose" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`relative ${aboutInView ? 'animate-slide-from-left stagger-2' : 'opacity-0'}`}>
              <div className="rounded-3xl overflow-hidden bg-blush-light dark:bg-[#2A1D26] aspect-[4/5] flex items-center justify-center border border-blush dark:border-[#3D1F30]">
                <div className="text-center px-8">
                  <div className="w-20 h-20 rounded-full bg-rose/20 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-10 h-10 text-rose" />
                  </div>
                  <p className="font-sans text-sm text-warm-muted dark:text-[#C09AA8] italic">Author photo coming soon</p>
                  <p className="font-serif text-lg text-rose-deep mt-2">Jesula</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-sage/20 -z-10" />
            </div>

            <div className={`flex flex-col gap-6 ${aboutInView ? 'animate-slide-from-right stagger-3' : 'opacity-0'}`}>
              <p className="font-sans text-warm-muted dark:text-[#C09AA8] leading-relaxed">
                <em className="font-serif text-warm-brown dark:text-cream text-lg">Single Details</em>{' '}
                was born out of a deeply personal season of heartbreak, healing, and
                rediscovering my identity in Christ. In 2013, I experienced a heartbreak I didn&apos;t
                foresee. I found myself wrestling with rejection, disappointment, and questions
                about my worth.
              </p>
              <p className="font-sans text-warm-muted dark:text-[#C09AA8] leading-relaxed">
                However, what began as a painful season became a turning point. In that
                vulnerable place, kneeling before Him with my alabaster box — broken and
                surrendered — God met me, not with condemnation, but with compassion and
                restoration.
              </p>
              <p className="font-sans text-warm-muted dark:text-[#C09AA8] leading-relaxed">
                I came to understand that healing is not automatic — it requires real work.
                Forgiveness, surrender, and honest self-examination are foundational
                to wholeness and a healthy relationship with God and others.
              </p>
              <blockquote className="scripture">
                <p className="mb-1">
                  &ldquo;Now to Him who is able to do exceedingly abundantly above all that we ask or
                  think, according to the power that works in us…&rdquo;
                </p>
                <footer className="font-sans text-sm text-rose-deep font-bold not-italic">
                  — Ephesians 3:20
                </footer>
              </blockquote>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-rose-deep text-white px-6 py-3 rounded-full font-sans font-bold tracking-wide transition-all hover:bg-rose-darker hover:shadow-lg hover:scale-105 no-underline w-fit"
              >
                <BookOpen className="w-5 h-5" />
                Learn More About the Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream-medium dark:bg-[#211620] py-16 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`rounded-2xl border p-8 text-center flex flex-col items-center gap-4 ${pillar.color} ${
                  pillarsInView ? `animate-fade-in-up stagger-${i + 1}` : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-[#2A1D26] flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-2xl text-warm-brown dark:text-cream">{pillar.title}</h3>
                <p className="font-sans text-warm-muted dark:text-[#C09AA8] leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
