import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { triggerBookLaunchCampaign } from '@/lib/mailchimp'

/**
 * Sanity webhook handler — called when any Book document is published.
 *
 * Sanity webhook config (set in sanity.io/manage → API → Webhooks):
 *   URL:    https://yourdomain.com/api/revalidate
 *   Method: POST
 *   Filter: _type == "book"
 *   Secret: set in Sanity dashboard — sent as header x-sanity-webhook-secret
 *
 * Payload shape from Sanity: { _type, _id, status, notifySubscribers, title }
 */
export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-sanity-webhook-secret')

  if (!process.env.SANITY_WEBHOOK_SECRET || secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()

    // Purge ISR cache for all book pages
    revalidateTag('books', 'max')

    // If the book just went live and notifySubscribers is toggled on, fire email
    if (body.status === 'available' && body.notifySubscribers === true) {
      await triggerBookLaunchCampaign(body.title ?? 'New Book')
    }

    return NextResponse.json({ revalidated: true })
  } catch {
    return NextResponse.json({ error: 'Revalidation failed' }, { status: 500 })
  }
}
