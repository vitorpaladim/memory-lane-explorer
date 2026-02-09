import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { activities, activityTypes } from "@/data/mockData";

const Activities = () => {
  const [typeFilter, setTypeFilter] = useState<string>("all");

  const filtered = activities.filter((a) => typeFilter === "all" || a.type === typeFilter);

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
          <div className="flex gap-4 mb-8">
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-48"><SelectValue placeholder="Tipo" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                {activityTypes.map((t) => <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {filtered.map((act) => (
              <Card key={act.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 sm:w-48 shrink-0">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{new Date(act.date).toLocaleDateString("pt-BR")}</span>
                    <Badge variant={act.type === "sessão" ? "default" : act.type === "projeto" ? "secondary" : "outline"} className="text-xs capitalize">
                      {act.type}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{act.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{act.description}</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Link to="/biblioteca" className="flex items-center gap-1">Documentos <ArrowRight className="h-3 w-3" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
