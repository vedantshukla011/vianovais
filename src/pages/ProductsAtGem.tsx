import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck, BadgeCheck, Store } from "lucide-react";
import { Link } from "react-router-dom";
import gemLogo from "@/assets/gem-logo.png";

const ProductsAtGem = () => {
  const gemBenefits = [
    "Transparent and efficient procurement process",
    "Competitive pricing for government buyers",
    "Wide range of industrial products available",
    "Compliance with government procurement norms",
    "Direct supply to government organizations",
    "Hassle-free order and delivery management",
  ];

  const availableCategories = [
    "Control & Safety Valves",
    "Steam Traps & Systems",
    "Gaskets & Jointing Solutions",
    "Measuring Instruments",
    "Industrial Automation Products",
    "Mechanical Tools & Equipment",
    "ESD Lab Solutions",
    "Environmental Sensing Instruments",
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Products on GeM | ViaNova Industrial Solutions</title>
        <meta
          name="description"
          content="ViaNova Industrial Solutions is a registered GeM seller supplying measuring instruments, valves, steam traps, gaskets and ESD lab solutions to government buyers across India."
        />
        <link rel="canonical" href="https://vianovaindustrial.solutions/products-at-gem" />
        <meta property="og:title" content="Products on GeM | ViaNova Industrial Solutions" />
        <meta
          property="og:description"
          content="Registered GeM seller for measuring instruments, industrial valves, steam traps and ESD lab solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vianovaindustrial.solutions/products-at-gem" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-6">
                <BadgeCheck className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Registered Supplier on GeM</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Test &amp; Measurement Instruments on
                <span className="text-accent"> GeM</span>
                <span className="block mt-2 text-2xl md:text-3xl font-semibold text-primary-foreground/90">
                  Government e-Marketplace Supplier — ViaNova Industrial Solutions
                </span>
              </h1>

              <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl">
                ViaNova Industrial Solutions is a proud registered supplier on the 
                <strong> Government e-Marketplace (GeM)</strong> — India's official online procurement platform for government buyers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Visit GeM Portal
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <Link to="/inquiry">
                  <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg transition-all duration-300">
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
                <img
                  src={gemLogo}
                  alt="Government e-Marketplace (GeM) Logo"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GeM Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About GeM</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-foreground">
              What is Government e-Marketplace?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              GeM (Government e-Marketplace) is a one-stop National Public Procurement Portal established by the 
              Government of India to facilitate online procurement of common-use goods and services required by various 
              Government Departments, Organisations, and PSUs. It aims to enhance transparency, efficiency, and speed 
              in public procurement while ensuring fair competition among sellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-elegant hover:shadow-hover transition-all duration-500 hover:-translate-y-2 bg-card group overflow-hidden">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mb-5 mx-auto shadow-glow">
                  <ShieldCheck className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Verified Supplier</h3>
                <p className="text-muted-foreground">We are a verified and registered supplier on the GeM portal, meeting all government compliance standards.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-elegant hover:shadow-hover transition-all duration-500 hover:-translate-y-2 bg-card group overflow-hidden">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mb-5 mx-auto shadow-glow">
                  <Store className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Wide Product Range</h3>
                <p className="text-muted-foreground">Our industrial products are listed across multiple categories on GeM for easy government procurement.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-elegant hover:shadow-hover transition-all duration-500 hover:-translate-y-2 bg-card group overflow-hidden">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mb-5 mx-auto shadow-glow">
                  <BadgeCheck className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Quality Assured</h3>
                <p className="text-muted-foreground">All products meet stringent quality and compliance requirements set by government procurement standards.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why GeM</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-foreground">Benefits of Buying Through GeM</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {gemBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-card rounded-xl p-5 shadow-elegant hover:shadow-hover transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                <p className="font-medium text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Offerings</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-foreground">Products Available on GeM</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our product categories available for government procurement through GeM
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {availableCategories.map((category, index) => (
              <Card
                key={index}
                className="border-none shadow-elegant hover:shadow-hover transition-all duration-500 hover:-translate-y-1 bg-card group"
              >
                <CardContent className="pt-6 pb-6 text-center">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-foreground">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-secondary via-secondary to-secondary-light text-secondary-foreground border-none shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <CardContent className="p-14 text-center relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                Looking for GeM Procurement?
              </h2>
              <p className="text-lg mb-10 text-secondary-foreground/90 max-w-2xl mx-auto">
                Contact us for your government procurement needs. We offer competitive pricing and quality products through the GeM portal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/inquiry">
                  <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Your Custom Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="bg-secondary-foreground/10 border-2 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary px-10 py-6 text-lg transition-all duration-300">
                    Visit GeM Portal
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProductsAtGem;
