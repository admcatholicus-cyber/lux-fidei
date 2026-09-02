'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { LiturgicalWeek } from '../_types';
import { SEASON_LABELS } from '../_data/liturgicalWeeks';

interface WeekModalProps {
  week: LiturgicalWeek | null;
  isCurrent: boolean;
  onClose: () => void;
}

// ============================================================
// 🎬 Injeta as animações no <head> uma única vez
// ============================================================
const ANIMATION_STYLE_ID = 'week-modal-animations';

function ensureAnimationsInjected() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(ANIMATION_STYLE_ID)) return;

  const style = document.createElement('style');
  style.id = ANIMATION_STYLE_ID;
  style.textContent = `
    @keyframes weekModalOverlayIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes weekModalCardIn {
      from { opacity: 0; transform: translateY(20px) scale(0.98); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
    @keyframes weekModalPulse {
      0%, 100% { opacity: 1; }
      50%      { opacity: 0.5; }
    }
  `;
  document.head.appendChild(style);
}

// ============================================================
// 🪟 COMPONENTE PRINCIPAL
// ============================================================
export default function WeekModal({ week, isCurrent, onClose }: WeekModalProps) {
  const [mounted, setMounted] = useState(false);

  // Portal SSR-safe + injeção de animações
  useEffect(() => {
    ensureAnimationsInjected();
    setMounted(true);
  }, []);

  // Ref estável para onClose
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Bloqueia scroll + tecla ESC
  useEffect(() => {
    if (!week) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', handleEsc);
    };
  }, [week]);

  if (!mounted || !week) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="week-modal-title"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2147483647,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        background: 'rgba(20, 15, 10, 0.75)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'weekModalOverlayIn 0.25s ease-out',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '640px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #fefdfb 0%, #f8f4ec 100%)',
          borderRadius: '24px',
          boxShadow:
            '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 0, 0, 0.08)',
          animation: 'weekModalCardIn 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Faixa colorida no topo */}
        <div
          style={{
            height: '10px',
            width: '100%',
            flexShrink: 0,
            background: `linear-gradient(90deg, ${week.color} 0%, ${adjustBrightness(
              week.color,
              -15
            )} 100%)`,
          }}
        />

        {/* Botão fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = 'scale(1.1) rotate(90deg)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = 'scale(1) rotate(0)')
          }
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#333"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Conteúdo com rolagem interna */}
        <div
          style={{
            overflowY: 'auto',
            padding: '40px 44px',
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          {/* --- CABEÇALHO --- */}
          <header style={{ marginBottom: '28px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: week.color,
                  boxShadow: `0 0 0 3px ${week.color}33`,
                }}
              />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#78716c',
                  fontFamily: 'system-ui, sans-serif',
                }}
              >
                {SEASON_LABELS[week.season]}
              </span>

              {isCurrent && (
                <span
                  style={{
                    marginLeft: 'auto',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background:
                      'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                    color: '#aea097',
                    padding: '6px 14px',
                    borderRadius: '999px',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.5px',
                    boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)',
                    fontFamily: 'system-ui, sans-serif',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#78350f',
                      animation: 'weekModalPulse 1.5s ease-in-out infinite',
                    }}
                  />
                  SEMANA ATUAL
                </span>
              )}
            </div>

            <h2
              id="week-modal-title"
              style={{
                fontSize: '38px',
                fontWeight: 700,
                color: '#d2cecb',
                lineHeight: 1.15,
                marginBottom: '10px',
                letterSpacing: '-0.02em',
              }}
            >
              {week.label}
            </h2>

            {week.theme && (
              <p
                style={{
                  fontSize: '18px',
                  fontStyle: 'italic',
                  color: 'rgb(194 192 190);',
                  lineHeight: 1.5,
                }}
              >
                “{week.theme}”
              </p>
            )}
          </header>

          {/* --- CARDS DE INFO --- */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              marginBottom: '28px',
            }}
          >
            <InfoCard
              label="Tempo Litúrgico"
              value={SEASON_LABELS[week.season]}
            />
            {week.liturgicalColor && (
              <InfoCard label="Cor do Paramento" value={week.liturgicalColor} />
            )}
          </div>

          {/* --- DESCRIÇÃO --- */}
          {week.description && (
            <Section title="Sobre esta semana">
              <p style={paragraphStyle}>{week.description}</p>
            </Section>
          )}

          {/* --- REFLEXÃO --- */}
          {week.reflection && (
            <Section title="Reflexão">
              <blockquote
                style={{
                  ...paragraphStyle,
                  fontStyle: 'italic',
                  borderLeft: `4px solid ${week.color}`,
                  paddingLeft: '18px',
                  margin: 0,
                  color: '#44403c',
                }}
              >
                {week.reflection}
              </blockquote>
            </Section>
          )}

          {/* --- LEITURAS --- */}
          {week.readings && (
            <Section title="Leituras">
              <div
                style={{
                  background: '#fff',
                  padding: '20px 24px',
                  borderRadius: '14px',
                  border: '1px solid #e7e5e4',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {week.readings.firstReading && (
                  <ReadingLine
                    label="1ª Leitura"
                    text={week.readings.firstReading}
                  />
                )}
                {week.readings.psalm && (
                  <ReadingLine label="Salmo" text={week.readings.psalm} />
                )}
                {week.readings.secondReading && (
                  <ReadingLine
                    label="2ª Leitura"
                    text={week.readings.secondReading}
                  />
                )}
                {week.readings.gospel && (
                  <ReadingLine
                    label="Evangelho"
                    text={week.readings.gospel}
                    highlight
                  />
                )}
              </div>
            </Section>
          )}

          {/* --- ORAÇÃO --- */}
          {week.prayer && (
            <Section title="Oração do Dia">
              <div
                style={{
                  position: 'relative',
                  background:
                    'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                  padding: '22px 26px',
                  borderRadius: '14px',
                  border: '1px solid #fcd34d',
                  boxShadow: '0 4px 12px rgba(245, 158, 11, 0.15)',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '12px',
                    fontSize: '48px',
                    color: '#d97706',
                    opacity: 0.35,
                    lineHeight: 1,
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  ❝
                </span>
                <p
                  style={{
                    ...paragraphStyle,
                    fontStyle: 'italic',
                    color: '#78350f',
                    margin: 0,
                    paddingLeft: '24px',
                  }}
                >
                  {week.prayer}
                </p>
              </div>
            </Section>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

// ============================================================
// 🧩 SUBCOMPONENTES
// ============================================================

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: '28px' }}>
      <h3
        style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#78716c',
          marginBottom: '12px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: '#fff',
        padding: '14px 18px',
        borderRadius: '12px',
        border: '1px solid #e7e5e4',
        boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
      }}
    >
      <p
        style={{
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#a8a29e',
          marginBottom: '6px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {label}
      </p>
      <p style={{ fontSize: '15px', fontWeight: 600, color: '#1c1917' }}>
        {value}
      </p>
    </div>
  );
}

function ReadingLine({
  label,
  text,
  highlight,
}: {
  label: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        padding: '10px 0',
        borderBottom: '1px dashed #e7e5e4',
        alignItems: 'baseline',
      }}
    >
      <span
        style={{
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: highlight ? '#9b2c2c' : '#78716c',
          minWidth: '90px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: '15px',
          color: highlight ? '#1c1917' : '#44403c',
          fontWeight: highlight ? 600 : 400,
          lineHeight: 1.5,
        }}
      >
        {text}
      </span>
    </div>
  );
}

// ============================================================
// 🎨 HELPERS
// ============================================================

const paragraphStyle: React.CSSProperties = {
  fontSize: '16px',
  lineHeight: 1.7,
  color: '#292524',
};

function adjustBrightness(hex: string, percent: number): string {
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, Math.min(255, (num >> 16) + amt));
  const G = Math.max(0, Math.min(255, ((num >> 8) & 0x00ff) + amt));
  const B = Math.max(0, Math.min(255, (num & 0x0000ff) + amt));
  return `#${((R << 16) | (G << 8) | B).toString(16).padStart(6, '0')}`;
}