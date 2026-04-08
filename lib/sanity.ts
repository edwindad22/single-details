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

import { createClient, type SanityClient } from '@sanity/client'

export function isSanityConfigured(): boolean {
  const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  return !!id && id !== 'placeholder' && id !== 'YOUR_PROJECT_ID'
}

// Lazily created — avoids Sanity's projectId format validation when env vars are not set
let _client: SanityClient | null = null

export const sanityClient = {
  fetch<T>(query: string, params?: Record<string, string>): Promise<T> {
    if (!_client) {
      _client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
        dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
        apiVersion: '2024-01-01',
        useCdn: false,
        token: process.env.SANITY_API_TOKEN,
      })
    }
    return params
      ? _client.fetch<T>(query, params)
      : _client.fetch<T>(query)
  },
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
    "amazonUrl": amazonAffiliateUrl,
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
    "amazonUrl": amazonAffiliateUrl,
    asin,
    price,
    category,
  }
`

/** GROQ query — fetch all merch items (non-book categories) */
export const ALL_MERCH_QUERY = `
  *[_type == "book" && category != "book"] | order(_createdAt asc) {
    _id,
    title,
    author,
    "coverImage": coverImage.asset->url,
    description,
    shortDescription,
    status,
    releaseDate,
    "amazonUrl": amazonAffiliateUrl,
    asin,
    price,
    category,
  }
`

/** GROQ query — fetch the site text singleton */
export const SITE_TEXT_QUERY = `
  *[_type == "siteText"][0] {
    heroHeading,
    heroSubheading,
    heroTagline,
    storyHeading,
    storyBody,
    bookDescription,
    bookFeatures,
  }
`

/** GROQ query — fetch active announcement banners */
export const ANNOUNCEMENTS_QUERY = `
  *[_type == "announcement" && active == true] | order(_createdAt asc) {
    "id": _id,
    message,
    linkText,
    linkHref,
    active,
  }
`
