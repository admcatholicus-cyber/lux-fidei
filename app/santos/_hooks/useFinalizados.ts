'use client';

import { useCallback, useEffect, useState } from 'react';
import { STORAGE_KEYS, storageGet, storageSet } from '../_lib/storage';

export function useFinalizados() {
  const [finalizados, setFinalizados] = useState<Set<string>>(new Set());
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const arr = storageGet<string[]>(STORAGE_KEYS.FINALIZADOS, []);
    setFinalizados(new Set(arr));
    setCarregado(true);
  }, []);

  useEffect(() => {
    if (!carregado) return;
    storageSet(STORAGE_KEYS.FINALIZADOS, Array.from(finalizados));
  }, [finalizados, carregado]);

  const isFinalizado = useCallback(
    (slug: string) => finalizados.has(slug),
    [finalizados]
  );

  const toggleFinalizado = useCallback((slug: string) => {
    setFinalizados((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }, []);

  const marcarFinalizado = useCallback((slug: string, valor: boolean) => {
    setFinalizados((prev) => {
      const next = new Set(prev);
      if (valor) next.add(slug);
      else next.delete(slug);
      return next;
    });
  }, []);

  return { finalizados, isFinalizado, toggleFinalizado, marcarFinalizado, carregado };
}