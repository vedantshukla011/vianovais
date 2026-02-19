import { useState } from "react";

const clients = [
  { name: "RIGOL", domain: "rigol.com" },
  { name: "Keysight", domain: "keysight.com" },
  { name: "Tektronix", domain: "tektronix.com" },
  { name: "Fluke", domain: "fluke.com" },
  { name: "Testo", domain: "testo.com" },
  { name: "GW Instek", domain: "gwinstek.com" },
  { name: "Chroma", domain: "chromaate.com" },
  { name: "Micsig", domain: "micsig.com" },
  { name: "Bosch", domain: "bosch.com" },
  { name: "Dewalt", domain: "dewalt.com" },
  { name: "Stanley", domain: "stanley.com" },
  { name: "Taparia Tools", domain: "taparia.com" },
  { name: "Weller", domain: "weller-tools.com" },
  { name: "Metrel", domain: "metrel.si" },
  { name: "Hakko", domain: "hakko.com" },
  { name: "Bakon", domain: "bakon.com" },
  { name: "UNI-T", domain: "uni-trend.com" },
  { name: "Siglent", domain: "siglent.com" },
  { name: "Mitutoyo", domain: "mitutoyo.com" },
  { name: "UniKlinger", domain: "uniklinger.com" },
  { name: "Vaisala", domain: "vaisala.com" },
  { name: "Norsonic", domain: "norsonic.com" },
  { name: "Rion", domain: "rion.co.jp" },
  { name: "Gray Wolf", domain: "graywolfsensing.com" },
  { name: "ITECH", domain: "itechate.com" },
  { name: "Hioki", domain: "hioki.com" },
  { name: "Owon", domain: "owon.com.hk" },
];

const BrandCard = ({ name, domain }: { name: string; domain: string }) => {
  const [imgError, setImgError] = useState(false);
  const logoUrl = `https://logo.clearbit.com/${domain}`;

  return (
    <div className="flex-shrink-0 mx-4 flex items-center justify-center h-20 w-40 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300">
      {!imgError ? (
        <img
          src={logoUrl}
          alt={`${name} logo`}
          className="max-h-12 max-w-[120px] object-contain"
          onError={() => setImgError(true)}
          loading="lazy"
        />
      ) : (
        <span className="text-lg font-bold text-foreground/70 whitespace-nowrap tracking-wide">
          {name}
        </span>
      )}
    </div>
  );
};

const ClientsCarousel = () => {
  // We need enough copies so the content never runs out during scroll
  const repeatedClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Partners</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Brands We Represent</h2>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        
        <div className="flex animate-scroll-left" style={{ width: 'max-content' }}>
          {repeatedClients.map((client, i) => (
            <BrandCard key={i} name={client.name} domain={client.domain} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
