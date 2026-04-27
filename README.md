# Legginx Design System

> Editorial-sport leggings, cut to the bone. Pure black, pure white, and the body in motion.

## About Legginx

Legginx is a Shopify-based athletic apparel label focused on women's leggings and performance basics. The brand sits in the white space between **Gymshark's volume** and **Tracksmith's editorial restraint** — sportswear stripped of logos, gradients, and noise. Think Bandit Running's typographic discipline, Aimé Leon Dore's neutral confidence, and Lululemon Studio's minimal product staging.

The product is the hero. The wordmark is small. The photography is raw. The page breathes.

### Source materials

- **Live store:** https://www.legginx.com — visited and assets imported
- **Real product lines:** **Rival**, **Glow**, **Aura**, **Essentials** (4 lines)
- **Real pricing:** $24 (shorts/bras/tops) · $29 (leggings)
- **Real tagline:** "Free Shipping All Orders"
- **Real logo:** trident mark (saved to `assets/logo-mark.png`, 1141×1141 transparent PNG)
- **Real colorways (24+ across line):** Navy, Peach, Sky, Jade, Sage, Mint, Rose, Blossom, Crimson, Plum, Lavender, Magenta, Pearl, Ivory, Almond, Blush, Hazel, Stone, Chestnut, Olive, Emerald, Ember, Royal, Onyx
- **Aesthetic anchor:** Editorial sport — Bandit Running / Tracksmith
- **UI shell color mood:** Pure black & white (chrome stays neutral so the garment colors lead)
- **Tone:** Quiet, confident, declarative
- **Imagery:** Studio, on-body, white background, full-leg crop (matches actual store)

---

## Index

| File / folder | What's in it |
|---|---|
| `README.md` | This document — brand context, content + visual foundations, iconography |
| `SKILL.md` | Agent skill manifest (use this in Claude Code or as a downloadable skill) |
| `colors_and_type.css` | Single source of truth for color and type tokens. Import this in any HTML you build. |
| `assets/logo-mark.png` | The trident — primary brand mark (provided by user) |
| `assets/logo-mark-inverted.png` | Trident, inverted for dark surfaces |
| `assets/logo-wordmark.svg` | Trident + LEGGINX wordmark lockup |
| `assets/logo-wordmark-inverted.svg` | Wordmark for dark surfaces |
| `preview/` | Per-token preview cards rendered in the Design System tab |
| `ui_kits/storefront/` | High-fidelity Shopify storefront recreation — homepage, PDP, collection, cart, account, about |

> **Note:** Web fonts (Inter, Inter Tight, JetBrains Mono) are loaded via Google Fonts CDN inside `colors_and_type.css` — no `fonts/` folder is needed.

---

## Content fundamentals

**Voice:** Quiet. Confident. Declarative. Legginx writes the way the product is cut — without filler.

**Casing:**
- Headlines and product titles set in **UPPERCASE**, tight-tracked. Inter Tight 800–900.
- Body copy set in sentence case.
- Buttons and nav: **UPPERCASE**, letter-spaced.
- Never title case. Never small caps within body.

**Person:** Second person, sparingly. Most copy is impersonal — facts about the garment, the fabric, the fit. The customer is assumed to be serious. We don't coach, we don't cheer.

**Length:** Short. A hero gets two words. A product description gets three sentences. A collection name is one word.

**Punctuation:** Periods are optional on hero statements. No exclamation marks, ever. Em dashes are welcome. Numerals are written as digits (5K, not five kilometers).

**Emoji:** Never. Not in product copy, not in marketing, not in UI.

**Do say:**
- "RUN. LIFT. REPEAT."
- "Compression where you need it."
- "Cut for 5K. Built for the rest of the day."
- "The Core Legging. Black. Charcoal. Bone."
- "Free returns. Always."

**Don't say:**
- "Hey runners! 💪 Get ready to crush your goals!"
- "Our amazing new collection is finally here!!"
- "You'll love how these make you feel!"
- "Bestseller alert 🔥"

**Product naming:** Singular nouns. The Core Legging. The Field Short. The Tempo Tee. No "v2," no SKU codes in customer-facing copy. Colorway names are matter-of-fact: Black, Bone, Charcoal, Chalk.

---

## Visual foundations

### Color
Two colors do all the work: **Ink** (`#0A0A0A`, near-black) and **Paper** (`#FAFAF7`, warm off-white). A small grey scale supports them — `Stone-100` through `Stone-900`. There is **no accent color**, no brand red, no gradient. Status colors (error, success) exist but are deliberately desaturated and used only in form validation.

The system is mostly **light surface**: white pages, dark type. Dark sections (full-bleed `Ink` backgrounds) are used surgically — one per page maximum — for a hero, a quote, or a CTA band.

### Typography
- **Display: Inter Tight (800–900)** — tight-tracked all-caps grotesque, used for hero headlines, section labels, product titles. Always uppercase, negative letter-spacing.
- **Body: Inter** — neutral grotesque. Sentence case for prose, uppercase + tracked for nav/buttons.
- **Mono: JetBrains Mono** — used sparingly for spec lines (`32" INSEAM · 4-WAY STRETCH · NYLON 78 / SPANDEX 22`) and order numbers.

Display sizes go big. A homepage hero headline is `clamp(80px, 14vw, 240px)` — type as architecture, not decoration.

