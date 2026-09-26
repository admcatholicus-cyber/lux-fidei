export type SecaoAmbrosio =
  | "de-spiritu-sancto"
  | "de-officiis"
  | "de-fide"
  | "hinos-ambrosianos"
  | "indice";

export type ProgressoSecao = {
  label: string;
  detalhe: string;
  url: string;
  atualizadoEm: string;
};

export type ProgressoAmbrosio = {
  "de-spiritu-sancto"?: ProgressoSecao;
  "de-officiis"?: ProgressoSecao;
  "de-fide"?: ProgressoSecao;
  "hinos-ambrosianos"?: ProgressoSecao;
  ultimaSecao?: SecaoAmbrosio;
};

const CHAVE = "lf-ambrosio-progresso";

export function obterProgressoAmbrosio(): ProgressoAmbrosio {
  if (typeof window === "undefined") return {};
  try {
    const bruto = localStorage.getItem(CHAVE);
    return bruto ? (JSON.parse(bruto) as ProgressoAmbrosio) : {};
  } catch {
    return {};
  }
}

export function salvarProgressoSecao(
  secao: Exclude<SecaoAmbrosio, "indice">,
  dados: Omit<ProgressoSecao, "atualizadoEm">,
): ProgressoAmbrosio {
  if (typeof window === "undefined") return {};

  const atual = obterProgressoAmbrosio();
  const novo: ProgressoAmbrosio = {
    ...atual,
    [secao]: {
      ...dados,
      atualizadoEm: new Date().toISOString(),
    },
    ultimaSecao: secao,
  };

  localStorage.setItem(CHAVE, JSON.stringify(novo));
  localStorage.setItem("lf-ambrosio-ultima-pagina", dados.url);
  return novo;
}

export function montarOpcoesContinuar(progresso: ProgressoAmbrosio) {
  const opcoes: Array<{
    id: string;
    label: string;
    detalhe?: string;
    url: string;
  }> = [];

  if (progresso["de-spiritu-sancto"]) {
    opcoes.push({
      id: "de-spiritu-sancto",
      label: "Continuar De Spiritu Sancto",
      detalhe: progresso["de-spiritu-sancto"].detalhe,
      url: progresso["de-spiritu-sancto"].url,
    });
  }

  if (progresso["de-officiis"]) {
    opcoes.push({
      id: "de-officiis",
      label: "Continuar De Officiis Ministrorum",
      detalhe: progresso["de-officiis"].detalhe,
      url: progresso["de-officiis"].url,
    });
  }

  if (progresso["de-fide"]) {
    opcoes.push({
      id: "de-fide",
      label: "Continuar De Fide",
      detalhe: progresso["de-fide"].detalhe,
      url: progresso["de-fide"].url,
    });
  }

  if (progresso["hinos-ambrosianos"]) {
    opcoes.push({
      id: "hinos-ambrosianos",
      label: "Continuar Hinos Ambrosianos",
      detalhe: progresso["hinos-ambrosianos"].detalhe,
      url: progresso["hinos-ambrosianos"].url,
    });
  }

  opcoes.push({
    id: "indice",
    label: "Ver índice da obra",
    detalhe: "De Spiritu Sancto",
    url: "/biblioteca/santo-ambrosio",
  });

  return opcoes;
}

export function resumoUltimaLeitura(progresso: ProgressoAmbrosio): {
  texto: string;
  url: string;
} {
  if (progresso.ultimaSecao && progresso.ultimaSecao !== "indice") {
    const item = progresso[progresso.ultimaSecao];
    if (item) {
      return { texto: item.detalhe, url: item.url };
    }
  }

  if (progresso["de-spiritu-sancto"]) {
    return {
      texto: progresso["de-spiritu-sancto"].detalhe,
      url: progresso["de-spiritu-sancto"].url,
    };
  }

  return {
    texto: "Abrir índice da obra",
    url: "/biblioteca/santo-ambrosio",
  };
}
