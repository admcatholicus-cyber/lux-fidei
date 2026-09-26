"use client";

import { useEffect } from "react";
import {
  registrarHistorico,
  atualizarUltimaLeitura,
} from "../../lib/historico";
import {
  salvarProgressoSecao,
  montarOpcoesContinuar,
  resumoUltimaLeitura,
  type SecaoAmbrosio,
} from "../lib/ambrosio-progresso";

type Props = {
  secao: Exclude<SecaoAmbrosio, "indice">;
  tituloAtual: string;
  urlAtual: string;
  labelSecao: string;
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
      id: "santo-ambrosio",
      titulo: "De Spiritu Sancto e Outros Tratados",
      autor: "Santo Ambrósio de Milão",
      capa: "/biblioteca/santo-ambrosio/capa.png",
      url: resumo.url,
      ultimoCapitulo: resumo.texto,
      categoria: "Teologia Patrística",
      corTema: "dourado",
      progresso: 0,
      ocultarProgresso: true,
      opcoesContinuar: opcoes,
    });

    atualizarUltimaLeitura("santo-ambrosio", resumo.texto);
  }, [secao, tituloAtual, urlAtual, labelSecao]);

  return null;
}
