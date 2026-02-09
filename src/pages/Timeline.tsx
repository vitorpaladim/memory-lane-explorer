import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { timelinePeriods } from "@/data/mockData";

const Timeline = () => {
  const [activePeriod, setActivePeriod] = useState<string | null>(null);

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-2">Linha do Tempo</h1>
          <p className="text-primary-foreground/70">Explore a história da cidade década por década.</p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filtrar período" />
              </SelectTrigger>
              <SelectContent>
                {timelinePeriods.map((p) => (
                  <SelectItem key={p.id} value={p.id}>{p.decade} — {p.title}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-1 bg-border rounded-full" />
            <div className="flex overflow-x-auto gap-0 pb-64 pt-0">
              {timelinePeriods.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActivePeriod(activePeriod === p.id ? null : p.id)}
                  className="flex flex-col items-center min-w-[160px] relative group"
                >
                  <div className={`w-5 h-5 rounded-full border-[3px] z-10 transition-all mt-[22px] ${
                    activePeriod === p.id ? "bg-accent border-accent scale-125" : "bg-background border-primary group-hover:border-accent"
                  }`} />
                  <span className={`mt-3 text-lg font-serif font-bold ${activePeriod === p.id ? "text-accent" : "text-foreground"}`}>{p.decade}</span>
                  <span className="text-sm text-muted-foreground">{p.title}</span>

                  {activePeriod === p.id && (
                    <Card className="absolute top-28 left-1/2 -translate-x-1/2 w-72 z-20 shadow-xl border-accent/20">
                      <CardContent className="p-5 space-y-3">
                        <h3 className="font-serif font-bold">{p.year} — {p.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                        <Button asChild size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link to="/biblioteca">Ver documentos ({p.documentsCount})</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Timeline;
