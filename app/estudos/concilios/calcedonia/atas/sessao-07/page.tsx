// estudos/concilios/calcedonia/atas/sessao-07/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 7)!

export const metadata: Metadata = {
  title: 'Sessão 7 — Juvenal × Máximo / Pentarquia (26 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Primeira sessão administrativa: elevação de Jerusalém a patriarcado, disputa entre Juvenal e Máximo, formalização da Pentarquia.',
}

export default function Sessao07Page() {
  return <SessaoTemplate sessao={sessao} />
}
