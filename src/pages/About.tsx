import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Leaf } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to the highest standards of manufacturing and product quality, certified to international specifications.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building long-term partnerships through responsive service and customized solutions for unique industrial challenges.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously advancing our technologies to deliver more efficient, reliable, and safer industrial systems.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Reducing carbon footprint through energy-efficient solutions that optimize process efficiency and minimize waste.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-primary-light to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ViaNova Industrial Solutions</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            A UV TEST SOLUTIONS subsidiary committed to delivering high-quality engineering products for industrial applications
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              ViaNova Industrial Solutions combines over 25 years of expertise in industrial valve manufacturing with innovative engineering solutions. As a subsidiary of UV TEST SOLUTIONS, we bring together world-class engineering, manufacturing excellence, and customer-centric service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our products serve diverse industries including oil refineries, chemical and petrochemical plants, pharmaceuticals, food and beverage, paper, textiles, and tire manufacturing. We are committed to providing solutions that enhance safety, efficiency, and sustainability in industrial operations across India.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8">
                <p className="text-4xl font-bold text-primary mb-2">25+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8">
                <p className="text-4xl font-bold text-secondary mb-2">15+</p>
                <p className="text-sm text-muted-foreground">Industries Served</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8">
                <p className="text-4xl font-bold text-accent mb-2">100+</p>
                <p className="text-sm text-muted-foreground">Product Range</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-8">
                <p className="text-4xl font-bold text-primary-light mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-none shadow-lg"
              >
                <CardContent className="pt-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground border-none shadow-2xl">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
              <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
                Let's work together to enhance safety, efficiency, and sustainability in your industrial operations
              </p>
              <Link to="/inquiry">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                  Start a Conversation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
