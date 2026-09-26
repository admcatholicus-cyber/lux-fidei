'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '../_components/layout/Footer';
import styles from './jogos.module.css';
import '../home.css';

interface Jogo {
  id: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  santo: string;
  categoria: string;

  imagem: string | null;
  link: string;
  externo: boolean;
  status: string;
  destaque: boolean;
}

export default function JogosClient({ jogos }: { jogos: Jogo[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filtro, setFiltro] = useState<'todos' | 'disponivel' | 'em-breve'>('todos');

  const jogosFiltrados = filtro === 'todos' 
    ? jogos 
    : jogos.filter(j => j.status === filtro);

  const totalDisponiveis = jogos.filter(j => j.status === 'disponivel').length;
  const totalEmBreve = jogos.filter(j => j.status === 'em-breve').length;

  return (
    <div className="pagina-lux">
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

      <header>
        <span className="menu-btn" onClick={() => setIsMenuOpen(true)}>&equiv;</span>
        <p className="header-pretitle">&#10011; &nbsp; In Nomine Domini &nbsp; &#10011;</p>
        <h1>Lux Fidei</h1>
        <p className="header-sub">Luz da Fé Católica</p>
      </header>

      <nav className="menu">
        <Link href="/" className="menu-item">Inicio</Link>
        <Link href="/liturgia_diaria" className="menu-item">Liturgia Diaria</Link>
        <Link href="/santos" className="menu-item">Santos</Link>
        <Link href="/biblioteca" className="menu-item">Biblioteca</Link>
        <Link href="/estudos" className="menu-item">Estudos</Link>
        <Link href="/jogos" className="menu-item active">Jogos</Link>
        <span className="menu-indicator"></span>
      </nav>

      <main className={styles.jogosMain}>
        
        {/* HERO DA PÁGINA */}
        <section className={styles.hero}>
          <span className={styles.heroOrnamento}>&#10047; &nbsp; &#10011; &nbsp; &#10047;</span>
          <h2 className={styles.heroTitulo}>Salão de Jogos</h2>
          <p className={styles.heroSubtitulo}>
            Recreação e aprendizado à luz da fé
          </p>
          <div className={styles.heroLinha}></div>
          <p className={styles.heroTexto}>
            "A recreação é tão necessária ao homem quanto o alimento e o repouso." 
            <br/>
            <span className={styles.heroTextoAutor}>— São Tomás de Aquino</span>
          </p>
          <p className={styles.heroDescricao}>
            Nesta seção reunimos jogos inspirados na vida dos santos, nas Escrituras e na 
            tradição da Igreja. Que a alegria da recreação nos aproxime também da santidade.
          </p>
        </section>

        {/* FILTROS */}
        <section className={styles.filtros}>
          <button 
            className={`${styles.filtroBtn} ${filtro === 'todos' ? styles.ativo : ''}`}
            onClick={() => setFiltro('todos')}
          >
            Todos
          </button>
          <button 
            className={`${styles.filtroBtn} ${filtro === 'disponivel' ? styles.ativo : ''}`}
            onClick={() => setFiltro('disponivel')}
          >
            Disponíveis
          </button>
          <button 
            className={`${styles.filtroBtn} ${filtro === 'em-breve' ? styles.ativo : ''}`}
            onClick={() => setFiltro('em-breve')}
          >
            Em Breve
          </button>
        </section>

        {/* GRID DE JOGOS */}
        <section className={styles.grid}>
          {jogosFiltrados.map((jogo) => (
            <article 
              key={jogo.id} 
              className={`${styles.card} ${jogo.destaque ? styles.destaque : ''} ${jogo.status === 'em-breve' ? styles.emBreve : ''}`}
            >
              {jogo.destaque && (
                <div className={styles.destaqueBadge}>
                  <span>&#10047;</span> Destaque
                </div>
              )}

              <div className={styles.cardImagem}>
                {jogo.imagem ? (
                  <img src={jogo.imagem} alt={jogo.titulo} />
                ) : (
                  <div className={styles.cardImagemPlaceholder}>
                    <span className={styles.placeholderCruz}>&#10011;</span>
                    <span className={styles.placeholderTexto}>Em desenvolvimento</span>
                  </div>
                )}
                
                <div className={styles.cardOverlay}>
                  <span className={styles.cardCategoria}>{jogo.categoria}</span>
                </div>
              </div>

         <div className={styles.cardConteudo}>
  <div className={styles.cardSanto}>
    <span className={styles.cardSantoIcone}>&#10011;</span>
    {jogo.santo}
  </div>

  <h3 className={styles.cardTitulo}>{jogo.titulo}</h3>
  <p className={styles.cardSubtitulo}>{jogo.subtitulo}</p>
  
  <div className={styles.cardCorpo}>
    <p>{jogo.descricao}</p>
  </div>

  {jogo.status === 'disponivel' ? (
    jogo.externo ? (
      <a 
        href={jogo.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.cardBotao}
      >
        <span>Jogar Agora</span>
        <span className={styles.botaoSeta}>&rarr;</span>
      </a>
    ) : (
      <Link href={jogo.link} className={styles.cardBotao}>
        <span>Jogar Agora</span>
        <span className={styles.botaoSeta}>&rarr;</span>
      </Link>
    )
  ) : (
    <button className={styles.cardBotaoDisabled} disabled>
      <span>Em Breve</span>
    </button>
  )}
</div>
            </article>
          ))}
        </section>

        {/* CITAÇÃO FINAL */}
        <section className={styles.citacao}>
          <span className={styles.citacaoOrnamento}>&#10047;</span>
          <blockquote>
            "Que os santos nos ensinem que a santidade não é ausência de alegria, 
            mas a alegria mais profunda que existe."
          </blockquote>
          <cite>— Papa Francisco</cite>
        </section>

      </main>

      <Footer />
    </div>
  );
}