/**
 * Formatadores compartilhados por leitores e listas.
 */

const MESES_PT: Record<number, string> = {
  1: "janeiro", 2: "fevereiro", 3: "março", 4: "abril",
  5: "maio", 6: "junho", 7: "julho", 8: "agosto",
  9: "setembro", 10: "outubro", 11: "novembro", 12: "dezembro",
};

/**
 * "1585-08-30" → "30 de agosto de 1585"
 */
export function formatarDataISO(iso: string | null): string | null {
  if (!iso) return null;
  const [ano, mes, dia] = iso.split("-").map(Number);
  if (!ano || !mes || !dia) return null;
  return `${dia} de ${MESES_PT[mes]} de ${ano}`;
}

/**
 * Numeração romana simples (I–L). Suficiente para 34 cartas.
 */
export function romano(n: number): string {
  const map: Array<[number, string]> = [
    [50, "L"], [40, "XL"], [10, "X"], [9, "IX"],
    [5, "V"], [4, "IV"], [1, "I"],
  ];
  let resto = n;
  let out = "";
  for (const [valor, simbolo] of map) {
    while (resto >= valor) {
      out += simbolo;
      resto -= valor;
    }
  }
  return out;
}

/**
 * Slug seguro a partir de texto (para URLs de tema).
 */
export function slugify(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Capitaliza primeira letra.
 */
export function capitalizar(texto: string): string {
  if (!texto) return texto;
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}