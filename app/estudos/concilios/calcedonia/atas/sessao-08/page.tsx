// estudos/concilios/calcedonia/atas/sessao-08/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 8)!

export const metadata: Metadata = {
  title: 'Sessão 8 — Tiro × Berito (26 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Sessão administrativa: disputa entre Fotio de Tiro e Eustáquio de Berito pela jurisdição da Fenícia, reabilitação de bispos, casos de simonia.',
}

export default function Sessao08Page() {
  return <SessaoTemplate sessao={sessao} />
}
