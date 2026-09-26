'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from './_components/layout/Footer';

// Banco de Tarefas (O sistema vai escolher 1 por dia automaticamente)
const TAREFAS_DB = [
  { titulo: "Leia a Carta de São Filipe Néri", link: "/santos/presbiteros/sao-filipe-neri/biblioteca" },
  { titulo: "Conheça a história de São Domingos Sávio", link: "/santos/leigos/sao-domingos-savio" },
  { titulo: "Estude o sacramento do Batismo", link: "/estudos/sacramentos/batismo" },
  { titulo: "Leia sobre as aparições de São Miguel", link: "/santos/arcanjos/sao-miguel-arcanjo/aparicoes" },
  { titulo: "Explore a Iconografia de Santa Afra", link: "/santos/martires/santa-afra-de-augsburgo/iconografia" },
  { titulo: "Medite com São Tomás de Aquino", link: "/santos/doutores/sao-tomas-de-aquino/frases" },
];

export default function HomeInteractive({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isTarefasModalOpen, setIsTarefasModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'sobre' | 'contato' | 'privacidade'>('sobre');
  const [tarefaDoDia, setTarefaDoDia] = useState(TAREFAS_DB[0]);

  // Sorteia a tarefa com base no dia do ano (muda todo dia à meia-noite)
  useEffect(() => {
    const hoje = new Date();
    const diaDoAno = Math.floor((hoje.getTime() - new Date(hoje.getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
    const index = diaDoAno % TAREFAS_DB.length;
    setTarefaDoDia(TAREFAS_DB[index]);
  }, []);

  return (
    <>
      {/* BOTÕES LATERAIS */}
      <button className="info-btn" onClick={() => setIsInfoModalOpen(true)} title="Sobre, Contato e Privacidade">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
      </button>

      <button className="tarefas-btn" onClick={() => setIsTarefasModalOpen(true)} title="Tarefas Diárias">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
      </button>

      {/* MODAL INSTITUCIONAL (TODAS AS ABAS NO HTML INICIAL PARA O ADSENSE LER) */}
      <div className={`modal-overlay ${isInfoModalOpen ? 'aberto' : ''}`} onClick={(e) => e.target === e.currentTarget && setIsInfoModalOpen(false)}>
        <div className="modal-box">
          <div className="modal-header">
            <h3>Lux Fidei</h3>
            <button className="modal-close" onClick={() => setIsInfoModalOpen(false)}>&times;</button>
          </div>
          <div className="modal-nav">
            <button className={`modal-nav-btn ${activeTab === 'sobre' ? 'ativo' : ''}`} onClick={() => setActiveTab('sobre')}>Sobre</button>
            <button className={`modal-nav-btn ${activeTab === 'contato' ? 'ativo' : ''}`} onClick={() => setActiveTab('contato')}>Contato</button>
            <button className={`modal-nav-btn ${activeTab === 'privacidade' ? 'ativo' : ''}`} onClick={() => setActiveTab('privacidade')}>Privacidade</button>
          </div>
          <div className="modal-content">
            
            {/* ABA SOBRE */}
            <div style={{ display: activeTab === 'sobre' ? 'block' : 'none' }}>
              <h2>Sobre o Lux Fidei</h2>
              <p>O <em>Lux Fidei</em> — Luz da Fé — é um projeto dedicado ao estudo, apresentação e à defesa da fé católica. Nasceu da convicção de que a tradição cristã precisa ser conhecida em sua profundidade para ser vivida com integridade.</p>
              <p>A fé católica não é uma tradição que se preserva no silêncio dos museus, mas uma realidade viva que interpela cada geração. O <em>Lux Fidei</em> nasce da convicção de que essa fé precisa ser apresentada com toda a sua profundidade, sem as distorções do sensacionalismo nem a tibieza de quem teme o rigor.</p>
              <p>Aqui o visitante encontrará a liturgia diária da Igreja, as vidas dos santos que a encarnam, os textos que lhe deram forma ao longo dos séculos e o estudo sistemático da teologia e da filosofia cristã.</p>
              <p>Fidelidade ao Magistério e à Tradição Apostólica não é limitação: é o solo firme sobre o qual a inteligência pode avançar com liberdade. Não há aqui agendas políticas, modismos ou concessões ao espírito do tempo. Há, isso sim, o desejo sincero de que cada visitante se aproxime um pouco mais da verdade.</p>
              <p className="epigraph-modal">"A fé é mais certa do que qualquer outra espécie de conhecimento, porque está fundada na Palavra de Deus." — Santo Tomás de Aquino</p>
            </div>

            {/* ABA CONTATO */}
            <div style={{ display: activeTab === 'contato' ? 'block' : 'none' }}>
              <h2>Contato</h2>
              <p>Para sugestões de conteúdo, correções, colaborações ou dúvidas de fé, entre em contato pelo endereço abaixo. Toda mensagem é lida com atenção.</p>
              <p>✉ E-mail: <a href="mailto:comosercatolico@gmail.com">comosercatolico@gmail.com</a></p>
              <p>Nas redes sociais, o projeto pode ser acompanhado como <strong>lux_.fidei</strong>.</p>
              <p>Este é um projeto voluntário, movido exclusivamente pela fé e pelo desejo de servir.</p>
              <p className="epigraph-modal">"Ajudai-vos uns aos outros a carregar os fardos: assim cumprireis a lei de Cristo." — Gálatas 6, 2</p>
            </div>

            {/* ABA PRIVACIDADE */}
            <div style={{ display: activeTab === 'privacidade' ? 'block' : 'none' }}>
              <h2>Política de Privacidade</h2>
              <p>O <em>Lux Fidei</em> respeita a privacidade de seus visitantes. Esta página descreve o tratamento de dados neste site.</p>
              <p><strong>Análise de tráfego:</strong> Podem ser utilizadas ferramentas de análise anônima, sem identificação individual.</p>
              <p><strong>Publicidade:</strong> Este site utiliza o Google AdSense, que pode exibir anúncios com base em interesses do visitante.</p>
              <p><strong>Tratamento de Dados:</strong> O site não exige cadastro nem coleta dados pessoais identificáveis. Dados anônimos de navegação são processados por serviços parceiros (Google Analytics e Google AdSense) para estatísticas e veiculação de anúncios. Mensagens enviadas por e-mail são usadas exclusivamente para responder ao remetente.</p>
              <p>Consulte a <a href="/privacidade" style={{ color: '#8c6d3b' }}>Política de Privacidade completa</a> para mais detalhes.</p>
              <p>Dúvidas: <a href="mailto:comosercatolico@gmail.com">comosercatolico@gmail.com</a></p>
            </div>

          </div>
        </div>
      </div>

      {/* MODAL DE TAREFAS DIÁRIAS */}
      <div className={`modal-overlay ${isTarefasModalOpen ? 'aberto' : ''}`} onClick={(e) => e.target === e.currentTarget && setIsTarefasModalOpen(false)}>
        <div className="modal-box tarefas-modal-box">
          <div className="modal-header">
            <h3>Tarefas Espirituais</h3>
            <button className="modal-close" onClick={() => setIsTarefasModalOpen(false)}>&times;</button>
          </div>
          <div className="modal-content tarefas-content">
            <p className="tarefas-intro">Recomendações do Lux Fidei para o seu dia:</p>
            <ul className="tarefas-lista">
              <li>
                <Link href="/liturgia_diaria" onClick={() => setIsTarefasModalOpen(false)}>
                  <span className="tarefa-icone">📖</span>
                  <div className="tarefa-texto">
                    <strong>Pão da Palavra</strong>
                    <span>Leia a Liturgia Diária de hoje</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href={tarefaDoDia.link} onClick={() => setIsTarefasModalOpen(false)}>
                  <span className="tarefa-icone">🕊️</span>
                  <div className="tarefa-texto">
                    <strong>Recomendação do Dia</strong>
                    <span>{tarefaDoDia.titulo}</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SIDEBAR MOBILE */}
      <div className={`overlay ${isMenuOpen ? 'ativo' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      <div className="sidebar" style={{ left: isMenuOpen ? '0' : '-290px' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>&times; &nbsp;Fechar</a>
        <Link href="/">Inicio</Link>
        <Link href="/liturgia_diaria">Liturgia Diaria</Link>
        <Link href="/santos">Santos</Link>
        <Link href="/biblioteca">Biblioteca</Link>
        <Link href="/estudos">Estudos</Link>
        <Link href="/jogos">Jogos</Link>
      </div>

      {/* HEADER EXATAMENTE COMO ERA */}
      <header>
        <span className="menu-btn" onClick={() => setIsMenuOpen(true)}>&equiv;</span>
        <p className="header-pretitle">&#10011; &nbsp; In Nomine Domini &nbsp; &#10011;</p>
        <h1>Lux Fidei</h1>
        <p className="header-sub">Luz da Fé Católica</p>
      </header>

      <nav className="menu">
        <Link href="/" className="menu-item active">Inicio</Link>
        <Link href="/liturgia_diaria" className="menu-item">Liturgia Diaria</Link>
        <Link href="/santos" className="menu-item">Santos</Link>
        <Link href="/biblioteca" className="menu-item">Biblioteca</Link>
        <Link href="/estudos" className="menu-item">Estudos</Link>
        <Link href="/jogos" className="menu-item">Jogos</Link>
        <span className="menu-indicator"></span>
      </nav>

      {/* O CONTEÚDO DA PÁGINA (HERO E FEED) ENTRA AQUI */}
      {children}

      <Footer />
    </>
  );
}