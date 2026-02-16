import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for Nuxt UI-like scroll fade animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Object} - { ref, isVisible }
 */
export function useScrollFade(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options

  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

/**
 * Hook for staggered children animations
 */
export function useStaggeredFade(itemCount, options = {}) {
  const { delay = 100, threshold = 0.1 } = options
  const { ref, isVisible } = useScrollFade({ threshold })
  
  const getDelay = (index) => {
    return isVisible ? `${index * delay}ms` : '0ms'
  }

  return { ref, isVisible, getDelay }
}

