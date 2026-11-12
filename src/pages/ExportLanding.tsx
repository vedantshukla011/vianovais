import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, ClipboardCheck, FileText, Globe2, PackageSearch, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EXPORT_MARKETS, getExportMarket } from "@/data/exportMarkets";

const SITE = "https://vianovaindustrial.solutions";
const EXPORT_CATEGORIES = [
  { title: "Electronic test & measurement", description: "Oscilloscopes, digital multimeters, probes, signal generators, analyzers, DC power supplies and electronic loads." },
  { title: "Industrial inspection & monitoring", description: "Thermal imaging, temperature, humidity, pressure and environmental measurement instruments." },
  { title: "Laboratory & scientific equipment", description: "Laboratory measurement equipment and instruments for research, quality control and teaching facilities." },
  { title: "Precision tools & workstations", description: "Dimensional measurement tools, ESD products and soldering equipment for production and service." },
];
const EXPORT_STEPS = [
  { icon: PackageSearch, title: "Share the requirement", description: "Tell us the destination, application, manufacturer, model or specification, quantity and target timeline." },
  { icon: ClipboardCheck, title: "Confirm export eligibility", description: "We review product availability, destination constraints, warranty territory and any required technical details before quoting." },
  { icon: FileText, title: "Review the export quotation", description: "The quotation confirms available currency, payment terms, documentation, delivery basis and shipment options for that order." },
  { icon: Ship, title: "Agree the shipment plan", description: "Once order terms are agreed, dispatch timing and shipment arrangements are confirmed for the destination." },
];

const baseFaqs = [
  { question: "What products can overseas buyers request?", answer: "International buyers can enquire about electronic test equipment, industrial measurement instruments, laboratory products, precision tools and related equipment. The product and destination are reviewed together before a quotation is issued." },
  { question: "What should I include in an export inquiry?", answer: "Include your company and country, delivery city or port, product models or technical specifications, quantity, required date and preferred quotation currency." },
  { question: "Are all brands authorized for export to every destination?", answer: "No. Brand authorization is territory-specific. ViaNova's distributor authorizations stated for India do not automatically extend to other countries; product eligibility, warranty coverage and available supply are confirmed for each inquiry." },
  { question: "Are freight, import tax and customs charges included?", answer: "These depend on the shipment terms and destination. The quotation will identify the agreed scope. Buyers should confirm local import duties, permits and clearance obligations with their customs broker or relevant authorities." },
];

