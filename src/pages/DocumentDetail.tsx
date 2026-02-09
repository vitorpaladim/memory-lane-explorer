import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { FileText, Download, Eye, Calendar, User, Tag } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { documents } from "@/data/mockData";

const DocumentDetail = () => {
  const { id } = useParams();
  const doc = documents.find((d) => d.id === id);
  const related = documents.filter((d) => d.id !== id).slice(0, 3);

  if (!doc) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-serif font-bold">Documento não encontrado</h1>
          <Button asChild className="mt-4"><Link to="/biblioteca">Voltar à Biblioteca</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/" className="text-primary-foreground/70 hover:text-accent">Início</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/50" />
              <BreadcrumbItem><BreadcrumbLink asChild><Link to="/biblioteca" className="text-primary-foreground/70 hover:text-accent">Biblioteca</Link></BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator className="text-primary-foreground/50" />
              <BreadcrumbItem><BreadcrumbPage className="text-primary-foreground">{doc.title}</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-destructive/10">
                <FileText className="h-10 w-10 text-destructive" />
              </div>
              <div>
                <h1 className="text-3xl font-serif font-bold mb-2">{doc.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{new Date(doc.date).toLocaleDateString("pt-BR")}</span>
                  <span className="flex items-center gap-1"><User className="h-4 w-4" />{doc.author}</span>
                  <span className="flex items-center gap-1"><Tag className="h-4 w-4" /><Badge variant="secondary">{doc.category}</Badge></span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground leading-relaxed">{doc.description}</p>
            </div>

            <div className="flex gap-3 mb-12">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Eye className="h-5 w-5 mr-2" /> Visualizar PDF
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" /> Download
              </Button>
            </div>

            {/* Related */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Documentos Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Card key={r.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm leading-tight line-clamp-2">{r.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="text-xs mb-2">{r.category}</Badge>
                      <Button asChild size="sm" variant="link" className="p-0 h-auto text-accent">
                        <Link to={`/biblioteca/${r.id}`}>Ver documento</Link>
                      </Button>
                    </CardContent>
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

export default DocumentDetail;
