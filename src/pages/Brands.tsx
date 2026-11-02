import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Award, Headphones } from "lucide-react";
import flirLogo from "@/assets/flir-logo.png.asset.json";
import micsigLogo from "@/assets/micsig-logo.webp.asset.json";

interface Brand {
  name: string;
  initials: string;
  domain: string;
  description: string;
  category: string;
  accentColor: string;
  href?: string;
  logo?: string;
}

const brands: Brand[] = [
  {
    name: "Keysight Technologies",
    initials: "KT",
    domain: "keysight.com",
    description: "Premium electronic test & measurement solutions including oscilloscopes, network analyzers, and RF instruments for R&D and manufacturing.",
    category: "Test & Measurement",
    accentColor: "bg-primary/10 text-primary",
  },
  {
    name: "Keithley",
    initials: "KE",
    domain: "tek.com",
    description: "Precision DC instruments, source measure units (SMUs), and low-level measurement solutions for research and characterization.",
    category: "Precision Instruments",
    accentColor: "bg-secondary/10 text-secondary",
  },
  {
    name: "Tektronix",
    initials: "TX",
    domain: "tektronix.com",
    description: "Industry-leading oscilloscopes, probes, and test equipment trusted by engineers worldwide for signal analysis and debugging.",
    category: "Oscilloscopes",
    accentColor: "bg-accent/10 text-accent-foreground",
  },
  {
    name: "Fluke",
    initials: "FL",
    domain: "fluke.com",
    description: "Rugged industrial test & measurement tools including digital multimeters, thermal imagers, and calibration equipment.",
    category: "Industrial Tools",
    accentColor: "bg-primary/10 text-primary",
  },
  {
    name: "FLIR",
    initials: "FLIR",
    domain: "flir.com",
    description: "Measuring instruments and thermal imaging cameras for electrical inspections, mechanical condition monitoring and building diagnostics.",
    category: "Thermal Imaging",
    accentColor: "bg-secondary/10 text-secondary",
    href: "/brands/flir",
    logo: flirLogo.url,
  },
  {
    name: "Micsig",
    initials: "MS",
    domain: "micsig.com",
    description: "Authorized distributor of Micsig oscilloscope probes: differential, optical-fiber isolated, current and Rogowski probes with downloadable documentation.",
    category: "Oscilloscope Probes",
    accentColor: "bg-primary/10 text-primary",
    href: "/micsig-probes",
    logo: micsigLogo.url,
  },
  {
    name: "Testo",
    initials: "TE",
    domain: "testo.com",
    description: "Specialists in temperature, humidity, HVAC, and environmental measurement instruments for industrial and commercial applications.",
    category: "Environmental Testing",
    accentColor: "bg-secondary/10 text-secondary",
  },
  {
    name: "UNI-T",
    initials: "UT",
    domain: "uni-trend.com",
    description: "Cost-effective, reliable test & measurement instruments including multimeters, clamp meters, and oscilloscopes for professionals.",
    category: "Test & Measurement",
    accentColor: "bg-accent/10 text-accent-foreground",
    href: "/brands/uni-t",
  },
  {
    name: "National Instruments (NI)",
    initials: "NI",
    domain: "ni.com",
    description: "Automated test, data acquisition, and control systems that power research labs and production test floors globally.",
    category: "Automated Test",
    accentColor: "bg-primary/10 text-primary",
  },
  {
    name: "Weller",
    initials: "WE",
    domain: "weller-tools.com",
    description: "Professional soldering stations, desoldering tools, and accessories for electronics manufacturing and repair workflows.",
    category: "Soldering Solutions",
    accentColor: "bg-secondary/10 text-secondary",
  },
  {
    name: "Hantek",
    initials: "HA",
    domain: "hantek.com",
    description: "Affordable oscilloscopes, automotive diagnostic tools, and USB-based test instruments for education and field service.",
    category: "Oscilloscopes",
    accentColor: "bg-accent/10 text-accent-foreground",
  },
  {
    name: "Rigol",
    initials: "RI",
    domain: "rigol.com",
    description: "High-performance oscilloscopes, spectrum analyzers, signal generators, and programmable DC power supplies.",
    category: "Test & Measurement",
    accentColor: "bg-primary/10 text-primary",
  },
];

