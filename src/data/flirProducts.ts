import e52Image from "@/assets/flir-e52.png.asset.json";
import e52Datasheet from "@/assets/flir-e52-datasheet.pdf.asset.json";

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
];