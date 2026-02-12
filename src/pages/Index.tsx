import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, FileText, Download, Eye, Calendar, ArrowRight, Landmark, BookOpen, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { highlights, timelinePeriods, documents, activities } from "@/data/mockData";
import { useState } from "react";

const Index = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState<string | null>(null);

  const nextSlide = () => setCarouselIndex((i) => (i + 1) % highlights.length);
  const prevSlide = () => setCarouselIndex((i) => (i - 1 + highlights.length) % highlights.length);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-light text-accent text-sm font-medium">
              <Landmark className="h-4 w-4" />
              Patrimônio Histórico Municipal
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Centro de Memórias da Cidade
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Preservando e compartilhando a história da nossa cidade através de um acervo digital acessível a todos os cidadãos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/biblioteca"><BookOpen className="h-5 w-5 mr-2" /> Explorar Acervo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-navy-light">
                <Link to="/linha-do-tempo"><Clock className="h-5 w-5 mr-2" /> Ver Linha do Tempo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">Destaques</h2>
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${carouselIndex * 100}%)` }}>
                {highlights.map((h) => (
                  <div key={h.id} className="w-full flex-shrink-0 px-2">
                    <Card className="overflow-hidden border-border/50">
                      <div className="md:flex">
                        <div className="md:w-1/3 bg-muted flex items-center justify-center p-8">
                          <Landmark className="h-20 w-20 text-muted-foreground/30" />
                        </div>
                        <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                          <h3 className="text-xl font-serif font-bold mb-3">{h.title}</h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{h.description}</p>
                          <Button asChild variant="outline" className="self-start">
                            <Link to={h.link}>Ver mais <ArrowRight className="h-4 w-4 ml-1" /></Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button variant="outline" size="icon" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 shadow" onClick={prevSlide} aria-label="Anterior">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 shadow" onClick={nextSlide} aria-label="Próximo">
              <ChevronRight className="h-5 w-5" />
            </Button>
            <div className="flex justify-center gap-2 mt-4">
              {highlights.map((_, i) => (
                <button key={i} onClick={() => setCarouselIndex(i)} className={`h-2 rounded-full transition-all ${i === carouselIndex ? "w-8 bg-accent" : "w-2 bg-border"}`} aria-label={`Slide ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">Linha do Tempo</h2>
          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" />
            <div className="flex overflow-x-auto gap-0 pb-4 scrollbar-hide">
              {timelinePeriods.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTimeline(activeTimeline === p.id ? null : p.id)}
                  className="flex flex-col items-center min-w-[120px] relative pt-0 group"
                >
                  <div className={`w-4 h-4 rounded-full border-2 transition-colors z-10 ${activeTimeline === p.id ? "bg-accent border-accent" : "bg-background border-primary group-hover:border-accent"}`} />
                  <span className={`mt-2 text-sm font-semibold ${activeTimeline === p.id ? "text-accent" : "text-foreground"}`}>{p.decade}</span>
                  <span className="text-xs text-muted-foreground">{p.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content below timeline */}
          {activeTimeline && (() => {
            const period = timelinePeriods.find((p) => p.id === activeTimeline);
            if (!period) return null;
            return (
              <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-serif font-bold text-foreground">{period.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="w-full md:w-80 shrink-0 aspect-[4/3] rounded-lg bg-muted border border-border flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Imagem</span>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Library Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">Biblioteca Digital</h2>
            <Button asChild variant="link" className="text-accent">
              <Link to="/biblioteca">Ver todos <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.slice(0, 6).map((doc) => (
              <Card key={doc.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-destructive/10">
                      <FileText className="h-6 w-6 text-destructive" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base leading-tight line-clamp-2">{doc.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{new Date(doc.date).toLocaleDateString("pt-BR")}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-3">
                  <Badge variant="secondary" className="text-xs">{doc.category}</Badge>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link to={`/biblioteca/${doc.id}`}><Eye className="h-3 w-3 mr-1" /> Ver</Link>
                  </Button>
                  <Button size="sm" variant="ghost" className="text-muted-foreground">
                    <Download className="h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-bold text-foreground">Atividades Parlamentares</h2>
            <Button asChild variant="link" className="text-accent">
              <Link to="/atividades">Ver todas <ArrowRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>
          <div className="space-y-4">
            {activities.slice(0, 3).map((act) => (
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
                  <Button asChild size="sm" variant="ghost">
                    <Link to="/atividades">Ver <ArrowRight className="h-3 w-3 ml-1" /></Link>
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

export default Index;
