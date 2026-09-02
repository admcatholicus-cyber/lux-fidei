// app/estudos/sacramentos/crisma/components/CrismaNav.tsx
'use client'

import Link from 'next/link'
import styles from '../crisma.module.css'
import { sidebarSections } from '../data/crisma.data'

interface Props {
  navEscondida: boolean
  sidebarAberta: boolean
  activeSection: string
  onAbrirSidebar: () => void
  onFecharSidebar: () => void
  onScrollTo: (href: string) => void
}

export default function CrismaNav({
  navEscondida,
  sidebarAberta,
  activeSection,
  onAbrirSidebar,
  onFecharSidebar,
  onScrollTo,
}: Props) {
  return (
    <>
      {/* ── NAVBAR ── */}
      <nav
        className={`${styles.navPrincipal} ${navEscondida ? styles.navEscondida : ''}`}
      >
        <div className={styles.navContainer}>
          <Link href="/estudos" className={styles.btnVoltar}>
            <span>←</span>
            <span className={styles.btnVoltarTexto}>Voltar</span>
          </Link>

          <a
            href="#hero"
            className={styles.navLogo}
            onClick={e => { e.preventDefault(); onScrollTo('#hero') }}
          >
            <img
              src="/estudos/sacramentos/crisma/meio-indice.png"
              alt="Crisma"
              className={styles.navLogoImg}
            />
          </a>

          <button
            className={styles.navToggle}
            onClick={onAbrirSidebar}
            aria-label="Abrir menu"
          >
            <span>☰</span>
            <span className={styles.navToggleTexto}>Índice</span>
          </button>
        </div>
      </nav>

      {/* ── OVERLAY ── */}
      <div
        className={`${styles.sidebarOverlay} ${sidebarAberta ? styles.sidebarOverlayAtivo : ''}`}
        onClick={onFecharSidebar}
      />

      {/* ── SIDEBAR ── */}
      <aside
        className={`${styles.sidebar} ${sidebarAberta ? styles.sidebarAtivo : ''}`}
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarLogo}>
            <span className={styles.sidebarLogoIcon}>🔥</span>
            <span>Crisma</span>
          </div>
          <button
            className={styles.sidebarFechar}
            onClick={onFecharSidebar}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        <div className={styles.sidebarConteudo}>
          <p className={styles.sidebarSupratitulo}>Sacramento da Confirmação</p>
          <p className={styles.sidebarSubtitulo}>Navegue pelas seções</p>

          {sidebarSections.map(grupo => (
            <div key={grupo.titulo} className={styles.sidebarGrupo}>
              <h4 className={styles.sidebarGrupoTitulo}>{grupo.titulo}</h4>
              <ul className={styles.sidebarLinks}>
                {grupo.links.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={
                        activeSection === link.href.replace('#', '')
                          ? styles.ativoLink
                          : ''
                      }
                      onClick={e => { e.preventDefault(); onScrollTo(link.href) }}
                    >
                      <span className={styles.sidebarNum}>{link.num}</span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.sidebarRodape}>
          <p><em>«Recebereis a força do Espírito Santo»</em></p>
          <p className={styles.sidebarRodapeRef}>— At 1,8</p>
        </div>
      </aside>
    </>
  )
}