import { Suspense } from 'react'
import { ConcilioLayout } from '../_shared/ConcilioLayout'
import { NiceiaShell } from './_components/NiceiaShell'

interface PageProps {
  searchParams: Promise<{ aba?: string }>
}

export default async function NiceiaI({ searchParams }: PageProps) {
  const params = await searchParams
  const abaInicial = params?.aba === 'sobre' ? 'sobre' : 'concilio'

  return (
    <ConcilioLayout
      numeroEcum="I Concílio Ecumênico"
      titulo="Concílio de Niceia I"
      subtitulo="&ldquo;O Concílio dos Concílios&rdquo; — a fundação da cristologia ortodoxa"
      data="325 d.C."
      local="Niceia, Bitínia (atual İznik, Turquia)"
      proxLink="/estudos/concilios/constantinopla-1"
      proxTexto="Constantinopla I (381)"
    >
      <Suspense>
        <NiceiaShell abaInicial={abaInicial} />
      </Suspense>
    </ConcilioLayout>
  )
}
