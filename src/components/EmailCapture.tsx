import { useState } from 'react'
import { CheckCircle, AlertCircle, Loader } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// MAILCHIMP CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────
// To connect your Mailchimp list:
// 1. Log in to Mailchimp
// 2. Go to Audience → Signup Forms → Embedded Forms
// 3. Find your form action URL — it looks like:
//    https://youruser.us1.list-manage.com/subscribe/post?u=XXXX&id=YYYY
// 4. Replace the values below with your actual U and LIST_ID values.
//
// Until configured, the form runs in DEMO mode (shows success without sending).
// ─────────────────────────────────────────────────────────────────────────────
const MAILCHIMP_DATACENTER = 'us1'       // e.g. us1, us3, us19 — from your form URL
const MAILCHIMP_U = 'YOUR_U_VALUE'       // the ?u= value from your form action URL
const MAILCHIMP_LIST_ID = 'YOUR_LIST_ID' // the &id= value from your form action URL

interface EmailCaptureProps {
  title?: string
  subtitle?: string
  compact?: boolean
}

function subscribeToMailchimp(data: { email: string; firstName: string; lastName: string }) {
  return new Promise<void>((resolve, reject) => {
    const isDemoMode = MAILCHIMP_U === 'YOUR_U_VALUE' || MAILCHIMP_LIST_ID === 'YOUR_LIST_ID'

    if (isDemoMode) {
      // Demo mode — simulates a successful subscription so you can see the UI
      setTimeout(() => resolve(), 1200)
      return
    }

    const callbackName = `mc_${Date.now()}`

    const win = window as unknown as Record<string, unknown>

    win[callbackName] = (response: { result: string; msg: string }) => {
      delete win[callbackName]
      if (script.parentNode) script.parentNode.removeChild(script)
      if (response.result === 'success') {
        resolve()
      } else {
        // Strip Mailchimp's HTML error tags for clean display
        const msg = response.msg.replace(/<[^>]*>/g, '').replace(/^\d+ - /, '')
        reject(new Error(msg))
      }
    }

    const params = new URLSearchParams({
      u: MAILCHIMP_U,
      id: MAILCHIMP_LIST_ID,
      EMAIL: data.email,
      FNAME: data.firstName,
      LNAME: data.lastName,
      c: callbackName,
    })

    const baseUrl = `https://${MAILCHIMP_DATACENTER}.list-manage.com/subscribe/post-json`
    const script = document.createElement('script')
    script.src = `${baseUrl}?${params.toString()}`
    script.onerror = () => {
      delete win[callbackName]
      reject(new Error('Network error — please try again.'))
    }
    document.body.appendChild(script)
  })
}

export default function EmailCapture({ title, subtitle, compact = false }: EmailCaptureProps) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !firstName) return

    setStatus('loading')
    setErrorMsg('')

    try {
      await subscribeToMailchimp({ email, firstName, lastName })
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center gap-4 py-8 text-center">
        <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-sage-dark" />
        </div>
        <h3 className="font-serif text-2xl text-warm-brown">You're In, Beautiful Sister!</h3>
        <p className="font-sans text-warm-muted max-w-sm leading-relaxed">
          Check your inbox for a welcome message and your free gift. I'm so glad you're here.
        </p>
        <p className="font-sans text-xs text-warm-light italic">
          (Don't see it? Check your spam or promotions folder.)
        </p>
      </div>
    )
  }

  return (
    <div className={compact ? '' : 'max-w-lg mx-auto'}>
      {title && (
        <h3 className="font-serif text-2xl md:text-3xl text-warm-brown text-center mb-2">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="font-sans text-warm-muted text-center mb-6 leading-relaxed">
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-sans text-sm font-bold text-warm-muted" htmlFor="firstName">
              First Name <span className="text-rose-deep">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Your first name"
              className="px-4 py-3 rounded-xl border border-blush bg-white font-sans text-warm-brown placeholder-warm-light focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/20 transition-all"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-sans text-sm font-bold text-warm-muted" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Your last name"
              className="px-4 py-3 rounded-xl border border-blush bg-white font-sans text-warm-brown placeholder-warm-light focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/20 transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-sans text-sm font-bold text-warm-muted" htmlFor="email">
            Email Address <span className="text-rose-deep">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="px-4 py-3 rounded-xl border border-blush bg-white font-sans text-warm-brown placeholder-warm-light focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/20 transition-all"
          />
        </div>

        {status === 'error' && (
          <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700">
            <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="font-sans text-sm">{errorMsg}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-rose-deep text-white py-3.5 rounded-xl font-sans font-bold tracking-wide transition-all duration-200 hover:bg-rose-darker hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
        >
          {status === 'loading' ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              Joining…
            </>
          ) : (
            'Send My Free Gift!'
          )}
        </button>

        <p className="font-sans text-xs text-warm-light text-center">
          No spam. Ever. Unsubscribe anytime.
        </p>
      </form>
    </div>
  )
}
