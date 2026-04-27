# Legginx Storefront UI Kit

High-fidelity recreation of the Legginx Shopify storefront. Six surfaces, click-thru between them.

## Surfaces
- **Home** — hero, featured collection, journal teaser
- **Collection** — filterable product grid
- **Product (PDP)** — gallery, size/color, fabric specs
- **Cart drawer** — slides from right
- **Account** — order history, addresses
- **About** — brand story

## Components (in order of dependency)
- `Nav.jsx` — top nav + cart drawer trigger
- `Footer.jsx` — minimal footer
- `Button.jsx` — primary / secondary / ghost
- `ProductCard.jsx` — grid item
- `SizeSelector.jsx`, `ColorSwatches.jsx` — PDP controls
- `CartDrawer.jsx` — slide-from-right drawer
- `screens/Home.jsx`, `Collection.jsx`, `Product.jsx`, `Account.jsx`, `About.jsx`

## Run
Open `index.html`. The app is a single-file React app with Babel-transpiled JSX. State holds the current "screen", cart contents, and drawer open state.

## Caveats
- Photography is generated from CSS gradients in greyscale — placeholders. Replace with real on-body lifestyle shots.
- All product copy is invented per the brand's content fundamentals.
- This is a recreation, not production code. Cart math and validation are theatrical.
