// app/lib/historico.ts

export interface HistoricoItem {
  id: string;
  titulo: string;
  autor: string;
  capa: string;
  url: string;
  ultimoCapitulo: string;
  categoria: string;
  corTema: 'dourado' | 'rosa' | 'roxo' | 'verde';
  progresso: number;
  ultimoAcesso: string;
  ocultarProgresso?: boolean;

  /** NOVO: opções extras no card Continuar Lendo */
  opcoesContinuar?: Array<{
    id?: string; // Opcional, dependendo de como você definiu antes
    label: string;
    detalhe?: string;
    url: string;
  }>;
}

const CHAVE = 'luxfidei_historico';
const LIMITE = 10;

/**
 * Mapa de chaves de localStorage por livro.
 */
const CHAVES_POR_LIVRO: Record<string, string[]> = {
  'historia-de-uma-alma': [
    'lf-reader-position',
    'lf-reader-progress',
  ],
  'suma-teologica': [
    // adicione as chaves específicas quando a Suma tiver leitor
  ],
  'biblia-vulgata': [
    'lf-biblia-ultimo-livro',
    'lf-biblia-ultimo-capitulo',
    // adicione outras chaves específicas da Bíblia aqui
  ],
  'sao-filipe-neri': [
    'lf-filipe-progresso',
    'lf-filipe-ultima-pagina',
  ],
  'sao-joao-maria-vianney': [
    'lux_fidei_vianney_progresso', // Chave adicionada para gerenciar o histórico do Cura d'Ars
  ],
};

export function registrarHistorico(
  item: Omit<HistoricoItem, 'ultimoAcesso'>
): void {
  if (typeof window === 'undefined') return;

  try {
    const salvo = localStorage.getItem(CHAVE);
    let lista: HistoricoItem[] = salvo ? JSON.parse(salvo) : [];

    lista = lista.filter((l) => l.id !== item.id);

    lista.unshift({
      ...item,
      ultimoAcesso: new Date().toISOString(),
    });

    lista = lista.slice(0, LIMITE);

    localStorage.setItem(CHAVE, JSON.stringify(lista));
  } catch (e) {
    console.error('Erro ao registrar histórico:', e);
  }
}

export function atualizarProgresso(
  id: string,
  progresso: number,
  ultimoCapitulo?: string
): void {
  if (typeof window === 'undefined') return;

  try {
    const salvo = localStorage.getItem(CHAVE);
    if (!salvo) return;

    const lista: HistoricoItem[] = JSON.parse(salvo);
    const item = lista.find((l) => l.id === id);
    if (!item) return;

    item.progresso = Math.min(100, Math.max(0, Math.round(progresso)));
    if (ultimoCapitulo) item.ultimoCapitulo = ultimoCapitulo;
    item.ultimoAcesso = new Date().toISOString();

    localStorage.setItem(CHAVE, JSON.stringify(lista));
  } catch (e) {
    console.error('Erro ao atualizar progresso:', e);
  }
}

/**
 * Atualiza apenas o último capítulo/livro (sem progresso).
 * Ideal para a Bíblia — atualiza "Gênesis 12", "Salmos 23" etc.
 */
export function atualizarUltimaLeitura(
  id: string,
  ultimoCapitulo: string
): void {
  if (typeof window === 'undefined') return;

  try {
    const salvo = localStorage.getItem(CHAVE);
    if (!salvo) return;

    const lista: HistoricoItem[] = JSON.parse(salvo);
    const item = lista.find((l) => l.id === id);
    if (!item) return;

    item.ultimoCapitulo = ultimoCapitulo;
    item.ultimoAcesso = new Date().toISOString();

    localStorage.setItem(CHAVE, JSON.stringify(lista));
  } catch (e) {
    console.error('Erro ao atualizar última leitura:', e);
  }
}

export function obterHistorico(): HistoricoItem[] {
  if (typeof window === 'undefined') return [];

  try {
    const salvo = localStorage.getItem(CHAVE);
    if (!salvo) return [];

    const lista: HistoricoItem[] = JSON.parse(salvo);
    return lista.sort(
      (a, b) =>
        new Date(b.ultimoAcesso).getTime() -
        new Date(a.ultimoAcesso).getTime()
    );
  } catch {
    return [];
  }
}

export function removerLivroCompletamente(id: string): void {
  if (typeof window === 'undefined') return;

  try {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo) {
      const lista: HistoricoItem[] = JSON.parse(salvo);
      const filtrada = lista.filter((l) => l.id !== id);
      if (filtrada.length === 0) {
        localStorage.removeItem(CHAVE);
      } else {
        localStorage.setItem(CHAVE, JSON.stringify(filtrada));
      }
    }

    const chaves = CHAVES_POR_LIVRO[id] || [];
    chaves.forEach((chave) => localStorage.removeItem(chave));

    const chavesParaApagar: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('lf-highlights-')) {
        chavesParaApagar.push(k);
      }
    }
    chavesParaApagar.forEach((k) => localStorage.removeItem(k));
  } catch (e) {
    console.error('Erro ao remover livro completamente:', e);
  }
}

export function limparTudoHistorico(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CHAVE);

    Object.values(CHAVES_POR_LIVRO)
      .flat()
      .forEach((chave) => localStorage.removeItem(chave));

    const chavesParaApagar: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('lf-highlights-')) {
        chavesParaApagar.push(k);
      }
    }
    chavesParaApagar.forEach((k) => localStorage.removeItem(k));
  } catch (e) {
    console.error('Erro ao limpar histórico:', e);
  }
}