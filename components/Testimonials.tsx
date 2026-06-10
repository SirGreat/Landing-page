import Section from "./Section";
import Reveal from "./ui/Reveal";

// TESTIMONIALS — real client quotes published with consent.
// Update or add entries as you collect more.
const quotes = [
  {
    quote:
      "Their Telegram trading bot replies to our customers in seconds and trades run seamlessly around the clock. It's saved us over 60 hours a month.",
    name: "James",
    role: "Founder & CEO, Viable Group",
  },
  {
    quote:
      "They automated my entire LinkedIn posting workflow. I've saved 45+ hours and my content has never been more consistent.",
    name: "Mathew",
    role: "Founder & CEO, Moneyrise Agency",
  },
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
  {
    quote:
      "Our support inbox used to pile up overnight. Now customers get instant answers and my team only steps in for the hard stuff.",
    name: "Lena Vossberg",
    role: "Owner, Online Retail Store",
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
