import { ScrollReveal } from "../components/scroll-reveal";
import { Print } from "../components/print";

const principles = [
  {
    n: "01",
    title: "Architecture first",
    body: "Decide the boundaries before the features. Everything after is cheaper.",
  },
  {
    n: "02",
    title: "Automation as leverage",
    body: "Pipelines that release without ceremony, so releases stop being events.",
  },
  {
    n: "03",
    title: "AI on the draft, judgment on the merge",
    body: "Generate quickly, review slowly. The consequences stay human.",
  },
];

export function MissionControl() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden border-y border-hairline bg-surface px-6 py-24 md:px-12 md:py-28"
    >

      <div className="relative mx-auto max-w-[1120px]">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal className="hidden justify-self-center lg:block">
            <Print
              src="/orbital-chart.webp"
              alt="A screenprinted orbital chart: a halftone planet with four tilted orbits, two small craft and a station"
              width={900}
              height={900}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.07}>
            <div className="flex items-baseline justify-between border-b border-hairline pb-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">Mission Control</p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">03</p>
          </div>
            <h2 className="t-section mt-5 max-w-[20ch] text-balance">
              Everything orbits the product.
            </h2>
            <p className="t-lead mt-4 text-pretty">
              Tools change every year. The centre does not. Architecture,
              automation and AI are there to keep the thing people actually open
              fast, honest and easy to change.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {principles.map((p) => (
                <div key={p.n} className="flex gap-3.5 border-t border-hairline pt-4">
                  <span className="pt-0.5 font-mono text-[13px] text-accent-ink">{p.n}</span>
                  <span>
                    <span className="block text-[17px] font-semibold tracking-[-0.015em] text-ink">
                      {p.title}
                    </span>
                    <span className="t-small mt-1 block">{p.body}</span>
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
