"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

const options = [
  { key: "light", label: "Light mode", Icon: Sun },
  { key: "dark", label: "Dark mode", Icon: Moon },
  { key: "system", label: "System preference", Icon: Monitor },
] as const;

/** A segmented control, iOS style: pill track, pill thumb, no heavy fill. */
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // On the server both are undefined, so nothing is marked active and the
  // first client render matches. No mounted flag, no effect.
  const current =
    theme === "system"
      ? "system"
      : resolvedTheme === "dark"
        ? "dark"
        : resolvedTheme === "light"
          ? "light"
          : null;

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-hairline p-0.5"
      role="group"
      aria-label="Theme"
    >
      {options.map(({ key, label, Icon }) => {
        const active = current === key;
        return (
          <button
            key={key}
            type="button"
            aria-label={label}
            aria-pressed={active}
            onClick={() => setTheme(key)}
            className={`flex size-7 items-center justify-center rounded-full transition-colors ${
              active
                ? "bg-accent-soft text-accent-ink"
                : "text-ink-3 hover:text-ink"
            }`}
          >
            <Icon className="size-[15px]" />
          </button>
        );
      })}
    </div>
  );
}
