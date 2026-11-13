import { useEffect, useRef, useState, type FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Clock, Send, X } from "lucide-react";
import { useQuoteCart } from "@/contexts/QuoteCartContext";

const Inquiry = () => {
  const { items, removeItem, clearCart } = useQuoteCart();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [searchParams] = useSearchParams();
  const isExportInquiry = searchParams.get("market") === "export";
  const initialCountry = searchParams.get("country") ?? "";
  const requestedProduct = searchParams.get("product") ?? "";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmissionMessage(null);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        const detail = Array.isArray(result?.errors)
          ? result.errors.map((error: { message?: string }) => error.message).filter(Boolean).join(" ")
          : "";
        throw new Error(detail || "Formspree could not accept this inquiry. Please check the fields and try again.");
      }

      form.reset();
      clearCart();
      setSubmissionMessage({ type: "success", text: "Your inquiry was submitted successfully. Our team will follow up using the contact details you provided." });
    } catch (error) {
      setSubmissionMessage({
        type: "error",
        text: error instanceof Error && error.message
          ? error.message
          : "We could not submit your inquiry. Please try again or contact sales@vianovaindustrial.solutions directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (items.length === 0 && !requestedProduct) return;
    const productList = items.length
      ? items.map((item, i) => `${i + 1}. ${item}`).join("\n")
      : `1. ${requestedProduct}`;
    const destination = initialCountry ? `\nDestination country: ${initialCountry}` : "";
    const text = `${isExportInquiry ? "International export inquiry" : "Product inquiry"}${destination}\n\nI am interested in the following products:\n\n${productList}\n\nPlease confirm availability and quotation details.`;
    let tries = 0;
    const apply = () => {
      if (textareaRef.current) textareaRef.current.value = text;
      else if (tries++ < 20) requestAnimationFrame(apply);
    };
    apply();
  }, [items, requestedProduct, initialCountry, isExportInquiry]);

  const contactCards = [
    { icon: Phone, color: "from-primary to-primary-light", title: "Phone", content: "+91 9654109754", subContent: "", href: "tel:+919654109754" },
    { icon: Mail, color: "from-secondary to-secondary-light", title: "Email", content: "sales@vianovaindustrial.solutions", subContent: "", href: "mailto:sales@vianovaindustrial.solutions" },
    { icon: MapPin, color: "from-accent to-accent-light", title: "Head Office", content: "123-Aditya High Street, Lal Kuan", subContent: "Ghaziabad, Uttar Pradesh 201001, India", href: "" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>{isExportInquiry ? "International Export Inquiry | ViaNova Industrial" : "Request a Quote | ViaNova Industrial Solutions"}</title>
        <meta name="description" content={isExportInquiry ? "Request an export quotation for test, measurement and laboratory equipment from India. Share your destination country, product list, quantity and preferred currency." : "Contact ViaNova Industrial Solutions for quotations on test and measurement instruments, laboratory equipment and engineering products."} />
        <link rel="canonical" href="https://vianovaindustrial.solutions/inquiry" />
        <meta property="og:title" content="Contact ViaNova Industrial Solutions" />
        <meta property="og:description" content="Request quotations and best prices on measuring instruments and engineering products." />
        <meta property="og:url" content="https://vianovaindustrial.solutions/inquiry" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Header */}
      <section className="bg-gradient-to-br from-accent via-accent to-accent-light text-accent-foreground py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 text-center relative">
          <span className="inline-block px-4 py-2 bg-accent-foreground/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            {isExportInquiry ? "International procurement" : "Get in touch"}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">{isExportInquiry ? "Request an Export Quotation" : "Request a Quote"}</h1>
          <p className="text-xl text-accent-foreground/80 max-w-3xl mx-auto">
            {isExportInquiry ? "Tell us your destination and equipment requirement. We will review export eligibility and confirm available terms for your inquiry." : "Share your product and application requirements with the ViaNova team."}
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactCards.map((card, index) => (
                <Card key={index} className="border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card overflow-hidden">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${card.color} p-3 rounded-xl shadow-glow`}>
                        <card.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{card.title}</h3>
                        {card.href ? (
                          <a href={card.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{card.content}</a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{card.content}</p>
                        )}
                        {card.subContent && <p className="text-sm text-muted-foreground">{card.subContent}</p>}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-hero text-primary-foreground border-none shadow-elegant overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                <CardContent className="pt-6 pb-6 relative">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-foreground/20 p-3 rounded-xl">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Business Hours (IST)</h3>
                      <div className="space-y-1 text-sm text-primary-foreground/80">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday & Public Holidays: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-2xl bg-card overflow-hidden">
                <CardContent className="pt-10 pb-10 px-8">
                  <h2 className="text-2xl font-bold text-foreground mb-8">Send Us Your Requirements</h2>

                  {/* Selected products */}
                  {items.length > 0 && (
                    <div className="mb-6 p-4 bg-secondary/5 border border-secondary/20 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground text-sm">Selected Products ({items.length})</h4>
                        <Button variant="ghost" size="sm" className="text-xs text-muted-foreground h-7" onClick={clearCart}>
                          Clear all
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <Badge key={item} variant="secondary" className="pl-3 pr-1 py-1 text-xs gap-1">
                            {item.length > 40 ? item.slice(0, 40) + "…" : item}
                            <button onClick={() => removeItem(item)} aria-label={`Remove ${item} from inquiry`} className="ml-1 hover:bg-secondary/20 rounded-full p-0.5">
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <form action="https://formspree.io/f/mpqwvvna" method="POST" onSubmit={handleSubmit} className="space-y-6">
                    <input type="hidden" name="_subject" value="New ViaNova website quote request" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                        <Input id="name" name="name" placeholder="Rajesh Kumar" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-foreground font-medium">Company Name</Label>
                        <Input id="company" name="company" placeholder="ABC Industries Pvt. Ltd." className="h-12" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                        <Input id="email" type="email" name="email" placeholder="rajesh@example.com" required className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-medium">Phone / WhatsApp *</Label>
                        <Input id="phone" type="tel" name="phone" placeholder="Include country code, e.g. +971 50 123 4567" required className="h-12" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="market_type" className="text-foreground font-medium">Inquiry Type *</Label>
                        <select id="market_type" name="inquiry_type" defaultValue={isExportInquiry ? "International export inquiry" : "India domestic inquiry"} required className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                          <option value="International export inquiry">International export inquiry</option>
                          <option value="India domestic inquiry">India domestic inquiry</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-foreground font-medium">Country / Delivery Destination *</Label>
                        <Input id="country" name="country" defaultValue={initialCountry} placeholder="e.g. UAE, Saudi Arabia, Kenya" required className="h-12" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-foreground font-medium">Delivery City / Port</Label>
                        <Input id="city" name="city_or_port" placeholder="City or destination port" className="h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="currency" className="text-foreground font-medium">Preferred Quotation Currency</Label>
                        <select id="currency" name="preferred_currency" defaultValue="" className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                          <option value="">No preference</option>
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                          <option value="AED">AED</option>
                          <option value="SAR">SAR</option>
                          <option value="INR">INR</option>
                          <option value="Other">Other / specify in message</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-foreground font-medium">Industry / Application</Label>
                      <Input id="industry" name="industry" placeholder="e.g., Oil & Gas, utilities, manufacturing, laboratory" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Your Message / Requirements *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        ref={textareaRef}
                        placeholder={isExportInquiry ? "List product models or specifications, quantity, required date and any destination or documentation needs..." : "Please describe your product requirements, specifications, or questions..."}
                        rows={6}
                        required
                        minLength={10}
                      />
                    </div>

                    {submissionMessage && (
                      <p
                        role={submissionMessage.type === "error" ? "alert" : "status"}
                        aria-live={submissionMessage.type === "error" ? "assertive" : "polite"}
                        className={`rounded-lg border px-4 py-3 text-sm ${submissionMessage.type === "success" ? "border-green-600/30 bg-green-600/10 text-green-800" : "border-destructive/30 bg-destructive/10 text-destructive"}`}
                      >
                        {submissionMessage.text}
                      </p>
                    )}

                    <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold h-14 text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60">
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Submitting…" : "Submit Inquiry"}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Required fields. Export eligibility, available currency, shipment terms and documents are confirmed in the quotation.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inquiry;
