// estudos/concilios/calcedonia/cronologia/_LinhaTempo.tsx
'use client';

import { useState } from 'react';
import type { EventoCronologico } from './_cronologia';

interface Props {
  eventos: EventoCronologico[];
}

type Filtro = 'todos' | 'concilio' | 'antes' | 'depois';

export default function LinhaDoTempo({ eventos }: Props) {
  const [expandido, setExpandido] = useState<number | null>(null);
  const [filtroAtual, setFiltroAtual] = useState<Filtro>('todos');

  const toggle = (idx: number) => {
    setExpandido(expandido === idx ? null : idx);
  };

  const eventosFiltrados = eventos.filter((ev) => {
    if (filtroAtual === 'todos') return true;
    if (filtroAtual === 'concilio') return ev.data.includes('451');
    if (filtroAtual === 'antes') {
      const ano = parseInt(ev.data.replace(/[^0-9]/g, '').slice(0, 4), 10);
      return ano < 451;
    }
    if (filtroAtual === 'depois') {
      const ano = parseInt(ev.data.replace(/[^0-9]/g, '').slice(0, 4), 10);
      return ano >= 451;
    }
    return true;
  });

  return (
    <div className="linha-do-tempo">
      <style jsx>{`
        .linha-do-tempo {
          position: relative;
          padding: 1rem 0;
        }
        .linha-do-tempo::before {
          content: '';
          position: absolute;
          left: 24px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            180deg,
            var(--calc-gold-light) 0%,
            var(--calc-gold) 50%,
            var(--calc-gold-light) 100%
          );
        }
        .evento {
          display: flex;
          gap: 1.25rem;
          padding: 0.85rem 0;
          position: relative;
          cursor: pointer;
          transition: background 0.15s ease;
          border-radius: 8px;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }
        .evento:hover {
          background: var(--calc-bg-highlight);
        }
        .evento-dot {
          flex-shrink: 0;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--calc-gold);
          border: 2px solid #fff;
          box-shadow: 0 0 0 2px var(--calc-gold-light);
          margin-top: 0.2rem;
          z-index: 1;
          margin-left: 18px;
        }
        .evento-concilio .evento-dot {
          background: var(--calc-purple);
          box-shadow: 0 0 0 2px var(--calc-purple-mid);
        }
        .evento-content {
          flex: 1;
        }
        .evento-data {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--calc-gold);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.2rem;
        }
        .evento-concilio .evento-data {
          color: var(--calc-purple);
        }
        .evento-texto {
          font-size: 0.95rem;
          line-height: 1.65;
          color: var(--calc-text);
        }
        .evento-fonte {
          font-size: 0.82rem;
          color: var(--calc-text-faint);
          font-style: italic;
          margin-top: 0.3rem;
        }
        .filtro {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .filtro-btn {
          background: var(--calc-bg-card);
          border: 1px solid var(--calc-gold-border);
          color: var(--calc-text-muted);
          font-size: 0.78rem;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .filtro-btn:hover,
        .filtro-btn.ativo {
          background: var(--calc-purple);
          color: #fff;
          border-color: var(--calc-purple);
        }
        .contador {
          font-size: 0.82rem;
          color: var(--calc-text-faint);
          margin-bottom: 1rem;
        }
      `}</style>

      <div className="filtro">
        <button
          className={`filtro-btn ${filtroAtual === 'todos' ? 'ativo' : ''}`}
          onClick={() => setFiltroAtual('todos')}
        >
          Todos ({eventos.length})
        </button>
        <button
          className={`filtro-btn ${filtroAtual === 'concilio' ? 'ativo' : ''}`}
          onClick={() => setFiltroAtual('concilio')}
        >
          Concílio
        </button>
        <button
          className={`filtro-btn ${filtroAtual === 'antes' ? 'ativo' : ''}`}
          onClick={() => setFiltroAtual('antes')}
        >
          Antes (449–451)
        </button>
        <button
          className={`filtro-btn ${filtroAtual === 'depois' ? 'ativo' : ''}`}
          onClick={() => setFiltroAtual('depois')}
        >
          Depois (451–553)
        </button>
      </div>

      <p className="contador">
        {eventosFiltrados.length} evento{eventosFiltrados.length !== 1 ? 's' : ''} encontrado{eventosFiltrados.length !== 1 ? 's' : ''}
      </p>

      {eventosFiltrados.map((ev, i) => {
        const isConcilio = ev.data.includes('451');
        return (
          <div
            key={`${ev.data}-${i}`}
            className={`evento ${isConcilio ? 'evento-concilio' : ''}`}
            onClick={() => toggle(i)}
          >
            <div className="evento-dot" />
            <div className="evento-content">
              <div className="evento-data">{ev.data}</div>
              <div className="evento-texto">{ev.evento}</div>
              {expandido === i && (
                <div className="evento-fonte">Fonte: {ev.fonte}</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
