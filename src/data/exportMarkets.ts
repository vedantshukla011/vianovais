export type ExportMarket = {
  slug: string;
  name: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  countries: string[];
  priorities: string[];
  faqs: { question: string; answer: string }[];
};

export const EXPORT_MARKETS: ExportMarket[] = [
  {
    slug: "middle-east",
    name: "Middle East & Arab markets",
    title: "Industrial Test Equipment Exports to Middle East & Arab Markets",
    metaTitle: "Test Equipment Exporter to Middle East & Arab Countries | ViaNova",
    metaDescription: "Source oscilloscopes, electrical test instruments and laboratory equipment from India for Middle East and Arab market requirements. Request a destination-specific export quotation from ViaNova.",
    intro: "ViaNova Industrial Solutions works with overseas procurement teams to identify test, measurement and laboratory equipment for projects in Arab markets. Share the destination country, models or technical specifications, quantities and required timeline. We will review sourcing and export options and confirm the quotation, destination eligibility, documents and shipment terms before you place an order.",
    countries: ["United Arab Emirates", "Saudi Arabia", "Oman", "Qatar", "Kuwait", "Bahrain", "Jordan", "Egypt", "Morocco", "Iraq", "Algeria", "Tunisia"],
    priorities: [
      "Check voltage, frequency, plug, language and environmental requirements for the destination and application.",
      "Share manufacturer, model number, required quantity and delivery city or port for an accurate export quotation.",
      "Confirm warranty territory, calibration requirements, product eligibility and documentation before ordering.",
    ],
    faqs: [
      { question: "Can ViaNova export test equipment to Arab countries?", answer: "Export requests are reviewed by destination and product. Tell us the country, product model and quantity so we can confirm whether the requested supply and shipment can be quoted." },
      { question: "Which Arab countries can I request a quotation for?", answer: "You can submit an inquiry for the UAE, Saudi Arabia, Oman, Qatar, Kuwait, Bahrain, Jordan, Egypt, Morocco and other destinations. Availability and export eligibility are confirmed for each request." },
      { question: "Can I request an export quote in a non-INR currency?", answer: "Add your preferred quotation currency to the inquiry. The available currency, payment terms and bank details will be confirmed in the quotation." },
      { question: "Does India distributor authorization automatically cover my country?", answer: "No. Authorization and warranty coverage are territory and product specific. ViaNova confirms the applicable brand authorization, manufacturer warranty and export eligibility for the requested destination." },
    ],
  },
  {
    slug: "africa",
    name: "African markets",
    title: "Test & Measurement Equipment Exports to Africa",
    metaTitle: "Test Equipment Exporter to Africa from India | ViaNova",
    metaDescription: "Request oscilloscopes, meters, power supplies, environmental instruments and laboratory equipment for African projects. ViaNova reviews product and destination details for an export quotation.",
    intro: "ViaNova supports export inquiries from African distributors, engineering contractors, laboratories, manufacturers and procurement teams. Our portfolio includes electronic test and measurement equipment, industrial instruments, precision tools and laboratory products. Send the destination country, delivery city or port, model numbers or specifications and quantity; we will confirm sourcing, export eligibility and shipment options for your requirement.",
    countries: ["South Africa", "Nigeria", "Kenya", "Ghana", "Tanzania", "Uganda", "Rwanda", "Ethiopia", "Zambia", "Botswana", "Morocco", "Egypt"],
    priorities: [
      "Provide the destination country and delivery city or port so availability and shipment options can be checked.",
      "Include local power, connector, environmental and calibration requirements when they affect instrument selection.",
      "Confirm product conformity, import documents, warranty territory and destination requirements before order placement.",
    ],
    faqs: [
      { question: "Can ViaNova supply test equipment to African countries?", answer: "ViaNova reviews export inquiries based on destination, product and shipment requirements. Submit your country, product details and quantity to check whether the order can be quoted." },
      { question: "Which African destinations can I request a quote for?", answer: "You can request a review for destinations including South Africa, Nigeria, Kenya, Ghana, Tanzania, Uganda, Rwanda, Ethiopia, Zambia, Botswana, Morocco and Egypt. Every destination and product combination is confirmed individually." },
      { question: "What information should an African buyer include in an inquiry?", answer: "Include your company, destination country, delivery city or port, instrument models or specifications, quantities, required date and preferred quotation currency." },
      { question: "Who confirms import duties and local approvals?", answer: "Applicable import duties, taxes, permits and local product approvals depend on the destination and shipment terms. Confirm these with your local customs broker or relevant authority before ordering." },
    ],
  },
];

export const getExportMarket = (slug?: string) => EXPORT_MARKETS.find((market) => market.slug === slug);
