'use client';

import { useState, useEffect } from 'react';
import type { LiturgicalWeek, LiturgicalSeason } from '../_types';
import { describeArc, polarToCartesian } from '../_lib/svgHelpers';
import { SEASON_LABELS, SEASON_COLORS } from '../_data/liturgicalWeeks';

interface WheelProps {
  weeks: LiturgicalWeek[];
  currentWeekId: string | null;
  selectedWeekId: string | null;
  onSelectWeek: (id: string) => void;
}

export default function Wheel({ weeks, currentWeekId, selectedWeekId, onSelectWeek }: WheelProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // 📏 DIMENSÕES DA RODA
  const size = 700;
  const cx = size / 2;
  const cy = size / 2;
  const rOuterRing = 340;
  const rOuter = 310;
  const rInner = 150;
  const anglePerWeek = 360 / weeks.length;

  // 🎨 BORDAS
  const BORDER_COLOR = '#000000';
  const BORDER_WIDTH = 1;

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // 🧩 AGRUPAMENTO POR TEMPO LITÚRGICO
  const seasonGroups: { season: LiturgicalSeason; start: number; end: number }[] = [];
  weeks.forEach((week, i) => {
    const last = seasonGroups[seasonGroups.length - 1];
    if (last && last.season === week.season) {
      last.end = i + 1;
    } else {
      seasonGroups.push({ season: week.season, start: i, end: i + 1 });
    }
  });

  if (!mounted) {
    return (
      <div
        className="relative w-full max-w-3xl mx-auto flex items-center justify-center"
        style={{ aspectRatio: '1 / 1' }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            border: '4px solid #e7e5e4',
            borderTopColor: '#78350f',
            borderRadius: '50%',
            animation: 'wheelSpin 1s linear infinite',
          }}
        />
        <style jsx>{`
          @keyframes wheelSpin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full overflow-visible">

        {/* 📎 DEFS */}
        <defs>
          {seasonGroups.map((group, idx) => {
            const startAngle = group.start * anglePerWeek;
            const endAngle = group.end * anglePerWeek;
            const midAngle = (startAngle + endAngle) / 2;
            const isBottomHalf = midAngle > 90 && midAngle < 270;
            const midR = isBottomHalf ? rOuterRing - 3 : rOuterRing - 15;

            let pathD: string;
            if (isBottomHalf) {
              const start = polarToCartesian(cx, cy, midR, endAngle - 2);
              const end = polarToCartesian(cx, cy, midR, startAngle + 2);
              const largeArc = endAngle - startAngle > 180 ? 1 : 0;
              pathD = `M ${start.x} ${start.y} A ${midR} ${midR} 0 ${largeArc} 0 ${end.x} ${end.y}`;
            } else {
              const start = polarToCartesian(cx, cy, midR, startAngle + 2);
              const end = polarToCartesian(cx, cy, midR, endAngle - 2);
              const largeArc = endAngle - startAngle > 180 ? 1 : 0;
              pathD = `M ${start.x} ${start.y} A ${midR} ${midR} 0 ${largeArc} 1 ${end.x} ${end.y}`;
            }
            return <path key={`textpath-${idx}`} id={`textpath-${idx}`} d={pathD} fill="none" />;
          })}

          <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood floodColor="#F59E0B" floodOpacity="0.8" />
            <feComposite in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 🌈 ANEL EXTERNO — TEMPOS LITÚRGICOS */}
        {seasonGroups.map((group, idx) => {
          const startAngle = group.start * anglePerWeek;
          const endAngle = group.end * anglePerWeek;
          const path = describeArc(cx, cy, rOuter + 5, rOuterRing, startAngle, endAngle);
          const color = SEASON_COLORS[group.season];
          const label = SEASON_LABELS[group.season];

          const arcSpan = endAngle - startAngle;
          const arcLength = (arcSpan / 360) * 2 * Math.PI * (rOuterRing - 15);
          const estimatedTextWidth = label.length * 6.5;
          const fontSize = estimatedTextWidth > arcLength
            ? Math.max(8, Math.floor(12 * arcLength / estimatedTextWidth))
            : 12;

          return (
            <g key={`ring-${idx}`}>
              <path
                d={path}
                fill={color}
                stroke={BORDER_COLOR}
                strokeWidth={BORDER_WIDTH}
              />
              <text
                fontSize={fontSize}
                className="font-semibold tracking-wide"
                fill={isLightColor(color) ? '#374151' : '#fff'}
                style={{ fontFamily: 'Georgia, serif' }}
              >
                <textPath href={`#textpath-${idx}`} startOffset="50%" textAnchor="middle">
                  {label}
                </textPath>
              </text>
            </g>
          );
        })}

        {/* 🍰 FATIAS DE SEMANAS */}
        {weeks.map((week, i) => {
          const startAngle = i * anglePerWeek;
          const endAngle = (i + 1) * anglePerWeek;
          const midAngle = (startAngle + endAngle) / 2;
          const color = week.color;

          const isCurrent = week.id === currentWeekId;
          const isSelected = week.id === selectedWeekId;
          const isHovered = hoveredId === week.id;

          const growth = isHovered || isSelected ? 12 : 0;
          const path = describeArc(cx, cy, rInner, rOuter + growth, startAngle, endAngle);

          const textR = (rInner + rOuter + growth) / 2;
          const textPos = polarToCartesian(cx, cy, textR, midAngle);
          const rotation = midAngle > 180 ? midAngle + 90 : midAngle - 90;

          return (
            <g
              key={week.id}
              className="cursor-pointer"
              onClick={() => onSelectWeek(week.id)}
              onMouseEnter={() => setHoveredId(week.id)}
              onMouseLeave={() => setHoveredId(null)}
              role="button"
              aria-label={week.label}
              style={{ transition: 'all 0.25s ease-out' }}
            >
              <path
                d={path}
                fill={color}
                stroke={isSelected ? '#1f2937' : BORDER_COLOR}
                strokeWidth={isSelected ? 3 : BORDER_WIDTH}
                style={{
                  transition: 'all 0.25s ease-out',
                  filter: isHovered && !isCurrent ? 'brightness(1.08)' : 'none',
                }}
              />

              {isCurrent && (
                <path
                  d={path}
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="4"
                  filter="url(#goldGlow)"
                >
                  <animate
                    attributeName="stroke-opacity"
                    values="1;0.4;1"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
              )}

              <text
                x={textPos.x}
                y={textPos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${rotation}, ${textPos.x}, ${textPos.y})`}
                className="pointer-events-none select-none"
                fontSize={isHovered || isSelected ? 11 : 9}
                fontWeight={isCurrent || isSelected ? 700 : 500}
                fill={isLightColor(color) ? '#1f2937' : '#fff'}
                style={{
                  fontFamily: 'Georgia, serif',
                  transition: 'all 0.25s ease-out',
                }}
              >
                {week.label}
              </text>
            </g>
          );
        })}

        {/* ============================================================
            ✝️ CÍRCULO CENTRAL — cruz + título + ano
        ============================================================ */}
        <circle
          cx={cx}
          cy={cy}
          r={rInner}
          fill="#F5F1E4"
          stroke={BORDER_COLOR}
          strokeWidth={BORDER_WIDTH}
        />

        {/* Cruz simples marrom */}
        <g transform={`translate(${cx}, ${cy - 20})`}>
          <rect x="-8" y="-40" width="16" height="80" fill="#78350f" rx="1" />
          <rect x="-30" y="-15" width="60" height="16" fill="#78350f" rx="1" />
        </g>

        <text
          x={cx}
          y={cy + 50}
          textAnchor="middle"
          className="text-base font-bold fill-stone-800"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Ano Litúrgico
        </text>
        <text
          x={cx}
          y={cy + 70}
          textAnchor="middle"
          className="text-xs fill-stone-600 tracking-widest"
        >
          {new Date().getFullYear()}
        </text>
      </svg>
    </div>
  );
}
function isLightColor(hex: string): boolean {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = num >> 16;
  const g = (num >> 8) & 0x00ff;
  const b = num & 0x0000ff;
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
}