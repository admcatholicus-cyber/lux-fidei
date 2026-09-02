/**
 * Tipos oficiais da edição digital dos escritos de São Filipe Néri.
 * Baseados nos arquivos entregues pela pesquisa crítica.
 */

// ============================================================
// CARTAS HISTÓRICAS (Capecelatro, 1889)
// ============================================================

export type PassagemLatina = {
  trecho: string;
  origem: string | null;
  traducao: string;
};

export type ReferenciaBiblica = {
  passagem: string;
  referencia: string;
  tipo: "citação" | "alusão" | "paráfrase";
};

export type CartaHistorica = {
  id: string;
  historicoNumero: number;
  destinatario: {
    nome: string;
    qualificacao: string;
    tratamento: string | null;
  };
  local: string | null;
  data: {
    iso: string | null;
    original: string;
    aproximada: boolean;
  };
  contextoHistorico: string;
  original: {
    idioma: "italiano" | "latim" | "misto";
    texto: string;
    passagensLatinas: PassagemLatina[] | null;
  };
  portugues: {
    texto: string;
    tradutor: string;
    registroLinguistico: string;
  };
  referenciasBiblicas: ReferenciaBiblica[] | null;
  notasCriticas: string[];
  notasEditoriais: string[];
  fonte: {
    primaria: string;
    secundarias: string[];
    paginaOriginal: string;
    linkImagem: string | null;
  };
  correspondenciaEdicaoCritica: {
    numeroEOS: number | null;
    certeza: "confirmada" | "provável" | "não estabelecida";
  };
  temas: string[];
};

// ============================================================
// CARTAS DO CATÁLOGO CRÍTICO MODERNO (EOS 2011)
// ============================================================

export type CartaCritica = {
  id: string;
  numero: number;
  destinatario: string;
  qualificacao: string;
  local: string | null;
  data: string | null;
  dataAproximada: string | null;
  contexto: string;
  original: {
    idioma: string;
    texto: string | null;
  };
  portugues: {
    texto: string | null;
    tradutor: string | null;
  };
  textoHistoricoRelacionado: string | null;
  notas: string[];
  fonte: string;
  autenticidade: string;
  tags: string[];
};

// ============================================================
// CARTA UNIFICADA (união de crítica + histórica)
// ============================================================

export type CartaUnificada = {
  id: string;
  numeroExibicao: number;
  destinatario: string;
  qualificacao: string;
  local: string | null;
  data: {
    iso: string | null;
    original: string;
    aproximada: boolean;
  };
  contexto: string;
  temPortugues: boolean;
  temItaliano: boolean;
  fragmentaria: boolean;
  statusTextual: "integral" | "fragmentario" | "catalogo";
  cartaHistorica: CartaHistorica | null;
  cartaCritica: CartaCritica | null;
  temas: string[];
};

// ============================================================
// MÁXIMAS
// ============================================================

export type Maxima = {
  id: string;
  numero: number;
  dia: number;
  mes: string;
  original: {
    idioma: "italiano" | "latim" | "misto";
    texto: string;
    passagensLatinas: PassagemLatina[] | null;
  };
  portugues: {
    texto: string;
    tradutor: string;
  };
  tema: string;
  temasSecundarios?: string[];
  contexto: string | null;
  testemunha: string | null;
  referenciasBiblicas: ReferenciaBiblica[] | null;
  fonte: {
    primaria: string;
    original: string;
    paginaPDF: number | null;
  };
  autenticidade: "tradicional";
  notasEditoriais: string[];
};

// ============================================================
// SONETOS
// ============================================================

export type Soneto = {
  id: string;
  numero: number;
  titulo: string;
  original: {
    idioma: "italiano";
    versos: string[] | null;
  };
  portugues: {
    versos: string[] | null;
    tradutor: string | null;
  };
  forma: string;
  tema: string;
  fonte: string;
  autenticidade: "autêntico" | "provável" | "rejeitado" | "não verificável";
  justificativaAutenticidade: string;
  notasCriticas: string[];
};

// ============================================================
// OUTROS ESCRITOS
// ============================================================

export type EscritoDiverso = {
  id: string;
  categoria: string;
  titulo: string;
  data: string | null;
  idioma: string;
  texto: string | null;
  autenticidade: string;
  fonte: string;
  status: string;
};

// ============================================================
// METADATA GERAL DA OBRA
// ============================================================

export type MesesPortugues =
  | "janeiro" | "fevereiro" | "março" | "abril"
  | "maio" | "junho" | "julho" | "agosto"
  | "setembro" | "outubro" | "novembro" | "dezembro";