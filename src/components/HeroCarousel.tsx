import { useEffect, useState } from "react";
import hantek from "@/assets/hero-hantek-battery.png.asset.json";
import unit from "@/assets/hero-unit-oscilloscope.jpg.asset.json";
import kiantech from "@/assets/hero-kiantech-fume.jpg.asset.json";

const SLIDES = [
  { src: hantek.url, alt: "Hantek HT2018B Battery Tester — 12V & 24V battery system testing" },
  { src: unit.url, alt: "UNI-T UPO1000HD Series high resolution oscilloscopes" },
  { src: kiantech.url, alt: "Kiantech fume extractors — silent, powerful and clean" },
];

const HeroCarousel = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-primary" aria-label="Featured products">
      <div className="relative w-full aspect-[1600/800] max-h-[80vh]">
        {SLIDES.map((s, idx) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-accent" : "w-2 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
