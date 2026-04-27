---
name: legginx-design
description: Use this skill to generate well-branded interfaces and assets for Legginx, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always import `colors_and_type.css` for tokens. Use the trident mark from `assets/logo-mark.png` (or `logo-mark-inverted.png` on dark surfaces) and the `LEGGINX` wordmark set in Inter, letter-spaced 0.4em+. The brand is **pure black & white only** — never introduce accent colors. Type voice is **declarative, quiet, no exclamation marks, no emoji**. Display headlines set in Anton (uppercase). Body in Inter. Specs/prices in JetBrains Mono. Sharp corners (radius 0). Almost no shadows. Fades only — no bounce.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Colors:** `--ink` (#0A0A0A), `--paper` (#FAFAF7), `--stone-50` through `--stone-900`. No other colors except desaturated `--status-error` / `--status-success` for forms.
- **Fonts:** Inter Tight 800–900 (display, all-caps, tight-tracked), Inter (body), JetBrains Mono (specs).
- **Spacing:** 8pt grid. Use `--space-1` through `--space-16`.
- **Radius:** 0 default. 2px chips. 9999px only for size dots.
- **Motion:** `cubic-bezier(0.2, 0, 0.2, 1)`, durations 160 / 240 / 400ms.
- **Icons:** Lucide @ 1.5px stroke, square caps.
- **Voice:** "Compression where you need it." not "You'll love these!"

## Files

- `README.md` — full brand guide
- `colors_and_type.css` — token source of truth (always import this)
- `assets/` — logo mark (trident PNG), wordmarks, mark variants
- `preview/` — token specimen cards
- `ui_kits/storefront/` — Shopify storefront recreation (Nav, Footer, ProductCard, CartDrawer, screens for Home/Collection/Product/Account/About). Lift components directly when building new pages.
