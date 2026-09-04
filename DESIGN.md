# byescaleira — design system

The source of truth is [`app/globals.css`](app/globals.css). This document explains
what the values mean and why they are what they are, so changes are decisions
rather than drift.

---

## The thesis

**Apple supplies the discipline. The orbit supplies the identity.**

Apple's structure — SF, continuous corners, hairlines, generous whitespace,
restraint — is the grammar. It is not the differentiator: everyone can copy it.

The differentiator is the brand's own vocabulary, which was already there in the
project codenames (Rigel, Spica, Mission Control): **the site behaves like a
console tracking a live system.** The product sits at the centre and everything
else orbits it. That is the one idea every illustration, every animation and the
accent colour all serve.

Dark-first, with light as a deliberate second build — not an afterthought.

---

## Colour

Three roles, never mixed up: **ground** (what you paint on), **ink** (what you
read), **accent** (what matters right now).

### Ground and ink

| Token | Dark | Light | Use |
|---|---|---|---|
| `--background` | `#000000` | `#ffffff` | Page ground |
| `--surface` | `#0a0a0c` | `#f5f5f7` | Alternating sections |
| `--card` | `#161617` | `#ffffff` | Panels |
| `--hairline` | `rgba(255,255,255,.09)` | `#d2d2d7` | Every separator and border |
| `--foreground` | `#f5f5f7` | `#1d1d1f` | Primary ink |
| `--ink-2` | `#a1a1a6` | `#55555a` | Body secondary |
| `--ink-3` | `#86868b` | `#6e6e73` | Captions, meta, labels |

**Card must never equal surface.** Dark separates panels by fill lightness
(`#161617` on `#0a0a0c`). Light cannot — white on white — so it separates by
`--card-shadow`, which is `none` in dark. This is the single most common way the
light build breaks: set them equal and every panel dissolves into its section.

Light inks are one notch darker than Apple's `#6e6e73` / `#86868b` pair. Apple's
values clear AA on white but not on the `#f5f5f7` sections, which is where most
of this text actually sits.

### The orange, by role

`#FF6B00` is the brand. It is never decoration — it marks the one thing that
matters: the current milestone, the active branch, the moment the round ends.

| Token | Dark | Light | Use |
|---|---|---|---|
| `--accent-solid` | `#ff6b00` | `#ff6b00` | Fills only. Identical in both themes. |
| `--accent-ink` | `#ff8a3d` | `#bd4b00` | Orange **text**. Never `--accent-solid`. |
| `--accent-soft` | `rgba(255,107,0,.14)` | `rgba(255,107,0,.12)` | Icon tiles, status pills |
| `--on-accent` | `#1d1d1f` | `#1d1d1f` | Anything sitting **on** an orange fill |

**Ink on orange is near-black, in both themes.** White on `#FF6B00` measures
2.86:1 — under AA on the primary CTA. Darkening the orange enough to carry white
would take it to roughly `#C75200`, which is brown and no longer the brand. The
original mark solved this years ago: `logo-dark.svg` sets `#111111` on its orange
block. Near-black is brand-correct *and* accessible — 5.89:1. Applies to the CTA,
the wordmark tile, and any glyph on an orange fill.

`#FF6B00` clears text contrast on black but not on white. On light grounds it is
a fill; the text switches to `--accent-ink`.

### Contrast floors

AA for everything: **4.5:1** for text, **3:1** for text ≥24px (or ≥18.66px bold)
and for meaningful graphics. Both themes currently audit clean. Re-check after
any colour change — the light `#f5f5f7` sections are where things fail first, not
the white ones.

---

## Typography

**SF, from the system stack. No webfonts.**

```
-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text",
"Helvetica Neue", Helvetica, Arial, sans-serif
```

On the Apple devices this site is aimed at, this *is* SF Pro — nothing to
download, nothing to lay out twice. Mono is `ui-monospace, "SF Mono", Menlo`.

**Weights: 400, 500, 600. Nothing heavier.** 600 is the ceiling for headlines.

