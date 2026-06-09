import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trustx Hub — AI Automations That Save Time & Capture Leads",
  description:
    "Trustx Hub and Viable Group build AI automations for businesses — chatbots, lead-gen workflows, document processing, and CRM/email automation. Save hours, capture more leads, cut costs.",
  openGraph: {
    title: "Trustx Hub — AI Automations for Growing Businesses",
    description:
      "We build AI automations that reply, qualify, and book while you sleep. Book a call today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
