export interface Announcement {
  id: string
  message: string
  linkText?: string
  linkHref?: string
  /** Set to false to silence the notification without deleting the record */
  active: boolean
}

export const announcements: Announcement[] = [
  {
    id: 'single-details-launch',
    message: 'Single Details is launching soon on Amazon!',
    linkText: 'Get notified',
    linkHref: '/subscribe',
    active: true,
  },
]
