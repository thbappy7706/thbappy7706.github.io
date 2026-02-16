import { useEffect, useRef, useState } from 'react'

/**
 * Hook to add Nuxt-like page transitions to sections
 * Adds blur and fade effects when sections come into view
 */
export function useSectionTransition(options = {}) {
  const { threshold = 0.1, rootMargin = '0px' } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Once visible, stop observing (one-time animation)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [threshold, rootMargin, isVisible])

  return { ref, isVisible }
}

