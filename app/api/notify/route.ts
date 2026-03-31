import { NextRequest, NextResponse } from 'next/server'
import { triggerBookLaunchCampaign } from '@/lib/mailchimp'

/**
 * Manual trigger endpoint — POST to send a book launch email campaign.
 * Useful for testing or triggering manually outside of Sanity webhooks.
 *
 * Body: { secret: string, bookTitle: string }
 */
export async function POST(req: NextRequest) {
  try {
    const { secret, bookTitle } = await req.json()

    if (!process.env.NOTIFY_SECRET || secret !== process.env.NOTIFY_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (!bookTitle || typeof bookTitle !== 'string') {
      return NextResponse.json({ error: 'bookTitle is required' }, { status: 400 })
    }

    await triggerBookLaunchCampaign(bookTitle)

    return NextResponse.json({ sent: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to send notification'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
