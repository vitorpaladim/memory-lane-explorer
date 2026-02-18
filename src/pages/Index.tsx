import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, BookOpen, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { highlights, timelinePeriods } from "@/data/mockData";
import { atividadesNav, bibliotecaNav } from "@/data/navigation";
import { useState } from "react";

const Index = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [activeTimeline, setActiveTimeline] = useState<string | null>(null);

  const nextSlide = () => setCarouselIndex((i) => Math.min(i + 1, highlights.length - 1));
  const prevSlide = () => setCarouselIndex((i) => Math.max(i - 1, 0));

  const goTimelinePrev = () => {
    const idx = timelinePeriods.findIndex((p) => p.id === activeTimeline);
    if (idx > 0) setActiveTimeline(timelinePeriods[idx - 1].id);
  };
  const goTimelineNext = () => {
    const idx = timelinePeriods.findIndex((p) => p.id === activeTimeline);
    if (idx < timelinePeriods.length - 1) setActiveTimeline(timelinePeriods[idx + 1].id);
  };

  return (
    <Layout>
      {/* Hero — full-width banner style like Butantan */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Centro de Memórias da Cidade
            </h1>
            <p className="text-lg text-primary-foreground/70 leading-relaxed max-w-xl">
              Preservando e compartilhando a história da nossa cidade através de um acervo digital acessível a todos os cidadãos.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/biblioteca"><BookOpen className="h-5 w-5 mr-2" /> Explorar Acervo</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold">
                <Link to="/linha-do-tempo"><Clock className="h-5 w-5 mr-2" /> Linha do Tempo</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative image placeholder */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:flex items-center justify-center">
          <div className="w-64 h-64 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 flex items-center justify-center">
            <span className="text-primary-foreground/30 text-sm">Imagem</span>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">Linha do Tempo</h2>
          <div className="relative flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shrink-0"
              onClick={goTimelinePrev}
              disabled={!activeTimeline || timelinePeriods.findIndex((p) => p.id === activeTimeline) <= 0}
              aria-label="Período anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1 relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-border" />
              <div className="flex overflow-x-auto justify-between pb-4 scrollbar-hide">
                {timelinePeriods.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveTimeline(activeTimeline === p.id ? null : p.id)}
                    className="flex flex-col items-center min-w-[160px] relative pt-0 group"
                  >
                    <div className={`w-4 h-4 rounded-full border-2 transition-colors z-10 ${activeTimeline === p.id ? "bg-accent border-accent" : "bg-background border-primary group-hover:border-accent"}`} />
                    <span className={`mt-2 text-sm font-semibold ${activeTimeline === p.id ? "text-accent" : "text-foreground"}`}>{p.decade}</span>
                    <span className="text-xs text-muted-foreground">{p.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full shrink-0"
              onClick={goTimelineNext}
              disabled={!activeTimeline || timelinePeriods.findIndex((p) => p.id === activeTimeline) >= timelinePeriods.length - 1}
              aria-label="Próximo período"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {activeTimeline && (() => {
            const period = timelinePeriods.find((p) => p.id === activeTimeline);
            if (!period) return null;
            return (
              <div className="mt-8 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-serif font-bold text-foreground">{period.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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

      {/* Atividade Parlamentar Section — card grid like reference */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">Atividade Parlamentar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {atividadesNav.groups.map((group) => (
              <Card key={group.path} className="overflow-hidden hover:shadow-lg transition-shadow">
                {group.image && (
                  <div className="aspect-video bg-muted">
                    <img src={group.image} alt={group.label} className="w-full h-full object-cover" />
                  </div>
                )}
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-serif font-bold text-lg">
                    <Link to={group.path} className="hover:text-accent transition-colors">{group.label}</Link>
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.path}>
                        <Link to={item.path} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Biblioteca Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">Biblioteca</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bibliotecaNav.groups.map((group) => (
              <Card key={group.path} className="overflow-hidden hover:shadow-lg transition-shadow">
                {group.image && (
                  <div className="aspect-video bg-muted">
                    <img src={group.image} alt={group.label} className="w-full h-full object-cover" />
                  </div>
                )}
                <CardContent className="p-5 space-y-3">
                  <h3 className="font-serif font-bold text-lg">
                    <Link to={group.path} className="hover:text-accent transition-colors">{group.label}</Link>
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.path}>
                        <Link to={item.path} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destaques Carousel */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">Destaques</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {highlights.map((h) => (
                  <div key={h.id} className="w-full flex-shrink-0 px-2">
                    <Card className="overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3 aspect-video md:aspect-auto bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground text-sm">Imagem</span>
                        </div>
                        <CardContent className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center space-y-3">
                          <h3 className="text-xl font-serif font-bold">{h.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{h.description}</p>
                          <Button asChild size="sm" className="self-start bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link to={h.link}>Ver Mais</Link>
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 shadow-md"
              onClick={prevSlide}
              disabled={carouselIndex === 0}
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 shadow-md"
              onClick={nextSlide}
              disabled={carouselIndex >= highlights.length - 1}
              aria-label="Próximo"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <div className="flex justify-center gap-2 mt-6">
              {highlights.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCarouselIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${i === carouselIndex ? "bg-accent scale-125" : "bg-border"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
