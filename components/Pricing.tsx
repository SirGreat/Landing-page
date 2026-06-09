import Section from "./Section";
import Reveal from "./ui/Reveal";
import { ButtonLink } from "./ui/Button";
import { CheckIcon } from "./ui/icons";
import { site } from "@/lib/site";

type Tier = {
  name: string;
  price: string;
  cadence?: string;
  tagline: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

// TODO: [PRICING] — confirm prices and feature lists before launch.
const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$1,500",
    cadence: "one-time",
    tagline: "One automation, live and saving you time.",
    features: [
      "1 core automation built end-to-end",
      "Connected to your existing tools",
      "2 rounds of revisions",
      "Email support",
      "Setup in ~2 weeks",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "$3,900",
    cadence: "one-time",
    tagline: "A connected system that scales with you.",
    features: [
      "Up to 3 automations, fully integrated",
      "Lead capture + CRM/email workflows",
      "Custom dashboards & reporting",
      "Priority support & monitoring",
      "30 days of optimization included",
    ],
    cta: "Book a Call",
    popular: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    tagline: "Enterprise-grade automation, built around you.",
    features: [
      "Unlimited automations & integrations",
      "Dedicated solutions engineer",
      "Security & compliance reviews",
      "SLA-backed support",
      "Ongoing retainer options",
    ],
    cta: "Talk to Us",
  },
];

export default function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title="Simple pricing, real ROI"
      description="Pay once to build, or partner with us long-term. Most clients recoup their investment in the first few months."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((tier, i) => (
          <Reveal key={tier.name} delay={i * 0.07}>
            <div
              className={`relative flex h-full flex-col rounded-2xl border p-8 ${
                tier.popular
                  ? "border-accent bg-white shadow-soft-lg ring-1 ring-accent"
                  : "border-line bg-white shadow-soft"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-soft">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted">{tier.tagline}</p>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-4xl font-bold tracking-tight text-ink">
                  {tier.price}
                </span>
                {tier.cadence && (
                  <span className="text-sm text-muted">{tier.cadence}</span>
                )}
              </div>

              <ul className="mt-7 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-ink">
                    <CheckIcon
                      width={18}
                      height={18}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                variant={tier.popular ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                {tier.cta}
              </ButtonLink>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
