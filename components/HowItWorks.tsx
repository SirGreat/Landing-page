import Section from "./Section";
import Reveal from "./ui/Reveal";
import { SearchIcon, WrenchIcon, RocketIcon } from "./ui/icons";

const steps = [
  {
    icon: SearchIcon,
    step: "01",
    title: "Discover",
    blurb:
      "We map your workflows and find the repetitive, time-draining tasks where automation pays off fastest.",
  },
  {
    icon: WrenchIcon,
    step: "02",
    title: "Build",
    blurb:
      "We design, build, and test your automation end-to-end — wired into your existing tools, with you in the loop.",
  },
  {
    icon: RocketIcon,
    step: "03",
    title: "Automate & Scale",
    blurb:
      "We launch, monitor, and refine — then expand what works so the savings compound month after month.",
  },
];

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      eyebrow="How it works"
      title="From first call to fully automated"
      description="A simple, transparent process. No long contracts, no jargon — just results you can measure."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <div className="relative h-full rounded-2xl border border-line bg-white p-8 shadow-soft">
              <span className="text-sm font-bold tracking-wider text-accent/40">
                {s.step}
              </span>
              <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <s.icon width={24} height={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.blurb}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
