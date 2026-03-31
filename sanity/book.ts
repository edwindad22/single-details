/**
 * Sanity book schema.
 * Add this to your Sanity studio's schema index.
 *
 * Setup: npx sanity@latest init  (in a separate /studio directory)
 * Docs:  https://www.sanity.io/docs/schema-types
 */
const bookSchema = {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Coming Soon', value: 'coming-soon' },
          { title: 'Pre-order',   value: 'preorder' },
          { title: 'Available',   value: 'available' },
        ],
        layout: 'radio',
      },
      initialValue: 'coming-soon',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'notifySubscribers',
      title: 'Notify Subscribers on Publish',
      type: 'boolean',
      description:
        'Toggle ON when changing status to "available" to automatically send a launch email to subscribers. Resets after sending.',
      initialValue: false,
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'shortDescription',
      title: 'Short Description (tagline)',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Feature Bullets',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Book',        value: 'book' },
          { title: 'Journal',     value: 'journal' },
          { title: 'Devotional',  value: 'devotional' },
          { title: 'Apparel',     value: 'apparel' },
          { title: 'Stationery',  value: 'stationery' },
          { title: 'Lifestyle',   value: 'lifestyle' },
        ],
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'amazonAffiliateUrl',
      title: 'Amazon Affiliate URL',
      type: 'url',
      description: 'Add when the book goes live on Amazon. Include your affiliate tag.',
    },
    {
      name: 'asin',
      title: 'Amazon ASIN',
      type: 'string',
      description: 'Amazon Standard Identification Number — used for PA-API live data.',
    },
    {
      name: 'price',
      title: 'Price (display only)',
      type: 'string',
      description: 'e.g. $14.99 — shown on the site. Live price pulled from Amazon PA-API when available.',
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      description: 'Used to show "Coming [Month Year]" for upcoming books.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'status',
      media: 'coverImage',
    },
  },
}

export default bookSchema
