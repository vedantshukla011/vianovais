import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Check,
  Thermometer,
  Zap,
  ShieldCheck,
  Cpu,
  Award,
  Lock,
  Flame,
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import banner from "@/assets/weller-we1010-banner.jpeg.asset.json";

const features = [
  { icon: Thermometer, title: "Precise Temperature Control", desc: "Digital LC display, temperature range 100 – 450 °C tuned for repeatable joints." },
  { icon: Flame, title: "Fast Heat-Up", desc: "70 W high-power channel reaches working temperature quickly to keep throughput high." },
  { icon: ShieldCheck, title: "ESD Safe & Certified", desc: "ESD-safe station, UL & CE certified — safe for sensitive PCB assembly." },
  { icon: Cpu, title: "Standby & Auto Setback", desc: "Conserves energy and protects tips, extending tool life on the bench." },
  { icon: Lock, title: "Password Protection", desc: "Lock temperature and setup parameters to preserve production settings." },
  { icon: Zap, title: "Toolless Tip Change", desc: "WEP 70 ergonomic iron with heat-resistant silicone cable and ET soldering tips." },
];

const specs = [
  { label: "Model", value: "Weller WE1010 (WE 1010)" },
  { label: "Configuration", value: "1-channel soldering station with WEP 70 iron + PH 70 safety rest" },
  { label: "Power", value: "70 W" },
  { label: "Voltage", value: "230 V AC" },
  { label: "Display", value: "Digital LC Display" },
  { label: "Temperature Range", value: "100 °C – 450 °C (depending on tip)" },
  { label: "Soldering Tips", value: "ET series soldering tips" },
  { label: "Safety", value: "ESD safe, heat-resistant silicone cable" },
  { label: "Certifications", value: "UL & CE certified for electrical safety" },
  { label: "Energy Features", value: "Standby mode, auto setback, password-protected settings" },
  { label: "Power vs WES / WESD", value: "≈ 40% more power, lower total cost of ownership" },
];

const inBox = [
  "WE1010 power unit (1 channel)",
  "WEP 70 soldering iron (70 W)",
  "PH 70 safety rest",
  "Pre-installed ET series soldering tip",
  "Mains cable",
];

const applications = [
  "PCB assembly, rework and repair",
  "Electronics R&D and prototyping labs",
  "Automotive and industrial electronics",
  "Education, training and ITI workshops",
  "Service centres and field engineering",
];

const ProductWellerWE1010 = () => {
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Weller WE1010 Soldering Station, 70W",
    image: [banner.url],
    description:
      "Weller WE1010 1-channel 70W digital soldering station with WEP 70 iron and PH 70 safety rest. ESD safe, UL & CE certified. Temperature range 100–450°C, password-protected settings, standby & auto setback.",
    brand: { "@type": "Brand", name: "Weller" },
    sku: "WE1010",
    category: "Soldering Station",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "15500",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://vianovaindustrial.solutions/products/weller-we1010",
      seller: { "@type": "Organization", name: "ViaNova Industrial Solutions" },
      eligibleTransactionVolume: {
        "@type": "PriceSpecification",
        valueAddedTaxIncluded: false,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Weller WE1010 70W Soldering Station | ₹15,500 + GST</title>
        <meta
          name="description"
          content="Weller WE1010 70W digital soldering station with WEP 70 iron and PH 70 safety rest. ESD safe, UL & CE certified. ₹15,500 + GST, pan-India delivery."
        />
        <link rel="canonical" href="https://vianovaindustrial.solutions/products/weller-we1010" />
        <meta property="og:title" content="Weller WE1010 Soldering Station, 70W — Premium Quality, Affordable Price" />
        <meta
          property="og:description"
          content="1-channel 70W digital soldering station with WEP 70 iron and PH 70 safety rest. ESD safe, UL & CE certified. ₹15,500 + GST."
        />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={banner.url} />
        <meta property="og:url" content="https://vianovaindustrial.solutions/products/weller-we1010" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
      </Helmet>

      {/* Hero / Banner */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> New Launch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
                Weller WE1010 Soldering Station, 70&nbsp;W
              </h1>
              <p className="mt-2 text-lg md:text-xl text-primary-foreground/85">
                Precision. Performance. Trusted by Professionals.
              </p>
              <p className="mt-5 text-primary-foreground/90 max-w-xl">
                The most powerful station in its class — now in a fresh design.
                1-channel digital station with the <strong>WEP 70 iron</strong> and
                <strong> PH 70 safety rest</strong>, delivering 40% more power than the
                WES / WESD with a lower total cost of ownership.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="bg-background/10 backdrop-blur border border-white/20 rounded-xl px-5 py-3">
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Price</div>
                  <div className="flex items-center gap-1 text-3xl font-extrabold">
                    <IndianRupee className="w-6 h-6" /> 15,500
                    <span className="text-base font-semibold text-primary-foreground/80 ml-2">+ GST</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                    <Link to="/inquiry?product=Weller%20WE1010%20Soldering%20Station%2C%2070W">
                      Request Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <span className="text-xs text-primary-foreground/70">UL & CE certified • ESD safe</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={banner.url}
                alt="Weller WE1010 70W digital soldering station — premium quality, affordable price"
                className="w-full h-auto rounded-2xl shadow-2xl"
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
            { icon: Award, text: "Trusted by Professionals" },
            { icon: ShieldCheck, text: "ESD Safe • UL & CE" },
            { icon: Flame, text: "70W Fast Heat-Up" },
            { icon: Thermometer, text: "100–450 °C Precision" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why the Weller WE1010?</h2>
            <p className="text-muted-foreground mt-3">
              Built for production-grade reliability, the WE1010 brings Weller's industrial heritage to every workbench
              at an affordable price.
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
              Premium Quality. <span className="text-accent">Affordable Price.</span>
            </h2>
            <p className="mt-3 text-primary-foreground/85 max-w-2xl mx-auto">
              Get the Weller WE1010 70W soldering station for just <strong>₹15,500 + GST</strong>. Bulk and institutional
              pricing available for OEMs, EMS providers and educational institutions.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground">
                <Link to="/inquiry?product=Weller%20WE1010%20Soldering%20Station%2C%2070W">
                  Request Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white/40 text-primary-foreground hover:bg-white/10">
                <Link to="/buy-online?category=Soldering%20stations%20and%20bits">Browse Soldering Stations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductWellerWE1010;
