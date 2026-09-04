# byescaleira

> How native software gets built when it can't fail.

The personal site of Rafael Escaleira, iOS Specialist at Globo, working on
Cartola. Live at **[byescaleira.com](https://byescaleira.com)**.

## What it is

A site built as a **printed sheet**, not an app screen.

The brand is a two-ink screenprint — safety orange and graphite on bone paper —
and the site is set the same way: a masthead instead of a hero, rules that bleed
edge to edge, plates with reversed-out title bands instead of floating cards,
and paper grain over the whole page. Nothing blurs, nothing casts a shadow.
Print has no depth of field.

The illustrations are pulled prints, not vector diagrams. The astronaut is the
brand's persona: an operator in a high-stakes environment, with a fully closed
mirrored visor and never a face.

Both themes are the same press — **ink on bone paper**, and the same print
pulled on **black paper**.

## Constraints that shaped it

- **Ink on the brand orange is near-black, never white.** White on `#ff6b00`
  measures 2.86:1 and fails AA on the primary CTA.
- **No orange bright enough to feel vibrant clears 4.5:1 as text on a light
  ground** — `#ff6b00` measures 1.92:1 on the paper. So the vibrancy lives in
  *fills*: rules, folios, bands. Orange type steps down to `--accent-ink`.
- **Charts are drawn, not generated.** The career trajectory, pipeline,
  sparkline and round rhythm plot real values, so they stay vector + CSS. Only
  the scenic illustrations are image assets.
- **Content is never invisible by default.** A reveal renders visible from the
  server and only opts into the hidden state after mount.

## Built with

| | |
|---|---|
| Framework | Next.js 16, App Router, static export |
| Language | TypeScript |
| Styling | Tailwind CSS v4, tokens in `app/globals.css` |
| Type | Baloo 2 (display) · Archivo (UI) · Newsreader (reading) |
| Motion | Framer Motion, scroll progress only |
| Deployment | Vercel |

## Structure

```
app/
  sections/       Hero, About, Skills, Mission Control, Work, Projects, Contact
  components/     shared components — Panel, Print, Wordmark, illustrations
  experience/     dedicated pages per role
  project/        dedicated pages per project
  not-found.tsx   the 404
  globals.css     every token, the type ramp, the paper grain
lib/content.ts    source of truth for experiences and projects
public/           the pulled prints as .webp, plus the favicon set
art-src/          the 1254px PNG masters, not served (gitignored)
```

## Assets

The illustrations ship as WebP with alpha, resized to 900px and re-encoded from
the PNG masters in `art-src/`. That folder sits outside `public/` on purpose:
with `output: "export"` everything in `public/` is copied into the build, and
the masters are 10 MB.

To add or replace one, drop the PNG in `art-src/` and re-encode into `public/`
before wiring it up.

## Quick start

```bash
npm install
npm run dev
```

## Documentation

- [DESIGN.md](./DESIGN.md) — the design system, and why each value is what it is
- [ARCHITECTURE.md](./ARCHITECTURE.md) — how the site is built
- [DECISIONS.md](./DECISIONS.md) — technical choices, with the reasoning
- [CLAUDE.md](./CLAUDE.md) — project brief and iteration context
- [CHANGELOG.md](./CHANGELOG.md) — release history

The brand itself — the persona spec, the illustration prompts, the naming
system — lives in the sibling `byescaleira/brand` repository.

## License

MIT © Rafael Escaleira

---

Built by [Rafael Escaleira](https://byescaleira.com) ·
[@byescaleira](https://github.com/byescaleira)

If something here helped you, let me know. If something is wrong, tell me louder.
