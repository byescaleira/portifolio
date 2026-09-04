import { ScrollReveal } from "../components/scroll-reveal";
import { Nebula } from "../components/illustrations";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../components/icons";

const channels = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/byescaleira", icon: LinkedinIcon, primary: true },
  { label: "GitHub", href: "https://github.com/byescaleira", icon: GithubIcon },
  { label: "Instagram", href: "https://www.instagram.com/rafaelescaleira", icon: InstagramIcon },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-6 py-28 md:px-12 md:py-32"
    >
      <Nebula className="bottom-[-300px] left-1/2 h-[700px] w-[1000px] -translate-x-1/2" />

      <svg
        viewBox="0 0 900 500"
        className="pointer-events-none absolute bottom-[-170px] left-1/2 h-[500px] w-[900px] -translate-x-1/2"
        aria-hidden="true"
      >
        <ellipse cx="450" cy="250" rx="430" ry="180" fill="none" stroke="rgba(255,138,61,.16)" strokeWidth="1" />
        <ellipse cx="450" cy="250" rx="320" ry="132" fill="none" stroke="var(--hairline)" strokeWidth="1" />
        <circle r="3" fill="#FF8A3D">
          <animateMotion dur="24s" repeatCount="indefinite" path="M 880,250 A 430,180 0 1,1 20,250 A 430,180 0 1,1 880,250" />
        </circle>
        <circle r="2.2" fill="rgba(255,255,255,.5)">
          <animateMotion dur="17s" begin="-6s" repeatCount="indefinite" path="M 770,250 A 320,132 0 1,0 130,250 A 320,132 0 1,0 770,250" />
        </circle>
      </svg>

      <ScrollReveal className="relative mx-auto max-w-[1120px]">
        <div className="flex items-baseline justify-between border-b-2 border-accent pb-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">Contact</p>
            <p className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-on-accent">06</p>
          </div>
        <h2 className="t-section mt-5 max-w-[20ch] text-balance">
          Let&apos;s build something native.
        </h2>
        <p className="t-lead mx-auto mt-5 max-w-[620px] text-pretty">
          I&apos;m heads-down on iOS at Globo, but always open to a good
          conversation about architecture, products or collaboration.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={c.primary ? "btn-primary" : "btn-secondary"}
            >
              <c.icon className="size-[17px]" />
              {c.label}
            </a>
          ))}
        </div>

        <p className="mt-7 text-[15px] text-ink-3">
          Campo Grande, MS · Rio de Janeiro, RJ
        </p>
      </ScrollReveal>
    </section>
  );
}
