import { Chevron } from "../components/illustrations";

/**
 * A printed sheet, not an app screen.
 *
 * The old hero was a two-column app layout: copy on the left, a floating glass
 * console on the right, a rounded telemetry card underneath. That is the
 * grammar of an interface. This is the grammar of a press sheet — a masthead
 * that runs the full measure, rules that bleed edge to edge, an ink bar, and a
 * colophon strip along the foot. Nothing floats, nothing blurs, nothing casts
 * a shadow: print has no depth of field.
 *
 * No REVEAL animation, deliberately. This is the first thing a visitor sees and
 * it must be on screen the instant the HTML lands, with or without JS.
 */
export function Hero() {
  return (
    <section className="relative bg-background">
      {/* running head — the line a printer sets above the plate */}
      <div className="border-b border-hairline">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-2.5 md:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
            iOS Specialist · Globo · Cartola FC
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 sm:block">
            Campo Grande · Rio de Janeiro
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1120px] px-6 md:px-12">
        {/* masthead — type is the structure here, not a headline sitting on one */}
        <h1 className="t-display mt-10 md:mt-14">
          <span className="block">Rafael</span>
          <span className="block">Escaleira</span>
        </h1>

        {/* the heavy rule under a masthead — the one thick thing on the page */}
        <div className="mt-5 h-[6px] w-full rounded-full bg-foreground" />

        <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="t-sub max-w-[15ch] text-balance">
              How native software gets built when it can&rsquo;t fail.
            </p>
            <p className="t-lead mt-5 max-w-[46ch] text-pretty">
              I turn mobile complexity into software that is simple, testable and
              built to last. Today that means Cartola FC at Globo &mdash; played
              by millions every round.
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

          {/* the ink bar — a press colour bar, and an honest statement of the
              system: two inks and the paper, nothing else. The astronaut print
              lived here for a while and was pulled: the masthead is already the
              loudest thing on the sheet, and a full illustration beside it gave
              the eye two places to land instead of one. */}
          <div className="self-end">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              Two inks, one paper
            </p>
            <div className="mt-3 flex h-14 overflow-hidden rounded-[12px] border-2 border-hairline">
              <span className="flex-1 bg-accent" />
              <span className="flex-1 border-l-2 border-hairline bg-foreground" />
              <span className="flex-1 border-l-2 border-hairline bg-background" />
            </div>
            <div className="mt-2 flex font-mono text-[10px] uppercase tracking-[0.1em] text-ink-3">
              <span className="flex-1">Safety</span>
              <span className="flex-1">Ink</span>
              <span className="flex-1">Stock</span>
            </div>
          </div>
        </div>
      </div>

      {/* colophon — the strip along the foot of a printed sheet. Edge to edge,
          divided by rules, set in mono. Not a card. */}
      <div className="mt-14 border-y border-hairline">
        <div className="mx-auto grid max-w-[1120px] px-6 sm:grid-cols-3 md:px-12">
          <Colophon label="Base" value="Campo Grande, MS · Rio de Janeiro, RJ" />
          <Colophon label="Status" value="Open to interesting conversations" rule />
          <Colophon label="Focus" value="Swift · Architecture · AI workflows" rule />
        </div>
      </div>
    </section>
  );
}

function Colophon({
  label,
  value,
  rule = false,
}: {
  label: string;
  value: string;
  rule?: boolean;
}) {
  return (
    <div className={`py-4 sm:py-5 ${rule ? "border-hairline sm:border-l sm:pl-6" : ""}`}>
      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
        {label}
      </p>
      <p className="mt-1.5 text-[15px] font-medium text-ink">{value}</p>
    </div>
  );
}
