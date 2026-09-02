/**
 * Une o catálogo crítico moderno com as cartas históricas de Capecelatro.
 * Separa estritamente cartas com texto legível das cartas puramente de catálogo.
 */

import { cartasHistoricas } from "../data/cartas-historicas";
import { cartas as cartasCriticas } from "../data/cartas";

export type StatusTextual = "integral" | "fragmentario" | "catalogo";

export type CartaUnificada = {
  id: string;
  numeroExibicao: number;
  destinatario: string;
  qualificacao: string;
  local: string | null;
  data: {
    iso: string | null;
    original: string;
    aproximada: boolean;
  };
  contexto: string;
  temPortugues: boolean;
  temItaliano: boolean;
  fragmentaria: boolean;
  statusTextual: StatusTextual;
  cartaHistorica: any | null;
  cartaCritica: any | null;
  temas: string[];
};

function isFragmentaria(carta: any): boolean {
  if (!carta) return false;
  const notas = [
    ...(carta.notasEditoriais ?? []),
    ...(carta.notasCriticas ?? []),
    ...(carta.notas ?? []),
  ].map((n: any) => String(n).toLowerCase());

  return notas.some(
    (nota: string) =>
      nota.includes("testemunho parcial") ||
      nota.includes("fragmentár") ||
      nota.includes("fragmentar") ||
      nota.includes("lacuna")
  );
}

function encontrarHistorica(idHistorico: string | null | undefined): any | null {
  if (!idHistorico) return null;
  return (cartasHistoricas as any[]).find((c) => c.id === idHistorico) ?? null;
}

export function gerarCartasUnificadas(): CartaUnificada[] {
  const unificadas: CartaUnificada[] = [];
  const historicasUsadas = new Set<string>();

  for (const critica of cartasCriticas as any[]) {
    const historica = encontrarHistorica(critica.textoHistoricoRelacionado);
    if (historica) historicasUsadas.add(historica.id);

    const temTexto = Boolean(
      historica?.portugues?.texto || historica?.original?.texto
    );
    const fragmentaria = historica ? isFragmentaria(historica) : false;

    const destinatario =
      typeof critica.destinatario === "string"
        ? critica.destinatario
        : critica.destinatario?.nome ?? "Destinatário desconhecido";

    const qualificacao =
      typeof critica.qualificacao === "string"
        ? critica.qualificacao
        : critica.destinatario?.qualificacao ?? "";

    unificadas.push({
      id: String(critica.id ?? `carta-${critica.numero}`),
      numeroExibicao: Number(critica.numero ?? 0),
      destinatario,
      qualificacao,
      local: critica.local ?? null,
      data: historica
        ? historica.data
        : {
            iso: critica.data ?? null,
            original: critica.dataAproximada ?? "sem data preservada",
            aproximada: true,
          },
      contexto: historica?.contextoHistorico ?? critica.contexto ?? "",
      temPortugues: temTexto,
      temItaliano: temTexto,
      fragmentaria,
      statusTextual: !temTexto
        ? "catalogo"
        : fragmentaria
          ? "fragmentario"
          : "integral",
      cartaHistorica: historica,
      cartaCritica: critica,
      temas: Array.isArray(critica.tags)
        ? critica.tags
        : Array.isArray(historica?.temas)
          ? historica.temas
          : [],
    });
  }

  for (const historica of cartasHistoricas as any[]) {
    if (historicasUsadas.has(historica.id)) continue;

    const fragmentaria = isFragmentaria(historica);
    const destNome =
      typeof historica.destinatario === "string"
        ? historica.destinatario
        : historica.destinatario?.nome ?? "Destinatário";

    const destQual =
      typeof historica.destinatario === "string"
        ? ""
        : historica.destinatario?.qualificacao ?? "";

    unificadas.push({
      id: String(historica.id),
      numeroExibicao: 100 + Number(historica.historicoNumero ?? 0),
      destinatario: destNome,
      qualificacao: destQual,
      local: historica.local ?? null,
      data: historica.data ?? { iso: null, original: "sem data", aproximada: true },
      contexto: historica.contextoHistorico ?? "",
      temPortugues: true,
      temItaliano: true,
      fragmentaria,
      statusTextual: fragmentaria ? "fragmentario" : "integral",
      cartaHistorica: historica,
      cartaCritica: null,
      temas: Array.isArray(historica.temas) ? historica.temas : [],
    });
  }

  return unificadas;
}

/** Retorna APENAS cartas que têm texto em português para serem lidas. */
export function gerarCartasLegiveis(): CartaUnificada[] {
  return gerarCartasUnificadas().filter((c) => c.statusTextual !== "catalogo");
}

/** Retorna APENAS as fichas sem texto público. */
export function gerarCartasCatalogo(): CartaUnificada[] {
  return gerarCartasUnificadas().filter((c) => c.statusTextual === "catalogo");
}

export function estatisticasCartas() {
  const todas = gerarCartasUnificadas();
  return {
    total: todas.length,
    legiveis: todas.filter((c) => c.statusTextual !== "catalogo").length,
    integrais: todas.filter((c) => c.statusTextual === "integral").length,
    fragmentarias: todas.filter((c) => c.statusTextual === "fragmentario").length,
    catalogo: todas.filter((c) => c.statusTextual === "catalogo").length,
  };
}

export function buscarCartaPorId(id: string): CartaUnificada | null {
  return gerarCartasUnificadas().find((c) => c.id === id) ?? null;
}

export function cartaAnterior(id: string): CartaUnificada | null {
  const legiveis = gerarCartasLegiveis();
  const idx = legiveis.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return legiveis[idx - 1];
}

export function cartaProxima(id: string): CartaUnificada | null {
  const legiveis = gerarCartasLegiveis();
  const idx = legiveis.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= legiveis.length - 1) return null;
  return legiveis[idx + 1];
}