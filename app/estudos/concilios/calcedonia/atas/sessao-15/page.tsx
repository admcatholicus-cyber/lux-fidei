// estudos/concilios/calcedonia/atas/sessao-15/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 15)!

export const metadata: Metadata = {
  title: 'Sessão 15 — Promulgação dos 27 cânones (31 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Sessão administrativa: leitura e aprovação dos 27 cânones disciplinares — Credos, simonia, ordenações, monges, disciplina clerical.',
}

export default function Sessao15Page() {
  return <SessaoTemplate sessao={sessao} />
}
