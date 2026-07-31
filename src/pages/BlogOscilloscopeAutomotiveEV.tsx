import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Battery,
  Car,
  Cpu,
  Zap,
  Radio,
  Waves,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Clock,
  Gauge,
  Settings,
} from "lucide-react";

const measurableParams = [
  "Voltage",
  "Frequency",
  "Period",
  "Rise and fall time",
  "Pulse width",
  "Duty cycle",
  "Propagation delay",
  "Noise",
  "Overshoot and undershoot",
  "Ripple",
  "Jitter",
  "Signal integrity",
  "Switching transients",
];

const essentialFor = [
  "ECU development",
  "Battery Management System (BMS) validation",
  "Motor controller testing",
  "Inverter debugging",
  "DC-DC converter analysis",
  "On-board charger (OBC) testing",
  "CAN, CAN FD, LIN, FlexRay & Automotive Ethernet debugging",
  "Power electronics validation",
  "EMI/EMC troubleshooting",
  "Sensor verification",
  "Functional safety testing",
];

const applications = [
  {
    icon: Cpu,
    title: "1. ECU Debugging",
    points: [
      "Sensor input signals",
      "Actuator outputs",
      "PWM control signals",
      "Timing synchronisation",
      "Voltage stability",
      "Boot-up sequences",
    ],
  },
  {
    icon: Battery,
    title: "2. Battery Management System (BMS) Testing",
    points: [
      "Cell balancing signals",
      "MOSFET gate drive waveforms",
      "Current sensing circuits",
      "Voltage monitoring",
      "Temperature sensor outputs",
      "Communication between BMS modules",
    ],
  },
  {
    icon: Zap,
    title: "3. Inverter & Motor Drive Analysis",
    points: [
      "PWM waveforms",
      "Gate drive timing",
      "Dead-time verification",
      "Switching losses",
      "Phase voltage & current waveforms",
      "Harmonic content",
    ],
  },
  {
    icon: Settings,
    title: "4. On-Board Charger & DC-DC Converter Testing",
    points: [
      "Switching frequency",
      "Ripple voltage",
      "Efficiency",
      "Start-up behaviour",
      "Control loop stability",
      "MOSFET & transformer waveforms",
    ],
  },
  {
    icon: Radio,
    title: "5. Automotive Communication Bus Analysis",
    points: [
      "CAN & CAN FD",
      "LIN and FlexRay",
      "Automotive Ethernet",
      "SPI, I²C, UART",
      "SENT and PSI5",
      "Protocol-aware triggering",
    ],
  },
  {
    icon: Waves,
    title: "6. EMI & EMC Investigation",
    points: [
      "Switching noise",
      "Ground bounce",
      "Ringing",
      "Crosstalk",
      "Radiated interference",
      "Conducted emissions",
    ],
  },
];

const specs = [
  "Bandwidth",
  "Sample rate",
  "Memory depth",
  "Number of channels",
  "Waveform update rate",
  "Trigger capabilities",
  "Protocol decoding",
  "FFT analysis",
  "Mixed Signal (MSO) capability",
  "Touchscreen interface",
  "Connectivity (USB, LAN, HDMI, Wi-Fi)",
];

const bandwidthTable = [
  { app: "Education", bw: "70–100 MHz" },
  { app: "Embedded Systems", bw: "100–200 MHz" },
  { app: "Automotive ECU", bw: "200–500 MHz" },
  { app: "Power Electronics", bw: "350–500 MHz" },
  { app: "EV Inverters", bw: "500 MHz – 1 GHz" },
  { app: "High-Speed Digital", bw: "1 GHz and above" },
];

const probes = [
  "Passive probes",
  "Active probes",
  "Differential high-voltage probes",
  "Current probes",
  "High-frequency probes",
  "Logic probes",
  "CAN/LIN trigger probes",
];

