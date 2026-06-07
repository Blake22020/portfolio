import { useMagnet } from '../hooks/useMagnet'
import type { ReactNode } from 'react'

interface MagProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'span' | 'a'
  strength?: number
  href?: string
}

/** Magnetic wrapper — the element stretches toward the cursor and springs back. */
export function Mag({ children, className, as: Tag = 'div', strength = 0.25, href }: MagProps) {
  const mag = useMagnet<HTMLElement>(strength)
  return (
    <Tag
      ref={mag.ref as never}
      className={`inline-block ${className ?? ''}`}
      href={href}
      onMouseMove={mag.onMouseMove}
      onMouseLeave={mag.onMouseLeave}
    >
      {children}
    </Tag>
  )
}

interface MagButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function MagButton({ children, className, onClick }: MagButtonProps) {
  const mag = useMagnet<HTMLButtonElement>()
  return (
    <button
      ref={mag.ref}
      className={className}
      onClick={onClick}
      onMouseMove={mag.onMouseMove}
      onMouseLeave={mag.onMouseLeave}
    >
      {children}
    </button>
  )
}
