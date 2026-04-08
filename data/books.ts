export type BookStatus = 'available' | 'coming-soon' | 'preorder'
export type BookCategory = 'book' | 'journal' | 'devotional' | 'apparel' | 'stationery' | 'lifestyle'

export interface Book {
  id: string
  title: string
  subtitle?: string
  author: string
  coverImage?: string       // path in /public (e.g. '/single-details-book-cover.jpg')
  backCoverImage?: string   // path in /public — back cover for crossfade cards
  description: string
  shortDescription?: string
  features?: string[]
  status: BookStatus
  /** ISO date string — used to show "Coming [Month Year]" on coming-soon items */
  releaseDate?: string
  /** Full Amazon affiliate URL — set when status becomes 'available' or 'preorder' */
  amazonUrl?: string
  /** Amazon ASIN — used by the /api/amazon PA-API proxy for live price/rating data */
  asin?: string
  price?: string
  category: BookCategory
}

export const books: Book[] = [
  {
    id: 'single-details',
    title: 'Single Details',
    author: 'Jesula',
    coverImage: '/book-cover-new.jpg',
    description:
      'A faith-based book for every single woman who needs to know that God is not absent in this season. He is at work in it, for everything He already has for her.',
    shortDescription: 'Heal. Grow. Embrace your season with purpose.',
    features: [
      'Face heartbreak and rejection honestly',
      'Discover your identity and worth in Christ',
      'Embrace singleness as a season of preparation',
      'Do the real work of healing',
    ],
    status: 'coming-soon',
    // releaseDate: '2025-06-01',  // uncomment when date is known
    // amazonUrl: 'https://amazon.com/dp/XXXXXXXXX?tag=singledetails-20',  // add at launch
    // asin: 'XXXXXXXXX',
    category: 'book',
  },
  {
    id: 'single-details-journal',
    title: 'Single Details Prayer Journal',
    author: 'Jesula',
    coverImage: '/journal-front.jpg',
    backCoverImage: '/journal-back.jpg',
    description: 'A prayer journal to help you talk to God honestly through this season.',
    status: 'coming-soon',
    category: 'journal',
  },
  {
    id: 'single-details-tshirt',
    title: 'Single Details T-Shirt',
    author: 'Single Details',
    description:
      'Wear your faith. Soft, quality tee with the Single Details message: a reminder that you are being prepared.',
    status: 'coming-soon',
    category: 'apparel',
  },
  {
    id: 'blank-journal',
    title: 'Blank Journal',
    author: 'Single Details',
    description:
      'A beautiful blank journal for your prayers, reflections, and everything God is speaking to you.',
    status: 'coming-soon',
    category: 'journal',
  },
  {
    id: 'inspirational-pens',
    title: 'Inspirational Pens',
    author: 'Single Details',
    description: 'Write your story with purpose. Faith-inspired pens for your journaling practice.',
    status: 'coming-soon',
    category: 'stationery',
  },
  {
    id: 'single-details-mug',
    title: 'Single Details Mug',
    author: 'Single Details',
    description:
      'Start your morning with intention. This mug reminds you every sip: God is in the Single Details.',
    status: 'coming-soon',
    category: 'lifestyle',
  },
  {
    id: 'single-details-tote',
    title: 'Single Details Tote Bag',
    author: 'Single Details',
    description:
      'Carry your truth everywhere you go. Stylish, faith-filled, and made for the woman becoming whole.',
    status: 'coming-soon',
    category: 'lifestyle',
  },
]

/** Helper — get the main book (used on /book page) */
export function getMainBook(): Book {
  return books.find((b) => b.id === 'single-details')!
}

/** Helper — get all merch items (non-book category) */
export function getMerchItems(): Book[] {
  return books.filter((b) => b.category !== 'book')
}
