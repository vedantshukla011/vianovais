import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Check,
  Thermometer,
  Camera,
  ShieldCheck,
  Cpu,
  Palette,
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import utiImg from "@/assets/unit-uti260b.jpg.asset.json";

const HERO_IMAGE = utiImg.url;

const features = [
  { icon: Camera, title: "256 x 192 IR Resolution", desc: "Higher infrared resolution than comparable models in its class, with a 2.8\" TFT display (320 x 240 pixels) for crisp on-site viewing." },
  { icon: Thermometer, title: "Wide -20 °C to 550 °C Range", desc: "Measures from -20 °C to 550 °C (-4 °F to 1022 °F) with ±2 °C or ±2% accuracy — suited to HVAC, electrical and industrial inspection." },
  { icon: Palette, title: "7 Colour Palettes, 4 Image Modes", desc: "White hot, black hot, red hot, ironbow, lava, rainbow and rainbow HC, with thermal, visual, fusion and picture-in-picture display modes." },
  { icon: Cpu, title: "Smart Analysis On Screen", desc: "3-point on-screen analysis, auto hot/cold spot tracking, high/low temperature alarms and ROI to eliminate interference." },
  { icon: ShieldCheck, title: "Rugged IP65, 2 m Drop Proof", desc: "Built for the field — IP65 sealed, tested to a 2 m drop, with LED flashlight and 1/4\" tripod mounting hole." },
  { icon: Sparkles, title: "PC Software & Real-Time Projection", desc: "Analyse and report on PC with real-time image projection over Type-C; 16 GB micro SD storage and 6-hour Li-ion battery life." },
];

const specs = [
  { label: "Model", value: "UNI-T UTi260B" },
  { label: "IR Resolution", value: "256 x 192 pixels" },
  { label: "Screen Display", value: "2.8\" LCD (320 x 240 pixels)" },
  { label: "Field of View (FOV)", value: "56° x 42°" },
  { label: "Thermal Sensitivity (NETD)", value: "50 mK" },
  { label: "Spatial Resolution (IFOV)", value: "3.8 mrad" },
  { label: "Focus", value: "Focus free" },
  { label: "Frame Rate", value: "25 Hz" },
  { label: "Object Temperature Range", value: "-20 °C to 550 °C" },
  { label: "Measurement Accuracy", value: "±2 °C or ±2%, whichever is greater" },
  { label: "Emissivity", value: "Adjustable 0.01 – 0.99" },
  { label: "Measurement Presets", value: "3 points" },
  { label: "Digital Camera", value: "648 x 488 pixels" },
  { label: "Image Modes", value: "Thermal, visible, blending, PiP" },
  { label: "Palettes", value: "7" },
  { label: "Storage", value: "16 GB micro SD card" },
  { label: "Communication Interface", value: "Type-C" },
  { label: "Battery Operating Time", value: "6 hours (rechargeable Li-ion)" },
  { label: "Protection", value: "IP65 / 2 m drop proof" },
  { label: "Net Size / Weight", value: "236 x 75.5 x 86 mm / 910 g" },
  { label: "Warranty", value: "1 year" },
];

const inBox = [
  "UNI-T UTi260B thermal imager",
  "16 GB micro SD card",
  "Type-C USB cable",
  "User manual",
  "Calibration / conformity report",
];

const applications = [
  "Air conditioning and HVAC maintenance",
  "Heating and ventilation system surveys",
  "Electrical panel and switchgear inspection",
  "Predictive maintenance on motors and bearings",
  "Building envelope and insulation checks",
];

const PRODUCT_NAME = "UNI-T UTi260B Thermal Imager";
const INQUIRY_LINK = `/inquiry?product=${encodeURIComponent(PRODUCT_NAME)}`;

