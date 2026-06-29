import { useEffect, useState } from 'react'
import { MagButton } from './Mag'
import { MoonIcon, SunIcon } from './icons'

const LINKS = ['stack', 'projects', 'about', 'contact']

/** Apply/persist the theme by toggling `.dark` on <html>. */
function setTheme(dark: boolean) {
  document.documentElement.classList.toggle('dark', dark)
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

export function Nav() {
  const [dark, setDark] = useState(false)

  // sync state with the class the anti-flash script in index.html already set
  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    setDark((d) => {
      const next = !d
      setTheme(next)
      return next
    })
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-16 py-5 max-nv:px-7 max-nv:py-4 max-md:px-5 max-md:py-3.5">
      <div className="flex items-center gap-9 rounded-[50px] bg-bg px-7 py-3 neu max-md:gap-5 max-md:px-5 max-md:py-2.5">
        <span className="font-mono text-[13px] font-bold tracking-[0.05em] text-acc">./blake</span>
        <div className="flex gap-7 max-nv:hidden">
          {LINKS.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="text-xs font-semibold uppercase tracking-[0.1em] text-muted no-underline transition-colors duration-200 hover:text-ink"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
      <MagButton
        ariaLabel={dark ? 'Switch to light theme' : 'Switch to dark theme'}
        className="theme-btn grid h-12 w-12 place-items-center rounded-full bg-bg text-acc neu max-md:h-11 max-md:w-11"
        onClick={toggle}
      >
        {dark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
      </MagButton>
    </nav>
  )
}
