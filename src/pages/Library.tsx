import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Download, Eye, Calendar, Search } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { documents, categories } from "@/data/mockData";

const Library = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");

  const filtered = documents.filter((d) => {
    const matchSearch = d.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "all" || d.category === category;
    return matchSearch && matchCat;
  });

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-2">Biblioteca Digital</h1>
          <p className="text-primary-foreground/70">Acervo completo de documentos históricos do município.</p>
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
                  <Input placeholder="Buscar documento..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Categoria</label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger><SelectValue placeholder="Todas" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Ano</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Todos os anos" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="1800">Séc. XIX</SelectItem>
                    <SelectItem value="1900">Séc. XX</SelectItem>
                    <SelectItem value="2000">Séc. XXI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </aside>

            {/* Grid */}
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-6">{filtered.length} documento(s) encontrado(s)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((doc) => (
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Library;
