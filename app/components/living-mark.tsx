"use client";

import { useEffect, useRef } from "react";

/**
 * The mark turns toward the pointer.
 *
 * Decision 001 says the astronaut has no face: the visor is a mirror and
 * the character represents the craft, not the person. That leaves exactly
 * one way for it to acknowledge someone — it can turn. A few degrees of
 * tilt, damped, is the whole trick, and it works precisely because there
 * are no eyes to follow you: you see the helmet notice you without ever
 * seeing a face.
 *
 * Pointer-fine devices only, and CSS switches it off entirely under
 * `prefers-reduced-motion`. It never moves layout — transform only, on
 * its own layer — so nothing reflows while you move the mouse.
 */
export function LivingMark({
  children,
  /** Peak tilt in degrees at the far edge of the viewport. */
  maxTilt = 7,
}: {
  children: React.ReactNode;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        // Normalised offset from the mark's centre, clamped to the viewport.
        const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2)));
        const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2)));
        el.style.transform = `rotate(${(dx * maxTilt).toFixed(2)}deg) translate(${(dx * 2).toFixed(2)}px, ${(dy * 1.4).toFixed(2)}px)`;
      });
    };
    const onLeave = () => {
      el.style.transform = "";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [maxTilt]);

  return (
    <span ref={ref} className="living-mark inline-flex">
      {children}
    </span>
  );
}
