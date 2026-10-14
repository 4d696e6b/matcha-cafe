import Link from "next/link";

/** Shared footer: real route links and an honest description of the café concept. */
export function SiteFooter() {
  return (
    <footer className="bg-ink py-8 text-white **:focus-visible:outline-footer-accent!">
      <div className="mx-auto w-page max-w-295 md:w-page-md xl:w-page-xl flex flex-col gap-4 pb-7 md:flex-row md:items-center md:justify-between">
        {/* The brand and return link both lead to the actual homepage introduction. */}
        <Link href="/#home" className="font-serif text-3xl tracking-wide">
          MATCHA
        </Link>
        <p className="font-serif text-xl italic text-footer-copy">
          A little green. A slower moment.
        </p>
        <Link
          href="/#home"
          className="inline-flex min-h-11 items-center gap-4 border-b border-current text-sm hover:text-footer-accent"
        >
          Back to the beginning <span aria-hidden="true">↑</span>
        </Link>
      </div>
      <div className="mx-auto w-page max-w-295 md:w-page-md xl:w-page-xl flex flex-col gap-3 border-t border-footer-line pt-5 text-xs md:flex-row md:justify-between">
        <p className="text-footer-copy">
          A student café concept. Menu and images are illustrative.
        </p>
        <Link href="/menu" className="underline hover:text-footer-accent">
          Explore the full menu
        </Link>
      </div>
    </footer>
  );
}
