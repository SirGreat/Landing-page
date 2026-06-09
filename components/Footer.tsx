import { nav, site } from "@/lib/site";
import { MailIcon } from "./ui/icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-x py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#top" className="text-lg font-bold tracking-tight text-ink">
              Trustx<span className="text-accent">Hub</span>
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {site.legalName} builds AI automations that save businesses time,
              capture more leads, and cut costs.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-accent"
            >
              <MailIcon width={18} height={18} />
              {site.email}
            </a>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold text-ink">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-ink">Connect</h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-ink"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-ink"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built for businesses that want their time back.
          </p>
        </div>
      </div>
    </footer>
  );
}
