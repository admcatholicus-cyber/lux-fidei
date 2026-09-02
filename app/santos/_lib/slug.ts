/* ============================================================
   SLUG UTILS — Conversão nome ↔ URL
   ============================================================ */

/**
 * Converte "São João Maria Vianney" → "sao-joao-maria-vianney"
 * Remove acentos, pontuação, converte espaços em hífens.
 */
export function gerarSlug(texto: string): string {
  return texto
    .normalize('NFD')                    // decompõe acentos
    .replace(/[\u0300-\u036f]/g, '')     // remove diacríticos
    .toLowerCase()
    .replace(/['".,;:!?()]/g, '')        // remove pontuação
    .replace(/&/g, 'e')
    .replace(/\s+/g, '-')                // espaços → hífens
    .replace(/-+/g, '-')                 // múltiplos hífens → um só
    .replace(/^-|-$/g, '');              // remove hífens das pontas
}

/**
 * Compara dois strings normalizando (útil pra pesquisa)
 */
export function normalizar(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}