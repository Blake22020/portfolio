import { useEffect } from 'react'

/**
 * Scroll-reveal for all [data-reveal] elements. Elements already in the
 * viewport become visible immediately; the rest animate in on scroll.
 */
export function useReveal(): void {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
    )
    const attach = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visible')
        } else {
          obs.observe(el)
        }
      })
    }
    const tid = setTimeout(attach, 300)
    return () => {
      clearTimeout(tid)
      obs.disconnect()
    }
  }, [])
}
