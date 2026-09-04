import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Chevron } from "../components/illustrations";
import { LivingMark } from "../components/living-mark";
import { Panel, PanelIcon } from "../components/panel";

export const metadata: Metadata = {
  title: "Design system — Rafael Escaleira",
  description:
    "The system behind byescaleira.com: colour, type, shape, motion, components and voice, with the reasoning and the measured numbers behind each decision.",
};

/* ============================================================
   Every value on this page is read off the real tokens in
   globals.css, and every contrast figure was measured rather than
   estimated. A design system page that drifts from its source is
   worse than none, because it is trusted.
   ============================================================ */

export default function DesignSystemPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 flex flex-1 flex-col bg-background">
        {/* running head */}
        <div className="border-b border-hairline">
          <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-2.5 md:px-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              byescaleira · design system
            </p>
            <Link
              href="/"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3 transition-colors hover:text-accent-ink"
            >
              Back to the site
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1120px] px-6 md:px-12">
          <h1 className="t-display mt-10 max-w-[14ch] text-balance md:mt-14">
            The system behind this page.
          </h1>
          <div className="o-squeegee mt-5 h-[7px] w-full rounded-full bg-accent" />

          <p className="t-lead mt-8 max-w-[62ch] text-pretty">
            Every value here is read off the real tokens, and every contrast
            figure was measured rather than estimated. This page exists so a
            decision can be argued with instead of guessed at &mdash; each rule
            carries the reason it exists, and most of them exist because
            something broke without them.
          </p>
          <p className="t-body mt-4 max-w-[62ch] text-pretty">
            The source of truth is{" "}
            <code className="font-mono text-[0.92em] text-accent-ink">
              app/globals.css
            </code>
            . If this page and that file disagree, the file wins and this page
            is stale.
          </p>
        </div>

        <Section folio="01" label="Foundations" title="Colour">
          <Prose>
            Three roles, never mixed up: <Strong>ground</Strong> is what you
            paint on, <Strong>ink</Strong> is what you read, <Strong>accent</Strong>{" "}
            is what matters right now. The palette is a two-ink screenprint, so
            the same press runs on bone paper and on black paper &mdash; the
            themes are two stocks, not two designs.
          </Prose>

          <SubHead>Two inks, one paper</SubHead>
          <Prose small>
            The whole palette, stated the way a press states it. This bar opened
            the site for a while; it belongs here, where declaring the system is
            the job rather than a distraction from the promise.
          </Prose>
          <div>
            <div className="flex h-16 overflow-hidden rounded-[12px] border-2 border-hairline">
              <span className="flex-1 bg-accent" />
              <span className="flex-1 border-l-2 border-hairline bg-foreground" />
              <span className="flex-1 border-l-2 border-hairline bg-background" />
            </div>
            <div className="mt-2 flex font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3">
              <span className="flex-1">Safety &mdash; the accent</span>
              <span className="flex-1">Ink &mdash; the foreground</span>
              <span className="flex-1">Stock &mdash; the paper</span>
            </div>
          </div>

          <SubHead>Ground and ink</SubHead>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Swatch name="--background" light="#f3efe5" dark="#0b0a09" role="The paper. Page ground." />
            <Swatch name="--surface" light="#e6e0d2" dark="#17150f" role="Alternating sections." />
            <Swatch name="--card" light="#fbf8f1" dark="#252019" role="Plates. Never equal to surface." />
            <Swatch name="--foreground" light="#26241f" dark="#eae4d6" role="Primary ink." />
            <Swatch name="--ink-2" light="#4e4a41" dark="#ada595" role="Body secondary." />
            <Swatch name="--ink-3" light="#5f5a50" dark="#918a7c" role="Captions, meta, labels." />
            <Swatch name="--hairline" light="#4e4a41" dark="rgba(234,228,214,.34)" role="Every rule and border." />
            <Swatch name="--accent-solid" light="#ff6b00" dark="#ff6b00" role="Fills only. Identical in both." />
            <Swatch name="--accent-ink" light="#ad3e00" dark="#ff8a3d" role="Orange text. Never accent-solid." />
          </div>

          <Rule
            title="Ink on the accent is near-black, never white"
            body="White on #ff6b00 measures 2.86:1 — under AA on the primary CTA. Darkening the orange enough to carry white would take it to roughly #c75200, which is brown and no longer the brand. --on-accent is #26241f in both themes: 5.43:1, brand-correct and accessible."
          />
          <Rule
            title="The vibrancy lives in fills, not in type"
            body="No orange bright enough to feel vibrant clears 4.5:1 as text on a light ground — #ff6b00 measures 2.49:1 on the paper. That is physics, not caution. So orange type steps down to --accent-ink and the saturated orange goes into rules, folios and bands, which is what a screenprint does anyway: it floods ink, it does not set coloured text."
          />

          <SubHead>Measured contrast</SubHead>
          <Prose small>
            Worst case across all three grounds &mdash; background, surface and
            card. AA floors: 4.5:1 for body text, 3:1 for text at 24px or above
            and for meaningful graphics.
          </Prose>
          <ContrastTable />

          <Rule
            title="--card must never equal --surface"
            body="Dark separates plates by fill lightness; light cannot do the same without the plate dissolving into the section behind it, so it separates by fill plus --card-shadow, which is none in dark. Setting them equal is the single most common way the light build breaks."
          />
        </Section>

        <Section folio="02" label="Foundations" title="Typography">
          <Prose>
            <Strong>SF, from the system stack. No webfonts.</Strong>{" "}
            On the Apple
            devices this site is aimed at, the stack resolves to SF Pro: nothing
            to download, nothing to lay out twice. A webfont experiment ran and
            was reverted &mdash; the print language lives in the layout, the
            rules and the ink, not in the type.
          </Prose>
          <CodeLine>{`-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Helvetica, Arial, sans-serif`}</CodeLine>
          <Prose small>
            Mono is <code className="font-mono">ui-monospace, &quot;SF Mono&quot;, Menlo</code>.
            Weights are <Strong>400, 500, 600 &mdash; nothing heavier</Strong>. 600
            is the ceiling for headlines.
          </Prose>

          <SubHead>The ramp</SubHead>
          <div className="flex flex-col divide-y divide-hairline border-y-2 border-hairline">
            <RampRow cls="t-display" spec="clamp(2.75rem, 6vw, 5.5rem) · 600 · −0.035em">
              <span className="t-display">Native craft</span>
            </RampRow>
            <RampRow cls="t-section" spec="clamp(2rem, 4.2vw, 3.5rem) · 600 · −0.03em">
              <span className="t-section">Section heading</span>
            </RampRow>
            <RampRow cls="t-sub" spec="clamp(1.5rem, 2.6vw, 2.125rem) · 600 · −0.028em">
              <span className="t-sub">Subheading</span>
            </RampRow>
            <RampRow cls="t-card" spec="1.3125rem · 600 · −0.02em">
              <span className="t-card">Plate title</span>
            </RampRow>
            <RampRow cls="t-lead" spec="clamp(1.0625rem, 1.5vw, 1.3125rem) · 400">
              <span className="t-lead">Lead paragraph, the deck under a heading.</span>
            </RampRow>
            <RampRow cls="t-body" spec="1.0625rem · 400 · 1.47">
              <span className="t-body">Body copy, set at a comfortable measure.</span>
            </RampRow>
            <RampRow cls="t-small" spec="0.9375rem · 400">
              <span className="t-small">Small &mdash; supporting detail.</span>
            </RampRow>
            <RampRow cls="t-caption" spec="0.8125rem · 400">
              <span className="t-caption">Caption &mdash; meta and labels.</span>
            </RampRow>
            <RampRow cls="t-eyebrow" spec="1.0625rem · 600 · accent-ink">
              <span className="t-eyebrow">Eyebrow</span>
            </RampRow>
          </div>

          <Rule
            title="The ramp carries size, weight and tracking — never colour"
            body="Baking text-ink into t-sub once meant text-ink-3 could never override it, and the hero subtitle rendered white where it should have been grey. Colour is set at the use site."
          />
          <Rule
            title="The larger the type, the tighter the tracking"
            body="−0.035em at display down to none at body. Body text is never tracked. These values are tuned for SF Pro specifically: swapping the family without retuning them leaves the new face either cramped or loose."
          />
          <Rule
            title="Eyebrows are sentence case in the accent"
            body="Never uppercase with wide tracking — that was the old brutalist tic and it is gone. The one place uppercase survives is the mono running head and the plate title band, where it is a label rather than a heading, and there it takes positive tracking."
          />
        </Section>

        <Section folio="03" label="Foundations" title="Shape and material">
          <Prose>
            Nothing is square, and nothing is Apple. What made the old system
            read as an interface was not the radius &mdash; it was 22px{" "}
            <em>plus</em> glass <em>plus</em> a shadow <em>plus</em> a hover
            lift. With an ink border and no shadow, a generous curve reads as a
            printed label instead. The subject is space, and space is capsules
            and domes.
          </Prose>

          <SubHead>Radius ladder</SubHead>
          <div className="flex flex-wrap gap-3">
            {[
              ["sm", 8],
              ["md", 12],
              ["lg", 18],
              ["xl", 22],
              ["3xl", 28],
              ["4xl", 34],
            ].map(([name, px]) => (
              <div key={name as string} className="flex flex-col items-center gap-2">
                <div
                  className="size-[72px] border-2 border-hairline bg-panel"
                  style={{ borderRadius: `${px}px` }}
                />
                <p className="font-mono text-[11px] text-ink-3">
                  {name as string} · {px as number}px
                </p>
              </div>
            ))}
            <div className="flex flex-col items-center gap-2">
              <div className="flex h-[72px] w-[104px] items-center justify-center rounded-full border-2 border-hairline bg-panel" />
              <p className="font-mono text-[11px] text-ink-3">pill · 980px</p>
            </div>
          </div>
          <Prose small>
            <Strong>--radius is 18px</Strong>, the plate default. 980px is
            reserved for controls: buttons, pills, chips.
          </Prose>

          <SubHead>Paper</SubHead>
          <Prose>
            A static SVG turbulence sits over the whole page &mdash; no image
            file, no request. It <Strong>multiplies</Strong> into the ink on
            bone paper and <Strong>screens</Strong> over it on black paper,
            which is how the two presses actually behave. It is the difference
            between a screenprint and a beige page.
          </Prose>
        </Section>

        <Section folio="04" label="System" title="Motion">
          <Prose>
            Three families. Anything that fits none does not ship &mdash; that
            is what keeps heavy animation from becoming noise. And one rule
            outranks all three:{" "}
            <Strong>content is never invisible by default.</Strong>{" "}
            A reveal
            renders visible from the server and only opts into the hidden state
            after mount, so if JS never runs the content is simply there.
          </Prose>

          <div className="grid gap-4 md:grid-cols-3">
            <Panel title="Orbital" index="15–90s" hover={false}>
              <p className="t-small">
                Continuous, ambient, linear. Orbits, drift, the code strip, the
                live dot. Slow enough that you only notice it if you stop and
                look.
              </p>
              <p className="mt-3 font-mono text-[12px] text-ink-3">
                Nothing orbital sits on top of text. No cycle under 5s.
              </p>
            </Panel>
            <Panel title="Reveal" index="0.7s · 70ms" hover={false}>
              <p className="t-small">
                Once on entry, in reading order. 24px up, opacity 0 to 1. Fires
                once and never replays.
              </p>
              <p className="mt-3 font-mono text-[12px] text-ink-3">
                Released by three independent triggers, so a dead observer never
                strands content at opacity 0.
              </p>
            </Panel>
            <Panel title="Response" index="on interaction" hover={false}>
              <p className="t-small">
                Borrowed from the press, not invented. Misregistration, the
                squeegee pass, crop marks, the mark that turns.
              </p>
              <p className="mt-3 font-mono text-[12px] text-ink-3">
                If an effect cannot be explained by how a screenprint is made,
                it does not belong here.
              </p>
            </Panel>
          </div>

          <SubHead>Response, in the open</SubHead>
          <div className="grid gap-4 sm:grid-cols-2">
            <Demo
              title="Misregistration"
              hint="Hover the plate"
              body="The two plates slip out of register under the pointer. A real pull is never perfectly aligned, and that hair of offset is the signature of the medium."
            >
              <div className="misreg h-[92px] rounded-[18px] border-2 border-hairline bg-panel" />
            </Demo>
            <Demo
              title="The mark turns"
              hint="Move the pointer"
              body="Decision 001 gives the character no face, so turning is the only way it can acknowledge you — and it lands precisely because there are no eyes to follow you."
            >
              <div className="flex h-[92px] items-center justify-center">
                <LivingMark>
                  <Image src="/logo.webp" alt="" width={64} height={64} />
                </LivingMark>
              </div>
            </Demo>
          </div>

          <SubHead>Easing &mdash; three curves, no others</SubHead>
          <SpecList
            rows={[
              ["cubic-bezier(.32,.72,0,1)", "Default. Reveals, hovers, the squeegee."],
              ["cubic-bezier(.25,.1,.25,1)", "Colour and opacity only. Never position."],
              ["linear", "Orbits, drift, marquee."],
            ]}
          />
          <Rule
            title="prefers-reduced-motion resolves every reveal visible"
            body="Never hidden. All animation and transition durations collapse to 0.001ms, and anything still marked pending is forced to opacity 1 with no transform. Animate transform and opacity only."
          />
        </Section>

        <Section folio="05" label="System" title="Components">
          <SubHead>Plate</SubHead>
          <Prose>
            The one container. A plate in a printed catalogue is built from two
            fields, not one: a solid title band with the heading reversed out of
            it, and a body below on the paper. The band does the work the
            heading was doing anyway, so the structure costs no decoration.
          </Prose>
          <div className="grid gap-4 md:grid-cols-3">
            <Panel title="Titled" index="index">
              <p className="t-small">
                Band plus body. The index takes a plate number, a status or a
                year &mdash; anything true, never a label.
              </p>
            </Panel>
            <Panel title="Tinted" index="the one" tinted>
              <p className="t-small">
                Reserved for the one thing that matters on a page. The band
                prints in accent with ink over it.
              </p>
            </Panel>
            <Panel>
              <p className="t-small">
                Untitled, for when a heading already lives inside the content.
                Hover to see the plates slip.
              </p>
            </Panel>
          </div>

          <SubHead>Controls</SubHead>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <span className="btn-primary cursor-default">Primary</span>
            <span className="inline-flex items-center gap-1.5 text-[17px] text-accent-ink">
              Text link
              <Chevron />
            </span>
            <span className="pill-accent">Status pill</span>
            <PanelIcon>
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2.8 21 8v8l-9 5.2L3 16V8z" />
                <path d="M12 12 21 8M12 12v9.2M12 12 3 8" />
              </svg>
            </PanelIcon>
          </div>
          <SpecList
            rows={[
              ["Primary button", "--accent-solid fill, --on-accent ink, radius 980, min-height 46px, 17px/500"],
              ["Text link", "--accent-ink plus a chevron that slides 4px on hover"],
              ["Status pill", "--accent-soft and --accent-ink when live; neutral when dormant"],
              ["Icons", "Inline SVG on a 16/20/24 grid, stroke 1.8–1.9. Never emoji, never dingbats"],
              ["Touch targets", "44px minimum on every tappable row, pill and tab item"],
            ]}
          />
        </Section>

        <Section folio="06" label="System" title="Illustration">
          <Prose>
            Two tiers, and they are different languages. The mistake worth
            avoiding is treating them as one.
          </Prose>
          <div className="grid gap-4 md:grid-cols-2">
            <Panel title="Tier 1 — the print" index="raster" hover={false}>
              <p className="t-small">
                Two-ink screenprint: safety orange and graphite, with a painted
                bone off-white doing the work of the paper so the art survives
                on a transparent ground. Halftone builds every mid-tone; the
                plates print slightly out of register; contours carry visible
                hand pressure.
              </p>
              <p className="mt-3 font-mono text-[12px] text-ink-3">
                Ships as WebP with alpha at 900px. PNG masters live in art-src/,
                outside public/, because a static export copies public/ whole.
              </p>
            </Panel>
            <Panel title="Tier 2 — the mark" index="vector" hover={false}>
              <p className="t-small">
                The helmet, reduced. It must survive 32px, one colour and a
                circular crop. Side pods sit tangent inside the silhouette
                &mdash; pods that protrude read as animal ears when reduced,
                which three candidates all proved.
              </p>
              <p className="mt-3 font-mono text-[12px] text-ink-3">
                Primary mark and favicon. The name is set in type beside it,
                never printed into the art.
              </p>
            </Panel>
          </div>
          <Rule
            title="Charts are drawn, not generated"
            body="The career trajectory, pipeline, sparkline and round rhythm plot real values, so they stay vector and CSS. Generating them as images would fabricate data. Only scenic illustration is an image asset."
          />
          <Rule
            title="The character has no face, ever"
            body="The visor is fully closed and opaque. Exactly two reflections — one large slash and one small dot — never two matched shapes side by side, which reads as eyes. Emotional states come from pose and context."
          />
        </Section>

        <Section folio="07" label="System" title="Voice">
          <Prose>
            The promise is{" "}
            <Strong>&ldquo;How native software gets built when it can&rsquo;t
            fail.&rdquo;</Strong>{" "}
            Nothing that contradicts it ships. The audience is the wider dev
            community, not recruiters &mdash; which means every piece has to
            teach something, not just show it.
          </Prose>
          <SpecList
            rows={[
              ["Tone", "Editorial. Paragraphs, context, an argument built — not a list of bullets"],
              ["Person", "First. A one-person brand written in the third person sounds institutional and false"],
              ["Language", "English only. Stale content in one of two languages is worse than not having the second"],
            ]}
          />
          <Rule
            title="Explain the why, not just the what"
            body="Editorial only pays off if there is an argument. Without one it is just long text."
          />
          <Rule
            title="No hyperbole"
            body="Blazing fast, game-changing, revolutionary — none survives a positioning built on precision. A real number, or nothing."
          />
          <Rule
            title="One piece, one idea"
            body="Editorial is permission to develop one thing to the end, not permission to write long."
          />
        </Section>

        <Section folio="08" label="System" title="Do not" last>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              "Uppercase headings with wide tracking, or weights above 600",
              "White text or glyphs on an orange fill",
              "Colour baked into a type-ramp class",
              "--card equal to --surface",
              "Glass, blur, or a drop shadow on a plate",
              "Emoji as icons",
              "Fixed dark values on artwork that flips with the theme",
              "Any animation that content depends on to be visible",
              "A motion effect that a screenprint could not produce",
              "Generated imagery standing in for real data",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[9px] h-[2px] w-4 shrink-0 bg-accent-solid"
                />
                <span className="t-body">{t}</span>
              </li>
            ))}
          </ul>
        </Section>
      </main>
      <Footer />
    </>
  );
}

