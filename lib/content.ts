export interface Experience {
  slug: string;
  company: string;
  codename: string;
  role: string;
  period: string;
  location: string;
  focus: string;
  summary: string;
  responsibilities: string[];
  stack: string[];
  outcomes?: string[];
  link?: string;
}

export interface Project {
  slug: string;
  codename: string;
  title: string;
  status: "Active" | "Experiment" | "Concept" | "Ongoing";
  description: string;
  longDescription: string;
  tags: string[];
  goals: string[];
  learnings: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    slug: "globo",
    company: "Globo",
    codename: "Cartola",
    role: "iOS Specialist — Cartola",
    period: "Present",
    location: "Rio de Janeiro, Brazil",
    focus: "iOS architecture, performance, and scale",
    summary:
      "Cartola is the largest fantasy football game in Brazil. As an iOS Specialist at Globo, I work on the architecture, performance, and native craft of an app used by millions of fans every round.",
    responsibilities: [
      "Own iOS architecture decisions for feature teams.",
      "Drive modularization with Swift Package Manager.",
      "Improve CI/CD pipelines and TestFlight automation.",
      "Mentor developers and review code across squads.",
      "Profile and optimize performance under traffic spikes.",
    ],
    stack: ["Swift", "SwiftUI", "UIKit", "SPM", "Clean Architecture", "CI/CD", "Fastlane"],
    outcomes: [
      "Maintained a healthy, fast codebase at scale.",
      "Reduced build friction through modularization.",
      "Improved release confidence via automated pipelines.",
    ],
    link: "https://globo.com",
  },
  {
    slug: "deliver-it-letsbank",
    company: "Deliver IT / Letsbank",
    codename: "Letsbank",
    role: "iOS Developer",
    period: "Fintech",
    location: "Brazil",
    focus: "iOS, security, modular fintech features",
    summary:
      "Built iOS features for Letsbank, a fintech environment where security, reliability, and clean user flows matter. Worked on payment flows, account screens, and modular feature architecture.",
    responsibilities: [
      "Implement secure payment and account features.",
      "Collaborate with backend teams on API contracts.",
      "Write unit tests and participate in code review.",
      "Contribute to design-system adoption.",
    ],
    stack: ["Swift", "UIKit", "MVVM", "REST APIs", "Unit Testing", "CI/CD"],
    outcomes: [
      "Shipped stable features in a regulated fintech context.",
      "Improved shared component reuse across modules.",
    ],
  },
  {
    slug: "next",
    company: "Next",
    codename: "Next",
    role: "iOS Developer",
    period: "Product growth",
    location: "Brazil",
    focus: "Growth, onboarding, A/B experiments",
    summary:
      "Worked on product growth initiatives for Next, experimenting with engagement mechanics, onboarding improvements, and feature iteration cycles.",
    responsibilities: [
      "Build and iterate on growth-oriented features.",
      "Run A/B experiments and analyze adoption.",
      "Maintain UIKit-based feature modules.",
      "Ship incremental improvements fast.",
    ],
    stack: ["Swift", "UIKit", "MVVM", "Analytics", "Feature Flags"],
    outcomes: [
      "Improved onboarding completion through experiment iterations.",
      "Delivered several growth features on schedule.",
    ],
  },
  {
    slug: "tocalivros",
    company: "TocaLivros",
    codename: "Toca",
    role: "Mobile Developer",
    period: "Edtech",
    location: "Brazil",
    focus: "Reading and content discovery",
    summary:
      "Developed mobile features for TocaLivros, an education platform. Focused on student engagement, content discovery, and cross-platform consistency where native performance was required.",
    responsibilities: [
      "Implement native mobile features for iOS.",
      "Integrate content APIs and reading experiences.",
      "Work closely with product and design on UX details.",
    ],
    stack: ["Swift", "UIKit", "REST", "Core Data"],
    outcomes: [
      "Shipped reading and discovery features used by students.",
      "Improved app stability through focused bug fixes.",
    ],
  },
  {
    slug: "boviplan",
    company: "Boviplan",
    codename: "Bovi",
    role: "Mobile Developer",
    period: "Agtech",
    location: "Brazil",
    focus: "Offline-first field tools",
    summary:
      "Built mobile tools for Boviplan, an agtech product used by ranchers and field teams. The challenge was reliable data capture, offline handling, and simple UX in rough environments.",
    responsibilities: [
      "Build field data-capture features.",
      "Implement offline-first data handling.",
      "Design simple, durable interfaces for non-technical users.",
    ],
    stack: ["Swift", "UIKit", "Core Data", "Sync Engine"],
    outcomes: [
      "Reduced manual data entry errors in the field.",
      "Improved app reliability in low-connectivity areas.",
    ],
  },
  {
    slug: "aaa-ufms",
    company: "A.A.A. UFMS",
    codename: "TripleA",
    role: "Developer",
    period: "University",
    location: "Campo Grande, MS",
    focus: "Internal tooling",
    summary:
      "Developed internal tools for A.A.A. UFMS, the university athletic association. Worked on event management, member portals, and automating repetitive operational tasks.",
    responsibilities: [
      "Build internal web and mobile tools.",
      "Automate manual administrative workflows.",
      "Support events and member management.",
    ],
    stack: ["PHP", "JavaScript", "MySQL", "Mobile Web"],
    outcomes: [
      "Streamlined event registration for members.",
      "Reduced manual work for the operations team.",
    ],
  },
  {
    slug: "catwork",
    company: "CATWORK",
    codename: "Cat",
    role: "Developer",
    period: "Early career",
    location: "Campo Grande, MS",
    focus: "Web and mobile projects",
    summary:
      "Started my professional path at CATWORK, working on web and mobile projects for local clients. Learned how to ship real products, talk to stakeholders, and debug under pressure.",
    responsibilities: [
      "Develop client websites and mobile apps.",
      "Gather requirements directly with stakeholders.",
      "Deploy and maintain production projects.",
    ],
    stack: ["PHP", "JavaScript", "HTML/CSS", "Android"],
    outcomes: [
      "Delivered multiple client projects end-to-end.",
      "Built the foundation for product-focused engineering.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "spica",
    codename: "Spica",
    title: "Brand & Design System",
    status: "Active",
    description:
      "One set of design decisions behind everything with my name on it — the tokens and components running this page, plus the rules for the character and for what things are called.",
    longDescription:
      "Spica is named after one of the navigation stars Apollo crews aligned by — which is the job: settle a decision once so it stops being re-decided. It is three things kept in sync: the tokens, type ramp, materials and motion behind this site; a written specification for the byescaleira astronaut, down to proportion and material roughness; and a naming system that says which things get a name at all. Every decision is committed with its reasoning, so a choice can be argued with instead of guessed at. Next step is lifting the tokens into a SwiftUI package so the apps and the web resolve the same values.",
    tags: ["Design Tokens", "Design System", "Accessibility", "Brand", "SwiftUI"],
    goals: [
      "Settle a decision once, in writing, and stop re-deciding it.",
      "Keep the character reproducible without an illustrator on call.",
      "Make naming cheap enough that a new package never stalls on it.",
    ],
    learnings: [
      "Ink on the brand orange must be near-black — white measures 2.86:1 and fails AA.",
      "A character without written proportions becomes four different characters in six months.",
      "Most things do not need a name. That removed more friction than any name did.",
    ],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllExperienceSlugs(): string[] {
  return experiences.map((e) => e.slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