const brands = [
  {
    name: "Keysight Technologies",
    blurb:
      "One of the world's leading manufacturers of high-performance oscilloscopes, widely used in semiconductor research, aerospace, defence, automotive electronics and advanced R&D.",
    models: [
      "InfiniiVision HD3 Series",
      "InfiniiVision 3000G X-Series",
      "InfiniiVision 4000G X-Series",
      "Infiniium MXR Series",
      "Infiniium UXR Series",
    ],
    best: "Automotive validation, EV power electronics, high-speed digital design, compliance testing.",
  },
  {
    name: "Tektronix",
    blurb:
      "Renowned for advanced triggering, excellent user interfaces, protocol analysis and dedicated automotive debugging tools.",
    models: [
      "2 Series MSO",
      "4 Series B MSO",
      "5 Series B MSO",
      "6 Series B MSO",
      "TBS2000B",
    ],
    best: "Embedded systems, automotive electronics, education, industrial R&D.",
  },
  {
    name: "Yokogawa",
    blurb:
      "Specialists in precision power analysis and mixed-signal oscilloscopes for motor drives, inverters, renewable energy and EV development.",
    models: ["DLM3000 Series", "DLM5000HD Series", "DL950 ScopeCorder"],
    best: "Motor analysis, inverter testing, long-duration waveform recording.",
  },
  {
    name: "Rigol",
    blurb:
      "Exceptional value with powerful debugging features suitable for engineering laboratories and manufacturing lines.",
    models: [
      "DHO800 Series",
      "DHO900 Series",
      "MSO5000 Series",
      "MSO8000 Series",
      "DS70000 Series",
    ],
    best: "Electronics manufacturing, universities, embedded design.",
  },
  {
    name: "Siglent",
    blurb:
      "High bandwidth, deep memory and protocol analysis at highly competitive prices.",
    models: ["SDS1000X HD", "SDS3000X HD", "SDS5000X HD", "SDS6000L"],
    best: "Automotive development, industrial automation, R&D.",
  },
  {
    name: "UNI-T",
    blurb:
      "Cost-effective oscilloscopes suitable for laboratories, maintenance teams and educational institutions.",
    models: ["UPO7000 Series", "UPO3000 Series", "UTD2000 Series"],
    best: "General electronics, education, service centres.",
  },
  {
    name: "Hantek",
    blurb:
      "Affordable bench and PC-based oscilloscopes for repair, troubleshooting and training.",
    models: ["DSO2D15", "DSO2C15", "DSO5000 Series"],
    best: "Electronics servicing, training labs, maintenance.",
  },
  {
    name: "OWON",
    blurb:
      "Compact oscilloscopes with modern touch interfaces for general-purpose and portable testing.",
    models: ["XDS Series", "XDG Series", "VDS USB Oscilloscopes"],
    best: "Universities, repair labs, portable testing.",
  },
  {
    name: "GW Instek",
    blurb:
      "Dependable oscilloscopes featuring comprehensive measurement functions and excellent reliability.",
    models: [
      "GDS-3000A Series",
      "GDS-2000A Series",
      "MDO-2000E Series",
      "GDS-1000B Series",
    ],
    best: "Industrial maintenance, education, manufacturing, embedded development.",
  },
];

