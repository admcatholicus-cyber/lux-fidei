'use client';

import Link from 'next/link';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Reader.module.css';
import type { BookInfo } from '../data/types';

type NavLink = { href: string; label: string } | null;

type Props = {
  book: BookInfo;
  pageNumber: number;
  totalPages: number;
  paragraphs: string[];
  pdfPage: number;
  prev: NavLink;
  next: NavLink;
  allBooks: BookInfo[];
};

const FONT_SIZES = [16, 18, 20, 22] as const;
type FontSize = (typeof FONT_SIZES)[number];
const THEMES = ['parchment', 'sepia', 'night'] as const;
type Theme = (typeof THEMES)[number];

const LS_FONT = 'biblia-vulgata:font';
const LS_THEME = 'biblia-vulgata:theme';
const LS_PANEL = 'biblia-vulgata:panel';

export default function PageReader({
  book,
  pageNumber,
  totalPages,
  paragraphs,
  pdfPage,
  prev,
  next,
  allBooks,
}: Props) {
  const router = useRouter();
  const [fontSize, setFontSize] = useState<FontSize>(18);
  const [theme, setTheme] = useState<Theme>('parchment');
  const [showSettings, setShowSettings] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [progress, setProgress] = useState(0);
  const articleRef = useRef<HTMLElement | null>(null);

  // Hydrate preferences
  useEffect(() => {
    try {
      const f = Number(localStorage.getItem(LS_FONT));
      if (FONT_SIZES.includes(f as FontSize)) setFontSize(f as FontSize);
      const t = localStorage.getItem(LS_THEME) as Theme | null;
      if (t && THEMES.includes(t)) setTheme(t);
      const p = localStorage.getItem(LS_PANEL);
      if (p === '1') setShowPanel(true);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_FONT, String(fontSize));
    } catch {}
  }, [fontSize]);
  useEffect(() => {
    try {
      localStorage.setItem(LS_THEME, theme);
    } catch {}
  }, [theme]);
  useEffect(() => {
    try {
      localStorage.setItem(LS_PANEL, showPanel ? '1' : '0');
    } catch {}
  }, [showPanel]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [book.slug, pageNumber]);

  // Progress bar
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowLeft' || e.key === 'j' || e.key === 'J') {
        if (prev) router.push(prev.href);
      } else if (e.key === 'ArrowRight' || e.key === 'k' || e.key === 'K') {
        if (next) router.push(next.href);
      } else if (e.key === 't' || e.key === 'T') {
        setShowPanel((v) => !v);
      } else if (e.key === 's' || e.key === 'S') {
        setShowSettings((v) => !v);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        setFontSize(FONT_SIZES[Number(e.key) - 1]);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prev, next, router]);

  // Touch swipe navigation
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }, []);
  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current == null) return;
      const dx = (e.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(dx) < 80) return;
      if (dx < 0 && next) router.push(next.href);
      if (dx > 0 && prev) router.push(prev.href);
    },
    [prev, next, router],
  );

  const groups = useMemo(() => {
    const at = allBooks.filter((b) => b.testament === 'AT');
    const nt = allBooks.filter((b) => b.testament === 'NT');
    return { at, nt };
  }, [allBooks]);

  return (
    <div className={`${styles.reader} ${styles[`theme-${theme}`]}`} data-book={book.slug}>
      <div className={styles.progress}>
        <div className={styles.progressBar} style={{ width: `${progress * 100}%` }} />
      </div>

      <div className={styles.topbar}>
        <Link href="/biblioteca/biblia-vulgata" className={styles.topLink}>
          ← Índice
        </Link>
        <div className={styles.topCenter}>
          <button
            type="button"
            className={styles.crumb}
            onClick={() => setShowPanel((v) => !v)}
            aria-expanded={showPanel}
          >
            <span className={styles.crumbBook}>{book.title}</span>
            <span className={styles.crumbPage}>
              pág. {pageNumber} <span className={styles.mute}>/ {totalPages}</span>
            </span>
          </button>
        </div>
        <button
          type="button"
          className={styles.settingsBtn}
          onClick={() => setShowSettings((v) => !v)}
          aria-expanded={showSettings}
          aria-label="Ajustes de leitura"
        >
          Aa
        </button>
      </div>

      {showSettings && (
        <div className={styles.settingsPop} role="dialog">
          <div className={styles.settingsGroup}>
            <span className={styles.settingsLabel}>Fonte</span>
            <div className={styles.fontRow}>
              {FONT_SIZES.map((f, i) => (
                <button
                  key={f}
                  type="button"
                  className={f === fontSize ? styles.fontOn : styles.fontOff}
                  onClick={() => setFontSize(f)}
                  aria-pressed={f === fontSize}
                >
                  A<sup>{i + 1}</sup>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.settingsGroup}>
            <span className={styles.settingsLabel}>Tema</span>
            <div className={styles.themeRow}>
              {THEMES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={t === theme ? styles.themeOn : styles.themeOff}
                  onClick={() => setTheme(t)}
                  aria-pressed={t === theme}
                >
                  {t === 'parchment' ? 'Pergaminho' : t === 'sepia' ? 'Sépia' : 'Noite'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <aside className={`${styles.panel} ${showPanel ? styles.panelOpen : ''}`} aria-hidden={!showPanel}>
        <header className={styles.panelHead}>
          <h2>Sumário</h2>
          <button
            type="button"
            className={styles.panelClose}
            onClick={() => setShowPanel(false)}
            aria-label="Fechar sumário"
          >
            ×
          </button>
        </header>
        <div className={styles.panelBody}>
          <h3>Antigo Testamento</h3>
          <ol className={styles.panelList}>
            {groups.at.map((b) => (
              <li key={b.slug} className={b.slug === book.slug ? styles.panelActive : undefined}>
                <Link href={`/biblioteca/biblia-vulgata/${b.slug}/1`}>
                  <span className={styles.panelRoman}>{b.roman}</span>
                  <span className={styles.panelTitle}>{b.title}</span>
                  <span className={styles.panelCount}>{b.pageCount}</span>
                </Link>
              </li>
            ))}
          </ol>
          <h3>Novo Testamento</h3>
          <ol className={styles.panelList}>
            {groups.nt.map((b) => (
              <li key={b.slug} className={b.slug === book.slug ? styles.panelActive : undefined}>
                <Link href={`/biblioteca/biblia-vulgata/${b.slug}/1`}>
                  <span className={styles.panelRoman}>{b.roman}</span>
                  <span className={styles.panelTitle}>{b.title}</span>
                  <span className={styles.panelCount}>{b.pageCount}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </aside>

      <main
        className={styles.stage}
        style={{ fontSize: `${fontSize}px` }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <article ref={articleRef} className={styles.article}>
          <header className={styles.chapterHead}>
            <p className={styles.chapterEyebrow}>
              {book.roman} · {book.title}
            </p>
            <h1 className={styles.chapterTitle}>Página {pageNumber}</h1>
            <p className={styles.chapterSub}>
              <span>{pageNumber} de {totalPages}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.mute}>PDF pág. {pdfPage}</span>
            </p>
          </header>

          <div className={styles.body}>
            {paragraphs.map((p, i) => {
              const isHeading = /^[A-ZÀ-ÝÇ0-9\s.,:'"()–—-]+$/.test(p) && p.length < 90 && /[A-Z]/.test(p);
              const isVerse = /^\d{1,3}\.\s/.test(p);
              if (isHeading && !isVerse) {
                return (
                  <h2 key={i} className={styles.section}>
                    {p}
                  </h2>
                );
              }
              return (
                <p key={i} id={`p${i + 1}`} className={styles.paragraph} data-verse={isVerse ? '1' : '0'}>
                  {p}
                </p>
              );
            })}
          </div>

          <nav className={styles.pageNav} aria-label="Navegação de página">
            {prev ? (
              <Link href={prev.href} className={styles.pageNavPrev}>
                ← {prev.label}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={next.href} className={styles.pageNavNext}>
                {next.label} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </article>
      </main>
    </div>
  );
}
