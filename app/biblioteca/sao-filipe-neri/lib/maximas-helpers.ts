/**
 * Utilidades para navegação das 366 máximas espirituais.
 */

import { maximas } from "../data/maximas";

const listaMaximas = maximas as any[];

const ORDEM_MESES = [
  "janeiro", "fevereiro", "março", "abril",
  "maio", "junho", "julho", "agosto",
  "setembro", "outubro", "novembro", "dezembro",
];

export function todasMaximas(): any[] {
  return listaMaximas;
}

export function maximaPorId(id: string): any | null {
  return listaMaximas.find((m) => m.id === id) ?? null;
}

export function maximasPorMes(mes: string): any[] {
  return listaMaximas.filter((m) => String(m.mes).toLowerCase() === mes.toLowerCase());
}

export function maximasPorTema(tema: string): any[] {
  const alvo = tema.toLowerCase();
  return listaMaximas.filter((m) => {
    const temaPrincipal = String(m.tema ?? "").toLowerCase();
    const secundarios = Array.isArray(m.temasSecundarios) ? m.temasSecundarios : [];
    return (
      temaPrincipal.includes(alvo) ||
      secundarios.some((t: string) => String(t).toLowerCase().includes(alvo))
    );
  });
}

export function maximaDoDia(): any | null {
  const hoje = new Date();
  const dia = hoje.getDate();
  const mes = ORDEM_MESES[hoje.getMonth()];
  return listaMaximas.find((m) => m.dia === dia && String(m.mes).toLowerCase() === mes) ?? null;
}

export function todosTemas(): string[] {
  const set = new Set<string>();
  for (const m of listaMaximas) {
    if (m.tema) set.add(m.tema);
    if (Array.isArray(m.temasSecundarios)) {
      for (const t of m.temasSecundarios) set.add(t);
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

export function contagemPorMes(): Array<{ mes: string; total: number }> {
  return ORDEM_MESES.map((mes) => ({
    mes,
    total: listaMaximas.filter((m) => String(m.mes).toLowerCase() === mes).length,
  }));
}

export function buscarMaximas(termo: string): any[] {
  if (!termo || termo.trim().length < 2) return [];
  const alvo = termo.toLowerCase().trim();
  return listaMaximas.filter((m) => {
    const pt = String(m.portugues?.texto ?? "").toLowerCase();
    const it = String(m.original?.texto ?? "").toLowerCase();
    const tema = String(m.tema ?? "").toLowerCase();
    return pt.includes(alvo) || it.includes(alvo) || tema.includes(alvo);
  });
}

export function maximaAnterior(id: string): any | null {
  const idx = listaMaximas.findIndex((m) => m.id === id);
  if (idx <= 0) return null;
  return listaMaximas[idx - 1];
}

export function maximaProxima(id: string): any | null {
  const idx = listaMaximas.findIndex((m) => m.id === id);
  if (idx < 0 || idx >= listaMaximas.length - 1) return null;
  return listaMaximas[idx + 1];
}