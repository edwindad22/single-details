import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, ExternalLink, Heart, BookOpen, Coffee, Pen, ShoppingCart } from 'lucide-react'
import journalCover from '../assets/single-details-journal-cover.jpg'

interface MerchItem {
  id: number
  title: string
  category: string
  description: string
  icon: React.ReactNode
  color: string
  image?: string
  /** Set when the item has a dedicated details page (e.g. /book) */
  detailsPath?: string
  amazonUrl?: string
  /** True while the Amazon URL isn't live yet — shows the CTA but alerts on click */
  amazonComingSoon?: boolean
}

const merch: MerchItem[] = [
  {
    id: 1,
    title: 'Single Details Prayer Journal',
    category: 'Journal',
    description: 'A guided prayer journal designed to help you deepen your conversations with God through this season.',
    icon: <BookOpen className="w-8 h-8" />,
    color: 'from-rose/20 to-blush-light',
    image: journalCover,
    detailsPath: '/book',
    amazonComingSoon: true,
  },
  {
    id: 2,
    title: 'Single Details T-Shirt',
    category: 'Apparel',
    description: 'Wear your faith. Soft, quality tee with the Single Details message — reminder that you are being prepared.',
    icon: <Heart className="w-8 h-8" />,
    color: 'from-sage/20 to-sage/5',
  },
  {
    id: 3,
    title: 'Blank Journal',
    category: 'Journal',
    description: 'A beautiful blank journal for your prayers, reflections, and everything God is speaking to you.',
    icon: <Pen className="w-8 h-8" />,
    color: 'from-blush/30 to-cream-medium',
  },
  {
    id: 4,
    title: 'Inspirational Pens',
    category: 'Stationery',
    description: 'Write your story with purpose. Faith-inspired pens for your journaling practice.',
    icon: <Pen className="w-8 h-8 rotate-45" />,
    color: 'from-rose/20 to-blush-light',
  },
  {
    id: 5,
    title: 'Single Details Mug',
    category: 'Lifestyle',
    description: 'Start your morning with intention. This mug reminds you every sip: God is in the Single Details.',
    icon: <Coffee className="w-8 h-8" />,
    color: 'from-sage/20 to-sage/5',
  },
  {
    id: 6,
    title: 'Single Details Tote Bag',
    category: 'Lifestyle',
    description: 'Carry your truth everywhere you go — stylish, faith-filled, and made for the woman becoming whole.',
    icon: <ShoppingBag className="w-8 h-8" />,
    color: 'from-blush/30 to-cream-medium',
  },
]

const categories = ['All', 'Journal', 'Apparel', 'Stationery', 'Lifestyle']

const staggerClass = (i: number) =>
  ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'][i] ?? ''

/** Shared Amazon CTA — used in both flip-card back and standard card */
function AmazonCta({ item }: { item: MerchItem }) {
  if (item.amazonUrl) {
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

  if (item.amazonComingSoon) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation()
          alert('Amazon link coming soon! The book launches next month.')
        }}
        className="flex items-center justify-center gap-2 bg-rose-deep text-white px-5 py-2.5 rounded-full font-sans font-bold text-sm transition-all hover:bg-rose-darker hover:shadow-md w-full"
      >
        <ShoppingCart className="w-4 h-4" />
        Get Book on Amazon
      </button>
    )
  }

  return (
    <div className="flex items-center justify-center gap-2 bg-blush border border-blush-medium text-rose px-5 py-2.5 rounded-full font-sans text-sm font-bold cursor-default">
      Coming Soon
    </div>
  )
}

