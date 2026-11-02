import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Download, FileText, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuoteCart } from "@/contexts/QuoteCartContext";

// Absolute host in production builds (custom-domain hosting rewrites); relative in preview, where new assets serve before publishing.
const CDN = import.meta.env.DEV ? "" : "https://vianovais.lovable.app";
const SITE = "https://vianovaindustrial.solutions";
const PAGE = `${SITE}/micsig-probes`;
const DESCRIPTION = "Micsig oscilloscope probes in India: DP differential probes, SigOFIT optical-fiber isolated probes, CP and RCP current probes. Download brochures and manuals from ViaNova.";

const pointers = import.meta.glob("@/assets/micsig-probes/*.asset.json", { eager: true, import: "default" }) as Record<string, { url: string }>;
const asset = (file: string): string | undefined => {
  const key = Object.keys(pointers).find((k) => k.endsWith(`/${file}.asset.json`));
  return key ? `${CDN}${pointers[key].url}` : undefined;
};

type Doc = { label: string; file: string };
type Family = { name: string; type: "Voltage" | "Current"; description: string; banner?: string; docs: Doc[] };

const FAMILIES: Family[] = [
  { name: "DP Series", type: "Voltage", banner: "differential-probes.png", description: "High-voltage differential probe family for differential voltage measurements.", docs: [
    { label: "Brochure", file: "02-Brochure---DP-series-high-voltage-differential-probe_202603.pdf" },
    { label: "Quick guide", file: "01-Quick-Guide---DP-series-high-voltage-differential-probe-202603.pdf" } ] },
  { name: "SigOFIT Gen 3", type: "Voltage", banner: "sigofit-gen3.png", description: "Optical-fiber isolated probe family, with product brochure and operating documentation.", docs: [
    { label: "Brochure", file: "16-Brochure-SigOFIT-Gen-3-optical-fiber-isolated-probe.pdf" },
    { label: "User manual", file: "12-User-Manual---SigOFIT-Gen3-optical-fiber-isolated-probe.pdf" },
    { label: "Quick guide", file: "05-Quick-Guide---SigOFIT-Gen3-optical-fiber-isolated-probe.pdf" } ] },
  { name: "SigOFIT Gen 2", type: "Voltage", banner: "sigofit-gen2.png", description: "Optical-fiber isolated probe family, with product brochure and operating documentation.", docs: [
    { label: "Brochure", file: "13-Brochure-SigOFIToptical-fiberisolatedprobe_V2_1767073200.pdf" },
    { label: "User manual", file: "14-UserManual-SigOFIToptical-fiberisolatedprobe-V2_1767073187.pdf" },
    { label: "Quick guide", file: "03-QuickGuide-SigOFIToptical-fiberisolatedprobe-V2_1767073211.pdf" } ] },
  { name: "ACP1000", type: "Current", banner: "ac-current-probe-acp1000.png", description: "AC current probe family with the user manual included.", docs: [
    { label: "User manual", file: "04-AC-Current-Probe-ACP1000-User-Manual.pdf" } ] },
  { name: "CP Series", type: "Current", banner: "high-frequency-current-probes.png", description: "High-frequency AC/DC current probe literature for the CP Series models.", docs: [
    { label: "Product introduction", file: "07-Product-Introduction-High-Frequency-ACDC-Current-Probe-CP-series.pdf" },
    { label: "Quick guide", file: "06-Quick-Guide-High-Frequency-ACDC-Current-Probe-CP-series.pdf" },
    { label: "User manual", file: "15-User-Manual-High-Frequency-AC-DC-Current-Probe-CP-Series.pdf" },
    { label: "Product introduction · CP1503B group", file: "08-Product-Introduction-High-Frequency-ACDC-Current-Probe-CP-series.pdf" },
    { label: "Quick guide · CP1503B group", file: "09-Quick-Guide-High-Frequency-ACDC-Current-Probe-CP-series.pdf" },
    { label: "User manual · CP1503B group", file: "11-User-Manual-High-Frequency-AC-DC-Current-Probe-CP-Series.pdf" } ] },
  { name: "CP2100 Series", type: "Current", banner: "low-frequency-current-probe-cp2100.png", description: "Low-frequency AC/DC current probe series with a brochure and quick guide.", docs: [
    { label: "Brochure", file: "20-Brochure-CP2100seriesLFcurrentprobe.pdf" },
    { label: "Quick guide", file: "17-QuickGuide-LowFrequencyACDCCurrentProbeCP2100series.pdf" } ] },
  { name: "RCP Series", type: "Current", banner: "rogowski-current-probes.png", description: "Rogowski AC current probe family with product literature and operating guidance.", docs: [
    { label: "Brochure", file: "18-Brochure-Rogowski-AC-Current-Probe-RCP-Series-EN-20251203_1765247024.pdf" },
    { label: "User manual", file: "19-User-Manual--Rogowski-AC-Current-Probe-RCP-Series.pdf" },
    { label: "Quick guide", file: "21-QuickGuide-RCPseriesRogowskiACcurrentprobe.pdf" } ] },
  { name: "MSP510 Passive Probe", type: "Voltage", description: "Passive oscilloscope probe with user guide included.", docs: [
    { label: "User guide", file: "10-MSP510-USER-Guide-2025.5.12-1-2-.pdf" } ] },
];

