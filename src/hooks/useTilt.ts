import { useCallback, useRef } from 'react'
import type { MouseEvent, RefObject } from 'react'

interface TiltHandlers<T extends HTMLElement> {
  ref: RefObject<T>
  onMouseMove: (e: MouseEvent<T>) => void
  onMouseLeave: () => void
}

/** 3D perspective tilt that follows the mouse; also drives the .proj-glow spotlight. */
export function useTilt<T extends HTMLElement = HTMLDivElement>(strength = 12): TiltHandlers<T> {
  const ref = useRef<T>(null)
  const onMouseMove = useCallback(
    (e: MouseEvent<T>) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height - 0.5
      el.style.transform = `perspective(900px) rotateY(${x * strength}deg) rotateX(${-y * strength}deg) scale(1.02)`
      const glow = el.querySelector<HTMLElement>('.proj-glow')
      if (glow) {
        glow.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
        glow.style.setProperty('--my', `${(y + 0.5) * 100}%`)
      }
    },
    [strength],
  )
  const onMouseLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = ''
  }, [])
  return { ref, onMouseMove, onMouseLeave }
}
