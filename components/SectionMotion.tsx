'use client'

import { useEffect } from 'react'

export default function SectionMotion() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-arrived')
          observer.unobserve(entry.target)
        }
      }
    }, { threshold: 0.35 })

    for (const heading of document.querySelectorAll('[data-section-heading]')) {
      if (heading.getBoundingClientRect().top < window.innerHeight) continue
      observer.observe(heading)
    }

    return () => observer.disconnect()
  }, [])

  return null
}
