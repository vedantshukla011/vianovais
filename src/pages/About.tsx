import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Target, Leaf, ArrowRight, Linkedin } from "lucide-react";
import vedantPhoto from "@/assets/director-vedant-shukla.jpg";
import vinodPhoto from "@/assets/director-vinod-shukla.jpg";

const About = () => {
  const values = [
    { icon: Award, title: "Quality Excellence", description: "Committed to the highest standards of manufacturing and product quality, certified to international specifications." },
    { icon: Users, title: "Customer Focus", description: "Building long-term partnerships through responsive service and customized solutions for unique industrial challenges." },
    { icon: Target, title: "Innovation", description: "Continuously advancing our technologies to deliver more efficient, reliable, and safer industrial systems." },
    { icon: Leaf, title: "Sustainability", description: "Reducing carbon footprint through energy-efficient solutions that optimize process efficiency and minimize waste." },
  ];

  const stats = [
    { value: "25+", label: "Years Experience", color: "text-primary" },
    { value: "15+", label: "Industries Served", color: "text-secondary" },
    { value: "100+", label: "Product Range", color: "text-accent" },
    { value: "24/7", label: "Support Available", color: "text-primary-light" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>About ViaNova | Industrial Equipment Sourcing from India</title>
        <meta name="description" content="Learn about ViaNova Industrial Solutions, an India-based source for test, measurement and engineering equipment, with export inquiries reviewed by destination." />
        <link rel="canonical" href="https://vianovaindustrial.solutions/about" />
        <meta property="og:title" content="About ViaNova Industrial Solutions" />
        <meta property="og:description" content="India-based engineering and measurement equipment sourcing for domestic projects and destination-specific export inquiries." />
        <meta property="og:url" content="https://vianovaindustrial.solutions/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 text-center relative">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            About ViaNova
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">About ViaNova Industrial Solutions</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            ViaNova is based in India and works with UVTS (UV Test Solutions) and DASKMEI to source engineering, test and measurement products for domestic requirements and review international export inquiries.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-8 text-foreground">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              ViaNova Industrial Solutions works in collaboration with UVTS (UV Test Solutions) and DASKMEI, combining over 25 years of expertise in precision measuring instruments, industrial valve manufacturing, and innovative engineering solutions. We bring together world-class engineering, manufacturing excellence, and customer-centric service from our partner organizations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              UVTS specializes in advanced testing and measurement solutions, while DASKMEI focuses on industrial engineering products. Together, they empower ViaNova to offer a comprehensive portfolio spanning flow control systems, precision instruments, and industrial components.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our products serve industries including oil refineries, chemical and petrochemical plants, pharmaceuticals, food and beverage, paper, textiles, and tire manufacturing. For overseas requirements, we review each product and destination before confirming export eligibility and shipment terms.
            </p>
            <Link to="/exports" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary">Explore international export inquiries <ArrowRight className="h-4 w-4" /></Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card">
                <CardContent className="pt-8 pb-6">
                  <p className={`text-5xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Leadership</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Meet Our Directors</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vinod Shukla */}
            <Card className="border-none shadow-elegant bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col items-center gap-6 p-8">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-glow flex-shrink-0">
                    <img 
                      src={vinodPhoto} 
                      alt="Vinod Shukla - Director" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Vinod Shukla</h3>
                    <p className="text-secondary font-semibold text-lg mb-4">Director & Owner, UV Test Solutions</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      A seasoned Electrical Engineer with over 25 years of experience in the industrial sector, Vinod is the visionary behind UV Test Solutions. His deep industry knowledge and leadership have been instrumental in building a trusted name in industrial testing and measurement solutions.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/vinodshuklakeithley" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vedant Shukla */}
            <Card className="border-none shadow-elegant bg-card overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col items-center gap-6 p-8">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-glow flex-shrink-0">
                    <img 
                      src={vedantPhoto} 
                      alt="Vedant Shukla - Director" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Vedant Shukla</h3>
                    <p className="text-secondary font-semibold text-lg mb-4">Director</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      A passionate Mechanical Engineer and alumnus of IIT Dharwad, Vedant brings innovative thinking and technical expertise to lead ViaNova Industrial Solutions. His vision drives our commitment to delivering high-quality engineering products and exceptional service.
                    </p>
                    <a 
                      href="https://www.linkedin.com/in/vedant-shukla-97b60a18b" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
                    >
                      <Linkedin className="w-5 h-5" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-none shadow-elegant bg-card group overflow-hidden"
              >
                <CardContent className="pt-8 pb-8 text-center relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="bg-gradient-to-br from-secondary to-secondary-light w-18 h-18 w-[72px] h-[72px] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-glow">
                      <value.icon className="w-9 h-9 text-secondary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-primary-foreground border-none shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl" />
            <CardContent className="p-14 text-center relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Partner With Us</h2>
              <p className="text-lg mb-10 text-primary-foreground/80 max-w-2xl mx-auto">
                Let's work together to enhance safety, efficiency, and sustainability in your industrial operations
              </p>
              <Link to="/inquiry">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Start a Conversation
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

export default About;
