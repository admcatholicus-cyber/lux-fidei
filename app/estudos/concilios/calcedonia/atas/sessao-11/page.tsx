// estudos/concilios/calcedonia/atas/sessao-11/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 11)!

export const metadata: Metadata = {
  title: 'Sessão 11 — Caso de Ibas, continuação (29 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Sessão administrativa: testemunhos adicionais sobre Ibas de Edessa, depoimentos de clérigos edessenos, casos nominais.',
}

export default function Sessao11Page() {
  return <SessaoTemplate sessao={sessao} />
}