const ExportLanding = () => {
  const { slug } = useParams();
  const market = getExportMarket(slug);
  const title = market?.metaTitle ?? "Industrial Test Equipment Exporter from India | ViaNova";
  const description = market?.metaDescription ?? "Source test and measurement instruments, industrial equipment and laboratory products from India for Arab and African markets. Request a destination-specific export quotation from ViaNova.";
  const heading = market?.title ?? "Industrial Test Equipment Exports from India";
  const intro = market?.intro ?? "ViaNova Industrial Solutions helps overseas distributors, engineering companies, laboratories and procurement teams source test and measurement instruments from India. We review each request against the product, destination and required shipment terms. Share your country, model numbers or specifications, quantities and target date to receive a quotation for review.";
  const pageUrl = `${SITE}${market ? `/exports/${market.slug}` : "/exports"}`;
  const faqs = market?.faqs ?? baseFaqs;
  const breadcrumbs = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "Exports", item: `${SITE}/exports` },
    ...(market ? [{ "@type": "ListItem", position: 3, name: market.name, item: pageUrl }] : []),
  ];

  return (
    <main className="min-h-screen pt-20">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: heading,
          description,
          url: pageUrl,
          publisher: { "@type": "Organization", name: "ViaNova Industrial Solutions", url: SITE },
        })}</script>
        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
        })}</script>
      </Helmet>

      <section className="relative overflow-hidden bg-primary-dark text-primary-foreground">
        <div aria-hidden className="absolute -right-20 -top-40 h-[520px] w-[520px] rounded-full border border-primary-foreground/10 shadow-[0_0_0_55px_hsl(var(--primary-foreground)/0.03),0_0_0_110px_hsl(var(--primary-foreground)/0.02)]" />
        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <Link to="/exports" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/75 hover:text-primary-foreground">
            <Globe2 className="h-4 w-4" /> International supply from India
          </Link>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">ViaNova Industrial Solutions · Export inquiries</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{heading}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/80">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent font-semibold text-accent-foreground hover:bg-accent-light">
              <Link to="/inquiry?market=export">
                Request an export quotation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/products">Explore equipment</Link>
            </Button>
          </div>
          {market && <p className="mt-5 max-w-3xl text-sm leading-relaxed text-primary-foreground/65">Countries shown are markets for inquiry, not guaranteed shipping coverage. Export availability and terms are confirmed by destination and product.</p>}
        </div>
      </section>

      {!market && (
        <section className="container mx-auto px-4 py-14 md:py-16" aria-labelledby="markets-heading">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-secondary">Priority regions</p>
            <h2 id="markets-heading" className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Export inquiries for Arab and African markets</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Start with the region page for market examples and inquiry guidance. For any other country, use the export inquiry form and specify your destination.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {EXPORT_MARKETS.map((item) => (
              <Card key={item.slug} className="overflow-hidden border-border shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary">Export market</p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">{item.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.intro}</p>
                  <p className="mt-4 text-sm"><span className="font-semibold text-foreground">Markets to enquire about:</span> <span className="text-muted-foreground">{item.countries.slice(0, 6).join(", ")}</span></p>
                  <Link to={`/exports/${item.slug}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary">
                    Export information <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {market && (
        <section className="container mx-auto px-4 py-14 md:py-16" aria-labelledby="market-countries">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-secondary">Destination review</p>
              <h2 id="market-countries" className="mt-2 text-3xl font-bold text-foreground">Discuss your destination and equipment list</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">The countries below are examples of markets overseas buyers may enquire about. A request does not guarantee service to that destination; ViaNova confirms product eligibility and available shipment terms before an order is accepted.</p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {market.countries.map((country) => (
                  <li key={country} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-sm font-medium text-foreground">
                    <Check className="h-4 w-4 shrink-0 text-secondary" /> {country}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-border bg-muted/30 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground">Prepare an export-ready inquiry</h3>
                <ul className="mt-5 space-y-4">
                  {market.priorities.map((priority) => (
                    <li key={priority} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" /> {priority}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-7 w-full bg-accent font-semibold text-accent-foreground hover:bg-accent-light">
                  <Link to="/inquiry?market=export">Send destination details <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <section className="border-y border-border bg-muted/40 py-14 md:py-16" aria-labelledby="export-categories">
        <div className="container mx-auto px-4">
          <p className="text-sm font-bold uppercase tracking-wider text-secondary">Equipment portfolio</p>
          <h2 id="export-categories" className="mt-2 text-3xl font-bold text-foreground md:text-4xl">Test instruments and industrial equipment for export inquiry</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {EXPORT_CATEGORIES.map((category) => (
              <Card key={category.title} className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{category.description}</p>
                  <Link to={`/inquiry?market=export&product=${encodeURIComponent(category.title)}`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary">
                    Enquire about this range <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-16" aria-labelledby="export-process">
        <p className="text-sm font-bold uppercase tracking-wider text-secondary">A clear export inquiry process</p>
        <h2 id="export-process" className="mt-2 text-3xl font-bold text-foreground md:text-4xl">From specification to shipment terms</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {EXPORT_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-xl border border-border bg-card p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-secondary">Step {index + 1}</p>
                <h3 className="mt-1 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-primary-dark py-14 text-primary-foreground md:py-16">
        <div className="container mx-auto flex flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">Send your international requirement to ViaNova</h2>
            <p className="mt-3 leading-relaxed text-primary-foreground/75">Tell us the destination, equipment list, quantities and timeline. We will review the request and confirm the terms we can offer.</p>
          </div>
          <Button asChild size="lg" className="shrink-0 bg-accent font-semibold text-accent-foreground hover:bg-accent-light">
            <Link to="/inquiry?market=export">Start export inquiry <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-16" aria-labelledby="export-faq">
        <h2 id="export-faq" className="text-3xl font-bold text-foreground">International export questions</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">Product availability, export eligibility, applicable brand authorization, warranty, quotation currency, payment, shipping and documentation depend on the destination and specific order. Details are confirmed in writing before order acceptance.</p>
      </section>
    </main>
  );
};

export default ExportLanding;
