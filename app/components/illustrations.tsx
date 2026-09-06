import { cn } from "@/lib/utils";

/* ============================================================
   Illustration kit — all vector + CSS. No image files, no Lottie.
   One idea holds the set together: the product sits at the centre
   and everything else orbits it. Orange marks the one thing that
   matters right now; everything else is a hairline.
   ============================================================ */

export function Chevron({ className }: { className?: string }) {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("chev", className)}
      aria-hidden="true"
    >
      <path d="M1 1l5 5-5 5" />
    </svg>
  );
}

export function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 1 1 6l5 5" />
    </svg>
  );
}

/** A live indicator: solid dot with a ring pulsing out of it. */
export function LiveDot({ size = 8 }: { size?: number }) {
  return (
    <span
      className="o-live inline-block shrink-0 bg-accent"
      style={{ width: size, height: size }}
    />
  );
}

const STARS_BACK = [
  [140, 120, 1, -0.4], [318, 248, 0.8, -1.9], [472, 86, 1.1, -3.1], [612, 322, 0.7, -2.2],
  [1024, 150, 1, -0.9], [1188, 278, 0.8, -2.7], [1372, 104, 1.1, -1.4], [1494, 336, 0.7, -3.6],
  [236, 452, 0.9, -0.2], [1298, 498, 0.9, -2.4], [86, 306, 0.8, -3.9], [1548, 196, 0.9, -1.1],
  [704, 66, 0.8, -2.9], [892, 52, 1, -0.6], [392, 556, 0.8, -3.3], [1216, 632, 0.8, -1.7],
  [56, 672, 0.9, -2.1], [820, 720, 0.7, -3.5],
];

const STARS_FRONT = [
  [204, 188, 1.4, -1.2], [560, 418, 1.3, -2.6], [1100, 212, 1.5, -0.3],
  [1436, 486, 1.2, -3.2], [742, 150, 1.3, -1.8], [356, 702, 1.2, -0.7],
];

/** Two parallax star layers drifting in opposite directions. */
export function Starfield({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 hidden overflow-hidden dark:block", className)} aria-hidden="true">
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMin slice"
        className="o-drift absolute -left-20 -top-16 h-[1100px] w-[110%]"
        style={{ ["--dur" as string]: "140s", animationDirection: "alternate-reverse" }}
      >
        <g fill="#FFFFFF">
          {STARS_BACK.map(([cx, cy, r, d], i) => (
            <circle key={i} className="o-twinkle" cx={cx} cy={cy} r={r} style={{ animationDelay: `${d}s` }} />
          ))}
        </g>
      </svg>
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMin slice"
        className="o-drift absolute -left-16 -top-10 h-[1080px] w-[108%] opacity-70"
        style={{ ["--dur" as string]: "90s" }}
      >
        <g fill="#FFFFFF">
          {STARS_FRONT.map(([cx, cy, r, d], i) => (
            <circle key={i} className="o-twinkle" cx={cx} cy={cy} r={r} style={{ animationDelay: `${d}s` }} />
          ))}
        </g>
      </svg>
    </div>
  );
}

export function Nebula({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("o-breathe pointer-events-none absolute", className)}
      style={{
        background: "radial-gradient(closest-side, rgba(255,107,0,.22), rgba(255,107,0,0))",
      }}
    />
  );
}

