import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import CookieConsentBanner from "@/components/CookieConsentBanner";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import ScrollToTop from "./components/ScrollToTop";
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
import Accessibility from "./pages/Accessibility";
import BestCordlessDrills2025 from "./pages/BestCordlessDrills2025";
import BatteryVsGasMowers from "./pages/BatteryVsGasMowers";
import SoloStoveVsBreeo from "./pages/SoloStoveVsBreeo";
import YardCategory from "./pages/YardCategory";
import DeWaltVsMilwaukee2025 from "./pages/DeWaltVsMilwaukee2025";
import RingVsNestVsArlo2025 from "./pages/RingVsNestVsArlo2025";
import BestElectricMowers2025 from "./pages/BestElectricMowers2025";
import ImpactDrivers from "./pages/ImpactDrivers";
import EgoVsRyobiLeafBlower from "./pages/EgoVsRyobiLeafBlower";
import WeekendGarageShelf from "./pages/WeekendGarageShelf";
import KidSafeBackyardMakeover from "./pages/KidSafeBackyardMakeover";
import BackyardGadgetsSummer from "./pages/BackyardGadgetsSummer";
import DIYHomeSecurity from "./pages/DIYHomeSecurity";


const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
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
            <Route path="/category/yard" element={<YardCategory />} />
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
            <Route path="/accessibility" element={<Accessibility />} />
            
            {/* New high-traffic pages */}
            <Route path="/tools/best-cordless-drills-2025" element={<BestCordlessDrills2025 />} />
            <Route path="/yard/battery-vs-gas-lawn-mowers" element={<BatteryVsGasMowers />} />
            <Route path="/outdoor/solo-stove-vs-breeo" element={<SoloStoveVsBreeo />} />
            <Route path="/tools/dewalt-vs-milwaukee-2025" element={<DeWaltVsMilwaukee2025 />} />
            <Route path="/smarthome/ring-vs-nest-vs-arlo-2025" element={<RingVsNestVsArlo2025 />} />
            <Route path="/yard/best-electric-mowers-2025" element={<BestElectricMowers2025 />} />
            
            {/* Missing supporting pages */}
            <Route path="/tools/impact-drivers" element={<ImpactDrivers />} />
            <Route path="/yard/ego-vs-ryobi-leaf-blower" element={<EgoVsRyobiLeafBlower />} />
            <Route path="/projects/weekend-garage-shelf" element={<WeekendGarageShelf />} />
            <Route path="/projects/kid-safe-backyard-makeover" element={<KidSafeBackyardMakeover />} />
            <Route path="/outdoor/backyard-gadgets-summer" element={<BackyardGadgetsSummer />} />
            <Route path="/smarthome/diy-home-security-under-300" element={<DIYHomeSecurity />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsentBanner />
          <AccessibilityWidget />
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;