export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "bulk-email-whatsapp-marketing-tool",
    title: "Bulk Email & WhatsApp Marketing Tool | Automate Business Outreach",
    description:
      "Send bulk emails, WhatsApp messages and automate business outreach with our all-in-one bulk messaging platform. Boost lead generation and conversions.",
    keywords:
      "bulk email sender, WhatsApp bulk sender, email marketing tool, bulk messaging software, mass email sender, WhatsApp marketing software, WhatsApp API marketing tool",
    date: "2026-04-28",
    readTime: "5 min read",
    category: "Marketing Automation",
    excerpt:
      "All-in-one bulk email sender and WhatsApp marketing software — automate outreach, run multi-channel campaigns and convert more leads.",
  },
  {
    slug: "driver-testing-machine",
    title: "Driver Testing Machine for LED Drivers, SMPS, Adapters & UPS",
    description:
      "High-precision driver testing machine for LED drivers, SMPS, power adapters, and UPS systems. Automate testing, improve reliability, and ensure compliance.",
    keywords:
      "Driver Testing Machine, LED Driver Testing, SMPS Testing Equipment, Power Adapter Testing, UPS Testing System, Power Electronics Testing",
    date: "2026-04-23",
    readTime: "6 min read",
    category: "Power Electronics Testing",
    excerpt:
      "Precision testing for LED drivers, SMPS, power adapters and UPS systems — automate testing, improve reliability and ensure global compliance.",
  },
];
