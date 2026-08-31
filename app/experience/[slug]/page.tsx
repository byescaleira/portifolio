import { notFound } from "next/navigation";
import Link from "next/link";
import { experiences, getExperienceBySlug, getAllExperienceSlugs } from "@/lib/content";
import { DetailLayout } from "../../components/detail-layout";
import { Panel, PanelIcon } from "../../components/panel";
import { Chevron } from "../../components/illustrations";

export function generateStaticParams() {
  return getAllExperienceSlugs().map((slug) => ({ slug }));
}

interface ExperiencePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return {};
  return {
    title: `${experience.company} — Rafael Escaleira`,
    description: experience.summary,
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();

  const others = experiences.filter((e) => e.slug !== slug).slice(0, 3);
  const isCurrent = experience.period === "Present";

  return (
    <DetailLayout
      eyebrow={experience.company}
      backHref="/#work"
      backLabel="Work"
      title={`${experience.role}`}
      subtitle={experience.summary}
      link={experience.link}
      linkLabel={experience.link?.replace(/^https?:\/\//, "")}
      badge={
        <span className="flex size-[52px] shrink-0 items-center justify-center rounded-[15px] bg-accent">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--on-accent)"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v18M3 12h18M6.5 5.6c2 2.2 2 10.6 0 12.8M17.5 5.6c-2 2.2-2 10.6 0 12.8" />
          </svg>
        </span>
      }
      meta={[
        { label: "Period", value: experience.period, live: isCurrent },
        { label: "Focus", value: experience.focus },
        { label: "Codename", value: experience.codename },
      ]}
    >
      <div className="grid items-start gap-14 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="t-sub">What I do here</h2>
          <div className="mt-5 flex flex-col">
            {experience.responsibilities.map((item) => (
              <div key={item} className="flex gap-3.5 border-b border-hairline py-4">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent-ink)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <p className="text-[19px] leading-[1.45] text-ink-2">{item}</p>
              </div>
            ))}
          </div>

          {experience.outcomes && experience.outcomes.length > 0 && (
            <>
              <h2 className="t-sub mt-14">What came out of it</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {experience.outcomes.map((item) => (
                  <Panel key={item} className="p-5">
                    <PanelIcon>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M12 20.5V9.5M6 20.5v-6M18 20.5V4.5" />
                      </svg>
                    </PanelIcon>
                    <p className="t-body mt-3.5">{item}</p>
                  </Panel>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <Panel className="p-6 md:p-7">
            <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-ink">Stack</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.stack.map((tech) => (
                <span key={tech} className="pill">
                  {tech}
                </span>
              ))}
            </div>
          </Panel>

          <Panel tinted hover={false} className="p-6 md:p-7">
            <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-ink">
              Elsewhere on the arc
            </h3>
            <div className="mt-2 flex flex-col">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/experience/${o.slug}`}
                  className="group flex items-center justify-between gap-3 border-t border-hairline py-3.5"
                >
                  <span>
                    <span className="block text-[16px] font-semibold tracking-[-0.015em] text-ink">
                      {o.company}
                    </span>
                    <span className="block text-sm text-ink-3">
                      {o.focus} · {o.period}
                    </span>
                  </span>
                  <Chevron className="text-ink-3" />
                </Link>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </DetailLayout>
  );
}
