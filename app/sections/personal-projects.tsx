import Link from "next/link";
import { ScrollReveal } from "../components/scroll-reveal";
import { Panel } from "../components/panel";
import { BranchGraph, Chevron, PrismPanes } from "../components/illustrations";
import { projects } from "@/lib/content";

/** Each project gets its own drawn, moving visual — never a stock icon. */
const art: Record<string, { cls: string; node: React.ReactNode }> = {
  prism: {
    cls: "art-warm",
    node: <PrismPanes />,
  },
  orbit: {
    cls: "art-cool",
    node: (
      <div className="w-full px-8">
        <div className="overflow-hidden rounded-[14px] border border-hairline"
          style={{ background: "var(--art-panel)" }}>
          <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2.5">
            <span className="size-2 rounded-full bg-ink-3/50" />
            <span className="size-2 rounded-full bg-ink-3/50" />
            <span className="size-2 rounded-full bg-ink-3/50" />
          </div>
          <div className="px-3.5 pb-4 pt-3.5 font-mono text-xs leading-[1.85] text-ink-2">
            <div className="o-type">
              <span className="text-accent-ink">$</span> orbit new feature Lineup
              <span className="o-caret text-accent-ink">▌</span>
            </div>
            <div className="o-row text-ink-3" style={{ animationDelay: "-0.6s" }}>
              ✓ module scaffolded
            </div>
            <div className="o-row text-ink-3" style={{ animationDelay: "-0.35s" }}>
              ✓ tests wired · release tagged
            </div>
          </div>
        </div>
      </div>
    ),
  },
  cashly: {
    cls: "art-amber",
    node: (
      <div className="flex h-full w-full items-end px-9">
        <div className="h-[152px] w-full rounded-t-[20px] border border-b-0 border-hairline px-[18px] pt-[18px]"
          style={{ background: "var(--art-panel)" }}>
          <p className="text-[11px] text-ink-3">This month</p>
          <p className="mt-0.5 text-[26px] font-bold tracking-[-0.03em] text-ink">R$ 4.280</p>
          <svg viewBox="0 0 240 60" className="mt-2.5 h-[60px] w-full" aria-hidden="true">
            <path
              d="M0 46 L34 38 L68 42 L102 24 L136 30 L170 14 L204 20 L240 6 L240 60 L0 60 Z"
              fill="rgba(255,107,0,.13)"
            />
            <path
              className="o-draw"
              style={{ ["--dur" as string]: "5.5s", strokeDasharray: 300, strokeDashoffset: 300 }}
              d="M0 46 L34 38 L68 42 L102 24 L136 30 L170 14 L204 20 L240 6"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    ),
  },
  "open-source": {
    cls: "art-slate",
    node: <BranchGraph />,
  },
};

export function PersonalProjects() {
  return (
    <section
      id="projects"
      className="border-t border-hairline bg-surface px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="mx-auto mb-14 max-w-[760px] text-center">
          <p className="t-eyebrow">Personal projects</p>
          <h2 className="t-section mt-2.5 text-balance">The lab, in the open.</h2>
          <p className="t-lead mt-5 text-pretty">
            Space-named side work where I test the ideas before they reach
            production code.
          </p>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => {
            const visual = art[project.slug];
            const live = project.status === "Active" || project.status === "Experiment";
            return (
              <ScrollReveal key={project.slug} delay={(i % 2) * 0.07}>
                <Link href={`/project/${project.slug}`} className="group block h-full">
                  <Panel className="flex h-full flex-col overflow-hidden rounded-[26px]">
                    <div
                      className={`relative flex h-[208px] items-center justify-center overflow-hidden ${visual?.cls ?? ""}`}
                    >
                      {visual?.node}
                    </div>
                    <div className="p-6 md:p-7">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-[25px] font-semibold tracking-[-0.025em] text-ink">
                          {project.codename}
                        </h3>
                        <span
                          className={
                            live
                              ? "pill-accent"
                              : "inline-flex items-center rounded-full bg-[color-mix(in_srgb,var(--foreground)_9%,transparent)] px-2.5 py-1 text-xs font-medium text-ink-2"
                          }
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="mt-1 text-[15px] text-ink-3">{project.title}</p>
                      <p className="t-body mt-3">{project.description}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-[17px] text-accent-ink">
                        Learn more
                        <Chevron />
                      </span>
                    </div>
                  </Panel>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