export default function Merch() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? merch
    : merch.filter((item) => item.category === activeCategory)

  return (
    <main className="flex-1 bg-cream">
      {/* Header */}
      <section
        className="py-16 px-4 sm:px-6 text-center relative overflow-hidden animate-fade-in-up"
        style={{ background: 'linear-gradient(135deg, #FDF8F3 0%, #F9EEF3 80%, #F2C4CE 100%)' }}
      >
        <span className="font-sans text-xs font-bold text-sage-dark tracking-widest uppercase">
          Shop the Collection
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-warm-brown mt-3 mb-4">
          Merch &amp; Resources
        </h1>
        <p className="font-sans text-warm-muted leading-relaxed max-w-xl mx-auto text-lg">
          Carry the message of Single Details into your everyday life. Each piece is created to
          encourage, remind, and inspire the woman walking in her season with faith.
        </p>
      </section>

      {/* Category filter */}
      <section className="sticky top-[72px] z-40 bg-cream border-b border-blush py-3 px-4 sm:px-6">
        <div className="flex gap-2 max-w-6xl mx-auto overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-sans text-sm font-bold whitespace-nowrap transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-rose-deep text-white shadow-sm'
                  : 'bg-cream-dark text-warm-muted hover:bg-blush hover:text-rose-deep'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            item.image ? (
              /* ── Flip card for items with a real cover image ── */
              <div
                key={item.id}
                className={`flip-card h-[380px] rounded-2xl animate-fade-in-up ${staggerClass(i)}`}
              >
                <div className="flip-card-inner rounded-2xl shadow-sm border border-blush">

                  {/* Front — cover photo; clicking navigates to the details page */}
                  {item.detailsPath ? (
                    <Link
                      to={item.detailsPath}
                      className="flip-card-front bg-white rounded-2xl block"
                      aria-label={`View details for ${item.title}`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <span className="absolute top-3 right-3 bg-white/85 border border-blush text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      {/* Subtle hint at the bottom */}
                      <span className="absolute bottom-3 left-0 right-0 text-center font-sans text-xs text-white/80 bg-black/20 py-1">
                        Hover for details
                      </span>
                    </Link>
                  ) : (
                    <div className="flip-card-front bg-white rounded-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <span className="absolute top-3 right-3 bg-white/85 border border-blush text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  )}

                  {/* Back — details + CTAs; buttons stop propagation so the card link isn't triggered */}
                  <div className="flip-card-back bg-white rounded-2xl flex flex-col p-6 justify-between">
                    <div className="flex flex-col gap-3">
                      <span className="bg-blush border border-blush text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full w-fit">
                        {item.category}
                      </span>
                      <h3 className="font-serif text-xl text-warm-brown">{item.title}</h3>
                      <p className="font-sans text-sm text-warm-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                      <AmazonCta item={item} />
                      {item.detailsPath && (
                        <Link
                          to={item.detailsPath}
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
              /* ── Standard card for items without an image ── */
              <div
                key={item.id}
                className={`bg-white rounded-2xl shadow-sm border border-blush overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-200 animate-fade-in-up ${staggerClass(i)}`}
              >
                <div className={`h-48 bg-gradient-to-br ${item.color} flex items-center justify-center relative`}>
                  <div className="w-20 h-20 rounded-full bg-white/70 flex items-center justify-center text-rose-deep">
                    {item.icon}
                  </div>
                  <span className="absolute top-3 right-3 bg-white/80 border border-blush text-rose-deep font-sans text-xs font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <h3 className="font-serif text-xl text-warm-brown">{item.title}</h3>
                  <p className="font-sans text-sm text-warm-muted leading-relaxed flex-1">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <AmazonCta item={item} />
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-12 text-center bg-blush-light border border-blush rounded-3xl p-8 max-w-2xl mx-auto animate-fade-in-up stagger-3">
          <ShoppingBag className="w-10 h-10 text-rose mx-auto mb-3" />
          <h3 className="font-serif text-2xl text-warm-brown mb-2">Amazon Links Coming Soon</h3>
          <p className="font-sans text-warm-muted leading-relaxed">
            All merch will be available on Amazon next month when the book launches.
            Join the community to be notified the moment everything goes live!
          </p>
          <Link
            to="/subscribe"
            className="inline-flex items-center gap-2 bg-rose-deep text-white px-6 py-3 rounded-full font-sans font-bold tracking-wide transition-all hover:bg-rose-darker hover:shadow-lg no-underline mt-6"
          >
            Notify Me!
          </Link>
        </div>
      </section>
    </main>
  )
}
