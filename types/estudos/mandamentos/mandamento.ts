export interface CitacaoBiblica {
  texto: string;
  referencia: string;
}

export type Tabua = 'primeira' | 'segunda';

export interface Santo {
  nome: string;
  anos: string;
  frase: string;
  historia: string;
}

export interface BemAventuranca {
  texto: string;
  referencia: string;
  explicacao: string;
}

export interface Mandamento {
  id: number;
  numero: string;
  titulo: string;
  textoCatequetico: string;
  textoBiblico: string;
  referenciaBiblica: string;
  tabua: Tabua;
  explicacao: string;
  oqueDeusOrdena: string[];
  oqueDeusProibe: string[];
  catecismoReferencia: string;
  citacoesRelacionadas: CitacaoBiblica[];
  aplicacaoModerna: string;
  perguntasExame: string[];
  conexaoComCristo: string;
  bemAventurancaRelacionada: BemAventuranca;
  santoRelacionado: Santo;
}