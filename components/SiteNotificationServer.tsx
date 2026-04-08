import { sanityClient, isSanityConfigured, ANNOUNCEMENTS_QUERY } from '@/lib/sanity'
import { announcements as localAnnouncements, type Announcement } from '@/data/announcements'
import SiteNotification from './SiteNotification'

export default async function SiteNotificationServer() {
  let announcements: Announcement[] = localAnnouncements

  if (isSanityConfigured()) {
    try {
      const fetched = await sanityClient.fetch<Announcement[]>(ANNOUNCEMENTS_QUERY)
      if (fetched !== null) announcements = fetched
    } catch {
      // network/auth error — fall back to local data silently
    }
  }

  return <SiteNotification announcements={announcements} />
}
