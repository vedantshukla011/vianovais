import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTestMeasurement from "@/assets/hero-test-measurement.jpg";
import heroEyerisA10 from "@/assets/hero-eyeris-a10.jpg";

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
    image: heroTestMeasurement,
    alt: "Industrial test and measurement laboratory with oscilloscope, multimeter and precision instruments",
    badge: "Turnkey Test & Measurement Solutions Provider",
    titleTop: "One Partner.",
    titleBottom: "Every Measurement.",
    description:
      "End-to-end turnkey solutions in test, measurement and calibration — from instrument supply and complete lab setup to integration, training and after-sales support.",
    primaryCta: { label: "Request a Quote", to: "/inquiry" },
    secondaryCta: { label: "Explore Products", to: "/products" },
  },
  {
    image: heroEyerisA10,
    alt: "EyeRIS A10 GenAI powered interactive flat panel display for modern classrooms",
    badge: "Industry's First GenAI Powered Interactive Flat Panel",
    titleTop: "EyeRIS A10.",
    titleBottom: "Powered by Bright AI.",
    description:
      "Optical touch interactive flat panel with AI lesson, quiz and PPT generation — built for NEP 2020 compliant smart classrooms and modern boardrooms.",
    primaryCta: { label: "Enquire Now", to: "/inquiry" },
    secondaryCta: { label: "View Interactive Displays", to: "/products" },
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
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />

      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.image}
          alt={slide.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === active ? "opacity-25" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
            }`}
            aria-hidden={i !== active}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">{slide.badge}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {slide.titleTop}
              <span className="block mt-2 text-accent">{slide.titleBottom}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-primary-foreground/80 max-w-3xl mx-auto">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={slide.primaryCta.to}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {slide.primaryCta.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to={slide.secondaryCta.to}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg transition-all duration-300"
                >
                  {slide.secondaryCta.label}
                </Button>
              </Link>
            </div>
          </div>
        ))}

        <div className="flex justify-center gap-2 mt-12 relative z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-accent" : "w-2 bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
