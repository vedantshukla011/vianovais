import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Search } from "lucide-react";

const SITE = "https://vianovaindustrial.solutions";
const PAGE = `${SITE}/micsig-probes`;
const DESCRIPTION =
  "Explore Micsig probe families — DP differential, SigOFIT optical-fiber isolated, CP, CP2100, ACP and RCP current probes — and open brochures from ViaNova Industrial Solutions.";

const pointers = import.meta.glob("@/assets/micsig-catalog/*.asset.json", { eager: true, import: "default" }) as Record<string, { url: string }>;
// Preview serves assets relative; production uses the absolute host stored in the pointer.
const asset = (file: string): string => {
  const key = Object.keys(pointers).find((k) => k.endsWith(`/${file}.asset.json`));
  const url = key ? pointers[key].url : "";
  return import.meta.env.DEV ? url.replace(/^https?:\/\/[^/]+/, "") : url;
};

type Category = "ACP" | "CP" | "DP" | "SigOFIT" | "RCP";
type Product = { name: string; category: Category; hero: string; docs: { name: string; file: string }[] };

const PRODUCTS: Product[] = [
  { name: "ACP1000", category: "ACP", hero: "product-acp1000.jpg", docs: [] },
  { name: "CP1503B / CP1003B / CP503B", category: "CP", hero: "product-cp1503b-cp1003b-cp503b.jpg", docs: [{ name: "Product Introduction – High Frequency AC/DC Current Probe CP Series", file: "document-001.pdf" }] },
  { name: "CP5005 / CP3008 / CP3005 / CP1510", category: "CP", hero: "product-cp5005-cp3008-cp3005-cp1510.jpg", docs: [{ name: "Product Introduction – High Frequency AC/DC Current Probe CP Series", file: "document-002.pdf" }] },
  { name: "CP2100 Series", category: "CP", hero: "product-cp2100-series.jpg", docs: [{ name: "Brochure – CP2100 Series LF Current Probe", file: "document-003.pdf" }] },
  { name: "DP Series", category: "DP", hero: "product-dp-series.jpg", docs: [{ name: "Brochure – DP Series High-Voltage Differential Probe", file: "document-004.pdf" }] },
  { name: "SigOFIT Gen 2 (MOIP)", category: "SigOFIT", hero: "product-sigofit-gen-2-moip.jpg", docs: [{ name: "Brochure – SigOFIT Optical-Fiber Isolated Probe V2", file: "document-005.pdf" }] },
  { name: "SigOFIT Gen 3 (MOIP)", category: "SigOFIT", hero: "product-sigofit-gen-3-moip.jpg", docs: [{ name: "Brochure – SigOFIT Gen 3 Optical-Fiber Isolated Probe", file: "document-006.pdf" }] },
  { name: "RCP Series", category: "RCP", hero: "product-rcp-series.jpg", docs: [{ name: "Brochure – Rogowski AC Current Probe RCP Series", file: "document-007.pdf" }] },
];

const FILTERS: ("All" | Category)[] = ["All", "ACP", "CP", "DP", "SigOFIT", "RCP"];
const TOTAL_DOCS = PRODUCTS.reduce((n, p) => n + p.docs.length, 0);

