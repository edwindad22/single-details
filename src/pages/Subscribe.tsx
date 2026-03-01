import { BookOpen, Star, Heart, Leaf } from 'lucide-react'
import EmailCapture from '../components/EmailCapture'

const gifts = [
  {
    number: '01',
    icon: <BookOpen className="w-7 h-7 text-rose-deep" />,
    title: '5 Journal Prompts for Wholeness',
    desc: 'Five questions to help you think honestly about who you are, where you are healing, and what you are called to.',
    color: 'bg-blush-light border-blush',
    iconBg: 'bg-white',
  },
  {
    number: '02',
    icon: <Star className="w-7 h-7 text-sage-dark" />,
    title: '7-Day Mind Renewal Scripture Guide',
    desc: 'Seven days, seven Scriptures, and seven declarations to renew your mind and stand firm in truth.',
    color: 'bg-sage/10 border-sage/30',
    iconBg: 'bg-white',
  },
  {
    number: '03',
    icon: <Heart className="w-7 h-7 text-rose" />,
    title: '"Becoming Whole Before Love" Mini Devotional',
    desc: 'A short devotional through healing, identity, and surrender — so you walk into every season whole.',
    color: 'bg-blush-light border-blush',
    iconBg: 'bg-white',
  },
]

const testimonials = [
  {
    quote:
      "This community reminded me that my season has purpose. I stopped seeing singleness as something to escape and started seeing it as a gift.",
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

export default function Subscribe() {
  return (
    <main className="flex-1 bg-cream">
      {/* Header */}
      <section
        className="py-20 px-4 sm:px-6 text-center"
        style={{ background: 'linear-gradient(135deg, #FDF8F3 0%, #F9EEF3 60%, #F2C4CE 100%)' }}
      >
        <div className="inline-flex items-center gap-2 bg-blush/40 border border-blush rounded-full px-4 py-1.5 mb-8">
          <Leaf className="w-4 h-4 text-sage-dark" />
          <span className="font-sans text-xs font-bold text-warm-muted tracking-widest uppercase">
            Single Details Community
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-warm-brown mb-4 leading-tight">
          You Are Not Here by Accident
        </h1>
        <p className="font-sans text-warm-muted text-lg leading-relaxed max-w-2xl mx-auto">
          If you are here, it is because something in your heart knows this season means more.
          Join the Single Details community and receive your free gift — a collection of resources
          to encourage, strengthen, and remind you that God is working in every detail.
        </p>
      </section>

      {/* Free gift cards */}
      <section className="bg-cream py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-sans text-xs font-bold text-rose tracking-widest uppercase">
              Your Free Welcome Gift
            </span>
            <h2 className="font-serif text-3xl text-warm-brown mt-2">
              What You'll Receive When You Join
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
                  <div className={`w-12 h-12 rounded-full ${gift.iconBg} border border-blush flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    {gift.icon}
                  </div>
                </div>
                <h3 className="font-serif text-xl text-warm-brown leading-snug">{gift.title}</h3>
                <p className="font-sans text-sm text-warm-muted leading-relaxed">{gift.desc}</p>
              </div>
            ))}
          </div>

          {/* Plus more */}
          <div className="bg-cream-dark rounded-2xl p-6 text-center mb-12">
            <p className="font-sans text-warm-muted leading-relaxed">
              <strong className="text-warm-brown">Plus,</strong> as a community member you'll
              be the first to hear about book updates, launch announcements, events, and
              blog posts — all to keep you fed and close to God.
            </p>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section
        className="py-16 px-4 sm:px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3D1520 0%, #A8405A 60%, #C97080 100%)' }}
      >
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

          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <EmailCapture compact />
          </div>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section className="bg-cream-medium py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-warm-brown">What Sisters Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl border border-blush p-7 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-rose fill-rose" />
                  ))}
                </div>
                <p className="font-serif text-warm-muted italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="mt-auto">
                  <p className="font-sans text-sm font-bold text-warm-brown">{t.name}</p>
                  <p className="font-sans text-xs text-warm-light">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture footer */}
      <section className="bg-cream py-14 px-4 text-center">
        <blockquote className="scripture max-w-2xl mx-auto text-center border-l-0 pl-0 border-t-2 border-rose/30 pt-6">
          <p className="font-serif text-xl text-warm-muted leading-relaxed">
            "Now to Him who is able to do exceedingly abundantly above all that we ask or think,
            according to the power that works in us…"
          </p>
          <footer className="font-sans text-sm text-rose-deep font-bold not-italic mt-3">
            — Ephesians 3:20
          </footer>
        </blockquote>
      </section>
    </main>
  )
}
