/**
 * Sanity client + GROQ queries.
 *
 * Required env vars (set in .env.local):
 *   NEXT_PUBLIC_SANITY_PROJECT_ID  — from sanity.io/manage
 *   NEXT_PUBLIC_SANITY_DATASET     — typically 'production'
 *   SANITY_API_TOKEN               — read-only token for ISR fetches
 *
 * Until Sanity is set up, all queries fall back to the local books.ts data.
 */

import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'placeholder',
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET    ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // false = always fresh for ISR revalidation
  token: process.env.SANITY_API_TOKEN,
})

export function isSanityConfigured(): boolean {
  return (
    !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'placeholder'
  )
}

/** GROQ query — fetch all books ordered by release date */
export const ALL_BOOKS_QUERY = `
  *[_type == "book"] | order(releaseDate asc) {
    _id,
    title,
    author,
    "coverImage": coverImage.asset->url,
    description,
    shortDescription,
    features,
    status,
    releaseDate,
    amazonAffiliateUrl,
    asin,
    price,
    category,
    notifySubscribers,
  }
`

/** GROQ query — fetch single book by slug */
export const BOOK_BY_SLUG_QUERY = `
  *[_type == "book" && slug.current == $slug][0] {
    _id,
    title,
    author,
    "coverImage": coverImage.asset->url,
    description,
    shortDescription,
    features,
    status,
    releaseDate,
    amazonAffiliateUrl,
    asin,
    price,
    category,
  }
`
