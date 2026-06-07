import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%'

/** Decodes `text` with a character-scramble animation after `delay` ms. */
export function useScramble(text: string, delay = 400): string {
  const [out, setOut] = useState('')
  useEffect(() => {
    let iter = 0
    let intervalId: ReturnType<typeof setInterval> | undefined
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        setOut(
          text
            .split('')
            .map((c, i) => {
              if (c === ' ') return ' '
              if (i < iter) return text[i]
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join(''),
        )
        iter += 0.5
        if (iter >= text.length) {
          setOut(text)
          clearInterval(intervalId)
        }
      }, 30)
    }, delay)
    return () => {
      clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [text, delay])
  return out
}
