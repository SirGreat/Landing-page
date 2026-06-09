"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "./ui/Button";
import { ArrowRightIcon } from "./ui/icons";
import { site } from "@/lib/site";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero-gradient relative overflow-hidden">
      <div className="container-x flex flex-col items-center py-24 text-center sm:py-32">
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-muted shadow-soft"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          AI automations for growing businesses
        </motion.span>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl text-balance text-4xl font-bold tracking-tight text-ink sm:text-6xl"
        >
          Stop losing leads overnight.
          <span className="block text-accent">Let AI do the busywork.</span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted"
        >
          We build AI automations that reply, qualify, and book while you sleep —
          so your team saves hours, captures more leads, and cuts costs without
          adding headcount.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <ButtonLink
            href={site.bookingUrl}
            target="_blank"
            rel="noopener"
            className="w-full sm:w-auto"
          >
            Book a Call <ArrowRightIcon width={18} height={18} />
          </ButtonLink>
          <ButtonLink
            href="#how-it-works"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            See how it works
          </ButtonLink>
        </motion.div>

        <p className="mt-6 text-xs text-muted">
          No commitment. Free 30-minute strategy call.
        </p>
      </div>
    </section>
  );
}
