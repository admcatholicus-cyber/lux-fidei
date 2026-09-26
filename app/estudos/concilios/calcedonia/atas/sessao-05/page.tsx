// estudos/concilios/calcedonia/atas/sessao-05/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 5)!

export const metadata: Metadata = {
  title: 'Sessão 5 — Definição de Calcedônia (22 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Quinta sessão solene: rejeição do 1º rascunho (ek dyo), aprovação do 2º rascunho (en dyo physesin) com os quatro advérbios. Aprovação da Definição de Calcedônia.',
}

export default function Sessao05Page() {
  return <SessaoTemplate sessao={sessao} />
}
