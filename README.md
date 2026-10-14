# V MATCHA

V MATCHA is a fictional matcha café concept built with Next.js, TypeScript and
Tailwind CSS. A green and white palette, expressive serif headings and Roman
numeral chapters give it a calm identity. The source uses reusable components
and feature comments so the team can follow and explain the code.

The site does not represent an operating café or take orders. Menu prices and
images illustrate the concept; no personal contact details are invented.

## Run the source project

The repository is [4d696e6b/matcha-cafe](https://github.com/4d696e6b/matcha-cafe).
Use Node.js 20.9 or newer:

```sh
git clone https://github.com/4d696e6b/matcha-cafe.git
cd matcha-cafe
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Development mode updates the
page as you edit. Stop the server with Ctrl+C.

To build and preview the static website instead:

```sh
npm run build
npm start
```

The build writes `out/index.html`, `out/menu.html` and their local assets. Open
[http://127.0.0.1:3000](http://127.0.0.1:3000). The `start` command uses the
standard `serve` package, installed by `npm ci`, to preview `out/`. To use a
different preview port:

```sh
npx serve out --listen tcp://127.0.0.1:3001 --no-clipboard
```

Use a local HTTP address rather than opening exported HTML with `file://`.
Next.js uses root-relative asset paths and route payloads. The standard static
server supports the `/menu` route backed by the exported `menu.html` file.

## What visitors can do

- Follow Roman numeral links through I Welcome, II Menu, III Our Story and IV Gallery.
- View all six offerings, each with a photo, description and illustrative price.
- Open the connected full menu for serving notes and pairing inspiration.
- Use the mobile navigation button, keyboard focus styles and reduced-motion layout.

The menu is display-only. It has no selection buttons, category controls, order
form or browser-storage feature. All offerings remain visible without JavaScript.
The mobile navigation supplies the project's click-triggered JavaScript feature.

## Find the source

- `src/app/` contains the page routes, shared layout and global styling.
- `src/components/` contains reusable page elements and browser interactions.
- `src/lib/menu.ts` contains the typed data for the six menu offerings.
- `src/app/fonts/` contains locally hosted font files and their license texts.
- `public/assets/` contains local images and the café icon.
- `next.config.*` enables a static export rather than a server-dependent site.
- `auteur` contains the supplied campus logins, one per line.
- `FONTS.md` records the local font families and licenses.
- `REQUIREMENTS.md` maps the official brief to the project and provides checks.
- `PRESENTATION.md` supports the demonstration and contribution discussion.

Comments describe each authored feature. TypeScript types
make the menu data and component inputs easier to follow. Tailwind classes define the presentation directly in the components.
`globals.css` contains only the Tailwind import and shared design theme.
Spacing and sizes use numeric classes such as `scroll-pt-27.5` and `h-85`.
Fluid typography and exact colours use named theme classes without brackets. Generated framework files and dependencies
are left unchanged. JSON configuration does not support comments, so its
commands are explained here.

## Project commands

- `npm run dev` starts Next.js development mode.
- `npm run build` produces the static website in `out/`.
- `npm start` previews that build with the standard `serve` package; it requires
  installed dependencies and a completed build.
- `npm run lint` checks the source style and common issues.
- `npm run typecheck` checks TypeScript without producing output files.

## Prepare and run the submission

Build the runtime files from the source repository:

```sh
npm run build
```

Prepare `~/discovery-piscine/rush` manually. Copy the contents of `out/` into
that folder, then copy `auteur` to its root. Include the resource and presentation
guides and an editable `source/` copy containing `src/`, `public/`, package and
lock files, and framework configuration. Leave out `node_modules/`, `.next/`,
`out/` and Git history from the source copy. Preserve any unrelated existing
submission before replacing its files.

The prepared submission includes a root preview `package.json` with `serve` as
its dependency and `serve . --listen tcp://127.0.0.1:3000 --no-clipboard` as its
`start` command.
The source package keeps the framework's own commands. There is no custom tools
folder or automatic submission command.

To demonstrate only the submitted files:

```sh
cd ~/discovery-piscine/rush
npm install
npm start
```

The first installation supplies the standard static server; the exported site
is already built. To rebuild the project, use Node.js 20.9 or newer inside the
submitted `source/` folder, then run `npm ci`, `npm run build` and `npm start`.
The framework package and lockfile there preserve the source project's setup.

## Requirements and final review

The PDF brief permits frameworks and learning resources. Next.js, TypeScript and
Tailwind are the authoring tools; the browser still runs the exported HTML, CSS
and JavaScript. The submission contains both that runtime and the source needed
to explain it.

After changes, run `npm run lint`, `npm run typecheck` and `npm run build`.
The previous interaction checks covered features that have since been removed;
use the current checklist in `REQUIREMENTS.md` for this display-only version.

Actual browser rendering has not been verified: browser automation is blocked
in this session. The manual desktop, mobile and keyboard walkthrough in
`REQUIREMENTS.md` remains necessary before the defense.

Both teammates must participate, understand the code and resources, and explain
their actual contributions. These human requirements remain the team's work.
The official requirements come from `Discovery_Piscine_Rush_Creative_Web_Project.pdf`,
Version 4.0, Chapters II–IV.
