
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
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
          <Route path="/about" element={<About />} />
          {/* Placeholder routes for future pages */}
          <Route path="/shop" element={<div className="min-h-screen bg-onyx flex items-center justify-center"><h1 className="text-white text-4xl font-playfair">Shop - Coming Soon</h1></div>} />
          <Route path="/lookbook" element={<div className="min-h-screen bg-onyx flex items-center justify-center"><h1 className="text-white text-4xl font-playfair">Lookbook - Coming Soon</h1></div>} />
          <Route path="/virtual-try-on" element={<div className="min-h-screen bg-onyx flex items-center justify-center"><h1 className="text-white text-4xl font-playfair">Virtual Try-On - Coming Soon</h1></div>} />
          <Route path="/customize" element={<div className="min-h-screen bg-onyx flex items-center justify-center"><h1 className="text-white text-4xl font-playfair">Customize - Coming Soon</h1></div>} />
          <Route path="/community" element={<div className="min-h-screen bg-onyx flex items-center justify-center"><h1 className="text-white text-4xl font-playfair">Community - Coming Soon</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
