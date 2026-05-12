import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Plus, Minus, Trash2, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SHOP_PRODUCTS, type ShopProduct } from "@/data/shopProducts";
import { useQuoteCart } from "@/contexts/QuoteCartContext";

const ALL = "All Categories";
const TAX_RATE = 0.18;

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

interface CartLine { product: ShopProduct; qty: number; }

const BuyOnline = () => {
  const navigate = useNavigate();
  const { clearCart: clearQuote, addItem: addQuoteItem } = useQuoteCart();

  const categories = useMemo(() => {
    const set = new Set(SHOP_PRODUCTS.map((p) => p.category));
    return [ALL, ...Array.from(set).sort()];
  }, []);

  const [activeCat, setActiveCat] = useState<string>(ALL);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<Record<number, CartLine>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SHOP_PRODUCTS.filter((p) => {
      if (activeCat !== ALL && p.category !== activeCat) return false;
      if (q && !p.name.toLowerCase().includes(q) && !p.category.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [activeCat, query]);

  const addToCart = (p: ShopProduct) => {
    setCart((prev) => {
      const cur = prev[p.id];
      return { ...prev, [p.id]: { product: p, qty: cur ? cur.qty + 1 : 1 } };
    });
  };
  const updateQty = (id: number, delta: number) => {
    setCart((prev) => {
      const cur = prev[id];
      if (!cur) return prev;
      const next = cur.qty + delta;
      if (next <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: { ...cur, qty: next } };
    });
  };
  const removeFromCart = (id: number) => {
    setCart((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const lines = Object.values(cart);
  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;
  const cartCount = lines.reduce((s, l) => s + l.qty, 0);

  const handleReachOut = () => {
    if (lines.length === 0) {
      navigate("/inquiry");
      return;
    }
    clearQuote();
    lines.forEach((l) => {
      addQuoteItem(`${l.product.name} — Qty: ${l.qty} — Listed: ${formatINR(l.product.price)} (excl. tax)`);
    });
    setCartOpen(false);
    navigate("/inquiry");
  };

  return (
    <>
      <Helmet>
        <title>Buy Online | Shop Industrial & Lab Instruments</title>
        <meta
          name="description"
          content="Shop measuring instruments, soldering stations, multimeters, lab and electrical testing equipment online. Prices exclusive of taxes."
        />
        <link rel="canonical" href="https://vianovaindustrial.solutions/buy-online" />
      </Helmet>

      {/* Header */}
      <section className="pt-28 pb-10 bg-gradient-to-br from-primary via-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                Online Store
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">Buy Online</h1>
              <p className="text-primary-foreground/80 max-w-2xl">
                Browse our complete catalog of measuring instruments and electronic test equipment.
                <span className="block text-sm mt-1 text-primary-foreground/70">
                  All listed prices are <strong>exclusive of taxes</strong>. 18% GST applied at checkout summary.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating cart button */}
      <button
        onClick={() => setCartOpen(true)}
        aria-label="View cart"
        className="fixed bottom-6 right-6 z-40 bg-accent hover:bg-accent-light text-accent-foreground rounded-full shadow-2xl h-16 w-16 flex items-center justify-center transition-transform hover:scale-105"
      >
        <ShoppingCart className="w-6 h-6" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center min-w-6 h-6 px-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold border-2 border-background">
            {cartCount}
          </span>
        )}
      </button>

      {/* Search + categories */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 space-y-3">
          <div className="relative max-w-2xl">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products by name or category..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 h-11"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activeCat === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground/70 border-border hover:border-primary/50 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-10 bg-muted/20 min-h-[60vh]">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> products
            {activeCat !== ALL && <> in <span className="font-semibold text-foreground">{activeCat}</span></>}
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No products match your search.</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((p) => {
                const inCart = cart[p.id]?.qty ?? 0;
                return (
                  <Card key={p.id} className="overflow-hidden border-border/60 hover:shadow-elegant transition-all duration-300 flex flex-col">
                    <div className="aspect-square bg-white p-3 flex items-center justify-center overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }}
                      />
                    </div>
                    <CardContent className="p-3 flex flex-col flex-1">
                      <Badge variant="secondary" className="self-start text-[10px] mb-1.5">{p.category}</Badge>
                      <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-2 min-h-[2.5rem]">{p.name}</h3>
                      <div className="mt-auto">
                        <div className="text-lg font-bold text-primary">{formatINR(p.price)}</div>
                        <div className="text-[10px] text-muted-foreground mb-2">excl. of taxes</div>
                        {inCart === 0 ? (
                          <Button
                            size="sm"
                            onClick={() => addToCart(p)}
                            className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold"
                          >
                            <Plus className="w-3.5 h-3.5 mr-1" /> Add to Cart
                          </Button>
                        ) : (
                          <div className="flex items-center justify-between bg-muted rounded-md">
                            <Button size="sm" variant="ghost" className="h-9 w-9 p-0" onClick={() => updateQty(p.id, -1)}>
                              <Minus className="w-3.5 h-3.5" />
                            </Button>
                            <span className="text-sm font-semibold">{inCart}</span>
                            <Button size="sm" variant="ghost" className="h-9 w-9 p-0" onClick={() => updateQty(p.id, 1)}>
                              <Plus className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/50" onClick={() => setCartOpen(false)} />
          <div className="w-full max-w-md bg-background h-full shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Your Cart ({cartCount})
              </h2>
              <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-muted rounded-md">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {lines.length === 0 ? (
                <div className="text-center text-muted-foreground py-12">
                  <ShoppingCart className="w-10 h-10 mx-auto mb-3 opacity-40" />
                  Your cart is empty.
                </div>
              ) : (
                lines.map((l) => (
                  <div key={l.product.id} className="flex gap-3 p-3 border border-border rounded-lg">
                    <img
                      src={l.product.image}
                      alt={l.product.name}
                      className="w-16 h-16 object-contain bg-white rounded"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium line-clamp-2 mb-1">{l.product.name}</p>
                      <p className="text-xs text-muted-foreground mb-1">{formatINR(l.product.price)} each</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 bg-muted rounded">
                          <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={() => updateQty(l.product.id, -1)}>
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-xs font-semibold w-5 text-center">{l.qty}</span>
                          <Button size="sm" variant="ghost" className="h-7 w-7 p-0" onClick={() => updateQty(l.product.id, 1)}>
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <button
                          onClick={() => removeFromCart(l.product.id)}
                          className="text-destructive hover:text-destructive/80 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-primary whitespace-nowrap">
                      {formatINR(l.product.price * l.qty)}
                    </div>
                  </div>
                ))
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-border p-4 space-y-3 bg-muted/30">
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal (excl. tax)</span>
                    <span>{formatINR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>GST @ 18%</span>
                    <span>{formatINR(tax)}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-foreground pt-1.5 border-t border-border">
                    <span>Total</span>
                    <span>{formatINR(total)}</span>
                  </div>
                </div>
                <p className="text-[11px] text-muted-foreground text-center">
                  Final invoice may vary based on shipping & state of delivery.
                </p>
                <Button
                  onClick={handleReachOut}
                  className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold h-11"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Reach Out for Best Price
                </Button>
                <Link to="/inquiry" onClick={() => setCartOpen(false)} className="block text-center text-xs text-primary hover:underline">
                  or contact us without sharing cart
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BuyOnline;
