import { Suspense } from 'react'
import { ConcilioLayout } from '../_shared/ConcilioLayout'
import { ConstantinoplaShell } from './_components/ConstantinoplaShell'

interface PageProps {
  searchParams: Promise<{ aba?: string }>
}

export default async function Constantinopla1Page({ searchParams }: PageProps) {
  const params = await searchParams
  const abaInicial = params?.aba === 'sobre' ? 'sobre' : 'concilio'

  return (
    <ConcilioLayout
      numeroEcum="II Concílio Ecumênico"
      titulo="Concílio de Constantinopla I"
      subtitulo="O Triunfo da Ortodoxia e a Divindade do Espírito Santo"
      data="381 d.C."
      local="Constantinopla (atual Istambul, Turquia)"
      proxLink="/estudos/concilios/efeso"
      proxTexto="Éfeso (431)"
    >
      <Suspense>
        <ConstantinoplaShell abaInicial={abaInicial} />
      </Suspense>
    </ConcilioLayout>
  )
}
