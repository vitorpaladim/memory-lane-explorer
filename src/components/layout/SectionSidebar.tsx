import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { NavSection } from "@/data/navigation";

interface SectionSidebarProps {
  section: NavSection;
}

const SectionSidebar = ({ section }: SectionSidebarProps) => {
  const location = useLocation();

  return (
    <aside className="lg:w-64 shrink-0 mb-8 lg:mb-0">
      <nav className="space-y-1" aria-label={`Navegação ${section.label}`}>
        <Link
          to={section.path}
          className={`block px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
            location.pathname === section.path
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-muted"
          }`}
        >
          {section.label}
        </Link>

        {section.groups.map((group) => {
          const isGroupActive = location.pathname.startsWith(group.path);

          return (
            <Collapsible key={group.path} defaultOpen={isGroupActive}>
              <CollapsibleTrigger className="flex items-center justify-between w-full px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted text-left">
                <span className={isGroupActive ? "text-accent font-semibold" : "text-foreground"}>
                  {group.label}
                </span>
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform [[data-state=open]>&]:rotate-180" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="ml-3 border-l border-border pl-3 space-y-0.5 py-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                        location.pathname === item.path
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </nav>
    </aside>
  );
};

export default SectionSidebar;
