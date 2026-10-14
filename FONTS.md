# Local café fonts

Headings and Roman numerals use **Cormorant Garamond**, with normal and italic
variable faces. Body text and controls use **DM Sans**. The fonts are loaded
through `next/font/local` in `src/app/layout.tsx`; no external font request is
needed when someone visits the website.

The original variable TTF files came from the official Google Fonts repository:

- [Cormorant Garamond](https://github.com/google/fonts/tree/main/ofl/cormorantgaramond)
- [DM Sans](https://github.com/google/fonts/tree/main/ofl/dmsans)

The files were converted to WOFF2 without changing the glyph designs. Their
SIL Open Font License texts are included beside the font files in
`src/app/fonts/`. The website build bundles the fonts into its exported assets.
