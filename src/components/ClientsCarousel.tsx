const clients = [
  "RIGOL", "Keysight", "Tektronix", "Fluke", "Testo", "GW Instek",
  "Chroma", "Micsig", "Bosch", "Dewalt", "Stanley", "Taparia Tools",
  "Weller", "Metrel", "Hakko", "Bakon", "UNI-T", "Siglent",
  "Mitutoyo", "UniKlinger",
];

const ClientsCarousel = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Partners</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 text-foreground">Brands We Represent</h2>
      </div>
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />
        
        <div className="flex animate-scroll-left">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 flex items-center justify-center h-20 px-8 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-lg font-bold text-foreground/70 whitespace-nowrap tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
