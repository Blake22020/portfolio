import { MagButton } from './Mag'

const LINKS = ['stack', 'projects', 'about', 'contact']

export function Nav() {
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
        className="mag-btn block rounded-[50px] border-none bg-bg px-7 py-[13px] font-display text-[13px] font-bold text-acc neu max-md:px-5 max-md:py-[11px] max-md:text-xs"
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        hire_me()
      </MagButton>
    </nav>
  )
}
