import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import { UNIT_OSCILLOSCOPES, type UnitOscilloscope } from "@/data/unitOscilloscopes";

const SITE_URL = "https://vianovais.lovable.app";
const PAGE_URL = `${SITE_URL}/brands/uni-t`;

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);

const BrandUnit = () => {
  const navigate = useNavigate();
  const { addItem, hasItem } = useQuoteCart();

  const requestQuote = (product: UnitOscilloscope) => {
    addItem(`UNI-T ${product.model} — ${product.name} — Listed price: ${formatPrice(product.price)} excluding GST`);
    navigate("/inquiry");
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "UNI-T Oscilloscopes in India",
    numberOfItems: UNIT_OSCILLOSCOPES.length,
    itemListElement: UNIT_OSCILLOSCOPES.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: `UNI-T ${product.model} ${product.name}`,
        image: product.image,
        brand: { "@type": "Brand", name: "UNI-T" },
        category: "Oscilloscopes",
        offers: {
          "@type": "Offer",
          url: PAGE_URL,
          priceCurrency: "INR",
          price: product.price.toFixed(2),
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: product.price.toFixed(2),
            priceCurrency: "INR",
            valueAddedTaxIncluded: false,
          },
        },
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Brands", item: `${SITE_URL}/brands` },
      { "@type": "ListItem", position: 3, name: "UNI-T Oscilloscopes", item: PAGE_URL },
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>UNI-T Oscilloscope Price List India | ViaNova</title>
        <meta name="description" content="Compare 14 UNI-T digital, high-resolution and mixed-signal oscilloscopes in India. View model images and prices excluding GST, then request a quote." />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content="UNI-T Oscilloscopes and Prices in India | ViaNova" />
        <meta property="og:description" content="Explore UNI-T oscilloscopes from 50 MHz to 350 MHz, with 2-channel and 4-channel options. All prices shown excluding GST." />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UNI-T Oscilloscope Price List India | ViaNova" />
        <meta name="twitter:description" content="Compare 14 UNI-T oscilloscopes with model images and prices excluding GST." />
        <script type="application/ld+json">{JSON.stringify(productListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <section className="bg-gradient-hero text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/brands"><ArrowLeft /> Back to Brands</Link>
          </Button>
          <div className="max-w-4xl">
            <Badge className="mb-5 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/10">
              Authorized Product Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">UNI-T Oscilloscopes</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl leading-relaxed">
              Compare digital storage, digital phosphor, high-resolution and mixed-signal oscilloscopes for electronics design, service, education and production testing.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/85">
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> 50 MHz to 350 MHz</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> 2 and 4 channel models</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Pan-India supply and support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <p className="text-sm font-semibold uppercase text-secondary">UNI-T Product Range</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Choose Your Oscilloscope</h2>
            </div>
            <p className="text-sm text-muted-foreground">All prices are excluding GST.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {UNIT_OSCILLOSCOPES.map((product) => {
              const selected = hasItem(`UNI-T ${product.model} — ${product.name} — Listed price: ${formatPrice(product.price)} excluding GST`);
              return (
                <Card key={product.model} className="overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover flex flex-col">
                  <div className="aspect-[4/3] bg-card p-5 flex items-center justify-center border-b border-border/60">
                    <img
                      src={product.image}
                      alt={`UNI-T ${product.model} oscilloscope`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      onError={(event) => { event.currentTarget.src = "/placeholder.svg"; }}
                    />
                  </div>
                  <CardContent className="p-5 flex flex-col flex-1">
                    <Badge variant="secondary" className="self-start mb-3">UNI-T</Badge>
                    <h3 className="text-xl font-bold text-foreground">{product.model}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2 mb-5 flex-1">{product.name}</p>
                    <div className="border-t border-border pt-4">
                      <p className="text-2xl font-bold text-primary">{formatPrice(product.price)}</p>
                      <p className="text-xs font-medium text-muted-foreground mt-1 mb-4">Price excluding GST</p>
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-light" onClick={() => requestQuote(product)}>
                        {selected ? "View Quote Request" : "Request Quote"}<ArrowRight />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandUnit;