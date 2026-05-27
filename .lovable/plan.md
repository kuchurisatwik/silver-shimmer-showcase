## Goal

Elevate the site into a high-end jewellery maison experience where the jewellery — not the model — is always the brightest, most resolved element. Preserve the current chocolate/cream editorial palette and add ivory, champagne, silver-gray, and a restrained emerald accent. No backend changes; all work is in `src/components/site/*`, `src/styles.css`, and a handful of small new building blocks.

## Scope (frontend only)

### 1. Design system refinements — `src/styles.css`
- Add tokens: `--ivory`, `--champagne` (refined), `--silver-cool`, `--silver-warm`, `--emerald` (deep, muted), `--gradient-silver-sheen`, `--shadow-jewel`.
- New utilities: `.metallic-text`, `.jewel-glow` (radial highlight behind product images), `.cinematic-vignette`, `.shimmer-divider` (animated silver hairline), `.float-particles` (CSS-only specks).
- Stronger type scale: tighten `display-xl/lg/md`, add `display-hero` (clamp 56–148px), add `.eyebrow-luxe` (thinner, wider tracking), and `.body-editorial` (Cormorant italic accents).

### 2. Hero — `Hero.tsx`
- Recompose: oversized serif headline split across two lines with a metallic-sheen sweep on "Silver."; supporting Cormorant italic kicker.
- Replace single CTA cluster with a refined pair: primary "Explore the Maison" (ghost ivory) + ghost link "The Atelier Story" with animated underline.
- Add slow parallax on background, a soft floating-particle layer, and a bottom gradient that lifts the jewellery focal area.
- Keep existing `hero-editorial.png` asset.

### 3. Collections — `Collections.tsx`
- Keep the persistent-popup behavior and current grid logic; only refine visuals: tighter gutters, jewel-glow behind active tile, hover reveal of collection name + 1-line craftsmanship note, shimmer divider above section title.
- Replace center-modal feel residue with a true editorial side-panel treatment on desktop.

### 4. Categories — `Categories.tsx`
- Keep 5/7 split; refine to a magazine spread: large featured image with a subtle silver vignette, animated rule between list items, hover swaps featured image with crossfade + tiny caption (material, inspiration).
- Replace placeholder category copy with short craftsmanship lines (hand-finished, lost-wax cast, hand-set emeralds, etc.).

### 5. Gallery — `Gallery.tsx`
- Re-rhythm into asymmetric editorial grid: 1 dominant macro shot, 2 portraits, 2 detail/texture crops, 1 wide cinematic still. Use existing lookbook assets (`src/assets/lookbook/lookbook-*.webp`).
- Scroll-linked reveals with stagger; hover lifts caption block (piece name + materials).

### 6. New "Craftsmanship" block — `Craft.tsx` (new)
- Three-card editorial row: Sourcing, Hand-finishing, Polishing. Minimal line iconography (inline SVG), refined dividers, no boxy cards — uses negative space and shimmer hairlines.
- Inserted on `/` between Categories and Gallery.

### 7. Offer / Story — light pass
- Story: larger serif pull-quote, italic byline, silver hairline accents.
- Offer: shift contrast so the jewellery in the image reads brightest; tone copy to maison voice.

### 8. Footer — `Footer.tsx`
- Rebuild as a luxury brand close: brand philosophy paragraph, refined column nav (Maison / Atelier / Journal / Contact), small editorial social row with thumbnail previews, fine silver divider, copyright in muted micro type.

### 9. Motion + interactions
- Global hover: image scale 1.03 with 900ms ease, caption fade-up.
- Shimmer sweep utility reused on dividers, headline accent words, and CTA hover.
- All animations respect `prefers-reduced-motion`.

## Out of scope
- No new routes, no backend, no data model changes.
- No new image assets generated — reuse `src/assets/lookbook/*` and existing hero/offer images.
- Lookbook route (`/collections`) untouched beyond shared token updates.

## Technical notes
- All colors via tokens in `src/styles.css` (oklch). No hex in components.
- Reuse `useReveal` for scroll-in. Add a small `useParallax` hook only if needed for hero.
- Keep bundle lean: particles and shimmer are pure CSS, no new deps.

## Deliverables
- Edited: `Hero.tsx`, `Collections.tsx`, `Categories.tsx`, `Gallery.tsx`, `Story.tsx`, `Offer.tsx`, `Footer.tsx`, `styles.css`, `routes/index.tsx`.
- New: `Craft.tsx`.
- QA: verify desktop (1291w) and mobile preview, check reveal animations, confirm no layout shift.
