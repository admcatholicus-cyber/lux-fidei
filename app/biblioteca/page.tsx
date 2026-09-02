// app/biblioteca/page.tsx
'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './biblioteca.module.css';
import '../home.css';
import {
  HistoricoItem,
  obterHistorico,
  removerLivroCompletamente,
  limparTudoHistorico,
} from './lib/historico';

export default function BibliotecaPage() {
  // ── ESTADOS DO HEADER ──
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'sobre' | 'contato' | 'privacidade'>('sobre');

  // ── HISTÓRICO ──
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);
  const [historicoCarregado, setHistoricoCarregado] = useState(false);

  // ── INDICADOR DO MENU ──
  const menuRef = useRef<HTMLElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  const updateIndicator = useCallback((el: HTMLElement | null) => {
    const indicator = indicatorRef.current;
    if (!indicator || !el || !el.parentElement) return;
    const menuRect = el.parentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    indicator.style.width = `${elRect.width}px`;
    indicator.style.left = `${elRect.left - menuRect.left}px`;
  }, []);

  useEffect(() => {
    const active = menuRef.current?.querySelector('.menu-item.active') as HTMLElement | null;
    if (active) updateIndicator(active);

    const handleResize = () => {
      const act = menuRef.current?.querySelector('.menu-item.active') as HTMLElement | null;
      if (act) updateIndicator(act);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [updateIndicator]);

  // ── CARREGAR HISTÓRICO ──
  useEffect(() => {
    setHistorico(obterHistorico());
    setHistoricoCarregado(true);
  }, []);

  // ── FUNÇÕES DO HISTÓRICO ──
  const removerDoHistorico = (id: string) => {
    removerLivroCompletamente(id);
    setHistorico((prev) => prev.filter((item) => item.id !== id));
  };

  const limparHistorico = () => {
    limparTudoHistorico();
    setHistorico([]);
  };

  const formatarTempo = (isoDate: string): string => {
    const agora = Date.now();
    const data = new Date(isoDate).getTime();
    const diff = agora - data;

    const minutos = Math.floor(diff / 60000);
    const horas = Math.floor(diff / 3600000);
    const dias = Math.floor(diff / 86400000);

    if (minutos < 1) return 'Agora mesmo';
    if (minutos < 60) return `Há ${minutos} min`;
    if (horas < 24) return `Há ${horas}h`;
    if (dias === 1) return 'Ontem';
    if (dias < 7) return `Há ${dias} dias`;
    if (dias < 30) return `Há ${Math.floor(dias / 7)} sem.`;
    return new Date(isoDate).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
    });
  };

  // ── CONTEÚDO DO MODAL ──
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
      {/* BOTÃO INFO */}
      <button
        className="info-btn"
        onClick={() => setIsModalOpen(true)}
        title="Sobre, Contato e Privacidade"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
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

      {/* OVERLAY + SIDEBAR */}
      <div
        className={`overlay ${isMenuOpen ? 'ativo' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div className="sidebar" style={{ left: isMenuOpen ? '0' : '-290px' }}>
        <a href="#" onClick={() => setIsMenuOpen(false)}>
          &times; &nbsp;Fechar
        </a>
        <Link href="/">Inicio</Link>
        <Link href="/liturgia_diaria">Liturgia Diaria</Link>
        <Link href="/santos">Santos</Link>
        <Link href="/biblioteca">Biblioteca</Link>
        <Link href="/estudos">Estudos</Link>
        <Link href="/jogos">Jogos</Link>
      </div>

      {/* HEADER */}
      <header>
        <span className="menu-btn" onClick={() => setIsMenuOpen(true)}>
          &equiv;
        </span>
        <p className="header-pretitle">&#10011; &nbsp; In Nomine Domini &nbsp; &#10011;</p>
        <h1>Lux Fidei</h1>
        <p className="header-sub">Luz da Fé Católica</p>
      </header>

      {/* MENU HORIZONTAL */}
      <nav className="menu" ref={menuRef}>
        <Link href="/" className="menu-item">Início</Link>
        <Link href="/liturgia_diaria" className="menu-item">Liturgia Diária</Link>
        <Link href="/santos" className="menu-item">Santos</Link>
        <Link href="/biblioteca" className="menu-item active">Biblioteca</Link>
        <Link href="/estudos" className="menu-item">Estudos</Link>
        <Link href="/jogos" className="menu-item">Jogos</Link>
        <span className="menu-indicator" ref={indicatorRef} />
      </nav>

      {/* ══════════════════════════════════════
         CONTEÚDO DA BIBLIOTECA
      ══════════════════════════════════════ */}
      <main id="inicio" className={styles.inicio}>
        {/* CABEÇALHO DA PÁGINA */}
        <div className={styles.paginaCabecalho}>
          <div className={styles.ornamentoTopo}>✦ ─────── ✦ ─────── ✦</div>
          <h2>Biblioteca</h2>
          <p className={styles.subtituloPagina}>
            Explore obras fundamentais da fé católica, reunidas para edificação
            do espírito e crescimento na verdade.
          </p>
          <div className={styles.ornamentoTopo}>✦ ─────── ✦ ─────── ✦</div>
        </div>

        {/* ════════════════════════════════════
           SEÇÃO: CONTINUAR LENDO / HISTÓRICO
        ════════════════════════════════════ */}
        {historicoCarregado && historico.length > 0 && (
          <section className={styles.continuarLendo}>
            <div className={styles.continuarCabecalho}>
              <div className={styles.continuarTituloGrupo}>
                <span className={styles.continuarIcone}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M21 3H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H3V5h18v14zM5 15h2V9H5v6zm4 0h2V7H9v8zm4 0h2v-4h-2v4zm4 0h2v-2h-2v2z" />
                  </svg>
                </span>
                <div>
                  <h3>Continuar Lendo</h3>
                  <p className={styles.continuarSubtitulo}>
                    Retome de onde parou
                  </p>
                </div>
              </div>

              <button
                className={styles.btnLimparHistorico}
                onClick={limparHistorico}
                title="Limpar todo o histórico"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
                Limpar histórico
              </button>
            </div>

            <div className={styles.continuarLista}>
              {historico.map((item, index) => {
                const temOpcoes =
                  Array.isArray(item.opcoesContinuar) && item.opcoesContinuar.length > 0;

                return (
                  <div
                    key={item.id}
                    className={`${styles.continuarCard} ${styles[`tema_${item.corTema}`]}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Botão remover */}
                    <button
                      className={styles.btnRemoverItem}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removerDoHistorico(item.id);
                      }}
                      title="Remover do histórico"
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      </svg>
                    </button>

                    {/* CORREÇÃO DO ANINHAMENTO DE <Link>: O contêiner interno virou DIV */}
                    <div className={styles.continuarLink}>
                      {/* ÁREA PRINCIPAL CLICÁVEL (Capa + Título) */}
                      <Link href={item.url} style={{ display: 'flex', gap: '1rem', textDecoration: 'none', color: 'inherit', flex: 1 }}>
                        {/* Capa mini */}
                        <div className={styles.continuarCapa}>
                          <img
                            src={item.capa}
                            alt={item.titulo}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              const fallback = (e.target as HTMLImageElement)
                                .nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div className={styles.continuarCapaFallback}>
                            <span>✝</span>
                          </div>
                        </div>

                        {/* Info */}
                        <div className={styles.continuarInfo}>
                          <div className={styles.continuarTopoInfo}>
                            <span className={styles.continuarCategoria}>
                              {item.categoria}
                            </span>
                            <span className={styles.continuarTempo}>
                              {formatarTempo(item.ultimoAcesso)}
                            </span>
                          </div>

                          <h4 className={styles.continuarTitulo}>{item.titulo}</h4>
                          <p className={styles.continuarAutor}>{item.autor}</p>

                          {/* Sempre mostra "onde parou" */}
                          <p className={styles.continuarCapitulo}>
                            <svg
                              viewBox="0 0 24 24"
                              width="13"
                              height="13"
                              fill="currentColor"
                              style={{ opacity: 0.6, flexShrink: 0 }}
                            >
                              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                            </svg>
                            {item.ultimoCapitulo}
                          </p>
                        </div>
                      </Link>

                      {/* SUB-LINKS: Múltiplas seções fora do Link pai para não dar erro de hidratação */}
                      {temOpcoes ? (
                        <div className={styles.opcoesContinuarLista}>
                          {item.opcoesContinuar!.map((opcao, idx) => (
                            <Link
                              key={opcao.id || idx}
                              href={opcao.url}
                              className={styles.opcaoContinuarBtn}
                            >
                              <span className={styles.opcaoContinuarLabel}>
                                {opcao.label}
                              </span>
                              {opcao.detalhe && (
                                <span className={styles.opcaoContinuarDetalhe}>
                                  {opcao.detalhe}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      ) : !item.ocultarProgresso ? (
                        <div className={styles.progressoContainer}>
                          <div className={styles.progressoBarra}>
                            <div
                              className={styles.progressoPreenchido}
                              style={{ width: `${item.progresso}%` }}
                            />
                          </div>
                          <span className={styles.progressoTexto}>
                            {item.progresso}%
                          </span>
                        </div>
                      ) : (
                        <div className={styles.ultimaLeituraBadge}>
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
                          </svg>
                          <span>Continuar leitura</span>
                        </div>
                      )}

                      {/* Seta */}
                      <Link href={item.url} className={styles.continuarSeta}>
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* DESTAQUE: SUMA TEOLÓGICA */}
        <div className={styles.destaquePrincipal}>
          <div className={styles.destaqueBadge}>✦ Disponível</div>

          <div className={styles.destaqueConteudo}>
            <div className={styles.destaqueCapas}>
              <div className={styles.capaLivro}>
                <img
                  src="/biblioteca/tomas-de-aquino/suma-teologica.png"
                  alt="Suma Teológica"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/200x280/e8dfd0/2c1f17?text=Suma+Teológica';
                  }}
                />
              </div>
              <div className={styles.capaReflexo} />
            </div>

            <div className={styles.destaqueInfo}>
              <div className={styles.etiquetaCategoria}>Teologia Escolástica</div>

              <h3>Suma Teológica</h3>
              <p className={styles.autor}>
                <span className={styles.ornamentoAutor}>✦</span>
                São Tomás de Aquino (1225–1274)
                <span className={styles.ornamentoAutor}>✦</span>
              </p>

              <div className={styles.divisorElegante} />

              <p className={styles.descricao}>
                A obra-prima da teologia católica. Uma síntese monumental da fé
                e da razão, organizada em mais de 3.000 artigos que abordam
                Deus, a criação, a moral, os sacramentos e o fim último do
                homem. Considerada a maior realização intelectual do pensamento
                cristão medieval.
              </p>

              <div className={styles.metaInfo}>
                <span><strong>Partes:</strong> I · I-II · II-II · III</span>
                <span><strong>Artigos:</strong> ~3.000</span>
                <span><strong>Tradução:</strong> Em andamento</span>
              </div>

              <Link href="" className={styles.btnDestaque}>
                <span className={styles.btnOrnamento}>✦</span>
                Acessar Suma Teológica
                <span className={styles.btnOrnamento}>✦</span>
              </Link>
            </div>
          </div>
        </div>

        {/* DESTAQUE: HISTÓRIA DE UMA ALMA */}
        <div className={`${styles.destaquePrincipal} ${styles.destaqueRosa}`}>
          <div className={`${styles.destaqueBadge} ${styles.badgeDisponivel}`}>
            ✦ Disponível
          </div>

          <div className={styles.destaqueConteudo}>
            <div className={styles.destaqueCapas}>
              <div className={styles.capaLivro}>
                <img
                  src="/biblioteca/cards/santa-terezinha/historia-de-uma-alma.png"
                  alt="História de uma Alma"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/200x280/f0e8f5/3d1a5c?text=História+de+uma+Alma';
                  }}
                />
              </div>
              <div className={styles.capaReflexo} />
            </div>

            <div className={styles.destaqueInfo}>
              <div className={`${styles.etiquetaCategoria} ${styles.etiquetaMistica}`}>
                Mística Carmelita
              </div>

              <h3>História de uma Alma</h3>
              <p className={styles.autor}>
                <span className={styles.ornamentoAutor}>✦</span>
                Santa Teresa do Menino Jesus (1873–1897)
                <span className={styles.ornamentoAutor}>✦</span>
              </p>

              <div className={`${styles.divisorElegante} ${styles.divisorRosa}`} />

              <p className={styles.descricao}>
                A autobiografia espiritual de Santa Teresinha de Lisieux,
                doutora da Igreja. Nesta obra tocante, ela revela o seu
                &ldquo;Pequeno Caminho&rdquo; de infância espiritual — uma via
                de confiança e amor total a Deus, acessível a todos os cristãos
                que desejam santidade na simplicidade do cotidiano.
              </p>

              <div className={styles.metaInfo}>
                <span><strong>Manuscritos:</strong> A · B · C</span>
                <span><strong>Capítulos:</strong> 11</span>
                <span><strong>Acesso:</strong> Gratuito</span>
              </div>

              <Link
                href="/biblioteca/historia-de-uma-alma"
                className={`${styles.btnDestaque} ${styles.btnRosa}`}
              >
                <span className={styles.btnOrnamento}>✦</span>
                Acessar História de uma Alma
                <span className={styles.btnOrnamento}>✦</span>
              </Link>
            </div>
          </div>
        </div>

        {/* DESTAQUE: ÚLTIMAS CONVERSAS */}
        <div className={`${styles.destaquePrincipal} ${styles.destaqueRosa}`}>
          <div className={`${styles.destaqueBadge} ${styles.badgeDisponivel}`}>
            ✦ Disponível
          </div>

          <div className={styles.destaqueConteudo}>
            <div className={styles.destaqueCapas}>
              <div className={styles.capaLivro}>
                <img
                  src="/biblioteca/cards/santa-terezinha/ultimas-conversas.png"
                  alt="Últimas Conversas"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/200x280/f0e8f5/3d1a5c?text=Últimas+Conversas';
                  }}
                />
              </div>
              <div className={styles.capaReflexo} />
            </div>

            <div className={styles.destaqueInfo}>
              <div className={`${styles.etiquetaCategoria} ${styles.etiquetaMistica}`}>
                Mística Carmelita
              </div>

              <h3>Ultimas Conversas</h3>
              <p className={styles.autor}>
                <span className={styles.ornamentoAutor}>✦</span>
                Santa Teresa do Menino Jesus (1873–1897)
                <span className={styles.ornamentoAutor}>✦</span>
              </p>

              <div className={`${styles.divisorElegante} ${styles.divisorRosa}`} />

              <p className={styles.descricao}>
                A autobiografia espiritual de Santa Teresinha de Lisieux,
                doutora da Igreja. Nesta obra tocante, ela revela o seu
                &ldquo;Pequeno Caminho&rdquo; de infância espiritual — uma via
                de confiança e amor total a Deus, acessível a todos os cristãos
                que desejam santidade na simplicidade do cotidiano.
              </p>

              <div className={styles.metaInfo}>
                <span><strong>Manuscritos:</strong> A · B · C</span>
                <span><strong>Capítulos:</strong> 11</span>
                <span><strong>Acesso:</strong> Gratuito</span>
              </div>

              <Link
                href="/biblioteca/ultimas-conversas"
                className={`${styles.btnDestaque} ${styles.btnRosa}`}
              >
                <span className={styles.btnOrnamento}>✦</span>
                Acessar Últimas Conversas
                <span className={styles.btnOrnamento}>✦</span>
              </Link>
            </div>
          </div>
        </div>

        {/* DESTAQUE: SÃO FILIPE NÉRI */}
        <div className={styles.destaquePrincipal}>
          <div className={styles.destaqueBadge}>✦ Disponível</div>

          <div className={styles.destaqueConteudo}>
            <div className={styles.destaqueCapas}>
              <div className={styles.capaLivro}>
                <img
                  src="/biblioteca/cards/sao-filipe-neri/capa.png"
                  alt="Escritos e Máximas de São Filipe Néri"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/200x280/faf5ea/b08a3c?text=Filipe+Néri';
                  }}
                />
              </div>
              <div className={styles.capaReflexo} />
            </div>

            <div className={styles.destaqueInfo}>
              <div className={styles.etiquetaCategoria}>Espiritualidade Oratoriana</div>

              <h3>Escritos e Máximas Espirituais</h3>
              <p className={styles.autor}>
                <span className={styles.ornamentoAutor}>✦</span>
                São Filipe Néri (1515–1595)
                <span className={styles.ornamentoAutor}>✦</span>
              </p>

              <div className={styles.divisorElegante} />

              <p className={styles.descricao}>
                Coletânea das cartas de direção espiritual, testamentos e as famosas
                366 máximas diárias preservadas pela tradição do Oratório. Uma via
                de santidade baseada na alegria, liberdade interior e caridade concreta.
              </p>

              <div className={styles.metaInfo}>
                <span><strong>Cartas:</strong> 34 (27 integrais)</span>
                <span><strong>Máximas:</strong> 366</span>
                <span><strong>Sonetos:</strong> 1 autêntico</span>
              </div>

              <Link href="/biblioteca/sao-filipe-neri" className={styles.btnDestaque}>
                <span className={styles.btnOrnamento}>✦</span>
                Acessar Escritos e Máximas
                <span className={styles.btnOrnamento}>✦</span>
              </Link>
            </div>
          </div>
        </div>

        {/* DESTAQUE: SÃO JOÃO MARIA VIANNEY */}
        <div className={styles.destaquePrincipal}>
          <div className={styles.destaqueBadge}>✦ Disponível</div>

          <div className={styles.destaqueConteudo}>
            <div className={styles.destaqueCapas}>
              <div className={styles.capaLivro}>
                <img
                  src="/biblioteca/cards/sao-joao-maria-vianney/capa.webp"
                  alt="Escritos e Pregações do Cura d'Ars"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/200x280/faf5ea/8b0000?text=Cura+d%27Ars';
                  }}
                />
              </div>
              <div className={styles.capaReflexo} />
            </div>

            <div className={styles.destaqueInfo}>
              <div className={styles.etiquetaCategoria}>Sacerdócio & Pastoral</div>

              <h3>Escritos & Pregações do Cura d&apos;Ars</h3>
              <p className={styles.autor}>
                <span className={styles.ornamentoAutor}>✦</span>
                São João Maria Vianney (1786–1859)
                <span className={styles.ornamentoAutor}>✦</span>
              </p>

              <div className={styles.divisorElegante} />

              <p className={styles.descricao}>
                O corpus pastoral do Padroeiro dos Párocos: sermões doutrinais
                sobre as verdades eternas, cartas de direção espiritual, orações
                e fórmulas de piedade. Uma escola de zelo sacerdotal, confissão
                e amor a Deus, nascida no confessionário de Ars.
              </p>

              <div className={styles.metaInfo}>
                <span><strong>Sermões:</strong> em expansão</span>
                <span><strong>Cartas:</strong> 20</span>
                <span><strong>Orações:</strong> disponíveis</span>
              </div>

              <Link
                href="/biblioteca/sao-joao-maria-vianney"
                className={styles.btnDestaque}
              >
                <span className={styles.btnOrnamento}>✦</span>
                Acessar Obras do Cura d&apos;Ars
                <span className={styles.btnOrnamento}>✦</span>
              </Link>
            </div>
          </div>
        </div>

        {/* DESTAQUE: BÍBLIA VULGATA */}
        <div className={`${styles.destaquePrincipal} ${styles.destaqueVulgata}`}>
          <div className={`${styles.destaqueBadge} ${styles.badgeDisponivel}`}>
            ✦ Disponível
          </div>

          <div className={styles.destaqueConteudo}>
            <div className={styles.destaqueCapas}>
              <div className={styles.capaLivro}>
                <img
                  src="/biblioteca/cards/biblia-vulgata.png"
                  alt="Bíblia Sagrada — Vulgata"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/200x280/1a2a1a/c8b070?text=Bíblia+Vulgata';
                  }}
                />
              </div>
              <div className={styles.capaReflexo} />
            </div>

            <div className={styles.destaqueInfo}>
              <div className={`${styles.etiquetaCategoria} ${styles.etiquetaVulgata}`}>
                Sagrada Escritura
              </div>

              <h3>Bíblia Sagrada</h3>
              <p className={styles.autor}>
                <span className={styles.ornamentoAutor}>✦</span>
                Tradução do Pe. António Pereira de Figueiredo (1725–1797)
                <span className={styles.ornamentoAutor}>✦</span>
              </p>

              <div className={`${styles.divisorElegante} ${styles.divisorVulgata}`} />

              <p className={styles.descricao}>
                A célebre tradução portuguesa da Vulgata Latina, realizada pelo
                Padre António Pereira de Figueiredo no século XVIII. Obra de
                referência na lusofonia católica por sua fidelidade ao texto de
                São Jerônimo e pela elegância do vernáculo. Contém o Antigo e o
                Novo Testamento completos, incluindo os livros deuterocanônicos,
                conforme o cânon estabelecido pelo Concílio de Trento.
              </p>

              <div className={styles.metaInfo}>
                <span><strong>Testamentos:</strong> Antigo · Novo</span>
                <span><strong>Livros:</strong> 73</span>
                <span><strong>Acesso:</strong> Gratuito</span>
              </div>

              <Link
                href="/biblioteca/biblia-vulgata"
                className={`${styles.btnDestaque} ${styles.btnVulgata}`}
              >
                <span className={styles.btnOrnamento}>✦</span>
                Acessar Bíblia Sagrada
                <span className={styles.btnOrnamento}>✦</span>
              </Link>
            </div>
          </div>
        </div>

        {/* SEÇÃO: EM BREVE */}
        <section className={styles.emBreve}>
          <div className={styles.emBreveCabecalho}>
            <h3>Próximos Títulos</h3>
            <p>Obras em preparação para esta biblioteca</p>
          </div>

          <div className={styles.gridEmBreve}>
            {[
              {
                titulo: 'Catecismo da Igreja Católica',
                desc: 'Compêndio oficial da doutrina católica',
              },
              { titulo: 'Confissões', desc: 'Santo Agostinho de Hipona' },
              { titulo: 'Imitação de Cristo', desc: 'Tomás de Kempis' },
              {
                titulo: 'Diálogo da Divina Providência',
                desc: 'Santa Catarina de Sena',
              },
            ].map((livro) => (
              <div className={styles.cardEmBreve} key={livro.titulo}>
                <div className={styles.placeholderCapas}>
                  <span className={styles.placeholderIcone}>✝</span>
                </div>
                <h4>{livro.titulo}</h4>
                <p>{livro.desc}</p>
                <span className={styles.tagBreve}>Em breve</span>
              </div>
            ))}
          </div>
        </section>

        {/* CITAÇÃO FINAL */}
        <div className={styles.citacaoFinal}>
          <blockquote>&ldquo;A fé busca o entendimento.&rdquo;</blockquote>
          <cite>— Santo Anselmo de Cantuária</cite>
        </div>
      </main>

      <footer>
        &copy; 2026 &ndash; Lux Fidei &nbsp;&middot;&nbsp; Omnia ao maiorem Dei gloriam
      </footer>
    </div>
  );
}