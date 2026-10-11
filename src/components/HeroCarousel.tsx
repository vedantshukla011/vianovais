import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTestMeasurement from "@/assets/hero-test-measurement.jpg";
import heroEyerisA10 from "@/assets/hero-eyeris-a10.jpg";
import owonMTQHero from "@/assets/owon-mtq-hero.jpg.asset.json";
import micsigProbe from "@/assets/micsig-sigofit-probe.png";

type Slide = {
  image: string;
  alt: string;
  badge: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  primaryCta: { label: string; to: string };
  secondaryCta: { label: string; to: string };
};

const slides: Slide[] = [
  {
    image: micsigProbe,
    alt: "Micsig SigOFIT Gen 3 optical-fiber isolated probe with sensor, receiver and fiber cable",
    badge: "ViaNova × Micsig · Authorized Distributor",
    titleTop: "SigOFIT Gen 3.",
    titleBottom: "See the true signal.",
    description: "Micsig optical-fiber isolated probes for demanding power electronics measurements. Now available through ViaNova.",
    primaryCta: { label: "Request a Quote", to: "/inquiry?product=Micsig%20SigOFIT%20Gen%203%20optical-fiber%20isolated%20probe" },
    secondaryCta: { label: "Explore the Probe", to: "https://www.micsig.com/3MOIP/15.html" },
  },
  {
    image: heroTestMeasurement,
    alt: "Industrial test and measurement laboratory with oscilloscope, multimeter and precision instruments",
    badge: "Turnkey Test & Measurement Solutions Provider in India",
    titleTop: "One Partner.",
    titleBottom: "Every Measurement.",
    description:
      "Oscilloscopes, multimeters, power & spectrum analyzers, ESD labs, EV test benches and calibration solutions — supplied, integrated and supported across India with GST invoice and pan-India delivery.",
    primaryCta: { label: "Request Best Price", to: "/inquiry" },
    secondaryCta: { label: "Explore Products", to: "/products" },
  },
  {
    image: heroEyerisA10,
    alt: "EyeRIS A10 GenAI powered 86 inch interactive flat panel display for smart classrooms and boardrooms in India",
    badge: "Industry's First GenAI Powered Interactive Flat Panel",
    titleTop: "EyeRIS A10.",
    titleBottom: "Powered by Bright AI.",
    description:
      "65\"/75\"/86\" 4K interactive flat panel displays with optical touch and AI lesson, quiz & PPT generation — built for NEP 2020 smart classrooms, training rooms and modern boardrooms across India.",
    primaryCta: { label: "Explore EyeRIS A10", to: "/interactive-panel" },
    secondaryCta: { label: "Download Datasheet", to: "/interactive-panel" },
  },
  {
    image: owonMTQHero.url,
    alt: "OWON MetroQ MTQ32000 and MTQ64000 wide-range linear DC regulated power supplies from 150W to 600W",
    badge: "New Arrival — OWON MetroQ Wide-Range DC Power Supplies",
    titleTop: "MTQ32000 / MTQ64000.",
    titleBottom: "Precise Power. Up to 600W.",
    description:
      "Four compact 32V and 64V models from 150W to 600W, with triple V/A/W display, 10mV/1mA adjustment, memory recall, CC/CV switching and OVP/OCP/OTP protection.",
    primaryCta: { label: "Explore DC Power Supplies", to: "/buy-online?category=Power%20Supply" },
    secondaryCta: { label: "Request Best Price", to: "/inquiry?product=OWON%20MetroQ%20MTQ%20DC%20Power%20Supply" },
  },
];

const HeroCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative min-h-[580px] md:min-h-[680px] flex items-center justify-center overflow-hidden bg-primary-dark"
      aria-label="Featured Micsig optical-fiber probes, test instruments, and interactive displays"
      aria-roledescription="carousel"
      onFocusCapture={() => setPaused(true)}
      onMouseEnter={() => setPaused(true)}
    >
      <div className="absolute inset-0 bg-gradient-hero" />

      {slides.map((slide, i) => (
        i === 0 ? (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`} aria-hidden={i !== active}>
            <img src={slide.image} alt={slide.alt} loading="eager" decoding="async" className="hidden lg:block absolute h-[570px] w-[min(42vw,520px)] object-contain right-[7%] bottom-10 drop-shadow-[0_18px_16px_hsl(var(--primary-dark)/0.55)] motion-safe:animate-fade-in" />
          </div>
        ) : (
          <img
            key={i}
            src={slide.image}
            alt={slide.alt}
            aria-hidden={i !== active}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === active ? "opacity-25" : "opacity-0"
            }`}
          />
        )
      ))}

      <div className={`relative z-10 container mx-auto px-4 text-primary-foreground ${active === 0 ? "text-left" : "text-center"}`}>
        {slides.map((slide, i) => i === active ? (
          <div
            key={i}
            className={`transition-opacity duration-700 ${i === 0 ? "min-h-[580px] md:min-h-[680px] flex flex-col justify-center pt-20 pb-8 md:py-16 lg:py-20" : ""} ${
              i === active ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
            aria-hidden={i !== active}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-5 md:mb-8 text-xs sm:text-sm font-medium ${i === 0 ? "self-start" : "mx-auto"}`}>
              <Sparkles className="w-4 h-4 text-accent" />
              <span>{slide.badge}</span>
            </div>
              <h2 className={`${i === 0 ? "text-4xl md:text-6xl max-w-xl" : "text-5xl md:text-7xl"} font-bold mb-4 md:mb-6 leading-tight`}>
                {slide.titleTop}
                <span className="block mt-2 text-accent">{slide.titleBottom}</span>
              </h2>

            <p className={`text-base md:text-2xl mb-5 md:mb-8 text-primary-foreground/80 ${i === 0 ? "max-w-lg" : "max-w-3xl mx-auto"}`}>
              {slide.description}
            </p>
            {i === 0 && <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-6 text-sm md:text-base font-semibold text-primary-foreground" aria-label="Probe highlights">
              <li className="border-l-2 border-accent pl-3">Zero drift</li>
              <li className="border-l-2 border-accent pl-3">Calibration-free</li>
              <li className="border-l-2 border-accent pl-3">Power-over-laser</li>
            </ul>}
            <div className={`flex flex-wrap gap-3 md:gap-4 ${i === 0 ? "items-start" : "justify-center"}`}>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-5 md:px-8 py-5 md:py-6 text-sm md:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to={slide.primaryCta.to}>{slide.primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              {i === 0 ? <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-5 md:px-8 py-5 md:py-6 text-sm md:text-lg transition-all duration-300"><a href={slide.secondaryCta.to} target="_blank" rel="noopener noreferrer">{slide.secondaryCta.label} <ArrowRight className="ml-2 h-4 w-4" /></a></Button> :
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg transition-all duration-300"
                >
                  <Link to={slide.secondaryCta.to}>{slide.secondaryCta.label}</Link>
                </Button>
              }
            </div>
            {i === 0 && <img src={slide.image} alt={slide.alt} loading="eager" decoding="async" className="lg:hidden self-center w-full h-[170px] sm:h-[230px] md:h-[280px] object-contain mt-4 drop-shadow-[0_12px_12px_hsl(var(--primary-dark)/0.55)]" />}
          </div>
        ) : null)}

        <div className="flex gap-2 relative z-20 justify-center mt-0 md:mt-6 pb-2">
          <Button type="button" variant="ghost" size="icon" aria-label={paused ? "Resume slideshow" : "Pause slideshow"} onClick={() => setPaused((value) => !value)} className="min-h-11 min-w-11 hover:bg-primary-foreground/10">
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </Button>
          {slides.map((_, i) => (
            <Button
              key={i}
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}: ${slides[i].titleTop}`}
              aria-current={i === active ? "true" : undefined}
              className="min-h-11 min-w-11 hover:bg-primary-foreground/10"
            ><span className={`block h-2 rounded-full transition-all duration-300 ${i === active ? "w-7 bg-accent" : "w-2 bg-primary-foreground/50"}`} /></Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
