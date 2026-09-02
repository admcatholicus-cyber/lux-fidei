'use client';

import { useEffect } from 'react';
import {
  registrarHistorico,
  atualizarUltimaLeitura,
} from '../../lib/historico';

import {
  montarOpcoesContinuar,
  resumoUltimaLeitura,
  salvarProgressoSecao,
  type SecaoVianney,
} from '../lib/vianney-progresso';

type Props = {
  secao: Exclude<SecaoVianney, 'indice'>;
  tituloAtual: string; // ex: "Sermão sobre o Juízo Final" ou "Carta nº 1"
  urlAtual: string;
  labelSecao?: string; // ex: "Continuar sermões" ou "Continuar cartas"
};

const ROTULOS_PADRAO: Record<Exclude<SecaoVianney, 'indice'>, string> = {
  sermoes: 'Continuar sermões',
  cartas: 'Continuar cartas',
  oracoes: 'Continuar orações',
  catequeses: 'Continuar catequeses',
  maximas: 'Continuar máximas',
};

export default function RegistradorHistoricoVianney({
  secao,
  tituloAtual,
  urlAtual,
  labelSecao,
}: Props) {
  useEffect(() => {
    const labelFinal = labelSecao || ROTULOS_PADRAO[secao] || 'Continuar leitura';

    const progresso = salvarProgressoSecao(secao, {
      label: labelFinal,
      detalhe: tituloAtual,
      url: urlAtual,
    });

    const resumo = resumoUltimaLeitura(progresso);
    const opcoes = montarOpcoesContinuar(progresso);

    registrarHistorico({
      id: 'sao-joao-maria-vianney',
      titulo: "Escritos & Pregações do Cura d'Ars",
      autor: 'São João Maria Vianney',
      capa: '/biblioteca/sao-joao-maria-vianney/capa.png',
      url: resumo.url,
      ultimoCapitulo: resumo.texto,
      categoria: 'Sacerdócio & Pastoral',
      corTema: 'dourado',
      progresso: 0,
      ocultarProgresso: true,
      opcoesContinuar: opcoes,
    });

    atualizarUltimaLeitura('sao-joao-maria-vianney', resumo.texto);
  }, [secao, tituloAtual, urlAtual, labelSecao]);

  return null;
}