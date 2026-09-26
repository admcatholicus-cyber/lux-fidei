'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styles from './CatequeseReader.module.css';
import Highlighter from './Highlighter';
import BilingualDisplay from './BilingualDisplay';
import { registrarHistorico, atualizarProgresso } from '../../lib/historico';
import { tipoLabels, type Catequese, type TipoCatequese } from '../data/catequeses';

type CatequeseNav = {
  slug: string;
  titulo: string;
  number: number;
  tipo: TipoCatequese;
};

type Props = {
  catequese: Catequese;
  prev: Catequese | null;
  next: Catequese | null;
  total: number;
  allCatequeses: CatequeseNav[];
};

const FONT_SIZES = [16, 18, 20, 22] as const;
type FontSize = (typeof FONT_SIZES)[number];

const THEMES = ['parchment', 'sepia', 'night'] as const;
type Theme = (typeof THEMES)[number];

const BASE_PATH = '/biblioteca/cirilo-jerusalem';
const LS = {
  fontSize: 'cirilo-reader-fontSize',
  theme: 'cirilo-reader-theme',
  progress: 'cirilo-reader-progress',
  position: 'cirilo-reader-position',
};

const BOOK_META = {
  id: 'cirilo-jerusalem',
  titulo: 'Catequeses Batismais e Mistagógicas',
  autor: 'São Cirilo de Jerusalém',
  capa: '/biblioteca/cirilo-jerusalem/capa.webp',
  categoria: 'Patrística Grega',
  corTema: '#5b2c83' as const,
};

const tipoBadgeStyle: Record<TipoCatequese, React.CSSProperties> = {
  'pre-batismal': { background: '#5b2c83', color: '#faf5eb' },
  'mistagogica': { background: '#8b6508', color: '#faf5eb' },
};

