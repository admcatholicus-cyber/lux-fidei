// estudos/concilios/calcedonia/atas/sessao-10/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 10)!

export const metadata: Metadata = {
  title: 'Sessão 10 — Ibas e Maris (28 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Sessão administrativa: caso Ibas de Edessa, carta ao bispo Maris, debate sobre autenticidade, dimensão geopolítica com igrejas persas.',
}

export default function Sessao10Page() {
  return <SessaoTemplate sessao={sessao} />
}
