import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Download, ExternalLink, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import { FLIR_PRODUCTS } from "@/data/flirProducts";
import flirLogo from "@/assets/flir-logo.png.asset.json";

const SITE = "https://vianovaindustrial.solutions";
const PAGE = `${SITE}/brands/flir`;
const DESCRIPTION = "Explore FLIR measuring instruments and thermal imaging cameras in India: E52, E8 Pro, E76 and C5. Compare specifications and request a quote from ViaNova.";

const BrandFlir = () => {
  const { addItem, hasItem } = useQuoteCart();
  const navigate = useNavigate();
  const requestQuote = (model: string, name: string) => {
    addItem(`FLIR ${model} — ${name}`);
    navigate("/inquiry");
  };

  return (
    <main className="min-h-screen pt-20">
      <Helmet>
        <title>FLIR Thermal Imaging Cameras in India | ViaNova</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE} />
        <meta property="og:title" content="FLIR Thermal Imaging Cameras | ViaNova" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "FLIR Thermal Imaging Cameras",
          numberOfItems: FLIR_PRODUCTS.length,
          itemListElement: FLIR_PRODUCTS.map((product, index) => ({
            "@type": "ListItem", position: index + 1,
            item: { "@type": "Product", name: `FLIR ${product.model} ${product.name}`, image: product.image, description: product.description, brand: { "@type": "Brand", name: "FLIR" }, model: product.model, url: product.detailPath ? `${SITE}${product.detailPath}` : product.sourceUrl },
          })),
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Brands", item: `${SITE}/brands` },
            { "@type": "ListItem", position: 3, name: "FLIR", item: PAGE },
          ],
        })}</script>
      </Helmet>

      <section className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/brands"><ArrowLeft /> Back to Brands</Link>
          </Button>
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <img src={flirLogo.url} alt="FLIR logo" className="w-36 h-16 object-contain" />
            <span className="text-sm font-semibold uppercase text-secondary">Brand Partner · Measuring Instruments</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5">FLIR Thermal Imaging Cameras</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Measuring instruments from FLIR bring infrared imaging to electrical inspections, mechanical condition monitoring and building diagnostics. From compact everyday cameras to advanced handheld systems, explore thermal imaging for your next inspection through ViaNova Industrial Solutions.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-7 text-sm font-medium text-foreground">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-secondary" /> Electrical &amp; mechanical inspections</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-secondary" /> Preventive maintenance</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-secondary" /> Building diagnostics</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <p className="text-secondary text-sm font-semibold uppercase mb-2">Selected FLIR Products</p>
        <h2 className="text-3xl font-bold text-foreground mb-8">Find Your Thermal Camera</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FLIR_PRODUCTS.map((product) => {
            const selected = hasItem(`FLIR ${product.model} — ${product.name}`);
            return (
              <article key={product.model} className="border border-border rounded-lg overflow-hidden bg-card flex flex-col">
                <div className="aspect-[4/3] bg-muted/30 p-5">
                  <img src={product.image} alt={`FLIR ${product.model} thermal imaging camera`} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-semibold uppercase text-secondary mb-2">{product.series}</p>
                  <h3 className="text-2xl font-bold text-foreground">FLIR {product.model}</h3>
                  <p className="text-sm font-medium text-foreground mt-1">{product.name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed my-4">{product.description}</p>
                  <ul className="space-y-2 mb-5 text-sm">
                    {product.specs.map((spec) => <li key={spec} className="flex gap-2 items-start"><Check className="w-4 h-4 shrink-0 mt-0.5 text-secondary" /><span>{spec}</span></li>)}
                  </ul>
                  <div className="mt-auto border-t border-border pt-4 flex flex-col gap-3">
                    <Button onClick={() => requestQuote(product.model, product.name)} className="bg-accent hover:bg-accent-light text-accent-foreground">
                      {selected ? <Check /> : <Plus />} {selected ? "View Quote Request" : "Request Quote"}
                    </Button>
                    {product.detailPath ? (
                      <Button asChild variant="outline"><Link to={product.detailPath}>View Details <ArrowRight /></Link></Button>
                    ) : (
                      <Button asChild variant="outline"><a href={product.sourceUrl} target="_blank" rel="noopener noreferrer" aria-label={`View FLIR ${product.model} on FLIR website`}>FLIR Product Details <ExternalLink /></a></Button>
                    )}
                    {product.datasheet && <Button asChild variant="ghost"><a href={product.datasheet.url} download={product.datasheet.filename} aria-label={`Download FLIR ${product.model} datasheet`}><Download /> Datasheet</a></Button>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default BrandFlir;