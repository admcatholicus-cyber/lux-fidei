/**
 * Tipos oficiais da edição digital das obras de Santo Ambrósio de Milão.
 */

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

export type CapituloAmbrosio = {
  id: string;
  numero: number;
  titulo: string;
  subtitulo?: string;
  data: {
    iso: string | null;
    original: string;
    aproximada: boolean;
  };
  contextoHistorico: string | null;
  original: {
    idioma: "latim" | "inglês" | "grego";
    texto: string;
    passagensLatinas?: PassagemLatina[];
  };
  portugues: {
    texto: string;
    tradutor: string;
  };
  referenciasBiblicas?: ReferenciaBiblica[];
  notasCriticas: string[];
  notasEditoriais: string[];
  fonte: {
    primaria: string;
    secundarias?: string[];
    paginaOriginal?: string;
    linkImagem?: string | null;
  };
  autenticidade: "autêntica" | "tradicional" | "atribuída";
  temas: string[];
};
