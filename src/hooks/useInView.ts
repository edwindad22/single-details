import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a boolean that becomes true once the element
 * enters the viewport. Fires once and disconnects the observer.
 *
 * Generic so it works with any HTML element:
 *   const { ref, inView } = useInView<HTMLDivElement>()
 */
export function useInView<T extends Element = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, inView }
}
