// app/estudos/page.tsx
'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Footer from '../_components/layout/Footer';
import styles from './estudos.module.css';
import searchIndex from './search-index.json';
import '../home.css';

/* ================================================================
   TYPES
   ================================================================ */
interface Study {
  id: string;
  title: string;
  description: string;
  category: string;
  icon?: string;
  link: string;
  highlight?: string;
}

interface IndexedSection {
  heading: string | null;
  anchor: string | null;
  text: string;
}

interface IndexedStudy {
  id: string;
  title: string;
  route: string;
  description: string;
  category: string;
  content: string;
  sections: IndexedSection[];
  wordCount: number;
  indexedAt: string;
}

/* ================================================================
   DATA (cards visíveis)
   ================================================================ */
const STUDIES_DATA: Study[] = [
  {
    id: 'datas-comemorativas-corpus-christi',
    title: 'Corpus Christi',
    description: 'Solenidade do Santíssimo Corpo e Sangue de Cristo — história, teologia, liturgia, tapetes, procissão e milagres eucarísticos.',
    category: 'sacramentos',
    icon: '/estudos/cards/datas-comemorativas/Corpus-Christi.png',
    link: '/estudos/datas-comemorativas/Corpus-Christi',
    highlight: '🔥 Desafio interativo incluso',
  },
  {
    id: 'concilios',
    title: 'Concílios Ecumênicos',
    description: 'Os 21 concílios reconhecidos pela Igreja Católica — história, decisões e impacto.',
    category: 'igreja',
    icon: '/estudos/cards/concilios/concilio.png',
    link: '/estudos/concilios',
  },
  {
    id: 'hierarquia',
    title: 'As Vocações da Igreja',
    description: 'Da cátedra de Pedro aos fiéis leigos — conheça cada vocação, cargo e ministério que compõe o Corpo de Cristo.',
    category: 'igreja',
    icon: '/estudos/cards/posicoes-li-cle/hierarquia.png',
    link: '/estudos/hierarquia',
  },
  {
    id: 'calendario',
    title: 'Calendário Litúrgico',
    description: 'Conheça os tempos e festas do ano litúrgico católico — do Advento ao Tempo Comum.',
    category: 'igreja',
    icon: '/estudos/cards/calendario/calen-liturgico.png',
    link: '/estudos/calendario',
  },
  {
    id: 'mandamentos',
    title: 'Os 10 Mandamentos',
    description: 'Você realmente conhece os 10 Mandamentos? Descubra o que Deus pediu — e o que a maioria nunca te contou.',
    category: 'catequese',
    icon: '/estudos/cards/mandamentos/10-mandamentos.png',
    link: '/estudos/mandamentos/dez-mandamentos',
    highlight: '🔥 Desafio interativo incluso',
  },
  {
    id: 'mandamentos-igreja',
    title: 'Os Preceitos da Igreja',
    description: 'Conheça os preceitos de nossa mãe Igreja — o que deveria estar gravado em todo católico.',
    category: 'catequese',
    icon: '/estudos/cards/mandamentos/preceitos-da-igreja.png',
    link: '/estudos/mandamentos/mandamentos-igreja',
    highlight: '🔥 Desafio interativo incluso',
  },
  {
    id: 'sacramentos-batismo',
    title: 'O Batismo',
    description: 'O primeiro sacramento da iniciação cristã — teologia profunda, história, rito e efeitos espirituais explicados com clareza.',
    category: 'sacramentos',
    icon: '/estudos/cards/sacramentos/batismo.png',
    link: '/estudos/sacramentos/batismo',
    highlight: '📖 Estudo completo · FAQ · Fontes',
  },
  {
    id: 'sacramentos-primeira-comunhao',
    title: 'Primeira Comunhão',
    description: 'O primeiro encontro consciente com Jesus na Eucaristia — doutrina, história, orações, dúvidas e vida eucarística explicados com profundidade.',
    category: 'sacramentos',
    icon: '/estudos/cards/sacramentos/primeira-comunhao.png',
    link: '/estudos/sacramentos/primeira-comunhao',
    highlight: '📖 Estudo completo · Orações · FAQ',
  },
  {
    id: 'sacramentos-crisma',
    title: 'Crisma',
    description: 'O sacramento da confirmação — aprofunde-se na teologia, história, rito e os dons do Espírito Santo que fortalecem o cristão.',
    category: 'sacramentos',
    icon: '/estudos/cards/sacramentos/crisma.png',
    link: '/estudos/sacramentos/crisma',
    highlight: '📖 Estudo completo · Dons · FAQ',
  },
  {
    id: 'carisma-santidade',
    title: 'Santidade',
    description: 'O chamado universal à santidade — descubra o que a Igreja ensina sobre a vida santa, os carismas e como cada batizado é chamado à perfeição cristã.',
    category: 'moral',
    icon: '/estudos/cards/carisma/santidade.png',
    link: '/estudos/carisma/santidade',
    highlight: '📖 Estudo completo · Carismas · FAQ',
  },
];

