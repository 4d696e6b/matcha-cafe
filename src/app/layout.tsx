import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

// Local font files load without asking Google or another server during a visit.
const displayFont = localFont({
  src: [
    { path: "./fonts/CormorantGaramond.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/CormorantGaramond-Italic.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});
const readingFont = localFont({
  src: "./fonts/DMSans.woff2",
  weight: "100 1000",
  variable: "--font-dm-sans",
  display: "swap",
});

// Next.js turns these typed settings into page titles, descriptions, and the icon.
export const metadata: Metadata = {
  title: { default: "MATCHA — A little green. A slower moment.", template: "%s — MATCHA" },
  description:
    "A quiet matcha café concept with six drinks and treats, Roman numeral chapters, and a photographic menu.",
  icons: { icon: "/assets/favicon.svg" },
};
export const viewport: Viewport = { themeColor: "#244c38" };

/** The root layout shares navigation and typography across both pages. */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${readingFont.variable} scroll-smooth scroll-pt-27.5 motion-reduce:scroll-auto`}
    >
      {/* Descendant variants give every keyboard target an outline and links a consistent underline offset. */}
      <body className="bg-paper font-sans leading-body text-ink antialiased **:underline-offset-5 **:focus-visible:outline-3 **:focus-visible:outline-solid **:focus-visible:outline-matcha **:focus-visible:outline-offset-5 ">
        {/* A keyboard skip link bypasses the repeated header. */}
        <a
          href="#main-content"
          className="fixed top-3 left-3 z-100 -translate-y-40 bg-ink px-5 py-3 text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        {/* Shared navigation surrounds the page content rendered at build time. */}
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
