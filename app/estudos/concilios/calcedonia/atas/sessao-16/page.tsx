// estudos/concilios/calcedonia/atas/sessao-16/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 16)!

export const metadata: Metadata = {
  title: 'Sessão 16 — Cânon 28 e encerramento (1 de novembro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Sessão administrativa: aprovação do Cânon 28 (Constantinopla = Nova Roma), protesto dos legados papais, abandono da sessão, anulação por Leão I, encerramento do concílio.',
}

export default function Sessao16Page() {
  return <SessaoTemplate sessao={sessao} />
}
