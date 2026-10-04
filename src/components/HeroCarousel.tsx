import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTestMeasurement from "@/assets/hero-test-measurement.jpg";
import heroEyerisA10 from "@/assets/hero-eyeris-a10.jpg";
import owonMTQHero from "@/assets/owon-mtq-hero.jpg.asset.json";
import micsigOscilloscope from "@/assets/micsig-mho6-oscilloscope.png.asset.json";

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
    image: micsigOscilloscope.url,
    alt: "Micsig high-resolution oscilloscope with an eight-channel waveform display",
    badge: "ViaNova × Micsig · Authorized Distributor",
    titleTop: "Micsig.",
    titleBottom: "A new signal in precision.",
    description: "Meet Micsig at ViaNova. Discover high-resolution oscilloscopes and measurement solutions, backed by local guidance for your next project.",
    primaryCta: { label: "Request a Micsig Quote", to: "/inquiry?product=Micsig%20oscilloscopes" },
    secondaryCta: { label: "Explore Micsig", to: "https://www.micsig.com/" },
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

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative min-h-[680px] flex items-center justify-center overflow-hidden bg-primary-dark"
      aria-label="Featured Micsig oscilloscopes, test instruments, and interactive displays"
    >
      <div className="absolute inset-0 bg-gradient-hero" />

      {slides.map((slide, i) => (
        i === 0 ? (
          <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`} aria-hidden="true">
            <div className="absolute right-[6%] top-1/3 w-[480px] h-[480px] rounded-full bg-secondary/25 blur-[130px]" />
            <div className="absolute left-[-8%] bottom-[-15%] w-[360px] h-[360px] rounded-full bg-accent/15 blur-[110px]" />
            <img src={slide.image} alt="" loading="eager" decoding="async" className="hidden md:block absolute w-[min(94vw,780px)] max-h-[75%] object-contain right-[-4%] bottom-16 drop-shadow-2xl motion-safe:animate-fade-in" />
          </div>
        ) : (
          <img
            key={i}
            src={slide.image}
            alt={slide.alt}
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === active ? "opacity-25" : "opacity-0"
            }`}
          />
        )
      ))}

      <div className={`relative z-10 container mx-auto px-4 text-primary-foreground ${active === 0 ? "text-left" : "text-center"}`}>
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`transition-opacity duration-700 ${i === 0 ? "min-h-[680px] flex flex-col justify-start md:justify-center pt-20 md:pt-20 pb-5 md:pb-24" : ""} ${
              i === active ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
            aria-hidden={i !== active}
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-8 text-sm font-medium ${i === 0 ? "self-start" : "mx-auto"}`}>
              <Sparkles className="w-4 h-4 text-accent" />
              <span>{slide.badge}</span>
            </div>
            {i === active ? (
              <h1 className={`${i === 0 ? "text-4xl md:text-7xl max-w-2xl" : "text-5xl md:text-7xl"} font-bold mb-6 leading-tight`}>
                {slide.titleTop}
                <span className="block mt-2 text-accent">{slide.titleBottom}</span>
              </h1>
            ) : (
              <p className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {slide.titleTop}
                <span className="block mt-2 text-accent">{slide.titleBottom}</span>
              </p>
            )}

            <p className={`text-lg md:text-2xl mb-8 text-primary-foreground/80 ${i === 0 ? "max-w-xl" : "max-w-3xl mx-auto"}`}>
              {slide.description}
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 ${i === 0 ? "items-start" : "justify-center"}`}>
              <Link to={slide.primaryCta.to}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              {i === 0 ? <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg transition-all duration-300"><a href={slide.secondaryCta.to} target="_blank" rel="noopener noreferrer">{slide.secondaryCta.label} <ArrowRight className="ml-2 h-5 w-5" /></a></Button> : <Link to={slide.secondaryCta.to}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg transition-all duration-300"
                >
                  {slide.secondaryCta.label}
                </Button>
              </Link>}
            </div>
            {i === 0 && <img src={slide.image} alt={slide.alt} loading="eager" decoding="async" className="md:hidden self-center w-[85%] h-[170px] object-contain mt-5 drop-shadow-2xl" />}
          </div>
        ))}

        <div className="flex gap-2 relative z-20 justify-center mt-12">
          {slides.map((_, i) => (
            <Button
              key={i}
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              className="h-9 w-9 hover:bg-primary-foreground/10"
            ><span className={`block h-2 rounded-full transition-all duration-300 ${i === active ? "w-7 bg-accent" : "w-2 bg-primary-foreground/50"}`} /></Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
