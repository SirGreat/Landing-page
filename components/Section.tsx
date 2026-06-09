import type { ReactNode } from "react";
import Reveal from "./ui/Reveal";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-ink text-paper" : ""} py-20 sm:py-28 ${className}`}
    >
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              {eyebrow}
            </p>
          )}
          <h2
            className={`text-3xl font-bold tracking-tight sm:text-4xl ${
              dark ? "text-paper" : "text-ink"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mt-4 text-lg leading-relaxed ${
                dark ? "text-paper/70" : "text-muted"
              }`}
            >
              {description}
            </p>
          )}
        </Reveal>

        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
