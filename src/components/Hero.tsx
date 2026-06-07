import { useEffect, useRef } from 'react'
import { useScramble } from '../hooks/useScramble'
import { MagButton } from './Mag'

const CHIPS = [
  { name: 'Full Stack', tag: 'Frontend + Backend' },
  { name: 'Open Source', tag: 'Contributor' },
  { name: 'Linux User', tag: 'Arch / Ubuntu' },
]

const ORB_GRADIENT = 'bg-[radial-gradient(circle,var(--color-acc-glow),transparent_70%)]'

export function Hero() {
  const name = useScramble('BLAKE', 600)
  const role = useScramble('WRITES CODE.', 1200)
  const orbRef = useRef<HTMLElement>(null)

  // parallax orbs follow the mouse
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!orbRef.current) return
      const orbs = orbRef.current.querySelectorAll<HTMLElement>('.hero-orb')
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      if (orbs[0]) orbs[0].style.transform = `translate(${dx * -28}px, ${dy * -18}px)`
      if (orbs[1]) orbs[1].style.transform = `translate(${dx * 22}px, ${dy * 14}px)`
      if (orbs[2]) orbs[2].style.transform = `translate(${dx * -16}px, ${dy * 22}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <section
      id="home"
      ref={orbRef}
      className="relative grid min-h-screen grid-cols-[1fr_auto] grid-rows-[auto_auto] items-center gap-x-20 overflow-hidden px-16 pt-[140px] pb-20 max-nv:gap-x-10 max-nv:px-8 max-nv:pt-[120px] max-nv:pb-15 max-md:min-h-0 max-md:grid-cols-1 max-md:grid-rows-none max-md:gap-10 max-md:px-5 max-md:pt-[110px] max-md:pb-15"
    >
      <div
        className={`hero-orb pointer-events-none absolute -top-20 right-[100px] h-[400px] w-[400px] rounded-full opacity-50 blur-[60px] transition-transform duration-[60ms] ease-out ${ORB_GRADIENT}`}
      />
      <div className="hero-orb pointer-events-none absolute bottom-20 left-20 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,oklch(0.72_0.15_280_/_0.12),transparent_70%)] opacity-50 blur-[60px] transition-transform duration-[60ms] ease-out" />
      <div
        className={`hero-orb pointer-events-none absolute right-[360px] bottom-40 h-[200px] w-[200px] rounded-full opacity-50 blur-[60px] transition-transform duration-[60ms] ease-out ${ORB_GRADIENT}`}
      />

      <div>
        <div
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-muted"
          data-reveal
        >
          <span className="h-px w-10 bg-acc" />
          Full-Stack Developer — 14 yrs old
        </div>
        <h1
          className="text-[clamp(72px,8.5vw,128px)] font-extrabold leading-[0.9] tracking-[-0.04em] text-ink max-md:text-[clamp(52px,14vw,80px)]"
          data-reveal
          data-reveal-delay="1"
        >
          {name}
          <br />
          <span className="text-acc">{role}</span>
        </h1>
        <p
          className="mt-8 max-w-[380px] font-mono text-sm leading-[1.8] text-muted"
          data-reveal
          data-reveal-delay="2"
        >
          Building <b className="text-ink">real products</b> end-to-end — from database schemas to
          Docker deploys. TypeScript, React, Node.js, Linux.
        </p>
        <div
          className="mt-11 flex items-center gap-4 max-md:flex-col max-md:gap-3"
          data-reveal
          data-reveal-delay="3"
        >
          <MagButton
            className="btn-main rounded-[50px] border-none bg-acc px-9 py-4 text-center font-display text-sm font-bold tracking-[0.02em] text-white max-md:w-full"
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            See My Work
          </MagButton>
          <MagButton
            className="rounded-[50px] border-none bg-bg px-9 py-4 text-center font-display text-sm font-bold text-muted neu-md transition-all duration-200 hover:text-ink max-md:w-full"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Get in Touch ↓
          </MagButton>
        </div>
        <div
          className="col-start-1 mt-15 flex items-center gap-3.5 self-end font-mono text-[11px] tracking-[0.12em] text-muted"
          data-reveal
          data-reveal-delay="4"
        >
          <span className="scroll-line" />
          <span>SCROLL TO EXPLORE</span>
        </div>
      </div>

      <div
        className="col-start-2 row-span-2 row-start-1 w-[340px] self-center rounded-[28px] bg-bg p-8 neu-2xl max-nv:w-[280px] max-md:col-start-1 max-md:row-auto max-md:w-full"
        data-reveal
        data-reveal-delay="2"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.1em] text-muted">PROFILE</span>
          <span className="flex items-center gap-[7px] font-mono text-[11px] text-acc">
            <span className="h-[7px] w-[7px] rounded-full bg-acc animate-pulse-dot" />
            AVAILABLE
          </span>
        </div>
        <div className="mb-5 rounded-[18px] bg-bg p-7 text-center neu-in-lg">
          <div className="text-[72px] font-extrabold leading-none tracking-[-0.04em] text-acc max-nv:text-[56px]">
            14
          </div>
          <div className="mt-1 font-mono text-[11px] tracking-[0.1em] text-muted">YEARS OLD</div>
        </div>
        <div className="flex flex-col gap-2.5">
          {CHIPS.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between rounded-xl bg-bg px-4 py-3 neu-sm"
            >
              <span className="text-[13px] font-semibold">{c.name}</span>
              <span className="font-mono text-[10px] tracking-[0.08em] text-muted">{c.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
