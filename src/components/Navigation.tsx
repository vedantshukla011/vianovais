import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImage from "@/assets/logo-vianova.jpg";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logoImage} alt="ViaNova Industrial Solutions" className="h-14 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Products
            </NavLink>
            <NavLink
              to="/industries"
              className="text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Industries
            </NavLink>
            <NavLink
              to="/about"
              className="text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
            >
              About
            </NavLink>
            <NavLink to="/inquiry">
              <Button className="bg-accent hover:bg-accent-light">
                Request Quote
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <NavLink
              to="/"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/industries"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Industries
            </NavLink>
            <NavLink
              to="/about"
              className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink to="/inquiry" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent-light">
                Request Quote
              </Button>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};
