"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "./ui/Button";
import { nav, site } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <nav
        className="container-x flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a href="#top" className="text-lg font-bold tracking-tight text-ink">
          Morningrise{" "}<span className="text-accent">Agency</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <ButtonLink href={site.bookingUrl} target="_blank" rel="noopener">
            Book a Call
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <ul className="container-x flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-xl px-2 py-2.5 text-sm font-medium text-ink hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <ButtonLink
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Book a Call
              </ButtonLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
