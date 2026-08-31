import { cn } from "@/lib/utils";

/**
 * The mark, in the new language: the neubrutalist hard-shadow block became a
 * continuous-corner tile with a slow orbit around it. Same identity, same "by".
 */
export function Wordmark({ size = 26, className }: { size?: number; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        className="relative flex shrink-0 items-center justify-center rounded-[7px] bg-accent font-semibold tracking-[-0.02em] text-white"
        style={{ width: size, height: size, fontSize: size * 0.5 }}
      >
        by
        <svg
          viewBox="0 0 40 40"
          className="pointer-events-none absolute overflow-visible"
          style={{ inset: -size * 0.27 }}
          aria-hidden="true"
        >
          <ellipse
            className="o-spin"
            style={{ ["--dur" as string]: "46s", transformOrigin: "20px 20px" }}
            cx="20"
            cy="20"
            rx="19"
            ry="7.5"
            fill="none"
            stroke="rgba(255,138,61,.5)"
            strokeWidth="1"
          />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-[-0.015em] text-ink">
        escaleira
      </span>
    </span>
  );
}
