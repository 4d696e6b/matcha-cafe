"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Roman numbers make the four homepage chapters easy to recognise in navigation.
const navigationLinks = [
  { roman: "I", label: "Welcome", href: "/#home" },
  { roman: "II", label: "Menu", href: "/#menu" },
  { roman: "III", label: "Our story", href: "/#our-story" },
  { roman: "IV", label: "Gallery", href: "/#gallery" },
];

/** A sticky header keeps every section reachable on both desktop and mobile. */
export function SiteHeader() {
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Reveal the toggle after hydration; without JavaScript all links stay visible.
    const timer = window.setTimeout(() => setReady(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Escape closes an open mobile menu and returns keyboard focus to its button.
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleButton.current?.focus();
      }
    }

    // Reset the mobile menu when a device rotates or its window size changes.
    function handleResize() {
      setIsOpen(false);
    }

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Before JavaScript is ready, all navigation links stay visible and usable.
  const navigationVisibility = ready && !isOpen ? "hidden lg:block" : "block";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto w-page max-w-295 md:w-page-md xl:w-page-xl flex flex-wrap items-center justify-between gap-x-5 gap-y-4 py-4">
        {/* The logo is a real homepage link, with a decorative Roman brand mark. */}
        <Link
          href="/#home"
          className="inline-flex items-center gap-3 text-ink"
          aria-label="MATCHA home"
        >
          <span
            className="grid size-10 place-items-center rounded-full border border-ink font-serif text-2xl"
            aria-hidden="true"
          >
            V
          </span>
          <span className="text-sm font-bold tracking-logo">MATCHA</span>
        </Link>

        {/* This control appears only after React can open and close the menu. */}
        <button
          ref={toggleButton}
          id="nav-toggle"
          type="button"
          hidden={!ready}
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((currentlyOpen) => !currentlyOpen)}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium text-ink cursor-pointer disabled:cursor-default disabled:opacity-60 lg:hidden"
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
          <span className="text-lg" aria-hidden="true">
            {isOpen ? "×" : "☰"}
          </span>
        </button>

        {/* Following a link closes the mobile list; desktop links remain visible. */}
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={`${navigationVisibility} w-full lg:w-auto`}
        >
          <ul className="flex flex-col gap-1 border-t border-line pt-3 lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:pt-0">
            {navigationLinks.map((link) => (
              <li key={link.roman}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-ink transition-colors hover:text-muted motion-reduce:transition-none"
                >
                  <span className="font-serif text-muted" aria-hidden="true">
                    {link.roman}
                  </span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
