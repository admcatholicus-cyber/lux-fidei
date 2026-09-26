// estudos/concilios/calcedonia/atas/sessao-02/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 2)!

export const metadata: Metadata = {
  title: 'Sessão 2 — Documentos de fé (10 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Segunda sessão solene: leitura dos Credos de Niceia e Constantinopla, cartas de Cirilo, e Tomo de Leão. Aclamação "Pedro falou por Leão!" e cinco dias de estudo para bispos hesitantes.',
}

export default function Sessao02Page() {
  return <SessaoTemplate sessao={sessao} />
}
