import type { Metadata } from 'next'
import MerchGrid from '@/components/MerchGrid'

export const metadata: Metadata = {
  title: 'Merch & Resources',
  description:
    'Shop the Single Details collection — journals, apparel, stationery, and lifestyle items to carry your faith into every room.',
}

export default function MerchPage() {
  return (
    <>
      {/* Header */}
      <section className="grad-hero-alt py-16 px-4 sm:px-6 text-center relative overflow-hidden animate-fade-in-up">
        <span className="font-sans text-xs font-bold text-sage-dark tracking-widest uppercase">
          Shop the Collection
        </span>
        <h1 className="font-serif text-4xl md:text-5xl text-warm-brown dark:text-cream mt-3 mb-4">
          Merch &amp; Resources
        </h1>
        <p className="font-sans text-warm-muted dark:text-[#E8A0B0] leading-relaxed max-w-xl mx-auto text-lg">
          Carry the message of Single Details with you. Each piece is made to
          encourage, remind, and inspire the woman carrying her faith into every room she walks into.
        </p>
      </section>

      {/* Interactive grid (client component) */}
      <MerchGrid />
    </>
  )
}
