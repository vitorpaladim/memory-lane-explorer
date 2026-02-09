

# Centro de Memórias da Cidade — Plano de Implementação

## Visão Geral
Site institucional dedicado à preservação da memória histórica da cidade, com acervo digital, linha do tempo interativa e gestão de atividades parlamentares. Visual moderno, sóbrio e acessível.

## Diretrizes Visuais
- Paleta sóbria: tons de azul-marinho escuro, cinza, branco e detalhes em dourado/âmbar
- Tipografia grande e legível, espaçamento generoso
- Ícones simples (Lucide), cantos arredondados suaves
- Layout totalmente responsivo (desktop e mobile)
- Foco em acessibilidade: contraste alto, navegação por teclado, textos alternativos

---

## Parte 1 — Site Público

### 1. Layout Global
- **Header fixo** com logo à esquerda, menu horizontal centralizado (Início, Linha do Tempo, Biblioteca, Atividades Parlamentares, Sobre, Contato) e campo de busca à direita
- **Menu mobile** com hambúrguer e drawer lateral
- **Footer** com logo, links institucionais, contatos, redes sociais e links legais (LGPD)

### 2. Página Inicial (Home)
- **Hero section** com título "Centro de Memórias da Cidade", subtítulo explicativo, ilustração institucional e dois botões: "Explorar Acervo" (primário) e "Ver Linha do Tempo" (secundário)
- **Carrossel de Destaques** com cards horizontais (imagem, título, descrição, botão "Ver mais"), navegação por setas e indicadores
- **Prévia da Linha do Tempo** — faixa horizontal com marcadores por década, clicável para expandir resumo
- **Prévia da Biblioteca** — grid de 4-6 documentos recentes
- **Prévia de Atividades Parlamentares** — lista das 3 atividades mais recentes

### 3. Página Linha do Tempo
- Timeline horizontal interativa com marcadores por década/período
- Ao clicar num marcador, abre card com resumo do período e botão "Ver documentos"
- Filtro por período

### 4. Página Biblioteca Digital
- Grid de cards com ícone PDF, título, data, categoria, botões "Visualizar" e "Download"
- Sidebar com filtros: Ano, Categoria, Tipo de documento
- Paginação ou scroll infinito
- Barra de busca local

### 5. Página de Documento (interna)
- Breadcrumb (Início > Biblioteca > Documento)
- Título, metadados (data, autor, categoria), descrição
- Botões "Visualizar PDF" e "Download"
- Seção de documentos relacionados

### 6. Página Atividades Parlamentares
- Lista cronológica com cards: data, tipo (sessão, projeto, ata), título, link para documentos
- Filtros por tipo e período

### 7. Página Sobre
- Texto institucional, missão, equipe

### 8. Página Contato
- Formulário de contato, mapa, informações de endereço e telefone

---

## Parte 2 — Painel Administrativo

### 9. Login do Admin
- Tela de login simples com email e senha

### 10. Dashboard
- Sidebar de navegação (Dashboard, Documentos, Linha do Tempo, Destaques)
- Visão geral com contadores: total de documentos, eventos na linha do tempo, destaques ativos

### 11. Gerenciamento de Documentos
- Tabela com lista de documentos, ações de editar/excluir
- Formulário de upload: título, descrição, data, categoria, upload de arquivo PDF, botões "Publicar" e "Salvar Rascunho"

### 12. Gerenciamento da Linha do Tempo
- Lista de eventos com edição inline
- Formulário para adicionar período/evento

### 13. Gerenciamento de Destaques do Carrossel
- Cards dos destaques com drag-and-drop para reordenar
- Formulário para adicionar/editar destaque

---

## Observações
- Nesta fase, todo o conteúdo será estático (mock/dados fictícios) para funcionar como wireframe de alta fidelidade
- A funcionalidade de backend (upload real, autenticação, banco de dados) poderá ser adicionada posteriormente com Lovable Cloud/Supabase
- Todas as páginas serão navegáveis entre si com rotas funcionais

