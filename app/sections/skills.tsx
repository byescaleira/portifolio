import { ScrollReveal } from "../components/scroll-reveal";
import { Panel, PanelIcon } from "../components/panel";
import { Pipeline, Sparkline } from "../components/illustrations";

const Icon = ({ children }: { children: React.ReactNode }) => (
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
    {children}
  </svg>
);

const cube = (
  <>
    <path d="M12 2.8 21 8v8l-9 5.2L3 16V8z" />
    <path d="M12 12 21 8M12 12v9.2M12 12 3 8" />
  </>
);
const link = (
  <>
    <rect x="3.2" y="3.2" width="7.4" height="7.4" rx="2.2" />
    <rect x="13.4" y="13.4" width="7.4" height="7.4" rx="2.2" />
    <path d="M10.6 6.9h4.6a2 2 0 0 1 2 2v4.5" />
  </>
);
const grid = (
  <>
    <rect x="3.2" y="3.2" width="7.4" height="7.4" rx="2.2" />
    <rect x="13.4" y="3.2" width="7.4" height="7.4" rx="2.2" />
    <rect x="3.2" y="13.4" width="7.4" height="7.4" rx="2.2" />
    <rect x="13.4" y="13.4" width="7.4" height="7.4" rx="2.2" />
  </>
);
const check = (
  <>
    <path d="M20.5 6.5 10 17l-5-5" />
    <path d="M3.6 20.4h16.8" />
  </>
);
const refresh = (
  <>
    <path d="M20.4 12a8.4 8.4 0 1 1-2.5-6" />
    <path d="M20.6 3.4v4.8h-4.8" />
  </>
);
const bolt = <path d="M13.4 2.6 4 13.8h6.2L9.4 21.4 19.4 9.8h-6.6z" />;
const nodes = (
  <>
    <circle cx="7" cy="7" r="3.2" />
    <circle cx="17" cy="7" r="3.2" />
    <circle cx="12" cy="17" r="3.2" />
    <path d="M9.6 9.4 11 14.2M14.4 9.4 13 14.2M10.2 7h3.6" />
  </>
);
const sparkle = (
  <>
    <path d="M12 3.2l1.9 5.1 5.1 1.9-5.1 1.9-1.9 5.1-1.9-5.1-5.1-1.9 5.1-1.9z" />
    <path d="M18.5 16.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
  </>
);
const people = (
  <>
    <circle cx="9" cy="8" r="3.4" />
    <path d="M2.8 19.6c.9-3.2 3.4-4.9 6.2-4.9s5.3 1.7 6.2 4.9" />
    <path d="M16.6 5.2a3.4 3.4 0 0 1 0 5.6M18.4 15.4c1.4.9 2.4 2.3 2.8 4.2" />
  </>
);

function Tile({
  icon,
  title,
  body,
  className,
  delay,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  return (
    <ScrollReveal className={className} delay={delay}>
      <Panel className="h-full overflow-hidden p-6 md:p-7">
        <PanelIcon>
          <Icon>{icon}</Icon>
        </PanelIcon>
        <h3 className="t-card mt-4">{title}</h3>
        <p className="t-body mt-2">{body}</p>
        {children}
      </Panel>
    </ScrollReveal>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bg-background px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <ScrollReveal className="mx-auto mb-14 max-w-[720px] text-center">
          <p className="t-eyebrow">Capabilities</p>
          <h2 className="t-section mt-2.5 text-balance">
            The full iOS stack.
            <br />
            Pixels to pipelines.
          </h2>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-4">
          {/* the one tile that writes itself */}
          <ScrollReveal className="md:col-span-2 md:row-span-2">
            <Panel className="tile-warm flex h-full flex-col overflow-hidden p-7 md:p-8">
              <h3 className="t-sub">Swift, SwiftUI &amp; UIKit</h3>
              <p className="t-body mt-2.5">
                Seven years of production Apple code — declarative and imperative,
                concurrency included, on codebases that never stop shipping.
              </p>

              <div className="mt-6 rounded-[14px] border border-hairline p-5 font-mono text-[13px] leading-[1.78] text-ink-2"
                style={{ background: "var(--code-bg)" }}>
                <div>
                  <span className="text-accent-ink">struct</span> RoundView:{" "}
                  <span className="text-accent-ink">View</span> {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-accent-ink">@State private var</span> picks:
                  [Player]
                </div>
                <div className="mt-1.5 pl-4">
                  <span className="text-accent-ink">var</span> body:{" "}
                  <span className="text-accent-ink">some</span> View {"{"}
                </div>
                <div className="pl-8">List(picks) {"{"} PlayerRow($0) {"}"}</div>
                <div className="o-type pl-11">
                  <span className="text-ink-3">.task</span> {"{"}{" "}
                  <span className="text-accent-ink">await</span> load() {"}"}
                  <span className="o-caret text-accent-ink">▌</span>
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Swift Concurrency", "Combine", "Core Data", "Accessibility"].map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </Panel>
          </ScrollReveal>

          <Tile
            className="md:col-span-2"
            icon={cube}
            title="Clean Architecture"
            body="MVVM, SOLID and hard separation of concerns — boundaries a new teammate can read on day one."
          />
          <Tile
            icon={link}
            title="Swift Package Manager"
            body="Internal packages and versioned releases that keep build times honest."
          />
          <Tile
            icon={grid}
            title="Modularization"
            body="Feature modules and clear contracts that cut cognitive load for whole squads."
          />

          {/* the pipeline runs */}
          <Tile
            className="md:col-span-2"
            icon={refresh}
            title="CI / CD"
            body="GitHub Actions, Fastlane and TestFlight automation with minimal friction."
          >
            <div className="mt-5">
              <Pipeline />
            </div>
          </Tile>

          {/* the curve draws */}
          <Tile
            className="md:col-span-2"
            icon={bolt}
            title="Performance"
            body="Instruments, memory profiling and scroll that stays smooth under load."
          >
            <div className="mt-5">
              <Sparkline />
            </div>
          </Tile>

          <Tile
            icon={check}
            title="Testing & TDD"
            body="Unit and snapshot coverage — the discipline that makes shipping boring."
          />
          <Tile
            icon={nodes}
            title="Design systems"
            body="Tokens and components that keep Figma and Xcode telling the same story."
          />
          <Tile
            className="md:col-span-2"
            icon={sparkle}
            title="AI-augmented workflows"
            body="Leading AI adoption in engineering at Globo: documentation, review, test generation, standardization."
          />

          <ScrollReveal className="md:col-span-4">
            <Panel className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-5 md:px-7">
              <PanelIcon>
                <Icon>{people}</Icon>
              </PanelIcon>
              <h3 className="t-card shrink-0">Technical leadership</h3>
              <p className="t-body">
                Code review, mentoring, standards and cross-team alignment across
                iOS, backend, product and design.
              </p>
            </Panel>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
