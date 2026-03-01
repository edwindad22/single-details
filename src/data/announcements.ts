export interface Announcement {
  id: string
  message: string
  linkText?: string
  linkHref?: string
  /** Set to false to silence the notification without deleting the record */
  active: boolean
}

/**
 * Add an entry here whenever a new book or resource goes live.
 * Set active: true to show the banner; false to hide it silently.
 */
export const announcements: Announcement[] = [
  {
    id: 'single-details-launch',
    message: 'Single Details is launching soon on Amazon!',
    linkText: 'Get notified',
    linkHref: '/subscribe',
    active: true,
  },
]
