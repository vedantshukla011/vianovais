import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Check, Plus, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import wellerImg from "@/assets/weller-we1010-banner.jpeg.asset.json";
import utl8211Img from "@/assets/unit-utl8211plus.jpg.asset.json";
import uti260bImg from "@/assets/unit-uti260b.jpg.asset.json";
import hdm3065Img from "@/assets/hantek-hdm3065.jpg.asset.json";
import utd2102cexImg from "@/assets/unit-utd2102cex-plus.png.asset.json";
import micsigDpImg from "@/assets/micsig-dp-main.png.asset.json";
import flirE52Img from "@/assets/flir-e52.png.asset.json";
import flirE52Datasheet from "@/assets/flir-e52-datasheet.pdf.asset.json";

type Launch = {
  title: string;
  brand: string;
  model?: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  href?: string;
  datasheet?: { url: string; filename: string };
};

const launches: Launch[] = [
  {
    title: "FLIR E52 Advanced Thermal Imaging Camera (240 × 180 IR)",
    brand: "FLIR",
    model: "E52",
    category: "Thermal Imaging Cameras",
    image: flirE52Img.url,
    description: "Exx-Series thermal imaging camera for electrical and mechanical inspections, with 240 × 180 infrared resolution, manual focus and temperature measurement up to 550°C. MSX® image enhancement, 1-Touch Level/Span and FLIR Ignite™ cloud connectivity support efficient condition monitoring.",
    specs: [
      "240 × 180 px IR, thermal sensitivity <50 mK",
      "−20°C to 120°C / 0°C to 550°C ranges",
      "24° × 18° field of view, manual focus",
      "4-inch 640 × 480 touchscreen, 5 MP visual camera",
      "30 Hz imaging, Wi-Fi, Bluetooth and USB-C",
    ],
    href: "/products/flir-e52",
    datasheet: { url: flirE52Datasheet.url, filename: "FLIR-E52-Datasheet.pdf" },
  },
  {
    title: "Micsig DP1503 / DP3003 High-Voltage Differential Probes",
    brand: "Micsig",
    model: "DP1503 / DP3003",
    category: "High-Voltage Differential Probes",
    image: micsigDpImg.url,
    description: "300 MHz differential probes for floating and high-voltage measurements. Choose the DP1503 (up to 1500 Vpk) or DP3003 (up to 3000 Vpk), with standard BNC connection for compatible oscilloscopes.",
    specs: [
      "300 MHz bandwidth on both models",
      "Up to 1500 Vpk (DP1503) or 3000 Vpk (DP3003)",
      "One-button zero and dual-range switching",
      "5 MHz bandwidth limit and overload alarm",
    ],
    href: "/products/micsig-dp-series",
  },
  {
    title: "UNI-T UTD2102CEX+ Digital Storage Oscilloscope (100 MHz, 2 Channel)",
    brand: "UNI-T",
    model: "UTD2102CEX+",
    category: "Digital Storage Oscilloscopes",
    image: utd2102cexImg.url,
    description:
      "100 MHz, 2-channel digital storage oscilloscope with 1 GS/s real-time sampling, 64 kpts memory depth and a 7-inch WVGA colour display. Fast waveform capture, advanced trigger modes and USB connectivity support electronics development, education, repair and laboratory testing.",
    specs: [
      "100 MHz bandwidth, 2 analogue channels",
      "1 GS/s real-time sampling rate",
      "64 kpts memory, up to 5,000 wfms/s",
      "7-inch WVGA 800 × 480 TFT display",
      "USB OTG Host/Device and Pass/Fail output",
    ],
    href: "/products/unit-utd2102cex-plus",
  },
  {
    title: "Hantek HDM3065 Digital Multimeter (6½ Digit Bench Multimeter)",
    brand: "Hantek",
    model: "HDM3065",
    category: "Digital Multimeters",
    image: hdm3065Img.url,
    description:
      "True 6½ digit benchtop digital multimeter with 35 ppm DCV basic accuracy, up to 30,000 readings/s, dual display and 13 measurement functions including 4-wire resistance and 10 A current. 4.3-inch 64K colour LCD with trend, histogram and bar graph views. Price ₹73,995 incl. GST 18% (MRP ₹78,100).",
    specs: [
      "True 6½ digit resolution, 35 ppm DCV accuracy",
      "Up to 30,000 rdgs/s, 10,000 reading memory",
      "13 functions incl. 4-wire resistance & 10 A current",
      "4.3\" 64K LCD with trend, histogram & bar graph",
      "SCPI remote control, USB Device/Host, RS232/485",
    ],
    href: "/products/hantek-hdm3065",
  },
  {
    title: "UNI-T UTi260B Thermal Imager (256 x 192 IR, -20°C to 550°C, IP65)",
    brand: "UNI-T",
    model: "UTi260B",
    category: "Thermal Imaging Cameras",
    image: uti260bImg.url,
    description:
      "Heavy-duty thermal camera with 256 x 192 IR resolution, wide -20°C to 550°C range, 7 colour palettes and four display modes (thermal, visual, fusion, PiP). Rugged IP65 body tested to a 2 m drop. Price ₹30,500 incl. GST 18% (MRP ₹39,160).",
    specs: [
      "256 x 192 px IR, 2.8\" LCD display",
      "Temperature range -20°C to 550°C, NETD 50 mK",
      "7 palettes, 4 image modes incl. PiP",
      "3-point analysis, hot/cold spot auto tracking",
      "IP65, 2 m drop proof, 6-hour Li-ion battery",
    ],
    href: "/products/unit-uti260b",
  },
  {
    title: "Testo 883-1 Thermal Imager (320 x 240 px, Manual Focus, App & Laser)",
    brand: "Testo",
    model: "883-1",
    category: "Thermal Imaging Cameras",
    image:
      "https://vianovais.lovable.app/__l5e/assets-v1/06b156de-a5f5-40c6-86f8-dd8291fdff7f/testo-883.jpg",
    description:
      "Professional thermal imager with 320 x 240 pixel IR resolution (640 x 480 with SuperResolution) and NETD < 40 mK. Features testo SiteRecognition, ScaleAssist, manual focus and interchangeable lenses for electrical, industrial and building thermography. Offer price ₹5,80,000 + GST.",
    specs: [
      "320 x 240 px IR (640 x 480 SuperResolution)",
      "Thermal sensitivity NETD < 40 mK",
      "testo SiteRecognition & ScaleAssist",
      "Manual focus, interchangeable 12° telephoto lens",
      "Touchscreen + joystick, Bluetooth® & app control",
    ],
    href: "/products/testo-883-1",
  },
  {
    title: "UNI-T UTL8211+ High-Precision Compact DC Electronic Load (400W/150V/40A)",
    brand: "UNI-T",
    model: "UTL8211+",
    category: "DC Electronic Loads",
    image: utl8211Img.url,
    description:
      "Single-channel 400 W programmable DC electronic load with 150 V / 40 A input range and 4.8 MHz synchronous voltage-current ADC sampling. Offers CC, CV, CR and CP modes with full protection suite — ideal for testing power supplies, batteries, adapters, LED drivers and chargers.",
    specs: [
      "400 W max power, 150 V / 40 A input",
      "4.8 MHz current-voltage synchronous ADC sampling",
      "CC, CV, CR, CP basic operation modes",
      "Min operating voltage 2.0 V at 40 A",
      "OVP / UVP / OCP / OPP / OTP protection",
    ],
    href: "/products/unit-utl8211plus",
  },
  {
    title: "UNI-T UAP1000A AC Power Source (1000VA Programmable AC Source)",
    brand: "UNI-T",
    model: "UAP1000A",
    category: "AC Power Sources",
    image: "https://vianovais.lovable.app/__l5e/assets-v1/11ed2c04-f893-42a2-91ba-2f05ff4ac6b4/unit-uap1000a.jpg",
    description:
      "1000 VA single-phase programmable AC power source with dual voltage ranges (150 V / 300 V), current up to 8.4 A, 0.01 V / 0.001 A resolution and RS-232C remote control in a compact 3U chassis — built for mains simulation, appliance and adapter testing.",
    specs: [
      "Output capacity 1000 VA",
      "Voltage range L: 150 V / H: 300 V",
      "Current range L: 8.4 A / H: 4.2 A",
      "Resolution 0.01 V / 0.001 A",
      "RS-232C interface, 3U rack size",
    ],
    href: "/products/unit-uap1000a",
  },
  {
    title: "UNI-T UTR2830E LCR Meter (100 kHz Digital LCR Bridge)",
    brand: "UNI-T",
    model: "UTR2830E",
    category: "LCR Meters",
    image: "https://vianovais.lovable.app/__l5e/assets-v1/6056949f-0723-4377-9f7e-ace217c48d8d/unit-utr2830e.jpg",
    description:
      "New generation 100 kHz digital LCR bridge with 0.05% LCRZ / 0.1% DCR accuracy, 6-bit display count and up to 80 readings per second, with a 4.3-inch TFT LCD dual parameter readout for production QA and automated testing.",
    specs: [
      "Max test frequency 100 kHz",
      "Accuracy LCRZ 0.05%, DCR 0.1%",
      "6-bit display count, 80 rdgs/s",
      '4.3" TFT LCD, dual parameter readout',
      "RS232, HANDLER, LAN, USB Host/Device",
    ],
    href: "/products/unit-utr2830e",
  },
  {
    title: "Hantek APE11L1000 AC Power Source (1KVA, 110V/220V)",
    brand: "Hantek",
    model: "APE11L1000",
    category: "AC Power Sources",
    image: "https://vianovais.lovable.app/__l5e/assets-v1/bf71d2e7-28d6-4f77-b637-a09eb4b8a91b/hantek-ape11l1000.jpg",
    description:
      "1KVA single-phase programmable AC power source with 110 V / 220 V rated voltage, 9.1 A / 4.5 A rated current and 0–300 V adjustable output. Built-in isolation transformer and 4.3-inch colour LCD with waveform recording.",
    specs: [
      "Output power 1KVA, rated 110V/220V",
      "Rated current 9.1 A / 4.5 A",
      "Output 0–300 V, 45–65 Hz",
      "4.3-inch colour LCD, 30-day waveform recording",
      "Isolation transformer, OVP/OCP/OTP/OPP",
    ],
    href: "/products/hantek-ape11l1000",
  },
  {
    title: "Jartul JT6311A DC Electronic Load (150W/150V/30A)",
    brand: "Jartul",
    model: "JT6311A",
    category: "DC Electronic Loads",
    image: "https://vianovais.lovable.app/__l5e/assets-v1/36665805-8730-4a7f-98b5-5d85af0e023c/jartul-jt6311a.png",
    description:
      "150W / 30A / 150V programmable DC electronic load with 10µS full-range current rising time and 500KHz synchronized sampling. Ideal for testing switching power supplies, LED drivers, ATE systems, fuses, batteries and adapters.",
    specs: [
      "150W / 150V / 30A range",
      "10µS full-range current rise time",
      "500KHz synchronized sampling",
      "CC / CV / CR / CP modes",
      "Dynamic, list, battery & short test",
    ],
    href: "/products/jartul-jt6311a",
  },
  {
    title: "Metrel MI 3108 EurotestPV Photovoltaic & Installation Tester",
    brand: "Metrel",
    model: "MI 3108",
    category: "Electrical Safety Testing",
    image: "https://vianovais.lovable.app/__l5e/assets-v1/d9e9ac3a-7f7b-4637-9ffa-d7be100cbf47/metrel-mi3108.jpg",
    description:
      "Combined photovoltaic and electrical installation safety tester. Performs complete EN 61557 installation tests plus EN 62446 PV tests, I-V curve tracing, STC calculation (EN 61829) and DC/AC inverter power measurements up to 1000 V / 15 A DC.",
    specs: [
      "I-V curve tracing up to 1000 V / 15 A",
      "STC recalculation per EN 61829",
      "RCD (AC/A/B), loop, line, insulation, earth",
      "Simultaneous AC & DC power / efficiency",
      "PV Safety Probe for safe disconnection",
    ],
    href: "/products/metrel-mi3108",
  },
  {
    title: "Metrel MI 3132 EV Tester (Electric Vehicle Insulation Tester)",
    brand: "Metrel",
    model: "MI 3132",
    category: "EV Testing",
    image: "https://vianovais.lovable.app/__l5e/assets-v1/e0b0fd7b-082b-4a26-a7b9-2265e9f44126/metrel-mi3132.jpg",
    description:
      "Portable EV insulation and bonding tester compliant with UN ECE R100 Annex 4A/4B and ISO 6469-3. Insulation up to 1500 V, 4-wire micro-ohm measurement at 2 A DC, 4.3″ colour touchscreen and Li-Ion battery operation for field use.",
    specs: [
      "Insulation test 50 V – 1500 V, up to 3 GΩ",
      "4-wire Micro Ohm with 2 A DC current",
      "Compliant with UN ECE R100 & ISO 6469-3",
      "4.3″ colour touchscreen, AUTO SEQUENCE",
      "CAT III 1000 V, Li-Ion battery powered",
    ],
    href: "/products/metrel-mi3132",
  },
  {
    title: "Orion EE Phase Sync — IEC 62271-215:2021 Phase Comparator",
    brand: "Orion EE",
    model: "Phase Sync",
    category: "Medium Voltage Testing",
    image: "https://vianovais.lovable.app/__l5e/assets-v1/5c3e9385-aa4c-442e-92e0-b900586cd9f8/orion-phase-sync.jpg",
    description:
      "Class A capacitive phase comparator for medium voltage equipment with IEC 62271-215:2021 measuring points. LCD + LED indication of phase coincidence, voltage presence and frequency, with Type-C rechargeable Li-ion battery.",
    specs: [
      "IEC 62271-215:2021 Class A compliant",
      "Phase, voltage presence & frequency on LCD",
      "Single-earth simultaneous connected operation",
      "50/60 Hz, threshold 10%–45% Un",
      "Type-C rechargeable, IP 2X / IK 07, 250 g",
    ],
    href: "/products/orion-phase-sync",
  },
  {
    title: "Weller WE 1010 70W Digital Soldering Station (WEP 70 + PH 70)",
    brand: "Weller",
    model: "WE 1010",
    category: "Soldering & Rework",
    image: wellerImg.url,
    description:
      "1-channel 70W digital soldering station with WEP 70 iron and PH 70 safety rest — the most powerful station in its class with 40% more power than WES / WESD. ESD safe, UL & CE certified, with toolless ET tip change. Priced at ₹15,500 + GST.",
    specs: [
      "70 W, 230 V, 100 °C – 450 °C range",
      "Digital LC display, standby & auto setback",
      "ESD safe iron, heat-resistant silicon cable",
      "Toolless tip change — Weller ET tips",
      "Password-protected settings, UL & CE certified",
    ],
    href: "/products/weller-we1010",
  },
];

