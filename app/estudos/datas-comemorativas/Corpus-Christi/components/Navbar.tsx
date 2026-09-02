'use client'

import { useState, useEffect, useRef } from 'react'

const menuItems = [
  { href: '#intro', label: 'Introdução' },
  { href: '#historia', label: 'História' },
  { href: '#contexto', label: 'Contexto' },
  { href: '#teologia', label: 'Teologia' },
  { href: '#liturgia', label: 'Liturgia' },
  { href: '#tomas', label: 'S. Tomás' },
  { href: '#procissao', label: 'Procissão' },
  { href: '#tapetes', label: 'Tapetes' },
  { href: '#brasil', label: 'Brasil' },
  { href: '#mundo', label: 'Pelo Mundo' },
  { href: '#homilias', label: 'Homilias' },
  { href: '#simbolos', label: 'Símbolos' },
  { href: '#arte', label: 'Arte' },
  { href: '#documentos', label: 'Documentos' },
  { href: '#data', label: 'Calendário' },
  { href: '#social', label: 'Comunidade' },
  { href: '#oracoes', label: 'Orações' },
  { href: '#curiosidades', label: 'Curiosidades' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  // Auto-hide ao rolar
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current && currentY > 200) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav
      id="navPrincipal"
      className={hidden ? 'escondida' : ''}
    >
      <div className="nav-container">
        <div className="nav-topo">
          {/* BOTÃO VOLTAR */}
          <a href="/estudos" className="btn-voltar" title="Voltar aos Estudos">
            <span>&#8592;</span>
            <span className="btn-voltar-texto">Voltar</span>
          </a>

          {/* BOTÃO ÍNDICE */}
          <button
            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir índice"
          >
            <span className="nav-toggle-icon">📖</span>
            <span className="nav-toggle-text">Índice</span>
            <span className="nav-toggle-arrow">▼</span>
          </button>
        </div>

        {/* MENU DROPDOWN */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}