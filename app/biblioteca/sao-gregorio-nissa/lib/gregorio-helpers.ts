/**
 * Utilidades para navegação dos tratados de São Gregório de Nissa.
 */

import { adAblabiumData } from "../data/ad-ablabium";
import { aVidaDeMoisesData } from "../data/a-vida-de-moises";
import { contraEunomioData } from "../data/contra-eunomio";
import { deAnimaEtResurrectioneData } from "../data/de-anima-et-resurrectione";
import { grandeCatequeseData } from "../data/grande-catequese";
import type { CapituloGregorio } from "../data/types";

const listaAdAblabium: CapituloGregorio[] = adAblabiumData;
const listaAVidaDeMoises: CapituloGregorio[] = aVidaDeMoisesData;
const listaContraEunomio: CapituloGregorio[] = contraEunomioData;
const listaDeAnimaEtResurrectione: CapituloGregorio[] =
  deAnimaEtResurrectioneData;
const listaGrandeCatequese: CapituloGregorio[] = grandeCatequeseData;

export function getTodosCapitulosAdAblabium(): CapituloGregorio[] {
  return listaAdAblabium;
}

export function getCapituloAdAblabiumById(id: string): CapituloGregorio | null {
  return listaAdAblabium.find((c) => c.id === id) ?? null;
}

export function getCapituloAdAblabiumAnterior(
  id: string,
): CapituloGregorio | null {
  const idx = listaAdAblabium.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaAdAblabium[idx - 1];
}

export function getProximoCapituloAdAblabium(
  id: string,
): CapituloGregorio | null {
  const idx = listaAdAblabium.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaAdAblabium.length - 1) return null;
  return listaAdAblabium[idx + 1];
}

export function estatisticasCapitulosAdAblabium() {
  const total = listaAdAblabium.length;
  const autenticas = listaAdAblabium.filter(
    (c) => c.autenticidade === "autêntica",
  ).length;
  const tradicionais = listaAdAblabium.filter(
    (c) => c.autenticidade === "tradicional",
  ).length;
  const atribuidas = listaAdAblabium.filter(
    (c) => c.autenticidade === "atribuída",
  ).length;
  return { total, autenticas, tradicionais, atribuidas };
}

export function getTodosCapitulosAVidaDeMoises(): CapituloGregorio[] {
  return listaAVidaDeMoises;
}

export function getCapituloAVidaDeMoisesById(
  id: string,
): CapituloGregorio | null {
  return listaAVidaDeMoises.find((c) => c.id === id) ?? null;
}

export function getCapituloAVidaDeMoisesAnterior(
  id: string,
): CapituloGregorio | null {
  const idx = listaAVidaDeMoises.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaAVidaDeMoises[idx - 1];
}

export function getProximoCapituloAVidaDeMoises(
  id: string,
): CapituloGregorio | null {
  const idx = listaAVidaDeMoises.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaAVidaDeMoises.length - 1) return null;
  return listaAVidaDeMoises[idx + 1];
}

export function estatisticasCapitulosAVidaDeMoises() {
  const total = listaAVidaDeMoises.length;
  const autenticas = listaAVidaDeMoises.filter(
    (c) => c.autenticidade === "autêntica",
  ).length;
  const tradicionais = listaAVidaDeMoises.filter(
    (c) => c.autenticidade === "tradicional",
  ).length;
  const atribuidas = listaAVidaDeMoises.filter(
    (c) => c.autenticidade === "atribuída",
  ).length;
  return { total, autenticas, tradicionais, atribuidas };
}

export function getTodosCapitulosDeAnimaEtResurrectione(): CapituloGregorio[] {
  return listaDeAnimaEtResurrectione;
}

export function getCapituloDeAnimaEtResurrectioneById(
  id: string,
): CapituloGregorio | null {
  return listaDeAnimaEtResurrectione.find((c) => c.id === id) ?? null;
}

export function getCapituloDeAnimaEtResurrectioneAnterior(
  id: string,
): CapituloGregorio | null {
  const idx = listaDeAnimaEtResurrectione.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaDeAnimaEtResurrectione[idx - 1];
}

export function getProximoCapituloDeAnimaEtResurrectione(
  id: string,
): CapituloGregorio | null {
  const idx = listaDeAnimaEtResurrectione.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaDeAnimaEtResurrectione.length - 1) return null;
  return listaDeAnimaEtResurrectione[idx + 1];
}

export function estatisticasCapitulosDeAnimaEtResurrectione() {
  const total = listaDeAnimaEtResurrectione.length;
  const autenticas = listaDeAnimaEtResurrectione.filter(
    (c) => c.autenticidade === "autêntica",
  ).length;
  const tradicionais = listaDeAnimaEtResurrectione.filter(
    (c) => c.autenticidade === "tradicional",
  ).length;
  const atribuidas = listaDeAnimaEtResurrectione.filter(
    (c) => c.autenticidade === "atribuída",
  ).length;
  return { total, autenticas, tradicionais, atribuidas };
}

export function getTodosCapitulosGrandeCatequese(): CapituloGregorio[] {
  return listaGrandeCatequese;
}

export function getCapituloGrandeCatequeseById(
  id: string,
): CapituloGregorio | null {
  return listaGrandeCatequese.find((c) => c.id === id) ?? null;
}

export function getCapituloGrandeCatequeseAnterior(
  id: string,
): CapituloGregorio | null {
  const idx = listaGrandeCatequese.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaGrandeCatequese[idx - 1];
}

export function getProximoCapituloGrandeCatequese(
  id: string,
): CapituloGregorio | null {
  const idx = listaGrandeCatequese.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaGrandeCatequese.length - 1) return null;
  return listaGrandeCatequese[idx + 1];
}

export function estatisticasCapitulosGrandeCatequese() {
  const total = listaGrandeCatequese.length;
  const autenticas = listaGrandeCatequese.filter(
    (c) => c.autenticidade === "autêntica",
  ).length;
  const tradicionais = listaGrandeCatequese.filter(
    (c) => c.autenticidade === "tradicional",
  ).length;
  const atribuidas = listaGrandeCatequese.filter(
    (c) => c.autenticidade === "atribuída",
  ).length;
  return { total, autenticas, tradicionais, atribuidas };
}

export function getTodosCapitulosContraEunomio(): CapituloGregorio[] {
  return listaContraEunomio;
}

export function getCapituloContraEunomioById(
  id: string,
): CapituloGregorio | null {
  return listaContraEunomio.find((c) => c.id === id) ?? null;
}

export function getCapituloContraEunomioAnterior(
  id: string,
): CapituloGregorio | null {
  const idx = listaContraEunomio.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaContraEunomio[idx - 1];
}

export function getProximoCapituloContraEunomio(
  id: string,
): CapituloGregorio | null {
  const idx = listaContraEunomio.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaContraEunomio.length - 1) return null;
  return listaContraEunomio[idx + 1];
}

export function estatisticasCapitulosContraEunomio() {
  const total = listaContraEunomio.length;
  const autenticas = listaContraEunomio.filter(
    (c) => c.autenticidade === "autêntica",
  ).length;
  const tradicionais = listaContraEunomio.filter(
    (c) => c.autenticidade === "tradicional",
  ).length;
  const atribuidas = listaContraEunomio.filter(
    (c) => c.autenticidade === "atribuída",
  ).length;
  return { total, autenticas, tradicionais, atribuidas };
}
