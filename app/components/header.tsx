"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { Indice } from "./indice";
import { TesteiraViva } from "./testeira-viva";
import { Wordmark } from "./wordmark";

const socials = [
  { href: "https://github.com/byescaleira", icon: GithubIcon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/byescaleira", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://www.instagram.com/rafaelescaleira", icon: InstagramIcon, label: "Instagram" },
];

/**
 * The masthead rule, not a floating bar.
 *
 * This was Apple's global nav — 52px, translucent, backdrop-blurred. A printed
 * sheet has no glass and nothing hovering over the page, so the bar is now
 * opaque, sits on a rule, and sets its nav in mono small caps the way a running
 * head is set. It still does not resize on scroll.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[52px] border-b-2 border-foreground bg-background">
      <div className="mx-auto flex h-[52px] max-w-[1120px] items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-7">
          <Link href="/" aria-label="byescaleira — home">
            <Wordmark />
          </Link>
          <TesteiraViva />
        </div>

        <nav className="hidden md:flex" aria-label="Índice">
          <Indice />
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