const ProductUTi260B = () => {
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "UNI-T UTi260B Thermal Imager (256 x 192 IR, -20 °C to 550 °C)",
    image: [HERO_IMAGE],
    description:
      "UNI-T UTi260B heavy-duty thermal imaging camera with 256 x 192 IR resolution, -20 °C to 550 °C range, 7 colour palettes, 4 image modes, IP65 and 2 m drop protection. Price ₹30,500 incl. 18% GST.",
    brand: { "@type": "Brand", name: "UNI-T" },
    sku: "UTi260B",
    mpn: "UTi260B",
    category: "Thermal Imaging Camera",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "30500",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: "https://vianovaindustrial.solutions/products/unit-uti260b",
      seller: { "@type": "Organization", name: "ViaNova Industrial Solutions" },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>UNI-T UTi260B Thermal Imager | ₹30,500 Incl. GST</title>
        <meta
          name="description"
          content="UNI-T UTi260B thermal imaging camera: 256x192 IR resolution, -20 to 550 °C, 7 palettes, IP65 and 2 m drop proof. Price ₹30,500 incl. 18% GST, pan-India supply."
        />
        <link rel="canonical" href="https://vianovaindustrial.solutions/products/unit-uti260b" />
        <meta property="og:title" content="UNI-T UTi260B Thermal Imager — ₹30,500 Incl. GST" />
        <meta
          property="og:description"
          content="256 x 192 pixel IR resolution, -20 °C to 550 °C measurement range, 7 colour palettes and 4 image modes in a rugged IP65 body."
        />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:url" content="https://vianovaindustrial.solutions/products/unit-uti260b" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> New Launch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                UNI-T UTi260B Thermal Imager
              </h1>
              <p className="mt-2 text-lg md:text-xl text-primary-foreground/85">
                256 x 192 IR · -20 °C to 550 °C · 7 palettes · IP65 &amp; 2 m drop proof
              </p>
              <p className="mt-5 text-primary-foreground/90 max-w-xl">
                The UTi260B is UNI-T's flagship heavy-duty thermal camera — cost effective, rugged
                and equipped with a wide temperature range, four display modes and on-screen
                analysis for HVAC, electrical and industrial maintenance teams.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="bg-background/10 backdrop-blur border border-white/20 rounded-xl px-5 py-3">
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/70">
                    Price <span className="line-through opacity-70">₹39,160</span> · Save 23%
                  </div>
                  <div className="flex items-center gap-1 text-3xl font-extrabold">
                    <IndianRupee className="w-6 h-6" /> 30,500
                    <span className="text-base font-semibold text-primary-foreground/80 ml-2">incl. GST 18%</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                    <Link to={INQUIRY_LINK}>
                      Request Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <span className="text-xs text-primary-foreground/70">Authorised supply • Pan-India delivery</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={HERO_IMAGE}
                alt="UNI-T UTi260B thermal imaging camera with 256 x 192 pixel infrared resolution"
                className="w-full h-auto rounded-2xl shadow-2xl bg-white object-contain"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick badges */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: Camera, text: "256 x 192 IR resolution" },
            { icon: Thermometer, text: "-20 °C to 550 °C" },
            { icon: Palette, text: "7 colour palettes" },
            { icon: ShieldCheck, text: "IP65 / 2 m drop proof" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground">
              <Icon className="w-5 h-5 text-secondary" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why the UNI-T UTi260B?</h2>
            <p className="text-muted-foreground mt-3">
              A high-resolution, field-ready thermal camera that balances image quality, temperature
              range and durability at an accessible price point.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <Card key={i} className="border-border hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + In the box */}
      <section className="py-16 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Technical Specifications</h2>
            <div className="rounded-xl overflow-hidden border border-border bg-background">
              <table className="w-full text-sm">
                <tbody>
                  {specs.map((s, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                      <td className="px-4 py-3 font-semibold text-foreground w-1/3 align-top">{s.label}</td>
                      <td className="px-4 py-3 text-muted-foreground">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">In the Box</h2>
            <Card className="border-border">
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {inBox.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-lg font-semibold text-foreground mt-8 mb-3">Ideal For</h3>
            <ul className="space-y-2">
              {applications.map((a, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary text-primary-foreground p-8 md:p-12 text-center shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold">
              Thermal Imaging Made Affordable. <span className="text-accent">₹30,500 Incl. GST.</span>
            </h2>
            <p className="mt-3 text-primary-foreground/85 max-w-2xl mx-auto">
              Get the UNI-T UTi260B thermal imager with calibration report and 1-year warranty.
              Demo and bulk pricing available for plants, utilities and service teams.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                <Link to={INQUIRY_LINK}>Request Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-primary-foreground hover:bg-white/10">
                <Link to="/products">Explore Measuring Instruments</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductUTi260B;
