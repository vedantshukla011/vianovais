import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Factory, Flame, Pill, Droplets, Leaf, FileText, Shirt, Zap, Car, Shield, ArrowRight } from "lucide-react";

const Industries = () => {
  const industries = [
    { icon: Flame, name: "Oil & Gas", description: "Critical valve solutions for upstream, midstream, and downstream operations. Our products meet stringent safety standards for oil refineries and gas processing facilities." },
    { icon: Factory, name: "Chemical Processing", description: "Corrosion-resistant valves and sealing solutions for handling aggressive chemicals. Designed for continuous operation in demanding chemical environments." },
    { icon: Pill, name: "Pharmaceuticals", description: "Hygienic and sterile industrial solutions meeting cGMP standards. Precision-engineered for pharmaceutical manufacturing and processing." },
    { icon: Zap, name: "Power Generation", description: "High-temperature, high-pressure valves for fossil fuel and nuclear power plants. Reliable performance in critical energy infrastructure." },
    { icon: Droplets, name: "Petrochemicals", description: "Specialized valves for petrochemical refining and processing. Built to handle extreme conditions and hazardous materials safely." },
    { icon: Leaf, name: "Food & Beverage", description: "Sanitary valves and steam traps designed for food processing. FDA-compliant materials ensure product safety and quality." },
    { icon: FileText, name: "Paper & Pulp", description: "Durable solutions for pulp digestion, bleaching, and paper machine operations. Resistant to harsh chemical and moisture conditions." },
    { icon: Shirt, name: "Textiles", description: "Steam systems and control valves for dyeing, finishing, and textile processing. Optimized for efficiency and energy savings." },
    { icon: Car, name: "Automobile", description: "Precision components and spare parts for automotive manufacturing. Supporting assembly lines, paint shops, and quality control systems." },
    { icon: Shield, name: "Defence", description: "High-reliability components meeting military specifications. Trusted solutions for defence manufacturing and critical infrastructure applications." },
  ];

  const standards = ["ASTM", "ASME", "API", "BS"];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-secondary via-secondary to-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 text-center relative">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Sectors We Serve
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Industries We Serve</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Delivering specialized industrial and measurement solutions across diverse sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-none shadow-elegant bg-card group overflow-hidden"
              >
                <CardContent className="pt-8 pb-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="bg-gradient-to-br from-secondary to-secondary-light w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-glow">
                      <industry.icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{industry.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Compliance</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-5 text-foreground">Industry Standards & Certifications</h2>
            <p className="text-lg text-muted-foreground mb-12">
              All our products are designed, manufactured, and tested to comply with international standards
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
                >
                  <p className="text-3xl font-bold text-primary group-hover:text-secondary transition-colors">{standard}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card">
              <CardContent className="pt-10 pb-8">
                <p className="text-6xl font-bold text-primary mb-3">25+</p>
                <p className="text-lg text-muted-foreground font-medium">Years of Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card">
              <CardContent className="pt-10 pb-8">
                <p className="text-6xl font-bold text-secondary mb-3">15+</p>
                <p className="text-lg text-muted-foreground font-medium">Industries Served</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card">
              <CardContent className="pt-10 pb-8">
                <p className="text-6xl font-bold text-accent mb-3">100%</p>
                <p className="text-lg text-muted-foreground font-medium">Quality Assured</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Let's Discuss Your Industry-Specific Requirements
          </h2>
          <p className="text-lg mb-10 text-primary-foreground/80 max-w-2xl mx-auto">
            Our experts are ready to provide customized solutions for your unique challenges
          </p>
          <Link to="/inquiry">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
