/* ============================================================
   STORAGE — Wrapper tipado do localStorage (SSR-safe)
   ============================================================ */

const isBrowser = typeof window !== 'undefined';

export const STORAGE_KEYS = {
  HISTORICO: 'lux-santos-historico',
  FINALIZADOS: 'lux-santos-finalizados',
  MARCACOES: 'lux-santos-marcacoes',
  PROGRESSO: 'lux-santos-progresso',
} as const;

export function storageGet<T>(key: string, fallback: T): T {
  if (!isBrowser) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function storageSet<T>(key: string, value: T): void {
  if (!isBrowser) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn(`[storage] Falha ao salvar ${key}`, e);
  }
}

export function storageRemove(key: string): void {
  if (!isBrowser) return;
  window.localStorage.removeItem(key);
}