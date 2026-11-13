import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FlaskConical,
  Gauge,
  Ruler,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NewLaunches from "@/components/NewLaunches";
import { BLOG_POSTS } from "@/data/blogPosts";
import { AUTHORIZED_BRANDS, BRANDS } from "@/data/brands";
import { INDUSTRIES } from "@/data/industries";
import heroMeasurementImage from "@/assets/hero-test-measurement.jpg";
import measurementImage from "@/assets/product-measuring-instruments.jpg";
import thermalImage from "@/assets/product-environmental-sensing.jpg";
import precisionImage from "@/assets/product-dimensional-tools.jpg";
import labImage from "@/assets/product-scientific-lab.jpg";
import esdImage from "@/assets/product-esd-lab.jpg";
import displayImage from "@/assets/product-interactive-displays.jpg";

const solutions = [
  {
    eyebrow: "Test & measurement",
    title: "Oscilloscopes & electrical test",
    description: "Find the right oscilloscope, multimeter, power supply, analyzer or diagnostic instrument for your bench or production line.",
    image: measurementImage,
    imageAlt: "Test and measurement instruments for electronics and industrial applications",
    href: "/products?category=Testing%20%26%20Diagnostic",
    icon: Activity,
  },
  {
    eyebrow: "Inspection & maintenance",
    title: "Thermal imaging",
    description: "Thermal cameras and environmental instruments for electrical inspection, preventive maintenance and facility monitoring.",
    image: thermalImage,
    imageAlt: "Environmental sensing and thermal inspection equipment",
    href: "/products?category=Testing%20%26%20Diagnostic&subcategory=Thermal%20Imager",
    icon: Gauge,
  },
  {
    eyebrow: "Metrology",
    title: "Precision measuring tools",
    description: "Dimensional measurement tools that help quality, production and R&D teams work with confidence.",
    image: precisionImage,
    imageAlt: "Precision dimensional measuring tools for quality and production teams",
    href: "/products?category=Precision%20Measuring",
    icon: Ruler,
  },
  {
    eyebrow: "Research & quality",
    title: "Scientific laboratory equipment",
    description: "Laboratory instruments and essentials for research, education, testing and quality-control environments.",
    image: labImage,
    imageAlt: "Scientific laboratory instruments and equipment",
    href: "/products?category=Scientific%20Laboratory%20Equipments",
    icon: FlaskConical,
  },
  {
    eyebrow: "Electronics workspaces",
    title: "ESD & soldering solutions",
    description: "Build safer electronics work areas with ESD products, soldering equipment and practical lab setup support.",
    image: esdImage,
    imageAlt: "ESD-safe electronics lab and workstation solutions",
    href: "/products?category=Soldering&subcategory=ESD%20Supplies",
    icon: ShieldCheck,
  },
  {
    eyebrow: "Learning & collaboration",
    title: "Interactive displays",
    description: "Interactive flat panels and digital whiteboards for modern classrooms, training spaces and boardrooms.",
    image: displayImage,
    imageAlt: "Interactive display for modern classrooms and boardrooms",
    href: "/products?category=Interactive%20Displays",
    icon: Sparkles,
  },
];

const authorizedBrands = AUTHORIZED_BRANDS.map((brand) => brand.name);

const reasons = [
  {
    icon: CheckCircle2,
    title: "Guidance around your application",
    description: "Tell us what you need to measure, inspect or build. We help you navigate the options and identify a suitable solution.",
  },
  {
    icon: ShieldCheck,
    title: "A portfolio built on trusted brands",
    description: "Explore test equipment, instruments and engineering products from established international and Indian manufacturers.",
  },
  {
    icon: Truck,
    title: "India-wide supply and export inquiry support",
    description: "We support domestic supply across India and review international product availability, warranty territory and shipment terms by destination.",
  },
];

