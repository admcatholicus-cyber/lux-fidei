// estudos/concilios/calcedonia/atas/sessao-14/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 14)!

export const metadata: Metadata = {
  title: 'Sessão 14 — Encerramento fase nominal (30 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Sessão administrativa: últimos casos nominais, encerramento dos julgamentos individuais, preparação para os cânones disciplinares.',
}

export default function Sessao14Page() {
  return <SessaoTemplate sessao={sessao} />
}
