import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Download,
  ArrowRight,
  Check,
  Monitor,
  Cpu,
  Volume2,
  Wifi,
  Brain,
  Presentation,
  PenTool,
  Users,
  Shield,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroEyerisA10 from "@/assets/hero-eyeris-a10.jpg";
import datasheet from "@/assets/eyeris-a10-datasheet.pdf.asset.json";

const highlights = [
  { icon: Cpu, title: "Android 14", desc: "Octa-Core processor for fluid performance" },
  { icon: Volume2, title: "Dual 20W Speakers", desc: "Room-filling, crisp classroom audio" },
  { icon: Monitor, title: "4K Ultra HD IPS", desc: "3840×2160 @ 60Hz, 1.07B colors, 179° viewing angle" },
  { icon: Shield, title: "Toughened Glass", desc: "3.0mm Mohs Level 9 anti-glare matte finish" },
  { icon: Wifi, title: "Wireless Casting", desc: "Native AirPlay & MiraCast, up to 4 devices" },
  { icon: Zap, title: "Optical Touch", desc: "Edge optics for precision, durability and speed" },
];

const aiFeatures = [
  "AI Lesson Plan Creator",
  "AI Quiz Generator",
  "AI PPT Creator (in 10 seconds)",
  "AI Image Creator",
  "PDF Summariser & Chat with PDF",
  "AI on YouTube videos",
  "Content in 80+ languages",
  "Bright AI Agent for live content",
];

const teachingTools = [
  "Infinite Canvas Whiteboard",
  "Smart Draw & AI Shape Recognition",
  "Geometry Tools (Ruler, Compass, Protractor)",
  "Fiducial Polling & Live Quiz",
  "PhET Simulations & Bright 3D",
  "Screen Recording & AI Notes",
  "Spotlight & Screen Curtain",
  "Active Learning & Live Class",
];

const sizes = ["65\"", "75\"", "86\"", "98\""];

const specs = [
  { label: "Display", value: "Ultra HD IPS LCD A+ • 3840×2160 @ 60Hz • HDR" },
  { label: "Brightness", value: "450 nits (Typ.)" },
  { label: "Contrast", value: "1.07 Billion colors • Dynamic 100,000:1" },
  { label: "LED Lifespan", value: "≥ 50,000 Hrs" },
  { label: "Surface", value: "3.0mm Toughened Glass, Mohs Level 9, Matte" },
  { label: "Operating System", value: "Android 14, Octa-Core processor" },
  { label: "Audio", value: "Dual 20W speakers" },
  { label: "Connectivity", value: "Wi-Fi, Bluetooth, HDMI, USB, RJ45, VGA" },
  { label: "OPS (Optional)", value: "Core i5 / i7, up to 16GB RAM, 512GB SSD" },
  { label: "Compliance", value: "BIS, STQC (ERTL), CE, FCC, RoHS" },
  { label: "VESA Mount", value: "65\":500×400 • 75\":600×400 • 86\":800×400 • 98\":1000×400" },
  { label: "In the Box", value: "2× Antenna, Remote, Power Cable, USB Touch & HDMI Cable, Wall Mount" },
];

const InteractivePanel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EyeRIS A10 GenAI Interactive Flat Panel | ViaNova Industrial Solutions</title>
        <meta
          name="description"
          content="EyeRIS A10 — Industry's first GenAI powered interactive flat panel with Bright AI, optical touch, 4K UHD display and NEP 2020 compliance. 65\"/75\"/86\"/98\" sizes. Download the datasheet."
        />
        <link rel="canonical" href="https://vianovaindustrial.com/interactive-panel" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-hero">
        <img
          src={heroEyerisA10}
          alt="EyeRIS A10 GenAI powered interactive flat panel for smart classrooms"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 text-primary-foreground py-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">
              Industry's First GenAI Powered Interactive Flat Panel
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight max-w-4xl">
            EyeRIS A10.
            <span className="block mt-2 text-accent">Powered by Bright AI.</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mb-8">
            Optical-touch interactive flat panel with AI lesson, quiz and PPT generation —
            engineered for NEP 2020 compliant smart classrooms, training rooms and modern
            boardrooms. Available in 65", 75", 86" and 98".
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={datasheet.url} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Datasheet (PDF)
              </Button>
            </a>
            <Link to="/inquiry">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg"
              >
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 mt-10">
            {sizes.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm font-semibold"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Built for the AI-Powered Classroom
          </h2>
          <p className="text-lg text-muted-foreground">
            EyeRIS A10 brings together advanced optical touch, true 4K visuals and Bright AI —
            transforming how teachers create, present and engage.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <Card key={h.title} className="border-border hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">{h.title}</h3>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-accent font-semibold mb-3">
                <Brain className="w-5 h-5" />
                Bright AI Agent
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Industry's First AI-Powered Smart Board Application
              </h2>
              <p className="text-muted-foreground mb-6">
                Generate lessons, quizzes and summaries instantly. Apply AI to PDFs and YouTube
                videos, extract key points and translate content — all from the board.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {aiFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="border-border">
              <CardContent className="p-8">
                <Presentation className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  AI-Powered Presentations in 10 Seconds
                </h3>
                <p className="text-muted-foreground mb-4">
                  Type a topic, get an engaging, visually appealing presentation instantly.
                  Teachers focus on delivery — the panel takes care of the prep.
                </p>
                <div className="rounded-lg bg-primary/5 border border-primary/10 p-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Includes
                  </div>
                  <div className="text-sm text-foreground">
                    Lesson Plan • Quiz • Images • Videos • Assignment
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Tools */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-secondary font-semibold mb-3">
            <PenTool className="w-5 h-5" />
            Collaborative Learning
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            The Most Advanced Digital Teaching Tools
          </h2>
          <p className="text-lg text-muted-foreground">
            A revolutionary digital whiteboard integrating creative, focus and presentation tools
            with cloud search and Bright AI for instant content display.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {teachingTools.map((t) => (
            <div
              key={t}
              className="px-4 py-3 rounded-lg border border-border bg-card text-sm text-foreground hover:border-primary/40 hover:shadow-sm transition-all"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Touch tech comparison */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Optical Touch vs Traditional IR Panels
            </h2>
            <p className="text-lg text-muted-foreground">
              Why EyeRIS A10's optical touch engine outperforms legacy infrared boards.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto bg-card border border-border rounded-xl overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="text-left p-4">Feature</th>
                  <th className="p-4">Typical IR Panels</th>
                  <th className="p-4">EyeRIS A10</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  "Durability",
                  "High Accuracy",
                  "Accurate Touch Recognition",
                  "Response Time",
                  "Narrow Bezel",
                ].map((row, i) => (
                  <tr key={row} className={i % 2 === 0 ? "bg-muted/20" : ""}>
                    <td className="p-4 font-medium text-foreground">{row}</td>
                    <td className="p-4 text-center text-destructive">✕</td>
                    <td className="p-4 text-center text-secondary">
                      <Check className="w-5 h-5 inline" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            System Specifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Full technical specifications for EyeRIS A10. For complete details and OPS options,
            download the datasheet.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden">
          {specs.map((s) => (
            <div key={s.label} className="bg-card p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                {s.label}
              </div>
              <div className="text-sm text-foreground">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href={datasheet.url} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 h-5 w-5" />
              Download Full Datasheet
            </Button>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-12 h-12 text-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bring EyeRIS A10 to Your Classroom or Boardroom
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get a tailored quote with installation, integration and training. Our team handles
            end-to-end deployment across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/inquiry">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-lg"
              >
                Enquire Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href={datasheet.url} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Datasheet
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteractivePanel;