/** The device, drawn — and never idle. No fake status bar: the real one lives there. */
export function Device({
  width = 186,
  className,
}: {
  width?: number;
  className?: string;
}) {
  const s = width / 186;
  const px = (n: number) => `${n * s}px`;
  // The phone is a dark object in both themes; theme-following ink would put
  // the light build's dark orange on a black screen.
  const deviceAccent = "#FF8A3D";
  const rows = [
    { w: 52, w2: 32, score: "12.4", delay: "-0.2s" },
    { w: 60, w2: 26, score: "9.8", delay: "0s" },
    { w: 46, w2: 36, score: "7.1", delay: "0.2s" },
  ];

  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{
        width: px(186),
        height: px(372),
        borderRadius: px(38),
        padding: px(2.5),
        background: "linear-gradient(160deg,#5B5B60,#26262A 42%,#1D1D1F 70%,#4A4A4F)",
        /* Sem sombra: SISTEMA.md §8. Uma prancha não tem profundidade
           de campo — o aparelho se separa pela régua, não por elevação. */
        border: "1px solid var(--foreground)",
      }}
      aria-hidden="true"
    >
      <div
        className="flex h-full w-full flex-col overflow-hidden bg-[#08080A]"
        style={{ borderRadius: px(36), padding: `${px(28)} ${px(13)} ${px(11)}` }}
      >
        <p className="font-semibold" style={{ fontSize: px(10), color: deviceAccent }}>
          ROUND 27
        </p>

        <div className="flex items-start" style={{ marginTop: px(2) }}>
          <span
            className="font-bold text-[#F5F5F7]"
            style={{ fontSize: px(26), lineHeight: 1, letterSpacing: "-0.03em" }}
          >
            84.6
          </span>
          <span className="inline-block overflow-hidden" style={{ height: px(26) }}>
            <span
              className="o-tick block font-bold text-[#F5F5F7]"
              style={{ fontSize: px(26), lineHeight: 1, letterSpacing: "-0.03em" }}
            >
              <span className="block">2</span>
              <span className="block">5</span>
              <span className="block">9</span>
            </span>
          </span>
        </div>

        <div className="flex flex-col" style={{ gap: px(6), marginTop: px(12) }}>
          {rows.map((r) => (
            <div
              key={r.score}
              className="o-row flex items-center bg-[#1D1D1F]"
              style={{
                gap: px(8),
                borderRadius: px(12),
                padding: `${px(8)} ${px(9)}`,
                animationDelay: r.delay,
              }}
            >
              <span
                className="shrink-0 bg-white/10"
                style={{ width: px(20), height: px(20) }}
              />
              <span className="grow">
                <span className="block bg-white/25" style={{ height: px(5), width: px(r.w) }} />
                <span
                  className="block bg-white/10"
                  style={{ height: px(4), width: px(r.w2), marginTop: px(4) }}
                />
              </span>
              <span className="font-semibold" style={{ fontSize: px(11), color: deviceAccent }}>
                {r.score}
              </span>
            </div>
          ))}
        </div>

        <div className="grow" />

        <div
          className="glass-device flex items-center justify-around"
          style={{ height: px(42), borderRadius: px(21) }}
        >
          <TabGlyph active size={15 * s} d="home" />
          <TabGlyph size={15 * s} d="user" />
          <TabGlyph size={15 * s} d="grid" />
        </div>
      </div>
    </div>
  );
}

function TabGlyph({ active, size, d }: { active?: boolean; size: number; d: string }) {
  const stroke = active ? "#FF8A3D" : "#8E8E93";
  const paths: Record<string, React.ReactNode> = {
    home: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9.5V20h13V9.5" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="3.6" />
        <path d="M4.8 20c.9-3.4 3.8-5.2 7.2-5.2s6.3 1.8 7.2 5.2" />
      </>
    ),
    grid: (
      <>
        <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="2" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[d]}
    </svg>
  );
}

const CODE_LINES: React.ReactNode[] = [
  <>
    <span style={{ color: "var(--code-keyword)" }}>actor</span> RoundStore {"{"} <span style={{ color: "var(--code-keyword)" }}>private var</span> cache: [Round: Lineup] {"}"}
  </>,
  <>
    <span style={{ color: "var(--code-keyword)" }}>@MainActor func</span> refresh() <span style={{ color: "var(--code-keyword)" }}>async throws</span> {"{"} state = .loaded(<span style={{ color: "var(--code-keyword)" }}>try await</span> api.round()) {"}"}
  </>,
  <>.target(name: <span className="text-ink-3">&quot;LineupFeature&quot;</span>, dependencies: [<span className="text-ink-3">&quot;DesignSystem&quot;</span>])</>,
  <>
    <span style={{ color: "var(--code-keyword)" }}>func</span> test_scoreUpdates_onRoundClose() <span style={{ color: "var(--code-keyword)" }}>async</span> {"{"} #expect(sut.total == 84.62) {"}"}
  </>,
];

