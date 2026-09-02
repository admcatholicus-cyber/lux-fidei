'use client';

import { useEffect, useState, useRef } from 'react';
import { useSettings } from './SettingsProvider';
import styles from '@/app/santos/_styles/layout.module.css';

export default function BackToTop() {
  const { modoTopo } = useSettings();
  const [visivel, setVisivel] = useState(false);
  const [gestoAtivo, setGestoAtivo] = useState(false);
  const [gestoProgresso, setGestoProgresso] = useState(0);
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ═══════════════════════════════════════════════
  // MODO BOTÃO
  // ═══════════════════════════════════════════════
  useEffect(() => {
    if (modoTopo !== 'botao') {
      setVisivel(false);
      return;
    }

    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastScrollY.current;
      const scrollingDown = currentY > lastScrollY.current;

      if (currentY < 300) {
        setVisivel(false);
        lastScrollY.current = currentY;
        return;
      }

      if (scrollingUp) {
        setVisivel(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setVisivel(false), 2000);
      } else if (scrollingDown) {
        setVisivel(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [modoTopo]);

  // ═══════════════════════════════════════════════
  // MODO GESTO — Segurar e arrastar pra cima
  // Requisitos:
  //   • Precisa manter pressionado (mouse ou touch)
  //   • Arrastar pra cima 200px+ enquanto segura
  //   • Feedback visual do progresso
  //   • Se soltar antes de completar → cancela
  // ═══════════════════════════════════════════════
  useEffect(() => {
    if (modoTopo !== 'gesto') {
      setGestoAtivo(false);
      setGestoProgresso(0);
      return;
    }

    const DISTANCIA_MIN = 200;
    const TEMPO_MIN = 400; // segurar por no mínimo 400ms
    const ZONA_ATIVACAO = 80; // últimos 80px da tela (embaixo)

    let startY = 0;
    let startX = 0;
    let startTime = 0;
    let ativo = false;

    const iniciar = (clientX: number, clientY: number) => {
      const altura = window.innerHeight;
      // Só ativa se começar perto do rodapé da tela
      if (clientY < altura - ZONA_ATIVACAO) return;
      // Só ativa se estiver rolado o suficiente
      if (window.scrollY < 400) return;

      startY = clientY;
      startX = clientX;
      startTime = Date.now();
      ativo = true;
      setGestoAtivo(true);
      setGestoProgresso(0);
    };

    const mover = (clientX: number, clientY: number) => {
      if (!ativo) return;

      const dy = startY - clientY; // positivo = subiu
      const dx = Math.abs(clientX - startX);

      // Se moveu muito horizontal, cancela (gesto foi lateral)
      if (dx > 60) {
        cancelar();
        return;
      }

      // Progresso: 0 a 100
      const progresso = Math.min(100, Math.max(0, (dy / DISTANCIA_MIN) * 100));
      setGestoProgresso(progresso);
    };

    const finalizar = (clientY: number) => {
      if (!ativo) return;

      const dy = startY - clientY;
      const tempo = Date.now() - startTime;

      if (dy >= DISTANCIA_MIN && tempo >= TEMPO_MIN) {
        // COMPLETOU o gesto
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      cancelar();
    };

    const cancelar = () => {
      ativo = false;
      setGestoAtivo(false);
      setGestoProgresso(0);
    };

    // ─── Mouse ───────────────────────────────────
    const onMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      iniciar(e.clientX, e.clientY);
    };
    const onMouseMove = (e: MouseEvent) => mover(e.clientX, e.clientY);
    const onMouseUp = (e: MouseEvent) => finalizar(e.clientY);

    // ─── Touch ───────────────────────────────────
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      iniciar(t.clientX, t.clientY);
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      mover(t.clientX, t.clientY);
    };
    const onTouchEnd = (e: TouchEvent) => {
      const t = e.changedTouches[0];
      finalizar(t.clientY);
    };

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [modoTopo]);

  const irAoTopo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setVisivel(false);
  };

  return (
    <>
      {/* Botão clássico */}
      {modoTopo === 'botao' && (
        <button
          className={`${styles.backToTop} ${visivel ? styles.backToTopVisivel : ''}`}
          onClick={irAoTopo}
          aria-label="Voltar ao topo"
          tabIndex={visivel ? 0 : -1}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      )}

      {/* Indicador visual do gesto */}
      {modoTopo === 'gesto' && gestoAtivo && (
        <div
          className={styles.gestoIndicador}
          style={{ '--progresso': `${gestoProgresso}%` } as React.CSSProperties}
        >
          <div className={styles.gestoAnel}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </div>
          <p className={styles.gestoLabel}>
            {gestoProgresso >= 100 ? 'Solte para subir' : 'Continue arrastando…'}
          </p>
        </div>
      )}
    </>
  );
}