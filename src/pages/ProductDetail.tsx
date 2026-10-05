import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Check, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLaunchDetail } from "@/data/launchDetails";

const SITE = "https://vianovaindustrial.solutions";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getLaunchDetail(slug);

  if (!product) return <Navigate to="/products" replace />;

  const canonical = `${SITE}/products/${product.slug}`;
  const inquiryLink = `/inquiry?product=${encodeURIComponent(product.shortTitle)}`;
  const metaDescription = product.description.slice(0, 155);

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.title,
    image: product.image ? [product.image] : undefined,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    sku: product.model,
    mpn: product.model,
    category: product.category,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: canonical,
      seller: { "@type": "Organization", name: "ViaNova Industrial Solutions" },
    },
  };

  return (
    <main className="pt-20">
      <Helmet>
        <title>{`${product.shortTitle} | ViaNova Industrial Solutions`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${product.shortTitle} | ViaNova`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 py-14 grid gap-10 lg:grid-cols-2 items-center">
          <div className="rounded-2xl bg-card border border-border p-6 shadow-elegant">
            <img
              src={product.image}
              alt={`${product.brand} ${product.model} ${product.category}`}
              className="w-full h-72 object-contain"
              loading="eager"
            />
            {product.gallery && (
              <div className="grid grid-cols-4 gap-2 mt-4" aria-label="Product views">
                {product.gallery.map((photo) => (
                  <a key={photo.src} href={photo.src} target="_blank" rel="noopener noreferrer" className="border border-border rounded-md bg-background overflow-hidden focus-visible:ring-2 focus-visible:ring-ring" aria-label={`Open ${photo.alt}`}>
                    <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-20 object-contain p-1" />
                  </a>
                ))}
              </div>
            )}
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              {product.brand} · {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
              {product.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
                <Link to={inquiryLink}>
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/products">Browse All Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {product.documents && (
        <section className="container mx-auto px-4 py-14" aria-labelledby="product-downloads">
          <h2 id="product-downloads" className="text-2xl md:text-3xl font-bold text-foreground mb-6">Brochure &amp; Downloads</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {product.documents.map((document) => (
              <div key={document.filename} className="border border-border bg-card rounded-md p-5 flex flex-col gap-3">
                <h3 className="font-semibold text-foreground">{document.label}</h3>
                <p className="text-sm text-muted-foreground flex-1">{document.description}</p>
                <Button asChild variant="outline" className="self-start">
                  <a href={document.url} download={document.filename} aria-label={`Download ${document.label}`}>
                    <Download className="w-4 h-4 mr-2" /> Download PDF
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Highlights */}
      <section className="container mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Key Highlights</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {product.highlights.map((h) => (
            <Card key={h} className="border-border">
              <CardContent className="p-5 flex items-start gap-3">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{h}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Specs + applications */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 py-14 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Technical Specifications</h2>
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 ? "bg-muted/40" : ""}>
                      <th scope="row" className="text-left font-semibold text-foreground p-3 w-1/2 align-top">
                        {s.label}
                      </th>
                      <td className="p-3 text-muted-foreground align-top">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Applications</h2>
            <ul className="space-y-3">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-2 text-foreground">
                  <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
              <Link to={inquiryLink}>{product.ctaLabel ?? "Get Best Price"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
