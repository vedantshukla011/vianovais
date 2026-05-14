import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Gauge,
  Cpu,
  Network,
  BarChart3,
  Lightbulb,
  Zap,
  Plug,
  BatteryCharging,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react";

const features = [
  { icon: Gauge, text: "High-precision measurement of voltage, current & efficiency" },
  { icon: Cpu, text: "Automated testing reduces manual effort and operator error" },
  { icon: Network, text: "SCPI & PLC integration ready for production lines" },
  { icon: BarChart3, text: "Real-time analytics, traceability & reporting" },
];

const applications = [
  {
    icon: Lightbulb,
    title: "LED Driver Testing",
    desc: "Flicker analysis, efficiency mapping and output current validation across the full operating range.",
  },
  {
    icon: Zap,
    title: "SMPS Testing",
    desc: "Ripple, line/load regulation, transient response and thermal performance characterisation.",
  },
  {
    icon: Plug,
    title: "Power Adapter Testing",
    desc: "Safety, no-load power, output stability and protection (OVP/OCP/SCP) verification.",
  },
  {
    icon: BatteryCharging,
    title: "UPS Testing",
    desc: "Backup runtime, transfer-time analysis, switching behaviour and battery health diagnostics.",
  },
];

const benefits = [
  "Reduce testing time by up to 60% with parallel test sequencing",
  "Improve product reliability with repeatable, traceable measurements",
  "Ensure global compliance with IEC, EN and BIS standards",
  "Scale seamlessly from R&D benches to high-volume production",
];

const BlogDriverTesting = () => {
  const canonical =
    "https://vianovaindustrial.solutions/blog/driver-testing-machine";

  return (
    <>
      <Helmet>
        <title>Driver Testing Machine for LED, SMPS, Adapters & UPS</title>
        <meta
          name="description"
          content="Automated driver testing machine for LED drivers, SMPS, power adapters and UPS — high precision, SCPI/PLC integration and full traceability."
        />
        <meta
          name="keywords"
          content="Driver Testing Machine, LED Driver Testing, SMPS Testing Equipment, Power Adapter Testing, UPS Testing System, Power Electronics Testing"
        />
        <meta property="og:title" content="Driver Testing Machine for Power Electronics" />
        <meta
          property="og:description"
          content="Automated testing for LED drivers, SMPS, adapters & UPS systems."
        />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Driver Testing Machine for LED Drivers, SMPS, Adapters & UPS",
          description:
            "Automated testing system for LED drivers, SMPS, adapters, and UPS systems.",
          author: { "@type": "Organization", name: "ViaNova Industrial Solutions" },
          publisher: { "@type": "Organization", name: "ViaNova Industrial Solutions" },
          mainEntityOfPage: canonical,
          datePublished: "2026-04-23",
        })}</script>
      </Helmet>

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-5">
              Power Electronics Testing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Driver Testing Machine for Power Electronics
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-4">
              Precision testing for LED Drivers, SMPS, Power Adapters & UPS Systems
            </p>
            <div className="flex items-center justify-center gap-5 text-sm text-primary-foreground/70 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> April 23, 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 6 min read
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/inquiry">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg">
                  Request Demo
                </Button>
              </Link>
              <Link to="/inquiry">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-lg text-foreground/80 leading-relaxed">
              In modern power electronics manufacturing, validating every driver, converter
              and power supply is non-negotiable. A dedicated <strong>driver testing
              machine</strong> automates the entire validation cycle — from
              parametric measurement to compliance reporting — so engineering and
              quality teams can ship reliable products faster. This guide covers what
              a driver testing system does, where it fits in your workflow, and how to
              choose the right configuration for LED drivers, SMPS, adapters and UPS
              systems.
            </p>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose Our Solution
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f) => (
                <div
                  key={f.text}
                  className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Applications
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A single platform that adapts to your full power-electronics product
              portfolio.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {applications.map((a) => (
                <article
                  key={a.title}
                  className="bg-card border border-border rounded-2xl p-7 shadow-elegant hover:shadow-hover transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                      <a.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{a.title}</h3>
                      <p className="text-foreground/70">{a.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
              Key Benefits
            </h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 shadow-elegant"
                >
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to upgrade your test line?
            </h2>
            <p className="text-primary-foreground/85 mb-8">
              Talk to our engineers about a driver testing machine configured for your
              products, throughput and compliance targets.
            </p>
            <Link to="/inquiry">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg">
                Request a Demo / Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogDriverTesting;
