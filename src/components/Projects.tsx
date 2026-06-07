import { PROJECTS } from '../data'
import type { Project } from '../data'
import { useTilt } from '../hooks/useTilt'
import { Mag } from './Mag'
import { secDescCls, secHCls, secNumCls, secTagCls, sectionCls } from './section'

function ProjCard({ p }: { p: Project }) {
  const tilt = useTilt<HTMLDivElement>(8)
  return (
    <div
      className="proj-card relative overflow-hidden rounded-[28px] bg-bg p-10 neu-xl max-md:p-7"
      data-reveal
      data-reveal-delay={p.num}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
    >
      <div className="proj-glow" />
      <div className="mb-8 font-mono text-[11px] tracking-[0.12em] text-muted">
        PROJECT {p.num}
      </div>
      <h3 className="mb-3.5 text-[26px] font-extrabold tracking-[-0.02em]">{p.name}</h3>
      <p className="mb-7 text-sm leading-[1.75] text-muted">{p.desc}</p>
      <div className="mb-8 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-[50px] bg-bg px-3.5 py-1.5 font-mono text-[11px] tracking-[0.06em] text-muted neu-xs"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          className="proj-btn primary inline-flex items-center gap-1.5 rounded-[50px] bg-acc px-[26px] py-[13px] font-mono text-xs font-medium tracking-[0.04em] text-white no-underline"
          href={p.site}
          target="_blank"
          rel="noopener"
        >
          Visit Site ↗
        </a>
        <a
          className="proj-btn inline-flex items-center gap-1.5 rounded-[50px] bg-bg px-[26px] py-[13px] font-mono text-xs font-medium tracking-[0.04em] text-ink no-underline neu-sm"
          href={p.github}
          target="_blank"
          rel="noopener"
        >
          GitHub ↗
        </a>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className={sectionCls}>
      <div className={secNumCls}>03</div>
      <div className={secTagCls} data-reveal>
        Projects
      </div>
      <h2 className={secHCls} data-reveal data-reveal-delay="1">
        <Mag as="span" strength={0.18}>
          Things I've built.
        </Mag>
      </h2>
      <p className={secDescCls} data-reveal data-reveal-delay="2">
        One project, done right. Real code, shipped to production.
      </p>
      <div className="mt-16 grid max-w-[680px] grid-cols-1 gap-6 max-md:gap-4">
        {PROJECTS.map((p) => (
          <ProjCard key={p.num} p={p} />
        ))}
      </div>
    </section>
  )
}
