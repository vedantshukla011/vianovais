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
            <div className="font-bold text-xl md:text-2xl text-gradient-primary">
              ViaNova Industrial Solutions
            </div>
            <span className="text-xs text-muted-foreground hidden lg:block font-medium">
              A UVTS and DASKMEI subsidiary
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
            >
              Products
            </NavLink>
            <NavLink
              to="/industries"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
            >
              Industries
            </NavLink>
            <NavLink
              to="/about"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
            >
              About
            </NavLink>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border bg-background/95 backdrop-blur-md">
            <NavLink
              to="/"
              className="block py-3 text-foreground/70 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="block py-3 text-foreground/70 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/industries"
              className="block py-3 text-foreground/70 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </NavLink>
            <NavLink
              to="/about"
              className="block py-3 text-foreground/70 hover:text-foreground transition-colors font-medium"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink to="/inquiry" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg">
                Request Quote
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};
