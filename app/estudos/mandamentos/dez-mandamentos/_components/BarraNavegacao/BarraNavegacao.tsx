'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import styles from './barraNavegacao.module.css'

const mandamentosLista = [
  { numero: 'I', numeroDecimal: '1º', titulo: 'Amar a Deus sobre todas as coisas', id: 1, tabua: 'primeira' },
  { numero: 'II', numeroDecimal: '2º', titulo: 'Não tomar o Santo Nome de Deus em vão', id: 2, tabua: 'primeira' },
  { numero: 'III', numeroDecimal: '3º', titulo: 'Guardar domingos e festas de guarda', id: 3, tabua: 'primeira' },
  { numero: 'IV', numeroDecimal: '4º', titulo: 'Honrar pai e mãe', id: 4, tabua: 'segunda' },
  { numero: 'V', numeroDecimal: '5º', titulo: 'Não matar', id: 5, tabua: 'segunda' },
  { numero: 'VI', numeroDecimal: '6º', titulo: 'Não pecar contra a castidade', id: 6, tabua: 'segunda' },
  { numero: 'VII', numeroDecimal: '7º', titulo: 'Não roubar', id: 7, tabua: 'segunda' },
  { numero: 'VIII', numeroDecimal: '8º', titulo: 'Não levantar falso testemunho', id: 8, tabua: 'segunda' },
  { numero: 'IX', numeroDecimal: '9º', titulo: 'Não cobiçar a mulher do próximo', id: 9, tabua: 'segunda' },
  { numero: 'X', numeroDecimal: '10º', titulo: 'Não cobiçar as coisas alheias', id: 10, tabua: 'segunda' },
]

