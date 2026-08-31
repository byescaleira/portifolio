import { cn } from "@/lib/utils";

/**
 * The one card in the system: card fill, a hairline, continuous corners,
 * and a 5px lift on hover. No drop shadows, no accent left-borders.
 */
export function Panel({
  children,
  className,
  tinted,
  hover = true,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** warm gradient fill — reserved for the one thing that matters on a page */
  tinted?: boolean;
  hover?: boolean;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "rounded-[22px] border border-hairline bg-panel",
        tinted &&
          "border-[color-mix(in_srgb,var(--accent-solid)_28%,transparent)] bg-[linear-gradient(140deg,color-mix(in_srgb,var(--accent-solid)_9%,var(--panel-base,var(--card)))_0%,var(--card)_48%)]",
        hover && "lift",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function PanelIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[11px] bg-accent-soft text-accent-ink">
      {children}
    </span>
  );
}
