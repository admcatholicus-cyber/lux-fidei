// app/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './home.css';    // 👈 CSS só carrega nesta rota

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'sobre' | 'contato' | 'privacidade'>('sobre');

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
                  <p>Dúvidas: <a href="mailto:comosercatolico@gmail.com">comosercatolico@gmail.com</a></p>`
  };

  return (
    <div className="pagina-lux">
      <button className="info-btn" onClick={() => setIsModalOpen(true)} title="Sobre, Contato e Privacidade">
        <svg viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
        </svg>
      </button>

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

      <main id="inicio">
        <section className="abertura">
          <span className="ornamento-cruz">. . . &#10011; . . .</span>
          <h2>A sabedoria de dois mil anos<br/>ao alcance de quem busca</h2>
          <p className="epigraph">"Conhecereis a verdade, e a verdade vos libertara."</p>
          <p className="epigraph-ref">-- Joao 8, 32</p>
        </section>

        <section className="apresentacao">
          <div className="sec-label">Apresentacao</div>
          <div className="apresentacao-texto">
            <p>A fe catolica nao e uma tradicao que se preserva no silencio dos museus, mas uma realidade viva que interpela cada geracao com a mesma urgencia dos primeiros seculos. O <em>Lux Fidei</em> nasce da conviccao de que essa fe precisa ser apresentada com toda a sua profundidade, sem as distorcoes do sensacionalismo nem a tibieza de quem teme o rigor.</p>
            <p>Aqui o visitante encontrara a liturgia diaria da Igreja, as vidas dos santos que a encarnam, os textos que lhe deram forma ao longo dos seculos e o estudo sistematico da teologia e da filosofia crista. Cada secao foi concebida para servir tanto ao fiel que deseja aprofundar quanto ao curioso que ainda nao sabe o que procura.</p>
            <p>Fidelidade ao Magisterio e a Tradicao Apostolica nao e limitacao: e o solo firme sobre o qual a inteligencia pode avancar com liberdade. Neste espaco, nao ha agendas politicas nem concessoes ao espirito do mundo. Ha, isso sim, o desejo de que cada visitante se aproxime um pouco mais daquele que disse ser o Caminho, a Verdade e a Vida.</p>
          </div>
        </section>

        <section className="secoes">
          <div className="sec-label">O que encontrara aqui</div>
          <div className="secoes-grid">
            <div className="secao-item">
              <Link href="/liturgia_diaria">
                <span className="secao-num">I</span>
                <h3>Liturgia Diaria</h3>
                <p>As leituras, salmos e oracoes de cada dia, conforme o calendario liturgico da Igreja Universal. A Palavra que alimenta e orienta.</p>
              </Link>
            </div>
            <div className="secao-item">
              <Link href="/santos">
                <span className="secao-num">II</span>
                <h3>Santos</h3>
                <p>Hagiografia: as vidas daqueles que viveram o Evangelho de modo radical e deixaram testemunho para toda a Igreja.</p>
              </Link>
            </div>
            <div className="secao-item">
              <Link href="/biblioteca">
                <span className="secao-num">III</span>
                <h3>Biblioteca</h3>
                <p>Documentos conciliares, enciclicas, Padres da Igreja, Doutores e as obras que formaram o pensamento cristao por dois milenios.</p>
              </Link>
            </div>
            <div className="secao-item">
              <Link href="/estudos">
                <span className="secao-num">IV</span>
                <h3>Estudos</h3>
                <p>Teologia dogmatica, moral e fundamental. Filosofia escolastica e moderna. Apologetica. Introducao as Sagradas Escrituras.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="citacao-magna">
          <blockquote>"A fe sem a razao fenece no mito e na supersticao; a razao sem a fe perde-se na desolacao do nada."</blockquote>
          <cite>-- Sao Joao Paulo II, Fides et Ratio</cite>
        </section>

        <section className="para-quem">
          <div className="sec-label">Para quem e este espaco</div>
          <p className="para-quem-texto">O <em>Lux Fidei</em> nao foi pensado para um perfil unico de visitante. A fe catolica e, por natureza, universal, e universal ha de ser tambem o convite que aqui se faz.</p>
          <p className="para-quem-texto">Para o fiel que frequenta a missa dominical e deseja compreender mais do que recita: ha aqui leituras, comentarios e aprofundamento doutrinal. Para o estudante de teologia ou filosofia em busca de fontes primarias e sinteses confiaveis: a Biblioteca e os Estudos foram pensados para isso. Para o cetico que ainda nao cre mas tem a honestidade de perguntar: nao havera aqui respostas faceis, mas havera respostas serias.</p>
          <ul className="perfis-lista">
            <li>Fieis que desejam aprofundar a fe</li>
            <li>Curiosos sobre o catolicismo</li>
            <li>Recem-convertidos em formacao</li>
            <li>Estudantes de teologia e filosofia</li>
            <li>Amantes da tradicao e do rito</li>
            <li>Quem busca respostas para perguntas dificeis</li>
            <li>Pensadores que levam a religiao a serio</li>
            <li>Quem procura sentido e nao encontrou ainda</li>
          </ul>
        </section>

        <div className="fechamento">
          <p>"A Igreja nao teme a inteligencia: ela foi sua mae e nutrida por ela durante seculos. O que a Igreja oferece nao e um fardo, mas uma luz."</p>
          <p className="ornamento-final">&#10011; &nbsp; Lux Fidei &nbsp; &#10011;</p>
        </div>
      </main>

      <footer>&copy; 2026 &ndash; Lux Fidei &nbsp;&middot;&nbsp; Omnia ad maiorem Dei gloriam</footer>
    </div>
  );
}