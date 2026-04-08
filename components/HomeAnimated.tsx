'use client'

import Link from 'next/link'
import { BookOpen, Leaf, Heart, Star } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const pillars = [
  {
    icon: <Heart className="w-8 h-8 text-rose-deep" />,
    title: 'Heal',
    desc: 'Receive healing from heartbreak, rejection, and the weight of waiting.',
    color: 'bg-blush-light dark:bg-[#241520] border-blush dark:border-[#4A1E30]',
  },
  {
    icon: <Leaf className="w-8 h-8 text-sage-dark" />,
    title: 'Grow',
    desc: 'Grow closer to God and discover who He made you to be.',
    color: 'bg-sage/10 dark:bg-sage/5 border-sage/30 dark:border-sage/20',
  },
  {
    icon: <Star className="w-8 h-8 text-rose" />,
    title: 'Bloom',
    desc: 'Receive singleness as a gift, a season God set apart for you.',
    color: 'bg-blush-light dark:bg-[#241520] border-blush dark:border-[#4A1E30]',
  },
]

export default function HomeAnimated() {
  const { ref: aboutRef,   inView: aboutInView   } = useInView(0.12)
  const { ref: pillarsRef, inView: pillarsInView } = useInView(0.12)

  return (
    <>
      <section className="bg-cream dark:bg-[#140A0E] py-20 px-4 sm:px-6 transition-colors duration-300" id="story">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className={`relative sticky top-[120px] self-start ${aboutInView ? 'animate-slide-from-left stagger-2' : 'opacity-0'}`}>
              <div className="rounded-3xl overflow-hidden bg-blush-light dark:bg-[#241520] aspect-[4/5] flex items-center justify-center border border-blush dark:border-[#4A1E30]">
                <div className="text-center px-8">
                  <div className="w-20 h-20 rounded-full bg-rose/20 flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-10 h-10 text-rose" />
                  </div>
                  <p className="font-sans text-sm text-warm-muted dark:text-[#E8A0B0] italic">Author photo coming soon</p>
                  <p className="font-serif text-lg text-rose-deep mt-2">Jesula</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-sage/20 -z-10" />
            </div>

            <div className={`flex flex-col gap-5 ${aboutInView ? 'animate-slide-from-right stagger-3' : 'opacity-0'}`}>
              <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                <em className="font-serif text-warm-brown dark:text-cream text-lg">Single Details </em>{' '}
                was born out of a breaking&hellip;and a rebuilding. What began as a confrontation
                with painful truths became the doorway to freedom. The emotional clutter. The
                silent disappointments. The distorted beliefs about identity and worth. None of
                it could remain hidden any longer.
              </p>
              <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                What followed was not surface-level inspiration, but courageous, Spirit-led
                restoration.
              </p>
              <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                Through intentional healing, forgiveness, deep self-examination, and surrender
                to God&apos;s refining work, a new narrative began to form. Identity was restored.
                The mind was renewed. The voice that had been silenced found strength again.
                Purpose was reclaimed.
              </p>
              <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                <span className="font-semibold text-warm-brown dark:text-cream">
                  This book is not just theory.
                </span>
                <br />
                It is the evidence of transformation.
              </p>
              <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                In <em className="font-serif text-warm-brown dark:text-cream">Single Details</em>,
                Jesula Chery invites readers into the often-ignored or unknown inner work that
                prepares the heart for wholeness. She writes with honesty shaped by struggle and
                boldness formed in breakthrough. Every chapter carries biblical truth woven with
                lived experience.
              </p>

              <div className="flex flex-col gap-3">
                <p className="font-sans font-semibold text-warm-brown dark:text-cream">
                  This book serves as:
                </p>
                <ul className="flex flex-col gap-2 pl-1">
                  <li className="flex items-start gap-2 font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-deep flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-warm-brown dark:text-cream">A reflection</span>
                      , exposing the hidden wounds we carry: the ones that quietly influence how
                      we love, serve, and see ourselves.
                    </span>
                  </li>
                  <li className="flex items-start gap-2 font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-deep flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-warm-brown dark:text-cream">A roadmap</span>
                      , guiding you through forgiveness, identity renewal, and the rebuilding of
                      a healthy, godly mindset.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                  If you have ever felt overlooked&hellip;<br />
                  If rejection made you question your value&hellip;<br />
                  If you&apos;ve struggled to forgive or wondered whether healing is truly possible&hellip;<br />
                  If you long to love again but fear reopening old wounds&hellip;
                </p>
                <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed italic">
                  You will find yourself in these pages.
                </p>
              </div>

              <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                <em className="font-serif text-warm-brown dark:text-cream">Single Details</em>{' '}
                reminds us that healing is not accidental; it is intentional. God does not waste
                pain. This book reveals how God restores your broken places. He renews the parts
                of you that feel worn out. He rewrites your story as He works the details for
                your good and His glory. He turns ashes into beauty and wounds into wisdom.
              </p>
              <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                The small details matter. The hidden places matter. Your story matters.
              </p>
              <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                And the same God who transformed one life is still in the business of
                transforming yours.
              </p>
              <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed italic">
                May every page draw you closer to the Author of faith and redemption, the One
                who specializes in restoring what we thought was lost.
              </p>

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

      <section className="bg-cream-medium dark:bg-[#1C0F15] py-16 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className={`rounded-2xl border p-8 text-center flex flex-col items-center gap-4 ${pillar.color} ${
                  pillarsInView ? `animate-fade-in-up stagger-${i + 1}` : 'opacity-0'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-white dark:bg-[#241520] flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-2xl text-warm-brown dark:text-cream">{pillar.title}</h3>
                <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
