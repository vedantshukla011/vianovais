import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import valveImage from "@/assets/product-valve.jpg";
import steamImage from "@/assets/product-steam.jpg";
import gasketsImage from "@/assets/product-gaskets.jpg";
import ballImage from "@/assets/product-ball.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Piston & Bellow Seal Valves",
      image: valveImage,
      description: "High-performance valves designed for critical control applications",
      features: [
        "Precision engineered for demanding conditions",
        "Superior sealing with bellow technology",
        "Compliant with international standards",
        "Available in various materials and sizes",
      ],
    },
    {
      title: "Steam Traps & Accessories",
      image: steamImage,
      description: "Energy-efficient steam management and condensate removal systems",
      features: [
        "Optimized for energy savings",
        "Reliable condensate removal",
        "Extended service life",
        "Comprehensive accessory range",
      ],
    },
    {
      title: "Jointing Sheets & Gaskets",
      image: gasketsImage,
      description: "Premium sealing solutions for diverse industrial applications",
      features: [
        "High-quality compressed fiber materials",
        "Temperature and chemical resistant",
        "Custom sizes and specifications",
        "Suitable for various pressure ratings",
      ],
    },
    {
      title: "Safety & Ball Valves",
      image: ballImage,
      description: "Robust valve solutions for process control and safety",
      features: [
        "Cast steel and forged construction",
        "Gate, globe, check, and ball valve options",
        "Designed for corrosive environments",
        "ASME, API, and BS certified",
      ],
    },
  ];

  const additionalProducts = [
    {
      title: "Control Valves",
      description: "Precision control for process optimization",
    },
    {
      title: "Cold Welding Compounds",
      description: "Advanced repair and sealing solutions",
    },
    {
      title: "Diaphragm Valves",
      description: "Contamination-free flow control",
    },
    {
      title: "Butterfly Valves",
      description: "Space-efficient flow regulation",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comprehensive range of industrial valves, steam systems, and flow control solutions
          </p>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {productCategories.map((product, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-3xl font-bold text-primary">{product.title}</h2>
                  <p className="text-lg text-muted-foreground">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/inquiry">
                    <Button className="bg-accent hover:bg-accent-light mt-4">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalProducts.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{product.title}</CardTitle>
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg mb-6 text-primary-foreground/90">
                We offer custom solutions tailored to your specific industrial requirements
              </p>
              <Link to="/inquiry">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                  Contact Our Team
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