const hotSelling = [
  {
    model: "UNI-T UPO1084HD",
    desc: "12-bit high-resolution oscilloscope, 80 MHz, 4 channels",
    image:
      "https://www.toolworld.in/storage/media/product/1757322598.jpg",
  },
  {
    model: "UNI-T UTD2202CEX+",
    desc: "Digital storage oscilloscope, 200 MHz, 2 channels",
    image:
      "https://www.toolworld.in/storage/media/product/1641670560.jpg",
  },
  {
    model: "Siglent SDS1202",
    desc: "Digital storage oscilloscope, 200 MHz, dual channel",
    image:
      "https://www.toolworld.in/storage/media/product/SDS1202-1.png",
  },
  {
    model: "Siglent SDS1104",
    desc: "Digital oscilloscope, 100 MHz, 4 channels",
    image:
      "https://www.toolworld.in/storage/media/product/1670140554.jpg",
  },
  {
    model: "Hantek DSO2D10",
    desc: "Oscilloscope with built-in generator, 100 MHz, 2 channels",
    image:
      "https://www.toolworld.in/storage/media/product/1723544076.jpg",
  },
  {
    model: "Hantek DSO2C10",
    desc: "Entry-level DSO, 100 MHz, 2 channels with dual probes",
    image:
      "https://www.toolworld.in/storage/media/product/1715594654.jpg",
  },
  {
    model: "OWON XDS3104E",
    desc: "Digital storage oscilloscope, 100 MHz, 4 channels",
    image:
      "https://www.toolworld.in/storage/media/product/XDS3104E-1.jpg",
  },
  {
    model: "OWON XDS3302",
    desc: "High-performance digital oscilloscope, 300 MHz",
    image:
      "https://www.toolworld.in/storage/media/product/1688460397.jpg",
  },
  {
    model: "OWON HDS2202S",
    desc: "Handheld 3-in-1 oscilloscope, 200 MHz — ideal for field & automotive work",
    image:
      "https://www.toolworld.in/storage/media/product/1670062398.png",
  },
  {
    model: "UNI-T UPO1104",
    desc: "Phosphor oscilloscope, 100 MHz, 4 channels",
    image:
      "https://www.toolworld.in/storage/media/product/1695807351.jpg",
  },
  {
    model: "Rigol MSO2102",
    desc: "Digital phosphor mixed-signal oscilloscope, 100 MHz, 2 channels",
    image:
      "https://www.toolworld.in/storage/media/product/1745994562.jpg",
  },
  {
    model: "Atten ADS814A",
    desc: "12-bit digital oscilloscope, 100 MHz, 4 channels",
    image:
      "https://www.toolworld.in/storage/media/product/1753952632.jpg",
  },
];

const services = [
  "Application engineering support",
  "Product demonstrations",
  "Oscilloscope selection assistance",
  "Automotive and EV testing consultation",
  "Probe recommendations",
  "LabVIEW and SCPI integration support",
  "Installation and commissioning",
  "Calibration guidance",
  "After-sales technical support",
];

const faqs = [
  {
    question: "What bandwidth is suitable for automotive debugging?",
    answer:
      "For most automotive ECU and embedded applications, 200 MHz to 500 MHz is sufficient. EV inverter and high-speed communication analysis often benefits from 500 MHz to 1 GHz or higher.",
  },
  {
    question: "Can an oscilloscope decode CAN and LIN signals?",
    answer:
      "Yes. Many modern oscilloscopes support CAN, CAN FD, LIN, FlexRay, SENT, SPI, I²C, UART and Automotive Ethernet decoding with optional software licences.",
  },
  {
    question: "Why is a differential probe required in EV testing?",
    answer:
      "High-voltage EV systems cannot be safely measured using standard passive probes. Differential probes provide isolated measurements and improved operator safety.",
  },
  {
    question: "Which oscilloscope is best for an engineering college?",
    answer:
      "Models in the 100–200 MHz range from Rigol, Siglent, UNI-T, GW Instek or Tektronix are excellent for teaching electronics, embedded systems and communications.",
  },
  {
    question: "Which oscilloscope is recommended for EV power electronics?",
    answer:
      "High-bandwidth instruments from Keysight, Tektronix, Yokogawa, Rigol and Siglent paired with differential voltage probes and current probes are commonly used for inverter, charger and motor-drive analysis.",
  },
];

