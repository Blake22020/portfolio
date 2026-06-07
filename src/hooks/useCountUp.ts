import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

interface CountUp {
  ref: RefObject<HTMLDivElement>
  display: string
}

/** Counts from 0 to `target` with ease-out once the element enters the viewport. */
export function useCountUp(target: number, suffix = ''): CountUp {
  const ref = useRef<HTMLDivElement>(null)
  const [val, setVal] = useState(0)
  const done = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true
            const dur = 1100
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1)
              const eased = 1 - Math.pow(1 - p, 3)
              setVal(Math.round(eased * target))
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])
  return { ref, display: `${val}${suffix}` }
}
