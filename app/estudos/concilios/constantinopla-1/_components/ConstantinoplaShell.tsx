'use client'

import { ConcilioTabBar } from '../../_shared/ConcilioTabBar'
import { AbaConcilio } from './AbaConcilio'
import { AbaSobre } from './AbaSobre'

const ABAS_SOBRE = [
  'canone3', 'mitos', 'legado', 'recepcao', 'fontes',
]

interface ConstantinoplaShellProps {
  abaInicial: 'concilio' | 'sobre'
}

export function ConstantinoplaShell({ abaInicial }: ConstantinoplaShellProps) {
  return (
    <ConcilioTabBar
      abaInicial={abaInicial}
      concilio={<AbaConcilio />}
      sobre={<AbaSobre />}
      abasSobre={ABAS_SOBRE}
    />
  )
}
