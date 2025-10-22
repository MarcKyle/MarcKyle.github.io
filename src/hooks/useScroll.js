import { useState, useEffect } from 'react'

/**
 * Custom hook for detecting scroll position
 * @param {number} threshold - Scroll threshold in pixels (default: 20)
 * @returns {boolean} - Whether the page has been scrolled past the threshold
 */
export function useScroll(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
