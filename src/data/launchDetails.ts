import utl8211Img from "@/assets/unit-utl8211plus.jpg.asset.json";

export type LaunchDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  brand: string;
  model: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  applications: string[];
};

export const launchDetails: LaunchDetail[] = [
  {
    slug: "unit-utl8211plus",
    title: "UNI-T UTL8211+ High-Precision Compact DC Electronic Load (400W / 150V / 40A)",
    shortTitle: "UNI-T UTL8211+ DC Electronic Load",
    brand: "UNI-T",
    model: "UTL8211+",
    category: "DC Electronic Loads",
    image: utl8211Img.url,
    description:
      "Single-channel 400 W programmable DC electronic load with 150 V / 40 A input range and 4.8 MHz synchronous voltage-current ADC sampling. Offers CC, CV, CR and CP modes with a full protection suite — ideal for testing power supplies, batteries, adapters, LED drivers and chargers.",
    highlights: [
      "400 W max power with 150 V / 40 A input range",
      "4.8 MHz current-voltage synchronous ADC sampling",
      "CC, CV, CR and CP basic operation modes",
      "Minimum operating voltage 2.0 V at 40 A",
      "OVP / UVP / OCP / OPP / OTP protection suite",
    ],
    specs: [
      { label: "Model", value: "UTL8211+" },
      { label: "Rated Power", value: "400 W" },
      { label: "Input Voltage", value: "0 – 150 V" },
      { label: "Input Current", value: "0 – 40 A" },
      { label: "Operation Modes", value: "CC / CV / CR / CP" },
      { label: "Sampling Rate", value: "4.8 MHz synchronous voltage & current ADC" },
      { label: "Min. Operating Voltage", value: "2.0 V at 40 A" },
      { label: "Protection", value: "OVP, UVP, OCP, OPP, OTP" },
      { label: "Channels", value: "Single channel" },
    ],
    applications: [
      "Switching power supply and adapter testing",
      "Battery discharge and capacity testing",
      "LED driver and charger validation",
      "R&D bench and production line ATE",
    ],
  },
  {
    slug: "unit-uap1000a",
    title: "UNI-T UAP1000A AC Power Source (1000VA Programmable AC Source)",
    shortTitle: "UNI-T UAP1000A AC Power Source",
    brand: "UNI-T",
    model: "UAP1000A",
    category: "AC Power Sources",
    image: "/__l5e/assets-v1/11ed2c04-f893-42a2-91ba-2f05ff4ac6b4/unit-uap1000a.jpg",
    description:
      "1000 VA single-phase programmable AC power source with dual voltage ranges (150 V / 300 V), current up to 8.4 A, 0.01 V / 0.001 A resolution and RS-232C remote control in a compact 3U chassis — built for mains simulation, appliance and adapter testing.",
    highlights: [
      "1000 VA output capacity in a compact 3U chassis",
      "Dual voltage ranges: 150 V (L) and 300 V (H)",
      "Current up to 8.4 A (L) / 4.2 A (H)",
      "High resolution 0.01 V / 0.001 A",
      "RS-232C interface for remote control and automation",
    ],
    specs: [
      { label: "Model", value: "UAP1000A" },
      { label: "Output Capacity", value: "1000 VA" },
      { label: "Voltage Range", value: "L: 150 V / H: 300 V" },
      { label: "Current Range", value: "L: 8.4 A / H: 4.2 A" },
      { label: "Resolution", value: "0.01 V / 0.001 A" },
      { label: "Interface", value: "RS-232C" },
      { label: "Chassis", value: "3U rack size" },
      { label: "Phase", value: "Single phase" },
    ],
    applications: [
      "Mains voltage and frequency simulation",
      "Home appliance and adapter compliance testing",
      "Power quality and brown-out testing",
      "Production line functional testing",
    ],
  },
  {
    slug: "unit-utr2830e",
    title: "UNI-T UTR2830E LCR Meter (100 kHz Digital LCR Bridge)",
    shortTitle: "UNI-T UTR2830E LCR Meter",
    brand: "UNI-T",
    model: "UTR2830E",
    category: "LCR Meters",
    image: "/__l5e/assets-v1/6056949f-0723-4377-9f7e-ace217c48d8d/unit-utr2830e.jpg",
    description:
      "New generation 100 kHz digital LCR bridge with 0.05% LCRZ / 0.1% DCR accuracy, 6-bit display count and up to 80 readings per second, with a 4.3-inch TFT LCD dual parameter readout for production QA and automated testing.",
    highlights: [
      "Test frequency up to 100 kHz",
      "Accuracy 0.05% LCRZ, 0.1% DCR",
      "6-bit display count with 80 readings per second",
      "4.3-inch TFT LCD dual parameter readout",
      "RS232, HANDLER, LAN and USB Host/Device interfaces",
    ],
    specs: [
      { label: "Model", value: "UTR2830E" },
      { label: "Max Test Frequency", value: "100 kHz" },
      { label: "Basic Accuracy", value: "LCRZ 0.05%, DCR 0.1%" },
      { label: "Display Count", value: "6 bit" },
      { label: "Measurement Speed", value: "Up to 80 readings/s" },
      { label: "Display", value: "4.3\" TFT LCD, dual parameter" },
      { label: "Interfaces", value: "RS232, HANDLER, LAN, USB Host/Device" },
    ],
    applications: [
      "Incoming inspection of passive components",
      "Inductor, capacitor and transformer QA",
      "Automated sorting via HANDLER interface",
      "Educational and R&D component characterisation",
    ],
  },
  {
    slug: "hantek-ape11l1000",
    title: "Hantek APE11L1000 AC Power Source (1KVA, 110V/220V)",
    shortTitle: "Hantek APE11L1000 AC Power Source",
    brand: "Hantek",
    model: "APE11L1000",
    category: "AC Power Sources",
    image: "/__l5e/assets-v1/bf71d2e7-28d6-4f77-b637-a09eb4b8a91b/hantek-ape11l1000.jpg",
    description:
      "1KVA single-phase programmable AC power source with 110 V / 220 V rated voltage, 9.1 A / 4.5 A rated current and 0–300 V adjustable output. Built-in isolation transformer and 4.3-inch colour LCD with waveform recording.",
    highlights: [
      "1KVA output power, rated 110 V / 220 V",
      "Rated current 9.1 A / 4.5 A",
      "Adjustable output 0–300 V, 45–65 Hz",
      "4.3-inch colour LCD with 30-day waveform recording",
      "Built-in isolation transformer, OVP/OCP/OTP/OPP protection",
    ],
    specs: [
      { label: "Model", value: "APE11L1000" },
      { label: "Output Power", value: "1 KVA" },
      { label: "Rated Voltage", value: "110 V / 220 V" },
      { label: "Rated Current", value: "9.1 A / 4.5 A" },
      { label: "Output Voltage Range", value: "0 – 300 V" },
      { label: "Frequency Range", value: "45 – 65 Hz" },
      { label: "Display", value: "4.3-inch colour LCD" },
      { label: "Recording", value: "30-day waveform recording" },
      { label: "Protection", value: "OVP / OCP / OTP / OPP" },
    ],
    applications: [
      "Global mains simulation for export product testing",
      "Appliance, adapter and motor testing",
      "Laboratory clean-power supply",
      "Production line functional testing",
    ],
  },
  {
    slug: "jartul-jt6311a",
    title: "Jartul JT6311A DC Electronic Load (150W / 150V / 30A)",
    shortTitle: "Jartul JT6311A DC Electronic Load",
    brand: "Jartul",
    model: "JT6311A",
    category: "DC Electronic Loads",
    image: "/__l5e/assets-v1/36665805-8730-4a7f-98b5-5d85af0e023c/jartul-jt6311a.png",
    description:
      "150 W / 30 A / 150 V programmable DC electronic load with 10 µs full-range current rising time and 500 kHz synchronized sampling. Ideal for testing switching power supplies, LED drivers, ATE systems, fuses, batteries and adapters.",
    highlights: [
      "150 W / 150 V / 30 A operating range",
      "10 µs full-range current rise time",
      "500 kHz synchronized sampling",
      "CC / CV / CR / CP operation modes",
      "Dynamic, list, battery and short-circuit test functions",
    ],
    specs: [
      { label: "Model", value: "JT6311A" },
      { label: "Rated Power", value: "150 W" },
      { label: "Input Voltage", value: "0 – 150 V" },
      { label: "Input Current", value: "0 – 30 A" },
      { label: "Current Rise Time", value: "10 µs (full range)" },
      { label: "Sampling Rate", value: "500 kHz synchronized" },
      { label: "Modes", value: "CC / CV / CR / CP" },
      { label: "Test Functions", value: "Dynamic, list, battery, short test" },
    ],
    applications: [
      "Switching power supply and LED driver testing",
      "Battery discharge and capacity measurement",
      "Fuse and adapter verification",
      "ATE system integration",
    ],
  },
  {
    slug: "metrel-mi3108",
    title: "Metrel MI 3108 EurotestPV Photovoltaic & Installation Tester",
    shortTitle: "Metrel MI 3108 EurotestPV",
    brand: "Metrel",
    model: "MI 3108",
    category: "Electrical Safety Testing",
    image: "/__l5e/assets-v1/d9e9ac3a-7f7b-4637-9ffa-d7be100cbf47/metrel-mi3108.jpg",
    description:
      "Combined photovoltaic and electrical installation safety tester. Performs complete EN 61557 installation tests plus EN 62446 PV tests, I-V curve tracing, STC calculation (EN 61829) and DC/AC inverter power measurements up to 1000 V / 15 A DC.",
    highlights: [
      "I-V curve tracing up to 1000 V / 15 A DC",
      "STC recalculation per EN 61829",
      "RCD (AC/A/B), loop, line, insulation and earth tests",
      "Simultaneous AC & DC power and inverter efficiency",
      "PV Safety Probe for safe disconnection",
    ],
    specs: [
      { label: "Model", value: "MI 3108 EurotestPV" },
      { label: "Installation Standards", value: "EN 61557 full test suite" },
      { label: "PV Standards", value: "EN 62446, EN 61829" },
      { label: "PV DC Range", value: "Up to 1000 V / 15 A" },
      { label: "RCD Types", value: "AC, A, B" },
      { label: "Measurements", value: "Insulation, loop, line, earth, continuity, RCD" },
      { label: "Power Measurement", value: "Simultaneous AC & DC, inverter efficiency" },
    ],
    applications: [
      "Solar PV plant commissioning and periodic testing",
      "Electrical installation safety verification",
      "Inverter efficiency assessment",
      "Contractor and utility field service",
    ],
  },
  {
    slug: "metrel-mi3132",
    title: "Metrel MI 3132 EV Tester (Electric Vehicle Insulation Tester)",
    shortTitle: "Metrel MI 3132 EV Tester",
    brand: "Metrel",
    model: "MI 3132",
    category: "EV Testing",
    image: "/__l5e/assets-v1/e0b0fd7b-082b-4a26-a7b9-2265e9f44126/metrel-mi3132.jpg",
    description:
      "Portable EV insulation and bonding tester compliant with UN ECE R100 Annex 4A/4B and ISO 6469-3. Insulation up to 1500 V, 4-wire micro-ohm measurement at 2 A DC, 4.3″ colour touchscreen and Li-Ion battery operation for field use.",
    highlights: [
      "Insulation test 50 V – 1500 V, up to 3 GΩ",
      "4-wire micro-ohm measurement with 2 A DC",
      "Compliant with UN ECE R100 and ISO 6469-3",
      "4.3″ colour touchscreen with AUTO SEQUENCE",
      "CAT III 1000 V, Li-Ion battery powered",
    ],
    specs: [
      { label: "Model", value: "MI 3132 EV Tester" },
      { label: "Insulation Voltage", value: "50 V – 1500 V" },
      { label: "Insulation Range", value: "Up to 3 GΩ" },
      { label: "Bonding Test", value: "4-wire micro ohm, 2 A DC" },
      { label: "Standards", value: "UN ECE R100 Annex 4A/4B, ISO 6469-3" },
      { label: "Display", value: "4.3″ colour touchscreen" },
      { label: "Safety Category", value: "CAT III 1000 V" },
      { label: "Power", value: "Li-Ion rechargeable battery" },
    ],
    applications: [
      "EV and hybrid vehicle high-voltage safety testing",
      "Battery pack insulation verification",
      "Equipotential bonding checks on EV chassis",
      "Automotive service and homologation labs",
    ],
  },
  {
    slug: "orion-phase-sync",
    title: "Orion EE Phase Sync — IEC 62271-215:2021 Phase Comparator",
    shortTitle: "Orion EE Phase Sync Phase Comparator",
    brand: "Orion EE",
    model: "Phase Sync",
    category: "Medium Voltage Testing",
    image: "/__l5e/assets-v1/5c3e9385-aa4c-442e-92e0-b900586cd9f8/orion-phase-sync.jpg",
    description:
      "Class A capacitive phase comparator for medium voltage equipment with IEC 62271-215:2021 measuring points. LCD + LED indication of phase coincidence, voltage presence and frequency, with Type-C rechargeable Li-ion battery.",
    highlights: [
      "IEC 62271-215:2021 Class A compliant",
      "Phase coincidence, voltage presence and frequency on LCD",
      "Single-earth simultaneous connected operation",
      "50/60 Hz operation, threshold 10%–45% Un",
      "Type-C rechargeable, IP 2X / IK 07, only 250 g",
    ],
    specs: [
      { label: "Model", value: "Phase Sync" },
      { label: "Standard", value: "IEC 62271-215:2021, Class A" },
      { label: "Frequency", value: "50 / 60 Hz" },
      { label: "Threshold", value: "10% – 45% Un" },
      { label: "Indication", value: "LCD + LED (phase, voltage, frequency)" },
      { label: "Protection", value: "IP 2X / IK 07" },
      { label: "Battery", value: "Type-C rechargeable Li-ion" },
      { label: "Weight", value: "250 g" },
    ],
    applications: [
      "Medium voltage switchgear phase comparison",
      "Utility network switching operations",
      "Substation maintenance and commissioning",
      "Industrial MV distribution work",
    ],
  },
];

export const getLaunchDetail = (slug?: string) =>
  launchDetails.find((p) => p.slug === slug);
