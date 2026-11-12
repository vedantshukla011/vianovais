import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Award, Headphones } from "lucide-react";
import { BRANDS as brands } from "@/data/brands";

const valueProps = [
  {
    icon: ShieldCheck,
    title: "Authorized Partnerships",
    description: "We supply genuine products from our authorized brand partners, with manufacturer-backed warranties subject to product terms.",
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


const BrandLogo = ({ name, initials, accentColor, logo, darkBackground }: { name: string; initials: string; accentColor: string; logo: string; darkBackground?: boolean }) => {
  const [index, setIndex] = useState(0);

  if (index > 0) {
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
    <div className={`w-20 h-20 rounded-2xl ${darkBackground ? "bg-slate-800" : "bg-card"} border border-border/60 flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300 overflow-hidden p-3`}>
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-h-14 max-w-full object-contain"
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setIndex(1)}
      />
    </div>
  );
};


const Brands = () => {
  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Authorized Test Equipment Brands in India | ViaNova</title>
        <meta name="description" content="ViaNova is an authorized distributor in India for MICSIG, RIGOL, SIGLENT, TESTO, Teledyne FLIR, UNI-T and Hantek. Explore genuine test and measurement equipment." />
        <link rel="canonical" href="https://vianovaindustrial.solutions/brands" />
        <meta property="og:title" content="Authorized Test Equipment Brands in India | ViaNova" />
        <meta property="og:description" content="ViaNova is an authorized distributor in India for MICSIG, RIGOL, SIGLENT, TESTO, Teledyne FLIR, UNI-T and Hantek. Explore genuine test and measurement equipment." />
        <meta property="og:url" content="https://vianovaindustrial.solutions/brands" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ViaNova Industrial Solutions",
            url: "https://vianovaindustrial.solutions/brands",
            description: "ViaNova Industrial Solutions is an authorized distributor in India for MICSIG, RIGOL, SIGLENT, TESTO, Teledyne FLIR, UNI-T and Hantek.",
            brand: brands.filter((b) => b.authorized).map((b) => ({
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
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Test &amp; Measurement Brands We Deal In</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            ViaNova Industrial Solutions is an authorized distributor in India for MICSIG, RIGOL, SIGLENT, TESTO, Teledyne FLIR, UNI-T and Hantek. We help businesses source genuine products with manufacturer-backed support.
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
                    initials={brand.initials}
                    accentColor={brand.accentColor}
                    logo={brand.logo}
                    darkBackground={brand.logoBackground === "dark"}
                  />
                  <h3 className="text-lg font-bold text-foreground mb-2">{brand.name}</h3>
                  <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full mb-4">
                    {brand.authorized ? "Authorized Distributor · " : ""}{brand.category}
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
