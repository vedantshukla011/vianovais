export interface Brand {
  name: string;
  initials: string;
  domain: string;
  description: string;
  category: string;
  accentColor: string;
  href?: string;
  logo: string;
  logoBackground?: "dark";
  authorized?: boolean;
}

export const BRANDS: Brand[] = [
  {
    name: "Keysight Technologies", initials: "KT", domain: "keysight.com",
    description: "Electronic test and measurement solutions including oscilloscopes, network analyzers and RF instruments for R&D and manufacturing.",
    category: "Test & Measurement", accentColor: "bg-primary/10 text-primary", href: "/brands/keysight-technologies", logo: "/brand-logos/keysight-technologies.svg",
  },
  {
    name: "Keithley", initials: "KE", domain: "tek.com",
    description: "Precision DC instruments, source measure units and low-level measurement solutions for research and characterization.",
    category: "Precision Instruments", accentColor: "bg-secondary/10 text-secondary", href: "/brands/keithley", logo: "/brand-logos/keithley.svg",
  },
  {
    name: "Tektronix", initials: "TX", domain: "tektronix.com",
    description: "Oscilloscopes, probes and test equipment for signal analysis and debugging.",
    category: "Oscilloscopes", accentColor: "bg-accent/10 text-accent-foreground", href: "/brands/tektronix", logo: "/brand-logos/tektronix.svg",
  },
  {
    name: "Fluke", initials: "FL", domain: "fluke.com",
    description: "Industrial test and measurement tools, including digital multimeters, thermal imagers and calibration equipment.",
    category: "Industrial Tools", accentColor: "bg-primary/10 text-primary", href: "/brands/fluke", logo: "/brand-logos/fluke.svg",
  },
  {
    name: "Teledyne FLIR", initials: "FLIR", domain: "flir.com",
    description: "Thermal imaging cameras and instruments for electrical inspection, condition monitoring and building diagnostics.",
    category: "Thermal Imaging", accentColor: "bg-secondary/10 text-secondary", href: "/brands/flir",
    logo: "/brand-logos/teledyne-flir.svg", authorized: true,
  },
  {
    name: "MICSIG", initials: "MS", domain: "micsig.com",
    description: "Oscilloscopes and oscilloscope probes for electronics testing and measurement.",
    category: "Oscilloscope Probes", accentColor: "bg-primary/10 text-primary", href: "/micsig-probes",
    logo: "/brand-logos/micsig.webp", authorized: true,
  },
  {
    name: "TESTO", initials: "TE", domain: "testo.com",
    description: "Temperature, humidity, HVAC and environmental measurement instruments for industrial and commercial applications.",
    category: "Environmental Testing", accentColor: "bg-secondary/10 text-secondary", href: "/brands/testo",
    logo: "/brand-logos/testo.svg", authorized: true,
  },
  {
    name: "UNI-T", initials: "UT", domain: "uni-trend.com",
    description: "Test and measurement instruments including multimeters, clamp meters and oscilloscopes.",
    category: "Test & Measurement", accentColor: "bg-accent/10 text-accent-foreground", href: "/brands/uni-t",
    logo: "/brand-logos/uni-t.svg", authorized: true,
  },
  {
    name: "National Instruments (NI)", initials: "NI", domain: "ni.com",
    description: "Automated test, data acquisition and control systems for research labs and production test floors.",
    category: "Automated Test", accentColor: "bg-primary/10 text-primary", href: "/brands/national-instruments", logo: "/brand-logos/national-instruments.svg",
  },
  {
    name: "Weller", initials: "WE", domain: "weller-tools.com",
    description: "Professional soldering stations, desoldering tools and accessories for electronics manufacturing and repair.",
    category: "Soldering Solutions", accentColor: "bg-secondary/10 text-secondary", href: "/brands/weller", logo: "/brand-logos/weller.svg",
  },
  {
    name: "VAISALA", initials: "VA", domain: "vaisala.com",
    description: "Environmental and industrial measurement instruments for reliable monitoring and process insight.",
    category: "Environmental Measurement", accentColor: "bg-primary/10 text-primary", href: "/brands/vaisala", logo: "/brand-logos/vaisala.png", authorized: true,
  },
  {
    name: "SIGLENT", initials: "SIG", domain: "siglent.com",
    description: "Test and measurement instruments for electronics development, production testing, education and service environments.",
    category: "Test & Measurement", accentColor: "bg-secondary/10 text-secondary", href: "/brands/siglent", logo: "/brand-logos/siglent.png", authorized: true,
  },
  {
    name: "Hantek", initials: "HA", domain: "hantek.com",
    description: "Oscilloscopes, automotive diagnostic tools and USB-based test instruments for education and field service.",
    category: "Oscilloscopes", accentColor: "bg-accent/10 text-accent-foreground", href: "/brands/hantek", logo: "/brand-logos/hantek.png", logoBackground: "dark", authorized: true,
  },
  {
    name: "RIGOL", initials: "RI", domain: "rigol.com",
    description: "Oscilloscopes, spectrum analyzers, signal generators and programmable DC power supplies.",
    category: "Test & Measurement", accentColor: "bg-primary/10 text-primary", href: "/brands/rigol", logo: "/brand-logos/rigol.svg", authorized: true,
  },
];

export const AUTHORIZED_BRANDS = BRANDS.filter((brand) => brand.authorized);
