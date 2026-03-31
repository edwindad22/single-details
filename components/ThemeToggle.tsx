'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle_theme } = useTheme()

  return (
    <button
      onClick={toggle_theme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border border-blush dark:border-rose-deep/40 text-warm-muted dark:text-blush hover:text-rose-deep dark:hover:text-rose hover:bg-blush-light dark:hover:bg-rose-deep/10"
    >
      {theme === 'dark'
        ? <Sun className="w-4 h-4" />
        : <Moon className="w-4 h-4" />
      }
    </button>
  )
}
