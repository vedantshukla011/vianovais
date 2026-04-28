import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MessageCircle,
  Zap,
  BarChart3,
  Send,
  Users,
  Target,
  Repeat,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Clock,
} from "lucide-react";

const features = [
  { icon: Send, title: "Multi-Channel Messaging", desc: "Email + WhatsApp + SMS in one unified platform." },
  { icon: Zap, title: "Automation", desc: "Automate campaigns, follow-ups, and drip sequences." },
  { icon: MessageCircle, title: "WhatsApp API Integration", desc: "Official WhatsApp Business API for secure messaging." },
  { icon: BarChart3, title: "Analytics", desc: "Track open rates, clicks, and conversions in real time." },
];

const useCases = [
  { icon: Users, title: "B2B Lead Generation" },
  { icon: Mail, title: "Cold Email Outreach" },
  { icon: MessageCircle, title: "WhatsApp Sales Follow-ups" },
  { icon: Repeat, title: "Customer Retention Campaigns" },
  { icon: Rocket, title: "Product Promotions & Launches" },
];

const keywords = [
  "bulk email sender",
  "WhatsApp bulk sender",
  "email marketing tool",
  "bulk messaging software",
  "mass email sender",
  "WhatsApp marketing software",
  "bulk email sender India",
  "WhatsApp API marketing tool",
];

const BlogBulkMessaging = () => {
  const canonical =
    "https://vianovaindustrial.com/blog/bulk-email-whatsapp-marketing-tool";

  return (
    <>
      <Helmet>
        <title>Bulk Email & WhatsApp Marketing Tool | Automate Business Outreach</title>
        <meta
          name="description"
          content="Send bulk emails, WhatsApp messages and automate business outreach with our all-in-one bulk messaging platform. Boost lead generation and conversions."
        />
        <meta
          name="keywords"
          content="bulk email sender, WhatsApp bulk sender, email marketing tool, bulk messaging software, mass email sender, WhatsApp marketing software, WhatsApp API marketing tool"
        />
        <meta property="og:title" content="Bulk Email & WhatsApp Marketing Tool" />
        <meta
          property="og:description"
          content="Bulk email sender and WhatsApp marketing software for business outreach, automation, and lead generation."
        />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Bulk Email & WhatsApp Marketing Tool",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description:
            "Bulk email sender and WhatsApp marketing software for business outreach, automation, and lead generation.",
          offers: {
            "@type": "Offer",
            price: "Contact for pricing",
            priceCurrency: "INR",
          },
        })}</script>
      </Helmet>

      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-5">
              Marketing Automation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Bulk Email & WhatsApp Marketing Tool
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-4">
              Send Bulk Emails, WhatsApp Messages & Automate Business Outreach
            </p>
            <div className="flex items-center justify-center gap-5 text-sm text-primary-foreground/70 mb-8">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> April 28, 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 5 min read
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="/automate/index.html">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg">
                  Get Started
                </Button>
              </a>
              <Link to="/inquiry">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-14 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Best Bulk Email Sender & WhatsApp Marketing Software
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Looking for a powerful <strong>bulk email sender</strong> or{" "}
              <strong>WhatsApp marketing tool</strong>? Our platform helps businesses
              send bulk emails, run WhatsApp campaigns, and automate outreach for
              maximum conversions — all from one unified dashboard.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose Our Bulk Messaging Platform?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Top Use Cases
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {useCases.map((u) => (
                <article
                  key={u.title}
                  className="bg-card border border-border rounded-2xl p-6 shadow-elegant hover:shadow-hover transition-all flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                    <u.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{u.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Keywords */}
        <section className="py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Popular Search Categories
            </h2>
            <p className="text-center text-muted-foreground mb-10">
              Trusted by marketers searching for high-impact outreach tools.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {keywords.map((k) => (
                <span
                  key={k}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm text-foreground/80 shadow-elegant"
                >
                  <Target className="w-4 h-4 text-secondary" /> {k}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Outreach Today
            </h2>
            <p className="text-primary-foreground/85 mb-8">
              Boost your business with the best bulk email and WhatsApp marketing tool.
              Automate campaigns, generate leads, and increase conversions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/automate/index.html">
                <Button size="lg" className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold shadow-lg">
                  Launch Blaster Suite
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <Link to="/inquiry">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogBulkMessaging;