export default function BarraNavegacao() {
  const router = useRouter()
  const [indiceAberto, setIndiceAberto] = useState(false)
  const [visivel, setVisivel] = useState(true)
  const [ultimoScroll, setUltimoScroll] = useState(0)
  const [mandamentoHover, setMandamentoHover] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollAtual = window.scrollY

      // No topo, sempre mostra
      if (scrollAtual < 10) {
        setVisivel(true)
      }
      // Rolando pra baixo, esconde
      else if (scrollAtual > ultimoScroll && scrollAtual > 100) {
        setVisivel(false)
      }
      // Rolando pra cima, mostra
      else if (scrollAtual < ultimoScroll) {
        setVisivel(true)
      }

      setUltimoScroll(scrollAtual)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ultimoScroll])

  // Trava scroll quando modal aberto
  useEffect(() => {
    if (indiceAberto) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [indiceAberto])

 const irParaMandamento = (id: number) => {
  setIndiceAberto(false)

  // Dispara evento pra abrir o accordion
  window.dispatchEvent(new CustomEvent('abrirMandamento', { detail: { id } }))

  // Espera o modal fechar + accordion abrir e rola até lá
  setTimeout(() => {
    const elemento = document.getElementById(`mandamento-${id}`)
    if (elemento) {
      const offsetTop = elemento.getBoundingClientRect().top + window.pageYOffset - 70
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }, 500)
}

  const voltar = () => {
    router.back()
  }

  const primeiraTabua = mandamentosLista.filter(m => m.tabua === 'primeira')
  const segundaTabua = mandamentosLista.filter(m => m.tabua === 'segunda')
  const mandamentoDestaque = mandamentoHover !== null
    ? mandamentosLista.find(m => m.id === mandamentoHover)
    : null

  return (
    <>
      <header className={`${styles.barra} ${!visivel ? styles.barraOculta : ''}`}>
        <div className={styles.container}>

          {/* BOTÃO VOLTAR — ESQUERDA */}
          <button
            onClick={voltar}
            className={styles.botao}
            aria-label="Voltar"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className={styles.botaoTexto}>Voltar</span>
          </button>

          {/* TÍTULO CENTRAL */}
          <div className={styles.tituloWrapper}>
            <h1 className={styles.titulo}>Os Dez Mandamentos</h1>
            <span className={styles.tituloOrnamento}></span>
          </div>

          {/* BOTÃO ÍNDICE — DIREITA */}
          <button
            onClick={() => setIndiceAberto(true)}
            className={styles.botao}
            aria-label="Índice"
          >
            <span className={styles.botaoTexto}>Índice</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>

        </div>
      </header>

      {/* MODAL DO ÍNDICE — TÁBUAS DE PEDRA */}
      {indiceAberto && (
        <div className={styles.modalOverlay} onClick={() => setIndiceAberto(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

            {/* CABEÇALHO */}
            <div className={styles.modalCabecalho}>
              <div>
                <h2 className={styles.modalTitulo}>O Decálogo</h2>
                <p className={styles.modalSubtitulo}>As dez palavras de Deus</p>
              </div>
              <button
                onClick={() => setIndiceAberto(false)}
                className={styles.modalFechar}
                aria-label="Fechar"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* ÁREA DE DESTAQUE — MANDAMENTO EM HOVER */}
            <div className={styles.destaque}>
              {mandamentoDestaque ? (
                <>
                  <span className={styles.destaqueRomano}>{mandamentoDestaque.numero}</span>
                  <div className={styles.destaqueInfo}>
                    <span className={styles.destaqueNumeroDecimal}>{mandamentoDestaque.numeroDecimal} Mandamento</span>
                    <p className={styles.destaqueTitulo}>{mandamentoDestaque.titulo}</p>
                    <span className={styles.destaqueAcao}>Clique para navegar →</span>
                  </div>
                </>
              ) : (
                <div className={styles.destaqueVazio}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <p>Passe o mouse sobre um mandamento</p>
                </div>
              )}
            </div>

            {/* AS DUAS TÁBUAS */}
            <div className={styles.tabuas}>

              {/* PRIMEIRA TÁBUA */}
              <div className={styles.tabua}>
                <div className={styles.tabuaCabecalho}>
                  <span className={styles.tabuaNumero}>I</span>
                  <div>
                    <h3 className={styles.tabuaTitulo}>Primeira Tábua</h3>
                    <p className={styles.tabuaSubtitulo}>Amor a Deus</p>
                  </div>
                </div>
                <div className={styles.mandamentosGrid}>
                  {primeiraTabua.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => irParaMandamento(m.id)}
                      onMouseEnter={() => setMandamentoHover(m.id)}
                      onMouseLeave={() => setMandamentoHover(null)}
                      className={`${styles.mandamentoBotao} ${mandamentoHover === m.id ? styles.mandamentoBotaoAtivo : ''}`}
                    >
                      <span className={styles.mandamentoBotaoNumero}>{m.numero}</span>
                      <span className={styles.mandamentoBotaoTitulo}>{m.titulo}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* SEGUNDA TÁBUA */}
              <div className={styles.tabua}>
                <div className={styles.tabuaCabecalho}>
                  <span className={styles.tabuaNumero}>II</span>
                  <div>
                    <h3 className={styles.tabuaTitulo}>Segunda Tábua</h3>
                    <p className={styles.tabuaSubtitulo}>Amor ao Próximo</p>
                  </div>
                </div>
                <div className={styles.mandamentosGrid}>
                  {segundaTabua.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => irParaMandamento(m.id)}
                      onMouseEnter={() => setMandamentoHover(m.id)}
                      onMouseLeave={() => setMandamentoHover(null)}
                      className={`${styles.mandamentoBotao} ${mandamentoHover === m.id ? styles.mandamentoBotaoAtivo : ''}`}
                    >
                      <span className={styles.mandamentoBotaoNumero}>{m.numero}</span>
                      <span className={styles.mandamentoBotaoTitulo}>{m.titulo}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* RODAPÉ COM DICA */}
            <div className={styles.modalRodape}>
              <span>💡 Dica: use as teclas ESC para fechar</span>
            </div>

          </div>
        </div>
      )}
    </>
  )
}