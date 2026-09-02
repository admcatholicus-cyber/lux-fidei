export type SecaoFilipe = 'cartas' | 'maximas' | 'sonetos' | 'indice';

export type ProgressoSecao = {
  label: string;
  detalhe: string;
  url: string;
  atualizadoEm: string;
};

export type ProgressoFilipe = {
  cartas?: ProgressoSecao;
  maximas?: ProgressoSecao;
  sonetos?: ProgressoSecao;
  ultimaSecao?: SecaoFilipe;
};

const CHAVE = 'lf-filipe-progresso';

export function obterProgressoFilipe(): ProgressoFilipe {
  if (typeof window === 'undefined') return {};
  try {
    const bruto = localStorage.getItem(CHAVE);
    return bruto ? (JSON.parse(bruto) as ProgressoFilipe) : {};
  } catch {
    return {};
  }
}

export function salvarProgressoSecao(
  secao: Exclude<SecaoFilipe, 'indice'>,
  dados: Omit<ProgressoSecao, 'atualizadoEm'>
): ProgressoFilipe {
  if (typeof window === 'undefined') return {};

  const atual = obterProgressoFilipe();
  const novo: ProgressoFilipe = {
    ...atual,
    [secao]: {
      ...dados,
      atualizadoEm: new Date().toISOString(),
    },
    ultimaSecao: secao,
  };

  localStorage.setItem(CHAVE, JSON.stringify(novo));
  localStorage.setItem('lf-filipe-ultima-pagina', dados.url);
  return novo;
}

export function montarOpcoesContinuar(progresso: ProgressoFilipe) {
  const opcoes: Array<{
    id: string;
    label: string;
    detalhe?: string;
    url: string;
  }> = [];

  if (progresso.cartas) {
    opcoes.push({
      id: 'cartas',
      label: 'Continuar cartas',
      detalhe: progresso.cartas.detalhe,
      url: progresso.cartas.url,
    });
  }

  if (progresso.maximas) {
    opcoes.push({
      id: 'maximas',
      label: 'Continuar máximas',
      detalhe: progresso.maximas.detalhe,
      url: progresso.maximas.url,
    });
  }

  if (progresso.sonetos) {
    opcoes.push({
      id: 'sonetos',
      label: 'Continuar sonetos',
      detalhe: progresso.sonetos.detalhe,
      url: progresso.sonetos.url,
    });
  }

  // sempre disponível
  opcoes.push({
    id: 'indice',
    label: 'Ver índice da obra',
    detalhe: 'Cartas · Máximas · Sonetos',
    url: '/biblioteca/sao-filipe-neri',
  });

  return opcoes;
}

export function resumoUltimaLeitura(progresso: ProgressoFilipe): {
  texto: string;
  url: string;
} {
  const ordem: Array<Exclude<SecaoFilipe, 'indice'>> = [
    'cartas',
    'maximas',
    'sonetos',
  ];

  // prioriza a última seção tocada
  if (progresso.ultimaSecao && progresso.ultimaSecao !== 'indice') {
    const item = progresso[progresso.ultimaSecao];
    if (item) {
      return { texto: item.detalhe, url: item.url };
    }
  }

  // fallback: a mais recente por data
  let melhor: ProgressoSecao | null = null;
  for (const secao of ordem) {
    const item = progresso[secao];
    if (!item) continue;
    if (!melhor || item.atualizadoEm > melhor.atualizadoEm) {
      melhor = item;
    }
  }

  if (melhor) {
    return { texto: melhor.detalhe, url: melhor.url };
  }

  return {
    texto: 'Abrir índice da obra',
    url: '/biblioteca/sao-filipe-neri',
  };
}