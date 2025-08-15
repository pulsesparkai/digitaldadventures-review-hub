
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import ProductReview from "./pages/ProductReview";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WorkWithUs from "./pages/WorkWithUs";
import SubmitProduct from "./pages/SubmitProduct";
import Category from "./pages/Category";
import Newsletter from "./pages/Newsletter";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import AIContentPolicy from "./pages/AIContentPolicy";
import NotFound from "./pages/NotFound";
import LowesHalloweenHub from "./pages/LowesHalloweenHub";
import BoneCollectorReview from "./pages/BoneCollectorReview";
import GiantInflatablesRoundup from "./pages/GiantInflatablesRoundup";
import HauntedMansionCollection from "./pages/HauntedMansionCollection";
import KrakenReview from "./pages/KrakenReview";
import BestOutdoorDecorations from "./pages/BestOutdoorDecorations";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/review/:slug" element={<ProductReview />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/submit-product" element={<SubmitProduct />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/ai-content-policy" element={<AIContentPolicy />} />
          <Route path="/lowes-halloween-decorations" element={<LowesHalloweenHub />} />
          <Route path="/lowes-12ft-bone-collector-animatronic-review" element={<BoneCollectorReview />} />
          <Route path="/lowes-giant-halloween-inflatables" element={<GiantInflatablesRoundup />} />
          <Route path="/lowes-haunted-mansion-collection" element={<HauntedMansionCollection />} />
          <Route path="/lowes-kraken-halloween-yard-decoration" element={<KrakenReview />} />
          <Route path="/lowes-best-outdoor-halloween-decorations-2025" element={<BestOutdoorDecorations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
