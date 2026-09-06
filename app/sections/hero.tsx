import { Chevron } from "../components/illustrations";
import { PrintedSky } from "../components/printed-sky";

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
    <section className="relative overflow-hidden bg-background">
      {/* O assunto é o céu e o meio é gravura: a gratícula e a esfera são o que
          uma prancha de atlas realmente tem. Fica atrás de tudo, nunca por cima. */}
      <PrintedSky />

      {/* running head — the line a printer sets above the plate */}
      <div className="relative border-b border-hairline">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-2.5 md:px-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
            iOS Specialist · Globo · Cartola
          </p>
          <p className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 sm:block">
            Campo Grande · Rio de Janeiro
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1120px] px-6 pb-4 md:px-12">
        {/* masthead — type is the structure here, not a headline sitting on one */}
        <h1 className="t-display mt-12 md:mt-24">
          <span className="block">Rafael</span>
          <span className="block">Escaleira</span>
        </h1>

        {/* the heavy rule under a masthead — the one thick thing on the page.
            It is PRINTED, not drawn: one squeegee pass on load, left to
            right, and it never replays. */}
        <div className="mt-6 h-[6px] w-full bg-accent" />

        {/* The promise, at the scale it deserves. This was set at t-sub under a
            supporting paragraph, an ink bar and a second call to action — six
            competing pieces on the first screen. All of that is gone: the deck
            below is now the only thing the eye lands on after the name, and it
            is the sentence the whole site answers to. */}
        <p className="mt-10 max-w-[19ch] text-balance text-[clamp(1.75rem,3.4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-accent-ink md:mt-14">
          How native software gets built when it can&rsquo;t fail.
        </p>

        <div className="mt-10 mb-12 flex flex-wrap items-center gap-x-7 gap-y-4 md:mb-24">
          <a href="#work" className="btn-primary">
            See my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-[17px] text-ink-2 transition-colors hover:text-accent-ink"
          >
            Get in touch
            <Chevron />
          </a>
        </div>
      </div>

      {/* colophon — the strip along the foot of a printed sheet. Edge to edge,
          divided by rules, set in mono. Not a card. */}
      <div className="relative mt-14 border-y border-hairline">
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
