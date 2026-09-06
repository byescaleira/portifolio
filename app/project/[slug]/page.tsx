import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/lib/content";
import { DetailLayout } from "../../components/detail-layout";
import { Panel, PanelIcon } from "../../components/panel";
import { Chevron } from "../../components/illustrations";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.codename} — Rafael Escaleira`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <DetailLayout
      eyebrow={project.title}
      backHref="/#projects"
      backLabel="Projects"
      title={project.codename}
      subtitle={project.description}
      link={project.link}
      linkLabel="View on GitHub"
      badge={
        <span className="relative flex size-[52px] shrink-0 items-center justify-center overflow-hidden bg-[linear-gradient(150deg,#241A16,#131314)]">
          <span
            className="absolute size-6"
            style={{ background: "rgba(255,107,0,.75)", animation: "bye-prism-a 11s ease-in-out infinite" }}
          />
          <span
            className="absolute size-6"
            style={{ background: "rgba(255,255,255,.24)", animation: "bye-prism-c 11s ease-in-out infinite" }}
          />
        </span>
      }
      meta={[
        { label: "Status", value: project.status },
        { label: "Kind", value: project.title },
        { label: "Codename", value: project.codename },
      ]}
    >
      <div className="max-w-[780px]">
        <h2 className="t-sub">The idea</h2>
        <p className="mt-4 text-pretty text-[19px] leading-[1.55] text-ink-2">
          {project.longDescription}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="pill">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-13 grid gap-5 md:grid-cols-2">
        <Panel className="p-7 md:p-8">
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
              <circle cx="12" cy="12" r="8.6" />
              <circle cx="12" cy="12" r="3.2" />
            </svg>
          </PanelIcon>
          <h3 className="mt-4 text-[25px] font-semibold tracking-[-0.025em] text-ink">Goals</h3>
          <div className="mt-3.5 flex flex-col">
            {project.goals.map((g) => (
              <p key={g} className="t-body border-t border-hairline py-3.5">
                {g}
              </p>
            ))}
          </div>
        </Panel>

        <Panel className="p-7 md:p-8">
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
              <path d="M9.4 20.4h5.2" />
              <path d="M10 17.4c0-2-.7-2.9-1.7-4A5.6 5.6 0 1 1 17.6 9a5.6 5.6 0 0 1-1.6 4.4c-1 1.1-1.7 2-1.7 4" />
            </svg>
          </PanelIcon>
          <h3 className="mt-4 text-[25px] font-semibold tracking-[-0.025em] text-ink">
            What I learned
          </h3>
          <div className="mt-3.5 flex flex-col">
            {project.learnings.map((l) => (
              <p key={l} className="t-body border-t border-hairline py-3.5">
                {l}
              </p>
            ))}
          </div>
        </Panel>
      </div>

      <p className="mb-5 mt-14 text-[21px] font-semibold tracking-[-0.02em] text-ink">
        More projects
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {others.map((o) => (
          <Link key={o.slug} href={`/project/${o.slug}`} className="group block h-full">
            <Panel className="h-full p-5">
              <p className="text-[13px] text-ink-3">{o.title}</p>
              <h4 className="mt-1.5 text-[21px] font-semibold tracking-[-0.02em] text-ink">
                {o.codename}
              </h4>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[15px] text-accent-ink">
                Learn more
                <Chevron />
              </span>
            </Panel>
          </Link>
        ))}
      </div>
    </DetailLayout>
  );
}