| Class | Size | Weight | Tracking |
|---|---|---|---|
| `.t-display` | `clamp(2.75rem, 6vw, 5.5rem)` | 600 | −0.035em |
| `.t-section` | `clamp(2rem, 4.2vw, 3.5rem)` | 600 | −0.03em |
| `.t-sub` | `clamp(1.5rem, 2.6vw, 2.125rem)` | 600 | −0.028em |
| `.t-card` | 21px | 600 | −0.02em |
| `.t-lead` | `clamp(17px, 1.5vw, 21px)` | 400 | — |
| `.t-body` | 17px | 400 | — |
| `.t-small` | 15px | 400 | — |
| `.t-caption` | 13px | 400 | — |
| `.t-eyebrow` | 17px | 600 | −0.01em, `--accent-ink` |

The larger the type, the tighter the tracking. Body text is never tracked.

**The ramp carries size, weight and tracking — never colour.** Colour is set at
the use site. Baking `text-ink` into `.t-sub` once meant `text-ink-3` could never
override it, and the hero subtitle rendered white when it should have been grey.

Eyebrows are sentence case in the accent. Never uppercase with wide tracking —
that was the old brutalist tic and it is gone.

---

## Shape

Nothing is square. The old system was `--radius: 0` everywhere.

| Radius | Use |
|---|---|
| 10px | Icon tiles |
| 16px | Inner surfaces, insets |
| 22px | Cards (`--radius`) |
| 28px | Large panels |
| 980px | Every control: buttons, pills, chips, tab bar |

980px is Apple's own value for pill controls. Devices use 38–44px.

---

## Materials

| Class | What it is |
|---|---|
| `.glass` | Page glass. `--glass-fill` + `blur(26px) saturate(180%)` + hairline |
| `.glass-bar` | The 52px nav. Slightly less blur, no border of its own |
| `.glass-device` | **Fixed dark.** Chrome inside a drawn phone |

Glass needs something behind it — never on a flat fill. In light it tints toward
the surface grey, because near-white on white is invisible.

**A device is a dark object in both themes.** Its internals never follow theme
tokens: a theme-following tab bar painted grey-on-black, and theme-following
accent ink put `#bd4b00` on a black screen. `Device` pins its own accent.

Project artwork is the opposite — it *does* flip, so anything drawn on it must
use the `--art-*` tokens rather than fixed values.

---

## Layout

- Content width **1120px**, gutters **24px mobile / 48px desktop** (`px-6 md:px-12`).
- Section rhythm **96px mobile / 112px desktop** (`py-24 md:py-28`); the closing CTA gets 112/128.
- Sections alternate `background` / `surface`.
- Separators are **1px hairlines**. No heavy borders, no card shadows in dark.
- Touch targets **44px minimum** on every tappable row, pill and tab item.
- Body uses `overflow-x: clip`, not `hidden` — `hidden` silently makes the body a
  scroll container, which breaks scroll listeners and viewport measurement.

---

## Motion

Three families. Anything that fits none does not ship — that is what keeps heavy
animation from becoming noise.

### ORBITAL — continuous, ambient, 15–90s, `linear`

Orbits, drifting stars, the breathing nebula, the code strip, the score reel, the
pipeline dot. Slow enough that you only notice it if you stop and look.

*Rules:* nothing orbital sits on top of text; no cycle shorter than 5s.

**The printed sky** (`PrintedSky`, on the hero) is the one place the space
theme and the print medium meet without either giving way. There is exactly one
mark that belongs to both: **the halftone dot.** A press builds tone from dots;
a night sky is dots. So the atmosphere is not a starfield dropped onto a print
— it is the same dot the illustrations are made of, at two pitches: a 78px
scatter drifting over 120s, and an 8px disc bleeding off the right edge, its
dots crowding in shadow and opening toward the light exactly as the planet in
the Mission Control plate does. A hairline arc gives it a terminator.

It is masked so density falls away long before the type starts, and the hero's
content is positioned above it. Reach for this before reaching for anything
that glows.

### REVEAL — once on entry, 0.7s, 70ms stagger

24px up, opacity 0→1, in reading order. Fires once and never replays.

### RESPONSE — on interaction only

ORBITAL is ambient and REVEAL fires once on entry; neither covers what happens
when a person touches something. Everything in this family is borrowed from the
press rather than invented — **if an effect cannot be explained by how a
screenprint is actually made, it does not belong here.**

