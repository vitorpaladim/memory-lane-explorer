import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-2">Contato</h1>
          <p className="text-primary-foreground/70">Entre em contato conosco ou visite o Centro de Memórias.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Envie uma mensagem</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" placeholder="Seu nome" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Assunto</Label>
                  <Input id="subject" placeholder="Assunto da mensagem" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Escreva sua mensagem..." rows={5} className="mt-1" />
                </div>
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-serif font-bold mb-6">Informações</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Endereço", value: "Praça Central, 100 — Centro\nCEP 01234-567" },
                  { icon: Phone, label: "Telefone", value: "(11) 3456-7890" },
                  { icon: Mail, label: "E-mail", value: "contato@centrodememoria.gov.br" },
                  { icon: Clock, label: "Horário", value: "Seg a Sex: 9h às 17h\nSáb: 9h às 13h" },
                ].map((item) => (
                  <Card key={item.label}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="p-2 rounded-md bg-accent/10">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{item.label}</h3>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map placeholder */}
              <Card className="overflow-hidden">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Mapa interativo</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
