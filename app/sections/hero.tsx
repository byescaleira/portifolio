import {
  Chevron,
  Comet,
  LiveDot,
  Nebula,
  OrbitalConsole,
  Starfield,
} from "../components/illustrations";

/**
 * No REVEAL animation in the hero, deliberately. This is the first thing a
 * visitor sees; it must be on screen the instant the HTML lands, with or
 * without JS. All the motion here is ORBITAL — continuous, and it never
 * hides anything.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-6 pb-20 pt-20 md:px-12 md:pb-24 md:pt-24">
      <Starfield />
      <Nebula className="-right-16 -top-32 h-[760px] w-[900px]" />
      <Comet className="right-32 top-10" />

      <div className="relative mx-auto max-w-[1120px]">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_1fr]">
          <div>
            <p className="t-eyebrow flex items-center gap-2.5">
              <LiveDot />
              iOS Specialist · Globo
            </p>

            <h1 className="t-display mt-3.5">
              Rafael
              <br />
              Escaleira
            </h1>

            <p className="t-sub mt-3.5 text-balance text-ink-3">
              How native software gets built when it can&rsquo;t fail.
            </p>

            <p className="t-lead mt-5 max-w-[490px] text-pretty">
              I turn mobile complexity into software that is simple, testable and
              built to last. Today that means Cartola FC at Globo — played by
              millions every round.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a href="#contact" className="btn-primary">
                Get in touch
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-1.5 text-[17px] text-accent-ink"
              >
                See my work
                <Chevron />
              </a>
            </div>
          </div>

          {/* The console is 520px of fixed geometry. Rather than squeeze it into
              a phone, mobile drops it — the code strip below carries the motion. */}
          <div className="hidden justify-self-center lg:block">
            <OrbitalConsole />
          </div>
        </div>

        {/* telemetry readout — spans the hero, so no value ever wraps */}
        <div className="glass mt-11 grid overflow-hidden rounded-[16px] sm:grid-cols-3">
          <div className="px-5 py-3.5">
            <p className="text-[11px] tracking-[0.04em] text-ink-3">BASE</p>
            <p className="mt-1 text-[15px] font-medium text-ink">
              Campo Grande, MS · Rio de Janeiro, RJ
            </p>
          </div>
          <div className="border-hairline px-5 py-3.5 sm:border-l">
            <p className="text-[11px] tracking-[0.04em] text-ink-3">STATUS</p>
            <p className="mt-1 flex items-center gap-2 text-[15px] font-medium text-ink">
              <LiveDot size={6} />
              Open to interesting conversations
            </p>
          </div>
          <div className="border-hairline px-5 py-3.5 sm:border-l">
            <p className="text-[11px] tracking-[0.04em] text-ink-3">FOCUS</p>
            <p className="mt-1 text-[15px] font-medium text-ink">
              Swift · Architecture · AI workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
