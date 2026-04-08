import { sanityClient, isSanityConfigured, ANNOUNCEMENTS_QUERY } from '@/lib/sanity'
import { announcements as localAnnouncements, type Announcement } from '@/data/announcements'
import SiteNotification from './SiteNotification'

export default async function SiteNotificationServer() {
  const announcements: Announcement[] = isSanityConfigured()
    ? await sanityClient.fetch<Announcement[]>(ANNOUNCEMENTS_QUERY)
    : localAnnouncements

  return <SiteNotification announcements={announcements} />
}
