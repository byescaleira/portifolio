import Link from "next/link";
import { ScrollReveal } from "../components/scroll-reveal";
import { Panel } from "../components/panel";
import { Chevron } from "../components/illustrations";
import { PranchaEstrela } from "../components/figuras";
import { projects } from "@/lib/content";

/** Each project gets its own drawn, moving visual — never a stock icon. */
const art: Record<string, { cls: string; node: React.ReactNode }> = {
  spica: {
    cls: "art-warm",
    node: (
      <PranchaEstrela className="w-full max-w-[380px]" />
    ),
  },
};

export function PersonalProjects() {
  return (
    <section
      id="projects"
      className="border-t border-hairline bg-surface px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="mb-12">
          <div className="flex items-baseline justify-between border-b-2 border-accent pb-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">Personal work</p>
            <p className="folio font-mono text-[10px] uppercase tracking-[0.2em]">05</p>
          </div>
          <h2 className="t-section mt-5 max-w-[20ch] text-balance">The system behind this page.</h2>
          <p className="t-lead mt-5 max-w-[58ch] text-pretty">
            Everything with my name on it runs on one set of decisions — colour,
            type, motion, the character, and what things are called.
          </p>
        </ScrollReveal>

        <div className="grid gap-5">
          {projects.map((project, i) => {
            const visual = art[project.slug];
            const live = project.status === "Active" || project.status === "Experiment";
            return (
              <ScrollReveal key={project.slug} delay={(i % 2) * 0.07}>
                <Link href={`/project/${project.slug}`} className="group block h-full">
                  <Panel className="flex h-full flex-col overflow-hidden">
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
                              : "inline-flex items-center bg-[color-mix(in_srgb,var(--foreground)_9%,transparent)] px-2.5 py-1 text-xs font-medium text-ink-2"
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
