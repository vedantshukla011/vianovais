import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dtmImg from "@/assets/launch-driver-testing-machine.png";
import podiumImg from "@/assets/launch-smart-podium.png";
import printerImg from "@/assets/launch-multifunction-printer.png";
import displayImg from "@/assets/launch-interactive-display.png";
import batteryImg from "@/assets/launch-battery-simulator.png";

const launches = [
  { title: "Driver Testing Machine (DTM)", tag: "Power Electronics", image: dtmImg },
  { title: "Smart Podiums", tag: "Education Tech", image: podiumImg },
  { title: "Multifunction Printers", tag: "Office Solutions", image: printerImg },
  { title: "Interactive Displays", tag: "Collaboration", image: displayImg },
  { title: "Battery Simulators", tag: "EV & Energy", image: batteryImg },
];

const NewLaunches = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Just In
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">New Launches</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our latest additions — cutting-edge instruments and systems built for tomorrow's industry
          </p>
        </div>

        <div className="relative -mx-4 px-4">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 scroll-smooth [scrollbar-width:thin]">
            {launches.map((item, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[280px] md:w-[320px] group"
              >
                <div className="relative h-56 rounded-2xl overflow-hidden bg-muted shadow-elegant group-hover:shadow-hover transition-all duration-500 group-hover:-translate-y-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold shadow-md">
                    NEW
                  </div>
                </div>
                <div className="mt-4 px-1">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{item.tag}</span>
                  <h3 className="text-lg font-bold mt-1 text-foreground group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <Link
                    to={`/inquiry?product=${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-accent hover:text-accent-light transition-colors"
                  >
                    Request Quote
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewLaunches;
