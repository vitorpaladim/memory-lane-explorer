import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Linha do Tempo", path: "/linha-do-tempo" },
  { label: "Biblioteca", path: "/biblioteca" },
  { label: "Atividades Parlamentares", path: "/atividades" },
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-serif text-lg font-bold tracking-tight">
          <Landmark className="h-6 w-6 text-accent" />
          <span className="hidden sm:inline">Centro de Memórias</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-navy-light ${
                location.pathname === link.path ? "bg-navy-light text-accent" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search + Mobile Menu */}
        <div className="flex items-center gap-2">
          {searchOpen ? (
            <div className="flex items-center gap-1">
              <Input
                placeholder="Buscar no acervo..."
                className="h-9 w-48 bg-navy-light border-navy-light text-primary-foreground placeholder:text-primary-foreground/50"
                autoFocus
              />
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)} className="text-primary-foreground">
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} className="text-primary-foreground" aria-label="Buscar">
              <Search className="h-5 w-5" />
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-primary-foreground" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-primary text-primary-foreground border-navy-light w-72">
              <SheetTitle className="text-primary-foreground font-serif flex items-center gap-2">
                <Landmark className="h-5 w-5 text-accent" />
                Centro de Memórias
              </SheetTitle>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Menu mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-navy-light ${
                      location.pathname === link.path ? "bg-navy-light text-accent" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
