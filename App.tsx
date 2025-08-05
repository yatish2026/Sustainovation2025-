import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RealTimeMonitoring from "@/features/RealTimeMonitoring";
import LeakDetection from "@/features/LeakDetection";
import SustainabilityAnalytics from "@/features/SustainabilityAnalytics";
import GreywaterRecycling from "@/features/GreywaterRecycling";
import AutomatedControls from "@/features/AutomatedControls";
import CostSavings from "@/features/CostSavings";
import MobileAlerts from "@/features/MobileAlerts";
 import UsageBenchmarking from "@/features/UsageBenchmarking";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Feature Routes */}
          <Route path="/features/real-time-monitoring" element={<RealTimeMonitoring />} />
          <Route path="/features/leak-detection" element={<LeakDetection />} />
          <Route path="/features/sustainability-analytics" element={<SustainabilityAnalytics />} />
          <Route path="/features/greywater-recycling" element={<GreywaterRecycling />} />
          <Route path="/features/automated-controls" element={<AutomatedControls />} />
          <Route path="/features/cost-savings" element={<CostSavings />} />
          <Route path="/features/mobile-alerts" element={<MobileAlerts />}/>
          <Route path="/features/usage-benchmarking" element={<UsageBenchmarking />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;