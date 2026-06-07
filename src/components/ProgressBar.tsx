import { useEffect, useRef } from 'react'

/** Thin gradient scroll-progress bar fixed to the top of the page. */
export function ProgressBar() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      ref.current.style.width = `${p * 100}%`
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-1001 h-[3px] w-0 bg-linear-90 from-acc to-acc2 shadow-[0_0_12px_var(--color-acc-glow)] transition-[width] duration-100 ease-linear"
    />
  )
}
