import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { timelinePeriods } from "@/data/mockData";

const Timeline = () => {
  const [activePeriod, setActivePeriod] = useState<string | null>(timelinePeriods[0]?.id ?? null);

  const activePeriodData = timelinePeriods.find((p) => p.id === activePeriod);

  const goToPrev = () => {
    const idx = timelinePeriods.findIndex((p) => p.id === activePeriod);
    if (idx > 0) setActivePeriod(timelinePeriods[idx - 1].id);
  };

  const goToNext = () => {
    const idx = timelinePeriods.findIndex((p) => p.id === activePeriod);
    if (idx < timelinePeriods.length - 1) setActivePeriod(timelinePeriods[idx + 1].id);
  };

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
          {/* Timeline bar with arrows */}
          <div className="relative flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shrink-0"
              onClick={goToPrev}
              disabled={timelinePeriods.findIndex((p) => p.id === activePeriod) <= 0}
              aria-label="Período anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1 relative">
              <div className="absolute top-[18px] left-0 right-0 h-0.5 bg-border" />
              <div className="flex overflow-x-auto gap-0 scrollbar-hide">
                {timelinePeriods.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePeriod(p.id)}
                    className="flex flex-col items-center min-w-[140px] relative group py-1"
                  >
                    <span className={`text-sm font-medium mb-1 ${activePeriod === p.id ? "text-accent" : "text-muted-foreground"}`}>
                      {p.decade}
                    </span>
                    <div className={`w-4 h-4 rounded-full border-2 z-10 transition-all ${
                      activePeriod === p.id
                        ? "bg-accent border-accent scale-125"
                        : "bg-background border-primary group-hover:border-accent"
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full shrink-0"
              onClick={goToNext}
              disabled={timelinePeriods.findIndex((p) => p.id === activePeriod) >= timelinePeriods.length - 1}
              aria-label="Próximo período"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Content below */}
          {activePeriodData && (
            <div className="mt-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-4">
                <h2 className="text-3xl font-serif font-bold text-foreground">{activePeriodData.title}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
              <div className="w-full md:w-96 shrink-0 aspect-[4/3] rounded-lg bg-muted border border-border flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Imagem</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Timeline;
