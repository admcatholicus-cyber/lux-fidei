// app/biblioteca/historia-de-uma-alma/components/RegistrarHistorico.tsx
'use client';

import { useEffect } from 'react';
import { registrarHistorico } from '../../lib/historico';

interface Props {
  ultimoCapitulo?: string;
  progresso?: number;
}

export default function RegistrarHistorico({
  ultimoCapitulo = 'Início da leitura',
  progresso = 0,
}: Props) {
  useEffect(() => {
    registrarHistorico({
      id: 'historia-de-uma-alma',
      titulo: 'História de uma Alma',
      autor: 'Santa Teresa do Menino Jesus',
      capa: '/biblioteca/santa-terezinha/historia-de-uma-alma.png',
      url: '/biblioteca/historia-de-uma-alma',
      ultimoCapitulo,
      categoria: 'Mística Carmelita',
      corTema: 'rosa',
      progresso,
    });
  }, [ultimoCapitulo, progresso]);

  return null;
}