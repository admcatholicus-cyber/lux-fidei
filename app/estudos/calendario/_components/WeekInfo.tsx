'use client';

import type { LiturgicalWeek } from '../_types';
import { SEASON_LABELS } from '../_data/liturgicalWeeks';

interface WeekInfoProps {
  week: LiturgicalWeek | null;  // semana selecionada
  isCurrent: boolean;            // é a semana atual?
}

export default function WeekInfo({ week, isCurrent }: WeekInfoProps) {

  // ============================================================
  // 🎯 ESTADO VAZIO — quando nada está selecionado
  // ============================================================
  if (!week) {
    return (
      <div className="w-full max-w-2xl bg-white/50 backdrop-blur rounded-3xl p-8 text-center text-gray-500 italic border border-gray-200">
        Clique em uma semana para ver mais detalhes
      </div>
    );
  }

  // ============================================================
  // 📋 CAIXA PRINCIPAL COM AS INFORMAÇÕES DA SEMANA
  // ============================================================
  return (
    <div
      key={week.id} // muda a key p/ o React reanimar ao trocar de semana
      className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      {/* Faixa colorida decorativa no topo (com a cor do tempo) */}
      <div
        className="h-2 w-full"
        style={{ backgroundColor: week.color }}
      />

      <div className="p-8">

        {/* --- Cabeçalho: nome do tempo + título + badge "atual" --- */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            {/* Nome do tempo litúrgico em cima (ex: "TEMPO COMUM") */}
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2"
              style={{ color: week.color, filter: 'brightness(0.7)' }}
            >
              {SEASON_LABELS[week.season]}
            </p>

            {/* Título grande da semana (ex: "14ª Semana") */}
            <h2
              className="text-3xl font-bold text-gray-900"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {week.label}
            </h2>
          </div>

          {/* Badge "Semana Atual" — só aparece se for hoje */}
          {isCurrent && (
            <span className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950 px-4 py-2 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
              <span className="w-2 h-2 bg-amber-950 rounded-full animate-pulse" />
              Semana Atual
            </span>
          )}
        </div>

        {/* Linha divisória sutil */}
        <div className="w-16 h-0.5 bg-gray-200 my-4" />

        {/* Descrição da semana */}
        <p className="text-gray-700 leading-relaxed text-lg">
          {week.description}
        </p>

        {/* --- Lista de leituras (só aparece se preenchida) --- */}
        {week.readings && week.readings.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Leituras da Semana
            </h3>
            <ul className="space-y-2">
              {week.readings.map((r, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-amber-500 mt-1">✦</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}