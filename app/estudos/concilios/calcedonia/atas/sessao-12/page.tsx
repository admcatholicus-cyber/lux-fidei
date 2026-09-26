// estudos/concilios/calcedonia/atas/sessao-12/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 12)!

export const metadata: Metadata = {
  title: 'Sessão 12 — Reabilitação de Teodoreto (29 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Sessão administrativa: Teodoreto anatematiza Nestório publicamente, reabilitação aprovada, gérmen do cisma dos Três Capítulos.',
}

export default function Sessao12Page() {
  return <SessaoTemplate sessao={sessao} />
}
