// setup-calendario.mjs
import { mkdir, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { existsSync } from 'fs';

const BASE = 'app/estudos/calendario';

const files = {
  // ===== TYPES =====
  '_types/index.ts': `export type LiturgicalSeason =
  | 'advento'
  | 'natal'
  | 'tempoComum'
  | 'quaresma'
  | 'triduoPascal'
  | 'pascoa';

export interface LiturgicalWeek {
  id: string;
  label: string;
  season: LiturgicalSeason;
  color: string;
  description: string;
  readings?: string[];
}
`,

  // ===== DATA =====
  '_data/liturgicalWeeks.ts': `import type { LiturgicalWeek, LiturgicalSeason } from '../_types';

export const SEASON_COLORS: Record<LiturgicalSeason, string> = {
  advento: '#B19CD9',
  natal: '#F5F5DC',
  tempoComum: '#4CAF50',
  quaresma: '#8E44AD',
  triduoPascal: '#C0392B',
  pascoa: '#FFFFFF',
};

export const SEASON_LABELS: Record<LiturgicalSeason, string> = {
  advento: 'Advento',
  natal: 'Natal',
  tempoComum: 'Tempo Comum',
  quaresma: 'Quaresma',
  triduoPascal: 'Tríduo Pascal',
  pascoa: 'Páscoa',
};

export const LITURGICAL_WEEKS: LiturgicalWeek[] = [
  // ADVENTO
  { id: 'adv-1', label: '1ª Advento', season: 'advento', color: SEASON_COLORS.advento,
    description: 'Primeira semana do Advento. Tempo de espera e preparação.' },
  { id: 'adv-2', label: '2ª Advento', season: 'advento', color: SEASON_COLORS.advento,
    description: 'Segunda semana do Advento.' },
  { id: 'adv-3', label: '3ª Advento', season: 'advento', color: SEASON_COLORS.advento,
    description: 'Terceira semana do Advento (Domingo Gaudete).' },
  { id: 'adv-4', label: '4ª Advento', season: 'advento', color: SEASON_COLORS.advento,
    description: 'Quarta semana do Advento.' },

  // NATAL
  { id: 'natal', label: 'Natal', season: 'natal', color: SEASON_COLORS.natal,
    description: 'Solenidade do Natal do Senhor.' },
  { id: 'sagrada-familia', label: 'Sagrada Família', season: 'natal', color: SEASON_COLORS.natal,
    description: 'Festa da Sagrada Família de Jesus, Maria e José.' },
  { id: 'mae-de-deus', label: 'Mãe de Deus', season: 'natal', color: SEASON_COLORS.natal,
    description: 'Solenidade de Santa Maria, Mãe de Deus.' },
  { id: 'epifania', label: 'Epifania', season: 'natal', color: SEASON_COLORS.natal,
    description: 'Epifania do Senhor.' },
  { id: 'batismo', label: 'Batismo do Senhor', season: 'natal', color: SEASON_COLORS.natal,
    description: 'Festa do Batismo do Senhor.' },

  // TEMPO COMUM (parte 1)
  ...Array.from({ length: 5 }, (_, i) => ({
    id: \`tc1-\${i + 1}\`,
    label: \`\${i + 1}ª TC\`,
    season: 'tempoComum' as const,
    color: SEASON_COLORS.tempoComum,
    description: \`\${i + 1}ª semana do Tempo Comum.\`,
  })),

  // QUARESMA
  { id: 'cinzas', label: 'Cinzas', season: 'quaresma', color: SEASON_COLORS.quaresma,
    description: 'Quarta-feira de Cinzas — início da Quaresma.' },
  ...Array.from({ length: 5 }, (_, i) => ({
    id: \`qua-\${i + 1}\`,
    label: \`\${i + 1}ª Quaresma\`,
    season: 'quaresma' as const,
    color: SEASON_COLORS.quaresma,
    description: \`\${i + 1}ª semana da Quaresma.\`,
  })),

  // TRÍDUO
  { id: 'ramos', label: 'Ramos', season: 'triduoPascal', color: SEASON_COLORS.triduoPascal,
    description: 'Domingo de Ramos da Paixão do Senhor.' },
  { id: 'santa', label: 'Semana Santa', season: 'triduoPascal', color: SEASON_COLORS.triduoPascal,
    description: 'Semana Santa.' },

  // PÁSCOA
  ...Array.from({ length: 6 }, (_, i) => ({
    id: \`pas-\${i + 1}\`,
    label: \`\${i + 1}ª Páscoa\`,
    season: 'pascoa' as const,
    color: SEASON_COLORS.pascoa,
    description: \`\${i + 1}ª semana da Páscoa.\`,
  })),
  { id: 'ascensao', label: 'Ascensão', season: 'pascoa', color: SEASON_COLORS.pascoa,
    description: 'Ascensão do Senhor.' },
  { id: 'pentecostes', label: 'Pentecostes', season: 'pascoa', color: SEASON_COLORS.triduoPascal,
    description: 'Solenidade de Pentecostes.' },

  // TEMPO COMUM (parte 2)
  ...Array.from({ length: 29 }, (_, i) => ({
    id: \`tc2-\${i + 6}\`,
    label: \`\${i + 6}ª TC\`,
    season: 'tempoComum' as const,
    color: SEASON_COLORS.tempoComum,
    description: \`\${i + 6}ª semana do Tempo Comum.\`,
  })),
  { id: 'cristo-rei', label: 'Cristo Rei', season: 'tempoComum', color: SEASON_COLORS.tempoComum,
    description: 'Solenidade de Nosso Senhor Jesus Cristo, Rei do Universo.' },
];
`,

  // ===== LIB =====
  '_lib/svgHelpers.ts': `export function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function describeArc(
  cx: number, cy: number,
  rInner: number, rOuter: number,
  startAngle: number, endAngle: number
): string {
  const startOuter = polarToCartesian(cx, cy, rOuter, endAngle);
  const endOuter = polarToCartesian(cx, cy, rOuter, startAngle);
  const startInner = polarToCartesian(cx, cy, rInner, startAngle);
  const endInner = polarToCartesian(cx, cy, rInner, endAngle);
  const largeArc = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    \`M \${startOuter.x} \${startOuter.y}\`,
    \`A \${rOuter} \${rOuter} 0 \${largeArc} 0 \${endOuter.x} \${endOuter.y}\`,
    \`L \${startInner.x} \${startInner.y}\`,
    \`A \${rInner} \${rInner} 0 \${largeArc} 1 \${endInner.x} \${endInner.y}\`,
    'Z',
  ].join(' ');
}
`,

  '_lib/liturgicalCalendar.ts': `import { LITURGICAL_WEEKS } from '../_data/liturgicalWeeks';

// Algoritmo de Meeus/Jones/Butcher para calcular a Páscoa
export function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

/**
 * Retorna o ID da semana litúrgica atual.
 * TODO: implementar lógica completa baseada em datas.
 */
export function getCurrentWeekId(_date: Date = new Date()): string {
  return LITURGICAL_WEEKS[0].id;
}
`,

  // ===== COMPONENTS =====
  '_components/Wheel.tsx': `'use client';

import type { LiturgicalWeek } from '../_types';
import { describeArc, polarToCartesian } from '../_lib/svgHelpers';

interface WheelProps {
  weeks: LiturgicalWeek[];
  currentWeekId: string | null;
  selectedWeekId: string | null;
  onSelectWeek: (id: string) => void;
}

export default function Wheel({ weeks, currentWeekId, selectedWeekId, onSelectWeek }: WheelProps) {
  const size = 600;
  const cx = size / 2;
  const cy = size / 2;
  const rOuter = 280;
  const rInner = 130;
  const anglePerWeek = 360 / weeks.length;

  return (
    <svg viewBox={\`0 0 \${size} \${size}\`} className="w-full max-w-2xl mx-auto">
      {weeks.map((week, i) => {
        const startAngle = i * anglePerWeek;
        const endAngle = (i + 1) * anglePerWeek;
        const midAngle = (startAngle + endAngle) / 2;
        const path = describeArc(cx, cy, rInner, rOuter, startAngle, endAngle);

        const isCurrent = week.id === currentWeekId;
        const isSelected = week.id === selectedWeekId;

        const textPos = polarToCartesian(cx, cy, (rInner + rOuter) / 2, midAngle);
        const rotation = midAngle > 180 ? midAngle + 90 : midAngle - 90;

        return (
          <g
            key={week.id}
            className="cursor-pointer group"
            onClick={() => onSelectWeek(week.id)}
            role="button"
            aria-label={week.label}
          >
            <path
              d={path}
              fill={week.color}
              stroke={isSelected ? '#000' : '#fff'}
              strokeWidth={isSelected ? 3 : 1}
              className="transition-all duration-200 group-hover:brightness-110"
              opacity={isCurrent ? 1 : 0.9}
            />
            {isCurrent && (
              <path d={path} fill="none" stroke="#FFD700" strokeWidth={4} />
            )}
            <text
              x={textPos.x}
              y={textPos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              transform={\`rotate(\${rotation}, \${textPos.x}, \${textPos.y})\`}
              className="text-[9px] fill-black font-medium pointer-events-none select-none"
            >
              {week.label}
            </text>
          </g>
        );
      })}

      <circle cx={cx} cy={cy} r={rInner} fill="#f9fafb" stroke="#fff" strokeWidth={2} />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-lg font-bold fill-gray-700"
      >
        Ano Litúrgico
      </text>
    </svg>
  );
}
`,

  '_components/WeekInfo.tsx': `'use client';

import type { LiturgicalWeek } from '../_types';
import { SEASON_LABELS } from '../_data/liturgicalWeeks';

interface WeekInfoProps {
  week: LiturgicalWeek | null;
  isCurrent: boolean;
}

export default function WeekInfo({ week, isCurrent }: WeekInfoProps) {
  if (!week) {
    return (
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-6 text-gray-500 text-center">
        Clique em uma semana para ver mais detalhes.
      </div>
    );
  }

  return (
    <div
      className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 border-l-8 transition-all"
      style={{ borderLeftColor: week.color }}
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-2xl font-bold">{week.label}</h2>
        {isCurrent && (
          <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
            Semana Atual
          </span>
        )}
      </div>
      <p className="text-gray-500 mb-3">{SEASON_LABELS[week.season]}</p>
      <p className="text-gray-800 leading-relaxed">{week.description}</p>

      {week.readings && week.readings.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Leituras:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {week.readings.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
`,

  '_components/LiturgicalCalendar.tsx': `'use client';

import { useState, useMemo } from 'react';
import { LITURGICAL_WEEKS } from '../_data/liturgicalWeeks';
import { getCurrentWeekId } from '../_lib/liturgicalCalendar';
import Wheel from './Wheel';
import WeekInfo from './WeekInfo';

export default function LiturgicalCalendar() {
  const currentWeekId = useMemo(() => getCurrentWeekId(), []);
  const [selectedId, setSelectedId] = useState<string | null>(currentWeekId);

  const selectedWeek = LITURGICAL_WEEKS.find(w => w.id === selectedId) ?? null;

  return (
    <div className="flex flex-col items-center gap-8 p-6">
      <Wheel
        weeks={LITURGICAL_WEEKS}
        currentWeekId={currentWeekId}
        selectedWeekId={selectedId}
        onSelectWeek={setSelectedId}
      />
      <WeekInfo
        week={selectedWeek}
        isCurrent={selectedWeek?.id === currentWeekId}
      />
    </div>
  );
}
`,

  // ===== PAGE =====
  'page.tsx': `import LiturgicalCalendar from './_components/LiturgicalCalendar';

export const metadata = {
  title: 'Calendário Litúrgico',
  description: 'Calendário litúrgico interativo do ano cristão',
};

export default function CalendarioPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Calendário Litúrgico</h1>
      <LiturgicalCalendar />
    </main>
  );
}
`,
};

// ===== EXECUÇÃO =====
async function run() {
  console.log('🚀 Criando estrutura do calendário litúrgico...\n');

  let created = 0;
  let skipped = 0;

  for (const [relativePath, content] of Object.entries(files)) {
    const fullPath = join(BASE, relativePath);
    const dir = dirname(fullPath);

    await mkdir(dir, { recursive: true });

    if (existsSync(fullPath)) {
      console.log(`⏭️  Já existe: ${fullPath}`);
      skipped++;
      continue;
    }

    await writeFile(fullPath, content, 'utf8');
    console.log(`✅ Criado: ${fullPath}`);
    created++;
  }

  console.log(`\n✨ Pronto! ${created} arquivos criados, ${skipped} pulados.`);
  console.log(`\n👉 Acesse: http://localhost:3000/calendario\n`);
}

run().catch(err => {
  console.error('❌ Erro:', err);
  process.exit(1);
});