import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <NavLink to="/products" className="text-foreground/70 hover:text-foreground transition-colors font-medium" activeClassName="text-primary font-semibold">Products</NavLink>
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
        <div className="md:hidden fixed left-0 right-0 top-20 bg-background border-t border-border shadow-lg">
          <NavLink to="/" className="block px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium border-b border-border/50" activeClassName="text-primary font-semibold bg-muted/50" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/products" className="block px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium border-b border-border/50" activeClassName="text-primary font-semibold bg-muted/50" onClick={() => setIsOpen(false)}>Products</NavLink>
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
