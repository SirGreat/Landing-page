import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline-none disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-dark shadow-soft",
  secondary:
    "bg-white text-ink border border-line hover:border-ink/30 hover:bg-paper",
  ghost: "text-ink hover:text-accent",
};

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

export function ButtonLink({
  variant = "primary",
  children,
  className = "",
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