| Effect | What it is |
|---|---|
| `.misreg` | The two plates slip out of register under the pointer. A real pull is never perfectly aligned, and that hair of offset is the signature of the medium. On `Panel`, so it is felt everywhere. |
| `.o-squeegee` | One pass, left to right, on load. The rule under the masthead is not drawn, it is **printed**. Fires once, never replays. |
| `PressMarks` | Crop marks at the viewport corners, faded in once the reader has scrolled past 220px. A sheet is printed oversized and trimmed; these are the marks that guide the blade. Marks that greet you on load are decoration — marks that appear once you have committed to the page are a detail. |
| `LivingMark` | The mark turns a few degrees toward the pointer. Decision 001 gives the character no face, so turning is the only way it can acknowledge you — and it works *because* there are no eyes to follow you. Pointer-fine devices only. |

All four are transform/opacity only, and all resolve to nothing under
`prefers-reduced-motion`.

### Easing — three curves, no others

| Curve | Use |
|---|---|
| `cubic-bezier(.32,.72,0,1)` | Default. Reveals, hovers, the pipeline dot |
| `cubic-bezier(.25,.1,.25,1)` | Colour and opacity only. Never position |
| `linear` | Orbits, drift, marquee |

### The rule that outranks both

**Content is never invisible by default.**

A reveal renders visible from the server and only opts into the hidden state
after mount. If JS never runs, the content is simply there. Release is driven by
three independent triggers — IntersectionObserver, a capture-phase scroll sweep,
and `visibilitychange` — because an observer that never fires leaves real content
at `opacity: 0`.

The sweep is throttled on a **timestamp, not `requestAnimationFrame`**: rAF is
suspended in a hidden document, which is precisely the case that would strand
content. Scroll is listened for on `document` in the capture phase, because
scroll does not bubble.

`prefers-reduced-motion` resolves every reveal **visible**, never hidden.

Animate `transform` and `opacity` only. The glow breathes with opacity on its own
layer — not with a shadow.

---

## Illustration

Nine assets, all **vector + CSS**. No image files, no Lottie, nothing to
download. They live in [`app/components/illustrations.tsx`](app/components/illustrations.tsx).

Orbital console · career trajectory · the shape of a round · pipeline ·
sparkline · code strip · starfield + comet · prism panes · branch graph

**One rule holds the set together:** hairline strokes on a quiet field, with
orange marking the single thing that matters. Nothing is filled, nothing is
decorative, and no illustration carries information the copy does not also state.

Icons are inline SVG on a 16/20/24 grid, stroke 1.8–1.9. **Never emoji, never
dingbats.**

The starfield and comet are a night-sky layer: hidden in light mode.

Drawn phones get **no fake status bar and no fake keyboard** — the real ones
render there on a real device, and a painted copy reads as doubled up.

---

## Components

| Component | Spec |
|---|---|
| Primary button | `--accent-solid` fill, `--on-accent` ink, radius 980, min-height 46px, 17px/500 |
| Secondary button | Transparent, hairline border, same metrics |
| Text link | `--accent-ink` + chevron that slides 4px on hover |
| Pill | Radius 980, `foreground` at 7%, 13px |
| Status pill | `--accent-soft` + `--accent-ink` when live; neutral when dormant |
| Card (`Panel`) | Radius 22, `--card`, hairline, `--card-shadow`, 5px lift on hover |
| List row | Hairline separator, chevron, 44px minimum |
| Nav | 52px, `.glass-bar`, one hairline. Does **not** resize on scroll |
| Mobile tab bar | Floating `.glass` pill, 62px, 24px from the bottom |

Nothing is active in the tab bar until the scroll position has been measured —
assuming the first tab flashes a wrong highlight on load.

---

## Do not

- Uppercase headings with wide tracking, or weights above 600
- Square corners, hard borders, or offset "brutalist" shadows
- White text or glyphs on an orange fill
- Colour baked into a type-ramp class
- `--card` equal to `--surface`
- Emoji as icons
- Fixed dark values on artwork that flips with the theme
- Any animation that content depends on to be visible

---

## Where it lives

| File | Holds |
|---|---|
| [`app/globals.css`](app/globals.css) | Tokens, type ramp, materials, keyframes, motion utilities |
| [`app/components/illustrations.tsx`](app/components/illustrations.tsx) | The nine drawn assets |
| [`app/components/panel.tsx`](app/components/panel.tsx) | The one card |
| [`app/components/scroll-reveal.tsx`](app/components/scroll-reveal.tsx) | The REVEAL controller |
| [`app/components/wordmark.tsx`](app/components/wordmark.tsx) | The mark |
| [`lib/content.ts`](lib/content.ts) | All copy. The design layer holds none. |
