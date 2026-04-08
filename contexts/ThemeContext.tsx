'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme
  toggle_theme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, set_theme] = useState<Theme>('light')

  useEffect(() => {
    const stored = localStorage.getItem('sd-theme') as Theme | null
    const initial = stored ?? 'light'
    set_theme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggle_theme = () => {
    set_theme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('sd-theme', next)
      document.documentElement.classList.toggle('dark', next === 'dark')
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle_theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
