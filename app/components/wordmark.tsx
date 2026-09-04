import Image from "next/image";

import { cn } from "@/lib/utils";
import { LivingMark } from "./living-mark";

/**
 * The mark is the helmet.
 *
 * It was a "by" tile with a slow orbit drawn around it — a vector stand-in from
 * before the character existed. Now that the screenprinted helmet is the
 * primary mark (decision 005), the tile has no job: two marks competing in the
 * same corner is one too many. The word is set in type beside it rather than
 * printed into the art, so it stays crisp at every size and can be changed
 * without regenerating the illustration.
 */
export function Wordmark({ size = 30, className }: { size?: number; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LivingMark>
        <Image
          src="/logo.webp"
          alt=""
          width={size}
          height={size}
          priority
          className="shrink-0"
          style={{ width: size, height: size }}
        />
      </LivingMark>
      <span
        className="font-semibold tracking-[-0.01em] text-ink"
        style={{ fontSize: size * 0.53 }}
      >
        byescaleira
      </span>
    </span>
  );
}
