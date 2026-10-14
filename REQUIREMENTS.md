# Rush requirement checklist

The brief is `Discovery_Piscine_Rush_Creative_Web_Project.pdf`, Version 4.0,
Chapters II–IV. Next.js, TypeScript and Tailwind are the authoring tools; the
browser receives exported HTML, CSS and JavaScript. The latest requested version
uses a display-only menu.

## Mandatory website features

- **Relevant sections:** four homepage chapters cover Welcome, Menu, Our Story
  and Gallery, exceeding the minimum of three sections.
- **Clear structure:** semantic header, navigation, main, section, article and
  footer elements, one main heading per page, and descriptive section headings.
- **Relevant images:** each of the six menu entries has its own local image with
  alternative text. The story and gallery also use local café illustrations.
- **Meaningful content:** menu names, descriptions, prices and serving notes,
  story paragraphs and gallery captions explain the fictional café concept.
- **Working navigation:** a sticky header links to all four Roman chapters;
  the homepage and full menu route link to each other and to item details.
- **Responsive styling:** Tailwind classes handle layouts, spacing, focus,
  scrolling, transitions and reduced motion. The only global CSS is Tailwind
  import/theme configuration for the shared colours and local fonts.
- **JavaScript interaction:** clicking the mobile Menu button opens and closes
  the navigation. Escape closes it and returns focus; following a link closes it.
- **Local runtime:** `npm run build` creates the complete static site in `out/`.
  Standard `serve`, used by `npm start`, previews it through local HTTP.

The menu itself has no saved-selection state, category filtering or ordering.
All six cards remain visible as ordinary content, including without JavaScript.

## Bonus features retained

- Two connected HTML pages generated from the homepage and full-menu routes.
- Extra navigation behavior: Escape restores focus and resizing resets the menu.
- CSS hover transitions and a subtle hero entrance, with reduced-motion support.
- Accessibility and creative identity: keyboard focus, a skip link, descriptive
  images, Roman numeral chapters, and the matcha green-and-white palette.

The brief's examples do not guarantee an evaluation score. Demonstrate the
features and explain the source during the defense.

## Current verification

Fresh lint, TypeScript and production build checks passed for this version.
Twenty-four offline React assertions passed for display cards and navigation,
including hydration, Escape/focus, link closing, resize behavior and zero browser
storage access. Earlier checks for removed selection features no longer apply.
Browser preview access in this session is blocked by an unavailable security-policy
check; the rendered appearance still needs a manual browser walkthrough.

- [x] Run `npm run lint`, `npm run typecheck` and `npm run build`.
- [ ] Open `/` and `/menu` locally and verify all links, images, fonts and styles.
- [x] Confirm six menu cards appear on both pages, with no selection controls.
- [x] Serve all 41 updated runtime files from the submission and verify they
  match the build. Local resource links and item anchors resolve correctly.
- [ ] Check all four chapter links and the full-menu item anchors.
- [ ] Scroll to confirm the navigation stays visible.
- [ ] At a mobile width, open and close navigation, follow a link, and use Escape.
- [ ] Use Tab, Shift+Tab and Enter; confirm the skip link and visible focus.
- [ ] Check both routes at desktop and mobile widths for unwanted overflow.
- [ ] Check reduced motion and the browser console during the walkthrough.
- [ ] Demonstrate from `~/discovery-piscine/rush` using only submitted files.
- [ ] Confirm root `auteur` has the supplied two logins, each ending in a newline.

## Submission and presentation

Copy the contents of `out/` into `~/discovery-piscine/rush`, then include root
`auteur`, the guides and an editable `source/` copy of the framework inputs.
Do not include installed dependencies, Git history or intermediate builds.
The prepared root package uses `serve`; run `npm install` and `npm start` there.
To rebuild, use Node.js 20.9 or newer and `npm ci`, `npm run build` inside `source/`.

Both teammates must participate, understand the code and resources, explain
actual contributions and answer questions. The website and automated checks do
not establish that participation or complete the team's presentation.
