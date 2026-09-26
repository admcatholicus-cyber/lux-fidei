// estudos/concilios/calcedonia/atas/sessao-01/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 1)!

export const metadata: Metadata = {
  title: 'Sessão 1 — Abertura e Latrocínio (8 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Primeira sessão solene do Concílio de Calcedônia: leitura das atas do Latrocínio de 449, protestos contra Dioscoro de Alexandria, testemunho de Eusébio de Dorileu, e adiamento do veredito.',
}

export default function Sessao01Page() {
  return <SessaoTemplate sessao={sessao} />
}
