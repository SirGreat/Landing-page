import Section from "./Section";
import Reveal from "./ui/Reveal";

// TODO: [TESTIMONIALS] — replace quotes, names, and roles with real clients.
const quotes = [
  {
    quote:
      "Within three weeks we were replying to every lead in under a minute. Our booked calls nearly doubled — without adding a single hire.",
    name: "Jordan Maine",
    role: "Founder, E-commerce Brand",
  },
  {
    quote:
      "The document automation alone saved my team over ten hours a week. It paid for itself in the first month.",
    name: "Priya Nair",
    role: "Operations Lead, Consulting Agency",
  },
  {
    quote:
      "They actually understood our workflow before touching anything. The handoff to our CRM is seamless now.",
    name: "Marcus Hale",
    role: "Broker, Real Estate Group",
  },
];

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Results"
      title="What clients say"
      description="Real outcomes from teams that put their busywork on autopilot."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {quotes.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.07}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-soft">
              <div className="mb-4 text-accent" aria-hidden="true">
                {"★★★★★"}
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-sm text-muted">{t.role}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
