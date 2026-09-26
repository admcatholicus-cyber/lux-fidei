/**
 * Utilidades para navegação dos tratados de São Basílio de Cesareia.
 */

import { liturgiaSaoBasilioData } from "../data/liturgia-sao-basilio";
import { hexaemeronData } from "../data/hexaemeron";
import { regrasMonasticasData } from "../data/regras-monasticas";
import { deSpirituSanctoBasilioData } from "../data/de-spiritu-sancto-basilio";
import type { CapituloBasilio } from "../data/types";

const listaLiturgiaSaoBasilio: CapituloBasilio[] = liturgiaSaoBasilioData;
const listaHexaemeron: CapituloBasilio[] = hexaemeronData;
const listaRegrasMonasticas: CapituloBasilio[] = regrasMonasticasData;
const listaDeSpirituSanctoBasilio: CapituloBasilio[] =
  deSpirituSanctoBasilioData;

export function getTodosCapitulosLiturgiaSaoBasilio(): CapituloBasilio[] {
  return listaLiturgiaSaoBasilio;
}

export function getCapituloLiturgiaSaoBasilioById(
  id: string,
): CapituloBasilio | null {
  return listaLiturgiaSaoBasilio.find((c) => c.id === id) ?? null;
}

export function getCapituloLiturgiaSaoBasilioAnterior(
  id: string,
): CapituloBasilio | null {
  const idx = listaLiturgiaSaoBasilio.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaLiturgiaSaoBasilio[idx - 1];
}

export function getProximoCapituloLiturgiaSaoBasilio(
  id: string,
): CapituloBasilio | null {
  const idx = listaLiturgiaSaoBasilio.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaLiturgiaSaoBasilio.length - 1) return null;
  return listaLiturgiaSaoBasilio[idx + 1];
}

export function estatisticasCapitulosLiturgiaSaoBasilio() {
  const total = listaLiturgiaSaoBasilio.length;
  const autenticas = listaLiturgiaSaoBasilio.filter(
    (c) => c.autenticidade === "autêntica",
  ).length;
  const tradicionais = listaLiturgiaSaoBasilio.filter(
    (c) => c.autenticidade === "tradicional",
  ).length;
  const atribuidas = listaLiturgiaSaoBasilio.filter(
    (c) => c.autenticidade === "atribuída",
  ).length;
  return { total, autenticas, tradicionais, atribuidas };
}

export function getTodosCapitulosHexaemeron(): CapituloBasilio[] {
  return listaHexaemeron;
}

export function getCapituloHexaemeronById(id: string): CapituloBasilio | null {
  return listaHexaemeron.find((c) => c.id === id) ?? null;
}

export function getCapituloHexaemeronAnterior(
  id: string,
): CapituloBasilio | null {
  const idx = listaHexaemeron.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaHexaemeron[idx - 1];
}

export function getProximoCapituloHexaemeron(
  id: string,
): CapituloBasilio | null {
  const idx = listaHexaemeron.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaHexaemeron.length - 1) return null;
  return listaHexaemeron[idx + 1];
}

export function estatisticasCapitulosHexaemeron() {
  const total = listaHexaemeron.length;
  const autenticas = listaHexaemeron.filter(
    (c) => c.autenticidade === "autêntica",
  ).length;
  const tradicionais = listaHexaemeron.filter(
    (c) => c.autenticidade === "tradicional",
  ).length;
  const atribuidas = listaHexaemeron.filter(
    (c) => c.autenticidade === "atribuída",
  ).length;
  return { total, autenticas, tradicionais, atribuidas };
}

export function getTodosCapitulosRegrasMonasticas(): CapituloBasilio[] {
  return listaRegrasMonasticas;
}

export function getCapituloRegrasMonasticasById(
  id: string,
): CapituloBasilio | null {
  return listaRegrasMonasticas.find((c) => c.id === id) ?? null;
}

export function getCapituloRegrasMonasticasAnterior(
  id: string,
): CapituloBasilio | null {
  const idx = listaRegrasMonasticas.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaRegrasMonasticas[idx - 1];
}

export function getProximoCapituloRegrasMonasticas(
  id: string,
): CapituloBasilio | null {
  const idx = listaRegrasMonasticas.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaRegrasMonasticas.length - 1) return null;
  return listaRegrasMonasticas[idx + 1];
}

export function estatisticasCapitulosRegrasMonasticas() {
  const total = listaRegrasMonasticas.length;
  const autenticas = listaRegrasMonasticas.filter(
    (c) => c.autenticidade === "autêntica",
  ).length;
  const tradicionais = listaRegrasMonasticas.filter(
    (c) => c.autenticidade === "tradicional",
  ).length;
  const atribuidas = listaRegrasMonasticas.filter(
    (c) => c.autenticidade === "atribuída",
  ).length;
  return { total, autenticas, tradicionais, atribuidas };
}

export function getTodosCapitulosDeSpirituSanctoBasilio(): CapituloBasilio[] {
  return listaDeSpirituSanctoBasilio;
}

export function getCapituloDeSpirituSanctoBasilioById(
  id: string,
): CapituloBasilio | null {
  return listaDeSpirituSanctoBasilio.find((c) => c.id === id) ?? null;
}

export function getCapituloDeSpirituSanctoBasilioAnterior(
  id: string,
): CapituloBasilio | null {
  const idx = listaDeSpirituSanctoBasilio.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return listaDeSpirituSanctoBasilio[idx - 1];
}

export function getProximoCapituloDeSpirituSanctoBasilio(
  id: string,
): CapituloBasilio | null {
  const idx = listaDeSpirituSanctoBasilio.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= listaDeSpirituSanctoBasilio.length - 1) return null;
  return listaDeSpirituSanctoBasilio[idx + 1];
}

export function estatisticasCapitulosDeSpirituSanctoBasilio() {
  const total = listaDeSpirituSanctoBasilio.length;
  const autenticas = listaDeSpirituSanctoBasilio.filter(
    (c) => c.autenticidade === "autêntica",
  ).length;
  const tradicionais = listaDeSpirituSanctoBasilio.filter(
    (c) => c.autenticidade === "tradicional",
  ).length;
  const atribuidas = listaDeSpirituSanctoBasilio.filter(
    (c) => c.autenticidade === "atribuída",
  ).length;
  return { total, autenticas, tradicionais, atribuidas };
}
