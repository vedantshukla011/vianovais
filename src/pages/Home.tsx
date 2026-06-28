import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Factory, Shield, Zap, Sparkles, CarFront, FlaskConical, GraduationCap, Pill, Stethoscope, ClipboardCheck, Bot, ShoppingBag, Tag, Search, Calendar, Clock, BookOpen } from "lucide-react";

import { Link } from "react-router-dom";
import { BLOG_POSTS } from "@/data/blogPosts";
import ClientsCarousel from "@/components/ClientsCarousel";
import HeroCarousel from "@/components/HeroCarousel";

import NewLaunches from "@/components/NewLaunches";
import valveImage from "@/assets/product-valve.jpg";
import steamImage from "@/assets/product-steam.jpg";
import gasketsImage from "@/assets/product-gaskets.jpg";
import ballImage from "@/assets/product-ball.jpg";
import mechanicalToolsImage from "@/assets/product-mechanical-tools.jpg";
import faultDevicesImage from "@/assets/product-fault-devices.jpg";
import measuringInstrumentsImage from "@/assets/product-measuring-instruments.jpg";
import esdLabImage from "@/assets/product-esd-lab.jpg";
import dimensionalToolsImage from "@/assets/product-dimensional-tools.jpg";
import scientificLabImage from "@/assets/product-scientific-lab.jpg";
import analyticalBalancesImage from "@/assets/product-analytical-balances.jpg";
import interactiveDisplaysImage from "@/assets/product-interactive-displays.jpg";
import environmentalSensingImage from "@/assets/product-environmental-sensing.jpg";
import industrialAutomationImage from "@/assets/product-industrial-automation.jpg";
import industrialManagementImage from "@/assets/product-industrial-management.jpg";

