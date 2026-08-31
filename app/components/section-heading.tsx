import { cn } from "@/lib/utils";
import { ScrollReveal } from "./scroll-reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        "mb-14",
        align === "center" ? "mx-auto max-w-[760px] text-center" : "max-w-[760px]",
        className
      )}
    >
      {eyebrow && <p className="t-eyebrow">{eyebrow}</p>}
      <h2 className="t-section mt-2.5 text-balance">{title}</h2>
      {description && <p className="t-lead mt-5 text-pretty">{description}</p>}
    </ScrollReveal>
  );
}
