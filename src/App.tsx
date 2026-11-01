import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
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
import BlogDCElectronicLoad from "./pages/BlogDCElectronicLoad";
import BlogDCPowerSupply from "./pages/BlogDCPowerSupply";
import BlogLCRMeter from "./pages/BlogLCRMeter";
import BlogOscilloscopeAutomotiveEV from "./pages/BlogOscilloscopeAutomotiveEV";


import BuyOnline from "./pages/BuyOnline";
import Brands from "./pages/Brands";
import BrandUnit from "./pages/BrandUnit";
import BrandFlir from "./pages/BrandFlir";
import MicsigProbes from "./pages/MicsigProbes";
import InteractivePanel from "./pages/InteractivePanel";
import ProductWellerWE1010 from "./pages/ProductWellerWE1010";
import ProductTesto883 from "./pages/ProductTesto883";
import ProductUTi260B from "./pages/ProductUTi260B";
import ProductDetail from "./pages/ProductDetail";
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
              <Route path="/blog/dc-electronic-load-power-electronics-manufacturing" element={<BlogDCElectronicLoad />} />
              <Route path="/blog/dc-power-supply-types-applications-buying-guide" element={<BlogDCPowerSupply />} />
              <Route path="/blog/lcr-meter-guide-inductance-capacitance-resistance-measurement" element={<BlogLCRMeter />} />
              <Route path="/blog/oscilloscope-guide-automotive-ev-manufacturing" element={<BlogOscilloscopeAutomotiveEV />} />


              <Route path="/buy-online" element={<BuyOnline />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/brands/uni-t" element={<BrandUnit />} />
              <Route path="/brands/flir" element={<BrandFlir />} />
              <Route path="/micsig-probes" element={<MicsigProbes />} />
              <Route path="/interactive-panel" element={<InteractivePanel />} />
              <Route path="/products/weller-we1010" element={<ProductWellerWE1010 />} />
              <Route path="/products/testo-883-1" element={<ProductTesto883 />} />
              <Route path="/products/unit-uti260b" element={<ProductUTi260B />} />
              <Route path="/products/:slug" element={<ProductDetail />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <WhatsAppFloatingButton />
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QuoteCartProvider>
  </QueryClientProvider>
);

export default App;
