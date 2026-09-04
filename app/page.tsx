import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ScrollProgress } from "./components/scroll-progress";
import { MobileTabBar } from "./components/mobile-tab-bar";
import { CodeStrip } from "./components/illustrations";
import { Hero } from "./sections/hero";
import { About } from "./sections/about";
import { Skills } from "./sections/skills";
import { MissionControl } from "./sections/mission-control";
import { ProfessionalWork } from "./sections/professional-work";
import { PersonalProjects } from "./sections/personal-projects";
import { Contact } from "./sections/contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="hero" className="relative z-10 flex flex-1 flex-col">
        <Hero />
        <CodeStrip />
        <StatBand />
        <About />
        <Skills />
        <MissionControl />
        <ProfessionalWork />
        <PersonalProjects />
        <Contact />
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
}

const stats = [
  { value: "7+", label: "years shipping native iOS" },
  { value: "Millions", label: "of players on Cartola, every round" },
  { value: "7", label: "teams, from agtech to fintech" },
];

function StatBand() {
  return (
    <section className="border-b-2 border-foreground bg-background">
      <div className="mx-auto grid max-w-[1120px] px-6 sm:grid-cols-3 md:px-12">
        {stats.map((s, i) => (
          <div
            key={s.value}
            className={`py-9 ${i > 0 ? "border-hairline sm:border-l sm:pl-8" : ""}`}
          >
            <p className="text-[64px] font-semibold leading-[1.02] tracking-[-0.03em] text-accent-ink">
              {s.value}
            </p>
            <p className="mt-2 max-w-[24ch] text-[15px] text-ink-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
