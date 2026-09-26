// estudos/concilios/calcedonia/atas/sessao-09/page.tsx
import type { Metadata } from 'next'
import { sessoes } from '../_sessoes'
import { SessaoTemplate } from '../_SessaoTemplate'

const sessao = sessoes.find((s) => s.numero === 9)!

export const metadata: Metadata = {
  title: 'Sessão 9 — Teodoreto de Ciro, I (27 de outubro) | Atas | Calcedônia | Lux Fidei',
  description:
    'Sessão administrativa: início do caso Teodoreto de Ciro, leitura dos documentos acusatórios do Latrocínio, posicionamento dos legados papais.',
}

export default function Sessao09Page() {
  return <SessaoTemplate sessao={sessao} />
}
