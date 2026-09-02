'use client';

import { useCallback, useEffect, useState } from 'react';
import type { HistoricoItem, SantoRegistry, Pasta } from '../_types/santo';
import { STORAGE_KEYS, storageGet, storageSet, storageRemove } from '../_lib/storage';

const MAX_ITENS = 20;

export function useHistorico() {
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);
  const [carregado, setCarregado] = useState(false);

  // Carrega do localStorage no mount
  useEffect(() => {
    const dados = storageGet<HistoricoItem[]>(STORAGE_KEYS.HISTORICO, []);
    setHistorico(dados);
    setCarregado(true);
  }, []);

  // Salva sempre que mudar (após carregar)
  useEffect(() => {
    if (!carregado) return;
    storageSet(STORAGE_KEYS.HISTORICO, historico);
  }, [historico, carregado]);

  /** Adiciona ou atualiza um santo no histórico */
  const registrarLeitura = useCallback(
    (santo: SantoRegistry, aba?: string) => {
      if (!santo.pasta) return;

      setHistorico((prev) => {
        const existente = prev.find((h) => h.slug === santo.slug);
        const novo: HistoricoItem = {
          slug: santo.slug,
          nome: santo.nome,
          imagemCard: `/santos/cards/${santo.pasta}/${santo.slug}.png`,
          pasta: santo.pasta as Pasta,
          progresso: existente?.progresso ?? 0,
          lido: existente?.lido ?? false,
          timestamp: Date.now(),
          ultimaAba: aba ?? existente?.ultimaAba,
        };
        const filtrado = prev.filter((h) => h.slug !== santo.slug);
        return [novo, ...filtrado].slice(0, MAX_ITENS);
      });
    },
    []
  );

  /** Atualiza o progresso de um santo já no histórico */
  const atualizarProgresso = useCallback((slug: string, progresso: number) => {
    setHistorico((prev) =>
      prev.map((h) =>
        h.slug === slug ? { ...h, progresso: Math.min(100, Math.max(0, progresso)) } : h
      )
    );
  }, []);

  /** Marca como lido/não lido */
  const marcarComoLido = useCallback((slug: string, lido: boolean) => {
    setHistorico((prev) =>
      prev.map((h) =>
        h.slug === slug ? { ...h, lido, progresso: lido ? 100 : h.progresso } : h
      )
    );
  }, []);

  /** Remove um item do histórico */
  const removerDoHistorico = useCallback((slug: string) => {
    setHistorico((prev) => prev.filter((h) => h.slug !== slug));
  }, []);

  /** Limpa tudo */
  const limparHistorico = useCallback(() => {
    setHistorico([]);
    storageRemove(STORAGE_KEYS.HISTORICO);
  }, []);

  return {
    historico,
    carregado,
    registrarLeitura,
    atualizarProgresso,
    marcarComoLido,
    removerDoHistorico,
    limparHistorico,
  };
}