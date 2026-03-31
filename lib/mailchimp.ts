/**
 * Server-side Mailchimp helpers.
 * All calls use process.env — credentials never reach the browser.
 *
 * Required env vars (set in .env.local):
 *   MAILCHIMP_API_KEY    — e.g. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us1
 *   MAILCHIMP_LIST_ID    — Audience ID from Mailchimp dashboard
 *   MAILCHIMP_CAMPAIGN_FOLDER_ID (optional) — for programmatic campaign creation
 *
 * The datacenter (us1, us3, etc.) is parsed from the API key suffix.
 */

function getDatacenter(): string {
  const key = process.env.MAILCHIMP_API_KEY ?? ''
  const dc = key.split('-')[1]
  if (!dc) throw new Error('MAILCHIMP_API_KEY is missing or malformed. Expected format: key-dc')
  return dc
}

function isDemoMode(): boolean {
  return (
    !process.env.MAILCHIMP_API_KEY ||
    process.env.MAILCHIMP_API_KEY === 'YOUR_API_KEY' ||
    !process.env.MAILCHIMP_LIST_ID ||
    process.env.MAILCHIMP_LIST_ID === 'YOUR_LIST_ID'
  )
}

interface SubscribeParams {
  email: string
  firstName: string
  lastName: string
  tags: string[]
}

export async function subscribeToMailchimp({
  email,
  firstName,
  lastName,
  tags,
}: SubscribeParams): Promise<void> {
  // Demo mode — simulate success so the form works before Mailchimp is configured
  if (isDemoMode()) {
    await new Promise((r) => setTimeout(r, 800))
    console.info('[Mailchimp demo] Would subscribe:', email, 'tags:', tags)
    return
  }

  const dc = getDatacenter()
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`

  const body = JSON.stringify({
    email_address: email,
    status: 'pending',           // double opt-in — change to 'subscribed' to skip confirmation email
    merge_fields: {
      FNAME: firstName,
      LNAME: lastName,
    },
    tags,
  })

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString('base64')}`,
    },
    body,
  })

  if (res.status === 400) {
    const data = await res.json()
    // Member already exists — treat as success so user doesn't get an error
    if (data.title === 'Member Exists') return
    throw new Error(data.detail ?? 'Subscription failed. Please try again.')
  }

  if (!res.ok) {
    throw new Error('Subscription failed. Please try again.')
  }
}

/**
 * Trigger a Mailchimp campaign to a specific segment/tag.
 * Called by /api/notify when a book status changes to 'available'.
 */
export async function triggerBookLaunchCampaign(bookTitle: string): Promise<void> {
  if (isDemoMode()) {
    console.info('[Mailchimp demo] Would trigger launch campaign for:', bookTitle)
    return
  }

  // NOTE: Full campaign creation requires additional Mailchimp setup.
  // Recommended approach: create a campaign template in Mailchimp dashboard,
  // then use the Campaigns API to replicate + send it here.
  // See: https://mailchimp.com/developer/marketing/api/campaigns/
  console.info('triggerBookLaunchCampaign: implement with campaign template ID from Mailchimp dashboard.')
}
