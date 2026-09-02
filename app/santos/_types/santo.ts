/* ============================================================
   TIPOS CENTRAIS — Sistema de Santos
   ============================================================ */

/** Categorias possíveis (usadas nos filtros/chips) */
export type Categoria =
  | 'Apóstolo'
  | 'Evangelista'
  | 'Papa'
  | 'Mártir'
  | 'Doutor da Igreja'
  | 'Bispo'
  | 'Presbítero'
  | 'Diácono'
  | 'Missionário'
  | 'Fundador'
  | 'Fundadora'
  | 'Religioso'
  | 'Religiosa'
  | 'Monge'
  | 'Abade'
  | 'Abadessa'
  | 'Virgem'
  | 'Justo'
  | 'Justa'
  | 'Rei'
  | 'Rainha'
  | 'Imperatriz'
  | 'Arcanjo'
  | 'Anjo'
  | 'Eremita'
  | 'Místico'
  | 'Mística'
  | 'Confessor'
  | 'Pastor'
  | 'Médico'
  | 'Médica';

/** Pastas físicas onde ficam os MDX (subset das categorias que têm biografia) */
export type Pasta =
  | 'apostolos'
  | 'arcanjos'
  | 'doutores'
  | 'presbiteros'
  | 'papas'
  | 'martires'
  | 'missionarios'
  | 'bispos'
  | 'fundadores'
  | 'religiosos'
  | 'leigos';

/** Entrada mínima no registry (index de todos os santos) */
export interface SantoRegistry {
  nome: string;
  slug: string;
  categorias: Categoria[];
  pasta?: Pasta;
  temBiografia: boolean;
  imagemCard?: string;      // ← NOVA LINHA (caminho opcional customizado)
}

/** Aba de conteúdo de um santo (História, Milagres, etc.) */
export interface Aba {
  /** Slug URL da aba — ex: "historia" */
  slug: string;
  /** Rótulo do menu — ex: "História" */
  label: string;
  /** Ordem de exibição */
  ordem: number;
  /** Numeração romana opcional — ex: "I" */
  numero?: string;
  /** Subtítulo opcional exibido no cabeçalho da aba */
  subtitulo?: string;
  /** Se é uma aba "destaque" (renderizada separada, tipo Antologia) */
  destaque?: boolean;
}

/** Metadata completa de um santo com biografia */
export interface SantoMeta {
  slug: string;
  nome: string;
  titulo: string;              // ex: "Presbítero · Pastor"
  subtitulo?: string;          // ex: "Pároco de Ars, confessor..."
  categorias: Categoria[];
  pasta: Pasta;

  /** Datas */
  nascimento?: string;         // "8 de maio de 1786"
  morte?: string;              // "4 de agosto de 1859"
  canonizacao?: string;
  festa?: string;              // "4 de agosto"

  /** Locais */
  local_nascimento?: string;
  local_morte?: string;

  /** Padroado */
  padroeiro_de?: string[];

  /** Imagens */
  imagemCard: string;          // "/santos/cards/presbiteros/sao-joao-maria-vianney.png"
  imagemHero: string;          // "/santos/presbiteros/sao-joao-maria-vianney.png"

  /** Abas */
  abas: Aba[];

  /** SEO */
  descricaoSEO?: string;
}

/** Item do histórico de leitura (localStorage) */
export interface HistoricoItem {
  slug: string;
  nome: string;
  imagemCard: string;
  pasta: Pasta;
  progresso: number;           // 0-100
  lido: boolean;
  timestamp: number;
  ultimaAba?: string;
}