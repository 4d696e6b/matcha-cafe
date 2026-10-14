import Image from "next/image";
import Link from "next/link";
import { MenuGrid } from "@/components/MenuGrid";

// Small lists keep repeated gallery and story content readable and easy to edit.
const principles = [
  { roman: "I", title: "Start with a ritual", text: "A whisk, a cup, a moment just for you." },
  { roman: "II", title: "Keep it simple", text: "A small menu with room for your favourites." },
  {
    roman: "III",
    title: "Make room to pause",
    text: "A calm setting for an unhurried conversation.",
  },
];
const gallery = [
  {
    roman: "I",
    image: "/assets/images/hero-matcha.jpg",
    alt: "Layered iced matcha in a clear glass beside a tea bowl",
    title: "The daily cup",
    text: "Cool, green, and ready for a slow sip.",
  },
  {
    roman: "II",
    image: "/assets/images/matcha-desserts.jpg",
    alt: "Matcha cake and a green tea cookie on white ceramic plates",
    title: "Something sweet",
    text: "A little treat to make the moment last.",
  },
  {
    roman: "III",
    image: "/assets/images/cafe-corner.jpg",
    alt: "Sunlight across green café seating and a wooden table",
    title: "Your quiet corner",
    text: "Room to sit, chat, and stay a while.",
  },
];

