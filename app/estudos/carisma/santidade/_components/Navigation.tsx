'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../_styles/navigation.module.css';

export default function Navigation() {
  const [sidebarAberta, setSidebarAberta] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [navEscondida, setNavEscondida] = useState(false);

  // Scroll: adiciona classe scrolled + auto-hide
  useEffect(() => {
    let ultimoScroll = 0;

    const handleScroll = () => {
      const scrollAtual = window.scrollY;

      // Classe scrolled (fundo escuro)
      setNavScrolled(scrollAtual > 50);

      // Auto-hide (esconde ao descer, mostra ao subir)
      if (scrollAtual > 200 && scrollAtual > ultimoScroll) {
        setNavEscondida(true);
      } else {
        setNavEscondida(false);
      }
      ultimoScroll = scrollAtual;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia scroll do body quando sidebar aberta
  useEffect(() => {
    if (sidebarAberta) {
      document.body.classList.add('sidebarAberta');
    } else {
      document.body.classList.remove('sidebarAberta');
    }
    return () => document.body.classList.remove('sidebarAberta');
  }, [sidebarAberta]);

  // Fecha sidebar ao clicar num link
  const fecharSidebar = () => setSidebarAberta(false);

  return (
    <>
      {/* NAVEGAÇÃO SUPERIOR */}
      <nav
        className={`${styles.navPrincipal} ${navScrolled ? styles.navScrolled : ''} ${
          navEscondida ? styles.navEscondida : ''
        }`}
      >
        <div className={styles.navContainer}>
          <Link href="/estudos" className={styles.btnVoltar}>
            ← Voltar
          </Link>

          <a href="#hero" className={styles.navLogo}>
            <i className="fas fa-cross"></i>
            <span>Santidade</span>
          </a>

          <button
            className={styles.navToggle}
            onClick={() => setSidebarAberta(true)}
            aria-label="Abrir menu"
          >
            <i className="fas fa-bars"></i>
            <span className={styles.navToggleTexto}>Índice</span>
          </button>
        </div>
      </nav>

      {/* SIDEBAR OVERLAY */}
      <div
        className={`${styles.sidebarOverlay} ${sidebarAberta ? styles.sidebarOverlayAtivo : ''}`}
        onClick={fecharSidebar}
      />

      {/* SIDEBAR */}
      <aside className={`${styles.sidebar} ${sidebarAberta ? styles.sidebarAtiva : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogo}>
            <i className="fas fa-cross"></i>
            <span>Santidade</span>
          </div>
          <button
            className={styles.sidebarFechar}
            onClick={fecharSidebar}
            aria-label="Fechar menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className={styles.sidebarConteudo}>
          <p className={styles.sidebarSupratitulo}>Compêndio Teológico</p>
          <p className={styles.sidebarSubtitulo}>Navegue pelos capítulos</p>

          {/* Parte I */}
          <div className={styles.sidebarGrupo}>
            <h4 className={styles.sidebarGrupoTitulo}>Parte I — Fundamentos</h4>
            <ul className={styles.sidebarLinks}>
              <li>
                <a href="#introducao" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>I</span> Introdução Geral
                </a>
              </li>
              <li>
                <a href="#etimologia" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>II</span> Etimologia e Semântica
                </a>
              </li>
              <li>
                <a href="#escrituras" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>III</span> Sagradas Escrituras
                </a>
              </li>
              <li>
                <a href="#teologia" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>IV</span> Teologia Dogmática
                </a>
              </li>
            </ul>
          </div>

          {/* Parte II */}
          <div className={styles.sidebarGrupo}>
            <h4 className={styles.sidebarGrupoTitulo}>Parte II — Desenvolvimento</h4>
            <ul className={styles.sidebarLinks}>
              <li>
                <a href="#magisterio" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>V</span> Magistério da Igreja
                </a>
              </li>
              <li>
                <a href="#patristica" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>VI</span> Patrística
                </a>
              </li>
              <li>
                <a href="#doutores" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>VII</span> Doutores da Igreja
                </a>
              </li>
              <li>
                <a href="#filosofia" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>VIII</span> Filosofia da Santidade
                </a>
              </li>
              <li>
                <a href="#mistica" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>IX</span> Teologia Mística
                </a>
              </li>
              <li>
                <a href="#moral" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>X</span> Teologia Moral
                </a>
              </li>
            </ul>
          </div>

          {/* Parte III */}
          <div className={styles.sidebarGrupo}>
            <h4 className={styles.sidebarGrupoTitulo}>Parte III — Aplicação</h4>
            <ul className={styles.sidebarLinks}>
              <li>
                <a href="#vocacao-universal" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>XI</span> Vocação Universal
                </a>
              </li>
              <li>
                <a href="#canonizacao" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>XII</span> Canonização
                </a>
              </li>
              <li>
                <a href="#santos-modelos" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>XIII</span> Santos Modelos
                </a>
              </li>
              <li>
                <a href="#maria-santidade" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>XIV</span> Maria Santíssima
                </a>
              </li>
              <li>
                <a href="#objecoes" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>XV</span> Objeções
                </a>
              </li>
              <li>
                <a href="#sintese" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>XVI</span> Síntese Final
                </a>
              </li>
              <li>
                <a href="#bibliografia" onClick={fecharSidebar}>
                  <span className={styles.sidebarNum}>★</span> Bibliografia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.sidebarRodape}>
          <p>
            <em>«Sede santos, porque Eu sou Santo»</em>
          </p>
          <p className={styles.sidebarRodapeRef}>— Lv 19,2</p>
        </div>
      </aside>
    </>
  );
}