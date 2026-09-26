// estudos/concilios/calcedonia/atas/sessao-06/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 6)!

export const metadata: Metadata = {
  title: 'Sessão 6 — Confirmação imperial (25 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Sexta sessão solene: presença de Marciano e Pulquéria, discurso imperial, proclamação solene da Definição, assinatura com tinta púrpura, aclamação "Marciano é o novo Constantino!".',
}

export default function Sessao06Page() {
  return <SessaoTemplate sessao={sessao} />
}