/* ── page furniture ─────────────────────────────────────────── */

function Section({
  folio,
  label,
  title,
  children,
  last = false,
}: {
  folio: string;
  label: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section
      className={`mx-auto w-full max-w-[1120px] px-6 py-16 md:px-12 md:py-20 ${last ? "" : "border-b border-hairline"}`}
    >
      <div className="flex items-baseline justify-between border-b-2 border-accent pb-2">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent-ink">
          {label}
        </p>
        <p className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-on-accent">
          {folio}
        </p>
      </div>
      <h2 className="t-section mt-5 max-w-[20ch] text-balance">{title}</h2>
      <div className="mt-8 flex flex-col gap-6">{children}</div>
    </section>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
      {children}
    </h3>
  );
}

function Prose({
  children,
  small = false,
}: {
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <p className={`${small ? "t-small" : "t-body"} max-w-[64ch] text-pretty`}>
      {children}
    </p>
  );
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

function CodeLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-[12px] border-2 border-hairline bg-panel px-4 py-3">
      <code className="whitespace-nowrap font-mono text-[12.5px] text-ink-2">
        {children}
      </code>
    </div>
  );
}

/** A rule with the reason attached. A rule without its reason gets undone. */
function Rule({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-4 border-l-2 border-accent pl-5">
      <div>
        <p className="text-[16px] font-semibold tracking-[-0.01em] text-ink">
          {title}
        </p>
        <p className="t-small mt-1.5 max-w-[64ch] text-pretty">{body}</p>
      </div>
    </div>
  );
}

