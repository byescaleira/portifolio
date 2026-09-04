import Link from "next/link";
import { ScrollReveal } from "../components/scroll-reveal";
import { Panel, PanelIcon } from "../components/panel";
import { Trajectory } from "../components/illustrations";

/** x/y are points on the rising arc drawn by <Trajectory/> — keep them in sync. */
const milestones = [
  { slug: "catwork", company: "CATWORK", focus: "Web & mobile", year: "2017", x: 74, y: 176 },
  { slug: "aaa-ufms", company: "A.A.A. UFMS", focus: "Internal tooling", year: "2018", x: 223, y: 160 },
  { slug: "boviplan", company: "Boviplan", focus: "Agtech", year: "2019", x: 371, y: 138 },
  { slug: "tocalivros", company: "TocaLivros", focus: "Edtech", year: "2020", x: 520, y: 112 },
  { slug: "next", company: "Next", focus: "Product growth", year: "2021", x: 669, y: 84 },
  { slug: "deliver-it-letsbank", company: "Deliver IT", focus: "Letsbank · fintech", year: "2022", x: 817, y: 54 },
  { slug: "globo", company: "Globo", focus: "Cartola", year: "Present", x: 966, y: 24 },
];

const principles = [
  {
    title: "Ship first, polish after",
    body: "Working software beats perfect branches. Ship small, learn fast, refine with real usage.",
    icon: (
      <>
        <path d="M5 15c-1.5 2-1.8 5-1.8 5s3-.3 5-1.8" />
        <path d="M9.5 17 7 14.5m0 0L4.5 12l3.7-1 5.6-5.6a6.6 6.6 0 0 1 5.9-1.8 6.6 6.6 0 0 1-1.8 5.9L12.3 19l-1-3.7" />
      </>
    ),
  },
  {
    title: "AI writes fast. I decide slow",
    body: "AI accelerates the craft; human judgment owns the consequences. Every line gets reviewed.",
    icon: (
      <>
        <path d="M12 3.2l1.9 5.1 5.1 1.9-5.1 1.9-1.9 5.1-1.9-5.1-5.1-1.9 5.1-1.9z" />
        <path d="M18.5 16.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
      </>
    ),
  },
  {
    title: "Design is engineering",
    body: "Spacing, motion and typography are technical decisions. A beautiful UI is a well-architected one.",
    icon: (
      <>
        <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4" />
        <path d="M3.2 9.4h17.6M9.4 9.4v11.4" />
      </>
    ),
  },
  {
    title: "Native first, always",
    body: "Apple's APIs come before abstractions. No cross-platform shortcuts when the product deserves native.",
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" rx="2.4" />
        <path d="M10 3.4v3.6M14 3.4v3.6M10 17v3.6M14 17v3.6M3.4 10H7M3.4 14H7M17 10h3.6M17 14h3.6" />
      </>
    ),
  },
];

const education = [
  { school: "Descomplica", degree: "BTech, Computer Systems Analysis", period: "2023 — 2025" },
  { school: "UFMS", degree: "BSc, Computer Engineering", period: "2017 — 2021" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-hairline bg-surface px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="mb-12">
          <div className="flex items-baseline justify-between border-b-2 border-accent pb-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">Who I am</p>
            <p className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-on-accent">01</p>
          </div>
          <h2 className="t-section mt-5 max-w-[20ch] text-balance">
            Builder by instinct.
            <br />
            Engineer by choice.
          </h2>
          <p className="t-lead mt-5 max-w-[58ch] text-pretty">
            Seven years of native Apple work, from offline-first field tools in
            Mato Grosso do Sul to a fantasy game the whole country plays on
            Sunday nights.
          </p>
        </ScrollReveal>

        {/* the career as a rising arc, not a bullet list */}
        <ScrollReveal>
          <div className="hidden md:block">
            <Trajectory points={milestones.map((m) => ({ x: m.x, y: m.y }))} />
            <div className="mt-2.5 grid grid-cols-7 gap-2">
              {milestones.map((m, i) => {
                const current = i === milestones.length - 1;
                return (
                  <Link
                    key={m.slug}
                    href={`/experience/${m.slug}`}
                    className="group text-center"
                  >
                    <span
                      className={`block text-[13px] font-semibold tracking-[-0.01em] transition-colors ${
                        current ? "text-accent-ink" : "text-ink group-hover:text-accent-ink"
                      }`}
                    >
                      {m.company}
                    </span>
                    <span className={`mt-0.5 block text-xs ${current ? "text-ink-2" : "text-ink-3"}`}>
                      {m.focus}
                    </span>
                    <span className={`block text-xs ${current ? "text-ink-2" : "text-ink-3"}`}>
                      {m.year}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* a seven-point arc is unreadable on a phone — same data, as a list */}
          <ul className="overflow-hidden rounded-[22px] border border-hairline bg-panel md:hidden">
            {[...milestones].reverse().map((m, i) => {
              const current = i === 0;
              return (
                <li key={m.slug} className={i > 0 ? "border-t border-hairline" : ""}>
                  <Link
                    href={`/experience/${m.slug}`}
                    className="flex min-h-[62px] items-center gap-3.5 px-4 py-3"
                  >
                    <span
                      className={`size-2.5 shrink-0 rounded-full ${
                        current ? "bg-accent ring-4 ring-accent-soft" : "bg-ink-3/40"
                      }`}
                    />
                    <span className="grow">
                      <span className="block text-[17px] font-semibold tracking-[-0.015em] text-ink">
                        {m.company}
                      </span>
                      <span className="t-small block">{m.focus}</span>
                    </span>
                    <span className="shrink-0 text-[15px] text-ink-3">{m.year}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>

        <div className="mt-16 grid items-start gap-5 lg:grid-cols-[1.35fr_1fr]">
          <ScrollReveal>
            <Panel title="How I work" index="04 principles" className="h-full">
              <div className="grid gap-6 sm:grid-cols-2">
                {principles.map((p) => (
                  <div key={p.title} className="flex gap-3.5">
                    <PanelIcon>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {p.icon}
                      </svg>
                    </PanelIcon>
                    <div>
                      <h4 className="text-[17px] font-semibold tracking-[-0.015em] text-ink">
                        {p.title}
                      </h4>
                      <p className="t-small mt-1">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </ScrollReveal>

          <ScrollReveal delay={0.07}>
            <Panel title="Education" index="2017 — 2025" className="h-full">
              <div className="flex flex-col gap-5">
                {education.map((e, i) => (
                  <div key={e.school} className={i > 0 ? "border-t border-hairline pt-5" : ""}>
                    <p className="text-[17px] font-semibold tracking-[-0.015em] text-ink">
                      {e.school}
                    </p>
                    <p className="t-small mt-1">{e.degree}</p>
                    <p className="mt-1 text-sm text-ink-3">{e.period}</p>
                  </div>
                ))}
              </div>
            </Panel>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