export default function CatequeseReader({
  catequese,
  prev,
  next,
  total,
  allCatequeses,
}: Props) {
  const router = useRouter();

  const [fontSize, setFontSize] = useState<FontSize>(18);
  const [theme, setTheme] = useState<Theme>('parchment');
  const [tocOpen, setTocOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressMap, setProgressMap] = useState<Record<string, number>>({});

  const articleRef = useRef<HTMLElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const positionRestored = useRef(false);

  useEffect(() => {
    try {
      const savedFont = Number(localStorage.getItem(LS.fontSize));
      if (savedFont && FONT_SIZES.includes(savedFont as FontSize)) {
        setFontSize(savedFont as FontSize);
      }
      const savedTheme = localStorage.getItem(LS.theme) as Theme | null;
      if (savedTheme && THEMES.includes(savedTheme)) {
        setTheme(savedTheme);
      }
      const savedProgress = JSON.parse(
        localStorage.getItem(LS.progress) || '{}'
      );
      setProgressMap(savedProgress);
    } catch {
      /* noop */
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LS.fontSize, String(fontSize));
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem(LS.theme, theme);
    document.documentElement.dataset.readerTheme = theme;
  }, [theme]);

  useEffect(() => {
    registrarHistorico({
      ...BOOK_META,
      url: `${BASE_PATH}/${catequese.slug}`,
      ultimoCapitulo: `Cat. ${catequese.number} — ${catequese.titulo}`,
      progresso: Math.round(((catequese.number - 1) / total) * 100),
    });
  }, [catequese.slug, catequese.number, catequese.titulo, total]);

  useEffect(() => {
    positionRestored.current = false;

    const veioDeOutroCapitulo =
      typeof document !== 'undefined' &&
      document.referrer.includes(BASE_PATH) &&
      !document.referrer.endsWith(BASE_PATH) &&
      !document.referrer.endsWith(`${BASE_PATH}/`);

    const timer = setTimeout(() => {
      try {
        if (veioDeOutroCapitulo) {
          window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        } else {
          const positions = JSON.parse(
            localStorage.getItem(LS.position) || '{}'
          );
          const saved = positions[catequese.slug];
          if (saved && saved > 200) {
            window.scrollTo({ top: saved, behavior: 'instant' as ScrollBehavior });
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
          }
        }
      } catch {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
      positionRestored.current = true;
    }, 50);

    return () => clearTimeout(timer);
  }, [catequese.slug]);

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const pct = Math.max(0, Math.min(1, scrolled / Math.max(1, totalHeight)));
      setProgress(pct);

      if (positionRestored.current) {
        try {
          const positions = JSON.parse(
            localStorage.getItem(LS.position) || '{}'
          );
          positions[catequese.slug] = window.scrollY;
          localStorage.setItem(LS.position, JSON.stringify(positions));

          const progressStore = JSON.parse(
            localStorage.getItem(LS.progress) || '{}'
          );
          progressStore[catequese.slug] = pct;
          localStorage.setItem(LS.progress, JSON.stringify(progressStore));

          const progressoGlobal =
            ((catequese.number - 1 + pct) / total) * 100;
          atualizarProgresso(
            BOOK_META.id,
            progressoGlobal,
            `Cat. ${catequese.number} — ${catequese.titulo}`
          );
        } catch {
          /* noop */
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          compute();
          ticking = false;
        });
        ticking = true;
      }
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [catequese.slug, catequese.number, catequese.titulo, total]);

  const goPrev = useCallback(() => {
    if (prev) router.push(`${BASE_PATH}/${prev.slug}`);
  }, [prev, router]);

  const goNext = useCallback(() => {
    if (next) router.push(`${BASE_PATH}/${next.slug}`);
  }, [next, router]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      switch (e.key) {
        case 'ArrowLeft':
        case 'j':
        case 'J':
          goPrev();
          break;
        case 'ArrowRight':
        case 'k':
        case 'K':
          goNext();
          break;
        case 't':
        case 'T':
          setTocOpen((o) => !o);
          break;
        case 's':
        case 'S':
          setSettingsOpen((o) => !o);
          break;
        case 'Escape':
          setTocOpen(false);
          setSettingsOpen(false);
          break;
        case '1':
        case '2':
        case '3':
        case '4': {
          const idx = Number(e.key) - 1;
          setFontSize(FONT_SIZES[idx]);
          break;
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goPrev, goNext]);

  useEffect(() => {
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null) return;
      const diff = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(diff) > 80) {
        if (diff < 0) goNext();
        else goPrev();
      }
      touchStartX.current = null;
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [goPrev, goNext]);

  const readingMinutes = useMemo(() => {
    const words = catequese.textoTraduzido.join(' ').split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
  }, [catequese.textoTraduzido]);

  const sectionLabel = catequese.tipo === 'pre-batismal' ? 'Catequese Pré-Batismal' : 'Catequese Mistagógica';

  return (
    <div className={styles.readerShell} data-theme={theme}>
      <div
        className={styles.progressBar}
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      {/* ============ TOPBAR ============ */}
      <header className={styles.readerTopbar}>
        <Link
          href="/biblioteca"
          className={styles.topbarLink}
          aria-label="Voltar para a biblioteca"
          title="Voltar para a biblioteca"
        >
          <span aria-hidden>←</span>
          <span>Biblioteca</span>
        </Link>

        <div className={styles.topbarTitle}>
          <span className={styles.topbarBook}>São Cirilo de Jerusalém</span>
          <span className={styles.topbarChapter}>
            Cat. {catequese.number} · {Math.round(progress * 100)}%
          </span>
        </div>

        <div className={styles.topbarControls}>
          <button
            type="button"
            className={styles.iconBtn}
            onClick={() => setSettingsOpen((o) => !o)}
            aria-label="Configurações de leitura"
            aria-expanded={settingsOpen}
            title="Configurações (S)"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.tocBtn}
            onClick={() => setTocOpen((o) => !o)}
            aria-expanded={tocOpen}
            aria-controls="reader-toc"
            title="Catequeses (T)"
          >
            <span aria-hidden>☰</span>
            <span className={styles.tocBtnLabel}>Catequeses</span>
          </button>
        </div>
      </header>

      {/* ============ POPOVER DE CONFIGURAÇÕES ============ */}
      {settingsOpen && (
        <>
          <button
            type="button"
            className={styles.popoverBackdrop}
            onClick={() => setSettingsOpen(false)}
            aria-label="Fechar configurações"
          />
          <div className={styles.settingsPopover} role="dialog" aria-label="Configurações">
            <div className={styles.settingsGroup}>
              <p className={styles.settingsLabel}>Tamanho da fonte</p>
              <div className={styles.fontControl} role="group">
                {FONT_SIZES.map((size, i) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setFontSize(size)}
                    className={`${styles.fontBtn} ${
                      fontSize === size ? styles.fontBtnActive : ''
                    }`}
                    aria-pressed={fontSize === size}
                    aria-label={`Tamanho ${i + 1}`}
                    title={`${size}px (tecla ${i + 1})`}
                  >
                    <span style={{ fontSize: `${11 + i * 2}px` }}>A</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.settingsGroup}>
              <p className={styles.settingsLabel}>Tema</p>
              <div className={styles.themeControl} role="group">
                {THEMES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTheme(t)}
                    className={`${styles.themeBtn} ${styles[`theme_${t}`]} ${
                      theme === t ? styles.themeBtnActive : ''
                    }`}
                    aria-pressed={theme === t}
                    aria-label={`Tema ${t}`}
                    title={t === 'parchment' ? 'Pergaminho' : t === 'sepia' ? 'Sépia' : 'Noturno'}
                  >
                    Aa
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.settingsHint}>
              <kbd>←</kbd> <kbd>→</kbd> navegar · <kbd>T</kbd> índice ·{' '}
              <kbd>S</kbd> ajustes
            </div>
          </div>
        </>
      )}

      {/* ============ PAINEL LATERAL DE ÍNDICE ============ */}
      {tocOpen && (
        <button
          type="button"
          className={styles.backdrop}
          onClick={() => setTocOpen(false)}
          aria-label="Fechar índice"
        />
      )}
      <aside
        id="reader-toc"
        className={`${styles.tocPanel} ${tocOpen ? styles.tocPanelOpen : ''}`}
        aria-hidden={!tocOpen}
      >
        <div className={styles.tocPanelHead}>
          <h2>Índice</h2>
          <button
            type="button"
            onClick={() => setTocOpen(false)}
            className={styles.tocClose}
            aria-label="Fechar índice"
          >
            ✕
          </button>
        </div>
        <ol className={styles.tocPanelList}>
          {allCatequeses.map((c) => {
            const p = progressMap[c.slug] ?? 0;
            const isActive = c.slug === catequese.slug;
            const isRead = p >= 0.95;
            return (
              <li key={c.slug}>
                <Link
                  href={`${BASE_PATH}/${c.slug}`}
                  onClick={() => setTocOpen(false)}
                  className={`${styles.tocPanelLink} ${
                    isActive ? styles.tocPanelLinkActive : ''
                  }`}
                >
                  <span className={styles.tocPanelNumber}>{c.number}</span>
                  <span className={styles.tocPanelText}>
                    <span className={styles.tocPanelTitle}>{c.titulo}</span>
                    {p > 0.02 && (
                      <span
                        className={styles.tocPanelProgress}
                        aria-label={`${Math.round(p * 100)}% lido`}
                      >
                        <span
                          className={styles.tocPanelProgressBar}
                          style={{ width: `${p * 100}%` }}
                        />
                      </span>
                    )}
                  </span>
                  <span className={styles.tocPanelStatus} aria-hidden>
                    {isRead ? '✓' : ''}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </aside>

      {/* ============ CATEQUESE ============ */}
      <article
        ref={articleRef}
        className={styles.chapter}
        style={{ fontSize: `${fontSize}px` }}
      >
        <p className={styles.chapterEyebrow}>{sectionLabel}</p>
        <div className={styles.tipoBadge} style={tipoBadgeStyle[catequese.tipo]}>
          {tipoLabels[catequese.tipo]}
        </div>
        <h1 className={styles.chapterTitle}>{catequese.titulo}</h1>
        {catequese.subtitulo && (
          <p className={styles.chapterSubtitle}>{catequese.subtitulo}</p>
        )}
        {catequese.versiculoBase && (
          <blockquote className={styles.versiculoBase}>
            {catequese.versiculoBase}
          </blockquote>
        )}
        <div className={styles.chapterMeta}>
          <span>~{readingMinutes} min de leitura</span>
          <span aria-hidden>·</span>
          <span>{catequese.textoTraduzido.length} parágrafos</span>
        </div>
        <div className={styles.ornament} aria-hidden>
          ✦ ✝ ✦
        </div>

        <BilingualDisplay
          textoTraduzido={catequese.textoTraduzido}
          textoOriginal={catequese.textoOriginal}
          idiomaOriginal={catequese.idiomaOriginal}
        />

        <div className={styles.ornament} aria-hidden>
          ✦
        </div>

        {catequese.notas && catequese.notas.length > 0 && (
          <aside className={styles.notasSection}>
            <h2 className={styles.notasTitle}>Notas</h2>
            <ol className={styles.notasList}>
              {catequese.notas.map((nota, i) => (
                <li key={i}>{nota}</li>
              ))}
            </ol>
          </aside>
        )}

        <Highlighter chapterSlug={catequese.slug} containerRef={articleRef} />
      </article>

      {/* ============ NAVEGAÇÃO INFERIOR ============ */}
      <nav className={styles.chapterNav} aria-label="Navegação entre catequeses">
        {prev ? (
          <Link
            href={`${BASE_PATH}/${prev.slug}`}
            className={`${styles.navLink} ${styles.navLinkPrev}`}
            rel="prev"
          >
            <span className={styles.navArrow} aria-hidden>←</span>
            <span className={styles.navText}>
              <span className={styles.navLabel}>Anterior · Cat. {prev.number}</span>
              <span className={styles.navTitle}>{prev.titulo}</span>
            </span>
          </Link>
        ) : (
          <div className={styles.navPlaceholder} />
        )}

        {next ? (
          <Link
            href={`${BASE_PATH}/${next.slug}`}
            className={`${styles.navLink} ${styles.navLinkNext}`}
            rel="next"
          >
            <span className={styles.navText}>
              <span className={styles.navLabel}>Próximo · Cat. {next.number}</span>
              <span className={styles.navTitle}>{next.titulo}</span>
            </span>
            <span className={styles.navArrow} aria-hidden>→</span>
          </Link>
        ) : (
          <div className={styles.navPlaceholder} />
        )}
      </nav>

      {/* ============ COMENTÁRIO EDITORIAL ============ */}
      {catequese.commentary && (
        <aside className={styles.commentary} aria-label="Comentário editorial">
          <div className={styles.commentaryInner}>
            <div className={styles.commentaryOrnament} aria-hidden>
              ✦ ✝ ✦
            </div>
            <p className={styles.commentaryEyebrow}>Nota do editor</p>
            <h2 className={styles.commentaryTitle}>{catequese.commentary.title}</h2>
            <div className={styles.commentaryBody}>
              {catequese.commentary.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {catequese.commentary.signature && (
              <p className={styles.commentarySignature}>
                — {catequese.commentary.signature}
              </p>
            )}
          </div>
        </aside>
      )}

      {/* ============ RODAPÉ COM FONTE ============ */}
      <footer className={styles.readerFooter}>
        <p className={styles.fonteInfo}>
          Fonte: {catequese.fonte}
        </p>
      </footer>
    </div>
  );
}
