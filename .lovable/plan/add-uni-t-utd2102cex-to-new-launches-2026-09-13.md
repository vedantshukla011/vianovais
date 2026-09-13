# Add UNI-T UTD2102CEX+ to New Launches

## Summary
Add the UNI-T UTD2102CEX+ 100 MHz, 2-channel digital storage oscilloscope to the homepage’s “Just Launched” catalogue, with its supplied product photograph and no price or retailer references anywhere.

## Changes
- Download the product photograph shown in the supplied listing and store it through the site’s hosted asset system so it loads reliably on preview and published domains.
- Add a new UNI-T UTD2102CEX+ card near the start of the homepage New Launches grid.
- Use concise, search-friendly copy focused on the model, 100 MHz bandwidth, two channels, waveform capture, display, connectivity, and electronics/education/service applications.
- Keep the card’s existing “View Details” and “Request Quote” actions working without displaying a price.
- Add a dedicated product-detail record using the existing shared product-page layout, with verified highlights, specifications, applications, metadata, and Product structured data. Omit pricing and retailer attribution from both visible and hidden metadata.
- Add the new product URL to the sitemap with the current modification date.

## Technical details
- Reuse the existing dynamic `/products/:slug` page and add the slug `/products/unit-utd2102cex-plus`.
- Import the new hosted image pointer in both the New Launches catalogue and shared product data.
- Verify the image response, homepage card, detail-page navigation, mobile/desktop rendering, console output, and final build status.