const launchBrandLogos: Record<string, string> = {
  FLIR: "/brand-logos/teledyne-flir.svg",
  Micsig: "/brand-logos/micsig.webp",
  "UNI-T": "/brand-logos/uni-t.svg",
  Hantek: "/brand-logos/hantek.png",
  Testo: "/brand-logos/testo.svg",
  Weller: "/brand-logos/weller.svg",
};


const NewLaunches = () => {
  const { addItem, hasItem } = useQuoteCart();

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            New Launches
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">Just Launched</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest additions to our test &amp; measurement portfolio
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {launches.map((item, index) => {
            const added = hasItem(item.title);
            return (
              <article
                key={item.title}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 bg-muted">
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.category}`}
                    loading="eager"
                    fetchPriority={index < 3 ? "high" : "auto"}
                    decoding="async"
                    className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
                    onError={(event) => {
                      const image = event.currentTarget;
                      image.onerror = null;
                      image.src = launchBrandLogos[item.brand] ?? "/placeholder.svg";
                      image.alt = `${item.brand} logo for ${item.title}`;
                      image.classList.add("object-contain", item.brand === "Hantek" ? "bg-slate-800" : "bg-white");
                    }}
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold shadow-md">
                    New
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                    {item.brand}
                    {item.model ? ` · Model ${item.model}` : ""} · {item.category}
                  </span>
                  <h3 className="text-lg font-bold mt-2 text-foreground">
                    {item.href ? (
                      <Link to={item.href} className="hover:text-secondary transition-colors">
                        {item.title}
                      </Link>
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.description}</p>

                  <ul className="mt-4 space-y-2">
                    {item.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-3">
                    <Button asChild size="sm" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold">
                      <Link to={item.href ?? `/inquiry?product=${encodeURIComponent(item.title)}`} aria-label={`View details for ${item.title}`}>
                        View Details
                        <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => addItem(item.title)}
                      disabled={added}
                      aria-label={`Add ${item.title} to quote request`}
                    >
                      {added ? <Check className="mr-1.5 h-4 w-4" /> : <Plus className="mr-1.5 h-4 w-4" />}
                      {added ? "Added" : "Request Quote"}
                    </Button>
                    {item.datasheet && (
                      <Button asChild size="sm" variant="outline">
                        <a href={item.datasheet.url} download={item.datasheet.filename} aria-label={`Download ${item.brand} ${item.model} datasheet`}>
                          <Download className="h-4 w-4" /> Datasheet
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewLaunches;
