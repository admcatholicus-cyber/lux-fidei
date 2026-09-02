export type SecaoVianney =
  | 'sermoes'
  | 'cartas'
  | 'oracoes'
  | 'catequeses'
  | 'maximas'
  | 'indice';

export interface ItemProgressoVianney {
  label: string;
  detalhe: string;
  url: string;
  data: string;
}

export type ProgressoVianney = {
  ultimaSecao: Exclude<SecaoVianney, 'indice'>;
  sermoes?: ItemProgressoVianney;
  cartas?: ItemProgressoVianney;
  oracoes?: ItemProgressoVianney;
  catequeses?: ItemProgressoVianney;
  maximas?: ItemProgressoVianney;
};

const CHAVE_LOCAL_STORAGE = 'lux_fidei_vianney_progresso';

export function obterProgressoVianney(): ProgressoVianney | null {
  if (typeof window === 'undefined') return null;
  try {
    const json = localStorage.getItem(CHAVE_LOCAL_STORAGE);
    return json ? JSON.parse(json) : null;
  } catch {
    return null;
  }
}

export function salvarProgressoSecao(
  secao: Exclude<SecaoVianney, 'indice'>,
  dados: { label: string; detalhe: string; url: string }
): ProgressoVianney {
  const atual = obterProgressoVianney() || { ultimaSecao: secao };

  const novoProgresso: ProgressoVianney = {
    ...atual,
    ultimaSecao: secao,
    [secao]: {
      ...dados,
      data: new Date().toISOString(),
    },
  };

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(CHAVE_LOCAL_STORAGE, JSON.stringify(novoProgresso));
    } catch (e) {
      console.error('Erro ao salvar progresso de Vianney:', e);
    }
  }

  return novoProgresso;
}

export function resumoUltimaLeitura(progresso: ProgressoVianney | null) {
  if (!progresso) {
    return {
      texto: 'Obras de São João Maria Vianney',
      url: '/biblioteca/sao-joao-maria-vianney',
    };
  }

  const ultima = progresso[progresso.ultimaSecao];
  if (ultima && ultima.detalhe) {
    return {
      texto: ultima.detalhe, // Retorna apenas o nome da obra (sem undefined:)
      url: ultima.url,
    };
  }

  return {
    texto: 'Obras de São João Maria Vianney',
    url: '/biblioteca/sao-joao-maria-vianney',
  };
}

export function montarOpcoesContinuar(progresso: ProgressoVianney | null) {
  if (!progresso) return [];

  const opcoes = [];
  const secoes: Array<Exclude<SecaoVianney, 'indice'>> = [
    'sermoes',
    'cartas',
    'oracoes',
    'catequeses',
    'maximas',
  ];

  // Adiciona os botões de cada seção que o usuário já visitou
  for (const s of secoes) {
    const item = progresso[s];
    if (item && item.label && item.url) {
      opcoes.push({
        id: `${s}-${item.url}`,
        label: item.label,
        detalhe: item.detalhe,
        url: item.url,
      });
    }
  }

  // Adiciona a opção "Ver índice da obra" (igual ao de São Filipe Néri)
  opcoes.push({
    id: 'indice-vianney',
    label: 'Ver índice da obra',
    detalhe: 'Sermões · Cartas · Orações',
    url: '/biblioteca/sao-joao-maria-vianney',
  });

  return opcoes;
}