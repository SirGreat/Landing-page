"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./ui/Reveal";
import { Button, ButtonLink } from "./ui/Button";
import { ArrowRightIcon, CheckIcon } from "./ui/icons";
import { site } from "@/lib/site";

type Status = "idle" | "success";

export default function LeadCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // TODO: [BACKEND] — wire this to a real endpoint (e.g. an API route,
    // Formspree, or a CRM). For now we log the lead and open a pre-filled
    // email to the address in site.email as a no-backend fallback.
    console.log("New lead:", { name, email });

    const subject = encodeURIComponent("New lead from Morningrise Agency website");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nI'd like to learn how AI automation can help my business.`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;

    setStatus("success");
    setName("");
    setEmail("");
  }

  return (
    <section id="contact" className="bg-ink py-20 text-paper sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto grid max-w-5xl items-center gap-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-soft-lg sm:p-12 lg:grid-cols-2">
            {/* Left: pitch + booking */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-paper sm:text-4xl">
                Ready to put your busywork on autopilot?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-paper/70">
                Book a free 30-minute call and we&apos;ll show you exactly where
                automation can save you the most time and money — no pressure, no
                jargon.
              </p>
              <div className="mt-7">
                <ButtonLink
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener"
                  className="w-full sm:w-auto"
                >
                  Book a Call <ArrowRightIcon width={18} height={18} />
                </ButtonLink>
              </div>
            </div>

            {/* Right: email capture */}
            <div className="rounded-2xl border border-white/10 bg-paper p-7 text-ink">
              {status === "success" ? (
                <div className="flex flex-col items-start gap-3 py-6" role="status">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <CheckIcon width={24} height={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-ink">
                    Thanks — check your email client.
                  </h3>
                  <p className="text-sm text-muted">
                    We&apos;ve opened a pre-filled message to our team. Send it and
                    we&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="lead-name"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Name
                    </label>
                    <input
                      id="lead-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lead-email"
                      className="mb-1.5 block text-sm font-medium text-ink"
                    >
                      Work email
                    </label>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Get a free automation audit
                  </Button>
                  <p className="text-center text-xs text-muted">
                    No spam. We&apos;ll only use your email to reply.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
