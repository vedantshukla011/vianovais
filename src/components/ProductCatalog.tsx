import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Search, ArrowRight, ChevronLeft, ChevronRight, Package } from "lucide-react";
import { CATALOG_PRODUCTS, CATALOG_CATEGORIES } from "@/data/catalogProducts";

const ITEMS_PER_PAGE = 24;

const ProductCatalog = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    let items = CATALOG_PRODUCTS;
    if (selectedCategory) {
      items = items.filter((p) => p.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter((p) => p.name.toLowerCase().includes(q));
    }
    return items;
  }, [search, selectedCategory]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryClick = (cat: string | null) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Full Catalog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3 text-foreground">
            Browse All Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Search through our complete catalog of {CATALOG_PRODUCTS.length.toLocaleString()}+ industrial products
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search products, models, brands…"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-12 py-6 text-base border-2 border-border focus:border-secondary bg-card shadow-elegant"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className={`cursor-pointer px-4 py-2 text-sm transition-all ${
              selectedCategory === null
                ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                : "hover:bg-secondary/10 hover:text-secondary"
            }`}
            onClick={() => handleCategoryClick(null)}
          >
            All ({CATALOG_PRODUCTS.length.toLocaleString()})
          </Badge>
          {CATALOG_CATEGORIES.map((cat) => {
            const count = CATALOG_PRODUCTS.filter((p) => p.category === cat).length;
            return (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className={`cursor-pointer px-3 py-1.5 text-xs transition-all ${
                  selectedCategory === cat
                    ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    : "hover:bg-secondary/10 hover:text-secondary"
                }`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat} ({count})
              </Badge>
            );
          })}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6 text-center">
          Showing{" "}
          <span className="font-semibold text-foreground">
            {((currentPage - 1) * ITEMS_PER_PAGE) + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filtered.length)}
          </span>{" "}
          of <span className="font-semibold text-foreground">{filtered.length.toLocaleString()}</span> products
        </p>

        {/* Product Grid */}
        {paginated.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {paginated.map((product, index) => (
              <Card
                key={`${product.name}-${index}`}
                className="border-none shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-card group overflow-hidden"
              >
                <div className="aspect-square bg-muted/50 flex items-center justify-center p-4">
                  <Package className="w-12 h-12 text-muted-foreground/30 group-hover:text-secondary/40 transition-colors" />
                </div>
                <CardContent className="p-3 flex flex-col gap-2">
                  <p className="text-xs font-semibold text-foreground leading-tight line-clamp-3 min-h-[3rem]">
                    {product.name}
                  </p>
                  <Link to={`/inquiry?product=${encodeURIComponent(product.name)}`}>
                    <Button
                      size="sm"
                      className="w-full bg-primary hover:bg-primary-light text-primary-foreground text-xs py-1 h-8"
                    >
                      Get Quote
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">Try a different search term or category</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="border-border"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {getPageNumbers().map((page, i) =>
              page === "..." ? (
                <span key={`dots-${i}`} className="px-2 text-muted-foreground">…</span>
              ) : (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page as number)}
                  className={
                    currentPage === page
                      ? "bg-primary text-primary-foreground"
                      : "border-border hover:border-secondary hover:text-secondary"
                  }
                >
                  {page}
                </Button>
              )
            )}
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="border-border"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductCatalog;
