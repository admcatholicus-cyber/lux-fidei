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
      id: 'cirilo-jerusalem',
      titulo: 'Catequeses Batismais e Mistagógicas',
      autor: 'São Cirilo de Jerusalém',
      capa: '/biblioteca/cirilo-jerusalem/capa.webp',
      url: '/biblioteca/cirilo-jerusalem',
      ultimoCapitulo,
      categoria: 'Patrística Grega',
      corTema: '#5b2c83',
      progresso,
    });
  }, [ultimoCapitulo, progresso]);

  return null;
}
