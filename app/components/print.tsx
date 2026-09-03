import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A screenprint, pasted onto the page.
 *
 * The illustrations are two-ink prints composed against bone paper: safety
 * orange and graphite, with the paper itself doing the work of the third
 * colour. That has a consequence the rest of the site does not have — the art
 * cannot follow the theme. On the dark build the graphite ink would sit on
 * near-black paper and the halftone that gives every form its shape would
 * simply vanish.
 *
 * So the print brings its own stock — the artwork is generated on bone paper
 * and that baked-in ground IS the plate. On the light build the site's paper is
 * tuned to the artwork's paper, so the edge disappears and the print becomes
 * part of the sheet. On the dark build the same rectangle reads as a pulled
 * print pasted onto a dark page, which is what a screenprint actually is.
 *
 * One asset per illustration, forever, instead of a light and a dark copy that
 * drift apart.
 *
 * `rule` draws a border for art that needs its edge declared rather than
 * dissolved — mostly on the dark build, or against a surface section.
 */
export function Print({
  src,
  alt,
  width,
  height,
  caption,
  rule = false,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Set in mono under the plate, the way a plate is captioned. */
  caption?: string;
  rule?: boolean;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure className={cn("flex flex-col gap-2.5", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-[18px]",
          rule && "border-2 border-hairline"
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-auto w-full"
        />
      </div>
      {caption && (
        <figcaption className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
