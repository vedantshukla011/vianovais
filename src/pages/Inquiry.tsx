import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Clock, Send, X } from "lucide-react";
import { useQuoteCart } from "@/contexts/QuoteCartContext";

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir", "Ladakh",
];

const Inquiry = () => {
  const { items, removeItem, clearCart } = useQuoteCart();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (items.length > 0 && textareaRef.current) {
      const productList = items.map((item, i) => `${i + 1}. ${item}`).join("\n");
      textareaRef.current.value = `I am interested in the following products:\n\n${productList}\n\nPlease share pricing and availability.`;
    }
  }, [items]);

  const contactCards = [
    { icon: Phone, color: "from-primary to-primary-light", title: "Phone", content: "+91 9654109754", subContent: "", href: "tel:+919654109754" },
    { icon: Mail, color: "from-secondary to-secondary-light", title: "Email", content: "sales@vianovaindustrial.solutions", subContent: "", href: "mailto:sales@vianovaindustrial.solutions" },
    { icon: MapPin, color: "from-accent to-accent-light", title: "Head Office", content: "123-Aditya High Street, Lal Kuan", subContent: "Ghaziabad, Uttar Pradesh 201001, India", href: "" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Contact Us | Request a Quote — ViaNova Industrial</title>
        <meta name="description" content="Reach out to ViaNova Industrial Solutions for quotations on measuring instruments, lab equipment, valves and engineering products. Pan-India delivery." />
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
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-5">Request a Quote</h1>
          <p className="text-xl text-accent-foreground/80 max-w-3xl mx-auto">
            Get in touch with our team for customized industrial engineering solutions
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
                            <button onClick={() => removeItem(item)} className="ml-1 hover:bg-secondary/20 rounded-full p-0.5">
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <form action="https://formspree.io/f/mpqwvvna" method="POST" className="space-y-6">
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
                        <Label htmlFor="phone" className="text-foreground font-medium">Mobile Number *</Label>
                        <div className="flex">
                          <span className="inline-flex items-center px-4 text-sm text-muted-foreground bg-muted border border-r-0 border-input rounded-l-lg font-medium">+91</span>
                          <Input id="phone" type="tel" name="phone" placeholder="9876543210" pattern="[6-9][0-9]{9}" title="Please enter a valid 10-digit Indian mobile number" required className="rounded-l-none h-12" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-foreground font-medium">State *</Label>
                        <select id="state" name="state" required className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Select your state</option>
                          {indianStates.map((state) => (<option key={state} value={state}>{state}</option>))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-foreground font-medium">City</Label>
                        <Input id="city" name="city" placeholder="Mumbai" className="h-12" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-foreground font-medium">Industry / Application</Label>
                      <Input id="industry" name="industry" placeholder="e.g., Oil & Gas, Pharmaceuticals, Chemicals" className="h-12" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Your Message / Requirements *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        ref={textareaRef}
                        placeholder="Please describe your requirements, specifications, or questions..."
                        rows={6}
                        required
                        minLength={10}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold h-14 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Required fields. We respect your privacy and will not share your information.
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
