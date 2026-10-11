import e52Image from "@/assets/flir-e52.png.asset.json";
import e52Datasheet from "@/assets/flir-e52-datasheet.pdf.asset.json";
import e8ProImage from "@/assets/flir-e8-pro.png.asset.json";
import e76Image from "@/assets/flir-e76.png.asset.json";
import c5Image from "@/assets/flir-c5.png.asset.json";

export type FlirProduct = {
  model: string;
  name: string;
  series: string;
  image: string;
  description: string;
  specs: string[];
  sourceUrl: string;
  detailPath?: string;
  datasheet?: { url: string; filename: string };
};

export const FLIR_PRODUCTS: FlirProduct[] = [
  {
    model: "E52",
    name: "Advanced Thermal Imaging Camera",
    series: "Exx-Series",
    image: e52Image.url,
    description: "Manual-focus thermal imaging for electrical and mechanical inspections with MSX® enhancement and FLIR Ignite™ connectivity.",
    specs: ["240 × 180 infrared resolution", "−20°C to 120°C / 0°C to 550°C", "<50 mK thermal sensitivity", "4-inch touchscreen, 24° × 18° field of view"],
    sourceUrl: "https://www.flir.com/en-gb/products/e52/",
    detailPath: "/products/flir-e52",
    datasheet: { url: e52Datasheet.url, filename: "FLIR-E52-Datasheet.pdf" },
  },
  {
    model: "E8 Pro",
    name: "Professional Thermal Imaging Camera",
    series: "Ex Pro-Series",
    image: e8ProImage.url,
    description: "Thermal inspections for electrical, mechanical and building problems, with a touchscreen and FLIR Ignite™ image sharing.",
    specs: ["320 × 240 infrared resolution", "−20°C to 200°C / 10°C to 550°C", "MSX® image enhancement", "3.5-inch touchscreen, Wi-Fi connectivity"],
    sourceUrl: "https://www.flir.com/products/e8-pro/",
  },
  {
    model: "E76",
    name: "Advanced Thermal Imaging Camera",
    series: "Exx-Series",
    image: e76Image.url,
    description: "Advanced inspections of near and distant targets with interchangeable lens options and laser-assisted autofocus.",
    specs: ["320 × 240 infrared resolution", "−20°C to 650°C; up to 1000°C with high-temperature option", "Laser-assisted autofocus", "Interchangeable lenses, FlexView™ options"],
    sourceUrl: "https://www.flir.com/products/e76/",
  },
  {
    model: "C5",
    name: "Compact Thermal Imaging Camera",
    series: "C-Series",
    image: c5Image.url,
    description: "Pocket-portable thermal imaging for everyday inspections, combining thermal and visual detail with cloud-connected reporting.",
    specs: ["160 × 120 infrared resolution", "−20°C to 400°C temperature range", "5 MP visual camera, MSX® enhancement", "1-Touch Level/Span, FLIR Ignite™ connectivity"],
    sourceUrl: "https://www.flir.com/products/c5/",
  },
];