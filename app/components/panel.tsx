import { cn } from "@/lib/utils";

/**
 * A printed block, not a card.
 *
 * This was the one card in the system — 22px continuous corners, a hairline,
 * a 5px lift on hover. All three said "floating object", which is the grammar
 * of an interface. On a press sheet a block is defined by the rule around it
 * and it sits flat on the paper: a 2px ink border, a 3px corner, no shadow,
 * no lift. Hover moves the ink, not the block.
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
        "rounded-[3px] border-2 border-hairline bg-panel transition-colors duration-200",
        tinted &&
          "border-[color-mix(in_srgb,var(--accent-solid)_28%,transparent)] bg-[linear-gradient(140deg,color-mix(in_srgb,var(--accent-solid)_9%,var(--panel-base,var(--card)))_0%,var(--card)_48%)]",
        hover && "hover:border-accent",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function PanelIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[2px] border-2 border-hairline text-accent-ink">
      {children}
    </span>
  );
}
