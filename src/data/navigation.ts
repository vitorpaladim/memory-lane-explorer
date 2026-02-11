export interface NavSection {
  label: string;
  path: string;
  groups: NavGroup[];
}

export interface NavGroup {
  label: string;
  path: string;
  items: NavItem[];
}

export interface NavItem {
  label: string;
  path: string;
}

export const atividadesNav: NavSection = {
  label: "Atividades Parlamentares",
  path: "/atividades",
  groups: [
    {
      label: "Vereadores",
      path: "/atividades/vereadores",
      items: [
        { label: "Mesas Diretoras", path: "/atividades/vereadores/mesas-diretoras" },
        { label: "Comissões Permanentes", path: "/atividades/vereadores/comissoes-permanentes" },
        { label: "Composição da Câmara", path: "/atividades/vereadores/composicao" },
      ],
    },
    {
      label: "Projetos",
      path: "/atividades/projetos",
      items: [
        { label: "Leis", path: "/atividades/projetos/leis" },
        { label: "Leis Complementares", path: "/atividades/projetos/leis-complementares" },
      ],
    },
    {
      label: "Proposituras",
      path: "/atividades/proposituras",
      items: [
        { label: "Indicações", path: "/atividades/proposituras/indicacoes" },
        { label: "Pedidos de Informação", path: "/atividades/proposituras/pedidos-informacao" },
        { label: "Requerimentos", path: "/atividades/proposituras/requerimentos" },
        { label: "Moções", path: "/atividades/proposituras/mocoes" },
      ],
    },
    {
      label: "Atos Oficiais da Câmara",
      path: "/atividades/atos-oficiais",
      items: [
        { label: "Atos do Presidente", path: "/atividades/atos-oficiais/atos-presidente" },
        { label: "Atos da Mesa", path: "/atividades/atos-oficiais/atos-mesa" },
        { label: "Resoluções", path: "/atividades/atos-oficiais/resolucoes" },
        { label: "Decretos Legislativos", path: "/atividades/atos-oficiais/decretos-legislativos" },
        { label: "Decretos", path: "/atividades/atos-oficiais/decretos" },
      ],
    },
    {
      label: "Comissões",
      path: "/atividades/comissoes",
      items: [
        { label: "Comissões de Estudo", path: "/atividades/comissoes/estudo" },
        { label: "Comissões de Inquérito", path: "/atividades/comissoes/inquerito" },
      ],
    },
  ],
};

export const bibliotecaNav: NavSection = {
  label: "Biblioteca",
  path: "/biblioteca",
  groups: [
    {
      label: "Livros",
      path: "/biblioteca/livros",
      items: [
        { label: "Ebooks", path: "/biblioteca/livros/ebooks" },
      ],
    },
    {
      label: "Publicações da Câmara",
      path: "/biblioteca/publicacoes",
      items: [
        { label: "Cadernos de Memória", path: "/biblioteca/publicacoes/cadernos-memoria" },
        { label: "Relatórios da Comissão", path: "/biblioteca/publicacoes/relatorios-comissao" },
        { label: "Socioeconômica", path: "/biblioteca/publicacoes/socioeconomica" },
        { label: "Orçamentos Comentados", path: "/biblioteca/publicacoes/orcamentos-comentados" },
      ],
    },
    {
      label: "Documentos Históricos",
      path: "/biblioteca/documentos-historicos",
      items: [
        { label: "Império e República Velha", path: "/biblioteca/documentos-historicos/imperio-republica-velha" },
        { label: "Leis Municipais", path: "/biblioteca/documentos-historicos/leis-municipais" },
        { label: "Manuscritas", path: "/biblioteca/documentos-historicos/manuscritas" },
        { label: "Leis Promulgadas pela Câmara", path: "/biblioteca/documentos-historicos/leis-promulgadas" },
        { label: "Planta Estrada de Ferro", path: "/biblioteca/documentos-historicos/planta-estrada-ferro" },
      ],
    },
  ],
};

// Helper to get all routes for a section
export function getAllSectionRoutes(section: NavSection): { path: string; label: string; breadcrumb: string[] }[] {
  const routes: { path: string; label: string; breadcrumb: string[] }[] = [];
  
  for (const group of section.groups) {
    routes.push({ path: group.path, label: group.label, breadcrumb: [section.label, group.label] });
    for (const item of group.items) {
      routes.push({ path: item.path, label: item.label, breadcrumb: [section.label, group.label, item.label] });
    }
  }
  
  return routes;
}
