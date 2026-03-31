import { NextRequest, NextResponse } from 'next/server'
import { subscribeToMailchimp } from '@/lib/mailchimp'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, firstName, lastName, notifyBooks, notifyEncouragement } = body

    // Basic server-side validation
    if (!email || typeof email !== 'string' || !email.includes('@') || email.length > 254) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
    }
    if (!firstName || typeof firstName !== 'string' || firstName.trim().length === 0 || firstName.length > 100) {
      return NextResponse.json({ error: 'First name is required.' }, { status: 400 })
    }
    if (typeof lastName === 'string' && lastName.length > 100) {
      return NextResponse.json({ error: 'Last name is too long.' }, { status: 400 })
    }

    const tags: string[] = ['all']
    if (notifyBooks)       tags.push('book-interest')
    if (notifyEncouragement) tags.push('encouragement')

    await subscribeToMailchimp({
      email: email.trim().toLowerCase(),
      firstName: firstName.trim(),
      lastName: typeof lastName === 'string' ? lastName.trim() : '',
      tags,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
