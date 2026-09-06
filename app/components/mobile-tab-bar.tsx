"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    label: "Home",
    href: "#hero",
    icon: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V20h13V9.5" />
      </>
    ),
  },
  {
    label: "About",
    href: "#about",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.6" />
        <path d="M4.8 20c.9-3.4 3.8-5.2 7.2-5.2s6.3 1.8 7.2 5.2" />
      </>
    ),
  },
  {
    label: "Work",
    href: "#work",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="3" />
        <path d="M8.5 7V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V7" />
      </>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
      </>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    icon: (
      <>
        <path d="M3.5 6.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" />
        <path d="m4 7 8 5.5L20 7" />
      </>
    ),
  },
];

/**
 * A floating liquid-glass tab bar, iOS 26 style — the hamburger is gone.
 * It sits above the home indicator; the OS draws the status bar itself, so
 * nothing here imitates system chrome.
 */
export function MobileTabBar() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      let current = tabs[0].href;
      for (const tab of tabs) {
        const el = document.querySelector(tab.href);
        if (el && el.getBoundingClientRect().top <= 140) current = tab.href;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="glass fixed inset-x-4 bottom-[max(1.5rem,env(safe-area-inset-bottom))] z-50 flex h-[62px] items-center justify-around shadow-[0_12px_34px_rgba(0,0,0,.45)] md:hidden"
      aria-label="Section navigation"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.href;
        return (
          <a
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "relative flex min-h-12 w-[62px] flex-col items-center justify-center gap-[3px] transition-colors",
              isActive ? "text-accent-ink" : "text-ink-3"
            )}
          >
            {isActive && (
              <span className="absolute -top-px h-[2.5px] w-[22px] bg-accent" />
            )}
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {tab.icon}
            </svg>
            <span className="text-[10px] font-medium">{tab.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
