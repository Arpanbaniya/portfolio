import type { Metadata } from "next";
import { Manrope, DM_Mono, Caveat } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/shared";
import { siteUrl } from "@/data/links";
import "./globals.css";
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});
const hand = Caveat({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-hand",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arpan Baniya — Software, systems & things in progress",
    template: "%s — Arpan Baniya",
  },
  description:
    "Computer Engineering student at NCIT, Nepal. A collection of full-stack projects, NLP experiments, team product work, and a growing interest in financial automation.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Arpan Baniya",
    title: "Arpan Baniya — Learning by building",
    description:
      "Software, systems & things in progress. A student portfolio from Nepal.",
  },
  twitter: { card: "summary_large_image" },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${mono.variable} ${hand.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
