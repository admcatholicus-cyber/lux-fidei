// QuadroDogmaTradicao.tsx
// Exibe as cinco camadas de autoridade sobre Gabriel em colunas visuais distintas.
// Criado especificamente para a aba "Doutrina" de São Gabriel Arcanjo.

import React from 'react'

interface Afirmacao {
  camada: 'biblia' | 'liturgia' | 'doutrina' | 'tradicao' | 'devocao'
  texto: string
}

interface QuadroDogmaTradicaoProps {
  afirmacoes: Afirmacao[]
  titulo?: string
  nota?: string
}

const CAMADAS = {
  biblia: {
    label: 'Sagrada Escritura',
    cor: 'bg-amber-50 border-amber-400',
    corTitulo: 'text-amber-800',
    corBadge: 'bg-amber-100 text-amber-800 border border-amber-300',
    icone: '📖',
    peso: 'Autoridade máxima',
  },
  liturgia: {
    label: 'Liturgia oficial',
    cor: 'bg-violet-50 border-violet-400',
    corTitulo: 'text-violet-800',
    corBadge: 'bg-violet-100 text-violet-800 border border-violet-300',
    icone: '⛪',
    peso: 'Oração pública da Igreja',
  },
  doutrina: {
    label: 'Magistério / Catecismo',
    cor: 'bg-blue-50 border-blue-400',
    corTitulo: 'text-blue-800',
    corBadge: 'bg-blue-100 text-blue-800 border border-blue-300',
    icone: '📜',
    peso: 'Ensinamento oficial',
  },
  tradicao: {
    label: 'Tradição teológica',
    cor: 'bg-emerald-50 border-emerald-400',
    corTitulo: 'text-emerald-800',
    corBadge: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    icone: '🏛️',
    peso: 'Padres e teólogos',
  },
  devocao: {
    label: 'Devoção popular',
    cor: 'bg-rose-50 border-rose-400',
    corTitulo: 'text-rose-800',
    corBadge: 'bg-rose-100 text-rose-800 border border-rose-300',
    icone: '🕯️',
    peso: 'Piedade dos fiéis',
  },
} as const

export function QuadroDogmaTradicao({
  afirmacoes,
  titulo,
  nota,
}: QuadroDogmaTradicaoProps) {
  // Agrupa afirmações por camada
  const agrupadas = Object.keys(CAMADAS).reduce(
    (acc, key) => {
      const camada = key as Afirmacao['camada']
      acc[camada] = afirmacoes.filter((a) => a.camada === camada)
      return acc
    },
    {} as Record<Afirmacao['camada'], Afirmacao[]>
  )

  return (
    <div className="not-prose my-8 space-y-4">
      {titulo && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{titulo}</h3>
      )}

      {/* Legenda de pesos */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(CAMADAS).map(([key, config]) => (
          <span
            key={key}
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${config.corBadge}`}
          >
            <span>{config.icone}</span>
            <span>{config.label}</span>
          </span>
        ))}
      </div>

      {/* Colunas por camada */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {(Object.keys(CAMADAS) as Afirmacao['camada'][]).map((camada) => {
          const config = CAMADAS[camada]
          const itens = agrupadas[camada]
          if (!itens || itens.length === 0) return null

          return (
            <div
              key={camada}
              className={`rounded-xl border-l-4 p-5 ${config.cor}`}
            >
              {/* Cabeçalho da coluna */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{config.icone}</span>
                <div>
                  <p className={`font-semibold text-sm ${config.corTitulo}`}>
                    {config.label}
                  </p>
                  <p className="text-xs text-gray-500">{config.peso}</p>
                </div>
              </div>

              {/* Afirmações */}
              <ul className="space-y-2">
                {itens.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1 text-gray-400 shrink-0">—</span>
                    <span>{item.texto}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      {/* Nota de rodapé opcional */}
      {nota && (
        <p className="text-xs text-gray-500 mt-4 italic border-t pt-3">
          {nota}
        </p>
      )}
    </div>
  )
}