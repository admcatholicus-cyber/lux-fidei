/* ============================================================
   CATEGORIAS — Metadata visual e agrupamentos
   ============================================================ */

import type { Categoria } from '../_types/santo';

/** Ícones/emojis por categoria (opcional, usados nos chips) */
export const ICONE_CATEGORIA: Partial<Record<Categoria, string>> = {
  'Apóstolo': '✞',
  'Papa': '⛨',
  'Doutor da Igreja': '📖',
  'Mártir': '🕊',
  'Missionário': '⛵',
  'Fundador': '⚜',
  'Fundadora': '⚜',
  'Virgem': '❦',
  'Arcanjo': '⚔',
  'Bispo': '✝',
  'Presbítero': '✝',
  'Monge': '☨',
  'Eremita': '🏜',
  'Rei': '♛',
  'Rainha': '♛',
};

/** Categorias que aparecem primeiro no filtro (destaques) */
/** Categorias que aparecem primeiro no filtro (destaques) */
export const CATEGORIAS_DESTAQUE: Categoria[] = [
  'Apóstolo',
  'Doutor da Igreja',
  'Papa',
  'Mártir',
  'Fundador',
  'Missionário',
  'Virgem',
];

/** Ordena categorias colocando as de destaque primeiro */
export function ordenarCategorias(categorias: Categoria[]): Categoria[] {
  return [...categorias].sort((a, b) => {
    const iA = CATEGORIAS_DESTAQUE.indexOf(a);
    const iB = CATEGORIAS_DESTAQUE.indexOf(b);
    if (iA !== -1 && iB !== -1) return iA - iB;
    if (iA !== -1) return -1;
    if (iB !== -1) return 1;
    return a.localeCompare(b, 'pt-BR');
  });
}