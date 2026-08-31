"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** seconds — siblings should step by 0.07 in reading order */
  delay?: number;
}

/* ------------------------------------------------------------------
   One shared controller for every reveal on the page.

   IntersectionObserver is the primary trigger, but it is not the only
   one: it gets throttled in backgrounded and offscreen frames, and a
   reveal that never fires leaves real content at opacity 0. So a rAF
   throttled scroll sweep releases anything that is actually in view,
   and returning to the tab sweeps again. Between them, the invariant
   holds: nothing stays hidden that the reader can see.
   ------------------------------------------------------------------ */

const pending = new Set<HTMLElement>();
let observer: IntersectionObserver | null = null;
let listening = false;
let lastSweep = 0;

function release(el: HTMLElement) {
  el.dataset.reveal = "in";
  pending.delete(el);
  observer?.unobserve(el);
  if (pending.size === 0) stopListening();
}

function sweep() {
  const h = window.innerHeight;
  for (const el of [...pending]) {
    const r = el.getBoundingClientRect();
    if (r.top < h * 0.92 && r.bottom > 0) release(el);
  }
}

/**
 * Throttled on a timestamp rather than requestAnimationFrame: rAF is suspended
 * in a hidden document, which is precisely when a reveal would otherwise get
 * stuck. A handful of rect reads every 100ms costs nothing.
 */
function scheduleSweep() {
  const now = Date.now();
  if (now - lastSweep < 100) return;
  lastSweep = now;
  sweep();
}

function startListening() {
  if (listening) return;
  listening = true;
  document.addEventListener("scroll", scheduleSweep, { passive: true, capture: true });
  window.addEventListener("resize", scheduleSweep, { passive: true });
  document.addEventListener("visibilitychange", scheduleSweep);
}

function stopListening() {
  if (!listening) return;
  listening = false;
  document.removeEventListener("scroll", scheduleSweep, { capture: true });
  window.removeEventListener("resize", scheduleSweep);
  document.removeEventListener("visibilitychange", scheduleSweep);
}

function watch(el: HTMLElement) {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) release(entry.target as HTMLElement);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
  }
  pending.add(el);
  observer.observe(el);
  startListening();
  scheduleSweep();
}

/**
 * REVEAL family: 24px up, 0.7s, once.
 *
 * The element renders VISIBLE from the server and stays visible if JS never
 * runs — only then does it opt into the hidden state.
 */
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.dataset.reveal = "pending";
    watch(el);

    return () => {
      pending.delete(el);
      observer?.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
      className={cn(className)}
    >
      {children}
    </div>
  );
}
