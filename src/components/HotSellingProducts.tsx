import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Check, ShoppingCart, ArrowRight, Flame } from "lucide-react";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import { hotSellingProducts } from "@/data/hotSellingProducts";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 12;

const HotSellingProducts = () => {
  const { addItem, removeItem, hasItem, items } = useQuoteCart();
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleProducts = hotSellingProducts.slice(0, visibleCount);
  const hasMore = visibleCount < hotSellingProducts.length;

  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-full mb-4">
            <Flame className="w-4 h-4 text-destructive" />
            <span className="text-sm font-semibold text-destructive uppercase tracking-wider">Trending Now</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-foreground">Hot Selling Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our most popular products trusted by engineers and industries across India
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {visibleProducts.map((product, index) => {
            const inCart = hasItem(product.name);
            return (
              <Card
                key={index}
                className="overflow-hidden border shadow-sm hover:shadow-elegant transition-all duration-300 group hover:-translate-y-1 bg-card relative"
              >
                {/* Brand logo top-right */}
                {product.brandLogo && (
                  <div className="absolute top-2 right-2 z-10 w-10 h-10 bg-white rounded-md shadow-sm flex items-center justify-center p-1">
                    <img
                      src={product.brandLogo}
                      alt={`Brand logo for ${product.name}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="relative h-32 overflow-hidden bg-muted/30">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <CardContent className="p-3">
                  <h3 className="text-xs font-semibold text-foreground line-clamp-2 mb-2 min-h-[2rem]">
                    {product.name}
                  </h3>
                  <Button
                    size="sm"
                    variant={inCart ? "secondary" : "default"}
                    className="w-full text-xs min-h-11"
                    aria-label={`${inCart ? "Remove" : "Add"} ${product.name} ${inCart ? "from" : "to"} quote request`}
                    aria-pressed={inCart}
                    onClick={() => inCart ? removeItem(product.name) : addItem(product.name)}
                  >
                    {inCart ? (
                      <>
                        <Check className="w-3 h-3 mr-1" />
                        Added
                      </>
                    ) : (
                      <>
                        <Plus className="w-3 h-3 mr-1" />
                        Add to Quote
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {hasMore && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setVisibleCount((c) => c + ITEMS_PER_PAGE)}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Load More Products
            </Button>
          </div>
        )}

        {items.length > 0 && (
          <div className="fixed bottom-6 right-6 z-50">
            <Link to="/inquiry">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-2xl rounded-full px-6 py-6 text-base">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Request Quote ({items.length})
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HotSellingProducts;
