import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ArrowRight, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { activities, activityTypes } from "@/data/mockData";

const Activities = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");

  const filtered = activities.filter((a) => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.description.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "all" || a.type === typeFilter;
    const matchYear = yearFilter === "all" || a.date.startsWith(yearFilter);
    return matchSearch && matchType && matchYear;
  });

  // Extract unique years from activities
  const years = [...new Set(activities.map((a) => a.date.substring(0, 4)))].sort().reverse();

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-2">Atividades Parlamentares</h1>
          <p className="text-primary-foreground/70">Acompanhe as sessões, projetos e atas da Câmara Municipal.</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="lg:flex gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-64 shrink-0 mb-8 lg:mb-0 space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar atividade..."
                    className="pl-9"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Tipo</label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os tipos</SelectItem>
                    {activityTypes.map((t) => (
                      <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Ano</label>
                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os anos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os anos</SelectItem>
                    {years.map((y) => (
                      <SelectItem key={y} value={y}>{y}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-6">{filtered.length} atividade(s) encontrada(s)</p>
              <div className="space-y-4">
                {filtered.map((act) => (
                  <Card key={act.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex items-center gap-3 sm:w-48 shrink-0">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{new Date(act.date).toLocaleDateString("pt-BR")}</span>
                        <Badge
                          variant={act.type === "sessão" ? "default" : act.type === "projeto" ? "secondary" : "outline"}
                          className="text-xs capitalize"
                        >
                          {act.type}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{act.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{act.description}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Link to="/biblioteca" className="flex items-center gap-1">
                          Documentos <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                {filtered.length === 0 && (
                  <div className="rounded-lg border border-border bg-card p-8 text-center">
                    <p className="text-muted-foreground">Nenhuma atividade encontrada com os filtros selecionados.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