const CATEGORIES = ['todos', 'catequese', 'sacramentos', 'moral', 'igreja', 'teologia', 'basico'];
const INDEXED_STUDIES = searchIndex as IndexedStudy[];

/* ================================================================
   UTILS
   ================================================================ */

function normalize(text: string): string {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function tokenize(query: string): string[] {
  return normalize(query).split(/\s+/).filter((t) => t.length > 0);
}

function findIndexed(study: Study): IndexedStudy | undefined {
  return INDEXED_STUDIES.find((i) => i.route === study.link || i.id === study.id);
}

function getRelevanceScore(study: Study, query: string): number {
  const tokens = tokenize(query);
  if (tokens.length === 0) return 0;

  const indexed = findIndexed(study);
  const fields = [
    { text: normalize(study.title), weight: 100 },
    { text: normalize(study.category), weight: 40 },
    { text: normalize(study.description), weight: 30 },
    { text: normalize(study.highlight || ''), weight: 20 },
    { text: normalize(indexed?.content || ''), weight: 60 },
    { text: normalize(indexed?.title || ''), weight: 90 },
  ];

  let totalScore = 0;
  let tokensMatched = 0;

  for (const token of tokens) {
    let bestScore = 0;
    let found = false;

    for (const field of fields) {
      if (!field.text) continue;

      if (field.text === token) { bestScore = Math.max(bestScore, field.weight * 2); found = true; }
      else if (field.text.startsWith(token)) { bestScore = Math.max(bestScore, field.weight * 1.5); found = true; }
      else if (new RegExp(`\\b${token}\\b`).test(field.text)) {
        bestScore = Math.max(bestScore, field.weight * 1.3);
        found = true;
        if (field.weight >= 60) {
          const matches = field.text.split(token).length - 1;
          bestScore += Math.min(matches * 4, 30);
        }
      } else if (field.text.includes(token)) {
        bestScore = Math.max(bestScore, field.weight * 0.8);
        found = true;
      }
    }

    if (found) { tokensMatched++; totalScore += bestScore; }
  }

  if (tokensMatched < tokens.length) return 0;
  return totalScore;
}

function getMatchInfo(study: Study, query: string): { snippet: string; anchor: string | null } | null {
  const tokens = tokenize(query);
  if (tokens.length === 0) return null;

  const inTitleOrDesc = tokens.some(
    (t) => normalize(study.title).includes(t) || normalize(study.description).includes(t)
  );
  if (inTitleOrDesc) return null;

  const indexed = findIndexed(study);
  if (!indexed) return null;

  for (const section of indexed.sections || []) {
    const sectionNorm = normalize(section.text);
    for (const token of tokens) {
      const idx = sectionNorm.indexOf(token);
      if (idx !== -1) {
        const start = Math.max(0, idx - 50);
        const end = Math.min(section.text.length, idx + token.length + 80);
        let snippet = section.text.slice(start, end).replace(/\s+/g, ' ').trim();
        if (start > 0) snippet = '...' + snippet;
        if (end < section.text.length) snippet = snippet + '...';
        return { snippet, anchor: section.anchor };
      }
    }
  }

  if (indexed.content) {
    const contentNorm = normalize(indexed.content);
    for (const token of tokens) {
      const idx = contentNorm.indexOf(token);
      if (idx !== -1) {
        const start = Math.max(0, idx - 50);
        const end = Math.min(indexed.content.length, idx + token.length + 80);
        let snippet = indexed.content.slice(start, end).replace(/\s+/g, ' ').trim();
        if (start > 0) snippet = '...' + snippet;
        if (end < indexed.content.length) snippet = snippet + '...';
        return { snippet, anchor: null };
      }
    }
  }

  return null;
}

function buildLinkWithHighlight(study: Study, query: string): string {
  const tokens = tokenize(query);
  if (tokens.length === 0) return study.link;

  const info = getMatchInfo(study, query);
  const highlightParam = encodeURIComponent(query.trim());

  let url = study.link;
  if (info?.anchor) {
    url += `#${info.anchor}`;
  }
  url += (url.includes('?') ? '&' : '?') + `highlight=${highlightParam}`;

  return url;
}

function highlightText(text: string, query: string, className: string): React.ReactNode {
  const tokens = tokenize(query);
  if (tokens.length === 0) return text;

  const normalizedText = normalize(text);
  const ranges: Array<{ start: number; end: number }> = [];

  for (const token of tokens) {
    let searchFrom = 0;
    while (searchFrom < normalizedText.length) {
      const idx = normalizedText.indexOf(token, searchFrom);
      if (idx === -1) break;
      ranges.push({ start: idx, end: idx + token.length });
      searchFrom = idx + token.length;
    }
  }

  if (ranges.length === 0) return text;
  ranges.sort((a, b) => a.start - b.start);
  const merged: Array<{ start: number; end: number }> = [];
  for (const r of ranges) {
    const last = merged[merged.length - 1];
    if (last && r.start <= last.end) last.end = Math.max(last.end, r.end);
    else merged.push({ ...r });
  }

  const parts: React.ReactNode[] = [];
  let cursor = 0;
  merged.forEach((r, i) => {
    if (r.start > cursor) parts.push(text.slice(cursor, r.start));
    parts.push(<span key={`m-${i}`} className={className}>{text.slice(r.start, r.end)}</span>);
    cursor = r.end;
  });
  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}

function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

/* ================================================================
   COMPONENT
   ================================================================ */
export default function EstudosPage() {
  const [activeCat, setActiveCat] = useState('todos');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  // ESTADOS DO HEADER
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'sobre' | 'contato' | 'privacidade'>('sobre');

  const debouncedQuery = useDebounce(searchQuery, 180);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const conteudoAbas = {
    sobre: `<h2>Sobre o Lux Fidei</h2>
            <p>O <em>Lux Fidei</em> — Luz da Fé — é um projeto dedicado ao estudo, apresentação e à defesa da fé católica. Nasceu da convicção de que a tradição cristã precisa ser conhecida em sua profundidade para ser vivida com integridade.</p>
            <p>Muitos equívocos em torno do catolicismo derivam não de má vontade, mas de ignorância — às vezes até entre os próprios fiéis. Este espaço busca reunir recursos sólidos: liturgia, hagiografia, textos doutrinais e apologética, apresentados com fidelidade ao Magistério e à Tradição Apostólica.</p>
            <p>Não há aqui agendas políticas, modismos ou concessões ao espírito do tempo. Há, isso sim, o desejo sincero de que cada visitante se aproxime um pouco mais da verdade.</p>
            <p class="epigraph-modal">"A fé é mais certa do que qualquer outra espécie de conhecimento, porque está fundada na Palavra de Deus." — Santo Tomás de Aquino</p>`,
    contato: `<h2>Contato</h2>
              <p>Para sugestões de conteúdo, correções, colaborações ou dúvidas de fé, entre em contato pelo endereço abaixo. Toda mensagem é lida com atenção.</p>
              <p>✉ E-mail: <a href="mailto:comosercatolico@gmail.com">comosercatolico@gmail.com</a></p>
              <p>Nas redes sociais, o projeto pode ser acompanhado como <strong>lux_.fidei</strong>.</p>
              <p>Este é um projeto voluntário, movido exclusivamente pela fé e pelo desejo de servir. Sugestões de conteúdo, correções e contribuições intelectuais são sempre bem-vindas.</p>
              <p class="epigraph-modal">"Ajudai-vos uns aos outros a carregar os fardos: assim cumprireis a lei de Cristo." — Gálatas 6, 2</p>`,
    privacidade: `<h2>Política de Privacidade</h2>
                  <p>O <em>Lux Fidei</em> respeita a privacidade de seus visitantes. Esta página descreve o tratamento de dados neste site.</p>
                  <p><strong>Análise de tráfego:</strong> Podem ser utilizadas ferramentas de análise anônima (como o Google Analytics), sem identificação individual dos visitantes.</p>
                  <p><strong>Publicidade:</strong> Este site utiliza o Google AdSense, que pode exibir anúncios com base em interesses do visitante. As preferências podem ser gerenciadas nas configurações do Google.</p>
                  <p><strong>Tratamento de Dados:</strong> O site não exige cadastro nem coleta dados pessoais identificáveis. Dados anônimos de navegação são processados por serviços parceiros (Google Analytics e Google AdSense) para estatísticas e veiculação de anúncios. Mensagens enviadas por e-mail são usadas exclusivamente para responder ao remetente.</p>
                  <p><strong>Links externos:</strong> Este site pode conter links para terceiros. Não nos responsabilizamos pelas políticas de privacidade dessas páginas.</p>
                  <p>Consulte a <a href="/privacidade" style="color:#8c6d3b">Política de Privacidade completa</a> para mais detalhes.</p>
                  <p>Dúvidas: <a href="mailto:comosercatolico@gmail.com">comosercatolico@gmail.com</a></p>`
  };

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('historico') || '[]');
      setHistory(saved);
    } catch { setHistory([]); }
  }, []);

  const addToHistory = useCallback((id: string) => {
    setHistory((prev) => {
      if (prev.includes(id)) return prev;
      const newHistory = [...prev, id];
      try {
        localStorage.setItem('historico', JSON.stringify(newHistory));
      } catch {}
      return newHistory;
    });
  }, []);

  const searchResults = useMemo(() => {
    if (!debouncedQuery.trim()) return [];
    return STUDIES_DATA.map((study) => ({
      study,
      score: getRelevanceScore(study, debouncedQuery),
      matchInfo: getMatchInfo(study, debouncedQuery),
    }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [debouncedQuery]);

  const filteredStudies = useMemo(() => {
    if (debouncedQuery.trim()) return searchResults.map((r) => r.study);
    if (activeCat === 'todos') return STUDIES_DATA;
    return STUDIES_DATA.filter((s) => s.category === activeCat);
  }, [activeCat, debouncedQuery, searchResults]);

  const isSearchActive = debouncedQuery.trim().length > 0;
  const showDropdown = isFocused && isSearchActive;

  useEffect(() => setActiveIdx(-1), [debouncedQuery]);

  // Navegação por teclado (Enter no input de busca)
  const navigateToStudy = useCallback((study: Study, useHighlight = false) => {
    addToHistory(study.id);
    setSearchQuery('');
    setIsFocused(false);
    const url = useHighlight ? buildLinkWithHighlight(study, debouncedQuery) : study.link;
    if (url) window.location.href = url;
  }, [addToHistory, debouncedQuery]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown || searchResults.length === 0) {
      if (e.key === 'Escape') { setIsFocused(false); inputRef.current?.blur(); }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIdx((p) => (p < searchResults.length - 1 ? p + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIdx((p) => (p > 0 ? p - 1 : searchResults.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIdx >= 0) navigateToStudy(searchResults[activeIdx].study, true);
        else if (searchResults.length > 0) navigateToStudy(searchResults[0].study, true);
        break;
      case 'Escape':
        setIsFocused(false); inputRef.current?.blur();
        break;
    }
  };

  useEffect(() => {
    if (activeIdx >= 0 && dropdownRef.current) {
      const items = dropdownRef.current.querySelectorAll(`.${styles.dropdownItem}`);
      items[activeIdx]?.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIdx]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        inputRef.current && !inputRef.current.contains(target) &&
        dropdownRef.current && !dropdownRef.current.contains(target)
      ) setIsFocused(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const clearSearch = () => {
    setSearchQuery(''); setIsFocused(false); inputRef.current?.focus();
  };

  return (
    <div className="pagina-lux">
      {/* BOTÃO INFO */}
      <button className="info-btn" onClick={() => setIsModalOpen(true)} title="Sobre, Contato e Privacidade">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      </button>

      {/* MODAL */}
      <div
        className={`modal-overlay ${isModalOpen ? 'aberto' : ''}`}
        onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
      >
        <div className="modal-box">
          <div className="modal-header">
            <h3>Lux Fidei</h3>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
          </div>
          <div className="modal-nav">
            <button className={`modal-nav-btn ${activeTab === 'sobre' ? 'ativo' : ''}`} onClick={() => setActiveTab('sobre')}>Sobre</button>
            <button className={`modal-nav-btn ${activeTab === 'contato' ? 'ativo' : ''}`} onClick={() => setActiveTab('contato')}>Contato</button>
            <button className={`modal-nav-btn ${activeTab === 'privacidade' ? 'ativo' : ''}`} onClick={() => setActiveTab('privacidade')}>Privacidade</button>
          </div>
          <div className="modal-content" dangerouslySetInnerHTML={{ __html: conteudoAbas[activeTab] }} />
        </div>
      </div>

      {/* OVERLAY + SIDEBAR */}
      <div
        className={`overlay ${isMenuOpen ? 'ativo' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div className="sidebar" style={{ left: isMenuOpen ? '0' : '-290px' }}>
        <a href="#" onClick={() => setIsMenuOpen(false)}>&times; &nbsp;Fechar</a>
        <Link href="/">Inicio</Link>
        <Link href="/liturgia_diaria">Liturgia Diaria</Link>
        <Link href="/santos">Santos</Link>
        <Link href="/biblioteca">Biblioteca</Link>
        <Link href="/estudos">Estudos</Link>
        <Link href="/jogos">Jogos</Link>
      </div>

      {/* HEADER */}
      <header>
        <span className="menu-btn" onClick={() => setIsMenuOpen(true)}>&equiv;</span>
        <p className="header-pretitle">&#10011; &nbsp; In Nomine Domini &nbsp; &#10011;</p>
        <h1>Lux Fidei</h1>
        <p className="header-sub">Luz da Fé Católica</p>
      </header>

      <nav className="menu">
        <Link href="/" className="menu-item">Início</Link>
        <Link href="/liturgia_diaria" className="menu-item">Liturgia Diária</Link>
        <Link href="/santos" className="menu-item">Santos</Link>
        <Link href="/biblioteca" className="menu-item">Biblioteca</Link>
        <Link href="/estudos" className="menu-item active">Estudos</Link>
        <Link href="/jogos" className="menu-item">Jogos</Link>
        <span className="menu-indicator"></span>
      </nav>

      <section className={styles.estudosHeader}>
      
        <h2>Centro de Estudos da Fé Católica</h2>
        <p>Aqui estão organizados ensinamentos fundamentais da fé católica, desde a catequese básica até temas profundos de teologia.</p>
      </section>

      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
         <span className={styles.searchIcon}>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
</span>
          <input
            ref={inputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Pesquise qualquer palavra dentro dos estudos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
          {searchQuery && (
            <button className={styles.searchClear} onClick={clearSearch} type="button">✕</button>
          )}

          {showDropdown && (
            <div ref={dropdownRef} className={styles.searchDropdown} role="listbox">
              {searchResults.length === 0 ? (
                <div className={styles.dropdownEmpty}>
                  Nenhum resultado para <strong>&quot;{searchQuery}&quot;</strong>
                </div>
              ) : (
                searchResults.map(({ study, matchInfo }, index) => {
                  const href = buildLinkWithHighlight(study, searchQuery);
                  return (
                    <Link
                      key={study.id}
                      href={href}
                      className={`${styles.dropdownItem} ${index === activeIdx ? styles.dropdownItemActive : ''}`}
                      onClick={() => {
                        addToHistory(study.id);
                        setSearchQuery('');
                        setIsFocused(false);
                      }}
                      onMouseEnter={() => setActiveIdx(index)}
                      role="option"
                      prefetch={false}
                    >
                      {study.icon ? (
                        <img src={study.icon.trim()} alt="" className={styles.dropdownIcon} />
                      ) : (
                        <div className={styles.dropdownIconFallback}>📖</div>
                      )}
                      <div className={styles.dropdownInfo}>
                        <div className={styles.dropdownTitle}>
                          {highlightText(study.title, searchQuery, styles.searchMatch)}
                        </div>
                        <div className={styles.dropdownDesc}>
                          {matchInfo ? (
                            <>
                              <em style={{ color: '#c9a84c', fontWeight: 600 }}>↳ </em>
                              {highlightText(matchInfo.snippet, searchQuery, styles.searchMatch)}
                            </>
                          ) : (
                            highlightText(study.description, searchQuery, styles.searchMatch)
                          )}
                        </div>
                      </div>
                      <span className={styles.dropdownCategory}>{study.category}</span>
                    </Link>
                  );
                })
              )}
            </div>
          )}
        </div>

        {isSearchActive && (
          <div className={`${styles.searchStats} ${searchResults.length > 0 ? styles.searchStatsActive : ''}`}>
            {searchResults.length > 0
              ? `${searchResults.length} estudo${searchResults.length > 1 ? 's' : ''} encontrado${searchResults.length > 1 ? 's' : ''} para "${searchQuery}"`
              : `Nenhum resultado para "${searchQuery}"`}
          </div>
        )}
      </div>

      {showDropdown && <div className={styles.searchOverlay} onClick={() => setIsFocused(false)} />}

      {!isSearchActive && (
        <div className={styles.categorias}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.categoriaBtn} ${activeCat === cat ? styles.categoriaBtnActive : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat === 'moral' ? 'Moral Cristã' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* ================================================================
          GRID DE ESTUDOS — Agora com <Link> (SEO-friendly)
          Cada card é um link HTML real que o Google consegue rastrear.
          ================================================================ */}
      <section className={styles.estudosGrid}>
        {filteredStudies.map((estudo) => {
          const matchInfo = isSearchActive ? getMatchInfo(estudo, searchQuery) : null;
          const href = isSearchActive
            ? buildLinkWithHighlight(estudo, searchQuery)
            : estudo.link;

          return (
            <Link
              key={estudo.id}
              href={href}
              className={styles.estudoCard}
              onClick={() => addToHistory(estudo.id)}
              prefetch={false}
              aria-label={`Estudo: ${estudo.title}`}
            >
              <h3>
                {estudo.icon && <img src={estudo.icon.trim()} alt="" className={styles.cardIcone} />}
                {isSearchActive ? highlightText(estudo.title, searchQuery, styles.searchMatch) : estudo.title}
              </h3>
              <p>
                {isSearchActive ? highlightText(estudo.description, searchQuery, styles.searchMatch) : estudo.description}
              </p>

              {matchInfo && (
                <p style={{
                  fontSize: '13px', color: '#8b6f3d', fontStyle: 'italic',
                  background: '#fdf6e8', padding: '8px 12px', borderRadius: '8px',
                  borderLeft: '3px solid #d4b06a', margin: '8px 0',
                }}>
                  🔎 {highlightText(matchInfo.snippet, searchQuery, styles.searchMatch)}
                </p>
              )}

              {estudo.highlight && (
                <span className={styles.highlight}>
                  {isSearchActive ? highlightText(estudo.highlight, searchQuery, styles.searchMatch) : estudo.highlight}
                </span>
              )}
            </Link>
          );
        })}

        {filteredStudies.length === 0 && isSearchActive && (
          <div className={styles.noResults}>
            <h4>Nenhum estudo encontrado 😔</h4>
            <p>Tente outra palavra ou verifique a ortografia</p>
          </div>
        )}
      </section>

      {/* ================================================================
          BLOCO DE LINKS SEO — Invisível ao usuário, mas visível ao Google
          Reforça a hierarquia interna: todas as URLs de estudos aparecem
          como links reais na página /estudos.
          ================================================================ */}
      <nav aria-label="Todos os estudos" className={styles.seoLinks}>
        <h2 className={styles.seoLinksTitle}>Todos os Estudos</h2>
        <ul>
          {STUDIES_DATA.map((estudo) => (
            <li key={`seo-${estudo.id}`}>
              <Link href={estudo.link}>{estudo.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Footer />
    </div>
  );
}