function Swatch({
  name,
  light,
  dark,
  role,
}: {
  name: string;
  light: string;
  dark: string;
  role: string;
}) {
  return (
    <div className="flex gap-3 rounded-[12px] border-2 border-hairline p-3">
      <div className="flex shrink-0 overflow-hidden rounded-[8px] border border-hairline">
        <span className="size-[38px]" style={{ background: light }} />
        <span className="size-[38px]" style={{ background: dark }} />
      </div>
      <div className="min-w-0">
        <p className="truncate font-mono text-[12px] text-ink">{name}</p>
        <p className="mt-0.5 font-mono text-[11px] text-ink-3">
          {light} · {dark}
        </p>
        <p className="mt-1 text-[13px] leading-snug text-ink-2">{role}</p>
      </div>
    </div>
  );
}

const CONTRAST = [
  ["--foreground", "11.78", "12.75", true],
  ["--ink-2", "6.71", "6.61", true],
  ["--ink-3", "5.21", "4.72", true],
  ["--accent-ink", "4.60", "6.89", true],
  ["--on-accent on --accent-solid", "5.43", "5.43", true],
  ["white on --accent-solid", "2.86", "2.86", false],
] as const;

function ContrastTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left">
        <thead>
          <tr className="border-b-2 border-hairline">
            <th className="py-2 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              Token
            </th>
            <th className="py-2 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              Bone paper
            </th>
            <th className="py-2 pr-4 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              Black paper
            </th>
            <th className="py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              AA
            </th>
          </tr>
        </thead>
        <tbody>
          {CONTRAST.map(([token, l, d, pass]) => (
            <tr key={token} className="border-b border-hairline">
              <td className="py-2.5 pr-4 font-mono text-[12.5px] text-ink">{token}</td>
              <td className="py-2.5 pr-4 font-mono text-[12.5px] tabular-nums text-ink-2">
                {l}:1
              </td>
              <td className="py-2.5 pr-4 font-mono text-[12.5px] tabular-nums text-ink-2">
                {d}:1
              </td>
              <td className="py-2.5">
                <span
                  className={`font-mono text-[11px] uppercase tracking-[0.1em] ${pass ? "text-accent-ink" : "text-ink-3"}`}
                >
                  {pass ? "passes" : "never used"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function RampRow({
  cls,
  spec,
  children,
}: {
  cls: string;
  spec: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 py-5 lg:flex-row lg:items-baseline lg:gap-8">
      <div className="lg:w-[180px] lg:shrink-0">
        <p className="font-mono text-[12px] text-accent-ink">.{cls}</p>
        <p className="mt-0.5 font-mono text-[11px] leading-snug text-ink-3">
          {spec}
        </p>
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

function SpecList({ rows }: { rows: readonly (readonly [string, string])[] }) {
  return (
    <div className="flex flex-col divide-y divide-hairline border-y border-hairline">
      {rows.map(([k, v]) => (
        <div key={k} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
          <p className="font-mono text-[12.5px] text-ink sm:w-[220px] sm:shrink-0">
            {k}
          </p>
          <p className="t-small">{v}</p>
        </div>
      ))}
    </div>
  );
}

function Demo({
  title,
  hint,
  body,
  children,
}: {
  title: string;
  hint: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <p className="text-[15px] font-semibold text-ink">{title}</p>
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-ink">
          {hint}
        </p>
      </div>
      {children}
      <p className="t-small max-w-[46ch] text-pretty">{body}</p>
    </div>
  );
}
