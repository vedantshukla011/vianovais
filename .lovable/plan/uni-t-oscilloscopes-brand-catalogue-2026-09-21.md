# UNI-T Oscilloscopes Brand Catalogue

## Scope
- Add a dedicated `/brands/uni-t` page linked from the UNI-T card on the Brands page.
- Present all 14 workbook products as responsive product cards with model, description, product image, and INR price clearly labelled “excluding GST”.
- Add a quote action for each product that carries the selected model into the existing inquiry flow.

## Content and assets
- Use the exact product names and pre-GST prices supplied in the workbook.
- Download each supplied image once, store it through the project’s hosted asset system, and use a clear fallback if an image fails.
- Do not mention or link to the image-source retailer anywhere on the public page.

## Search visibility
- Add page title, description, canonical/Open Graph/Twitter metadata, Product/ItemList structured data, breadcrumbs, and a sitemap entry.

## Technical details
- Create a focused UNI-T catalogue data file and page component.
- Register the new route in the application router.
- Make the UNI-T brand card the entry point without changing other brand cards.
- Verify all 14 cards, hosted images, prices, inquiry links, desktop/mobile layouts, and the current build status.
