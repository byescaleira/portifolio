"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { Wordmark } from "./wordmark";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { href: "https://github.com/byescaleira", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/byescaleira", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://www.instagram.com/rafaelescaleira", icon: InstagramIcon, label: "Instagram" },
];

/** Apple's global nav: 52px, translucent, one hairline. It does not resize on scroll. */
export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  return (
    <header className="glass-bar sticky top-0 z-50 h-[52px] border-b border-hairline">
      <div className="mx-auto flex h-[52px] max-w-[1120px] items-center justify-between px-6 md:px-10">
        <Link href="/" aria-label="byescaleira — home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-[34px] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={isHome ? item.href : `/${item.href}`}
              className="text-[13px] text-ink-2 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-[18px]">
          <div className="hidden items-center gap-[18px] sm:flex">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-ink-3 transition-colors hover:text-accent-ink"
              >
                <s.icon className="size-[17px]" />
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
