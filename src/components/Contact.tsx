import { Mag } from './Mag'
import { secDescCls, secHCls, secNumCls, secTagCls, sectionCls } from './section'

export function Contact() {
  return (
    <section id="contact" className={sectionCls}>
      <div className={secNumCls}>05</div>
      <div className={secTagCls} data-reveal>
        Contact
      </div>
      <h2 className={secHCls} data-reveal data-reveal-delay="1">
        Let's build
        <br />
        something real.
      </h2>
      <p className={secDescCls} data-reveal data-reveal-delay="2">
        Freelance projects, collabs, or a good tech conversation — I'm in.
      </p>
      <div className="mx-auto mt-16 max-w-[840px]" data-reveal data-reveal-delay="3">
        <div className="relative overflow-hidden rounded-[32px] bg-bg p-16 text-center neu-3xl before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_50%_0%,var(--color-acc-soft),transparent_60%)] before:content-[''] max-nv:px-7 max-nv:py-10 max-md:px-5 max-md:py-8">
          <Mag
            as="a"
            href="mailto:blake22020@proton.me"
            strength={0.35}
            className="relative z-[1] mb-10 text-[clamp(20px,3.5vw,38px)] font-extrabold tracking-[-0.02em] text-acc no-underline transition-opacity duration-200 hover:opacity-75"
          >
            blake22020@proton.me
          </Mag>
          <div className="relative z-[1] flex justify-center gap-4 max-md:flex-col max-md:items-center">
            <a
              className="c-gh inline-flex items-center gap-2 rounded-[50px] border-none bg-bg px-8 py-3.5 font-mono text-[13px] font-medium text-ink no-underline neu transition-all duration-200"
              href="#"
            >
              ⌥ GitHub
            </a>
            <a
              className="c-tg inline-flex items-center gap-2 rounded-[50px] border-none px-8 py-3.5 font-mono text-[13px] font-medium no-underline neu transition-all duration-200"
              href="#"
            >
              ✈ Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
