import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Landmark, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { atividadesNav, bibliotecaNav } from "@/data/navigation";
import type { NavSection } from "@/data/navigation";

const simpleLinks = [
  { label: "Início", path: "/" },
  { label: "Linha do Tempo", path: "/linha-do-tempo" },
];

const sectionLinks: NavSection[] = [atividadesNav, bibliotecaNav];

const tailLinks = [
  { label: "Sobre", path: "/sobre" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + "/");

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
          {simpleLinks.map((link) => (
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

          {sectionLinks.map((section) => (
            <div
              key={section.path}
              className="relative"
              onMouseEnter={() => setOpenDropdown(section.path)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => setOpenDropdown(openDropdown === section.path ? null : section.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-navy-light inline-flex items-center gap-1 ${
                  isActive(section.path) ? "bg-navy-light text-accent" : "text-primary-foreground/80"
                }`}
              >
                {section.label}
                <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === section.path ? "rotate-180" : ""}`} />
              </button>

              {openDropdown === section.path && (
                <div className="absolute top-full left-0 mt-0 pt-1 z-50">
                  <div className="bg-popover text-popover-foreground rounded-lg border shadow-lg min-w-[240px] p-2">
                    {section.groups.map((group) => (
                      <div key={group.path} className="mb-1 last:mb-0">
                        <Link
                          to={group.path}
                          className="block px-3 py-1.5 text-sm font-semibold text-foreground hover:bg-muted rounded-md"
                        >
                          {group.label}
                        </Link>
                        <div className="ml-3 border-l border-border pl-2">
                          {group.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-muted rounded-md"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {tailLinks.map((link) => (
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
            <SheetContent side="left" className="bg-primary text-primary-foreground border-navy-light w-80 overflow-y-auto">
              <SheetTitle className="text-primary-foreground font-serif flex items-center gap-2">
                <Landmark className="h-5 w-5 text-accent" />
                Centro de Memórias
              </SheetTitle>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Menu mobile">
                {simpleLinks.map((link) => (
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

                {sectionLinks.map((section) => (
                  <Collapsible key={section.path} defaultOpen={isActive(section.path)}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-navy-light text-left">
                      <span className={isActive(section.path) ? "text-accent" : ""}>{section.label}</span>
                      <ChevronDown className="h-4 w-4 transition-transform [[data-state=open]>&]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="ml-4 border-l border-navy-light pl-3 space-y-0.5 py-1">
                        {section.groups.map((group) => (
                          <div key={group.path}>
                            <Link
                              to={group.path}
                              className="block px-3 py-1.5 text-sm font-semibold hover:bg-navy-light rounded-md"
                            >
                              {group.label}
                            </Link>
                            <div className="ml-3 space-y-0.5">
                              {group.items.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="block px-3 py-1 text-xs text-primary-foreground/60 hover:text-accent hover:bg-navy-light rounded-md"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}

                {tailLinks.map((link) => (
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
