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
    slug: "oscilloscope-multimeter-automotive-debugging",
    title: "How to Use an Oscilloscope & Multimeter for Automotive Debugging",
    description:
      "Step-by-step guide to using oscilloscopes and digital multimeters for automotive diagnostics — CAN bus decoding, sensor validation, parasitic draw and EV/HEV systems.",
    keywords:
      "oscilloscope for automotive diagnostics, automotive multimeter testing, CAN bus debugging, car sensor waveform analysis, parasitic draw test, EV diagnostics oscilloscope, ECU debugging",
    date: "2026-06-07",
    readTime: "8 min read",
    category: "Automotive Test & Measurement",
    excerpt:
      "A practical workflow for diagnosing ICE, hybrid and EV systems with a scope and DMM — CAN bus, sensors, ignition, injectors and high-voltage rails.",
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
