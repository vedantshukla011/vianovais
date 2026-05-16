import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const categories = [
  {
    title: "Analytical & Measurement Instruments",
    items: [
      "Digital pH Meter",
      "Conductivity Meter",
      "TDS Meter & Turbidity Meter",
      "Spectrophotometer (UV-Visible)",
      "Flame Photometer",
      "Abbe Refractometer",
      "Polarimeter",
    ],
  },
  {
    title: "Pharmaceutical & Testing Equipment",
    items: [
      "Tablet Dissolution Test Apparatus",
      "Tablet Disintegration Apparatus",
      "Tablet Friability Tester",
      "Capsule Filling Machine",
      "Bulk Density Apparatus",
    ],
  },
  {
    title: "Microbiology Equipment",
    items: [
      "Laminar Air Flow",
      "Autoclave",
      "Incubator",
      "Colony Counter",
    ],
  },
  {
    title: "General Laboratory Equipment",
    items: [
      "Muffle Furnace",
      "Orbital Shaker",
      "Water Bath",
      "Vacuum Pump",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Scientific Laboratory Instruments",
      url: "https://vianovaindustrial.solutions/scientific-laboratory-instruments",
      description:
        "Comprehensive range of laboratory instruments for pharmaceutical, research, and industrial applications.",
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://vianovaindustrial.solutions/" },
        { "@type": "ListItem", position: 2, name: "Scientific Laboratory Instruments", item: "https://vianovaindustrial.solutions/scientific-laboratory-instruments" },
      ],
    },
    {
      "@type": "ItemList",
      name: "Scientific Laboratory Instruments Range",
      itemListElement: [
        { "@type": "Product", name: "Digital pH Meter", category: "Analytical Instrument" },
        { "@type": "Product", name: "Spectrophotometer (UV-Visible)", category: "Analytical Instrument" },
        { "@type": "Product", name: "Tablet Dissolution Test Apparatus", category: "Pharmaceutical Equipment" },
        { "@type": "Product", name: "Laminar Air Flow Unit", category: "Microbiology Equipment" },
        { "@type": "Product", name: "Autoclave", category: "Sterilization Equipment" },
        { "@type": "Product", name: "Muffle Furnace", category: "Laboratory Equipment" },
        { "@type": "Product", name: "Orbital Shaker", category: "Laboratory Equipment" },
        { "@type": "Product", name: "Bulk Density Apparatus", category: "Material Testing Equipment" },
        { "@type": "Product", name: "Viscometer", category: "Material Testing Equipment" },
      ],
    },
  ],
};

const ScientificLaboratoryInstruments = () => {
  return (
    <>
      <Helmet>
        <title>Scientific Laboratory Instruments | ViaNova</title>
        <meta
          name="description"
          content="Pharmacy lab equipment, analytical instruments and research tools — pH meters, spectrophotometers, autoclaves, dissolution testers and more."
        />
        <meta property="og:title" content="Scientific Laboratory Instruments | ViaNova" />
        <meta property="og:description" content="Pharmacy lab equipment, analytical instruments and research tools from ViaNova Industrial Solutions." />
        <meta property="og:url" content="https://vianovaindustrial.solutions/scientific-laboratory-instruments" />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="scientific laboratory instruments, laboratory measuring instruments online, pharmacy lab equipment, analytical instruments India, microbiology lab equipment, spectrophotometer supplier, tablet testing equipment, laboratory instruments supplier India, engineering lab equipment supplier Delhi, complete electronics lab setup supplier, supplier for engineering college lab equipment, industrial instruments with calibration certificate, turnkey automation lab setup provider, one stop solution for industrial instruments"
        />
        <link rel="canonical" href="https://vianovaindustrial.solutions/scientific-laboratory-instruments" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary/90 to-primary py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Scientific Laboratory Instruments – Complete Range
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Your Trusted Partner for Laboratory & Pharmacy Equipment
            </p>
            <p className="mt-4 text-primary-foreground/70 max-w-2xl mx-auto">
              At ViaNova Industrial Solutions, we deliver high-performance scientific laboratory instruments
              for pharmaceutical labs, research institutions, and industrial R&D facilities.
            </p>
          </div>
        </section>

        {/* Product Categories */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((cat) => (
              <article
                key={cat.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold text-foreground mb-4 border-b border-border pb-3">
                  {cat.title}
                </h2>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Upgrade Your Lab with ViaNova
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us today for complete laboratory solutions.
            </p>
            <Link
              to="/inquiry"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default ScientificLaboratoryInstruments;
