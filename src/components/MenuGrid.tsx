import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/lib/menu";

/** A display-only menu shared by both pages; the full menu adds serving notes. */
export function MenuGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    // Tailwind changes one column into two, then three as the viewport grows.
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {menuItems.map((item) => (
        <article
          key={item.id}
          id={detailed ? item.id : `preview-${item.id}`}
          data-menu-card
          className="flex scroll-mt-27.5 flex-col overflow-hidden rounded-2xl border border-line bg-paper"
        >
          {/* Each offering has a local photo; its frame reserves space before loading. */}
          <div className="relative aspect-4/3 overflow-hidden bg-pale">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col p-6">
            {/* Roman numerals and short taglines carry the café's visual theme. */}
            <p className="mb-4 flex items-center gap-3 text-tagline font-semibold tracking-tagline text-muted">
              <span className="font-serif text-lg tracking-normal text-ink" aria-hidden="true">
                {item.roman}
              </span>
              <span>{item.tagline}</span>
            </p>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-serif text-2xl leading-tight text-ink">
                {/* The homepage links to details; the full menu uses plain headings. */}
                {detailed ? (
                  item.name
                ) : (
                  <Link href={`/menu#${item.id}`} className="underline-offset-4 hover:underline">
                    {item.name}
                  </Link>
                )}
              </h3>
              <span className="shrink-0 pt-1 text-sm font-semibold text-ink">{item.price}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>

            {/* Extra recipe context makes the connected menu page worth visiting. */}
            {detailed && (
              <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
                {item.notes}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