### Spacing
8-point grid. Tokens: `--space-1` (4px) through `--space-16` (128px). Sections breathe — `--space-12` (96px) minimum vertical padding between page sections on desktop.

### Layout
- 12-column grid, but most layouts use only 2–4 columns. Whitespace is treated as a positive element.
- Imagery is **full-bleed** when it's a hero, **edge-aligned** (no inner padding from the column gutter) when in a product grid.
- Page max-width: 1600px. Content max-width inside: 1280px. Reading max-width: 640px.
- Fixed elements: top nav (translucent on scroll past hero, solid otherwise), cart drawer (slides from right).

### Backgrounds
**Pure white / off-white only.** No textures, no patterns, no gradients. The brand earns variety through photography and typographic scale, not surface decoration. The single permitted dark surface is solid `Ink` — used for emphasis, never decorative.

### Imagery
Lifestyle, on-body, in motion. Cool greys, true blacks, no warm filters. High contrast. Visible grain is OK; saturated colors are not — desaturate everything in post. Garments are shot on real athletes, mid-movement, in real spaces (track, gym floor, stairwell, street). Studio shots are rare and reserved for the PDP color swatch carousel.

### Animation
- **Fades only**, mostly. 240ms cubic-bezier(0.2, 0, 0.2, 1) for opacity and transform.
- **No bounce, no spring.** This brand does not bounce.
- Image-on-scroll: subtle parallax at most 20px translation, never tilt/skew.
- Hover transitions: 160ms.
- Page transitions: instant on hard nav, 200ms crossfade on SPA-style nav.

### Hover states
- **Buttons (Ink):** background lightens to `Stone-800` (1 step lighter). No scale.
- **Buttons (Paper):** background darkens to `Stone-100`.
- **Links:** underline appears (1px, 4px below baseline). Never color change.
- **Product cards:** image swaps to alternate angle (crossfade 200ms). Title doesn't move.
- **Icons:** opacity 0.6 → 1.0.

### Press / active states
- **Buttons:** background goes one more step (Stone-700 / Stone-200). No scale. No shadow.
- **Cards:** opacity 0.9.

### Borders
- 1px, `Stone-200` for dividers and form fields.
- 1px, `Ink` for emphatic separators (between sections in About, between items in cart).
- No 2px borders. No dashed. No double.

### Shadows
**Almost none.** This is a flat brand. The single allowed shadow is on the cart drawer overlay scrim and dropdown menus:
- `--shadow-soft: 0 8px 32px -8px rgba(10, 10, 10, 0.08)`
- `--shadow-overlay: 0 24px 64px -16px rgba(10, 10, 10, 0.16)`

No inner shadows. No glow. No colored shadows.

### Corner radii
- **0px (sharp).** Default for buttons, cards, images, form fields, modals.
- **2px** is permitted for tag chips and small inline elements.
- **9999px (pill)** for one specific component: the size-selector circle on the PDP.
- Rounded rectangles do not exist in this system.

### Cards
Cards are not boxes. A "card" in this system is an image + a title + a price, ungrouped, no border, no shadow, no fill. The grid does the containing work. If a card needs a container — say, an order summary — it gets a 1px `Stone-200` border and a `Paper` fill. Never a shadow.

### Transparency & blur
- Sticky nav uses `backdrop-filter: blur(12px)` with `rgba(250, 250, 247, 0.72)` once scrolled past hero. Otherwise solid `Paper`.
- Cart drawer scrim: `rgba(10, 10, 10, 0.4)`, no blur.
- Modal scrim: same as cart.
- No frosted glass elsewhere.

### Forms
Inputs are 1px-bordered, sharp-cornered, full-width. Labels sit above the field, uppercase + tracked, JetBrains Mono 11px. Placeholder text is `Stone-400`. Focus state: border darkens to `Ink`, no glow.

---

## Iconography

**Approach:** sparse. Icons are functional, never decorative. The brand uses fewer icons than most stores — search, account, bag, close, chevron, plus, minus, check. That's nearly the full set.

**Style:**
- 1.5px stroke, square caps, square joins.
- 24×24 default, 20×20 for inline, 16×16 for inline-text.
- No fills. Strokes only.
- Color: always `currentColor` — never hard-coded.

**Source:** [**Lucide Icons**](https://lucide.dev) — loaded from CDN. Substituted as the closest match to a custom set; flag this for the user. Specific icons in use:
`search`, `user`, `shopping-bag`, `x`, `chevron-down`, `chevron-right`, `plus`, `minus`, `check`, `arrow-right`, `arrow-up-right`, `instagram`.

**Emoji:** Never used.
**Unicode chars as icons:** Never. Even for arrows — use Lucide.
**SVG vs PNG:** All UI icons are SVG (Lucide). PNG/JPG only for photography.

**Logo system:**
- `assets/logo-wordmark.svg` — primary horizontal lockup, letter-spaced
- `assets/logo-wordmark-inverted.svg` — for dark surfaces
- `assets/logo-mark.svg` — single-letter "L" mark for favicons / app icons / cart corners

---

## Substitutions flagged for review

1. **Display font:** Inter Tight 800–900 in place of a custom display face. Swap if you license one.
2. **Logo lockup:** trident-only in the nav (matches live store). Wordmark variants in `assets/` retained for footer / favicon contexts.
3. **Photography:** real product shots from legginx.com. Add more colorways/lifestyle as needed.
4. **Iconography:** Lucide-style 1.5px stroke set, hand-rolled inline. Swap if you have a theme icon library.