/** Homepage: four meaningful Roman numeral chapters rendered as semantic HTML. */
export default function HomePage() {
  // Photo hover motion is disabled for visitors requesting reduced motion.
  const galleryImageClasses =
    "h-85 w-full object-cover transition-transform duration-300 group-hover:scale-photo motion-reduce:transform-none motion-reduce:transition-none md:h-75";
  return (
    <main id="main-content" tabIndex={-1}>
      {/* I · Welcome presents the café idea, main heading, and a relevant local image. */}
      <section
        id="home"
        aria-labelledby="welcome-heading"
        className="scroll-mt-27.5 mx-auto w-page max-w-295 md:w-page-md xl:w-page-xl grid items-center gap-10 py-10 md:grid-cols-2 md:gap-12 lg:py-16"
      >
        <div>
          <p className="mb-5 flex items-center gap-4 text-label font-semibold tracking-label text-ink">
            <span className="border-r border-line pr-4 font-serif text-2xl font-normal tracking-normal">
              I
            </span>{" "}
            WELCOME TO V MATCHA
          </p>
          <h1
            id="welcome-heading"
            className="font-serif text-display leading-display tracking-display"
          >
            A little green.
            <br />A <em>slower</em> moment.
          </h1>
          <p className="mt-7 max-w-sm text-body text-muted">
            A cup of matcha, something sweet, and a little room to breathe. Find your own everyday
            ritual.
          </p>
          {/* Working links connect the hero to the menu and the story below. */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link
              href="#menu"
              className="inline-flex min-h-12.5 items-center justify-center gap-6 rounded-sm border border-ink bg-ink px-6 py-3 text-sm text-white transition hover:bg-matcha-deep motion-safe:hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              Explore the menu <span aria-hidden="true">↗</span>
            </Link>
            <Link
              href="#our-story"
              className="inline-flex min-h-11 items-center gap-4 border-b border-current text-sm hover:text-matcha"
            >
              Meet the idea <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-12 hidden items-center gap-4 md:flex">
            <span aria-hidden="true" className="font-serif text-5xl">
              V
            </span>
            <p className="text-xs text-muted">
              Four chapters.
              <br />
              One quiet green moment.
            </p>
          </div>
        </div>
        <figure>
          {/* The image dimensions prevent layout jumps; Tailwind starting styles add a gentle entrance. */}
          <div className="h-100 overflow-hidden rounded-t-arch rounded-b-lg bg-pale md:h-125 lg:h-137.5">
            <Image
              src="/assets/images/hero-matcha.jpg"
              alt="Layered iced matcha beside a ceramic tea bowl and bamboo whisk on a light table"
              width={1536}
              height={1024}
              preload
              className="opacity-100 scale-100 transition duration-800 ease-natural motion-safe:starting:opacity-40 motion-safe:starting:scale-103 motion-reduce:transition-none h-full w-full object-cover object-matcha"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
          <figcaption className="mt-4 flex justify-between text-caption tracking-caption text-muted">
            <span>WHISKED, NOT RUSHED</span>
            <span aria-hidden="true">I / V</span>
          </figcaption>
        </figure>
      </section>

      {/* A short decorative strip repeats the café's calm approach between chapters. */}
      <div className="border-y border-line bg-pale px-3 py-5">
        <p className="flex items-center justify-center gap-4 font-serif text-lg sm:gap-10 sm:text-xl">
          Small rituals <span aria-hidden="true">✳</span> Green moments{" "}
          <span aria-hidden="true">✳</span> A softer pace
        </p>
      </div>

      {/* II · Menu contains six photographic cards with names, prices, and descriptions. */}
      <section
        id="menu"
        aria-labelledby="menu-heading"
        className="scroll-mt-27.5 mx-auto w-page max-w-295 md:w-page-md xl:w-page-xl py-16 lg:py-24"
      >
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-4 text-label font-semibold tracking-label text-ink">
              <span className="border-r border-line pr-4 font-serif text-2xl font-normal tracking-normal">
                II
              </span>{" "}
              THE MENU
            </p>
            <h2
              id="menu-heading"
              className="font-serif text-heading leading-heading tracking-heading"
            >
              Your next <em>green</em> favourite.
            </h2>
          </div>
          <p className="text-sm text-muted">
            From the first sip to the last crumb.
            <br />
            Six simple reasons to slow down.
          </p>
        </div>
        {/* This shared component renders the complete menu directly into exported HTML. */}
        <MenuGrid />
        <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">
            Illustrative menu prices for our student café concept.
          </p>
          <Link
            href="/menu"
            className="inline-flex min-h-11 items-center gap-4 border-b border-current text-sm hover:text-matcha"
          >
            The full menu &amp; little details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* III · Story explains the fictional concept without inventing personal details. */}
      <section
        id="our-story"
        aria-labelledby="story-heading"
        className="scroll-mt-27.5 border-y border-line bg-pale py-16 lg:py-24"
      >
        <div className="mx-auto w-page max-w-295 md:w-page-md xl:w-page-xl grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <figure>
            <Image
              src="/assets/images/cafe-corner.jpg"
              alt="A quiet café corner with green seating, wood tables, and plants by a bright window"
              width={1000}
              height={667}
              className="h-90 w-full rounded-lg object-cover lg:h-132.5"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <figcaption className="mt-4 font-serif text-lg italic text-muted">
              A place imagined for a slower kind of day.
            </figcaption>
          </figure>
          <div>
            <p className="mb-5 flex items-center gap-4 text-label font-semibold tracking-label text-ink">
              <span className="border-r border-line pr-4 font-serif text-2xl font-normal tracking-normal">
                III
              </span>{" "}
              OUR STORY
            </p>
            <h2
              id="story-heading"
              className="font-serif text-heading leading-heading tracking-heading"
            >
              Good things take
              <br />a little <em>pause.</em>
            </h2>
            <p className="mt-6 text-sm text-muted">
              V MATCHA is a student café concept built around a quiet everyday ritual: choosing a
              drink, settling into a cosy corner, and taking your time.
            </p>
            <p className="mt-5 text-sm text-muted">
              Roman numeral details guide each chapter of this little world. Green brings the
              matcha; white gives it space. Simple ingredients, thoughtful details, and a welcoming
              pace are at the heart of the idea.
            </p>
            {/* Stable titles act as React keys for the three real list entries. */}
            <ol className="mt-7">
              {principles.map((principle) => (
                <li key={principle.title} className="flex gap-5 border-t border-line py-4">
                  <span aria-hidden="true" className="min-w-7 font-serif text-2xl">
                    {principle.roman}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{principle.title}</h3>
                    <p className="mt-1 text-xs text-muted">{principle.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* IV · Gallery pairs each local image with an informative caption and alternative text. */}
      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="scroll-mt-27.5 mx-auto w-page max-w-295 md:w-page-md xl:w-page-xl py-16 lg:py-24"
      >
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-4 text-label font-semibold tracking-label text-ink">
              <span className="border-r border-line pr-4 font-serif text-2xl font-normal tracking-normal">
                IV
              </span>{" "}
              LITTLE SCENES
            </p>
            <h2
              id="gallery-heading"
              className="font-serif text-heading leading-heading tracking-heading"
            >
              A glimpse of <em>green.</em>
            </h2>
          </div>
          <p className="text-sm text-muted">
            The cup. The crumb. The corner.
            <br />
            Our café, imagined in three moments.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {gallery.map((scene, index) => (
            <figure key={scene.title} className={index === 1 ? "md:pt-9" : ""}>
              {/* Hover motion is subtle and disabled for reduced-motion visitors. */}
              <div className="group overflow-hidden rounded-md">
                <Image
                  src={scene.image}
                  alt={scene.alt}
                  width={1000}
                  height={667}
                  className={galleryImageClasses}
                  sizes="(max-width: 767px) 100vw, 33vw"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline gap-4">
                <span aria-hidden="true" className="font-serif text-2xl">
                  {scene.roman}
                </span>
                <div>
                  <h3 className="font-serif text-2xl">{scene.title}</h3>
                  <p className="mt-2 text-xs text-muted">{scene.text}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
