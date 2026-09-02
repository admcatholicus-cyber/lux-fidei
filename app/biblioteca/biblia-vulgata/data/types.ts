// Tipos compartilhados dos dados da Bíblia Sagrada (Vulgata) — tradução do
// Pe. Antônio Pereira de Figueiredo. Domínio público.

/** Testamento: Antigo ou Novo. */
export type Testament = 'AT' | 'NT';

/** Uma página dentro de um livro bíblico. */
export type BiblePage = {
  /** Número sequencial da página dentro do livro (1..N). */
  number: number;
  /** Número original da página no PDF-fonte, para referência cruzada. */
  pdfPage: number;
  /**
   * Parágrafos da página.
   *
   * Cada parágrafo é uma das seguintes formas:
   * - Versículo:   `"3. Porque a palavra da cruz é..."`
   * - Cabeçalho:  `"CAPÍTULO 1"` ou `"INTRODUÇÃO"`
   * - Sumário:    `"Repreende Paulo aos Gálatas pela sua inconstância."`
   * - Título:     `"EPÍSTOLA DE S. PAULO AOS GÁLATAS"`
   */
  paragraphs: readonly string[];
};

/** Conteúdo completo de um livro bíblico. */
export type BookData = {
  /** Identificador único do livro, ex.: `"genesis"`, `"1corintios"`. */
  slug: string;
  /** Título completo em português, ex.: `"Gênesis"`. */
  title: string;
  /** Páginas lógicas do livro (introdução + capítulos). */
  pages: readonly BiblePage[];
};

/** Metadados de um livro para listagem/navegação. */
export type BookInfo = {
  /** Identificador único, coincide com `BookData.slug`. */
  slug: string;
  /** Título completo em português. */
  title: string;
  /** Numeração romana na ordem canônica católica (I..LXXIII). */
  roman: string;
  /** Índice global na lista canônica, 1..73. */
  number: number;
  /** Testamento ao qual o livro pertence. */
  testament: Testament;
  /** Total de páginas lógicas do livro (introdução + capítulos). */
  pageCount: number;
};

// ---------------------------------------------------------------------------
// Utilitários de tipo — sem custo em runtime
// ---------------------------------------------------------------------------

/** Garante que um `slug` pertence ao conjunto de livros conhecidos. */
export type BookSlug = BookInfo['slug'];

/** Extrai as chaves de um mapa `slug → BookData`. */
export type BookMap = Record<BookSlug, BookData>;