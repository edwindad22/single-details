'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, ExternalLink, Heart, BookOpen, Coffee, Pen, ShoppingCart } from 'lucide-react'
import { getMerchItems, type Book, type BookStatus } from '@/data/books'

const categories = ['All', 'Journal', 'Apparel', 'Stationery', 'Lifestyle']

const staggerClass = (i: number) =>
  ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'][i] ?? ''

const categoryColors: Record<string, string> = {
  journal:    'from-rose/20 to-blush-light',
  apparel:    'from-sage/20 to-sage/5',
  stationery: 'from-blush/30 to-cream-medium',
  lifestyle:  'from-sage/20 to-sage/5',
  devotional: 'from-blush/30 to-cream-medium',
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
function AmazonCta({ item }: { item: Book }) {
  if (item.status === 'available' && item.amazonUrl) {
    return (
      <a
        href={item.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-center gap-2 bg-rose-deep text-white px-5 py-2.5 rounded-full font-sans font-bold text-sm transition-all hover:bg-rose-darker hover:shadow-md no-underline"
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
        className="flex items-center justify-center gap-2 bg-rose-deep text-white px-5 py-2.5 rounded-full font-sans font-bold text-sm transition-all hover:bg-rose-darker hover:shadow-md no-underline"
      >
        <ShoppingCart className="w-4 h-4" />
        Pre-order on Amazon
        <ExternalLink className="w-3 h-3 opacity-70" />
      </a>
    )
  }

  return (
    <div className="flex items-center justify-center gap-2 bg-blush border border-blush-medium text-rose px-5 py-2.5 rounded-full font-sans text-sm font-bold cursor-default">
      Coming Soon
    </div>
  )
}

export default function MerchGrid() {
  const allItems = getMerchItems()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? allItems
    : allItems.filter((item) =>
        item.category.toLowerCase() === activeCategory.toLowerCase()
      )

  return (
    <>
      {/* Category filter */}
      <section className="sticky top-[72px] z-40 bg-cream dark:bg-[#1C1218] border-b border-blush dark:border-[#3D1F30] py-3 px-4 sm:px-6 transition-colors duration-300">
        <div className="flex gap-2 max-w-6xl mx-auto overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-sans text-sm font-bold whitespace-nowrap transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-rose-deep text-white shadow-sm'
                  : 'bg-cream-dark dark:bg-[#2A1D26] text-warm-muted dark:text-[#C09AA8] hover:bg-blush hover:text-rose-deep'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 bg-cream dark:bg-[#1C1218] transition-colors duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) =>
            item.coverImage ? (
              /* Flip card for items with a cover image */
              <div
                key={item.id}
                className={`flip-card h-[380px] rounded-2xl animate-fade-in-up ${staggerClass(i)}`}
              >
                <div className="flip-card-inner rounded-2xl shadow-sm border border-blush dark:border-[#3D1F30]">
                  {/* Front */}
                  {item.category === 'book' ? (
                    <Link
                      href="/book"
                      className="flip-card-front bg-white dark:bg-[#2A1D26] rounded-2xl block"
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
                      <span className="absolute bottom-3 left-0 right-0 text-center font-sans text-xs text-white/80 bg-black/20 py-1 z-10">
                        Hover for details
                      </span>
                    </Link>
                  ) : (
                    <div className="flip-card-front bg-white dark:bg-[#2A1D26] rounded-2xl relative">
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        className="object-cover rounded-2xl"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="absolute top-3 right-3 bg-white/85 dark:bg-[#1C1218]/85 border border-blush dark:border-[#3D1F30] text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full z-10">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                    </div>
                  )}

                  {/* Back */}
                  <div className="flip-card-back bg-white dark:bg-[#2A1D26] rounded-2xl flex flex-col p-6 justify-between">
                    <div className="flex flex-col gap-3">
                      <span className="bg-blush dark:bg-[#3D1F30] border border-blush dark:border-[#3D1F30] text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full w-fit">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                      <h3 className="font-serif text-xl text-warm-brown dark:text-cream">{item.title}</h3>
                      <p className="font-sans text-sm text-warm-muted dark:text-[#C09AA8] leading-relaxed">
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
                </div>
              </div>
            ) : (
              /* Standard card */
              <div
                key={item.id}
                className={`bg-white dark:bg-[#2A1D26] rounded-2xl shadow-sm border border-blush dark:border-[#3D1F30] overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-200 animate-fade-in-up ${staggerClass(i)}`}
              >
                <div className={`h-48 bg-gradient-to-br ${categoryColors[item.category] ?? 'from-blush/30 to-cream-medium'} flex items-center justify-center relative`}>
                  <div className="w-20 h-20 rounded-full bg-white/70 dark:bg-[#1C1218]/60 flex items-center justify-center text-rose-deep">
                    {iconForItem(item)}
                  </div>
                  <span className="absolute top-3 right-3 bg-white/80 dark:bg-[#1C1218]/80 border border-blush dark:border-[#3D1F30] text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h3 className="font-serif text-xl text-warm-brown dark:text-cream">{item.title}</h3>
                  <p className="font-sans text-sm text-warm-muted dark:text-[#C09AA8] leading-relaxed flex-1">
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
        <div className="mt-12 text-center bg-blush-light dark:bg-[#2A1D26] border border-blush dark:border-[#3D1F30] rounded-3xl p-8 max-w-2xl mx-auto animate-fade-in-up stagger-3">
          <ShoppingBag className="w-10 h-10 text-rose mx-auto mb-3" />
          <h3 className="font-serif text-2xl text-warm-brown dark:text-cream mb-2">Amazon Links Coming Soon</h3>
          <p className="font-sans text-warm-muted dark:text-[#C09AA8] leading-relaxed">
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
