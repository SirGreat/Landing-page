import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        paper: "#FAFAFA",
        muted: "#6B7280",
        line: "#E5E7EB",
        accent: {
          DEFAULT: "#4F46E5",
          dark: "#4338CA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(10,10,10,0.04), 0 8px 24px rgba(10,10,10,0.06)",
        "soft-lg": "0 2px 6px rgba(10,10,10,0.05), 0 16px 40px rgba(10,10,10,0.08)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
