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
  Award,
  Smartphone,
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HERO_IMAGE =
  "/__l5e/assets-v1/06b156de-a5f5-40c6-86f8-dd8291fdff7f/testo-883.jpg";

const features = [
  { icon: Camera, title: "Best-in-Class Image Quality", desc: "320 x 240 pixel IR resolution (640 x 480 with SuperResolution) and NETD < 40 mK reveal the smallest thermal anomalies." },
  { icon: Cpu, title: "testo SiteRecognition", desc: "Thermal images are auto-assigned to the correct measuring point via QR / barcode — no manual sorting on the PC." },
  { icon: Thermometer, title: "testo ScaleAssist", desc: "Automatic contrast adjustment delivers objectively comparable thermal images for reliable weak-spot detection." },
  { icon: Smartphone, title: "Thermography App", desc: "Turn a smartphone or tablet into a second display and remote control; create and share reports on site." },
  { icon: ShieldCheck, title: "Manual Focus & Interchangeable Lens", desc: "Sharp images from just 10 cm; optional 12° x 9° telephoto lens for distant switchgear and rooftops." },
  { icon: Award, title: "testo IRSoft Analysis", desc: "Professional PC software for in-depth analysis and polished reports in minutes — free download." },
];

const specs = [
  { label: "Model", value: "testo 883-1 Thermal Imager" },
  { label: "Order No.", value: "0560 8831 (0560-8830 series)" },
  { label: "Infrared Resolution", value: "320 x 240 pixels" },
  { label: "SuperResolution", value: "640 x 480 pixels (1.1 mrad standard lens)" },
  { label: "Thermal Sensitivity (NETD)", value: "< 40 mK" },
  { label: "Field of View", value: "30° x 23° standard lens; 12° x 9° telephoto (optional)" },
  { label: "Geometric Resolution (IFOV)", value: "1.7 mrad standard / 0.7 mrad telephoto" },
  { label: "Focus", value: "Manual, minimum focus distance < 0.1 m" },
  { label: "Image Refresh Rate", value: "27 Hz (9 Hz outside EU)" },
  { label: "Spectral Range", value: "7.5 to 14 µm" },
  { label: "Display", value: "Capacitive touch display, joystick operation" },
  { label: "Connectivity", value: "Bluetooth® (clamp meter / humidity probe), USB-C, WiFi app" },
  { label: "Compliance", value: "RED 2014/53/EU, EMC 2014/30/EU, WEEE, RoHS, REACH" },
];

const inBox = [
  "testo 883-1 thermal imager with 30° x 23° standard lens",
  "Robust transport case",
  "testo IRSoft professional software (free download)",
  "USB-C cable and USB mains unit",
  "Li-ion rechargeable battery",
  "Carrying strap, short instructions, test protocol",
];

const applications = [
  "Electrical maintenance and switchgear inspection",
  "Predictive maintenance in manufacturing plants",
  "Building energy audits and mould-risk assessment",
  "Facility management and HVAC diagnostics",
  "Solar PV and motor / bearing condition monitoring",
];

const PRODUCT_NAME = "Testo 883-1 Thermal Imager";
const INQUIRY_LINK = `/inquiry?product=${encodeURIComponent(PRODUCT_NAME)}`;

const ProductTesto883 = () => {
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Testo 883-1 Thermal Imager (320 x 240 pixels, manual focus, app, laser)",
    image: [HERO_IMAGE],
    description:
      "Testo 883-1 thermal imaging camera with 320 x 240 pixel IR resolution (640 x 480 SuperResolution), NETD < 40 mK, manual focus, interchangeable lenses, testo SiteRecognition and ScaleAssist. Offer price ₹5,80,000 + GST.",
    brand: { "@type": "Brand", name: "Testo" },
    sku: "0560 8831",
    mpn: "0560-8830",
    category: "Thermal Imaging Camera",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "580000",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: "https://vianovaindustrial.solutions/products/testo-883-1",
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
        <title>Testo 883-1 Thermal Imager | Offer ₹5,80,000 + GST</title>
        <meta
          name="description"
          content="Testo 883-1 thermal imaging camera: 320x240 IR (640x480 SuperResolution), NETD <40 mK, manual focus, SiteRecognition. Offer price ₹5,80,000 + GST, pan-India supply."
        />
        <link rel="canonical" href="https://vianovaindustrial.solutions/products/testo-883-1" />
        <meta property="og:title" content="Testo 883-1 Thermal Imager — Offer Price ₹5,80,000 + GST" />
        <meta
          property="og:description"
          content="320 x 240 pixel thermal imager with SuperResolution 640 x 480, NETD < 40 mK, manual focus and interchangeable lenses for electrical and building thermography."
        />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:url" content="https://vianovaindustrial.solutions/products/testo-883-1" />
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
                Testo 883-1 Thermal Imager
              </h1>
              <p className="mt-2 text-lg md:text-xl text-primary-foreground/85">
                320 x 240 pixels · NETD &lt; 40 mK · Manual focus · App &amp; laser
              </p>
              <p className="mt-5 text-primary-foreground/90 max-w-xl">
                Developed for service engineers, facility managers and building energy consultants —
                the testo 883-1 combines outstanding thermal image quality with intelligent image
                management so every inspection is faster and better documented.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="bg-background/10 backdrop-blur border border-white/20 rounded-xl px-5 py-3">
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/70">Offer Price</div>
                  <div className="flex items-center gap-1 text-3xl font-extrabold">
                    <IndianRupee className="w-6 h-6" /> 5,80,000
                    <span className="text-base font-semibold text-primary-foreground/80 ml-2">+ GST</span>
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
                alt="Testo 883-1 thermal imaging camera with 320 x 240 pixel infrared resolution"
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
            { icon: Camera, text: "640 x 480 SuperResolution" },
            { icon: Thermometer, text: "NETD < 40 mK" },
            { icon: Cpu, text: "testo SiteRecognition" },
            { icon: Smartphone, text: "Thermography App" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why the Testo 883-1?</h2>
            <p className="text-muted-foreground mt-3">
              Outstanding image quality, automatic archiving of thermal images to the measurement
              object and professional analysis and reporting in one rugged package.
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Delivery Scope</h2>
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
              Professional Thermography. <span className="text-accent">Special Offer Price.</span>
            </h2>
            <p className="mt-3 text-primary-foreground/85 max-w-2xl mx-auto">
              Get the Testo 883-1 thermal imager at <strong>₹5,80,000 + GST</strong>. Demo,
              application training and bulk pricing available for plants, utilities and consultants.
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

export default ProductTesto883;
