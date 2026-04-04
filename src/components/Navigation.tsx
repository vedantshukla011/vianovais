import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CATALOG_CATEGORIES, CATALOG_SUBCATEGORIES } from "@/data/catalogProducts";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
      setHoveredCategory(null);
    }, 200);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="font-bold text-xl md:text-2xl text-accent">
              ViaNova Industrial Solutions
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className="text-foreground/70 hover:text-foreground transition-colors font-medium" activeClassName="text-primary font-semibold">Home</NavLink>
            
            {/* Products with Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <NavLink to="/products" className="text-foreground/70 hover:text-foreground transition-colors font-medium inline-flex items-center gap-1" activeClassName="text-primary font-semibold">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </NavLink>

              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2" style={{ width: 'max-content' }}>
                  <div className="bg-background border border-border rounded-xl shadow-xl flex min-w-[500px] max-w-[700px] overflow-hidden">
                    {/* Categories Column */}
                    <div className="w-56 border-r border-border bg-muted/30 py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Categories</div>
                      {CATALOG_CATEGORIES.map((cat) => (
                        <Link
                          key={cat}
                          to={`/products?category=${encodeURIComponent(cat)}`}
                          className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                            hoveredCategory === cat
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-foreground/80 hover:bg-muted'
                          }`}
                          onMouseEnter={() => setHoveredCategory(cat)}
                          onClick={() => setProductsOpen(false)}
                        >
                          {cat}
                          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                        </Link>
                      ))}
                      <div className="border-t border-border mt-1 pt-1">
                        <Link
                          to="/products"
                          className="block px-4 py-2.5 text-sm font-medium text-primary hover:bg-muted transition-colors"
                          onClick={() => setProductsOpen(false)}
                        >
                          View All Products →
                        </Link>
                      </div>
                    </div>

                    {/* Subcategories Column */}
                    <div className="flex-1 py-2 max-h-[400px] overflow-y-auto">
                      {hoveredCategory ? (
                        <>
                          <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{hoveredCategory}</div>
                          <div className="grid grid-cols-1 gap-0.5">
                            {CATALOG_SUBCATEGORIES[hoveredCategory]?.map((sub) => (
                              <Link
                                key={sub}
                                to={`/products?category=${encodeURIComponent(hoveredCategory)}&subcategory=${encodeURIComponent(sub)}`}
                                className="px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                                onClick={() => setProductsOpen(false)}
                              >
                                {sub}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center justify-center h-full text-muted-foreground text-sm px-6">
                          Hover a category to see subcategories
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className="text-foreground/70 hover:text-foreground transition-colors font-medium" activeClassName="text-primary font-semibold">About</NavLink>
            <NavLink to="/products-at-gem" className="text-foreground/70 hover:text-foreground transition-colors font-medium" activeClassName="text-primary font-semibold">Products@GeM</NavLink>
            <NavLink to="/inquiry">
              <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Request Quote
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full width overlay */}
      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-20 bg-background border-t border-border shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <NavLink to="/" className="block px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium border-b border-border/50" activeClassName="text-primary font-semibold bg-muted/50" onClick={() => setIsOpen(false)}>Home</NavLink>
          
          {/* Mobile Products with expandable categories */}
          <div className="border-b border-border/50">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileProductsOpen && (
              <div className="bg-muted/20">
                {CATALOG_CATEGORIES.map((cat) => (
                  <div key={cat}>
                    <button
                      className="w-full flex items-center justify-between px-8 py-3 text-sm text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
                      onClick={() => setMobileExpandedCat(mobileExpandedCat === cat ? null : cat)}
                    >
                      {cat}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileExpandedCat === cat ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpandedCat === cat && (
                      <div className="bg-muted/30">
                        {CATALOG_SUBCATEGORIES[cat]?.map((sub) => (
                          <Link
                            key={sub}
                            to={`/products?category=${encodeURIComponent(cat)}&subcategory=${encodeURIComponent(sub)}`}
                            className="block px-12 py-2.5 text-xs text-foreground/60 hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/products"
                  className="block px-8 py-3 text-sm font-medium text-primary hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  View All Products →
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/about" className="block px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium border-b border-border/50" activeClassName="text-primary font-semibold bg-muted/50" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/products-at-gem" className="block px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium border-b border-border/50" activeClassName="text-primary font-semibold bg-muted/50" onClick={() => setIsOpen(false)}>Products@GeM</NavLink>
          <div className="p-4">
            <NavLink to="/inquiry" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg py-3">
                Request Quote
              </Button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