const MicsigProbes = () => {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.toLowerCase().trim();
    return PRODUCTS.filter((p) => {
      const hay = `${p.name} ${p.docs.map((d) => d.name).join(" ")}`.toLowerCase();
      return (active === "All" || p.category === active) && (!q || hay.includes(q));
    });
  }, [active, query]);

  return (
    <div className="min-h-screen bg-muted/40 pt-20">
      <Helmet>
        <title>Micsig Probes | ViaNova Industrial Solutions</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE} />
        <meta property="og:title" content="Micsig Probes | ViaNova Industrial Solutions" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div aria-hidden className="pointer-events-none absolute right-[7%] -top-64 h-[530px] w-[530px] rounded-full border border-primary-foreground/10 shadow-[0_0_0_55px_hsl(var(--primary-foreground)/0.03),0_0_0_110px_hsl(var(--primary-foreground)/0.02)]" />
        <div className="relative mx-auto flex min-h-[350px] max-w-[1240px] items-center px-5 pb-14 pt-12 sm:px-6 md:min-h-[380px] md:pt-16">
          <div className="z-10 max-w-[700px]">
            <p className="flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[0.19em] text-accent">
              <span className="h-0.5 w-6 bg-accent" /> Micsig · Probe portfolio
            </p>
            <h1 className="mb-4 mt-5 text-[clamp(38px,5vw,60px)] font-bold leading-[1.02] tracking-tight">
              Find the right probe<br />for your measurement.
            </h1>
            <p className="max-w-[600px] text-sm leading-relaxed text-primary-foreground/80 md:text-base">
              Explore Micsig probe families and access available brochures and product introductions from ViaNova Industrial Solutions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#catalog" className="inline-flex items-center gap-1.5 rounded-md bg-accent px-[18px] py-3 text-[13px] font-bold text-accent-foreground transition-transform hover:-translate-y-0.5">
                Explore probe range <ArrowDown className="h-3.5 w-3.5" />
              </a>
              <a href="#support" className="inline-flex items-center rounded-md border border-primary-foreground/40 px-[18px] py-3 text-[13px] font-bold transition-transform hover:-translate-y-0.5">
                Talk to ViaNova
              </a>
            </div>
          </div>
          <p className="absolute bottom-7 right-5 text-[11px] tracking-[0.08em] text-primary-foreground/60 sm:right-6">PRODUCTS · DOCUMENTS · SUPPORT</p>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="scroll-mt-24">
        <div className="mx-auto max-w-[1240px] px-5 pb-3.5 pt-7 sm:px-6 md:flex md:items-end md:justify-between md:gap-5 md:pb-4 md:pt-9">
          <div>
            <h2 className="mb-1.5 text-[26px] font-bold tracking-tight text-foreground">Micsig probe catalog</h2>
            <p className="text-[13px] leading-relaxed text-muted-foreground">Search by model or document name, or filter by product family. Brochures open in a new tab.</p>
          </div>
          <p className="mt-3 whitespace-nowrap text-xs text-muted-foreground md:mt-0" aria-live="polite">
            {visible.length} product famil{visible.length === 1 ? "y" : "ies"} · {TOTAL_DOCS} documents
          </p>
        </div>

        <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-3 px-5 pb-5 pt-3 sm:px-6 md:pb-6">
          <label className="relative w-full md:max-w-[430px] md:flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search probes or documents…"
              aria-label="Search probes or documents"
              className="h-[46px] w-full rounded-md border border-border bg-background pl-11 pr-4 text-[13px] text-foreground outline-none focus:border-secondary focus:ring-[3px] focus:ring-secondary/15"
            />
          </label>
          <div className="flex w-full gap-1.5 overflow-x-auto p-0.5 md:w-auto" role="group" aria-label="Filter by product family">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={active === f}
                onClick={() => setActive(f)}
                className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-[11px] font-bold transition-colors ${
                  active === f ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {f === "All" ? "All probes" : f}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-3 px-5 pb-12 sm:grid-cols-2 sm:gap-[18px] sm:px-6 md:pb-[70px] lg:grid-cols-3">
          {visible.map((p) => (
            <article key={p.name} className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="h-[185px] overflow-hidden bg-gradient-to-br from-muted to-secondary/10 sm:h-[190px]">
                <img src={asset(p.hero)} alt={`Micsig ${p.name} probe`} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col px-5 pb-4 pt-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-secondary">Micsig probe family</p>
                <h3 className="my-2 text-[19px] font-bold leading-tight tracking-tight text-card-foreground">{p.name}</h3>
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground">Product resources and available technical documents for the {p.name} family.</p>
                <p className="mb-2 mt-auto border-t border-border pt-3.5 text-[10px] font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
                  Available documents · {p.docs.length}
                </p>
                <div className="grid gap-0.5">
                  {p.docs.length ? (
                    p.docs.map((d) => (
                      <a key={d.file} href={asset(d.file)} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-2 border-b border-border/60 py-2 text-[11px] text-foreground/80 hover:text-secondary">
                        <span className="truncate">{d.name}</span>
                        <b className="inline-flex items-center gap-0.5 whitespace-nowrap text-[10px] text-secondary">OPEN <ArrowUpRight className="h-3 w-3" /></b>
                      </a>
                    ))
                  ) : (
                    <span className="py-2 text-[11px] text-muted-foreground">Documents available on request</span>
                  )}
                </div>
                <Link to={`/inquiry?product=${encodeURIComponent(`Micsig ${p.name}`)}`} className="pt-3 text-[11px] font-bold text-secondary hover:underline">
                  Request a quote →
                </Link>
              </div>
            </article>
          ))}
          {visible.length === 0 && (
            <p className="col-span-full p-12 text-center text-muted-foreground">No probe families match your search. Try another term.</p>
          )}
        </div>
      </section>

      {/* Support */}
      <section id="support" className="border-y border-border bg-secondary/10">
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-5 py-7 sm:px-6 md:flex-row md:items-center md:py-9">
          <div>
            <h2 className="mb-1.5 text-[22px] font-bold tracking-tight text-foreground">Need help choosing a probe?</h2>
            <p className="text-[13px] text-muted-foreground">Contact ViaNova for product guidance, availability, and technical assistance.</p>
          </div>
          <Link to="/inquiry?product=Micsig%20probes" className="whitespace-nowrap rounded-md bg-secondary px-[18px] py-3 text-[13px] font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5">
            Contact ViaNova
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MicsigProbes;
