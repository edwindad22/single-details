'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, ExternalLink, Heart, BookOpen, Coffee, Pen, ShoppingCart } from 'lucide-react'
import { getMerchItems, type Book, type BookStatus } from '@/data/books'

export type { Book }

const categories = ['All', 'Journal', 'Apparel', 'Stationery', 'Lifestyle']

const staggerClass = (i: number) =>
  ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'][i] ?? ''

const categoryColors: Record<string, string> = {
  journal:    'from-rose/20 to-blush-light dark:from-[#2A1020] dark:to-[#1C0F15]',
  apparel:    'from-sage/20 to-sage/5 dark:from-[#1A2A1A] dark:to-[#1C0F15]',
  stationery: 'from-blush/30 to-cream-medium dark:from-[#2A1020] dark:to-[#1C0F15]',
  lifestyle:  'from-sage/20 to-sage/5 dark:from-[#1A2A1A] dark:to-[#1C0F15]',
  devotional: 'from-blush/30 to-cream-medium dark:from-[#2A1020] dark:to-[#1C0F15]',
}

function iconForItem(item: Book) {
  switch (item.category) {
    case 'journal':    return <BookOpen className="w-8 h-8" />
    case 'apparel':    return <Heart className="w-8 h-8" />
    case 'stationery': return <Pen className="w-8 h-8 rotate-45" />
    case 'lifestyle':
      return item.title.toLowerCase().includes('mug')
        ? <Coffee className="w-8 h-8" />
        : <ShoppingBag className="w-8 h-8" />
    default:           return <BookOpen className="w-8 h-8" />
  }
}

/** Shared Amazon CTA — driven by Book.status */
function AmazonCta({ item, onDark = false }: { item: Book; onDark?: boolean }) {
  if (item.status === 'available' && item.amazonUrl) {
    return (
      <a
        href={item.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-sans font-bold text-sm transition-all no-underline ${
          onDark
            ? 'bg-white text-rose-deep hover:bg-white/90'
            : 'bg-rose-deep text-white hover:bg-rose-darker hover:shadow-md'
        }`}
      >
        <ShoppingCart className="w-4 h-4" />
        Get on Amazon
        <ExternalLink className="w-3 h-3 opacity-70" />
      </a>
    )
  }

  if (item.status === 'preorder' && item.amazonUrl) {
    return (
      <a
        href={item.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-sans font-bold text-sm transition-all no-underline ${
          onDark
            ? 'bg-white text-rose-deep hover:bg-white/90'
            : 'bg-rose-deep text-white hover:bg-rose-darker hover:shadow-md'
        }`}
      >
        <ShoppingCart className="w-4 h-4" />
        Pre-order on Amazon
        <ExternalLink className="w-3 h-3 opacity-70" />
      </a>
    )
  }

  return (
    <div className={`flex items-center justify-center px-5 py-2.5 rounded-full font-sans text-sm font-bold cursor-default ${
      onDark
        ? 'border border-white/60 text-white/80'
        : 'bg-blush border border-blush-medium text-rose'
    }`}>
      Coming Soon
    </div>
  )
}

