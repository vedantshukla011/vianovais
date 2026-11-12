import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ClipboardList, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BRANDS } from "@/data/brands";
import { getBrandProfile } from "@/data/brandProfiles";

const SITE = "https://vianovaindustrial.solutions";

const BrandLanding = () => {
  const { slug } = useParams();
  const profile = getBrandProfile(slug);

  if (!profile) return <Navigate to="/brands" replace />;

  const brand = BRANDS.find((item) => item.name.toLowerCase() === profile.name.toLowerCase());
  const pageUrl = `${SITE}/brands/${profile.slug}`;
  const logoUrl = brand?.logo.startsWith("http") ? brand.logo : `${SITE}${brand?.logo ?? ""}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: "Brands", item: `${SITE}/brands` },
      { "@type": "ListItem", position: 3, name: profile.name, item: pageUrl },
    ],
  };
  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: profile.title,
    description: profile.metaDescription,
    url: pageUrl,
    about: { "@type": "Brand", name: profile.name, url: `https://${brand?.domain ?? ""}` },
    publisher: { "@type": "Organization", name: "ViaNova Industrial Solutions", url: SITE },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: profile.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen pt-20">
      <Helmet>
        <title>{profile.metaTitle}</title>
        <meta name="description" content={profile.metaDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={profile.metaTitle} />
        <meta property="og:description" content={profile.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={logoUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={profile.metaTitle} />
        <meta name="twitter:description" content={profile.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(pageJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <section className="bg-primary text-primary-foreground border-b border-border">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <Link to="/brands" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground">
            <ArrowLeft className="h-4 w-4" /> All brands
          </Link>
          <div className="flex flex-wrap items-center gap-5">
            {brand && <div className={`flex h-16 min-w-28 items-center justify-center rounded-lg px-4 ${brand.logoBackground === "dark" ? "bg-slate-800" : "bg-white"}`}>
              <img src={brand.logo} alt={`${profile.name} logo`} className="max-h-12 max-w-40 object-contain" />
            </div>}
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase tracking-wide">
              {brand?.authorized ? <ShieldCheck className="h-4 w-4 text-accent" /> : <ClipboardList className="h-4 w-4 text-accent" />}
              {brand?.authorized ? "Authorized distributor in India" : "Brand sourcing assistance"}
            </span>
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">{profile.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-primary-foreground/80">{profile.overview}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild className="bg-accent font-semibold text-accent-foreground hover:bg-accent-light">
              <Link to={`/inquiry?product=${encodeURIComponent(profile.name)}`}>Request product guidance <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/products">Browse products</Link>
            </Button>
          </div>
          <Link to={`/inquiry?market=export&product=${encodeURIComponent(profile.name)}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 hover:text-primary-foreground">
            International buyer? Start an export inquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-16">
        <p className="text-sm font-bold uppercase tracking-wider text-secondary">{profile.name} product range</p>
        <h2 className="mt-2 text-3xl font-bold text-foreground">Explore {profile.name} instruments</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">Choose an instrument family to discuss requirements, model options and sourcing with ViaNova.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {profile.categories.map((category) => (
            <Card key={category.name} className="border-border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{category.description}</p>
                <Link to={`/inquiry?product=${encodeURIComponent(`${profile.name} ${category.name}`)}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
                  Ask about this range <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40 py-14 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground">Applications and selection</h2>
          <p className="mt-3 max-w-3xl text-muted-foreground">Match the instrument to the signal or process, required accuracy, environment and integration needs.</p>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2">
            {profile.applications.map((application) => (
              <li key={application} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 text-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span>{application}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-16">
        <h2 className="text-3xl font-bold text-foreground">{profile.name} instruments: frequently asked questions</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {profile.faqs.map((faq) => (
            <article key={faq.question} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-lg bg-muted p-4 text-sm leading-relaxed text-muted-foreground">
          {brand?.authorized
            ? `ViaNova Industrial Solutions is an authorized ${profile.name} distributor in India. Product availability, warranty and support are subject to the selected model and manufacturer terms.`
            : `ViaNova can help check sourcing and availability for ${profile.name} products. Brand authorization and manufacturer warranty terms depend on the specific supply arrangement; contact us to confirm details for your enquiry.`}
        </p>
      </section>
    </main>
  );
};

export default BrandLanding;
