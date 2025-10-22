import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Index from "./pages/Index";
import Products from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Factory from "./pages/Factory";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// 🔄 Komponen pembungkus halaman dengan animasi transisi
const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// 📦 Routing dengan animasi transisi
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Index />
            </AnimatedPage>
          }
        />
        <Route
          path="/products"
          element={
            <AnimatedPage>
              <Products />
            </AnimatedPage>
          }
        />
        <Route
          path="/product/:productSlug"
          element={
            <AnimatedPage>
              <ProductDetail />
            </AnimatedPage>
          }
        />
        <Route
          path="/factory"
          element={
            <AnimatedPage>
              <Factory />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact"
          element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          }
        />
        <Route
          path="*"
          element={
            <AnimatedPage>
              <NotFound />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider delayDuration={200}>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
