
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
