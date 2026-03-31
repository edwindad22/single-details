import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Heart, Star, Leaf, ShoppingCart, Gift, Bell } from 'lucide-react'
import { getMainBook } from '@/data/books'

export const metadata: Metadata = {
  title: 'The Book',
  description:
    'Single Details — a faith-based book for every single woman who needs to know that God is at work in this season.',
}

export default function BookPage() {
  const book = getMainBook()

  return (
    <>
      <section className="relative overflow-hidden grad-hero-alt py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative book-reveal">
              {book.coverImage ? (
                <Image
                  src={book.coverImage}
                  alt={`${book.title} book cover`}
                  width={288}
                  height={384}
                  priority
                  className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl shadow-2xl border border-blush/40"
                />
              ) : (
                <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl shadow-2xl border border-blush/40 bg-blush-light dark:bg-[#2A1D26] flex items-center justify-center">
                  <BookOpen className="w-20 h-20 text-rose" />
                </div>
              )}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-rose/20 -z-10" />
            </div>
          </div>

          <div className="flex flex-col gap-6 animate-fade-in-up stagger-3">
            <div>
              <span className="font-sans text-xs font-bold text-sage-dark tracking-widest uppercase">
                The Book
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-warm-brown dark:text-cream mt-2 leading-tight">
                {book.title}
              </h1>
              <p className="font-serif text-xl italic text-rose mt-1">by {book.author}</p>
            </div>

            <p className="font-sans text-warm-muted dark:text-[#C09AA8] leading-relaxed text-lg">
              {book.description}
            </p>

            {book.features && (
              <ul className="flex flex-col gap-3">
                {book.features.map((f, i) => {
                  const icons  = [Heart, Leaf, Star, BookOpen]
                  const colors = ['text-rose-deep', 'text-sage-dark', 'text-rose', 'text-warm-muted']
                  const Icon   = icons[i % icons.length]
                  return (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-[#2A1D26] border border-blush dark:border-[#3D1F30] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon className={`w-5 h-5 ${colors[i % colors.length]}`} />
                      </div>
                      <span className="font-sans text-warm-muted dark:text-[#C09AA8]">{f}</span>
                    </li>
                  )
                })}
              </ul>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              {book.status === 'available' && book.amazonUrl ? (
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-rose-deep text-white px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-darker hover:shadow-lg no-underline text-base"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Get the Book on Amazon
                </a>
              ) : book.status === 'preorder' && book.amazonUrl ? (
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-rose-deep text-white px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-darker hover:shadow-lg no-underline text-base"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Pre-order on Amazon
                </a>
              ) : (
                <Link
                  href="/subscribe"
                  className="flex items-center justify-center gap-2 bg-rose-deep text-white px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-darker hover:shadow-lg no-underline text-base"
                >
                  <Bell className="w-5 h-5" />
                  Notify Me at Launch
                </Link>
              )}
              <Link
                href="/subscribe"
                className="flex items-center justify-center gap-2 border-2 border-rose-deep text-rose-deep px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-deep hover:text-white no-underline text-base"
              >
                <Gift className="w-5 h-5" />
                Get Free Gift
              </Link>
            </div>

            {book.status === 'coming-soon' && (
              <p className="font-sans text-sm text-warm-light dark:text-[#9B7A88] italic">
                Launching soon on Amazon — get notified when it&apos;s live!
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-cream-medium dark:bg-[#211620] py-16 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-brown dark:text-cream mb-8">
            The Heart Behind the Book
          </h2>
          <p className="font-sans text-warm-muted dark:text-[#C09AA8] leading-relaxed text-lg mb-8">
            Single Details was written as a prayer — that every woman who reads it will walk away
            knowing she is seen, known, and loved by a God who doesn&apos;t miss a thing in her life.
          </p>
          <blockquote className="scripture max-w-2xl mx-auto text-left">
            <p className="font-serif text-xl leading-relaxed mb-2">
              &ldquo;My prayer is that as you read, you will see that God is at work in your life —
              for everything He already has for you.&rdquo;
            </p>
            <footer className="font-sans text-sm text-rose-deep font-bold not-italic">
              — Jesula, Single Details
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-cream dark:bg-[#1C1218] py-16 px-4 sm:px-6 transition-colors duration-300">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-blush-light dark:bg-[#2A1D26] border border-blush dark:border-[#3D1F30] rounded-3xl p-10">
            <BookOpen className="w-12 h-12 text-rose-deep mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-warm-brown dark:text-cream mb-3">
              {book.status === 'available' ? 'Get Your Copy Today' : 'Be the First to Know'}
            </h3>
            <p className="font-sans text-warm-muted dark:text-[#C09AA8] mb-6">
              {book.status === 'available'
                ? 'The book is live on Amazon. Get your copy today and begin your journey.'
                : "The book is launching soon. Join the community and you'll receive a notification the moment it's available."}
            </p>
            {book.status === 'available' && book.amazonUrl ? (
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rose-deep text-white px-6 py-3 rounded-full font-sans font-bold tracking-wide transition-all hover:bg-rose-darker hover:shadow-lg no-underline"
              >
                Get on Amazon
              </a>
            ) : (
              <Link
                href="/subscribe"
                className="inline-flex items-center gap-2 bg-rose-deep text-white px-6 py-3 rounded-full font-sans font-bold tracking-wide transition-all hover:bg-rose-darker hover:shadow-lg no-underline"
              >
                Notify Me at Launch
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
