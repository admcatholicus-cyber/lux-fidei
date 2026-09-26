'use client'

import { ConcilioTabBar } from '../../_shared/ConcilioTabBar'
import { AbaConcilio } from './AbaConcilio'
import { AbaSobre } from './AbaSobre'

const ABAS_SOBRE = [
  'cronologia', 'antecedentes', 'contexto', 'evidencias', 'crise',
  'recepcao', 'liturgia', 'mitos', 'lendas', 'jubileu',
  'historiografia', 'fontes',
]

interface NiceiaShellProps {
  abaInicial: 'concilio' | 'sobre'
}

export function NiceiaShell({ abaInicial }: NiceiaShellProps) {
  return (
    <ConcilioTabBar
      abaInicial={abaInicial}
      concilio={<AbaConcilio />}
      sobre={<AbaSobre />}
      abasSobre={ABAS_SOBRE}
    />
  )
}
