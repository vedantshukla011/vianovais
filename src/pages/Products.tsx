import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import valveImage from "@/assets/product-valve.jpg";
import steamImage from "@/assets/product-steam.jpg";
import gasketsImage from "@/assets/product-gaskets.jpg";
import ballImage from "@/assets/product-ball.jpg";
import mechanicalToolsImage from "@/assets/product-mechanical-tools.jpg";
import autoSparesImage from "@/assets/product-auto-spares.jpg";
import serviceKitsImage from "@/assets/product-service-kits.jpg";
import faultDevicesImage from "@/assets/product-fault-devices.jpg";
import measuringInstrumentsImage from "@/assets/product-measuring-instruments.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Piston & Bellow Seal Valves",
      image: valveImage,
      description: "High-performance valves designed for critical control applications",
      features: ["Precision engineered for demanding conditions", "Superior sealing with bellow technology", "Compliant with international standards", "Available in various materials and sizes"],
    },
    {
      title: "Steam Traps & Accessories",
      image: steamImage,
      description: "Energy-efficient steam management and condensate removal systems",
      features: ["Optimized for energy savings", "Reliable condensate removal", "Extended service life", "Comprehensive accessory range"],
    },
    {
      title: "Jointing Sheets & Gaskets",
      image: gasketsImage,
      description: "Premium sealing solutions for diverse industrial applications",
      features: ["High-quality compressed fiber materials", "Temperature and chemical resistant", "Custom sizes and specifications", "Suitable for various pressure ratings"],
    },
    {
      title: "Safety & Ball Valves",
      image: ballImage,
      description: "Robust valve solutions for process control and safety",
      features: ["Cast steel and forged construction", "Gate, globe, check, and ball valve options", "Designed for corrosive environments", "ASME, API, and BS certified"],
    },
    {
      title: "Mechanical Tools",
      image: mechanicalToolsImage,
      description: "Professional-grade tools for industrial maintenance and repair",
      features: ["High-quality precision instruments", "Durable construction for heavy-duty use", "Complete tool sets available", "Suitable for various industrial applications"],
    },
    {
      title: "Auto Spares",
      image: autoSparesImage,
      description: "Quality automotive spare parts and components for all vehicles",
      features: ["OEM and aftermarket options", "Engine and transmission parts", "Bearings, filters, and seals", "Compatible with major vehicle brands"],
    },
    {
      title: "Service Kits",
      image: serviceKitsImage,
      description: "Complete maintenance and repair kits for industrial equipment",
      features: ["All-in-one maintenance solutions", "O-rings, seals, and gaskets included", "Organized carrying cases", "Equipment-specific configurations"],
    },
    {
      title: "Fault Recognition Devices",
      image: faultDevicesImage,
      description: "Advanced diagnostic and monitoring equipment for predictive maintenance",
      features: ["Digital multimeters and analyzers", "Vibration and thermal sensors", "Real-time monitoring capabilities", "Early fault detection technology"],
    },
    {
      title: "Measuring Instruments",
      image: measuringInstrumentsImage,
      description: "Precision electronic measuring instruments for testing, measurement, and analysis applications",
      features: ["Oscilloscopes for waveform analysis", "Professional-grade multimeters", "Signal generators and power supplies", "Spectrum and logic analyzers"],
      subCategories: ["Oscilloscopes", "Multimeters", "Signal Generators", "Temperature Sensors", "Power Supplies", "Logic Analyzers", "Spectrum Analyzers"],
    },
  ];

  const additionalProducts = [
    { title: "Control Valves", description: "Precision control for process optimization" },
    { title: "Cold Welding Compounds", description: "Advanced repair and sealing solutions" },
    { title: "Diaphragm Valves", description: "Contamination-free flow control" },
    { title: "Butterfly Valves", description: "Space-efficient flow regulation" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-secondary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 text-center relative">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Our Products</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Comprehensive range of industrial valves, steam systems, measuring instruments, and engineering solutions
          </p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {productCategories.map((product, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-elegant">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Product Category</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{product.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{product.description}</p>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {product.subCategories && (
                    <div className="pt-4">
                      <h4 className="font-semibold text-foreground mb-3">Sub Categories:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.subCategories.map((sub, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium hover:bg-secondary/20 transition-colors"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link to="/inquiry">
                    <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold mt-4 px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      Request Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">More Options</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Additional Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-hover transition-all duration-500 hover:-translate-y-2 border-none shadow-elegant bg-card group"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-foreground group-hover:text-secondary transition-colors">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-primary-foreground border-none shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/15 rounded-full blur-3xl" />
            <CardContent className="p-14 text-center relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg mb-10 text-primary-foreground/80 max-w-2xl mx-auto">
                We offer custom solutions tailored to your specific industrial requirements
              </p>
              <Link to="/inquiry">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Our Team
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

export default Products;
