/**
 * Utilidades para navegação dos tratados de Santo Ambrósio.
 */

import { deSpirituSanctoData } from "../data/de-spiritu-sancto";
import { deOfficiisData } from "../data/de-officiis";
import { deFideData } from "../data/de-fide";
import { hinosAmbrosianosData } from "../data/hinos-ambrosianos";
import type { CapituloAmbrosio } from "../data/types";

const listaCapitulos: CapituloAmbrosio[] = deSpirituSanctoData;
const listaCapitulosDeOfficiis: CapituloAmbrosio[] = deOfficiisData;

export function getTodosCapitulosDeSpirituSancto(): CapituloAmbrosio[] {
  return listaCapitulos;
}

export function getCapituloDeSpirituSanctoById(
  id: string,
): CapituloAmbrosio | null {
  return listaCapitulos.find((c) => c.id === id) ?? null;
}

export function getCapituloAnterior(id: string): CapituloAmbrosio | null {
  const idx = listaCapitulos.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaCapitulos[idx - 1];
}

export function getProximoCapitulo(id: string): CapituloAmbrosio | null {
  const idx = listaCapitulos.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaCapitulos.length - 1) return null;
  return listaCapitulos[idx + 1];
}

export function buscarCapitulos(termo: string): CapituloAmbrosio[] {
  if (!termo || termo.trim().length < 2) return [];
  const alvo = termo.toLowerCase().trim();
  return listaCapitulos.filter((c) => {
    const pt = String(c.portugues?.texto ?? "").toLowerCase();
    const lat = String(c.original?.texto ?? "").toLowerCase();
    const titulo = String(c.titulo ?? "").toLowerCase();
    const temas = Array.isArray(c.temas) ? c.temas.join(" ").toLowerCase() : "";
    return (
      pt.includes(alvo) ||
      lat.includes(alvo) ||
      titulo.includes(alvo) ||
      temas.includes(alvo)
    );
  });
}

export function todosTemas(): string[] {
  const set = new Set<string>();
  for (const c of listaCapitulos) {
    if (Array.isArray(c.temas)) {
      for (const t of c.temas) set.add(t);
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

export function estatisticasCapitulos(): {
  total: number;
  autenticas: number;
  tradicionais: number;
  atribuidas: number;
} {
  return {
    total: listaCapitulos.length,
    autenticas: listaCapitulos.filter((c) => c.autenticidade === "autêntica")
      .length,
    tradicionais: listaCapitulos.filter(
      (c) => c.autenticidade === "tradicional",
    ).length,
    atribuidas: listaCapitulos.filter((c) => c.autenticidade === "atribuída")
      .length,
  };
}

// ─── De Officiis Ministrorum ───────────────────────────────────────

export function getTodosCapitulosDeOfficiis(): CapituloAmbrosio[] {
  return listaCapitulosDeOfficiis;
}

export function getCapituloDeOfficiisById(id: string): CapituloAmbrosio | null {
  return listaCapitulosDeOfficiis.find((c) => c.id === id) ?? null;
}

export function getCapituloDeOfficiisAnterior(
  id: string,
): CapituloAmbrosio | null {
  const idx = listaCapitulosDeOfficiis.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaCapitulosDeOfficiis[idx - 1];
}

export function getProximoCapituloDeOfficiis(
  id: string,
): CapituloAmbrosio | null {
  const idx = listaCapitulosDeOfficiis.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaCapitulosDeOfficiis.length - 1) return null;
  return listaCapitulosDeOfficiis[idx + 1];
}

export function estatisticasCapitulosDeOfficiis(): {
  total: number;
  autenticas: number;
  tradicionais: number;
  atribuidas: number;
} {
  return {
    total: listaCapitulosDeOfficiis.length,
    autenticas: listaCapitulosDeOfficiis.filter(
      (c) => c.autenticidade === "autêntica",
    ).length,
    tradicionais: listaCapitulosDeOfficiis.filter(
      (c) => c.autenticidade === "tradicional",
    ).length,
    atribuidas: listaCapitulosDeOfficiis.filter(
      (c) => c.autenticidade === "atribuída",
    ).length,
  };
}

// ─── De Fide ───────────────────────────────────────────────────────

const listaCapitulosDeFide: CapituloAmbrosio[] = deFideData;

export function getTodosCapitulosDeFide(): CapituloAmbrosio[] {
  return listaCapitulosDeFide;
}

export function getCapituloDeFideById(id: string): CapituloAmbrosio | null {
  return listaCapitulosDeFide.find((c) => c.id === id) ?? null;
}

export function getCapituloDeFideAnterior(id: string): CapituloAmbrosio | null {
  const idx = listaCapitulosDeFide.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaCapitulosDeFide[idx - 1];
}

export function getProximoCapituloDeFide(id: string): CapituloAmbrosio | null {
  const idx = listaCapitulosDeFide.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaCapitulosDeFide.length - 1) return null;
  return listaCapitulosDeFide[idx + 1];
}

export function estatisticasCapitulosDeFide(): {
  total: number;
  autenticas: number;
  tradicionais: number;
  atribuidas: number;
} {
  return {
    total: listaCapitulosDeFide.length,
    autenticas: listaCapitulosDeFide.filter(
      (c) => c.autenticidade === "autêntica",
    ).length,
    tradicionais: listaCapitulosDeFide.filter(
      (c) => c.autenticidade === "tradicional",
    ).length,
    atribuidas: listaCapitulosDeFide.filter(
      (c) => c.autenticidade === "atribuída",
    ).length,
  };
}

// ─── Hinos Ambrosianos ─────────────────────────────────────────────

const listaHinosAmbrosianos: CapituloAmbrosio[] = hinosAmbrosianosData;

export function getTodosHinosAmbrosianos(): CapituloAmbrosio[] {
  return listaHinosAmbrosianos;
}

export function getHinoAmbrosianoById(id: string): CapituloAmbrosio | null {
  return listaHinosAmbrosianos.find((c) => c.id === id) ?? null;
}

export function getHinoAmbrosianoAnterior(id: string): CapituloAmbrosio | null {
  const idx = listaHinosAmbrosianos.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaHinosAmbrosianos[idx - 1];
}

export function getProximoHinoAmbrosiano(id: string): CapituloAmbrosio | null {
  const idx = listaHinosAmbrosianos.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaHinosAmbrosianos.length - 1) return null;
  return listaHinosAmbrosianos[idx + 1];
}

export function estatisticasHinosAmbrosianos(): {
  total: number;
  autenticas: number;
  tradicionais: number;
  atribuidas: number;
} {
  return {
    total: listaHinosAmbrosianos.length,
    autenticas: listaHinosAmbrosianos.filter(
      (c) => c.autenticidade === "autêntica",
    ).length,
    tradicionais: listaHinosAmbrosianos.filter(
      (c) => c.autenticidade === "tradicional",
    ).length,
    atribuidas: listaHinosAmbrosianos.filter(
      (c) => c.autenticidade === "atribuída",
    ).length,
  };
}
