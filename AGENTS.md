# Architecture rules

- Home owns one static business H1; carousel slides use H2 headings so page identity stays consistent across slide changes.

- Keep launch cards in `NewLaunches` and shared slug-driven product details in `launchDetails`/`ProductDetail` so homepage links resolve to one consistent detail experience.
- Host official third-party product images and downloadable PDFs through Lovable Assets pointers so product pages do not depend on vendor hotlinks. Exception: small brand logos may be bundled directly under `src/assets` and imported — CDN `/__l5e/` URLs do not render in the local preview, only on the hosted site.
- Keep the FLIR brand overview catalogue in `flirProducts` and render it through `BrandFlir`; link existing local product details and use official manufacturer links for models without local pages to avoid duplicating detail experiences.