/**
 * Tipos oficiais da edição digital das obras de São Gregório de Nissa.
 */

export type CapituloBasilio = {
  id: string;
  numero: number;
  titulo: string;
  subtitulo?: string;
  data: {
    iso: string;
    original: string;
    aproximada?: boolean;
  };
  contextoHistorico: string;
  original: {
    idioma: "grego" | "latim" | "inglês";
    texto: string;
  };
  portugues: {
    texto: string;
    tradutor: string;
  };
  notasCriticas?: string[];
  notasEditoriais?: string[];
  fonte: {
    primaria: string;
  };
  autenticidade: "autêntica" | "tradicional" | "atribuída";
  temas: string[];
};
