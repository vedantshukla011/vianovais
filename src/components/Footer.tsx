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
              Industrial test, measurement and laboratory equipment sourcing from India for domestic and international buyers.
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
              <NavLink to="/exports" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                International Exports
              </NavLink>
              <NavLink to="/exports/middle-east" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Middle East &amp; Arab Markets
              </NavLink>
              <NavLink to="/exports/africa" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                African Markets
              </NavLink>
              <NavLink to="/industries" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Industries
              </NavLink>
              <NavLink to="/about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                About Us
              </NavLink>
              <NavLink to="/blog" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Blog
              </NavLink>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg">Our Products</h4>
            <div className="flex flex-col space-y-3 text-sm text-primary-foreground/70">
              <span>Electronic Test &amp; Measurement</span>
              <span>Industrial Inspection Instruments</span>
              <span>Scientific &amp; Laboratory Equipment</span>
              <span>Precision Tools &amp; Metrology</span>
              <span>ESD &amp; Soldering Workstations</span>
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

        {/* Popular searches — sitewide SEO anchors */}
        <div className="border-t border-primary-foreground/15 mt-12 pt-8">
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary-foreground/90 mb-4">Popular Searches</h4>
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs text-primary-foreground/60">
            {[
              { label: "Buy measuring instruments online India", to: "/buy-online" },
              { label: "Buy oscilloscope online India", to: "/buy-online?q=oscilloscope" },
              { label: "Buy multimeter online", to: "/buy-online?q=multimeter" },
              { label: "Digital storage oscilloscope price", to: "/buy-online?q=oscilloscope" },
              { label: "Signal generator supplier", to: "/buy-online?q=signal+generator" },
              { label: "Spectrum analyzer distributor", to: "/buy-online?q=spectrum" },
              { label: "Clamp meter supplier", to: "/buy-online?q=clamp" },
              { label: "LCR meter distributor", to: "/buy-online?q=lcr" },
              { label: "Thermal camera supplier India", to: "/buy-online?q=thermal" },
              { label: "Data logger supplier India", to: "/buy-online?q=data+logger" },
              { label: "ESD workstation supplier", to: "/products" },
              { label: "ESD lab setup India", to: "/products" },
              { label: "Anti static table manufacturer", to: "/products" },
              { label: "Buy ESD mat online", to: "/buy-online?q=esd" },
              { label: "EV lab setup for engineering colleges", to: "/industries/education" },
              { label: "EV charger test bench supplier", to: "/industries/automobile" },
              { label: "EV battery testing lab setup", to: "/industries/automobile" },
              { label: "Electric vehicle trainer kits", to: "/industries/education" },
              { label: "Vibration analyzer supplier India", to: "/products" },
              { label: "FFT analyzer supplier", to: "/products" },
              { label: "Condition monitoring equipment India", to: "/products" },
              { label: "Industrial automation company Delhi", to: "/industries/automation" },
              { label: "Calibration instruments supplier Delhi", to: "/products" },
              { label: "Engineering lab equipment supplier Delhi", to: "/scientific-laboratory-instruments" },
              { label: "Pharmacy lab equipment", to: "/scientific-laboratory-instruments" },
              { label: "One stop solution for industrial instruments", to: "/products" },
              { label: "Test equipment exports from India", to: "/exports" },
              { label: "Instrument exports to Middle East and Arab markets", to: "/exports/middle-east" },
              { label: "Test and measurement exports to Africa", to: "/exports/africa" },
            ].map((k) => (
              <a key={k.label} href={k.to} className="hover:text-primary-foreground/90 transition-colors">
                {k.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-8 pt-8 text-center text-sm text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} ViaNova Industrial Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
