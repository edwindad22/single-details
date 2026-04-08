/**
 * Announcement banner schema.
 * Controls the dismissable top bar shown across the site.
 */
const announcementSchema = {
  name: 'announcement',
  title: 'Announcement Banner',
  type: 'document',
  fields: [
    {
      name: 'message',
      title: 'Message',
      type: 'string',
      description: 'Main text displayed in the banner.',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      description: 'Clickable link label (optional).',
    },
    {
      name: 'linkHref',
      title: 'Link URL',
      type: 'string',
      description: 'Internal path (e.g. /book) or full URL for the link.',
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle off to hide this banner without deleting it.',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'message',
      subtitle: 'active',
    },
    prepare(selection: Record<string, unknown>) {
      return {
        title: selection['title'] as string,
        subtitle: selection['subtitle'] ? 'Active' : 'Hidden',
      }
    },
  },
}

export default announcementSchema
