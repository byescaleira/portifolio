import Link from "next/link";
import { Header } from "./header";
import { Footer } from "./footer";
import { MobileTabBar } from "./mobile-tab-bar";
import { ScrollProgress } from "./scroll-progress";
import {
  ChevronLeft,
  CodeStrip,
  LiveDot,
  Nebula,
  Starfield,
} from "./illustrations";

interface DetailLayoutProps {
  children: React.ReactNode;
  eyebrow: string;
  backHref: string;
  backLabel: string;
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
  meta?: { label: string; value: string; live?: boolean }[];
  link?: string;
  linkLabel?: string;
}

export function DetailLayout({
  children,
  eyebrow,
  backHref,
  backLabel,
  title,
  subtitle,
  badge,
  meta,
  link,
  linkLabel = "Visit site",
}: DetailLayoutProps) {
  return (
    <>
      <ScrollProgress />
      <Header />

      <main className="relative z-10 flex flex-1 flex-col">
        <section className="relative overflow-hidden bg-background px-6 pb-16 pt-10 md:px-12">
          <Starfield />
          <Nebula className="-left-44 -top-64 h-[720px] w-[900px]" />

          <div className="relative mx-auto max-w-[1120px]">
            <Link
              href={backHref}
              className="inline-flex items-center gap-1.5 text-[15px] text-ink-3 transition-colors hover:text-ink"
            >
              <ChevronLeft />
              {backLabel}
            </Link>

            <div className="mt-8 flex items-center gap-3.5">
              {badge}
              <span>
                <span className="t-eyebrow block">{eyebrow}</span>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-0.5 inline-flex items-center gap-1.5 text-[15px] text-ink-3 transition-colors hover:text-accent-ink"
                  >
                    {linkLabel}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M8 4h12v12M20 4 5 19" />
                    </svg>
                  </a>
                )}
              </span>
            </div>

            <h1 className="t-display mt-6 max-w-[900px] text-balance">{title}</h1>

            {subtitle && (
              <p className="t-lead mt-5 max-w-[740px] text-pretty">{subtitle}</p>
            )}

            {meta && meta.length > 0 && (
              <div className="mt-11 grid overflow-hidden rounded-[18px] border border-hairline sm:grid-cols-3">
                {meta.map((m, i) => (
                  <div
                    key={m.label}
                    className={`bg-surface px-6 py-5 ${i > 0 ? "border-hairline sm:border-l" : ""}`}
                  >
                    <p className="text-[13px] text-ink-3">{m.label}</p>
                    <p className="mt-1.5 flex items-center gap-2 text-[19px] font-semibold tracking-[-0.02em] text-ink">
                      {m.live && <LiveDot size={7} />}
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <CodeStrip />

        <section className="bg-surface px-6 py-18 md:px-12 md:py-24">
          <div className="mx-auto max-w-[1120px]">{children}</div>
        </section>

        <section className="bg-background px-6 py-20 text-center md:px-12 md:py-24">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="t-sub text-balance">Want the longer version?</h2>
            <p className="t-lead mx-auto mt-4 max-w-[540px] text-pretty">
              The full history, the parts that did not work, and what I would do
              differently — happy to talk it through.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/byescaleira"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Message me on LinkedIn
              </a>
              <Link href={backHref} className="btn-secondary">
                {backLabel}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileTabBar />
    </>
  );
}
