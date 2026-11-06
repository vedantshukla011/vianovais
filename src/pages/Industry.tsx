import { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Search, Plus, Check } from "lucide-react";
import { getIndustry, INDUSTRIES } from "@/data/industries";
import { MEDICAL_PRODUCTS } from "@/data/medicalProducts";
import { useQuoteCart } from "@/contexts/QuoteCartContext";

const Industry = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustry(slug) : undefined;

  if (!industry) return <Navigate to="/" replace />;

  const Icon = industry.icon;
  const canonical = `https://vianovaindustrial.solutions/industries/${industry.slug}`;

  const industryKeywords: Record<string, string> = {
    manufacturing: "industrial equipment supplier India, OEM industrial equipment supplier, industrial automation company Delhi, calibration instruments supplier Delhi, turnkey automation lab setup provider",
    automobile: "EV charger test bench supplier, EV motor test setup India, EV battery testing lab setup, electric vehicle lab equipment, EV power analyzer supplier, automotive electronics lab setup, EV motor dynamometer setup",
    education: "EV lab setup for engineering colleges, BTech EV lab setup supplier, electric vehicle trainer kits, oscilloscope for engineering college, engineering lab equipment supplier Delhi, supplier for engineering college lab equipment, complete electronics lab setup supplier",
    "r-and-d": "EV research lab instruments, renewable energy lab setup, FFT analyzer supplier, vibration analyzer supplier India, condition monitoring equipment India, NVH testing equipment India",
    pharmaceuticals: "laboratory measuring instruments online, pharmacy lab equipment, spectrophotometer supplier, tablet testing equipment, industrial instruments with calibration certificate",
    medical: "medical lab equipment supplier India, ECG machine supplier, pulse oximeter distributor, anesthesia machine supplier, hospital equipment supplier Delhi",
    qa: "industrial calibration instruments, calibration instruments supplier Delhi, industrial instruments with calibration certificate, ESD audit equipment supplier, ESD compliance solutions",
    automation: "industrial automation company Delhi, automation products supplier Gurgaon, PLC SCADA supplier India, RFID IoT sensors supplier, turnkey automation lab setup provider",
  };
  const kw = industryKeywords[industry.slug] ?? "industrial equipment supplier India, instrumentation company India, one stop solution for industrial instruments";

  const rawDescription = `${industry.tagline}. ${industry.intro}`;
  const pageTitle = industry.slug === "qa"
    ? "Factory QA & Inspection Equipment Supplier India | ViaNova"
    : `${industry.name} Solutions | ViaNova Industrial Solutions`;
  const metaDescription = industry.slug === "qa"
    ? "Source dimensional inspection tools, hardness and coating testers, calibration instruments and in-process inspection equipment for factory QA across India."
    : rawDescription.length > 155
      ? `${rawDescription.slice(0, 152).replace(/[\s,.;:-]+$/, "")}...`
      : rawDescription;

  return (
    <div className="min-h-screen bg-background pt-20">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={kw} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: `${industry.name} — Test, Measurement & Industrial Equipment Solutions`,
            description: `${industry.tagline}. ${industry.intro.slice(0, 160)}`,
            url: canonical,
            about: {
              "@type": "Service",
              serviceType: `${industry.name} test, measurement and industrial automation solutions`,
              areaServed: "IN",
              provider: {
                "@type": "Organization",
                name: "ViaNova Industrial Solutions",
                url: "https://vianovaindustrial.solutions/",
              },
            },
          })}
        </script>

      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 mb-5">
              <Icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold uppercase tracking-wider">Industries We Serve</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              {industry.slug === "qa" ? "Factory QA, Inspection & Calibration Solutions" : `${industry.name} — Test, Measurement & Industrial Equipment Solutions`}
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/85 mb-8">{industry.tagline}</p>
            <p className="text-base md:text-lg text-primary-foreground/75 leading-relaxed mb-8">{industry.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Link to="/inquiry">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Provide</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Solutions for the {industry.name} sector
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.offerings.map((o, i) => (
              <Card key={i} className="border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{o.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-foreground">Typical Applications</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industry.applications.map((a, i) => (
              <span key={i} className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Medical-only: product & pricing catalogue */}
      {industry.slug === "medical" && <MedicalCatalogue />}

      {/* Other Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">Explore Other Industries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {INDUSTRIES.filter((i) => i.slug !== industry.slug).map((i) => {
              const I = i.icon;
              return (
                <Link
                  key={i.slug}
                  to={`/industries/${i.slug}`}
                  className="bg-card border border-border rounded-xl p-5 text-center hover:border-accent hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                >
                  <I className="w-8 h-8 mx-auto mb-2 text-secondary" />
                  <p className="font-semibold text-sm text-foreground">{i.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-secondary to-secondary-light text-secondary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a tailored solution for {industry.name}?</h2>
          <p className="text-lg mb-7 text-secondary-foreground/90">
            Talk to our experts for a customized proposal aligned to your application.
          </p>
          <Link to="/inquiry">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industry;

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

const ALL = "All Categories";

const MedicalCatalogue = () => {
  const { addItem, hasItem } = useQuoteCart();
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>(ALL);

  const categories = useMemo(() => {
    const set = new Set(MEDICAL_PRODUCTS.map((p) => p.category));
    return [ALL, ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MEDICAL_PRODUCTS.filter((p) => {
      if (activeCat !== ALL && p.category !== activeCat) return false;
      if (q && !p.name.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [query, activeCat]);

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Medical Catalogue</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Medical Equipment & Supplies — Indicative Pricing
          </h2>
          <p className="text-muted-foreground mt-3">
            Listed prices are indicative and exclusive of taxes. Add items to your inquiry for a formal quotation.
          </p>
        </div>

        {/* Search + categories */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search medical products…"
              className="pl-10"
              aria-label="Search medical products"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  activeCat === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:bg-muted"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left text-foreground">
                <th className="px-4 py-3 font-semibold">Product</th>
                <th className="px-4 py-3 font-semibold hidden md:table-cell">Category</th>
                <th className="px-4 py-3 font-semibold text-right whitespace-nowrap">Price (excl. tax)</th>
                <th className="px-4 py-3 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => {
                const cartLabel = `${p.name} — Listed: ${formatINR(p.price)} (excl. tax)`;
                const inCart = hasItem(cartLabel);
                return (
                  <tr key={p.name} className="border-t border-border hover:bg-muted/30">
                    <td className="px-4 py-3 text-foreground">
                      {p.name}
                      <div className="md:hidden text-xs text-muted-foreground mt-1">{p.category}</div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{p.category}</td>
                    <td className="px-4 py-3 text-right font-semibold text-foreground whitespace-nowrap">
                      {formatINR(p.price)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button
                        size="sm"
                        variant={inCart ? "secondary" : "default"}
                        onClick={() => addItem(cartLabel)}
                        disabled={inCart}
                      >
                        {inCart ? (
                          <><Check className="w-4 h-4 mr-1" /> Added</>
                        ) : (
                          <><Plus className="w-4 h-4 mr-1" /> Inquire</>
                        )}
                      </Button>
                    </td>
                  </tr>
                );
              })}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-4 py-10 text-center text-muted-foreground">
                    No products match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4 max-w-3xl mx-auto">
          Prices shown are indicative MRP and exclusive of GST and applicable taxes. Final pricing is confirmed on quotation.
        </p>

        <div className="text-center mt-8">
          <Link to="/inquiry">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
              Review Inquiry & Request Best Price <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

