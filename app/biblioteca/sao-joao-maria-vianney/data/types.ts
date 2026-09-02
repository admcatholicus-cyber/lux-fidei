/**
 * Tipos oficiais da edição digital das obras de São João Maria Vianney (Cura d'Ars).
 */

export type VolumeSermoes = 1 | 2 | 3 | 4;
export type AutenticidadeSermoes = "autêntica" | "atribuída" | "duvidosa";

export interface SermaoCelebre {
  id: string;
  numero: number;
  temaDoutrinal: string;
  tituloOriginal: string;
  tituloPortugues: string;
  volume: VolumeSermoes;
  paginasFonte: string;
  original: {
    idioma: "francês";
    texto: string;
  };
  portugues: {
    texto: string;
    tradutor: string;
  };
  latim?: string;
  referenciasBiblicas: string[];
  fonte: string;
  autenticidade: AutenticidadeSermoes;
  estadoEditorial: "em levantamento" | "em revisão" | "revisado";
  textoCompartilhadoCom?: string;
  notasEditoriais: string[];
}

export type TipoOracao =
  | "ato de fé"
  | "ato de esperança"
  | "ato de caridade"
  | "ato de contrição"
  | "oração"
  | "fórmula"
  | "preparação";

export type AutenticidadeOracao = "autêntica" | "atribuída" | "tradicional";

export interface OracaoVianney {
  id: string;
  numero: number;
  tituloOriginal: string;
  tituloPortugues: string;
  tipo: TipoOracao;
  original: {
    idioma: "francês" | "latim";
    texto: string | null;
  };
  portugues: {
    texto: string | null;
    tradutor: string;
  };
  fonte: string;
  autenticidade: AutenticidadeOracao;
  estadoEditorial: "em levantamento" | "em revisão" | "revisado";
  notasEditoriais: string[];
}