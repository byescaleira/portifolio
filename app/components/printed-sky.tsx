import { cn } from "@/lib/utils";

/**
 * A planet, printed.
 *
 * The subject is space and the medium is a two-ink screenprint, and there is
 * exactly one mark that is both at once: the halftone dot. A press builds tone
 * from dots; a night sky is dots. So the atmosphere here is not a starfield
 * dropped onto a print — it is the same dot the illustrations are made of,
 * used at two densities.
 *
 * The disc bleeds off the right edge with its dots crowding in shadow and
 * opening toward the light, which is exactly how the planet in the Mission
 * Control plate is built. The scatter behind it is the same dot at a much
 * coarser pitch. Both drift on the ORBITAL clock — 80s and 120s, slow enough
 * that you only notice if you stop and look.
 *
 * It never sits on top of text: the hero's content is positioned above it, and
 * the whole thing is masked so density falls off long before the type starts.
 */
export function PrintedSky({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* the scatter — a coarse dot pitch, drifting slowly across */}
      <div
        className="o-drift absolute inset-0"
        style={{
          ["--dur" as string]: "120s",
          opacity: 0.5,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--ink-3) 0.9px, transparent 1.2px)",
          backgroundSize: "78px 64px",
          maskImage:
            "radial-gradient(120% 90% at 78% 18%, #000 0%, #000 42%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 78% 18%, #000 0%, #000 42%, transparent 78%)",
        }}
      />

      {/* the disc — dots crowd in shadow, open toward the light, and it
          bleeds off the right edge rather than sitting politely inside */}
      <div
        className="o-spin absolute rounded-full"
        style={{
          ["--dur" as string]: "80s",
          top: "-14%",
          right: "-16%",
          width: "min(46vw, 640px)",
          aspectRatio: "1",
          opacity: 0.42,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, var(--ink-2) 1.15px, transparent 1.45px)",
          backgroundSize: "8px 8px",
          maskImage: "linear-gradient(118deg, #000 6%, rgba(0,0,0,.45) 44%, transparent 74%)",
          WebkitMaskImage:
            "linear-gradient(118deg, #000 6%, rgba(0,0,0,.45) 44%, transparent 74%)",
        }}
      />

      {/* the terminator — one hairline arc, the edge of the printed disc */}
      <div
        className="absolute rounded-full border border-hairline"
        style={{
          top: "-14%",
          right: "-16%",
          width: "min(46vw, 640px)",
          aspectRatio: "1",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
