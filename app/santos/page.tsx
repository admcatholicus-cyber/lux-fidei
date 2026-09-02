'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import '../home.css'; // 👈 CSS institucional (header, menu, sidebar, footer, modal)
import styles from './santos.module.css';

import {
  SANTOS,
  getContagemPorCategoria,
  getTodasCategorias,
  getSantosComBiografia,
} from './_lib/registry';
import { normalizar } from './_lib/slug';
import { useHistorico } from './_hooks/useHistorico';
import { useFinalizados } from './_hooks/useFinalizados';
import { useDebounce } from './_hooks/useDebounce';

import CategoriaChips from './_components/grid/CategoriaChips';
import SearchBar from './_components/grid/SearchBar';
import HistoricoScroll from './_components/grid/HistoricoScroll';
import SantoCard from './_components/grid/SantoCard';

import type { Categoria } from './_types/santo';

export default function SantosPage() {
  /* ═══════════════════════════════════════════════
     ESTADOS DA UI INSTITUCIONAL (menu + modal)
     ═══════════════════════════════════════════════ */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'sobre' | 'contato' | 'privacidade'>('sobre');

  /* ═══════════════════════════════════════════════
     ESTADOS DA PÁGINA DE SANTOS
     ═══════════════════════════════════════════════ */
  const [pesquisa, setPesquisa] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria | null>(null);

  const pesquisaDebounced = useDebounce(pesquisa, 200);

  const { historico, limparHistorico, carregado: histCarregado } = useHistorico();
  const { isFinalizado, carregado: finCarregado } = useFinalizados();

  const contagem = useMemo(() => getContagemPorCategoria(), []);
  const categorias = useMemo(() => getTodasCategorias(), []);
  const totalComBio = useMemo(() => getSantosComBiografia().length, []);

  const santosFiltrados = useMemo(() => {
    const termo = normalizar(pesquisaDebounced);
    return SANTOS.filter((s) => {
      const matchTexto = !termo || normalizar(s.nome).includes(termo);
      const matchCat = !categoriaAtiva || s.categorias.includes(categoriaAtiva);
      return matchTexto && matchCat;
    });
  }, [pesquisaDebounced, categoriaAtiva]);

  const progressoMap = useMemo(() => {
    const map: Record<string, number> = {};
    historico.forEach((h) => {
      map[h.slug] = h.lido ? 100 : h.progresso;
    });
    return map;
  }, [historico]);

  const carregado = histCarregado && finCarregado;

  /* ═══════════════════════════════════════════════
     CONTEÚDO DO MODAL (sobre / contato / privacidade)
     ═══════════════════════════════════════════════ */
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
                  <p><strong>Dados pessoais:</strong> Nenhum dado pessoal identificável é coletado, vendido ou compartilhado. Mensagens enviadas por e-mail são usadas exclusivamente para responder ao remetente.</p>
                  <p><strong>Links externos:</strong> Este site pode conter links para terceiros. Não nos responsabilizamos pelas políticas de privacidade dessas páginas.</p>
                  <p>Dúvidas: <a href="mailto:comosercatolico@gmail.com">comosercatolico@gmail.com</a></p>`,
  };

  return (
    <div className="pagina-lux">
      {/* ═══════════════════════════════════════════════
          BOTÃO INFO (Sobre / Contato / Privacidade)
          ═══════════════════════════════════════════════ */}
      <button
        className="info-btn"
        onClick={() => setIsModalOpen(true)}
        title="Sobre, Contato e Privacidade"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      </button>

      {/* ═══════════════════════════════════════════════
          MODAL INSTITUCIONAL
          ═══════════════════════════════════════════════ */}
      <div
        className={`modal-overlay ${isModalOpen ? 'aberto' : ''}`}
        onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}
      >
        <div className="modal-box">
          <div className="modal-header">
            <h3>Lux Fidei</h3>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
          </div>
          <div className="modal-nav">
            <button
              className={`modal-nav-btn ${activeTab === 'sobre' ? 'ativo' : ''}`}
              onClick={() => setActiveTab('sobre')}
            >
              Sobre
            </button>
            <button
              className={`modal-nav-btn ${activeTab === 'contato' ? 'ativo' : ''}`}
              onClick={() => setActiveTab('contato')}
            >
              Contato
            </button>
            <button
              className={`modal-nav-btn ${activeTab === 'privacidade' ? 'ativo' : ''}`}
              onClick={() => setActiveTab('privacidade')}
            >
              Privacidade
            </button>
          </div>
          <div
            className="modal-content"
            dangerouslySetInnerHTML={{ __html: conteudoAbas[activeTab] }}
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          SIDEBAR (menu mobile)
          ═══════════════════════════════════════════════ */}
      <div
        className={`overlay ${isMenuOpen ? 'ativo' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <div className="sidebar" style={{ left: isMenuOpen ? '0' : '-290px' }}>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          &times; &nbsp;Fechar
        </a>
        <Link href="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
        <Link href="/liturgia_diaria" onClick={() => setIsMenuOpen(false)}>Liturgia Diaria</Link>
        <Link href="/santos" onClick={() => setIsMenuOpen(false)}>Santos</Link>
        <Link href="/biblioteca" onClick={() => setIsMenuOpen(false)}>Biblioteca</Link>
        <Link href="/estudos" onClick={() => setIsMenuOpen(false)}>Estudos</Link>
        <Link href="/jogos" onClick={() => setIsMenuOpen(false)}>Jogos</Link>
      </div>

      {/* ═══════════════════════════════════════════════
          HEADER
          ═══════════════════════════════════════════════ */}
      <header>
        <span className="menu-btn" onClick={() => setIsMenuOpen(true)}>
          &equiv;
        </span>
        <p className="header-pretitle">
          &#10011; &nbsp; In Nomine Domini &nbsp; &#10011;
        </p>
        <h1>Lux Fidei</h1>
        <p className="header-sub">Luz da Fé Católica</p>
      </header>

      {/* ═══════════════════════════════════════════════
          NAV HORIZONTAL
          ═══════════════════════════════════════════════ */}
      <nav className="menu">
        <Link href="/" className="menu-item">Inicio</Link>
        <Link href="/liturgia_diaria" className="menu-item">Liturgia Diaria</Link>
        <Link href="/santos" className="menu-item active">Santos</Link>
        <Link href="/biblioteca" className="menu-item">Biblioteca</Link>
        <Link href="/estudos" className="menu-item">Estudos</Link>
        <Link href="/jogos" className="menu-item">Jogos</Link>
        <span className="menu-indicator"></span>
      </nav>

      {/* ═══════════════════════════════════════════════
          CONTEÚDO PRINCIPAL — GRID DE SANTOS
          (main tem className, então NÃO herda o CSS institucional)
          ═══════════════════════════════════════════════ */}
      <main className={styles.page}>
        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroOrnamento} aria-hidden="true">✦ ✦ ✦</div>
          <h1 className={styles.heroTitulo}>Santos da Igreja</h1>
          <p className={styles.heroSubtitulo}>
            A Igreja Católica reconhece ao longo dos séculos homens e mulheres que
            viveram de maneira heroica a fé cristã. Conheça a vida, os milagres e
            os ensinamentos de cada santo.
          </p>

          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <span className={styles.statNumero}>{SANTOS.length}</span>
              <span className={styles.statLabel}>Santos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumero}>{totalComBio}</span>
              <span className={styles.statLabel}>Biografias</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumero}>{categorias.length}</span>
              <span className={styles.statLabel}>Categorias</span>
            </div>
          </div>
        </section>

        {/* FILTROS */}
        <CategoriaChips
          categorias={categorias}
          contagem={contagem}
          totalGeral={SANTOS.length}
          ativa={categoriaAtiva}
          onChange={setCategoriaAtiva}
        />

        {/* PESQUISA */}
        <SearchBar
          valor={pesquisa}
          onChange={setPesquisa}
        />

        {/* HISTÓRICO */}
        {carregado && historico.length > 0 && (
          <HistoricoScroll historico={historico} onLimpar={limparHistorico} />
        )}

        {/* GRID */}
        <section className={styles.grid} aria-label="Lista de santos">
          {santosFiltrados.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcone} aria-hidden="true">✦</div>
              <h2 className={styles.emptyTitulo}>Nenhum santo encontrado</h2>
              <p className={styles.emptyTexto}>
                Tente ajustar sua pesquisa ou remover os filtros.
              </p>
            </div>
          ) : (
            santosFiltrados.map((santo, i) => (
              <SantoCard
                key={santo.slug}
                santo={santo}
                progresso={progressoMap[santo.slug] ?? 0}
                concluido={isFinalizado(santo.slug)}
                delay={Math.min(i * 40, 400)}
              />
            ))
          )}
        </section>
      </main>

      {/* ═══════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════ */}
      <footer>
        &copy; 2026 &ndash; Lux Fidei &nbsp;&middot;&nbsp; Omnia ad maiorem Dei gloriam
      </footer>
    </div>
  );
}