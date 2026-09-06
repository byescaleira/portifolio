import Link from "next/link";
import { ScrollReveal } from "../components/scroll-reveal";
import { Panel } from "../components/panel";
import { Chevron, Device, RoundRhythm } from "../components/illustrations";

const highlights = [
  { title: "Modular by SPM", body: "Less build friction per squad." },
  { title: "Releases on rails", body: "Automated, so shipping is routine." },
  { title: "Squads in step", body: "iOS, backend, product, design." },
];

const stack = ["Swift", "SwiftUI", "UIKit", "SPM", "Clean Architecture", "Fastlane"];

const previous = [
  { slug: "deliver-it-letsbank", kind: "Fintech", company: "Deliver IT / Letsbank", body: "Secure payment and account flows, modular feature architecture." },
  { slug: "next", kind: "Product growth", company: "Next", body: "Onboarding, engagement mechanics and A/B experiments." },
  { slug: "tocalivros", kind: "Edtech", company: "TocaLivros", body: "Reading and content discovery for students." },
  { slug: "boviplan", kind: "Agtech", company: "Boviplan", body: "Offline-first field capture for ranchers and field teams." },
];

export function ProfessionalWork() {
  return (
    <section id="work" className="bg-background px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="mb-12">
          <div className="flex items-baseline justify-between border-b-2 border-accent pb-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">Professional work</p>
            <p className="folio font-mono text-[10px] uppercase tracking-[0.2em]">04</p>
          </div>
          <h2 className="t-section mt-5 max-w-[20ch] text-balance">
            A game the whole country plays.
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Panel
            tinted
            className="overflow-hidden p-7 md:p-11"
          >
            <div className="grid items-center gap-11 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center border border-foreground bg-foreground">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--luz)"
                      strokeWidth="1.9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 3v18M3 12h18M6.5 5.6c2 2.2 2 10.6 0 12.8M17.5 5.6c-2 2.2-2 10.6 0 12.8" />
                    </svg>
                  </span>
                  <span className="text-[15px] text-ink-2">
                    Globo · iOS Specialist · Present
                  </span>
                </div>

                <h3 className="t-sub mt-5">Cartola</h3>
                <p className="mt-3.5 text-pretty text-[19px] leading-[1.5] text-ink-2">
                  Cartola is less an app than a national ritual — millions of
                  people setting their team before kickoff, then all opening it at
                  once when the round ends. My work is the architecture, the
                  performance and the native craft underneath that.
                </p>

                {/* the real engineering problem, drawn */}
                <div className="mt-7 border border-hairline px-5 pb-3.5 pt-4"
                  style={{ background: "var(--inset-fill)" }}>
                  <div className="flex items-baseline justify-between">
                    <p className="text-[13px] font-semibold text-ink">
                      The shape of a round
                    </p>
                    <p className="text-xs text-ink-3">load over 90 minutes</p>
                  </div>
                  <div className="mt-2.5">
                    <RoundRhythm />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {highlights.map((h) => (
                    <div key={h.title}>
                      <p className="text-[16px] font-semibold tracking-[-0.015em] text-ink">
                        {h.title}
                      </p>
                      <p className="mt-1 text-sm leading-[1.42] text-ink-3">{h.body}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {stack.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href="/experience/globo"
                  className="mt-7 inline-flex items-center gap-1.5 text-[17px] text-accent-ink"
                >
                  Read the case
                  <Chevron />
                </Link>
              </div>

              <div className="hidden justify-center lg:flex">
                <Device width={236} />
              </div>
            </div>
          </Panel>
        </ScrollReveal>

        <p className="mb-5 mt-14 text-[21px] font-semibold tracking-[-0.02em] text-ink">
          Before that
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {previous.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 0.07}>
              <Link href={`/experience/${p.slug}`} className="group block h-full">
                <Panel title={p.company} index={p.kind} className="h-full">
                  <p className="t-small">{p.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[15px] text-accent-ink">
                    Details
                    <Chevron />
                  </span>
                </Panel>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
