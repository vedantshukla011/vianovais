import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Factory, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-industrial.jpg";
import valveImage from "@/assets/product-valve.jpg";
import steamImage from "@/assets/product-steam.jpg";
import gasketsImage from "@/assets/product-gaskets.jpg";
import ballImage from "@/assets/product-ball.jpg";
import mechanicalToolsImage from "@/assets/product-mechanical-tools.jpg";
import autoSparesImage from "@/assets/product-auto-spares.jpg";
import serviceKitsImage from "@/assets/product-service-kits.jpg";
import faultDevicesImage from "@/assets/product-fault-devices.jpg";
import measuringInstrumentsImage from "@/assets/product-measuring-instruments.jpg";

const Home = () => {
  const products = [
    {
      title: "Control & Safety Valves",
      description: "High-precision valves for critical industrial applications",
      image: valveImage,
    },
    {
      title: "Steam Traps & Systems",
      description: "Energy-efficient steam management solutions",
      image: steamImage,
    },
    {
      title: "Gaskets & Jointing",
      description: "Premium sealing solutions for all industries",
      image: gasketsImage,
    },
    {
      title: "Ball & Specialty Valves",
      description: "Durable valves for demanding environments",
      image: ballImage,
    },
    {
      title: "Mechanical Tools",
      description: "Professional-grade tools for industrial maintenance",
      image: mechanicalToolsImage,
    },
    {
      title: "Auto Spares",
      description: "Quality automotive spare parts and components",
      image: autoSparesImage,
    },
    {
      title: "Service Kits",
      description: "Complete maintenance and repair kits",
      image: serviceKitsImage,
    },
    {
      title: "Fault Recognition Devices",
      description: "Advanced diagnostic and monitoring equipment",
      image: faultDevicesImage,
    },
    {
      title: "Measuring Instruments",
      description: "Precision electronic instruments for testing and analysis",
      image: measuringInstrumentsImage,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "ISO 9001 certified with compliance to ASTM, ASME, API, and BS international standards",
    },
    {
      icon: Factory,
      title: "15+ Industries",
      description: "Serving chemical, petrochemical, pharmaceutical, and more",
    },
    {
      icon: Zap,
      title: "25+ Years",
      description: "Decades of expertise in industrial engineering solutions",
    },
  ];

  const industries = [
    "Oil & Gas",
    "Chemical Processing",
    "Pharmaceuticals",
    "Power Generation",
    "Food & Beverage",
    "Paper & Pulp",
    "Textiles",
    "Petrochemicals",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-secondary opacity-90" />
        <img
          src={heroImage}
          alt="Industrial valve manufacturing"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Engineering Excellence for Every Industry
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Your complete partner for all industrial engineering requirements — valves, steam systems, gaskets, and beyond
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inquiry">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/products">
              <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Product Range</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for industrial flow control, precision measurement, and engineering excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Trusted by leading companies across diverse industrial sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 text-center hover:bg-primary-foreground/20 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
                <p className="font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground border-none shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Enhance Your Industrial Operations?
              </h2>
              <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
                Partner with ViaNova Industrial Solutions for reliable, efficient, and sustainable industrial solutions
              </p>
              <Link to="/inquiry">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                  Get Your Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
