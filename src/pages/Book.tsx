import { Link } from 'react-router-dom'
import { BookOpen, Heart, Star, Leaf, ShoppingCart, Gift } from 'lucide-react'
import bookCover from '../assets/single-details-book-cover.jpg'

const features = [
  {
    icon: <Heart className="w-5 h-5 text-rose-deep" />,
    text: 'Face heartbreak and rejection honestly',
  },
  {
    icon: <Leaf className="w-5 h-5 text-sage-dark" />,
    text: 'Discover your identity and worth in Christ',
  },
  {
    icon: <Star className="w-5 h-5 text-rose" />,
    text: 'Embrace singleness as a season of preparation',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-warm-muted" />,
    text: 'Do the real work of healing',
  },
]

export default function Book() {
  return (
    <main className="flex-1 bg-cream">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 px-4 sm:px-6"
        style={{ background: 'linear-gradient(135deg, #FDF8F3 0%, #F9EEF3 60%, #F2C4CE 100%)' }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Book cover — flips in from the spine on load */}
          <div className="flex justify-center md:justify-end">
            <div className="relative book-reveal">
              <img
                src={bookCover}
                alt="Single Details book cover"
                loading="lazy"
                width={288}
                height={384}
                className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl shadow-2xl border border-blush/40"
              />
              {/* Shadow accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-rose/20 -z-10" />
            </div>
          </div>

          {/* Book info */}
          <div className="flex flex-col gap-6 animate-fade-in-up stagger-3">
            <div>
              <span className="font-sans text-xs font-bold text-sage-dark tracking-widest uppercase">
                The Book
              </span>
              <h1 className="font-serif text-4xl md:text-5xl text-warm-brown mt-2 leading-tight">
                Single Details
              </h1>
              <p className="font-serif text-xl italic text-rose mt-1">by Jesula</p>
            </div>

            <p className="font-sans text-warm-muted leading-relaxed text-lg">
              A faith-based book for every single woman who needs to know that God is not absent
              in this season — He is at work in it, for everything He already has for her.
            </p>

            <ul className="flex flex-col gap-3">
              {features.map((f) => (
                <li key={f.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-blush flex items-center justify-center flex-shrink-0 shadow-sm">
                    {f.icon}
                  </div>
                  <span className="font-sans text-warm-muted">{f.text}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  alert('Amazon link coming soon! The book launches next month.')
                }}
                className="flex items-center justify-center gap-2 bg-rose-deep text-white px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-darker hover:shadow-lg no-underline text-base"
              >
                <ShoppingCart className="w-5 h-5" />
                Get the Book on Amazon
              </a>
              {/* Free ebook — requires signup */}
              <Link
                to="/subscribe"
                className="flex items-center justify-center gap-2 border-2 border-rose-deep text-rose-deep px-7 py-3.5 rounded-full font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-deep hover:text-white no-underline text-base"
              >
                <Gift className="w-5 h-5" />
                Get Free Gift
              </Link>
            </div>
            <p className="font-sans text-sm text-warm-light italic">
              Launching soon on Amazon — get notified when it's live!
            </p>
          </div>
        </div>
      </section>

      {/* Scripture section */}
      <section className="bg-cream-medium py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-warm-brown mb-8">
            The Heart Behind the Book
          </h2>
          <p className="font-sans text-warm-muted leading-relaxed text-lg mb-8">
            Single Details was written as a prayer — that every woman who reads it will walk away
            knowing she is seen, known, and loved by a God who doesn't miss a thing in her life.
          </p>
          <blockquote className="scripture max-w-2xl mx-auto text-left">
            <p className="font-serif text-xl leading-relaxed mb-2">
              "My prayer is that as you read, you will see that God is at work in your life —
              for everything He already has for you."
            </p>
            <footer className="font-sans text-sm text-rose-deep font-bold not-italic">
              — Jesula, Single Details
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Already available? placeholder */}
      <section className="bg-cream py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-blush-light border border-blush rounded-3xl p-10">
            <BookOpen className="w-12 h-12 text-rose-deep mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-warm-brown mb-3">
              Be the First to Know
            </h3>
            <p className="font-sans text-warm-muted mb-6">
              The book is launching soon. Join the community and you'll receive a notification
              the moment it's available.
            </p>
            <a
              href="/subscribe"
              className="inline-flex items-center gap-2 bg-rose-deep text-white px-6 py-3 rounded-full font-sans font-bold tracking-wide transition-all hover:bg-rose-darker hover:shadow-lg no-underline"
            >
              Notify Me at Launch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