const BlogOscilloscopeAutomotiveEV = () => {
  const canonical =
    "https://vianovaindustrial.solutions/blog/oscilloscope-guide-automotive-ev-manufacturing";

  return (
    <>
      <Helmet>
        <title>Oscilloscope Guide 2026 | Automotive & EV Debugging</title>
        <meta
          name="description"
          content="How oscilloscopes are used in automotive and EV manufacturing — ECU debugging, BMS testing, inverter analysis, CAN bus decoding and power electronics."
        />
        <meta
          name="keywords"
          content="Oscilloscope, Digital Storage Oscilloscope, Automotive Oscilloscope, EV Oscilloscope, Buy Oscilloscope India, Oscilloscope Supplier India, ECU Debugging, CAN Bus Oscilloscope, BMS Testing, EV Inverter Testing, Automotive Electronics Testing, Mixed Signal Oscilloscope, Keysight Oscilloscope, Tektronix Oscilloscope, Yokogawa Oscilloscope, Rigol Oscilloscope, Siglent Oscilloscope, UNI-T Oscilloscope, Hantek Oscilloscope, OWON Oscilloscope, GW Instek Oscilloscope, Oscilloscope for Embedded Systems, Oscilloscope for Power Electronics"
        />
        <meta
          property="og:title"
          content="Oscilloscope Guide 2026 | Automotive & EV Debugging"
        />
        <meta
          property="og:description"
          content="ECU debugging, BMS validation, inverter analysis and CAN bus decoding — the complete oscilloscope guide for automotive and EV engineering teams."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Oscilloscopes: The Ultimate Guide to Signal Analysis and Debugging in Automotive & Electric Vehicle (EV) Manufacturing",
            description:
              "How modern oscilloscopes are transforming automotive electronics, EV power systems, ECU validation and embedded system debugging.",
            author: {
              "@type": "Organization",
              name: "ViaNova Industrial Solutions",
            },
            publisher: {
              "@type": "Organization",
              name: "ViaNova Industrial Solutions",
            },
            mainEntityOfPage: canonical,
            datePublished: "2026-07-31",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          })}
        </script>
      </Helmet>

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-5">
              Automotive & EV Test and Measurement
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Oscilloscopes for Automotive & EV Manufacturing
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-4">
              Signal analysis and debugging for ECUs, BMS, inverters, on-board
              chargers and automotive communication networks
            </p>
            <div className="flex items-center justify-center gap-5 text-sm text-primary-foreground/70 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> July 31, 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 12 min read
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/buy-online?category=Oscilloscopes">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg"
                >
                  Shop Oscilloscopes
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
          <div className="container mx-auto px-4 max-w-4xl space-y-5">
            <p className="text-lg text-foreground/80 leading-relaxed">
              The modern automobile has evolved into a sophisticated electronic
              system on wheels. A premium electric vehicle may contain more than
              100 Electronic Control Units (ECUs), hundreds of sensors,
              high-speed communication networks, advanced power electronics,
              battery management systems (BMS) and embedded controllers.
              Ensuring that all these systems communicate reliably requires one
              indispensable instrument — the{" "}
              <strong>Digital Storage Oscilloscope (DSO)</strong>.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Unlike a digital multimeter, which only measures static electrical
              values, an oscilloscope allows engineers to visualise electrical
              signals in real time. It reveals transient events, glitches,
              timing issues, switching noise, communication errors, start-up
              anomalies and waveform distortions that cannot be detected using
              conventional instruments.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At ViaNova Industrial Solutions, we supply professional
              oscilloscopes from globally trusted manufacturers including
              Keysight Technologies, Tektronix, Yokogawa, Rigol, Siglent, UNI-T,
              Hantek, OWON and GW Instek — helping customers across automotive,
              EV, industrial automation, aerospace, electronics manufacturing,
              research laboratories and educational institutions select the
              right instrument for their application.
            </p>
          </div>
        </section>

        {/* What is an oscilloscope */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What is an Oscilloscope?
            </h2>
            <p className="text-foreground/75 mb-8 max-w-3xl">
              An oscilloscope is an electronic test instrument that graphically
              displays voltage as a function of time, allowing engineers to
              observe how electrical signals behave under real operating
              conditions. Modern oscilloscopes also decode digital communication
              protocols and perform mathematical analysis, FFT spectrum
              analysis, serial bus decoding and automated measurements.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {measurableParams.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 shadow-elegant"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why essential */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Oscilloscopes are Essential in Automotive & EV Manufacturing
            </h2>
            <p className="text-foreground/75 mb-8 max-w-3xl">
              Today's vehicles rely heavily on electronics for safety,
              efficiency, connectivity and performance. Oscilloscopes enable
              engineers to verify that these electronic systems operate
              correctly under all conditions.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {essentialFor.map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-2 bg-card border border-border rounded-xl px-4 py-3 shadow-elegant"
                >
                  <Car className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Key Applications in Automotive & EV Manufacturing
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {applications.map((a) => (
                <article
                  key={a.title}
                  className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
                    <a.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {a.title}
                  </h3>
                  <ul className="space-y-2">
                    {a.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-foreground/70 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Specs + bandwidth */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Important Oscilloscope Specifications
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-2xl p-7 shadow-elegant">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    What to Evaluate
                  </h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {specs.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-foreground/75 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-7 shadow-elegant">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Recommended Bandwidth
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-semibold text-foreground">
                          Application
                        </th>
                        <th className="text-left py-2 font-semibold text-foreground">
                          Suggested Bandwidth
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bandwidthTable.map((r) => (
                        <tr key={r.app} className="border-b border-border/60">
                          <td className="py-2.5 text-foreground/80">{r.app}</td>
                          <td className="py-2.5 text-foreground/70">{r.bw}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-card border border-border rounded-2xl p-7 shadow-elegant">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Oscilloscope Probes for Automotive Applications
              </h3>
              <p className="text-foreground/70 text-sm mb-5">
                Selecting the right probe is just as important as selecting the
                oscilloscope.
              </p>
              <div className="flex flex-wrap gap-2">
                {probes.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 rounded-full bg-muted text-foreground/80 text-sm border border-border"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Hot selling models */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Hot-Selling Oscilloscope Models
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Popular bench, handheld and mixed-signal oscilloscopes supplied by
              ViaNova Industrial Solutions across India.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {hotSelling.map((p) => (
                <article
                  key={p.model}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant hover:shadow-hover transition-all flex flex-col"
                >
                  <div className="aspect-square bg-white flex items-center justify-center p-4">
                    <img
                      src={p.image}
                      alt={`${p.model} oscilloscope — ${p.desc}`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-bold text-foreground text-sm mb-1">
                      {p.model}
                    </h3>
                    <p className="text-foreground/65 text-xs leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/buy-online?category=Oscilloscopes">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold"
                >
                  View All Oscilloscopes
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Leading Oscilloscope Brands at ViaNova Industrial Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {brands.map((b) => (
                <article
                  key={b.name}
                  className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-all"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {b.name}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {b.blurb}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary mb-2">
                    Popular Models
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {b.models.map((m) => (
                      <li
                        key={m}
                        className="flex items-start gap-2 text-foreground/75 text-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-foreground/65 text-xs">
                    <span className="font-semibold text-foreground">
                      Best for:
                    </span>{" "}
                    {b.best}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why ViaNova */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose ViaNova Industrial Solutions?
            </h2>
            <p className="text-foreground/75 mb-8 max-w-3xl">
              Beyond supplying oscilloscopes, we help customers choose the right
              instrument based on bandwidth, protocol requirements, debugging
              needs and budget — serving automotive OEMs, Tier-1 suppliers, EV
              manufacturers, electronics manufacturers, R&D laboratories,
              universities, defence organisations and industrial automation
              companies across India.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 bg-card border border-border rounded-xl px-4 py-3 shadow-elegant"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-card border border-border rounded-xl p-6 shadow-elegant"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-foreground/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion + CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Build a future-ready test & measurement laboratory
            </h2>
            <p className="text-primary-foreground/85 mb-8">
              From an entry-level oscilloscope for an educational laboratory to
              a premium mixed-signal oscilloscope for automotive and EV R&D, our
              team can help you identify the ideal solution — with demo,
              training and after-sales support.
            </p>
            <Link to="/inquiry">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg"
              >
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

export default BlogOscilloscopeAutomotiveEV;
