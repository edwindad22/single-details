import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import bookSchema from './sanity/book'
import siteTextSchema from './sanity/siteText'
import announcementSchema from './sanity/announcement'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ''
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET    ?? 'production'

export default defineConfig({
  name: 'single-details-studio',
  title: 'Single Details',
  projectId,
  dataset,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singleton — only one Site Text document allowed
            S.listItem()
              .title('Site Text')
              .id('siteText')
              .child(
                S.document()
                  .schemaType('siteText')
                  .documentId('siteText')
              ),
            S.divider(),
            S.documentTypeListItem('book').title('Books & Merch'),
            S.documentTypeListItem('announcement').title('Announcement Banners'),
          ]),
    }),
  ],

  schema: {
    types: [bookSchema, siteTextSchema, announcementSchema],
  },
})
