import { useCallback, useRef } from 'react'
import type { MouseEvent, RefObject } from 'react'

interface MagnetHandlers<T extends HTMLElement> {
  ref: RefObject<T>
  onMouseMove: (e: MouseEvent<T>) => void
  onMouseLeave: () => void
}

/** Magnetic pull toward the cursor with a springy release. */
export function useMagnet<T extends HTMLElement = HTMLButtonElement>(
  strength = 0.3,
): MagnetHandlers<T> {
  const ref = useRef<T>(null)
  const onMouseMove = useCallback(
    (e: MouseEvent<T>) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - (r.left + r.width / 2)) * strength
      const y = (e.clientY - (r.top + r.height / 2)) * strength
      el.style.transform = `translate(${x}px, ${y}px)`
    },
    [strength],
  )
  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)'
    el.style.transform = ''
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = ''
    }, 400)
  }, [])
  return { ref, onMouseMove, onMouseLeave }
}
