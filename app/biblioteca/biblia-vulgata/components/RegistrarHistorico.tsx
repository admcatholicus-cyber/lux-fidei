// app/biblioteca/biblia-vulgata/components/RegistrarHistorico.tsx
'use client';

import { useEffect } from 'react';
import { registrarHistorico } from '../../lib/historico';

interface Props {
  ultimoCapitulo?: string; // ex: "Gênesis 1" — opcional
}

export default function RegistrarHistorico({
  ultimoCapitulo = 'Índice dos livros',
}: Props) {
  useEffect(() => {
    registrarHistorico({
      id: 'biblia-vulgata',
      titulo: 'Bíblia Sagrada',
      autor: 'Tradução do Pe. António Pereira de Figueiredo',
      capa: '/biblioteca/cards/biblia-vulgata.png',
      url: '/biblioteca/biblia-vulgata',
      ultimoCapitulo,
      categoria: 'Sagrada Escritura',
      corTema: 'verde',
      progresso: 0,
      ocultarProgresso: true, // ← chave: oculta a barra de progresso na biblioteca
    });
  }, [ultimoCapitulo]);

  return null; // não renderiza nada visualmente
}