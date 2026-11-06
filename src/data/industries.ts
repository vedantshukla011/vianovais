import { Factory, CarFront, FlaskConical, GraduationCap, Pill, Stethoscope, ClipboardCheck, Bot, LucideIcon } from "lucide-react";

export interface IndustryDetail {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  intro: string;
  offerings: { title: string; description: string }[];
  applications: string[];
}

export const INDUSTRIES: IndustryDetail[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    tagline: "Turnkey test, measurement & sourcing solutions for modern factories",
    intro:
      "We empower manufacturing units with end-to-end test & measurement systems, precision tooling, components, and reliable raw material sourcing — helping production lines stay accurate, efficient, and audit-ready.",
    offerings: [
      { title: "Turnkey Test & Measurement Solutions", description: "Custom-built calibration benches, inspection lines, and metrology setups designed around your production workflow." },
      { title: "Precision Tools & Instruments", description: "Vernier callipers, micrometers, height gauges, torque tools, and digital measuring instruments from trusted global brands." },
      { title: "Components & Sub-Assemblies", description: "Sourcing of bearings, valves, fasteners, gaskets, and mechanical assemblies for OEMs and MRO needs." },
      { title: "Raw Material Sourcing", description: "Reliable supply of metals, alloys, polymers, and specialty materials with full traceability and certification." },
      { title: "Industrial Automation", description: "PLC, SCADA, RFID, and IoT-based automation to digitize shop floors and improve throughput." },
      { title: "ESD-Safe Lab & Workstation Setup", description: "Customized ESD furniture, racks, and grounding systems for sensitive manufacturing environments." },
    ],
    applications: ["Heavy engineering", "Precision machining", "Electronics assembly", "Process industries", "OEM production lines"],
  },
  {
    slug: "automobile",
    name: "Automobile",
    icon: CarFront,
    tagline: "Test, measurement & QA solutions built for automotive and EV manufacturing",
    intro:
      "From conventional automotive assembly lines to next-generation EV and battery facilities, we deliver specialized testing apparatus and quality assurance solutions that meet the highest automotive standards.",
    offerings: [
      { title: "Turnkey Automotive Test & Measurement", description: "Inline and end-of-line testing systems for automotive components, sub-assemblies, and finished vehicles." },
      { title: "EV-Specific Apparatus", description: "Specialized instruments for electric vehicle drivetrain, motor, and power electronics testing." },
      { title: "Battery Testing Solutions", description: "Cell, module, and pack testing — capacity, cycle life, thermal, IR, and safety testing equipment for Li-ion batteries." },
      { title: "Quality Assurance Solutions", description: "Dimensional inspection, surface finish testing, hardness testing, and metallurgical lab setups." },
      { title: "Environmental Test Chambers", description: "Temperature, humidity, vibration, and salt-spray chambers for automotive component qualification." },
      { title: "Calibration & Metrology", description: "Traceable calibration of torque tools, gauges, and measuring instruments to IATF 16949 requirements." },
    ],
    applications: ["OEM assembly plants", "Tier-1 & Tier-2 suppliers", "EV manufacturing", "Battery R&D and production", "Automotive testing labs"],
  },
  {
    slug: "rd",
    name: "R&D",
    icon: FlaskConical,
    tagline: "Apparatus to enable world-class research & development facilities",
    intro:
      "We equip R&D centers with high-precision instruments, lab apparatus, and customized setups that accelerate innovation across scientific, industrial, and product development domains.",
    offerings: [
      { title: "Analytical Instruments", description: "Spectrophotometers, pH meters, conductivity meters, and analytical balances for research-grade accuracy." },
      { title: "Scientific Lab Equipment", description: "Centrifuges, microscopes, hot plates, magnetic stirrers, and complete glassware setups." },
      { title: "Custom Test Rigs", description: "Bespoke test benches and fixtures designed for prototype validation and experimental research." },
      { title: "Environmental Sensing", description: "Temperature, humidity, gas, and air-quality sensors for controlled research environments." },
      { title: "Data Acquisition Systems", description: "Multi-channel DAQ systems, sensors, and software for capturing and analyzing experimental data." },
      { title: "Cleanroom & ESD Setup", description: "Turnkey cleanroom furniture, laminar flow units, and ESD-safe research workstations." },
    ],
    applications: ["Corporate R&D centers", "Government research labs", "University research", "Product innovation centers", "Material science labs"],
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    tagline: "Complete lab and learning solutions for schools, colleges & universities",
    intro:
      "We help educational institutions build world-class teaching and research labs with curriculum-aligned equipment, interactive learning tools, and durable lab infrastructure.",
    offerings: [
      { title: "School & College Lab Setup", description: "Physics, chemistry, biology, and engineering lab equipment aligned with CBSE, ICSE, and university syllabi." },
      { title: "Interactive Displays", description: "Touchscreen panels, digital whiteboards, and smart classroom solutions for modern teaching." },
      { title: "STEM & Robotics Kits", description: "Hands-on learning kits for electronics, robotics, IoT, and automation training." },
      { title: "Lab Furniture & ESD Workstations", description: "Durable, modular lab benches, fume hoods, and ESD-safe stations for technical institutes." },
      { title: "Measuring & Testing Instruments", description: "Educational-grade callipers, micrometers, multimeters, and oscilloscopes for practical training." },
      { title: "Scientific Glassware & Consumables", description: "Beakers, flasks, pipettes, reagents, and consumables for everyday lab use." },
    ],
    applications: ["Schools & high schools", "Engineering colleges", "Polytechnics & ITIs", "Universities", "Skill development centers"],
  },
  {
    slug: "pharmaceuticals",
    name: "Pharmaceuticals",
    icon: Pill,
    tagline: "Compliant lab & QC solutions for pharma manufacturing and research",
    intro:
      "We supply pharma-grade testing, QC, and microbiology equipment that meet GMP, USP, and IP standards — supporting formulation, production, and quality assurance teams.",
    offerings: [
      { title: "Tablet Testing Equipment", description: "Dissolution, disintegration, friability, and hardness testers for solid dosage forms." },
      { title: "Microbiology Equipment", description: "Laminar air flow units, autoclaves, incubators, and colony counters for sterile environments." },
      { title: "Analytical Balances & pH Meters", description: "High-precision weighing and analytical instruments for QC labs." },
      { title: "Stability & Environmental Chambers", description: "Temperature and humidity-controlled chambers for ICH-compliant stability studies." },
      { title: "Capsule Filling & Bulk Density Apparatus", description: "Production and QC equipment for formulation development and batch testing." },
      { title: "Cleanroom & HVAC Validation Tools", description: "Particle counters, anemometers, and validation kits for GMP-compliant facilities." },
    ],
    applications: ["Pharma manufacturing", "Formulation R&D", "QC & QA labs", "Microbiology labs", "Contract research organizations"],
  },
  {
    slug: "medical",
    name: "Medical",
    icon: Stethoscope,
    tagline: "Reliable diagnostic & laboratory solutions for healthcare facilities",
    intro:
      "We deliver medical lab and diagnostic equipment that healthcare providers rely on for accurate, repeatable results — from primary care to specialized hospital labs.",
    offerings: [
      { title: "Pathology Lab Equipment", description: "Centrifuges, microscopes, autoclaves, and incubators for diagnostic labs." },
      { title: "Analytical & Diagnostic Instruments", description: "Spectrophotometers, blood analyzers, and biochemistry testing instruments." },
      { title: "Sterilization Equipment", description: "Autoclaves, hot air ovens, and UV sterilizers for clinical and surgical use." },
      { title: "Cold Storage & Refrigeration", description: "Vaccine refrigerators, blood bank refrigerators, and ultra-low freezers." },
      { title: "Lab Furniture & Consumables", description: "Hospital-grade workstations, glassware, and consumables for daily diagnostic operations." },
      { title: "Environmental Monitoring", description: "Temperature, humidity, and air-quality monitoring for OT, ICU, and storage areas." },
    ],
    applications: ["Hospitals", "Diagnostic centers", "Pathology labs", "Blood banks", "Medical research institutes"],
  },
  {
    slug: "qa",
    name: "QA",
    icon: ClipboardCheck,
    tagline: "Inspection and calibration equipment for factory quality assurance",
    intro:
      "Support factory QA teams with dimensional inspection tools, hardness and coating testing, calibration support, and in-process fault detection for manufacturing and OEM production lines.",
    offerings: [
      { title: "Dimensional Inspection Tools", description: "Callipers, micrometers, CMM accessories, height gauges, and surface plates." },
      { title: "Hardness & Material Testing", description: "Rockwell, Brinell, Vickers hardness testers and tensile testing equipment." },
      { title: "Surface & Coating Inspection", description: "Surface roughness testers, coating thickness gauges, and gloss meters." },
      { title: "Calibration Services & Tools", description: "Traceable calibration solutions for instruments aligned with ISO/IEC 17025." },
      { title: "Fault Recognition Devices", description: "NDT, leak detection, and diagnostic equipment for in-process inspection." },
      { title: "Quality Management Systems", description: "Digital QA workflow, asset tracking, and inspection software integrations." },
    ],
    applications: ["Manufacturing QA labs", "Inspection agencies", "Calibration labs", "Contract testing labs", "OEM incoming-quality cells"],
  },
  {
    slug: "automation",
    name: "Automation",
    icon: Bot,
    tagline: "Smart automation, IoT & control solutions for industry 4.0",
    intro:
      "We design and supply automation solutions that connect machines, sensors, and people — enabling smarter factories, real-time monitoring, and data-driven decision making.",
    offerings: [
      { title: "PLC, SCADA & HMI Systems", description: "Industrial control hardware and supervisory software for process and discrete automation." },
      { title: "RFID & Asset Tracking", description: "RFID readers, tags, and tracking solutions for inventory, tools, and asset management." },
      { title: "IoT Sensors & Gateways", description: "Wireless sensors for temperature, vibration, energy, and condition monitoring." },
      { title: "Industrial Management Software", description: "Energy monitoring, OEE dashboards, and workflow automation platforms." },
      { title: "Robotic & Pick-Place Solutions", description: "Collaborative robots, vision systems, and automated material handling." },
      { title: "Custom Automation Projects", description: "Turnkey design, integration, and commissioning of automation systems for your line." },
    ],
    applications: ["Smart factories", "Process industries", "Warehousing & logistics", "Energy & utilities", "Building management"],
  },
];

export const getIndustry = (slug: string) => INDUSTRIES.find((i) => i.slug === slug);
