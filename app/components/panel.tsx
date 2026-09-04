import { cn } from "@/lib/utils";

/**
 * A printed plate, not a card.
 *
 * It started as the one card in the system — 22px continuous corners, a
 * hairline, a 5px lift on hover — all of which said "floating object", the
 * grammar of an interface. Then it became a bordered rectangle, which was
 * honest but dull: a box with a line around it is not a design.
 *
 * A plate in a printed catalogue is built from two fields, not one: a solid
 * title band with the heading reversed out of it, and a body below on the
 * paper. That is where the structure comes from, and it costs no decoration —
 * the band does the work the heading was doing anyway. The corner stays
 * generous because the subject is space, and space is capsules and domes.
 *
 * Pass `title` to get the band. Without it the plate is untitled and behaves as
 * before, for the cases where a heading already lives inside the content.
 */
export function Panel({
  children,
  className,
  title,
  /** Small mono mark at the right of the band — a plate number, a status, a year. */
  index,
  tinted,
  hover = true,
  bodyClassName,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  title?: string;
  index?: string;
  /** The one plate on a page that matters: the band prints in accent, not ink. */
  tinted?: boolean;
  hover?: boolean;
  bodyClassName?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "rounded-[18px] border-2 border-hairline bg-panel transition-colors duration-200",
        tinted && "border-accent",
        // The plates slip out of register under the pointer — the signature
        // of the medium, and the reason this is not just a bordered box.
        hover && !tinted && "misreg",
        className
      )}
    >
      {title && (
        <div
          className={cn(
            "flex items-baseline justify-between gap-4 rounded-t-[16px] border-b-2 px-5 py-2.5 sm:px-6",
            tinted
              ? "border-accent bg-accent text-on-accent"
              : "border-hairline bg-foreground text-background"
          )}
        >
          <h3 className="text-[13px] font-semibold uppercase leading-none tracking-[0.09em]">
            {title}
          </h3>
          {index && (
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] opacity-75">
              {index}
            </span>
          )}
        </div>
      )}
      <div className={cn(title && "p-5 sm:p-6", bodyClassName)}>{children}</div>
    </Tag>
  );
}

export function PanelIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-[34px] shrink-0 items-center justify-center rounded-[10px] border-2 border-hairline text-accent-ink">
      {children}
    </span>
  );
}
