export type BrandProfile = {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  categories: { name: string; description: string }[];
  applications: string[];
  faqs: { question: string; answer: string }[];
};

export const BRAND_PROFILES: BrandProfile[] = [
  {
    slug: "keysight-technologies",
    name: "Keysight Technologies",
    title: "Keysight Test & Measurement Instruments",
    metaTitle: "Keysight Test Equipment in India | ViaNova",
    metaDescription: "Explore Keysight oscilloscopes, RF and microwave analyzers, signal generators, network analyzers and power instruments. Contact ViaNova for product selection and India availability.",
    overview: "Keysight Technologies develops electronic test and measurement systems used from component characterization through design validation and manufacturing test. ViaNova can help engineering teams identify instruments for electronic design, RF and microwave measurements, communications and automated test requirements. Contact us to confirm current sourcing and availability for your required model.",
    categories: [
      { name: "Oscilloscopes and probes", description: "Time-domain signal capture, debugging and analysis for electronics and embedded designs." },
      { name: "RF and microwave test", description: "Spectrum, signal and network analysis for high-frequency components and communication systems." },
      { name: "Signal generators", description: "Stimulus and waveform generation for receiver, component and system verification." },
      { name: "Power and precision measurement", description: "Programmable supplies, electronic loads and precision measurement instruments for lab and production use." },
    ],
    applications: ["Electronics research and development", "RF, microwave and wireless communications", "Semiconductor characterization", "Automated production and compliance testing"],
    faqs: [
      { question: "What Keysight instruments can I source through ViaNova?", answer: "ViaNova can help you check availability for Keysight oscilloscopes, analyzers, generators, power instruments and other electronic test equipment. Share the required model and application to confirm options." },
      { question: "How do I choose a Keysight oscilloscope or analyzer?", answer: "Start with signal bandwidth, channel count, measurement functions, software needs and calibration or compliance requirements. ViaNova can help compare suitable configurations." },
      { question: "Does ViaNova provide Keysight product availability in India?", answer: "Contact ViaNova with the model or specification you need to confirm current sourcing, delivery and applicable support terms in India." },
    ],
  },
  {
    slug: "keithley",
    name: "Keithley",
    title: "Keithley Precision Measurement Instruments",
    metaTitle: "Keithley Instruments in India | SMUs & DMMs | ViaNova",
    metaDescription: "Find Keithley source measure units, digital multimeters, electrometers and low-level measurement instruments. Contact ViaNova for model selection and India availability.",
    overview: "Keithley instruments are used when engineers need precise sourcing and measurement of electrical signals, from low-current device characterization to automated component test. ViaNova can help identify Keithley source measure units (SMUs), digital multimeters, electrometers and related equipment for your lab or production setup. Ask us to confirm current availability for your chosen model.",
    categories: [
      { name: "Source measure units", description: "Source voltage or current and measure device response in a single instrument for semiconductor and component characterization." },
      { name: "Digital multimeters", description: "Bench measurement for voltage, current, resistance and other electrical parameters." },
      { name: "Electrometers and picoammeters", description: "Low-current and high-impedance measurements for sensitive devices and materials." },
      { name: "Automated characterization", description: "Instrument combinations and control workflows for repeatable research and production tests." },
    ],
    applications: ["Semiconductor and materials research", "Low-current device characterization", "Component and sensor testing", "Automated electrical test systems"],
    faqs: [
      { question: "What is a Keithley source measure unit used for?", answer: "An SMU sources a controlled voltage or current while measuring the resulting current or voltage, making it useful for characterizing semiconductors, sensors and electronic components." },
      { question: "Can ViaNova help select a Keithley SMU?", answer: "Yes. Share your current and voltage ranges, resolution, measurement timing, channel needs and automation interface so the suitable instrument can be identified." },
      { question: "How can I check Keithley instrument availability in India?", answer: "Send ViaNova the model number or your measurement requirements to check current sourcing and delivery options." },
    ],
  },
  {
    slug: "tektronix",
    name: "Tektronix",
    title: "Tektronix Oscilloscopes, Probes & Test Equipment",
    metaTitle: "Tektronix Oscilloscopes & Test Equipment India | ViaNova",
    metaDescription: "Explore Tektronix oscilloscopes, probes, analyzers, signal generators and meters for electronics engineering. Contact ViaNova to check model availability in India.",
    overview: "Tektronix test equipment supports waveform capture, debugging and electrical characterization across electronics design, education and service. ViaNova can help you identify Tektronix oscilloscopes, probes, analyzers, signal generators and meters for your measurement task. Ask about current model sourcing and availability in India.",
    categories: [
      { name: "Oscilloscopes", description: "Digital, mixed-signal and application-specific platforms for observing and analyzing electrical waveforms." },
      { name: "Oscilloscope probes", description: "Voltage, current and application-specific probes matched to measurement bandwidth and circuit conditions." },
      { name: "Analyzers and generators", description: "Spectrum and signal analysis alongside waveform generation for design verification." },
      { name: "Meters and sources", description: "Digital multimeters, source measure instruments, DC supplies and electronic loads for bench testing." },
    ],
    applications: ["Embedded electronics debugging", "Power electronics and switching analysis", "RF and signal integrity measurements", "Education, service and manufacturing test"],
    faqs: [
      { question: "Which Tektronix oscilloscope should I choose?", answer: "Compare bandwidth, sample rate, memory depth, channel type, analysis options and probe compatibility against your signal and test plan." },
      { question: "Can ViaNova help source Tektronix probes and accessories?", answer: "Share the oscilloscope model, signal type and measurement range so probe and accessory compatibility can be checked." },
      { question: "How do I request a Tektronix quotation in India?", answer: "Send ViaNova the model number, configuration and delivery location through the inquiry form to check current availability and quotation details." },
    ],
  },
  {
    slug: "fluke",
    name: "Fluke",
    title: "Fluke Industrial Test and Measurement Tools",
    metaTitle: "Fluke Test Tools in India | Multimeters & Thermal Imagers | ViaNova",
    metaDescription: "Explore Fluke digital multimeters, clamp meters, electrical testers, thermal imagers and calibration tools. Contact ViaNova for sourcing and availability in India.",
    overview: "Fluke makes handheld and field test instruments for electrical troubleshooting, maintenance, calibration and facility diagnostics. ViaNova can help you identify Fluke digital multimeters, clamp meters, electrical installation testers, thermal imagers and calibration tools suited to your work. Contact us to check model availability and sourcing options.",
    categories: [
      { name: "Digital multimeters and clamp meters", description: "Handheld electrical measurements for service, maintenance and troubleshooting tasks." },
      { name: "Electrical installation testers", description: "Test equipment for electrical system verification and installation maintenance." },
      { name: "Thermal imagers", description: "Infrared inspection tools for locating temperature patterns in electrical and mechanical assets." },
      { name: "Calibration and process tools", description: "Field and bench instruments for checking electrical, pressure and temperature measurements." },
    ],
    applications: ["Industrial electrical maintenance", "Building and facility diagnostics", "Electrical installation checks", "Instrument calibration and process service"],
    faqs: [
      { question: "Which Fluke multimeter is right for industrial maintenance?", answer: "The right model depends on voltage category, measurement functions, environment, logging needs and accessories. Share the application and safety requirements for help narrowing the range." },
      { question: "Does Fluke make thermal imaging cameras?", answer: "Yes. Fluke offers thermal imagers for electrical, mechanical and building inspection. Resolution, temperature range and focus features vary by model." },
      { question: "Can I request Fluke tools through ViaNova?", answer: "Contact ViaNova with the model or measurement requirement to check current sourcing and delivery options in India." },
    ],
  },
  {
    slug: "testo",
    name: "TESTO",
    title: "Testo Measurement Instruments",
    metaTitle: "Testo Instruments in India | Thermal Imagers & HVAC Tools | ViaNova",
    metaDescription: "Explore Testo thermal imagers, HVAC and environmental meters, temperature instruments and data loggers. ViaNova is an authorized Testo distributor in India.",
    overview: "Testo instruments support temperature, humidity, pressure, air-flow and thermal imaging measurements in HVAC, building services, food safety and industrial maintenance. ViaNova is an authorized Testo distributor in India and can help select an instrument for your application, measurement range and documentation needs.",
    categories: [
      { name: "Thermal imaging cameras", description: "Infrared cameras for electrical inspection, building diagnostics and predictive maintenance." },
      { name: "HVAC and air quality meters", description: "Portable instruments for temperature, humidity, differential pressure, air velocity and indoor environment checks." },
      { name: "Temperature and food safety", description: "Thermometers and data loggers for spot checks and temperature monitoring." },
      { name: "Combustion and environmental analysis", description: "Measurement tools for heating systems, flue gas checks and environmental parameters." },
    ],
    applications: ["HVAC commissioning and service", "Electrical and mechanical thermography", "Food safety and cold-chain monitoring", "Building energy and indoor air diagnostics"],
    faqs: [
      { question: "Where can I buy Testo instruments in India?", answer: "ViaNova Industrial Solutions is an authorized Testo distributor in India. Contact us with the model or measurement task for product guidance and a quotation." },
      { question: "Which Testo instruments are used for HVAC measurement?", answer: "Testo offers instruments for temperature, humidity, differential pressure, air velocity, combustion analysis and thermal imaging. Select a device based on the parameter and range required." },
      { question: "Does Testo offer thermal cameras for maintenance?", answer: "Yes. Testo thermal imagers support electrical, mechanical and building inspections. Compare infrared resolution, sensitivity, lens, temperature range and reporting functions." },
    ],
  },
  {
    slug: "national-instruments",
    name: "National Instruments (NI)",
    title: "National Instruments (NI) Automated Test & Data Acquisition",
    metaTitle: "NI Data Acquisition & Automated Test Systems | ViaNova India",
    metaDescription: "Explore National Instruments data acquisition, PXI modular test, CompactDAQ and LabVIEW-based test systems. Contact ViaNova to discuss configuration and sourcing.",
    overview: "National Instruments (NI) builds modular hardware and software for automated test, measurement and data acquisition. System choices depend on signal types, channel count, sample rates, synchronization, I/O and software architecture. ViaNova can discuss requirements for NI-based systems and check product sourcing and availability.",
    categories: [
      { name: "Data acquisition", description: "Measurement hardware for acquiring sensor, voltage, current and control signals." },
      { name: "PXI modular instrumentation", description: "Chassis-based instruments and controllers for synchronized automated test systems." },
      { name: "CompactDAQ and CompactRIO", description: "Modular measurement and control platforms for laboratory, machine and field applications." },
      { name: "LabVIEW test software", description: "Graphical development tools for instrument control, measurement automation and data analysis." },
    ],
    applications: ["Automated validation and production test", "Sensor and data acquisition", "Research laboratory measurement", "Distributed monitoring and control"],
    faqs: [
      { question: "What is NI data acquisition hardware used for?", answer: "NI DAQ hardware acquires measurements from sensors and electrical signals for monitoring, analysis, control and automated test applications." },
      { question: "How do I configure an NI PXI test system?", answer: "Start with the required measurements, signal conditioning, channel count, synchronization, throughput, controller and software. ViaNova can help review these system requirements." },
      { question: "Can ViaNova help source NI modules and instruments?", answer: "Contact ViaNova with the NI part numbers or system design to check current availability and sourcing options." },
    ],
  },
  {
    slug: "weller",
    name: "Weller",
    title: "Weller Soldering and Rework Equipment",
    metaTitle: "Weller Soldering Stations & Rework Tools in India | ViaNova",
    metaDescription: "Explore Weller soldering stations, irons, tips, rework equipment and fume extraction for electronics production and repair. Contact ViaNova for availability.",
    overview: "Weller provides soldering and rework equipment for electronics assembly, repair and production workstations. Select a system based on the soldering process, required power and temperature control, tip range, ESD needs and workstation extraction. ViaNova can help identify suitable Weller tools and accessories and confirm current sourcing options.",
    categories: [
      { name: "Soldering stations and irons", description: "Temperature-controlled equipment for electronics assembly, prototyping and service work." },
      { name: "Soldering tips and accessories", description: "Process-matched tips, stands, handpieces and workstation accessories." },
      { name: "Hot-air and rework systems", description: "Tools for component removal, rework and thermal processing on electronic assemblies." },
      { name: "Solder fume extraction", description: "Filtration equipment for soldering workstations and production areas." },
    ],
    applications: ["PCB assembly and repair", "Electronics manufacturing workstations", "SMD rework and component replacement", "ESD-controlled production and laboratory environments"],
    faqs: [
      { question: "Which Weller soldering station should I choose?", answer: "Consider the soldering task, power demand, temperature control, tip system, handpiece requirements and ESD policy for your workstation." },
      { question: "Does Weller offer fume extraction equipment?", answer: "Yes. Weller has fume extraction products for soldering workstations. Choose a unit based on the number of workstations and filtration requirements." },
      { question: "Can ViaNova help source Weller tips and spares?", answer: "Share the station or handpiece model and the tip or accessory number so compatibility and current availability can be checked." },
    ],
  },
  {
    slug: "vaisala",
    name: "VAISALA",
    title: "Vaisala Industrial and Environmental Measurement Instruments",
    metaTitle: "Vaisala Instruments in India | Humidity & Dew Point | ViaNova",
    metaDescription: "Explore Vaisala humidity, temperature, dew point, pressure and CO₂ measurement instruments for HVAC and industrial processes. ViaNova is an authorized Vaisala distributor in India.",
    overview: "Vaisala measurement instruments monitor environmental and process conditions where reliable humidity, dew point, temperature, pressure or carbon dioxide data matters. ViaNova is an authorized Vaisala distributor in India and can help match transmitters, probes and handheld meters to the measurement range, installation and output requirements.",
    categories: [
      { name: "Humidity and temperature transmitters", description: "Wall, duct and process instruments for environmental monitoring and control." },
      { name: "Dew point and moisture in gas", description: "Measurement instruments for compressed air, dryers and low-moisture industrial processes." },
      { name: "CO₂ and indoor air quality", description: "Transmitters and meters for building ventilation and controlled indoor environments." },
      { name: "Pressure and weather measurements", description: "Instruments and sensors for barometric pressure, weather and environmental monitoring applications." },
    ],
    applications: ["Data centers and cleanrooms", "Compressed air and industrial drying", "HVAC and building automation", "Pharmaceutical, food and process manufacturing"],
    faqs: [
      { question: "Where can I buy Vaisala instruments in India?", answer: "ViaNova Industrial Solutions is an authorized Vaisala distributor in India. Contact us with the parameter, range and installation details to request product guidance and a quotation." },
      { question: "Which Vaisala instrument measures dew point in compressed air?", answer: "Vaisala offers dew point transmitters and probes for compressed-air systems. Selection depends on the required dew-point range, pressure, installation and sampling arrangement." },
      { question: "Can Vaisala transmitters be used in HVAC systems?", answer: "Vaisala has humidity and temperature transmitter families for HVAC and building automation. Confirm mounting, output, communication and accuracy needs for the application." },
    ],
  },
  {
    slug: "siglent",
    name: "SIGLENT",
    title: "SIGLENT Test & Measurement Instruments",
    metaTitle: "SIGLENT Instruments in India | Oscilloscopes & Analyzers | ViaNova",
    metaDescription: "Explore SIGLENT oscilloscopes, spectrum and network analyzers, waveform generators, power supplies and meters. ViaNova is an authorized SIGLENT distributor in India.",
    overview: "SIGLENT supplies electronic test equipment for R&D, production, education and service. Its instrument portfolio includes oscilloscopes, spectrum and vector network analyzers, signal and waveform generators, programmable power supplies, electronic loads and digital multimeters. ViaNova is an authorized SIGLENT distributor in India and can help configure an instrument set for your test bench.",
    categories: [
      { name: "Digital oscilloscopes", description: "Waveform capture platforms for embedded design, power electronics and general electronics debugging." },
      { name: "Spectrum and network analyzers", description: "Frequency-domain tools for RF, wireless, component and network measurements." },
      { name: "Signal and waveform generators", description: "Stimulus sources for analog, digital, RF and function testing." },
      { name: "Power supplies, loads and meters", description: "Bench sources and measurement instruments for component, board and power-supply test." },
    ],
    applications: ["Electronics design and troubleshooting", "RF and wireless development", "Power supply and converter validation", "Production test, education and service labs"],
    faqs: [
      { question: "Where can I buy SIGLENT instruments in India?", answer: "ViaNova Industrial Solutions is an authorized SIGLENT distributor in India. Contact us with the instrument category or model to check options and request a quotation." },
      { question: "What SIGLENT equipment is available for RF testing?", answer: "SIGLENT offers spectrum analyzers, vector network analyzers and RF/microwave signal generators. Match the frequency range, dynamic range and measurement functions to your application." },
      { question: "Can ViaNova help build a SIGLENT test bench?", answer: "Yes. Share the signals, bandwidths, channels, power ranges and interfaces you need; we can help select compatible instruments and accessories." },
    ],
  },
  {
    slug: "hantek",
    name: "Hantek",
    title: "Hantek Oscilloscopes and Electronic Test Equipment",
    metaTitle: "Hantek Oscilloscopes & Test Equipment in India | ViaNova",
    metaDescription: "Explore Hantek oscilloscopes, automotive diagnostic tools, signal generators, multimeters and power instruments. ViaNova is an authorized Hantek distributor in India.",
    overview: "Hantek offers electronic test equipment for design benches, service workshops, automotive diagnostics and education. Its range includes benchtop and USB oscilloscopes, handheld automotive instruments, signal generators, multimeters, probes and power equipment. ViaNova is an authorized Hantek distributor in India and can help identify a suitable model for your measurement and budget requirements.",
    categories: [
      { name: "Digital and USB oscilloscopes", description: "Bench, portable and PC-connected instruments for waveform capture and circuit debugging." },
      { name: "Automotive diagnostic instruments", description: "Automotive oscilloscopes, probes and test tools for vehicle electrical and electronic diagnostics." },
      { name: "Signal generators and analyzers", description: "Electronic stimulus and analysis instruments for lab, repair and development work." },
      { name: "Meters, probes and power equipment", description: "Measurement accessories, digital multimeters, current probes and programmable sources." },
    ],
    applications: ["Automotive electrical diagnostics", "Electronics repair and service", "Engineering education and laboratories", "Circuit development and production testing"],
    faqs: [
      { question: "Where can I buy Hantek oscilloscopes in India?", answer: "ViaNova Industrial Solutions is an authorized Hantek distributor in India. Contact us with the bandwidth, channels and features you need for a quotation." },
      { question: "Does Hantek make automotive diagnostic equipment?", answer: "Yes. Hantek offers automotive diagnostic instruments and accessories. Select equipment based on the vehicle system, signal type and diagnostic task." },
      { question: "How do I choose a Hantek oscilloscope?", answer: "Compare bandwidth, channel count, sample rate, memory, portability, included probes and whether you need standalone or PC-connected operation." },
    ],
  },
  {
    slug: "rigol",
    name: "RIGOL",
    title: "RIGOL Test & Measurement Instruments",
    metaTitle: "RIGOL Instruments in India | Oscilloscopes & Signal Generators | ViaNova",
    metaDescription: "Explore RIGOL oscilloscopes, spectrum analyzers, waveform generators, programmable power supplies and electronic loads. ViaNova is an authorized RIGOL distributor in India.",
    overview: "RIGOL develops electronic test and measurement instruments for design, education, manufacturing and service environments. Engineers can build a bench around oscilloscopes, spectrum analyzers, waveform generators, programmable DC supplies, electronic loads and digital multimeters. ViaNova is an authorized RIGOL distributor in India and can help select products and accessories for a measurement workflow.",
    categories: [
      { name: "Oscilloscopes", description: "Digital and mixed-signal platforms for circuit debugging, waveform analysis and power electronics." },
      { name: "Spectrum analyzers", description: "Frequency-domain instruments for RF testing, signal characterization and interference investigation." },
      { name: "Waveform and RF generators", description: "Function, arbitrary waveform and RF sources for stimulus and verification." },
      { name: "Power supplies and electronic loads", description: "Programmable DC sources and loads for power supply, battery and component testing." },
    ],
    applications: ["Electronic product design and debugging", "RF and communications testing", "Power electronics and battery test", "Education, repair and production test"],
    faqs: [
      { question: "Where can I buy RIGOL test equipment in India?", answer: "ViaNova Industrial Solutions is an authorized RIGOL distributor in India. Contact us with the model or application to confirm configuration, availability and quotation." },
      { question: "Which RIGOL instruments are used for power electronics?", answer: "Oscilloscopes, differential and current probes, programmable DC supplies and electronic loads are commonly combined for power electronics measurements. Choose them according to voltage, current and bandwidth requirements." },
      { question: "Can ViaNova help select a RIGOL oscilloscope?", answer: "Yes. Share the signal bandwidth, channel count, sample rate, analysis needs and budget so we can help narrow the instrument options." },
    ],
  },
];

export const getBrandProfile = (slug?: string) => BRAND_PROFILES.find((profile) => profile.slug === slug);
