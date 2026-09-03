import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** The folio — a printed section carries its number, not a decoration. */
  folio?: string;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  folio,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        "mb-12",
        align === "center" ? "mx-auto max-w-[760px] text-center" : "",
        className
      )}
    >
      {/* running head for the section: folio and label on one rule */}
      {(folio || eyebrow) && (
        <div className="flex items-baseline justify-between border-b border-hairline pb-2">
          {eyebrow && (
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">
              {eyebrow}
            </p>
          )}
          {folio && (
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              {folio}
            </p>
          )}
        </div>
      )}
      <h2 className="t-section mt-5 max-w-[18ch] text-balance">{title}</h2>
      {description && <p className="t-lead mt-5 max-w-[58ch] text-pretty">{description}</p>}
    </ScrollReveal>
  );
}
