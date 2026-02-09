export interface Highlight {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface TimelinePeriod {
  id: string;
  decade: string;
  year: string;
  title: string;
  summary: string;
  documentsCount: number;
}

export interface Document {
  id: string;
  title: string;
  date: string;
  category: string;
  type: string;
  author: string;
  description: string;
}

export interface Activity {
  id: string;
  date: string;
  type: "sessão" | "projeto" | "ata";
  title: string;
  description: string;
}

export const highlights: Highlight[] = [
  { id: "1", title: "Fundação da Câmara Municipal", description: "Documentos históricos da fundação da Câmara Municipal em 1850, incluindo atas e registros originais.", image: "/placeholder.svg", link: "/biblioteca/1" },
  { id: "2", title: "Acervo Fotográfico Restaurado", description: "Mais de 200 fotografias do início do século XX foram digitalizadas e restauradas.", image: "/placeholder.svg", link: "/biblioteca/2" },
  { id: "3", title: "Mapas Históricos da Cidade", description: "Coleção rara de mapas que mostram a evolução urbana da cidade ao longo de 150 anos.", image: "/placeholder.svg", link: "/biblioteca/3" },
  { id: "4", title: "Discursos Memoráveis", description: "Compilação dos discursos mais importantes proferidos na Câmara Municipal.", image: "/placeholder.svg", link: "/biblioteca/4" },
];

export const timelinePeriods: TimelinePeriod[] = [
  { id: "1", decade: "1850", year: "1850", title: "Fundação", summary: "Fundação da Câmara Municipal e primeiros registros legislativos da cidade.", documentsCount: 12 },
  { id: "2", decade: "1900", year: "1900", title: "Virada do Século", summary: "Modernização administrativa e primeiros projetos de infraestrutura urbana.", documentsCount: 28 },
  { id: "3", decade: "1930", year: "1930", title: "Era Vargas", summary: "Transformações políticas e sociais durante o período Vargas.", documentsCount: 35 },
  { id: "4", decade: "1950", year: "1950", title: "Desenvolvimentismo", summary: "Expansão urbana acelerada e grandes obras de infraestrutura.", documentsCount: 42 },
  { id: "5", decade: "1970", year: "1970", title: "Modernização", summary: "Digitalização dos primeiros registros e modernização dos processos legislativos.", documentsCount: 56 },
  { id: "6", decade: "1988", year: "1988", title: "Nova Constituição", summary: "Redemocratização e nova organização da Câmara Municipal.", documentsCount: 64 },
  { id: "7", decade: "2000", year: "2000", title: "Era Digital", summary: "Início da digitalização do acervo e transparência pública online.", documentsCount: 120 },
  { id: "8", decade: "2020", year: "2020", title: "Presente", summary: "Centro de Memórias consolidado como referência em preservação histórica.", documentsCount: 89 },
];

export const documents: Document[] = [
  { id: "1", title: "Ata da Primeira Sessão da Câmara Municipal", date: "1850-03-15", category: "Atas", type: "PDF", author: "Câmara Municipal", description: "Registro histórico da primeira sessão realizada pela Câmara Municipal, contendo a posse dos primeiros vereadores e as deliberações iniciais." },
  { id: "2", title: "Projeto de Lei nº 001/1900 - Iluminação Pública", date: "1900-06-22", category: "Projetos de Lei", type: "PDF", author: "Ver. João da Silva", description: "Projeto pioneiro para instalação de iluminação pública elétrica nas ruas centrais da cidade." },
  { id: "3", title: "Mapa Urbano de 1920", date: "1920-01-01", category: "Mapas", type: "PDF", author: "Departamento de Obras", description: "Mapa detalhado da área urbana da cidade no início do século XX." },
  { id: "4", title: "Decreto Municipal nº 45/1955", date: "1955-08-10", category: "Decretos", type: "PDF", author: "Prefeitura Municipal", description: "Decreto que estabeleceu o primeiro plano diretor da cidade." },
  { id: "5", title: "Relatório Anual da Câmara - 1988", date: "1988-12-31", category: "Relatórios", type: "PDF", author: "Câmara Municipal", description: "Relatório das atividades legislativas durante o ano da nova Constituição." },
  { id: "6", title: "Ata da Sessão Especial - Bicentenário", date: "2000-03-15", category: "Atas", type: "PDF", author: "Câmara Municipal", description: "Sessão solene comemorativa do bicentenário do município." },
];

export const activities: Activity[] = [
  { id: "1", date: "2026-02-05", type: "sessão", title: "Sessão Ordinária nº 12/2026", description: "Pauta: Aprovação do orçamento para restauração do acervo histórico." },
  { id: "2", date: "2026-02-03", type: "projeto", title: "PL 045/2026 - Patrimônio Digital", description: "Projeto de lei para criação do programa de preservação digital do patrimônio municipal." },
  { id: "3", date: "2026-01-28", type: "ata", title: "Ata da Comissão de Cultura", description: "Reunião da Comissão de Cultura para discussão do plano de expansão do Centro de Memórias." },
  { id: "4", date: "2026-01-20", type: "sessão", title: "Sessão Ordinária nº 10/2026", description: "Pauta: Discussão sobre acessibilidade nos espaços culturais públicos." },
  { id: "5", date: "2026-01-15", type: "projeto", title: "PL 032/2026 - Educação Patrimonial", description: "Projeto para inclusão de educação patrimonial no currículo escolar municipal." },
];

export const categories = ["Atas", "Projetos de Lei", "Decretos", "Mapas", "Relatórios", "Fotografias"];
export const activityTypes = ["sessão", "projeto", "ata"] as const;
