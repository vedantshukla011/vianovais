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
    slug: "digital-storage-oscilloscope-pcb-testing",
    title:
      "Digital Storage Oscilloscopes (DSOs): The Essential Tool for PCB Design, Debugging and Failure Diagnosis",
    description:
      "Complete guide to Digital Storage Oscilloscopes — working principles, key features, signal integrity testing, protocol decoding (I²C, SPI, CAN), and PCB failure diagnosis.",
    keywords:
      "Digital Storage Oscilloscope, DSO, Oscilloscope for PCB Testing, PCB Failure Analysis, PCB Debugging, Signal Integrity Testing, Electronic Test Equipment, Oscilloscope Applications, PCB Design Validation, Electronics Troubleshooting, Test and Measurement Instruments, Digital Oscilloscope India",
    date: "2026-06-14",
    readTime: "9 min read",
    category: "Test & Measurement Instruments",
    excerpt:
      "How a modern DSO helps validate PCB designs, decode communication protocols and diagnose power, signal and component-level failures.",
  },
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