const valueProps = [
  {
    icon: ShieldCheck,
    title: "Authorized Partnerships",
    description: "We work with globally recognized test & measurement brands to supply genuine products with valid warranties.",
  },
  {
    icon: Award,
    title: "Expert Product Guidance",
    description: "Our team helps you choose the right instrument for your application, budget, and compliance requirements.",
  },
  {
    icon: Headphones,
    title: "Local Support & Service",
    description: "Get responsive pre-sales consultation, calibration assistance, and after-sales support across India.",
  },
];


const logoSources = (domain: string) => [
  `https://www.google.com/s2/favicons?domain=${domain}&sz=256`,
  `https://unavatar.io/${domain}?fallback=false`,
];

const BrandLogo = ({ name, domain, initials, accentColor, logo }: { name: string; domain: string; initials: string; accentColor: string; logo?: string }) => {
  const sources = logo ? [logo, ...logoSources(domain)] : logoSources(domain);
  const [index, setIndex] = useState(0);

  if (index >= sources.length) {
    return (
      <div
        className={`w-20 h-20 rounded-2xl ${accentColor} flex items-center justify-center text-2xl font-bold mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300`}
        aria-label={`${name} logo placeholder`}
        role="img"
      >
        {initials}
      </div>
    );
  }

  return (
    <div className="w-20 h-20 rounded-2xl bg-card border border-border/60 flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300 overflow-hidden p-3">
      <img
        key={sources[index]}
        src={sources[index]}
        alt={`${name} logo`}
        className="max-h-14 max-w-full object-contain"
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setIndex((i) => i + 1)}
        onLoad={(e) => {
          if (e.currentTarget.naturalWidth < 24) setIndex((i) => i + 1);
        }}
      />
    </div>
  );
};


const Brands = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Brands We Deal In | ViaNova Industrial Solutions</title>
        <meta name="description" content="Explore measuring instruments from ViaNova brand partners: Keysight, Keithley, Tektronix, Fluke, FLIR, Testo, UNI-T, NI, Weller, Hantek and Rigol." />
        <link rel="canonical" href="https://vianovaindustrial.solutions/brands" />
        <meta property="og:title" content="Brands We Deal In | ViaNova Industrial Solutions" />
        <meta property="og:description" content="Authorized distributor and solution partner for leading test & measurement brands in India." />
        <meta property="og:url" content="https://vianovaindustrial.solutions/brands" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ViaNova Industrial Solutions",
            url: "https://vianovaindustrial.solutions/brands",
            description: "Authorized partner for leading test and measurement instrument brands.",
            brand: brands.map((b) => ({
              "@type": "Brand",
              name: b.name,
              description: b.description,
            })),
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 text-center relative">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Authorized Channel Partner
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Brands We Deal In</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            ViaNova Industrial Solutions partners with the world&apos;s most trusted names in test, measurement, and precision instruments to deliver reliable solutions for your industry.
          </p>
        </div>
      </section>

      {/* Brand Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 text-foreground">Trusted Global Brands</h2>
            <p className="text-muted-foreground text-lg">
              We supply, support, and integrate instruments from these leading manufacturers for laboratories, production lines, and field applications across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brands.map((brand) => {
              const card = (
              <Card className="group border border-border/60 shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <BrandLogo
                    name={brand.name}
                    domain={brand.domain}
                    initials={brand.initials}
                    accentColor={brand.accentColor}
                    logo={brand.logo}
                  />
                  <h3 className="text-lg font-bold text-foreground mb-2">{brand.name}</h3>
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-4">
                    {brand.category}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {brand.description}
                  </p>
                  {brand.href && (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View Products <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </CardContent>
              </Card>
              );
              return brand.href ? (
                <Link key={brand.name} to={brand.href} aria-label={`View ${brand.name} products`} className="block h-full">
                  {card}
                </Link>
              ) : <div key={brand.name}>{card}</div>;
            })}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Source From ViaNova</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Genuine Products, Expert Guidance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valueProps.map((prop) => {
              const Icon = prop.icon;
              return (
                <Card key={prop.title} className="border-none shadow-elegant bg-card text-center">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{prop.title}</h3>
                    <p className="text-muted-foreground">{prop.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20" />
        <div className="container mx-auto px-4 relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Looking for a Specific Brand or Model?</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Tell us your application and budget. We&apos;ll recommend the right instrument and provide a competitive quote with warranty and support.
          </p>
          <Link to="/inquiry">
            <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Brands;
