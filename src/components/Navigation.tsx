import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { INDUSTRIES } from "@/data/industries";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const industriesTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

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
            <NavLink to="/" className={`${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/80 hover:text-white'} transition-colors font-medium`} activeClassName={`${scrolled ? 'text-primary' : 'text-white'} font-semibold`}>Home</NavLink>
            
            <NavLink to="/about" className={`${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/80 hover:text-white'} transition-colors font-medium`} activeClassName={`${scrolled ? 'text-primary' : 'text-white'} font-semibold`}>About</NavLink>
            <NavLink to="/brands" className={`${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/80 hover:text-white'} transition-colors font-medium`} activeClassName={`${scrolled ? 'text-primary' : 'text-white'} font-semibold`}>Brands</NavLink>
            <NavLink to="/exports" className={`${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/80 hover:text-white'} transition-colors font-medium`} activeClassName={`${scrolled ? 'text-primary' : 'text-white'} font-semibold`}>Exports</NavLink>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => { clearTimeout(industriesTimeoutRef.current); setIndustriesOpen(true); }}
              onMouseLeave={() => { industriesTimeoutRef.current = setTimeout(() => setIndustriesOpen(false), 200); }}
            >
              <button className={`${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/80 hover:text-white'} transition-colors font-medium inline-flex items-center gap-1`}>
                Industries
                <ChevronDown className={`w-4 h-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-background border border-border rounded-xl shadow-xl p-2 min-w-[240px]">
                    {INDUSTRIES.map((ind) => {
                      const Icon = ind.icon;
                      return (
                        <Link
                          key={ind.slug}
                          to={`/industries/${ind.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
                          onClick={() => setIndustriesOpen(false)}
                        >
                          <Icon className="w-4 h-4 text-secondary" />
                          {ind.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/products-at-gem" className={`${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-white/80 hover:text-white'} transition-colors font-medium`} activeClassName={`${scrolled ? 'text-primary' : 'text-white'} font-semibold`}>Products@GeM</NavLink>
            <NavLink to="/inquiry">
              <Button className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Request Quote
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? 'hover:bg-muted' : 'hover:bg-white/10'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className={`w-6 h-6 ${scrolled ? '' : 'text-white'}`} /> : <Menu className={`w-6 h-6 ${scrolled ? '' : 'text-white'}`} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Full width overlay */}
      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-20 bg-background border-t border-border shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto">
          <NavLink to="/" className="block px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium border-b border-border/50" activeClassName="text-primary font-semibold bg-muted/50" onClick={() => setIsOpen(false)}>Home</NavLink>
          
          <NavLink to="/about" className="block px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium border-b border-border/50" activeClassName="text-primary font-semibold bg-muted/50" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/brands" className="block px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium border-b border-border/50" activeClassName="text-primary font-semibold bg-muted/50" onClick={() => setIsOpen(false)}>Brands</NavLink>
          <NavLink to="/exports" className="block px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium border-b border-border/50" activeClassName="text-primary font-semibold bg-muted/50" onClick={() => setIsOpen(false)}>Exports</NavLink>

          {/* Mobile Industries */}
          <div className="border-b border-border/50">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-foreground/80 hover:text-foreground hover:bg-muted transition-colors font-medium"
              onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
            >
              Industries
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileIndustriesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileIndustriesOpen && (
              <div className="bg-muted/20">
                {INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/industries/${ind.slug}`}
                    className="block px-8 py-3 text-sm text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

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
