import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MenuGrid } from "@/components/MenuGrid";

// The separate route has its own descriptive browser title and search description.
export const metadata: Metadata = {
  title: "The full menu",
  description:
    "Explore six illustrated matcha drinks and treats, prices, descriptions, and serving notes.",
};

/** Connected menu route: shared cards gain useful recipe notes and serving inspiration. */
export default function MenuPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* The main heading clearly identifies the second page and its purpose. */}
      <section
        className="scroll-mt-27.5 mx-auto w-page max-w-295 md:w-page-md xl:w-page-xl pt-12 pb-10 text-center lg:pt-20"
        aria-labelledby="full-menu-heading"
      >
        <Link
          href="/#menu"
          className="inline-flex min-h-11 items-center gap-4 border-b border-current text-sm hover:text-matcha mb-8"
        >
          <span aria-hidden="true">←</span> Back to the café
        </Link>
        <p className="mb-5 flex items-center gap-4 text-label font-semibold tracking-label text-ink justify-center">
          <span className="border-r border-line pr-4 font-serif text-2xl font-normal tracking-normal">
            II
          </span>{" "}
          THE FULL MENU
        </p>
        <h1
          id="full-menu-heading"
          className="font-serif text-menu-title leading-none tracking-heading"
        >
          Find your <em>green</em> moment.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-sm text-muted">
          Six drinks and treats, a few little details, and space to find a favourite. Take your time
          choosing.
        </p>
        <p className="mt-4 text-xs text-muted">
          An illustrative menu for our student café concept.
        </p>
      </section>

      {/* All six illustrated menu entries are rendered to HTML, including without JavaScript. */}
      <section
        className="scroll-mt-27.5 mx-auto w-page max-w-295 md:w-page-md xl:w-page-xl pb-16"
        aria-labelledby="offerings-heading"
      >
        <h2 id="offerings-heading" className="sr-only">
          Sips and small treats
        </h2>
        <MenuGrid detailed />
        <p className="mt-7 text-xs text-muted">
          Illustrative prices and serving ideas; this concept does not take orders.
        </p>
      </section>

      {/* Pairing notes make this page useful beyond repeating the homepage's menu. */}
      <section
        className="scroll-mt-27.5 mx-auto w-page max-w-295 md:w-page-md xl:w-page-xl mb-16 grid items-center gap-8 border-t border-line pt-12 lg:grid-cols-2 lg:gap-16"
        aria-labelledby="pairing-heading"
      >
        <figure>
          <Image
            src="/assets/images/matcha-desserts.jpg"
            alt="A green tea cookie and a slice of matcha cake on white ceramic plates"
            width={1000}
            height={667}
            className="h-85 w-full rounded-md object-cover"
            sizes="(max-width: 1023px) 100vw, 50vw"
          />
          <figcaption className="mt-3 font-serif text-lg italic text-muted">
            A little sweetness beside your cup.
          </figcaption>
        </figure>
        <div>
          <p className="mb-5 flex items-center gap-4 text-label font-semibold tracking-label text-ink">
            A CUP &amp; A CRUMB
          </p>
          <h2
            id="pairing-heading"
            className="font-serif text-heading leading-heading tracking-heading"
          >
            Better with a little <em>company.</em>
          </h2>
          <p className="mt-6 text-sm text-muted">
            Try the classic Iced Matcha with a Matcha Cookie for a smooth sip and a little crunch.
            For a softer pairing, imagine the Hojicha Latte beside a slice of Matcha Cake.
          </p>
          <p className="mt-5 text-sm text-muted">
            These combinations are simply inspiration for your own green moment.
          </p>
        </div>
      </section>
    </main>
  );
}