export function CodeStrip() {
  return (
    <div className="relative overflow-hidden border-y border-hairline py-4"
      style={{ background: "var(--code-bg)" }}>
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(90deg,var(--code-bg) 0%,transparent 12%,transparent 88%,var(--code-bg) 100%)",
        }}
      />
      <div className="o-marquee flex w-max whitespace-nowrap font-mono text-[13px] leading-normal"
        style={{ color: "var(--code-ink)" }}>
        {[...CODE_LINES, ...CODE_LINES].map((line, i) => (
          <span key={i} className="pr-11">
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

/** The career as a rising arc. Seven milestones; the current one stays live. */
export function Trajectory({ points }: { points: { x: number; y: number }[] }) {
  const d = "M74 176C130 172 170 168 223 160C285 150 320 148 371 138C435 125 470 120 520 112C585 101 620 94 669 84C735 70 770 64 817 54C880 40 930 30 966 24";
  const last = points[points.length - 1];

  return (
    <svg viewBox="0 0 1040 212" className="block h-[212px] w-full" aria-hidden="true">
      <defs>
        <linearGradient id="bye-traj" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,138,61,.22)" />
          <stop offset="55%" stopColor="rgba(255,138,61,.62)" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
      </defs>

      <g stroke="var(--hairline)" strokeWidth="1" strokeDasharray="2 5">
        {points.map((p) => (
          <path key={p.x} d={`M${p.x} ${p.y}V204`} />
        ))}
      </g>

      <path
        className="o-draw"
        style={{ ["--dur" as string]: "9s", strokeDasharray: 1200, strokeDashoffset: 1200 }}
        d={d}
        fill="none"
        stroke="url(#bye-traj)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <g fill="var(--background)" stroke="var(--ink-3)" strokeWidth="1.6">
        {points.slice(0, -1).map((p) => (
          <circle key={p.x} cx={p.x} cy={p.y} r="4.6" />
        ))}
      </g>
      <circle cx={last.x} cy={last.y} r="6" fill="#FF6B00" />
      <circle
        cx={last.x}
        cy={last.y}
        r="6"
        fill="none"
        stroke="#FF6B00"
        strokeWidth="1.4"
        style={{
          transformOrigin: `${last.x}px ${last.y}px`,
          animation: "bye-pulse-ring 2.8s ease-out infinite",
        }}
      />
    </svg>
  );
}

/** Cartola's real engineering problem: flat for ninety minutes, then everyone at once. */
export function RoundRhythm() {
  const line =
    "M0 74C40 73 80 75 120 72C160 70 200 73 240 71C280 69 300 72 330 68C352 65 362 60 372 44C380 30 386 12 396 10C406 12 412 30 420 46C428 62 444 70 480 72";
  return (
    <svg viewBox="0 0 480 92" className="h-[92px] w-full" aria-hidden="true">
      <defs>
        <linearGradient id="bye-spike" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,107,0,.32)" />
          <stop offset="100%" stopColor="rgba(255,107,0,0)" />
        </linearGradient>
      </defs>
      <g stroke="var(--hairline)" strokeWidth="1">
        <path d="M0 24H480" />
        <path d="M0 50H480" />
        <path d="M0 76H480" />
      </g>
      <path d={`${line}L480 92L0 92Z`} fill="url(#bye-spike)" />
      <path
        className="o-draw"
        style={{ ["--dur" as string]: "7s", strokeDasharray: 640, strokeDashoffset: 640 }}
        d={line}
        fill="none"
        stroke="#FF6B00"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="396" cy="10" r="3.6" fill="#FF6B00" />
      <circle
        cx="396"
        cy="10"
        r="3.6"
        fill="none"
        stroke="#FF6B00"
        strokeWidth="1.4"
        style={{ transformOrigin: "396px 10px", animation: "bye-pulse-ring 2.4s ease-out infinite" }}
      />
      <g className="font-mono" fontSize="10" fill="var(--ink-3)">
        <text x="0" y="90">kickoff</text>
        <text x="352" y="90">final whistle</text>
      </g>
    </svg>
  );
}

/** One dot, four stations, eased so it settles into each stop. */
export function Pipeline() {
  const stops = [
    { x: 28, label: "build" },
    { x: 163, label: "test" },
    { x: 298, label: "sign" },
    { x: 432, label: "TestFlight" },
  ];
  return (
    <svg viewBox="0 0 460 46" className="h-[46px] w-full" aria-hidden="true">
      <path d="M28 23H432" stroke="var(--hairline)" strokeWidth="1.6" strokeLinecap="round" />
      <path
        className="o-draw"
        style={{ ["--dur" as string]: "6s", strokeDasharray: 404, strokeDashoffset: 404 }}
        d="M28 23H432"
        stroke="#FF6B00"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <g fill="var(--card)" stroke="var(--ink-3)" strokeWidth="1.5">
        {stops.map((s) => (
          <circle key={s.x} cx={s.x} cy="23" r="8" />
        ))}
      </g>
      <circle r="4.2" fill="#FF6B00">
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          calcMode="spline"
          keyPoints="0;1"
          keyTimes="0;1"
          keySplines="0.5 0 0.5 1"
          path="M28,23 H432"
        />
      </circle>
      <g className="font-mono" fontSize="10" fill="var(--ink-3)" textAnchor="middle">
        {stops.map((s) => (
          <text key={s.x} x={s.x} y="44">
            {s.label}
          </text>
        ))}
      </g>
    </svg>
  );
}

export function Sparkline() {
  return (
    <svg viewBox="0 0 460 46" className="h-[46px] w-full" aria-hidden="true">
      <g stroke="var(--hairline)" strokeWidth="1">
        <path d="M0 11H460" />
        <path d="M0 23H460" />
        <path d="M0 35H460" />
      </g>
      <path
        className="o-draw"
        style={{ ["--dur" as string]: "5s", strokeDasharray: 620, strokeDashoffset: 620 }}
        d="M0 33C38 31 54 36 78 28C104 19 118 34 146 26C176 17 190 30 220 22C252 13 266 27 296 19C328 10 342 24 372 16C402 8 424 14 460 7"
        fill="none"
        stroke="#FF6B00"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <text x="0" y="46" className="font-mono" fontSize="10" fill="var(--ink-3)">
        frame time
      </text>
    </svg>
  );
}
