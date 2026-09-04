"use client";

import { useEffect, useState } from "react";

/**
 * Crop marks at the four corners of the sheet.
 *
 * A press sheet is printed oversized and trimmed, and the marks that
 * guide the blade sit just outside the live area. Putting them at the
 * viewport corners says "this is a printed sheet" without a word of copy —
 * and it is the kind of detail a reader notices on the second visit, not
 * the first, which is the right weight for something this quiet.
 *
 * They stay hidden until the reader has actually started reading. Marks
 * that greet you on load are decoration; marks that appear once you have
 * committed to the page are a detail.
 */
export function PressMarks() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden="true">
      {CORNERS.map((c) => (
        <span
          key={c.key}
          className="crop-mark"
          data-shown={shown}
          style={c.style}
        />
      ))}
    </div>
  );
}

/* Each mark is an L: the vertical hair and the horizontal hair meet at the
   corner of the live area, and both run outward toward the trim. */
const CORNERS = [
  { key: "tl", style: { top: 18, left: 18 } },
  { key: "tr", style: { top: 18, right: 18 } },
  { key: "bl", style: { bottom: 18, left: 18 } },
  { key: "br", style: { bottom: 18, right: 18 } },
] as const;
