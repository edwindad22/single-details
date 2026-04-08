'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, BookOpen } from 'lucide-react'
import type { Announcement } from '@/data/announcements'

export default function SiteNotification({ announcements }: { announcements: Announcement[] }) {
  const active = announcements.filter((a) => a.active)

  // Always start with [] so server and client first render match,
  // then load dismissed ids from sessionStorage after hydration.
  const [dismissed, setDismissed] = useState<string[]>([])

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem('dismissed-notifications')
      if (stored) setDismissed(JSON.parse(stored))
    } catch {
      // sessionStorage unavailable — no-op
    }
  }, [])

  const dismiss = (id: string) => {
    const next = [...dismissed, id]
    setDismissed(next)
    try {
      sessionStorage.setItem('dismissed-notifications', JSON.stringify(next))
    } catch {
      // storage unavailable — dismiss reflected in local state only
    }
  }

  const visible = active.filter((a) => !dismissed.includes(a.id))
  if (visible.length === 0) return null

  const note = visible[0]

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-slide-down relative z-50 w-full bg-rose-deep text-white px-4 py-2.5 flex items-center justify-center gap-3 text-sm font-sans"
    >
      <BookOpen className="w-4 h-4 flex-shrink-0 opacity-80" />
      <span className="font-medium">{note.message}</span>
      {note.linkHref && note.linkText && (
        <Link
          href={note.linkHref}
          className="underline underline-offset-2 font-bold hover:opacity-80 transition-opacity"
        >
          {note.linkText}
        </Link>
      )}
      <button
        onClick={() => dismiss(note.id)}
        aria-label="Dismiss notification"
        className="ml-auto flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
