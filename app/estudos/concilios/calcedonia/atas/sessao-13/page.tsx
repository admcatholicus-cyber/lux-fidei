// estudos/concilios/calcedonia/atas/sessao-13/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 13)!

export const metadata: Metadata = {
  title: 'Sessão 13 — Casos egípcios e sírios (30 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Sessão administrativa: julgamento de bispos egípcios e sírios, distinção entre vítimas de coação e colaboradores voluntários.',
}

export default function Sessao13Page() {
  return <SessaoTemplate sessao={sessao} />
}
