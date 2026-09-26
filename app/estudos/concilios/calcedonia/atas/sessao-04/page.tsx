// estudos/concilios/calcedonia/atas/sessao-04/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 4)!

export const metadata: Metadata = {
  title: 'Sessão 4 — "Basta Niceia!" (17 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Quarta sessão solene: debate sobre nova definição de fé, grito "Basta Niceia!", resistência dos 13 bispos egípcios, criação da comissão de 22 bispos.',
}

export default function Sessao04Page() {
  return <SessaoTemplate sessao={sessao} />
}
