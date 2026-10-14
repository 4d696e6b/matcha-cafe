# V MATCHA presentation preparation

Use this guide in your own words. Explain actual work by both teammates.

## Introduce the concept

V MATCHA is a fictional café website displaying six drinks and treats. Green
and white, Cormorant Garamond headings, DM Sans text, local food illustrations
and Roman numeral chapters provide its identity. It does not accept orders.

## Demonstrate the website

1. Open the homepage and explain I Welcome.
2. Show sticky navigation and follow II Menu, III Our Story and IV Gallery.
3. Show six menu photos, names, descriptions and illustrative prices.
4. Follow an item to the connected full menu and explain its serving notes.
5. Show the menu pairing inspiration and the route back to the homepage.
6. At a mobile width, click Menu, follow a link and press Escape to close it.
7. Use Tab to demonstrate the skip link and visible focus; explain reduced motion.

The menu is display-only. There are no saved selections, category controls or
browser-storage features. Both pages display all six items without JavaScript.

## Explain the implementation

**HTML:** Next.js page and component files produce semantic headings, sections,
menu articles, navigation and footer. IDs connect the chapter and item links.

**CSS:** Tailwind utilities define colours, grids, spacing and responsive layouts.
The global stylesheet only imports Tailwind and defines shared design values.
Focus, scrolling, hover and reduced-motion behavior use Tailwind classes.
Locally hosted fonts require no external request during a visit.

**JavaScript:** the mobile navigation is the genuine click-triggered interaction.
React state opens and closes it; keyboard and resize listeners handle Escape
and layout changes. MenuGrid has no client-state directive because it renders
ordinary menu content at build time.

**TypeScript and Next.js:** types describe each menu item. File-based routes
provide the homepage and full menu; static export produces browser-ready files.
The standard `serve` package previews the export through local HTTP.

Read the feature comments and follow the mobile button through its event handler
and state update. Explain how each responsive class changes the layout.

## Explain resources and contributions

Menu and café illustrations are stored in `public/assets/images/`.
`FONTS.md` records the local fonts and licenses. Both teammates should understand those resources and the
source code, including any assistance used during development.

Prepare answers about which files you worked on, your choices, problems solved,
checks you performed, and which parts of your teammate's work you can explain.
Do not assign work retroactively or claim checks you did not perform.

## Demonstrate the submission

Build the project, copy its exported runtime into `~/discovery-piscine/rush`, and
include root `auteur`, guides and editable source. Start the submitted preview
with `npm install` and `npm start`. Show that runtime and source are present.
Use `npm ci` and `npm run build` inside `source/` to rebuild.

A manual browser walkthrough and the final team presentation remain human work.
