import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Gauge,
  Car,
  Cpu,
  Zap,
  Plug,
  Settings,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react";

const useCases = [
  {
    icon: Car,
    title: "CAN / LIN Bus Debugging",
    desc: "Decode CAN-H/CAN-L waveforms with a 4-channel oscilloscope to spot bit-stuffing errors, missing ACKs, dominant/recessive voltage faults and bus loading issues.",
  },
  {
    icon: Zap,
    title: "Ignition & Injector Signals",
    desc: "Capture primary/secondary ignition coil waveforms and injector pulse-widths to diagnose misfires, weak coils, dwell-time issues and injector clogging.",
  },
  {
    icon: Cpu,
    title: "Sensor Validation",
    desc: "Verify crankshaft (CKP), camshaft (CMP), MAF, MAP, O2, knock and ABS wheel-speed sensor outputs against expected waveforms instead of trusting DTCs alone.",
  },
  {
    icon: Plug,
    title: "Parasitic Draw & Voltage Drop",
    desc: "Use a true-RMS multimeter in series (mA range) to hunt parasitic battery drain, and millivolt drop tests to find corroded grounds and bad connectors.",
  },
  {
    icon: Activity,
    title: "EV/HEV High-Voltage Systems",
    desc: "Probe inverter PWM, BMS communication and DC-DC converter rails with isolated/differential probes — never a standard probe — for safe HV diagnostics.",
  },
  {
    icon: Settings,
    title: "Actuator & PWM Loads",
    desc: "Measure duty cycle and frequency of fuel pumps, throttle bodies, cooling fans and solenoids to confirm ECU command vs. actuator response.",
  },
];

const oscopeSpecs = [
  "Bandwidth ≥ 100 MHz (200 MHz preferred for CAN-FD / FlexRay)",
  "4 analog channels — engine timing needs simultaneous CKP, CMP, injector & coil capture",
  "Built-in serial decode: CAN, CAN-FD, LIN, SENT, K-Line",
  "Deep memory (≥ 10 Mpts) for long single-shot drive cycles",
  "Battery / isolated operation for under-hood and road testing",
];

const multimeterSpecs = [
  "True-RMS for noisy PWM and inverter signals",
  "10 µA / mA range for parasitic draw measurements",
  "Min/Max/Avg recording to catch intermittent glitches",
  "CAT III 1000 V / CAT IV 600 V safety rating for EV work",
  "Low-impedance (LoZ) mode to eliminate ghost voltages",
];

const workflow = [
  "Read DTCs and freeze-frame data — but treat them as a hint, not a verdict.",
  "Confirm battery voltage (≥ 12.4 V resting) and charging system output with the DMM before any signal work.",
  "Voltage-drop test power and ground paths to the suspect module (target < 0.1 V drop per connection).",
  "Probe the sensor or actuator at the ECU connector with the oscilloscope to isolate wiring vs. component faults.",
  "Compare the captured waveform against a known-good reference for that vehicle.",
  "Document the waveform and measurement — repeatable evidence ends warranty disputes.",
];

const pitfalls = [
  "Using a standard scope probe on hybrid/EV HV systems — always use a properly rated differential probe.",
  "Back-probing connectors with oversized pins and damaging the seal.",
  "Trusting a DMM auto-range on fast PWM signals — use the scope instead.",
  "Skipping ground reference checks; a bad chassis ground mimics dozens of sensor faults.",
];

const BlogAutomotiveDebugging = () => {
  const canonical =
    "https://vianovaindustrial.solutions/blog/oscilloscope-multimeter-automotive-debugging";

  return (
    <>
      <Helmet>
        <title>How to Use an Oscilloscope & Multimeter for Automotive Debugging</title>
        <meta
          name="description"
          content="Step-by-step guide to using oscilloscopes and digital multimeters for automotive diagnostics — CAN bus decoding, sensor validation, parasitic draw, EV/HEV systems and more."
        />
        <meta
          name="keywords"
          content="oscilloscope for automotive diagnostics, automotive multimeter testing, CAN bus debugging oscilloscope, car sensor waveform analysis, parasitic draw test, EV diagnostics oscilloscope, automotive ECU debugging, ignition coil waveform, injector pulse measurement, true RMS automotive multimeter"
        />
        <meta property="og:title" content="Oscilloscope & Multimeter Guide for Automotive Debugging" />
        <meta
          property="og:description"
          content="Practical workflow for diagnosing CAN bus, sensors, ignition, injectors and EV systems with an oscilloscope and DMM."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "How to Use an Oscilloscope and Multimeter for Automotive Debugging",
          description:
            "Practical guide to oscilloscope and multimeter use for diagnosing CAN bus, sensors, ignition, injectors and EV systems.",
          author: { "@type": "Organization", name: "ViaNova Industrial Solutions" },
          publisher: { "@type": "Organization", name: "ViaNova Industrial Solutions" },
          mainEntityOfPage: canonical,
          datePublished: "2026-06-07",
        })}</script>
      </Helmet>

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-5">
              Automotive Test & Measurement
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Oscilloscope & Multimeter for Automotive Debugging
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-4">
              A practical workflow for diagnosing ICE, hybrid and EV systems beyond OBD-II codes
            </p>
            <div className="flex items-center justify-center gap-5 text-sm text-primary-foreground/70 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> June 7, 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 8 min read
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/products">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg">
                  Browse Oscilloscopes
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
              A scan tool tells you <em>what</em> the ECU thinks is wrong. An{" "}
              <strong>oscilloscope</strong> and a quality <strong>digital
              multimeter</strong> tell you <em>why</em>. Modern vehicles run dozens
              of CAN/LIN networks, high-voltage inverters and fast PWM actuators —
              the kind of signals that DTC-only diagnosis routinely gets wrong.
              This guide walks through how a workshop, R&D lab or fleet operator
              should combine a scope and DMM to debug ICE, hybrid and EV systems
              quickly and confidently.
            </p>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Where the Scope & DMM Beat the Scan Tool
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Six everyday diagnostic scenarios where waveform-level evidence saves hours of guesswork.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((u) => (
                <article
                  key={u.title}
                  className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
                    <u.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{u.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{u.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Specs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              What to Look For in the Instruments
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-7 shadow-elegant">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Oscilloscope</h3>
                </div>
                <ul className="space-y-3">
                  {oscopeSpecs.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-foreground/75 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-7 shadow-elegant">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Digital Multimeter</h3>
                </div>
                <ul className="space-y-3">
                  {multimeterSpecs.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-foreground/75 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
              A Repeatable Diagnostic Workflow
            </h2>
            <ol className="space-y-4">
              {workflow.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-elegant"
                >
                  <span className="w-9 h-9 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-foreground/80 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pitfalls */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
              Common Pitfalls to Avoid
            </h2>
            <ul className="space-y-4">
              {pitfalls.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 shadow-elegant"
                >
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need the right scope or DMM for your workshop or R&D lab?
            </h2>
            <p className="text-primary-foreground/85 mb-8">
              We supply automotive-grade oscilloscopes, true-RMS multimeters, isolated probes and complete diagnostic kits across India — with demo, training and after-sales support.
            </p>
            <Link to="/inquiry">
              <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogAutomotiveDebugging;
