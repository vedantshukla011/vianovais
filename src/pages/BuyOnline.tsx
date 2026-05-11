import { Helmet } from "react-helmet-async";
import { ExternalLink, ShoppingBag, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MARKETPLACES = [
  {
    name: "IndiaMART",
    description: "Browse and purchase our products via our verified IndiaMART seller storefront.",
    url: "https://www.indiamart.com/",
    color: "bg-[hsl(15,90%,55%)]/10 text-[hsl(15,90%,45%)]",
    icon: ShoppingBag,
  },
  {
    name: "Amazon Business",
    description: "Order industrial supplies through our Amazon Business listings with GST invoicing.",
    url: "https://www.amazon.in/",
    color: "bg-[hsl(35,100%,50%)]/10 text-[hsl(30,90%,45%)]",
    icon: ShoppingBag,
  },
  {
    name: "Government e-Marketplace (GeM)",
    description: "Procure listed products through GeM for government and PSU buyers.",
    url: "/products-at-gem",
    internal: true,
    color: "bg-secondary/10 text-secondary",
    icon: Building2,
  },
];

const BuyOnline = () => {
  return (
    <>
      <Helmet>
        <title>Buy Online | ViaNova Industrial Solutions</title>
        <meta
          name="description"
          content="Buy ViaNova Industrial Solutions products online via IndiaMART, Amazon Business, and the Government e-Marketplace (GeM)."
        />
        <link rel="canonical" href="https://vianovaindustrial.solutions/buy-online" />
      </Helmet>

      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
              Online Marketplaces
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-foreground">
              Buy Our Products Online
            </h1>
            <p className="text-lg text-muted-foreground">
              Shop measuring instruments, industrial automation, lab equipment and more directly from
              our verified storefronts on leading marketplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {MARKETPLACES.map((m) => {
              const Icon = m.icon;
              const Inner = (
                <Card className="h-full border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group">
                  <CardContent className="p-7">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${m.color}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {m.name}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      {m.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Visit Store
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
              return m.internal ? (
                <Link key={m.name} to={m.url}>{Inner}</Link>
              ) : (
                <a key={m.name} href={m.url} target="_blank" rel="noopener noreferrer">
                  {Inner}
                </a>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Need bulk pricing or a custom configuration?
            </p>
            <Link to="/inquiry">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8">
                Request a Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyOnline;
