import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SectionSidebar from "@/components/layout/SectionSidebar";
import { atividadesNav, bibliotecaNav, getAllSectionRoutes } from "@/data/navigation";
import type { NavSection } from "@/data/navigation";

interface SectionPageProps {
  section: "atividades" | "biblioteca";
}

const SectionPage = ({ section }: SectionPageProps) => {
  const location = useLocation();
  const navData: NavSection = section === "atividades" ? atividadesNav : bibliotecaNav;

  // Find current route info
  const allRoutes = getAllSectionRoutes(navData);
  const currentRoute = allRoutes.find((r) => r.path === location.pathname);

  const title = currentRoute?.label ?? navData.label;
  const breadcrumb = currentRoute?.breadcrumb ?? [navData.label];

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1 text-sm text-primary-foreground/60 mb-3" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary-foreground">Início</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                <span className={i === breadcrumb.length - 1 ? "text-primary-foreground" : ""}>{crumb}</span>
              </span>
            ))}
          </nav>
          <h1 className="text-4xl font-serif font-bold">{title}</h1>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="lg:flex gap-8">
            <SectionSidebar section={navData} />

            <div className="flex-1">
              {currentRoute ? (
                <div className="rounded-lg border border-border bg-card p-8 text-center">
                  <p className="text-muted-foreground">
                    Conteúdo de <span className="font-semibold text-foreground">{title}</span> será adicionado em breve.
                  </p>
                </div>
              ) : (
                /* Section landing: show all groups as cards */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {navData.groups.map((group) => (
                    <div key={group.path} className="rounded-lg border border-border bg-card p-6">
                      <h3 className="font-serif font-bold text-lg mb-3">{group.label}</h3>
                      <ul className="space-y-1">
                        {group.items.map((item) => (
                          <li key={item.path}>
                            <Link
                              to={item.path}
                              className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
                            >
                              <ChevronRight className="h-3 w-3" />
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SectionPage;
