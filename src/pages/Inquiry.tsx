import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  company: z.string().trim().max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian mobile number" }),
  state: z.string().trim().min(1, { message: "Please select your state" }),
  city: z.string().trim().max(100),
  industry: z.string().trim().max(100),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi", "Jammu & Kashmir", "Ladakh",
];

const Inquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", state: "", city: "", industry: "", message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      inquirySchema.parse(formData);
      setErrors({});
      
      toast({
        title: "Inquiry Submitted Successfully",
        description: "Our team will contact you within 24 hours.",
      });
      
      setFormData({ name: "", company: "", email: "", phone: "", state: "", city: "", industry: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Validation Error",
          description: "Please check the form for errors and try again.",
          variant: "destructive",
        });
      }
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const contactCards = [
    { icon: Phone, color: "from-primary to-primary-light", title: "Phone", content: "+91 20 4102 3000", subContent: "Toll Free: 1800-XXX-XXXX" },
    { icon: Mail, color: "from-secondary to-secondary-light", title: "Email", content: "info@vianovaengineering.in", subContent: "sales@vianovaengineering.in" },
    { icon: MapPin, color: "from-accent to-accent-light", title: "Head Office", content: "Hinjawadi Phase 1,", subContent: "Pune, Maharashtra 411057, India" },
  ];

  return (
    <div className="min-h-screen pt-20">
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
                        <p className="text-sm text-muted-foreground">{card.content}</p>
                        <p className="text-sm text-muted-foreground">{card.subContent}</p>
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
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Rajesh Kumar"
                          className={`h-12 ${errors.name ? "border-destructive" : "border-border"}`}
                        />
                        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-foreground font-medium">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          placeholder="ABC Industries Pvt. Ltd."
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="rajesh@example.com"
                          className={`h-12 ${errors.email ? "border-destructive" : "border-border"}`}
                        />
                        {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-medium">Mobile Number *</Label>
                        <div className="flex">
                          <span className="inline-flex items-center px-4 text-sm text-muted-foreground bg-muted border border-r-0 border-input rounded-l-lg font-medium">
                            +91
                          </span>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value.replace(/\D/g, '').slice(0, 10))}
                            placeholder="9876543210"
                            className={`rounded-l-none h-12 ${errors.phone ? "border-destructive" : "border-border"}`}
                          />
                        </div>
                        {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-foreground font-medium">State *</Label>
                        <Select value={formData.state} onValueChange={(value) => handleChange("state", value)}>
                          <SelectTrigger className={`h-12 ${errors.state ? "border-destructive" : "border-border"}`}>
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover">
                            {indianStates.map((state) => (
                              <SelectItem key={state} value={state}>{state}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.state && <p className="text-xs text-destructive">{errors.state}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-foreground font-medium">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleChange("city", e.target.value)}
                          placeholder="Mumbai"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-foreground font-medium">Industry / Application</Label>
                      <Input
                        id="industry"
                        value={formData.industry}
                        onChange={(e) => handleChange("industry", e.target.value)}
                        placeholder="e.g., Oil & Gas, Pharmaceuticals, Chemicals"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">Your Message / Requirements *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Please describe your requirements, specifications, or questions..."
                        rows={6}
                        className={errors.message ? "border-destructive" : "border-border"}
                      />
                      {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold h-14 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
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
