import utd2102cexPlus from "@/assets/utd2102cex-plus.png.asset.json";
import utd2202cexPlus from "@/assets/utd2202cex-plus.jpg.asset.json";
import upo1084hd from "@/assets/upo1084hd.jpg.asset.json";
import upo1154hd from "@/assets/upo1154hd.jpg.asset.json";
import upo1152hd from "@/assets/upo1152hd.jpg.asset.json";
import upo1202 from "@/assets/upo1202.jpg.asset.json";
import upo3352e from "@/assets/upo3352e.jpg.asset.json";
import upo3354e from "@/assets/upo3354e.jpg.asset.json";
import upo1204 from "@/assets/upo1204.jpg.asset.json";
import upo1104 from "@/assets/upo1104.jpg.asset.json";
import upo2104 from "@/assets/upo2104.png.asset.json";
import mso1154hdS from "@/assets/mso1154hd-s.webp.asset.json";
import upo1082hd from "@/assets/upo1082hd.jpg.asset.json";
import upo1054 from "@/assets/upo1054.jpg.asset.json";

export interface UnitOscilloscope {
  model: string;
  name: string;
  image: string;
  price: number;
}

export const UNIT_OSCILLOSCOPES: UnitOscilloscope[] = [
  { model: "UTD2102CEX+", name: "Digital Storage Oscilloscope — 100 MHz, 2 Channel", image: utd2102cexPlus.url, price: 21609.322033898305 },
  { model: "UTD2202CEX+", name: "Digital Storage Oscilloscope — 200 MHz, 2 Channel", image: utd2202cexPlus.url, price: 30296.610169491527 },
  { model: "UPO1084HD", name: "High-Resolution Oscilloscope — 80 MHz, 4 Channel", image: upo1084hd.url, price: 49148.30508474576 },
  { model: "UPO1154HD", name: "High-Resolution Oscilloscope — 150 MHz, 4 Channel", image: upo1154hd.url, price: 61822.03389830509 },
  { model: "UPO1152HD", name: "High-Resolution Oscilloscope — 150 MHz, 2 Channel", image: upo1152hd.url, price: 49576.27118644068 },
  { model: "UPO1202", name: "Digital Phosphor Oscilloscope — 200 MHz, 2 Channel", image: upo1202.url, price: 38135.59322033898 },
  { model: "UPO3352E", name: "Digital Phosphor Oscilloscope — 350 MHz, 2 Channel", image: upo3352e.url, price: 129110.16949152543 },
  { model: "UPO3354E", name: "Digital Phosphor Oscilloscope — 350 MHz, 4 Channel", image: upo3354e.url, price: 163135.59322033898 },
  { model: "UPO1204", name: "Digital Phosphor Oscilloscope — 200 MHz, 4 Channel", image: upo1204.url, price: 71610.16949152543 },
  { model: "UPO1104", name: "Digital Phosphor Oscilloscope — 100 MHz, 4 Channel", image: upo1104.url, price: 55508.47457627119 },
  { model: "UPO2104", name: "Digital Phosphor Oscilloscope — 100 MHz, 4 Channel", image: upo2104.url, price: 91822.03389830509 },
  { model: "MSO1154HD-S", name: "12-bit Mixed Signal Oscilloscope with AWG — 150 MHz, 4 Channel", image: mso1154hdS.url, price: 84703.38983050847 },
  { model: "UPO1082HD", name: "High-Resolution Oscilloscope — 80 MHz, 2 Channel", image: upo1082hd.url, price: 33894.06779661017 },
  { model: "UPO1054", name: "Digital Phosphor Oscilloscope — 50 MHz, 4 Channel", image: upo1054.url, price: 25419.49152542373 },
];