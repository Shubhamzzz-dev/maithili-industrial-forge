
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FlyAshHandlingSystem from "./pages/products/FlyAshHandlingSystem";
import FullyAutomaticBrickMaking from "./pages/products/FullyAutomaticBrickMaking";
import SemiAutomaticBrickMaking from "./pages/products/SemiAutomaticBrickMaking";
import PanMixersConveyors from "./pages/products/PanMixersConveyors";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/fly-ash-handling-system" element={<FlyAshHandlingSystem />} />
          <Route path="/products/fully-automatic-brick-making-plant" element={<FullyAutomaticBrickMaking />} />
          <Route path="/products/semi-automatic-brick-making-machines" element={<SemiAutomaticBrickMaking />} />
          <Route path="/products/pan-mixers-and-conveyors" element={<PanMixersConveyors />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
