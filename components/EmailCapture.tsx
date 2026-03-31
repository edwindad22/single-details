'use client'

import { useState } from 'react'
import { CheckCircle, AlertCircle, Loader } from 'lucide-react'

interface EmailCaptureProps {
  title?: string
  subtitle?: string
  compact?: boolean
}

export default function EmailCapture({ title, subtitle, compact = false }: EmailCaptureProps) {
  const [firstName, setFirstName]                 = useState('')
  const [lastName,  setLastName]                  = useState('')
  const [email,     setEmail]                     = useState('')
  const [notifyBooks,         setNotifyBooks]         = useState(true)
  const [notifyEncouragement, setNotifyEncouragement] = useState(true)
  const [status,    setStatus]   = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg,  setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !firstName) return

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, lastName, notifyBooks, notifyEncouragement }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong. Please try again.')
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
        <h3 className="font-serif text-2xl text-warm-brown dark:text-cream">You&apos;re In, Beautiful Sister!</h3>
        <p className="font-sans text-warm-muted dark:text-[#C09AA8] max-w-sm leading-relaxed">
          Check your inbox for a welcome message and your free gift. I&apos;m so glad you&apos;re here.
        </p>
        <p className="font-sans text-xs text-warm-light dark:text-[#9B7A88] italic">
          (Don&apos;t see it? Check your spam or promotions folder.)
        </p>
      </div>
    )
  }

  const input_class = "px-4 py-3 rounded-xl border border-blush dark:border-[#3D1F30] bg-white dark:bg-[#1C1218] font-sans text-warm-brown dark:text-cream placeholder-warm-light dark:placeholder-[#6B4A58] focus:outline-none focus:border-rose focus:ring-2 focus:ring-rose/20 transition-all"

  return (
    <div className={compact ? '' : 'max-w-lg mx-auto'}>
      {title && (
        <h3 className="font-serif text-2xl md:text-3xl text-warm-brown dark:text-cream text-center mb-2">
          {title}
        </h3>
      )}
      {subtitle && (
        <p className="font-sans text-warm-muted dark:text-[#C09AA8] text-center mb-6 leading-relaxed">
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" suppressHydrationWarning>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-sans text-sm font-bold text-warm-muted dark:text-[#C09AA8]" htmlFor="firstName">
              First Name <span className="text-rose-deep">*</span>
            </label>
            <input
              id="firstName"
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Your first name"
              className={input_class}
              suppressHydrationWarning
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-sans text-sm font-bold text-warm-muted dark:text-[#C09AA8]" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Your last name"
              className={input_class}
              suppressHydrationWarning
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-sans text-sm font-bold text-warm-muted dark:text-[#C09AA8]" htmlFor="email">
            Email Address <span className="text-rose-deep">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={input_class}
            suppressHydrationWarning
          />
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <p className="font-sans text-sm font-bold text-warm-muted dark:text-[#C09AA8]">I&apos;d like to receive:</p>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={notifyBooks}
              onChange={(e) => setNotifyBooks(e.target.checked)}
              className="accent-rose-deep w-4 h-4"
            />
            <span className="font-sans text-sm text-warm-muted dark:text-[#C09AA8]">
              Book launch &amp; new release notifications
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={notifyEncouragement}
              onChange={(e) => setNotifyEncouragement(e.target.checked)}
              className="accent-rose-deep w-4 h-4"
            />
            <span className="font-sans text-sm text-warm-muted dark:text-[#C09AA8]">
              Weekly words of encouragement
            </span>
          </label>
        </div>

        {status === 'error' && (
          <div className="flex items-start gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300">
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

        <p className="font-sans text-xs text-warm-light dark:text-[#9B7A88] text-center">
          No spam. Ever. Unsubscribe anytime.
        </p>
      </form>
    </div>
  )
}
