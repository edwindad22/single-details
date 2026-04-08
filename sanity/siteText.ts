/**
 * Singleton document for all editable site text.
 * Only one instance of this document should exist (enforced by the studio config).
 */
const siteTextSchema = {
  name: 'siteText',
  title: 'Site Text',
  type: 'document',
  fields: [
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'Main headline on the home page hero.',
    },
    {
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 3,
      description: 'Supporting paragraph beneath the hero headline.',
    },
    {
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
      description: 'Small italic line at the bottom of the hero (e.g. "God is in the Single Details.")',
    },
    {
      name: 'storyHeading',
      title: 'Story Section Heading',
      type: 'string',
      description: 'Heading for the "Why This Book Was Written" section.',
    },
    {
      name: 'storyBody',
      title: 'Story Section Body',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Full body text for the story section. Supports bold, italic, and paragraph breaks.',
    },
    {
      name: 'bookDescription',
      title: 'Book Description',
      type: 'text',
      rows: 4,
      description: 'Main description shown on the /book page.',
    },
    {
      name: 'bookFeatures',
      title: 'Book Feature Bullets',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Feature list shown on the /book page.',
    },
  ],
  preview: {
    prepare() {
      return { title: 'Site Text' }
    },
  },
}

export default siteTextSchema
