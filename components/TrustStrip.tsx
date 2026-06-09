import Reveal from "./ui/Reveal";

// TODO: [CLIENT LOGOS] — replace these text wordmarks with real client logos
// (drop SVG/PNG files in /public and swap the spans for <Image> tags).
const logos = ["Northwind", "Acme Co", "BrightLeaf", "Vela", "Summit", "Orbit"];

const stats = [
  { value: "12+ hrs", label: "saved per week, per team" },
  { value: "3.4x", label: "more leads captured & replied to" },
  { value: "<60s", label: "average response time, 24/7" },
];

export default function TrustStrip() {
  return (
    <section
      aria-label="Trusted by and key results"
      className="border-y border-line bg-white"
    >
      <div className="container-x py-12">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted">
            Trusted by teams that ship fast
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((name) => (
              <li
                key={name}
                className="text-base font-semibold text-ink/30 transition-colors hover:text-ink/60"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
