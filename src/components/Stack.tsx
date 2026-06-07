import { STACK } from '../data'
import { Mag } from './Mag'
import { secDescCls, secHCls, secNumCls, secTagCls, sectionCls } from './section'

export function Stack() {
  return (
    <section id="stack" className={sectionCls}>
      <div className={secNumCls}>02</div>
      <div className={secTagCls} data-reveal>
        Tech Stack
      </div>
      <h2 className={secHCls} data-reveal data-reveal-delay="1">
        <Mag as="span" strength={0.18}>
          Tools I live in.
        </Mag>
      </h2>
      <p className={secDescCls} data-reveal data-reveal-delay="2">
        Every tool chosen with intent. Typed, containerised, deployed.
      </p>
      <div className="mt-16 flex flex-col gap-9">
        {STACK.map((cat, ci) => (
          <div key={cat.cat} data-reveal data-reveal-delay={ci + 2}>
            <div className="mb-4 pl-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              {cat.cat}
            </div>
            <div className="flex flex-wrap gap-3.5 max-md:gap-2.5">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="s-card flex cursor-default items-center gap-3.5 rounded-[18px] bg-bg px-[26px] py-5 neu-md max-md:px-[18px] max-md:py-3.5"
                >
                  <div className="s-icon flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-bg font-mono text-[13px] font-bold text-acc neu-xs">
                    {item.sym}
                  </div>
                  <div>
                    <div className="text-sm font-bold">{item.name}</div>
                    <div className="mt-0.5 font-mono text-[10px] tracking-[0.08em] text-muted">
                      {item.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
