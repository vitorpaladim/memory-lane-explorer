import { Landmark, Target, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-2">Sobre o Centro de Memórias</h1>
          <p className="text-primary-foreground/70">Conheça nossa missão e nossa equipe.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed text-lg">
              O Centro de Memórias da Cidade é uma iniciativa da Câmara Municipal dedicada à preservação, organização e difusão do patrimônio histórico e documental do município. Criado com o objetivo de tornar acessível a todos os cidadãos a rica história de nossa cidade, o Centro reúne documentos, fotografias, mapas e registros legislativos que datam desde a fundação do município.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center border-accent/20">
              <CardContent className="pt-8 pb-6 space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif font-bold">Missão</h3>
                <p className="text-sm text-muted-foreground">Preservar e democratizar o acesso à memória histórica da cidade.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-accent/20">
              <CardContent className="pt-8 pb-6 space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif font-bold">Visão</h3>
                <p className="text-sm text-muted-foreground">Ser referência nacional em preservação e difusão de patrimônio histórico municipal.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-accent/20">
              <CardContent className="pt-8 pb-6 space-y-3">
                <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif font-bold">Valores</h3>
                <p className="text-sm text-muted-foreground">Transparência, acessibilidade, rigor histórico e compromisso com a cidadania.</p>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-serif font-bold mb-6">Nossa Equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Maria Santos", role: "Diretora" },
              { name: "João Oliveira", role: "Historiador" },
              { name: "Ana Costa", role: "Arquivista" },
              { name: "Carlos Pereira", role: "Bibliotecário" },
              { name: "Lucia Ferreira", role: "Coord. Digital" },
              { name: "Pedro Lima", role: "Restaurador" },
            ].map((p) => (
              <Card key={p.name}>
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold">
                    {p.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
