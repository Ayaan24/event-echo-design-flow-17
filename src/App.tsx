
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Workshops from "./pages/Workshops";
import Collaborations from "./pages/Collaborations";
import NotFound from "./pages/NotFound";
import PageWrapper from "./components/PageWrapper";

// Create a new query client instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageWrapper />} />
          <Route path="/index" element={<PageWrapper />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/classes" element={<PageWrapper />} />
          <Route path="/schedule" element={<PageWrapper />} />
          <Route path="/buy" element={<PageWrapper />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
