// app/estudos/mandamentos-igreja/page.tsx
import type { Metadata } from 'next'
import MandamentosClient from './MandamentosClient'

export const metadata: Metadata = {
  title: 'Os Mandamentos da Igreja – Lux Fidei',
  description:
    'Os 6 Preceitos que sustentam a vida cristã. Formação católica completa com quiz interativo.',
  openGraph: {
    title: 'Os Mandamentos da Igreja – Lux Fidei',
    description: 'Os 6 Preceitos que sustentam a vida cristã.',
    locale: 'pt_BR',
    type: 'article',
  },
}

export default function MandamentosPage() {
  return <MandamentosClient />
}
