import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Factory, Flame, Pill, Droplets, Leaf, FileText, Shirt, Zap, Car, Shield } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Flame,
      name: "Oil & Gas",
      description: "Critical valve solutions for upstream, midstream, and downstream operations. Our products meet stringent safety standards for oil refineries and gas processing facilities.",
    },
    {
      icon: Factory,
      name: "Chemical Processing",
      description: "Corrosion-resistant valves and sealing solutions for handling aggressive chemicals. Designed for continuous operation in demanding chemical environments.",
    },
    {
      icon: Pill,
      name: "Pharmaceuticals",
      description: "Hygienic and sterile flow control solutions meeting cGMP standards. Precision-engineered for pharmaceutical manufacturing and processing.",
    },
    {
      icon: Zap,
      name: "Power Generation",
      description: "High-temperature, high-pressure valves for fossil fuel and nuclear power plants. Reliable performance in critical energy infrastructure.",
    },
    {
      icon: Droplets,
      name: "Petrochemicals",
      description: "Specialized valves for petrochemical refining and processing. Built to handle extreme conditions and hazardous materials safely.",
    },
    {
      icon: Leaf,
      name: "Food & Beverage",
      description: "Sanitary valves and steam traps designed for food processing. FDA-compliant materials ensure product safety and quality.",
    },
    {
      icon: FileText,
      name: "Paper & Pulp",
      description: "Durable solutions for pulp digestion, bleaching, and paper machine operations. Resistant to harsh chemical and moisture conditions.",
    },
    {
      icon: Shirt,
      name: "Textiles",
      description: "Steam systems and control valves for dyeing, finishing, and textile processing. Optimized for efficiency and energy savings.",
    },
    {
      icon: Car,
      name: "Automobile",
      description: "Precision components and spare parts for automotive manufacturing. Supporting assembly lines, paint shops, and quality control systems.",
    },
    {
      icon: Shield,
      name: "Defence",
      description: "High-reliability components meeting military specifications. Trusted solutions for defence manufacturing and critical infrastructure applications.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Delivering specialized flow control solutions across diverse industrial sectors
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="bg-secondary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Industry Standards & Certifications</h2>
            <p className="text-lg text-muted-foreground mb-8">
              All our products are designed, manufactured, and tested to comply with international standards
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["ASTM", "ASME", "API", "BS"].map((standard, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-2xl font-bold text-primary">{standard}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8">
                <p className="text-5xl font-bold text-primary mb-2">25+</p>
                <p className="text-lg text-muted-foreground">Years of Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8">
                <p className="text-5xl font-bold text-secondary mb-2">15+</p>
                <p className="text-lg text-muted-foreground">Industries Served</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8">
                <p className="text-5xl font-bold text-accent mb-2">100%</p>
                <p className="text-lg text-muted-foreground">Quality Assured</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Let's Discuss Your Industry-Specific Requirements
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Our experts are ready to provide customized solutions for your unique challenges
          </p>
          <Link to="/inquiry">
            <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
              Request Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries;