const faqs = [
  {
    question: "Which brands is ViaNova an authorized distributor for?",
    answer: "ViaNova Industrial Solutions is an authorized distributor for MICSIG, RIGOL, SIGLENT, TESTO, Teledyne FLIR, UNI-T, Hantek and VAISALA. Contact our team to check availability and request a quotation for your required brand or model.",
  },
  {
    question: "What test and measurement instruments does ViaNova supply?",
    answer: "ViaNova supplies oscilloscopes, digital multimeters, DC power supplies, power and spectrum analyzers, thermal imagers, precision measuring tools, ESD products and scientific laboratory equipment. Availability depends on the brand and model.",
  },
  {
    question: "Can ViaNova help us choose equipment for a specific application?",
    answer: "Yes. Share your application, required specifications and preferred models through the inquiry form. The ViaNova team can help you review suitable options and request a quotation.",
  },
  {
    question: "Does ViaNova deliver test equipment across India?",
    answer: "ViaNova supports business requirements across India, with pan-India delivery and GST invoicing for supplied equipment.",
  },
  {
    question: "Can overseas buyers request export quotations from ViaNova?",
    answer: "Yes. International buyers can submit product requirements and destination details for review. Export eligibility, available shipment terms, documentation and quotation currency are confirmed for each order.",
  },
  {
    question: "Which Arab and African countries can ViaNova export to?",
    answer: "Buyers can request a destination review through our Middle East and Africa export pages. Service availability depends on the product and destination and is confirmed before an order is accepted.",
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Test, Measurement and Laboratory Solutions from ViaNova",
  itemListElement: solutions.map((solution, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: solution.title,
    url: "https://vianovaindustrial.solutions" + solution.href,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const authorizedBrandsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Authorized test and measurement brands distributed by ViaNova Industrial Solutions",
  itemListElement: authorizedBrands.map((brand, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: { "@type": "Brand", name: brand },
  })),
};

const Home = () => {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Test &amp; Measurement Equipment Supplier in India | ViaNova</title>
        <meta
          name="description"
          content="Source oscilloscopes, meters, thermal cameras, power instruments and laboratory equipment from ViaNova. We serve businesses across India and review international export inquiries by destination."
        />
        <link rel="canonical" href="https://vianovaindustrial.solutions/" />
        <meta property="og:title" content="Test &amp; Measurement Equipment Supplier in India | ViaNova" />
        <meta
          property="og:description"
          content="ViaNova supplies test, measurement and laboratory equipment for businesses in India, and reviews export inquiries from overseas buyers."
        />
        <meta property="og:url" content="https://vianovaindustrial.solutions/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={"https://vianovaindustrial.solutions" + heroMeasurementImage} />
        <meta property="og:image:alt" content="Test and measurement instruments in an electronics laboratory" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Test &amp; Measurement Equipment Supplier in India | ViaNova" />
        <meta
          name="twitter:description"
          content="Test and measurement equipment for India-wide supply and international export inquiries. Contact ViaNova for product guidance and quotations."
        />
        <meta name="twitter:image" content={"https://vianovaindustrial.solutions" + heroMeasurementImage} />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(authorizedBrandsSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main>
        <section className="relative isolate overflow-hidden bg-primary-dark text-primary-foreground">
          <img
            src={heroMeasurementImage}
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/45" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_25%,hsl(var(--secondary)/0.3),transparent_48%)]" />

          <div className="container relative mx-auto px-4 pb-12 pt-32 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-44">
            <div className="max-w-4xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/90 sm:text-sm">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Engineering supply partner · India & international buyers
              </div>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Test &amp; measurement equipment
                <span className="mt-2 block text-accent">for businesses in India and beyond.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg md:text-xl">
                ViaNova helps businesses across India source oscilloscopes, meters, thermal cameras, power instruments and laboratory equipment. Overseas buyers can also request export quotations, with product eligibility and shipment terms reviewed by destination.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="min-h-12 bg-accent px-6 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent-light hover:shadow-xl"
                >
                  <Link to="/inquiry">
                    Discuss your requirement
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-h-12 border-primary-foreground/40 bg-primary-foreground/10 px-6 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground hover:text-primary"
                >
                  <a href="#solutions">Explore our solutions</a>
                </Button>
              </div>
              <Link to="/exports" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/80 underline decoration-primary-foreground/40 underline-offset-4 hover:text-primary-foreground">
                International buyer? View export information <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid max-w-4xl grid-cols-1 gap-4 border-t border-primary-foreground/20 pt-6 sm:grid-cols-3 sm:gap-8">
              <div>
                <p className="text-3xl font-bold text-primary-foreground">25<span className="text-accent">+</span></p>
                <p className="mt-1 text-sm text-primary-foreground/70">years of industrial experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-foreground">15<span className="text-accent">+</span></p>
                <p className="mt-1 text-sm text-primary-foreground/70">industries served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-foreground">Pan-India</p>
                <p className="mt-1 text-sm text-primary-foreground/70">domestic supply and delivery support</p>
              </div>
            </div>

            <div className="absolute bottom-12 right-4 hidden max-w-xs rounded-2xl border border-white/20 bg-primary-dark/70 p-5 shadow-2xl backdrop-blur-md xl:block">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">The right instrument starts with the right conversation.</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">Share your application and location. International requirements are reviewed by destination.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-14 sm:py-18" aria-labelledby="export-markets-title">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Serving India and overseas buyers</p>
                <h2 id="export-markets-title" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Local supply, with international export inquiries welcome</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">ViaNova supports equipment requirements across India. Overseas buyers can request a product and destination review for export quotation.</p>
              </div>
              <Link to="/exports" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary">International export information <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Link to="/products" className="group rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant sm:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-secondary">For Indian businesses</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground group-hover:text-primary">Source equipment across India</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Explore test and measurement instruments, industrial inspection equipment, precision tools and laboratory products for your requirement.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Browse the product portfolio <ArrowRight className="h-4 w-4" /></span>
              </Link>
              <Link to="/exports" className="group rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant sm:p-8">
                <p className="text-xs font-bold uppercase tracking-wider text-secondary">For overseas buyers</p>
                <h3 className="mt-2 text-2xl font-bold text-foreground group-hover:text-primary">Request an international export review</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Share your destination and equipment list. Find guidance for buyers in Middle East, Arab and African markets.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore export information <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </div>
          </div>
        </section>

        <section id="solutions" className="bg-background py-20 sm:py-24 lg:py-28" aria-labelledby="solutions-title">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Find the right fit</p>
                <h2 id="solutions-title" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Equipment for every stage of your work
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Browse key ViaNova categories, from electronics test instruments to precision metrology and laboratory equipment.
                </p>
              </div>
              <Link to="/products" className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-secondary">
                Browse all categories <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => (
                <Link
                  key={solution.title}
                  to={solution.href}
                  className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={solution.image}
                      alt={solution.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/65 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/25 bg-primary-dark/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                      <solution.icon className="h-4 w-4 text-accent" />
                      {solution.eyebrow}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-secondary">{solution.title}</h3>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-secondary" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/45 py-20 sm:py-24" aria-labelledby="why-vianova-title">
          <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">More than a catalogue</p>
              <h2 id="why-vianova-title" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                A dependable partner for better decisions
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Selecting equipment is easier when you can talk through the application, compare options and get a clear quotation. ViaNova brings product sourcing and engineering context together for teams across India.
              </p>
              <Button asChild size="lg" className="mt-7 min-h-12 bg-primary px-6 text-base font-semibold text-primary-foreground transition-all hover:bg-primary-light">
                <Link to="/about">
                  Get to know ViaNova <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <article
                  key={reason.title}
                  className={index === 0 ? "rounded-2xl border border-border/70 bg-card p-6 shadow-sm sm:col-span-2" : "rounded-2xl border border-border/70 bg-card p-6 shadow-sm"}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20" aria-label="New product launches">
          <NewLaunches />
        </section>

        <section className="bg-muted/40 py-16 sm:py-20" aria-labelledby="authorized-brands-title">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Genuine products. Trusted manufacturers.</p>
            <h2 id="authorized-brands-title" className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Authorized partners and brands we supply
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              ViaNova is an authorized distributor in India for MICSIG, RIGOL, SIGLENT, TESTO, Teledyne FLIR, UNI-T, Hantek and VAISALA. Explore our wider portfolio of global test, measurement and engineering brands.
            </p>
            <ul className="mx-auto mt-9 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5" aria-label="ViaNova authorized and represented brands">
              {BRANDS.map((brand) => (
                <li key={brand.name} className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-border/70 bg-card px-4 py-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className={`flex h-14 w-full items-center justify-center rounded-md ${brand.logoBackground === "dark" ? "bg-slate-800" : ""}`}>
                    <img src={brand.logo} alt={`${brand.name} logo`} loading="lazy" decoding="async" className="max-h-12 max-w-[90%] object-contain" />
                  </div>
                  <span className="mt-3 text-center text-sm font-bold text-foreground">{brand.name}</span>
                  <span className={`mt-1 text-center text-[10px] font-semibold uppercase tracking-wide ${brand.authorized ? "text-secondary" : "text-muted-foreground"}`}>
                    {brand.authorized ? "Authorized distributor" : "Brand portfolio"}
                  </span>
                </li>
              ))}
            </ul>
            <Link to="/brands" className="mt-7 inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-secondary">
              Explore our brands <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary-dark py-20 text-primary-foreground sm:py-24" aria-labelledby="industries-title">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,hsl(var(--secondary)/0.35),transparent_45%)]" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Built for your sector</p>
              <h2 id="industries-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Industry solutions with the details in mind
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
                From manufacturing and automotive to research and education, explore equipment and solutions for the environments you work in.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {INDUSTRIES.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Link
                    key={industry.slug}
                    to={"/industries/" + industry.slug}
                    className="group rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-4 text-center transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-primary-foreground/10 sm:p-6"
                  >
                    <Icon className="mx-auto h-8 w-8 text-accent transition-transform group-hover:scale-110 sm:h-9 sm:w-9" />
                    <h3 className="mt-3 text-sm font-semibold text-primary-foreground sm:text-base">{industry.name}</h3>
                  </Link>
                );
              })}
            </div>
            <div className="mt-10 text-center">
              <Link to="/industries/manufacturing" className="inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-primary-foreground">
                Explore sector solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-muted/40 py-20 sm:py-24" aria-labelledby="insights-title">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">Knowledge for engineers</p>
                <h2 id="insights-title" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                  Practical insights for better testing
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Explore guides on oscilloscopes, power electronics, thermal imaging and industrial measurement.
                </p>
              </div>
              <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-secondary">
                Visit the ViaNova blog <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={"/blog/" + post.slug}
                  className="group flex min-h-64 flex-col rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant sm:p-7"
                >
                  <span className="inline-flex items-center gap-2 self-start rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-secondary">
                    <BookOpen className="h-3.5 w-3.5" /> {post.category}
                  </span>
                  <h3 className="mt-5 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-secondary">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-20 sm:py-24" aria-labelledby="faq-title">
          <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">A few useful answers</p>
              <h2 id="faq-title" className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Need help with a specific make, model or application? Send us the details and our team will get back to you.
              </p>
              <Link to="/inquiry" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary">
                Contact ViaNova <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="divide-y divide-border border-y border-border">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-foreground marker:hidden sm:text-lg">
                    {faq.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-secondary transition-transform group-open:rotate-45">
                      <span className="text-xl leading-none">+</span>
                    </span>
                  </summary>
                  <p className="max-w-3xl pr-12 pt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:pb-24">
          <div className="container relative mx-auto overflow-hidden rounded-[2rem] bg-gradient-hero px-6 py-12 text-center text-primary-foreground shadow-elegant sm:px-12 sm:py-16 lg:py-20">
            <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-12 h-64 w-64 rounded-full bg-secondary-light/30 blur-3xl" />
            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">Start with your requirement</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Let’s find the right solution for your team.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                Tell us your application, specifications or preferred models. ViaNova will help you take the next step with a clear, tailored quotation.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 min-h-12 bg-accent px-7 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent-light hover:shadow-xl"
              >
                <Link to="/inquiry">
                  Request a tailored quotation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
