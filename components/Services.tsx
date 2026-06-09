import type { ComponentType, SVGProps } from "react";
import Section from "./Section";
import Reveal from "./ui/Reveal";
import {
  ChatIcon,
  FunnelIcon,
  DocIcon,
  MailIcon,
  ShareIcon,
  SyncIcon,
} from "./ui/icons";

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  blurb: string;
};

const services: Service[] = [
  {
    icon: ChatIcon,
    name: "Customer-Support Chatbots",
    blurb:
      "Answer 80% of routine questions instantly, around the clock — and hand the rest to your team with full context.",
  },
  {
    icon: FunnelIcon,
    name: "Lead-Gen Workflows",
    blurb:
      "Capture, qualify, and route every inquiry the moment it lands, so no hot lead ever goes cold.",
  },
  {
    icon: DocIcon,
    name: "Document Processing",
    blurb:
      "Pull data from invoices, contracts, and forms automatically — no more copy-paste or manual entry.",
  },
  {
    icon: MailIcon,
    name: "CRM & Email Automation",
    blurb:
      "Keep records updated and follow-ups sent on time, so deals move forward without anyone chasing them.",
  },
  {
    icon: ShareIcon,
    name: "Social Media Automation",
    blurb:
      "Schedule, publish, and reply across channels from one place — consistent presence, a fraction of the effort.",
  },
  {
    icon: SyncIcon,
    name: "Custom Integrations",
    blurb:
      "Connect the tools you already use so data flows automatically and your stack finally works as one.",
  },
];

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="What we build"
      title="Automations that do the work for you"
      description="Practical AI workflows wired into the tools you already use — built for outcomes, not buzzwords."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.05}>
            <article className="group h-full rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <s.icon width={22} height={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.blurb}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
