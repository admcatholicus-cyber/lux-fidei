import { sermoesCelebres as lote1 } from "../data/sermoes-celebres";
import { sermoesLote2 as lote2 } from "../data/sermoes-lote2";
import { sermoesLote3 as lote3 } from "../data/sermoes-lote3";
import { sermoesLote4 as lote4 } from "../data/sermoes-lote4";
import { sermoesLote5 as lote5 } from "../data/sermoes-lote5";
import { sermoesLote6 as lote6 } from "../data/sermoes-lote6";
import { sermoesLote7 as lote7 } from "../data/sermoes-lote7";
import { sermoesLote8 as lote8 } from "../data/sermoes-lote8";
import { sermoesLote9 as lote9 } from "../data/sermoes-lote9";
import { sermoesLote10 as lote10 } from "../data/sermoes-lote10";
import { sermoesLote11 as lote11 } from "../data/sermoes-lote11";
import { sermoesLote12 as lote12 } from "../data/sermoes-lote12";
import { sermoesLote13 as lote13 } from "../data/sermoes-lote13";
import { sermoesLote14 as lote14 } from "../data/sermoes-lote14";
import { sermoesLote15 as lote15 } from "../data/sermoes-lote15";
import { sermoesLote16 as lote16 } from "../data/sermoes-lote16";
import { sermoesLote17 as lote17 } from "../data/sermoes-lote17";
import { sermoesLote18 as lote18 } from "../data/sermoes-lote18";
import { oracoes } from "../data/oracoes";
import { cartas } from "../data/cartas";

// --- SERMÕES ---
const todosSermoesLista = [
  ...lote1,
  ...lote2,
  ...lote3,
  ...lote4,
  ...lote5,
  ...lote6,
  ...lote7,
  ...lote8,
  ...lote9,
  ...lote10,
  ...lote11,
  ...lote12,
  ...lote13,
  ...lote14,
  ...lote15,
  ...lote16,
  ...lote17,
  ...lote18,
];

export function todosSermoes() {
  return todosSermoesLista;
}

export function buscarSermaoPorId(id: string) {
  return todosSermoesLista.find((s) => s.id === id) ?? null;
}

export function sermaoAnterior(id: string) {
  const idx = todosSermoesLista.findIndex((s) => s.id === id);
  if (idx <= 0) return null;
  return todosSermoesLista[idx - 1];
}

export function sermaoProximo(id: string) {
  const idx = todosSermoesLista.findIndex((s) => s.id === id);
  if (idx < 0 || idx >= todosSermoesLista.length - 1) return null;
  return todosSermoesLista[idx + 1];
}

// --- ORAÇÕES ---
export function todasOracoes() {
  return oracoes || [];
}

export function buscarOracaoPorId(id: string) {
  return (oracoes || []).find((o) => o.id === id) ?? null;
}

export function oracaoAnterior(id: string) {
  const lista = todasOracoes();
  const idx = lista.findIndex((o) => o.id === id);
  if (idx <= 0) return null;
  return lista[idx - 1];
}

export function oracaoProxima(id: string) {
  const lista = todasOracoes();
  const idx = lista.findIndex((o) => o.id === id);
  if (idx < 0 || idx >= lista.length - 1) return null;
  return lista[idx + 1];
}

// --- CARTAS ---
export function todasCartas() {
  return cartas || [];
}

export function buscarCartaPorId(id: string) {
  return (cartas || []).find((c) => c.id === id) ?? null;
}

export function cartaAnterior(id: string) {
  const lista = todasCartas();
  const idx = lista.findIndex((c) => c.id === id);
  if (idx <= 0) return null;
  return lista[idx - 1];
}

export function cartaProxima(id: string) {
  const lista = todasCartas();
  const idx = lista.findIndex((c) => c.id === id);
  if (idx < 0 || idx >= lista.length - 1) return null;
  return lista[idx + 1];
}