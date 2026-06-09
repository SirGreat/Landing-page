import Section from "./Section";
import Reveal from "./ui/Reveal";
import {
  UserIcon,
  StoreIcon,
  BriefcaseIcon,
  HomeIcon,
  BuildingIcon,
} from "./ui/icons";

const industries = [
  {
    icon: UserIcon,
    name: "Small Business & Solopreneurs",
    blurb:
      "Reclaim your week. Automate the admin so you can focus on customers and growth.",
  },
  {
    icon: StoreIcon,
    name: "E-commerce Brands",
    blurb:
      "Recover abandoned carts, answer order questions instantly, and keep buyers coming back.",
  },
  {
    icon: BriefcaseIcon,
    name: "Agencies & Consultants",
    blurb:
      "Onboard clients faster and deliver more — without hiring for every new account.",
  },
  {
    icon: HomeIcon,
    name: "Real Estate",
    blurb:
      "Respond to every lead in seconds, book showings automatically, and never miss a buyer.",
  },
  {
    icon: BuildingIcon,
    name: "Mid-size & Enterprise",
    blurb:
      "Standardize operations and cut costs with secure, scalable automation across teams.",
  },
];

export default function Industries() {
  return (
    <Section
      id="industries"
      eyebrow="Who we serve"
      title="Built for your industry"
      description="Every business is different. We tailor each automation to how you actually work."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={i * 0.05}>
            <article className="flex h-full items-start gap-4 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <ind.icon width={20} height={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-ink">{ind.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {ind.blurb}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
