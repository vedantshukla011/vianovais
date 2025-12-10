import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "./NavLink";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl">ViaNova Engineering Products</h3>
            <p className="text-sm text-primary-foreground/80">
              A subsidiary of UV TEST SOLUTIONS, providing comprehensive engineering products for industrial applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <NavLink to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </NavLink>
              <NavLink to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Products
              </NavLink>
              <NavLink to="/industries" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Industries
              </NavLink>
              <NavLink to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </NavLink>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold">Our Products</h4>
            <div className="flex flex-col space-y-2 text-sm text-primary-foreground/80">
              <span>Valves & Control Systems</span>
              <span>Steam Traps & Accessories</span>
              <span>Gaskets & Jointing Sheets</span>
              <span>Industrial Compounds</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="flex flex-col space-y-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+91 20 4102 3000</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>info@vianovaengineering.in</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ViaNova Engineering Products. A UV TEST SOLUTIONS subsidiary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
