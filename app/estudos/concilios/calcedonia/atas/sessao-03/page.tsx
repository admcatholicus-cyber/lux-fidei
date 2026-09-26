// estudos/concilios/calcedonia/atas/sessao-03/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 3)!

export const metadata: Metadata = {
  title: 'Sessão 3 — Deposição de Dioscoro (13 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Terceira sessão solene: julgamento in absentia de Dioscoro de Alexandria, sentença de Paschasinus, deposição e exílio para Gangra, proclamação de Flavian como mártir.',
}

export default function Sessao03Page() {
  return <SessaoTemplate sessao={sessao} />
}
