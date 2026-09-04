import Link from "next/link";
import { Wordmark } from "./wordmark";

const columns = [
  {
    title: "Site",
    links: [
      { label: "About", href: "/#about" },
      { label: "Skills", href: "/#skills" },
      { label: "Work", href: "/#work" },
      { label: "Projects", href: "/#projects" },
    ],
  },
  {
    title: "Projects",
    links: [
      { label: "Spica", href: "/project/spica" },
    ],
  },
];

const elsewhere = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/byescaleira" },
  { label: "GitHub", href: "https://github.com/byescaleira" },
  { label: "Instagram", href: "https://www.instagram.com/rafaelescaleira" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-surface px-6 pb-32 pt-10 md:px-12 md:pb-11">
      <div className="mx-auto max-w-[1120px]">
        <div className="flex flex-col justify-between gap-10 border-b border-hairline pb-7 md:flex-row">
          <div className="max-w-[300px]">
            <Wordmark size={24} />
            <p className="mt-3 text-[13px] leading-[1.5] text-ink-3">
              I build native Apple products that scale. Currently
              at Globo, on Cartola.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[13px] font-semibold text-ink">{col.title}</p>
                <div className="mt-3 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="text-[13px] text-ink-3 transition-colors hover:text-accent-ink"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className="text-[13px] font-semibold text-ink">Elsewhere</p>
              <div className="mt-3 flex flex-col gap-2.5">
                {elsewhere.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-ink-3 transition-colors hover:text-accent-ink"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 pt-5 sm:flex-row">
          <p className="text-xs text-ink-3">
            © {new Date().getFullYear()} Rafael Escaleira. Built with Next.js,
            deployed on Vercel.
          </p>
          <p className="text-xs text-ink-3">Made in Brazil.</p>
        </div>
      </div>
    </footer>
  );
}