const Home = () => {
  const products = [
    { title: "Measuring Instruments", description: "Oscilloscopes, multimeters, power & spectrum analyzers, LCR meters and calibration instruments", image: measuringInstrumentsImage },
    { title: "Industrial Automation", description: "RFID, PLC, SCADA, IoT sensors & smart automation solutions", image: industrialAutomationImage },
    { title: "ESD Lab Solutions", description: "Customized ESD-safe tables, chairs, racks & lab furniture for your needs", image: esdLabImage },
    { title: "Dimensional Measurement Tools", description: "Vernier callipers, micrometers, laser distance meters & more", image: dimensionalToolsImage },
    { title: "Scientific Laboratory Equipments", description: "Beakers, flasks, centrifuges, microscopes & complete lab setups", image: scientificLabImage },
    { title: "Analytical Balances", description: "High-precision digital weighing scales for laboratory & industrial use", image: analyticalBalancesImage },
    { title: "Interactive Displays", description: "GenAI-powered interactive flat panels (65\"/75\"/86\") for smart classrooms & boardrooms", image: interactiveDisplaysImage },
    { title: "Control & Safety Valves", description: "High-precision valves for critical industrial applications", image: valveImage },
    { title: "Steam Traps & Systems", description: "Energy-efficient steam management solutions", image: steamImage },
    { title: "Gaskets & Jointing", description: "Premium sealing solutions for all industries", image: gasketsImage },
    { title: "Ball & Specialty Valves", description: "Durable valves for demanding environments", image: ballImage },
    { title: "Mechanical Tools", description: "Professional-grade tools for industrial maintenance", image: mechanicalToolsImage },
    { title: "Environmental Sensing Solutions", description: "Temperature, humidity, air quality & gas detection instruments", image: environmentalSensingImage },
    { title: "Fault Recognition Devices", description: "Advanced diagnostic and monitoring equipment", image: faultDevicesImage },
    { title: "Industrial Management Solutions", description: "Energy monitoring, asset management & workflow optimization systems", image: industrialManagementImage },
  ];

  const features = [
    { icon: Shield, title: "Quality Assured", description: "ISO 9001 certified with compliance to ASTM, ASME, API, and BS international standards" },
    { icon: Factory, title: "15+ Industries", description: "Serving chemical, petrochemical, pharmaceutical, and more" },
    { icon: Zap, title: "25+ Years", description: "Decades of expertise in industrial engineering solutions" },
  ];

  const industries = [
    { name: "Manufacturing", icon: Factory },
    { name: "Automobile", icon: CarFront },
    { name: "R&D", icon: FlaskConical },
    { name: "Education", icon: GraduationCap },
    { name: "Pharmaceuticals", icon: Pill },
    { name: "Medical", icon: Stethoscope },
    { name: "QA", icon: ClipboardCheck },
    { name: "Automation", icon: Bot },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Test & Measurement Instruments & Interactive Displays India | ViaNova</title>
        <meta name="description" content="Buy test & measurement instruments, oscilloscopes, multimeters, ESD lab setups & GenAI interactive flat panel displays online in India. Best price, GST invoice, pan-India delivery." />
        <meta name="keywords" content="test and measurement instruments India, buy measuring instruments online, oscilloscope supplier India, digital multimeter dealer, power analyzer supplier, spectrum analyzer distributor, LCR meter supplier, ESD lab setup, EV test bench India, calibration instruments supplier, interactive flat panel India, interactive display for classroom, GenAI interactive panel, 86 inch interactive panel price, smart classroom solutions, digital whiteboard supplier, EyeRIS A10, NEP 2020 smart classroom, interactive panel for boardroom, IFPD supplier India" />
        <link rel="canonical" href="https://vianovaindustrial.solutions/" />
        <meta property="og:title" content="Test & Measurement Instruments & Interactive Displays India | ViaNova" />
        <meta property="og:description" content="One-stop supplier of test & measurement instruments, oscilloscopes, multimeters, ESD labs and GenAI interactive flat panel displays across India." />
        <meta property="og:url" content="https://vianovaindustrial.solutions/" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <HeroCarousel />



      {/* Features Section */}
      <section className="py-24 bg-background relative" aria-labelledby="why-choose-vianova">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <h2 id="why-choose-vianova" className="sr-only">Why choose ViaNova Industrial Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-none shadow-elegant hover:shadow-hover transition-all duration-500 hover:-translate-y-2 bg-card group overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mb-5 shadow-glow">
                      <feature.icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Launches */}
      <NewLaunches />

      {/* Products Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-foreground">Test, Measurement & Interactive Display Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From oscilloscopes, multimeters and ESD lab setups to GenAI interactive flat panels — sourced, integrated and supported across India.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-elegant hover:shadow-hover transition-all duration-500 group hover:-translate-y-2 bg-card"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <Link to={`/inquiry?product=${encodeURIComponent(product.title)}`}>
                      <Button size="sm" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Request Quote
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-secondary transition-colors">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/products">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold transition-all duration-300">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Buy Online CTA */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative">
          <Card className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground border-none shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            <CardContent className="p-10 md:p-14 relative">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-5">
                    <ShoppingBag className="w-4 h-4 text-accent" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Online Store</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                    Explore 500+ Products with Live Pricing
                  </h2>
                  <p className="text-base md:text-lg text-primary-foreground/85 mb-7">
                    Browse our complete catalog of measuring instruments, lab equipment, and industrial tools online.
                    Build your cart, view instant totals, and request a personalised quote in one click.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/buy-online">
                      <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-7 py-6 text-base shadow-lg">
                        Shop Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to="/buy-online">
                      <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-7 py-6 text-base">
                        Browse Catalog
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Search, title: "Smart Search", desc: "Find products by name or category instantly" },
                    { icon: Tag, title: "Listed Prices", desc: "Transparent pricing on every product" },
                    { icon: ShoppingBag, title: "Cart & Total", desc: "Auto-calculated subtotal with 18% GST" },
                    { icon: Sparkles, title: "Best Quote", desc: "Reach out for negotiated bulk pricing" },
                  ].map((f, i) => (
                    <div key={i} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4">
                      <f.icon className="w-6 h-6 text-accent mb-2" />
                      <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                      <p className="text-xs text-primary-foreground/75">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Clients Carousel */}
      <ClientsCarousel />

      {/* Industries Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-14">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Sectors We Serve</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5">Industries We Serve</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Trusted by leading companies across diverse industrial sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Link
                key={index}
                to={`/industries/${industry.name.toLowerCase().replace("&", "").replace(/\s+/g, "")}`}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 text-center hover:bg-primary-foreground/20 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <industry.icon className="w-10 h-10 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
                <p className="font-semibold">{industry.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="py-24 bg-muted/50" aria-labelledby="latest-blog">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm uppercase tracking-wider">
              <BookOpen className="w-4 h-4" /> Insights & Articles
            </span>
            <h2 id="latest-blog" className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-foreground">
              Latest from the ViaNova Blog
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical guides on precision measurement, power electronics testing and industrial automation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <span className="inline-block self-start px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold">
                View All Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-secondary via-secondary to-secondary-light text-secondary-foreground border-none shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <CardContent className="p-14 text-center relative">
              <h2 className="text-3xl md:text-5xl font-bold mb-5">
                Ready to Enhance Your Industrial Operations?
              </h2>
              <p className="text-lg mb-10 text-secondary-foreground/90 max-w-2xl mx-auto">
                Partner with ViaNova Industrial Solutions for reliable, efficient, and sustainable industrial solutions
              </p>
              <Link to="/inquiry">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
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
