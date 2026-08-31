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
  { value: "Millions", label: "of players on Cartola FC, every round" },
  { value: "7", label: "teams, from agtech to fintech" },
];

function StatBand() {
  return (
    <section className="bg-background px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto grid max-w-[1120px] gap-px bg-hairline sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.value} className="bg-background px-8 py-1.5 text-center">
            <p className="text-[56px] font-semibold leading-[1.05] tracking-[-0.03em] text-accent-ink">
              {s.value}
            </p>
            <p className="t-body mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
