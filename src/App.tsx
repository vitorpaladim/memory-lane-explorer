import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Timeline from "./pages/Timeline";
import Library from "./pages/Library";
import DocumentDetail from "./pages/DocumentDetail";
import Activities from "./pages/Activities";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import SectionPage from "./pages/SectionPage";
import { atividadesNav, bibliotecaNav, getAllSectionRoutes } from "./data/navigation";

const queryClient = new QueryClient();

const atividadesRoutes = getAllSectionRoutes(atividadesNav);
const bibliotecaRoutes = getAllSectionRoutes(bibliotecaNav);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/linha-do-tempo" element={<Timeline />} />
          
          {/* Biblioteca - main page with filters */}
          <Route path="/biblioteca" element={<Library />} />
          <Route path="/biblioteca/:id" element={<DocumentDetail />} />
          {/* Biblioteca subcategories */}
          {bibliotecaRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<SectionPage section="biblioteca" />} />
          ))}

          {/* Atividades - main page */}
          <Route path="/atividades" element={<Activities />} />
          {/* Atividades subcategories */}
          {atividadesRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<SectionPage section="atividades" />} />
          ))}

          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
