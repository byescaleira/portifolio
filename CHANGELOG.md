# Changelog

## [Unreleased]

### Fixed
- Light mode colour pass. `--card` and `--surface` were both `#f5f5f7`, so every panel on an alternating section dissolved into the section behind it — cards are now white, with a light-only shadow so they still read on the white sections where a hairline alone was not enough.
- Glass was built from `--card`, which in light mode meant near-white on white: the satellite chips and telemetry had almost no separation, and the same class was painting a grey tab bar inside the black phone. Glass now tints toward the surface grey, and the device carries its own fixed dark chrome.
- The code strip was a hardcoded `#060607` band across a white page; it and the project artwork, their inner panels and the branch/prism strokes now follow theme tokens instead of fixed dark values (dark text was landing on dark artwork).
- Light text colours darkened one notch each (`--ink-2` `#55555a`, `--ink-3` `#6e6e73`, `--accent-ink` `#bd4b00`): Apple's ramp clears AA on white but not on the `#f5f5f7` sections where most of this text actually sits.
- Starfield and comet are hidden in light mode — white stars on a white page, and a night-sky layer has no business in daylight.

### Changed
- Rebuilt the visual language around Apple's structure — SF system stack (no webfonts), continuous corners (radius 0 → 10/16/22/28/980), hairline separators, weights capped at 600, and Apple's neutral ramp. `#FF6B00` is kept as the primary but changes role: it marks the one thing that matters, instead of framing everything.
- The differentiator is the brand's own space vocabulary: the site reads as a console tracking a live system. Hero is asymmetric with an orbital console; the career is a rising trajectory instead of a bullet list; Cartola is introduced by the shape of a round — flat load for ninety minutes, then everyone at once.
- Skills became a bento grid; the mobile hamburger became a floating liquid-glass tab bar.
- Theme toggle is a segmented pill control and no longer needs a mounted flag.
- `body` uses `overflow-x: clip` rather than `hidden`, which was quietly turning it into a scroll container.

### Added
- `illustrations.tsx` — nine drawn, animated assets (orbital console, trajectory, round rhythm, pipeline, sparkline, code strip, starfield, prism panes, branch graph). All vector + CSS: no image files, no Lottie.
- A motion system with exactly two families: ORBITAL (continuous, ambient, 15–90s, linear) and REVEAL (once on entry, 0.7s, 70ms stagger). Three easing curves and nothing else.
- `Panel`/`PanelIcon` primitives and a `Wordmark` that keeps the "by" identity in the new language.

### Fixed
- Content can no longer be hidden by an animation that never runs. Reveals render visible from the server and only opt into the hidden state after mount; release is driven by three independent triggers (IntersectionObserver, a capture-phase scroll sweep, and `visibilitychange`), throttled on a timestamp rather than `requestAnimationFrame` — which is suspended in exactly the hidden-document case that would strand content. `prefers-reduced-motion` resolves every reveal visible.

### Removed
- The brutalist layer: `brutalist-card`, `glass-card`, `code-orbit`, `space-orbits`, `iphone-mockup`, `star-field`, and the `*-brutal` utilities.
- DM Sans, Space Grotesk and JetBrains Mono webfonts.

## [1.2.0] - Mars - 2026-06-25

### Fixed
- Dark/light/system theme toggle now works end-to-end; root no longer hardcodes `.dark`.

### Changed
- Refactored all sections to use CSS theme tokens (`bg-background`, `text-foreground`, `border-border`, `text-primary`) instead of hardcoded hex values.
- Standardized section rhythm and card density while preserving the brutalist orange identity.
- Contact section no longer exposes the email address; social links only.
- Updated public identity: name is now "Rafael Escaleira" everywhere.
- Updated social links to LinkedIn (`byescaleira`), GitHub (`byescaleira`), and Instagram (`rafaelescaleira`). Removed X/Twitter.

### Added
- New "Mission Control" section between Skills and Work with an animated iPhone mockup, typing Swift code, and an orbital constellation of skills.
- Reusable `IphoneMockup` and `CodeOrbit` illustration components.
- Missing `liquid-glass` and `glow-*` utility classes.
- Light mode palette: warm off-white background with the same orange accent.

### Deployed
- Production: https://www.byescaleira.com
- Vercel: https://byescaleira-frontend-qh8tjb7rm-byescaleira.vercel.app

## [1.1.0] - Venus - 2026-06-21

### Added
- Animated illustrations: starfield, orbit decorations, satellite strips, iPhone mockups, floating code blocks, scroll progress.
- iOS-style bottom Liquid Glass tab bar for mobile navigation.
- Dedicated detail pages for experiences and projects.
- Light, dark, and system theme support.
- Vivid orange as the primary accent color.

### Changed
- Contact section no longer exposes email, WhatsApp, or phone. Uses LinkedIn, GitHub, and Instagram.
- README rewritten to match byescaleira repository skeleton.

## [1.0.0] - Mercury - 2026-06-21

### Added
- Initial portfolio: Hero, About, Skills, Work, Projects, Contact.
- Deep Space / Liquid Glass visual identity.
- Framer Motion scroll animations.
- Responsive layout.

### Fixed
- Scroll-reveal sections staying invisible under static export.
