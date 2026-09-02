'use client';

import { useState, useRef, useEffect } from 'react';
import { useSettings } from './SettingsProvider';
import styles from '@/app/santos/_styles/layout.module.css';

export default function SettingsButton() {
  const {
    tema,
    setTema,
    tamanhoTexto,
    setTamanhoTexto,
    larguraLeitura,
    setLarguraLeitura,
    modoTopo,
    setModoTopo,
  } = useSettings();

  const [aberto, setAberto] = useState(false);
  const [personalizar, setPersonalizar] = useState(false);
  const [visivel, setVisivel] = useState(true);

  const painelRef = useRef<HTMLDivElement>(null);
  const botaoRef = useRef<HTMLButtonElement>(null);

  // ============================================================
  // FECHAR AO ROLAR
  // ============================================================

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (y < 100) {
        setVisivel(true);
      } else {
        setVisivel(false);
        setAberto(false);
        setPersonalizar(false);
      }
    };

    onScroll();

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // ============================================================
  // FECHAR AO CLICAR FORA
  // ============================================================

  useEffect(() => {
    if (!aberto) return;

    const handler = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        painelRef.current &&
        !painelRef.current.contains(target) &&
        botaoRef.current &&
        !botaoRef.current.contains(target)
      ) {
        setAberto(false);
        setPersonalizar(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [aberto]);

  // ============================================================
  // ESC
  // ============================================================

  useEffect(() => {
    if (!aberto) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (personalizar) {
          setPersonalizar(false);
        } else {
          setAberto(false);
        }
      }
    };

    document.addEventListener('keydown', handler);

    return () => {
      document.removeEventListener('keydown', handler);
    };
  }, [aberto, personalizar]);

  // ============================================================
  // RESTAURAR PADRÃO
  // ============================================================

  const restaurarPadrao = () => {
    setTamanhoTexto(100);
    setLarguraLeitura(100);
  };

  // ============================================================
  // BOTÃO PRINCIPAL
  // ============================================================

  return (
    <div
      className={`${styles.settingsWrap} ${
        visivel ? styles.settingsWrapVisivel : ''
      }`}
    >
      <button
        ref={botaoRef}
        className={styles.settingsBtn}
        onClick={() => {
          setAberto((v) => !v);
          setPersonalizar(false);
        }}
        aria-label="Configurações de leitura"
        aria-expanded={aberto}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />

          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </button>

      {aberto && (
        <div
          ref={painelRef}
          className={`${styles.settingsPainel} ${
            personalizar ? styles.settingsPainelPersonalizar : ''
          }`}
          role="dialog"
          aria-label={
            personalizar
              ? 'Personalizar leitura'
              : 'Configurações'
          }
        >
          {!personalizar ? (
            <>
              {/* ==================================================
                  MENU PRINCIPAL
                  ================================================== */}

              <header className={styles.settingsHeader}>
                <span className={styles.settingsLabel}>
                  Configurações
                </span>

                <button
                  className={styles.settingsClose}
                  onClick={() => {
                    setAberto(false);
                    setPersonalizar(false);
                  }}
                  aria-label="Fechar"
                >
                  ×
                </button>
              </header>

              {/* ==================================================
                  TEMA
                  ================================================== */}

              <section className={styles.settingsSecao}>
                <span className={styles.settingsSecaoLabel}>
                  Tema
                </span>

                <div className={styles.settingsOpcoes}>
                  {(
                    ['claro', 'sepia', 'escuro'] as const
                  ).map((t) => (
                    <button
                      key={t}
                      className={`${styles.settingsOpcao} ${
                        tema === t
                          ? styles.settingsOpcaoAtivo
                          : ''
                      }`}
                      onClick={() => setTema(t)}
                      aria-pressed={tema === t}
                    >
                      <span
                        className={`${styles.settingsSwatch} ${
                          styles[`swatch_${t}`]
                        }`}
                      />

                      <span
                        className={
                          styles.settingsOpcaoTexto
                        }
                      >
                        {t === 'claro'
                          ? 'Claro'
                          : t === 'sepia'
                          ? 'Sépia'
                          : 'Escuro'}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              {/* ==================================================
                  PERSONALIZAÇÃO DA LEITURA
                  ================================================== */}

              <section className={styles.settingsSecao}>
                <span className={styles.settingsSecaoLabel}>
                  Tamanho do texto
                </span>

                <button
                  type="button"
                  className={`${styles.settingsPersonalizarBotao} ${
                    tamanhoTexto !== 100 ||
                    larguraLeitura !== 100
                      ? styles.settingsPersonalizarAtivo
                      : ''
                  }`}
                  onClick={() => setPersonalizar(true)}
                >
                  <span>
                    {tamanhoTexto === 100 &&
                    larguraLeitura === 100
                      ? 'Mudar'
                      : `${tamanhoTexto}% · ${larguraLeitura}%`}
                  </span>

                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </section>

              {/* ==================================================
                  VOLTAR AO TOPO
                  ================================================== */}

              <section className={styles.settingsSecao}>
                <span className={styles.settingsSecaoLabel}>
                  Voltar ao topo
                </span>

                <div className={styles.settingsOpcoes}>
                  <button
                    className={`${styles.settingsOpcao} ${
                      modoTopo === 'botao'
                        ? styles.settingsOpcaoAtivo
                        : ''
                    }`}
                    onClick={() => setModoTopo('botao')}
                    aria-pressed={modoTopo === 'botao'}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>

                    <span
                      className={
                        styles.settingsOpcaoTexto
                      }
                    >
                      Botão
                    </span>
                  </button>

                  <button
                    className={`${styles.settingsOpcao} ${
                      modoTopo === 'gesto'
                        ? styles.settingsOpcaoAtivo
                        : ''
                    }`}
                    onClick={() => setModoTopo('gesto')}
                    aria-pressed={modoTopo === 'gesto'}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>

                    <span
                      className={
                        styles.settingsOpcaoTexto
                      }
                    >
                      Gesto
                    </span>
                  </button>
                </div>

                <p className={styles.settingsHint}>
                  {modoTopo === 'botao'
                    ? 'Botão aparece ao rolar para cima. Some após 2s sem uso.'
                    : 'Segure o clique e arraste para cima por ~200px para voltar ao topo.'}
                </p>
              </section>
            </>
          ) : (
            <>
              {/* ==================================================
                  SUBMENU — PERSONALIZAR LEITURA
                  ================================================== */}

              <header className={styles.settingsHeader}>
                <button
                  type="button"
                  className={styles.settingsBack}
                  onClick={() => setPersonalizar(false)}
                  aria-label="Voltar para configurações"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>

                  <span>Voltar</span>
                </button>

                <button
                  className={styles.settingsClose}
                  onClick={() => {
                    setAberto(false);
                    setPersonalizar(false);
                  }}
                  aria-label="Fechar"
                >
                  ×
                </button>
              </header>

              <div className={styles.settingsSubtitulo}>
                Tamanho do texto
              </div>

              {/* ==================================================
                  TAMANHO DAS LETRAS
                  ================================================== */}

              <section className={styles.settingsControle}>
                <div className={styles.settingsControleTopo}>
                  <span>
                    Tamanho das letras
                  </span>

                  <strong>
                    {tamanhoTexto}%
                  </strong>
                </div>

                <input
                  type="range"
                  min="80"
                  max="130"
                  step="1"
                  value={tamanhoTexto}
                  onChange={(e) =>
                    setTamanhoTexto(
                      Number(e.target.value)
                    )
                  }
                  className={styles.settingsRange}
                  aria-label="Tamanho das letras"
                  aria-valuemin={80}
                  aria-valuemax={130}
                  aria-valuenow={tamanhoTexto}
                />

                <div className={styles.settingsRangeLimites}>
                  <span>80%</span>
                  <span>130%</span>
                </div>
              </section>

              {/* ==================================================
                  LARGURA DA LEITURA
                  ================================================== */}

              <section className={styles.settingsControle}>
                <div className={styles.settingsControleTopo}>
                  <span>
                    Largura da leitura
                  </span>

                  <strong>
                    {larguraLeitura}%
                  </strong>
                </div>

            <input
  type="range"
  min="70"
  max="150"   // era 130
  step="1"
  value={larguraLeitura}
  onChange={(e) => setLarguraLeitura(Number(e.target.value))}
  className={styles.settingsRange}
  aria-label="Largura da leitura"
  aria-valuemin={70}
  aria-valuemax={150}  // era 130
  aria-valuenow={larguraLeitura}
/>

                <div className={styles.settingsRangeLimites}>
                  <span>70%</span>
                  <span>150%</span>
                </div>
              </section>

              {/* ==================================================
                  PRÉVIA ÚNICA
                  ================================================== */}

              <section className={styles.settingsPreviewSection}>
                <div className={styles.settingsPreviewLabel}>
                  Prévia
                </div>

                <div
                  className={styles.settingsPreview}
                  style={{
                    fontSize: `${tamanhoTexto}%`,
                    width: `${larguraLeitura}%`,
                  }}
                >
                  <div
                    className={
                      styles.settingsPreviewTitulo
                    }
                  >
                    Exemplo de leitura
                  </div>

                  <p>
                    Este é um pequeno exemplo de texto
                    para mostrar como a leitura ficará
                    com as configurações escolhidas.
                    Conforme você ajusta as barras,
                    esta prévia muda imediatamente.
                  </p>

                  <p>
                    O objetivo é encontrar uma combinação
                    confortável entre o tamanho das letras
                    e a quantidade de palavras por linha.
                  </p>
                </div>
              </section>

              {/* ==================================================
                  RESTAURAR
                  ================================================== */}

              <button
                type="button"
                className={styles.settingsRestaurar}
                onClick={restaurarPadrao}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 3-6.7" />
                  <polyline points="3 4 3 10 9 10" />
                </svg>

                Restaurar padrão
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}