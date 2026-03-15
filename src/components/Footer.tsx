import { Mail, Phone, MapPin, Download } from "lucide-react";
import { NavLink } from "./NavLink";
import logoImage from "@/assets/logo-vianova.jpg";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <img src={logoImage} alt="ViaNova Industrial Solutions" className="h-14 w-auto bg-white p-2 rounded-lg shadow-lg" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Providing comprehensive engineering products for industrial applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              <NavLink to="/" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Home
              </NavLink>
              <NavLink to="/products" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Products
              </NavLink>
              <NavLink to="/industries" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Industries
              </NavLink>
              <NavLink to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                About Us
              </NavLink>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg">Our Products</h4>
            <div className="flex flex-col space-y-3 text-sm text-primary-foreground/70">
              <span>Measuring Instruments</span>
              <span>Valves & Control Systems</span>
              <span>Steam Traps & Accessories</span>
              <span>Gaskets & Jointing Sheets</span>
              <span>Industrial Compounds</span>
            </div>
            <a 
              href="/Flow_Solutions_ViaNova.pdf" 
              download 
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors mt-3 font-medium"
            >
              <Download className="w-4 h-4" />
              <span>Download Product Brochure</span>
            </a>
            <a 
              href="/ViaNova_ESD_Product_Catalog.xlsx" 
              download 
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors mt-2 font-medium"
            >
              <Download className="w-4 h-4" />
              <span>ESD Products</span>
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg">Contact Us</h4>
            <div className="flex flex-col space-y-4 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919654109754" className="hover:text-primary-foreground transition-colors">+91 9654109754</a>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:sales@vianovaindustrial.solutions" className="hover:text-primary-foreground transition-colors">sales@vianovaindustrial.solutions</a>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>123-Aditya High Street, Lal Kuan, Ghaziabad, Uttar Pradesh, India 201001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} ViaNova Industrial Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
