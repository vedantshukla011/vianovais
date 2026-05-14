export interface MedicalProduct {
  name: string;
  price: number;
  category: string;
}

export const MEDICAL_PRODUCTS: MedicalProduct[] = [
  { name: "Phonocardiogram (PCG)", price: 65475, category: "Diagnostic Equipment" },
  { name: "Pulse Oximeter", price: 202.5, category: "Patient Monitoring" },
  { name: "BP Machine Mercury / Sphygmomanometer (Mercury)", price: 2902.5, category: "Patient Monitoring" },
  { name: "12 Channel ECG Machine", price: 51300, category: "Diagnostic Equipment" },
  { name: "Treadmill Test (TMT)", price: 121500, category: "Diagnostic Equipment" },
  { name: "Plain Bed (ABS Panel, General Category)", price: 7371, category: "Hospital Furniture" },
  { name: "ECG Machine Trolley, Z-Type", price: 6750, category: "Hospital Furniture" },
  { name: "Holter ECG System — 12 Channel", price: 54000, category: "Diagnostic Equipment" },
  { name: "Hydraulic OT Table (Regular)", price: 39825, category: "Surgical Equipment" },
  { name: "Half-Body Adult & Pediatric Manikin", price: 11475, category: "Training & Simulation" },
  { name: "Yankauer Tip (SS)", price: 742.5, category: "Surgical Consumables" },
  { name: "Automated External Defibrillator (AED) — View Plus, 3-Step / 2-Button", price: 51975, category: "Emergency & Critical Care" },
  { name: "B. Braun Stimuplex HNS 12 Peripheral Nerve Stimulator with Mapper", price: 166050, category: "Anesthesia & Pain Management" },
  { name: "Contec Digital Spirometer", price: 23625, category: "Diagnostic Equipment" },
  { name: "Suction Apparatus", price: 10800, category: "Emergency & Critical Care" },
  { name: "Laryngoscope Set — Pediatric", price: 3375, category: "Anesthesia & Pain Management" },
  { name: "Airways (OPA / NPA / LMA) — Sterilised", price: 877.5, category: "Anesthesia & Pain Management" },
  { name: "Crash Cart Full (SS) — 202", price: 17718.75, category: "Emergency & Critical Care" },
  { name: "Anesthesia Machine — Supreme", price: 222750, category: "Anesthesia & Pain Management" },
  { name: "Digital Thermometer", price: 121.5, category: "Patient Monitoring" },
  { name: "Stimuplex Needle", price: 1282.5, category: "Anesthesia & Pain Management" },
  { name: "Laryngoscope Set — Adult", price: 3375, category: "Anesthesia & Pain Management" },
  { name: "Infant Airway Management Trainer", price: 19575, category: "Training & Simulation" },
  { name: "Laparoscopy Simulator (Without Instrument)", price: 22275, category: "Training & Simulation" },
  { name: "Surgical Instruments — Dissection Kit (Sterilised)", price: 2227.5, category: "Surgical Consumables" },
  { name: "Cautery Machine — 400 W", price: 41850, category: "Surgical Equipment" },
  { name: "Adult IV Arm Training Kit", price: 10125, category: "Training & Simulation" },
];
