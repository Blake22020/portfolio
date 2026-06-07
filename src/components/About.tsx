import { useCountUp } from '../hooks/useCountUp'
import { secHCls, secNumCls, secTagCls, sectionCls } from './section'

interface Stat {
  n: number | string
  suffix?: string
  l: string
}

const STATS: Stat[] = [
  { n: 3, suffix: '+', l: 'years of coding' },
  { n: 10, suffix: '+', l: 'technologies mastered' },
  { n: '∞', l: 'curiosity & drive' },
]

function StatCard({ s, idx }: { s: Stat; idx: number }) {
  const isNum = typeof s.n === 'number'
  const counter = useCountUp(isNum ? (s.n as number) : 0, s.suffix)
  return (
    <div
      className="stat-card cursor-default rounded-[20px] bg-bg px-8 py-7 neu-md"
      data-reveal
      data-reveal-delay={idx + 2}
    >
      <div
        className="stat-n inline-block text-5xl font-extrabold leading-none tracking-[-0.03em] text-acc"
        ref={isNum ? counter.ref : null}
      >
        {isNum ? counter.display : <span className="inline-block animate-stat-spin">{s.n}</span>}
      </div>
      <div className="mt-1.5 font-mono text-xs tracking-[0.08em] text-muted">{s.l}</div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className={sectionCls}>
      <div className={secNumCls}>04</div>
      <div className={secTagCls} data-reveal>
        About
      </div>
      <h2 className={secHCls} data-reveal data-reveal-delay="1">
        The dev behind it.
      </h2>
      <div className="mt-16 grid grid-cols-1 items-start gap-16 max-nv:gap-6">
        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-md:gap-3">
          {STATS.map((s, i) => (
            <StatCard key={s.l} s={s} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