export default function MerchGrid({ items }: { items?: Book[] }) {
  const allItems = items ?? getMerchItems()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? allItems
    : allItems.filter((item) =>
        item.category.toLowerCase() === activeCategory.toLowerCase()
      )

  return (
    <>
      {/* Category filter */}
      <section className="sticky top-[72px] z-40 bg-cream/90 dark:bg-[#1C0F15]/95 border-b border-blush dark:border-[#5A2535] py-3 px-4 sm:px-6 transition-colors duration-300 backdrop-blur-sm">
        <div className="flex gap-2 max-w-6xl mx-auto overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-sans text-sm font-bold whitespace-nowrap transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-rose-deep text-white shadow-sm'
                  : 'bg-cream-dark dark:bg-[#2A1020] text-warm-muted dark:text-[#E8A0B0] hover:bg-blush hover:text-rose-deep'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 transition-colors duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) =>
            item.coverImage ? (
              /* Cover card with crossfade for items with a cover image */
              <div
                key={item.id}
                className={`cover-card h-[380px] rounded-2xl shadow-sm border border-blush dark:border-[#5A2535] animate-fade-in-up ${staggerClass(i)}`}
              >
                {/* Front — base layer */}
                {item.category === 'book' ? (
                  <Link
                    href="/book"
                    className="relative block w-full h-full rounded-2xl overflow-hidden"
                    aria-label={`View details for ${item.title}`}
                  >
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 bg-white/85 border border-blush text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full z-10">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </Link>
                ) : (
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 right-3 bg-white/85 dark:bg-[#140A0E]/85 border border-blush dark:border-[#5A2535] text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full z-10">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                  </div>
                )}

                {/* Back — crossfades over front on hover */}
                {item.backCoverImage ? (
                  /* Image back cover + centered CTA */
                  <div className="cover-card-back">
                    <Image
                      src={item.backCoverImage}
                      alt={`${item.title} back cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay — fades into site palette, not raw black */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#6B1A2E]/90 to-transparent" />
                    <div className="absolute bottom-5 left-0 right-0 flex justify-center px-5">
                      <AmazonCta item={item} onDark />
                    </div>
                  </div>
                ) : (
                  /* Text description back */
                  <div className="cover-card-back bg-white dark:bg-[#241520] flex flex-col p-6 justify-between">
                    <div className="flex flex-col gap-3">
                      <span className="bg-blush dark:bg-[#3A1825] border border-blush dark:border-[#5A2535] text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full w-fit">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <h3 className="font-serif text-xl text-warm-brown dark:text-cream">{item.title}</h3>
                      <p className="font-sans text-sm text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <AmazonCta item={item} />
                      {item.category === 'book' && (
                        <Link
                          href="/book"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center justify-center gap-2 border border-rose-deep text-rose-deep px-5 py-2 rounded-full font-sans font-bold text-sm transition-all hover:bg-rose-deep hover:text-white no-underline"
                        >
                          View Details
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Standard card */
              <div
                key={item.id}
                className={`bg-white dark:bg-[#241520] rounded-2xl shadow-sm border border-blush dark:border-[#5A2535] overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-200 animate-fade-in-up ${staggerClass(i)}`}
              >
                <div className={`h-48 bg-gradient-to-br ${categoryColors[item.category] ?? 'from-blush/30 to-cream-medium dark:from-[#2A1020] dark:to-[#1C0F15]'} flex items-center justify-center relative`}>
                  <div className="w-20 h-20 rounded-full bg-white/70 dark:bg-[#140A0E]/60 flex items-center justify-center text-rose-deep">
                    {iconForItem(item)}
                  </div>
                  <span className="absolute top-3 right-3 bg-white/80 dark:bg-[#1C0F15]/90 border border-blush dark:border-[#5A2535] text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h3 className="font-serif text-xl text-warm-brown dark:text-cream">{item.title}</h3>
                  <p className="font-sans text-sm text-warm-muted dark:text-[#E8A0B0] leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <AmazonCta item={item} />
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Coming soon note */}
        <div className="mt-12 text-center bg-blush-light dark:bg-[#241520] border border-blush dark:border-[#5A2535] rounded-3xl p-8 max-w-2xl mx-auto animate-fade-in-up stagger-3">
          <ShoppingBag className="w-10 h-10 text-rose mx-auto mb-3" />
          <h3 className="font-serif text-2xl text-warm-brown dark:text-cream mb-2">Amazon Links Coming Soon</h3>
          <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed">
            All merch will be available on Amazon when the book launches.
            Join the community to be notified the moment everything goes live!
          </p>
          <Link
            href="/subscribe"
            className="inline-flex items-center gap-2 bg-rose-deep text-white px-6 py-3 rounded-full font-sans font-bold tracking-wide transition-all hover:bg-rose-darker hover:shadow-lg no-underline mt-6"
          >
            Notify Me!
          </Link>
        </div>
      </section>
    </>
  )
}
