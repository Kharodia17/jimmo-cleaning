import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to all `.reveal`, `.reveal-left`,
 * `.reveal-right`, and `.reveal-scale` elements on the page.
 * When an element enters the viewport it gets the `is-visible` class,
 * which triggers the CSS transition defined in index.css.
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )

    const els = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    )
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
