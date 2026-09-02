'use client';

import { useEffect } from 'react';
import {
  registrarHistorico,
  atualizarUltimaLeitura,
} from '../../lib/historico';
// se o historico estiver em app/biblioteca/lib/historico.ts, use:
// from '../../lib/historico'

import {
  montarOpcoesContinuar,
  resumoUltimaLeitura,
  salvarProgressoSecao,
  type SecaoFilipe,
} from '../lib/filipe-progresso';

type Props = {
  secao: Exclude<SecaoFilipe, 'indice'>;
  tituloAtual: string; // ex: "Carta I — Francesco Vai"
  urlAtual: string;
  labelSecao: string;  // ex: "Continuar cartas"
};

export default function RegistradorHistorico({
  secao,
  tituloAtual,
  urlAtual,
  labelSecao,
}: Props) {
  useEffect(() => {
    const progresso = salvarProgressoSecao(secao, {
      label: labelSecao,
      detalhe: tituloAtual,
      url: urlAtual,
    });

    const resumo = resumoUltimaLeitura(progresso);
    const opcoes = montarOpcoesContinuar(progresso);

    registrarHistorico({
      id: 'sao-filipe-neri',
      titulo: 'Escritos e Máximas Espirituais',
      autor: 'São Filipe Néri',
      capa: '/biblioteca/sao-filipe-neri/capa.png',
      url: resumo.url,
      ultimoCapitulo: resumo.texto,
      categoria: 'Espiritualidade Oratoriana',
      corTema: 'dourado',
      progresso: 0,
      ocultarProgresso: true,
      opcoesContinuar: opcoes,
    });

    atualizarUltimaLeitura('sao-filipe-neri', resumo.texto);
  }, [secao, tituloAtual, urlAtual, labelSecao]);

  return null;
}