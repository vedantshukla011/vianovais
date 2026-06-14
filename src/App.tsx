import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Inquiry from "./pages/Inquiry";
import NotFound from "./pages/NotFound";
import ProductsAtGem from "./pages/ProductsAtGem";
import ScientificLaboratoryInstruments from "./pages/ScientificLaboratoryInstruments";
import Industry from "./pages/Industry";
import Blog from "./pages/Blog";
import BlogDriverTesting from "./pages/BlogDriverTesting";
import BlogAutomotiveDebugging from "./pages/BlogAutomotiveDebugging";
import BlogDSOPCBTesting from "./pages/BlogDSOPCBTesting";
import BuyOnline from "./pages/BuyOnline";
import InteractivePanel from "./pages/InteractivePanel";
import { QuoteCartProvider } from "./contexts/QuoteCartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <QuoteCartProvider>
      <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/products-at-gem" element={<ProductsAtGem />} />
              <Route path="/inquiry" element={<Inquiry />} />
              <Route path="/scientific-laboratory-instruments" element={<ScientificLaboratoryInstruments />} />
              <Route path="/industries/:slug" element={<Industry />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/driver-testing-machine" element={<BlogDriverTesting />} />
              <Route path="/blog/oscilloscope-multimeter-automotive-debugging" element={<BlogAutomotiveDebugging />} />
              <Route path="/blog/digital-storage-oscilloscope-pcb-testing" element={<BlogDSOPCBTesting />} />
              <Route path="/buy-online" element={<BuyOnline />} />
              <Route path="/interactive-panel" element={<InteractivePanel />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QuoteCartProvider>
  </QueryClientProvider>
);

export default App;
