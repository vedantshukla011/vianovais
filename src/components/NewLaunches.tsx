import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuoteCart } from "@/contexts/QuoteCartContext";
import dtmImg from "@/assets/launch-driver-testing-machine.png";
import podiumImg from "@/assets/launch-smart-podium.png";
import printerImg from "@/assets/launch-multifunction-printer.png";
import displayImg from "@/assets/launch-interactive-display.png";
import batteryImg from "@/assets/launch-battery-simulator.png";
import wellerImg from "@/assets/weller-we1010-banner.jpeg.asset.json";

type Launch = {
  title: string;
  brand: string;
  model?: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  href?: string;
};

const launches: Launch[] = [
  {
    title: "Weller WE1010 Soldering Station, 70W",
    brand: "Weller",
    model: "WE1010",
    category: "Soldering & Rework",
    image: wellerImg.url,
    description:
      "70 W digital soldering station with precise temperature control, fast heat-up and a robust safety rest — built for electronics production, rework and lab benches. Priced at ₹15,500 + GST.",
    specs: [
      "70 W power, 200–450 °C range",
      "Digital temperature display & lock",
      "Fast heat-up, stable recovery",
      "ESD-safe design with safety rest",
    ],
    href: "/products/weller-we1010",
  },
  {
    title: "Driver Testing Machine (DTM)",
    brand: "ViaNova",
    category: "Power Electronics",
    image: dtmImg,
    description:
      "Turnkey test system for LED drivers, SMPS, adapters and UPS units — automating electrical safety, load and performance checks on the production line.",
    specs: [
      "LED driver, SMPS & adapter testing",
      "Programmable load sequences",
      "Automated pass/fail reporting",
      "Customisable to your product mix",
    ],
  },
  {
    title: "Smart Podiums",
    brand: "ViaNova",
    category: "Education Technology",
    image: podiumImg,
    description:
      "All-in-one interactive teaching podiums combining touch display, PC, audio and control in a single lectern for classrooms, training rooms and auditoriums.",
    specs: [
      "Integrated touch display & PC",
      "Central AV source control",
      "Built-in audio and connectivity",
      "Ready for hybrid classrooms",
    ],
  },
  {
    title: "Interactive Displays",
    brand: "EyeRIS",
    category: "Collaboration",
    image: displayImg,
    description:
      "GenAI-ready interactive flat panels for classrooms and meeting rooms with multi-touch writing, wireless casting and built-in collaboration tools.",
    specs: [
      "4K UHD multi-touch panel",
      "Wireless screen sharing",
      "Built-in whiteboard & AI tools",
      "Android + OPS PC options",
    ],
    href: "/interactive-panel",
  },
  {
    title: "Battery Simulators",
    brand: "ViaNova",
    category: "EV & Energy",
    image: batteryImg,
    description:
      "Bidirectional battery simulation for BMS, EV charger and inverter validation — emulate pack behaviour safely without a physical battery on the bench.",
    specs: [
      "Charge & discharge emulation",
      "Programmable SoC / SoH profiles",
      "Fast dynamic response",
      "Ideal for BMS and EV test labs",
    ],
  },
  {
    title: "Multifunction Printers",
    brand: "ViaNova",
    category: "Office Solutions",
    image: printerImg,
    description:
      "Print, scan, copy and network-managed document workflows for offices, labs and institutions, with service and consumables support across India.",
    specs: [
      "Print, scan, copy & network",
      "Mono and colour options",
      "Secure user access control",
      "AMC and consumables support",
    ],
  },
];

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
          {launches.map((item) => {
            const added = hasItem(item.title);
            return (
              <article
                key={item.title}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 bg-muted">
                  <img
                    src={item.image}
                    alt={`${item.brand} ${item.title}`}
                    loading="lazy"
                    className="w-full h-full object-contain p-5 group-hover:scale-105 transition-transform duration-500"
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
                      <Link to={item.href ?? `/inquiry?product=${encodeURIComponent(item.title)}`}>
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