const FILTERS = ["All", "Voltage", "Current"] as const;

const MicsigProbes = () => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [query, setQuery] = useState("");
  const { addItem } = useQuoteCart();
  const navigate = useNavigate();

  const list = useMemo(() => FAMILIES.filter((f) =>
    (filter === "All" || f.type === filter) && f.name.toLowerCase().includes(query.trim().toLowerCase())), [filter, query]);

  const requestQuote = (name: string) => { addItem(`Micsig ${name} probe`); navigate("/inquiry"); };

  return (
    <main className="min-h-screen pt-20">
      <Helmet>
        <title>Micsig Oscilloscope Probes in India | ViaNova</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE} />
        <meta property="og:title" content="Micsig Probe Range | ViaNova" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE },
            { "@type": "ListItem", position: 2, name: "Brands", item: `${SITE}/brands` },
            { "@type": "ListItem", position: 3, name: "Micsig Probes", item: PAGE },
          ],
        })}</script>
      </Helmet>

      <section className="bg-primary text-primary-foreground border-b border-border">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <Button asChild variant="ghost" className="mb-6 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/brands"><ArrowLeft /> Back to Brands</Link>
          </Button>
          <span className="block text-sm font-semibold uppercase text-accent mb-4">Authorized Distributor · Micsig</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-3xl">Micsig Probes — See the signal. Choose the right probe.</h1>
          <p className="text-primary-foreground/80 max-w-2xl mb-6">Explore Micsig probe families for voltage and current measurement. Browse the range and download the brochures, manuals and quick guides available for each family.</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="secondary"><a href="#probe-range">Explore probe range</a></Button>
            <Button variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground" onClick={() => requestQuote("oscilloscope")}>Request a Quote</Button>
          </div>
        </div>
      </section>

      <section id="probe-range" className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore the Micsig probe range</h2>
        <p className="text-muted-foreground mb-6">Filter by measurement type or search by series name.</p>
        <div className="flex flex-wrap gap-3 items-center mb-8">
          {FILTERS.map((f) => (
            <Button key={f} variant={filter === f ? "default" : "outline"} aria-pressed={filter === f} onClick={() => setFilter(f)} className="min-h-11">{f === "All" ? "All probes" : `${f} probes`}</Button>
          ))}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" aria-hidden />
            <Input aria-label="Search probe series" placeholder="Search series…" value={query} onChange={(e) => setQuery(e.target.value)} className="pl-9 min-h-11" />
          </div>
        </div>
        <p className="sr-only" aria-live="polite">{list.length} probe families shown</p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((f) => {
            const banner = f.banner && asset(f.banner);
            return (
              <article key={f.name} className="bg-card border border-border rounded-lg overflow-hidden flex flex-col shadow-sm">
                {banner ? (
                  <img src={banner} alt={`Micsig ${f.name} ${f.type.toLowerCase()} probe banner`} loading="lazy" className="w-full aspect-[16/9] object-cover bg-muted" />
                ) : (
                  <div className="w-full aspect-[16/9] bg-gradient-hero flex items-center justify-center text-primary-foreground text-2xl font-bold">{f.name}</div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-semibold uppercase text-secondary mb-1">{f.type} measurement</span>
                  <h3 className="text-xl font-bold mb-2">{f.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{f.description}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {f.docs.map((d) => {
                      const url = asset(d.file);
                      return (
                        <li key={d.file}>
                          {url ? (
                            <a href={url} download target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary hover:underline">
                              <Download className="w-4 h-4 shrink-0" aria-hidden /> {d.label} <span className="text-muted-foreground">(PDF)</span>
                            </a>
                          ) : (
                            <span className="flex items-center gap-2 text-sm text-muted-foreground"><Clock className="w-4 h-4 shrink-0" aria-hidden /> {d.label} — coming soon</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <Button onClick={() => requestQuote(f.name)} className="w-full">Request Quote</Button>
                </div>
              </article>
            );
          })}
        </div>
        {list.length === 0 && <p className="text-muted-foreground"><FileText className="inline w-4 h-4 mr-1" />No probe families match your search.</p>}
      </section>

      <section className="bg-muted">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold mb-2">Need help choosing a probe?</h2>
          <p className="text-muted-foreground mb-6">Contact ViaNova Industrial Solutions for product guidance and availability.</p>
          <Button asChild><Link to="/inquiry">Contact ViaNova</Link></Button>
        </div>
      </section>
    </main>
  );
};

export default MicsigProbes;
