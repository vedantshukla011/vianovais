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
    slug: "lcr-meter-guide-inductance-capacitance-resistance-measurement",
    title:
      "LCR Meter: The Ultimate Guide to Precision Inductance, Capacitance & Resistance Measurement",
    description:
      "LCR meter guide: working principle, measured parameters, test frequency, Kelvin measurement, applications, automation and buying tips for benchtop and handheld meters.",
    keywords:
      "LCR Meter, Buy LCR Meter India, Benchtop LCR Meter, Precision LCR Meter, Digital LCR Meter, LCR Meter Supplier India, Inductance Meter, Capacitance Meter, Resistance Meter, ESR Measurement, Impedance Analyzer, Kelvin Measurement, Transformer Testing, Coil Testing, PCB Testing, Component Testing, LabVIEW Compatible LCR Meter, SCPI LCR Meter, Keysight LCR Meter, Hioki LCR Meter, GW Instek LCR Meter, Tonghui LCR Meter, UNI-T LCR Meter, OWON LCR Meter",
    date: "2026-07-30",
    readTime: "10 min read",
    category: "Test & Measurement Instruments",
    excerpt:
      "Working principle, measured parameters, test frequency, Kelvin measurement, applications, automation and a practical buying guide for LCR meters.",
  },
  {
    slug: "dc-power-supply-types-applications-buying-guide",
    title:
      "DC Power Supplies: A Complete Guide to Types, Applications and Choosing the Right Power Supply",
    description:
      "Complete guide to DC power supplies — linear vs switching, programmable, bidirectional, high voltage and modular types, key specifications and buying advice.",
    keywords:
      "DC Power Supply, Programmable DC Power Supply, Linear Power Supply, Switching Power Supply, Bench DC Power Supply, Laboratory Power Supply, Industrial DC Power Supply, High Voltage DC Supply, High Current Power Supply, Multi-Channel Power Supply, SCPI Power Supply, Battery Testing Power Supply, EV Testing Equipment",
    date: "2026-07-26",
    readTime: "11 min read",
    category: "Power Electronics Testing",
    excerpt:
      "Linear vs switching, single to multi-channel, programmable, bidirectional and high-voltage supplies — how to pick the right DC source for your lab or line.",
  },
  {

    slug: "dc-electronic-load-power-electronics-manufacturing",
    title: "DC Electronic Load: The Backbone of Power Electronics Manufacturing & Testing",
    description:
      "Discover how DC electronic loads improve testing accuracy for SMPS, battery, EV charger, adapter and power supply manufacturers. Includes buying guide and key features.",
    keywords:
      "DC Electronic Load, Programmable Electronic Load, Electronic Load Tester, DC Load Bank, Battery Load Tester, Power Supply Testing, SMPS Testing Equipment, EV Charger Testing, Electronic Load for Manufacturing",
    date: "2026-06-28",
    readTime: "10 min read",
    category: "Power Electronics Testing",
    excerpt:
      "Complete buying guide for DC electronic loads — applications, operating modes, features and selection criteria for power electronics manufacturing.",
  },
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
