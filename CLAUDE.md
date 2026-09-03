# CLAUDE.md — byescaleira-frontend

## Project Identity

- **Name:** byescaleira-frontend
- **Repository:** https://github.com/byescaleira/byescaleira-frontend
- **Live target:** Vercel (deploy via `vercel --prod` after build passes)
- **Owner:** Rafael Escaleira (`byescaleira`)
- **Role:** iOS Specialist at Globo, working on Cartola FC

## Owner Profile

- **Name:** Rafael Escaleira
- **Location:** Campo Grande, MS / Rio de Janeiro, Brazil
- **LinkedIn:** linkedin.com/in/byescaleira
- **GitHub:** github.com/byescaleira
- **Instagram:** instagram.com/rafaelescaleira
- **Public contact:** use LinkedIn, GitHub or Instagram for initial contact (no email/phone in public UI)

### Career
- 7+ years building iOS and cross-platform products.
- Path: CATWORK → A.A.A. UFMS → Boviplan → TocaLivros → Next → Deliver IT/Letsbank → Globo/Cartola.
- Education: BTech Computer Systems Analysis (Descomplica, 2023–2025); BSc Computer Engineering (UFMS, 2017–2021).

### Working Principles
- native first, ai-augmented, design = architecture, ship then polish.
- Direct, technical, no-hype tone.
- Generic, stack-agnostic project systems that work for iOS, backend, frontend, plugins, CLI — not iOS-specific frameworks.
- Uses space-themed English codenames for projects.

## Existing Project Names (preserve)

- **Spica** — brand & design system (site tokens, character spec, naming). The only live personal project.

## Design Direction

- Apple-native aesthetic: Deep Space, Liquid Glass, refined typography, generous whitespace.
- Heavy animations: scroll reveals, hover micro-interactions, page transitions, parallax, glowing accents.
- Functionalidade fora da caixa: avoid generic templates; every section must feel crafted.
- Responsive from mobile to desktop; mobile must feel like a native iOS app.
- Dark-first palette with controlled light moments.

## Site Sections Required

1. **Hero** — name, role, one-line positioning, call to action, animated background.
2. **About / Who I Am** — short bio, working principles, career timeline.
3. **Skills** — iOS/Swift/SwiftUI/Swift Concurrency, architecture, SPM, modularization, testing, CI/CD, design systems, performance, AI-augmented workflows.
4. **Professional Work** — Globo/Cartola as main case; previous companies in compact timeline.
5. **Personal work** — Spica only. Earlier projects were retired; do not re-add them.
6. **Contact / CTA** — LinkedIn and GitHub only; no email or phone in UI.

## New Requirements for This Iteration

1. **Animated illustrations** of space, iPhone, and coding throughout the site (hero background, section accents, floating decorations).
2. **Mobile iOS-style tab view** — replace the current mobile hamburger with a bottom Liquid Glass tab bar resembling iOS tab navigation.
3. **Remove sensitive contact info** — no WhatsApp number and no email address in any public page or component.
4. **Dedicated detail pages** for each experience (Globo, Deliver IT/Letsbank, Next, TocaLivros, Boviplan, A.A.A. UFMS, CATWORK) and each personal project (Spica).
5. **Animated coding/spacing illustrations for navigation and scroll** — visual cues that guide the user through the page, such as a scrolling code strip, parallax satellites, orbit paths, and iPhone mockups.

## Technical Stack

- Next.js 14+ (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion for animations
- shadcn/ui or 21st.dev components when useful
- Static export for Vercel (`output: 'export'`)

## Constraints

- Use only the workflow from `/website-builder-setup` command.
- Follow the website-builder-setup instructions for installing UI/UX Pro Max, Framer Motion, and 21st.dev Magic.
- No placeholder content: every text must reflect Rafael's real profile.
- No email or phone in the public UI.
- Site must build with `npm run build` with zero errors before deploying.
- Deploy to Vercel with `vercel --prod`.

## Deliverables

- Fully functional Next.js site in `/Users/rafael.escaleira/workspace/byescaleira-frontend`.
- `README.md` with setup, build, and deploy instructions.
- Public GitHub repository `byescaleira/byescaleira-frontend`.
- Live Vercel URL.

## Next Action for Claude

Run the `/website-builder-setup` workflow inside this project directory and build the site according to this brief.
