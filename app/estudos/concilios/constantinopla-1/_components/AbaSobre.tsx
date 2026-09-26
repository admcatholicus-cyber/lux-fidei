'use client'

import Link from 'next/link'
import { fichaConcilio } from '../_data/ficha'
import { mitos, resumoMitos } from '../_data/mitos'
import { legado } from '../_data/legado'
import {
  fontesPrimariasHistoricas,
  fontesPrimariasNazianzo,
  fontesPrimariasOutros,
  fontesPrimariasDocumentos,
  fontesSecundarias,
  fontesModernas,
  recursosOnline,
  resumoFontes,
} from '../_data/fontes'
import { recepcao, resumoRecepcao } from '../_data/recepcao'
import {
  IconScales, IconConcilio, IconCross, IconScroll, IconHourglass,
  IconBooks, IconBook, IconWarning,
} from './Icons'
import styles from '../constantinopla-1.module.css'

const NAV_ITENS = [
  { id: 'canone3', label: 'Canon 3' },
  { id: 'mitos', label: 'Mitos' },
  { id: 'legado', label: 'Legado' },
  { id: 'recepcao', label: 'Recepção' },
  { id: 'fontes', label: 'Fontes' },
]

export function AbaSobre() {
  const f = fichaConcilio

  return (
    <>
      <nav className={styles.subnav} aria-label="Navegação de seções">
        {NAV_ITENS.map(item => (
          <a key={item.id} href={`#${item.id}`} className={styles.pill}>{item.label}</a>
        ))}
      </nav>

      {/* =============================================
          O CÂNON 3 E A PRIMAZIA PETRINA
         ============================================= */}
      <section id="canone3" className={`${styles.secao} secao-anchor`}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconScales size={22} style={{ color: '#8b6508' }} /></span> O Cânon 3 e a Defesa da Primazia Petrina
        </h2>
        <p className={styles.secaoTexto}>
          O Cânon 3 de Constantinopla pretendia conceder ao bispo de Constantinopla uma
          &ldquo;primazia de honra após o bispo de Roma&rdquo; com base no argumento político
          de que a cidade era a &ldquo;Nova Roma&rdquo;.
        </p>
        <div className={styles.destaque} style={{ textAlign: "left" }}>
          <strong style={{ color: "#8b6508" }}>A Recepção Papal:</strong> O Sínodo Romano de 382, sob o 
          Papa São Dâmaso I, recebeu as decisões orientais com frieza, não ratificando o cânon. Setenta anos depois, 
          foi o <strong>Papa São Leão Magno quem rejeitaria com veemência a expansão deste mesmo princípio 
          no Cânon 28 de Calcedônia (451)</strong>. A Igreja Católica sempre ensinou que a Primazia da Sé de Roma 
          deriva unicamente da sucessão apostólica de São Pedro (<em>Tu es Petrus</em>, Mt 16,18) e do sangue 
          dos apóstolos derramado na capital, e não de conveniências políticas da corte imperial.
        </div>
      </section>

      {/* =============================================
          MITOS FREQUENTES
         ============================================= */}
      <section id="mitos" className={`${styles.secao} secao-anchor`}>
        <h2 className={styles.secaoTitulo}>
          <img
            src="/estudos/concilios/icones/errado.webp"
            alt="Mitos"
            className={styles.secaoIconeImg}
          />
          Mitos e Esclarecimentos
        </h2>

        <p className={styles.secaoTexto}>{resumoMitos}</p>

        <div className={styles.heresiasGrid} style={{ marginTop: "1.5rem" }}>
          {mitos.map((m) => (
            <div key={m.id} className={styles.heresiaCard} style={{ display: "flex", flexDirection: "column" }}>
              <div className={styles.heresiaNome} style={{ fontSize: "1.05rem" }}>
                Mito {m.id}: &ldquo;{m.mito}&rdquo;
              </div>

              <div
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "0.15rem 0.5rem",
                  borderRadius: "4px",
                  marginTop: "0.4rem",
                  marginBottom: "0.6rem",
                  background:
                    m.gravidade === "alta"
                      ? "#fde8e8"
                      : m.gravidade === "média"
                      ? "#fff4e0"
                      : "#eef6ee",
                  color:
                    m.gravidade === "alta"
                      ? "#bd3a29"
                      : m.gravidade === "média"
                      ? "#8b6508"
                      : "#2d6a4f",
                }}
              >
                Gravidade: {m.gravidade}
              </div>

              <div className={styles.heresiaErro} style={{ marginBottom: "0.6rem" }}>
                <strong>Realidade:</strong> {m.realidade}
              </div>

              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "0.6rem", color: "#3e3328" }}>
                <strong>Explicação:</strong> {m.explicacao}
              </p>

              <p style={{ fontSize: "0.9rem", color: "#6b5839", marginBottom: "0.5rem" }}>
                <strong>Origem do mito:</strong> {m.origemDoMito}
              </p>

              {m.fontes && m.fontes.length > 0 && (
                <small style={{ color: "#8b6508", marginTop: "auto", paddingTop: "0.4rem" }}>
                  <IconBooks size={14} style={{ color: '#8b6508' }} /> Fontes: {m.fontes.join(" · ")}
                </small>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          LEGADO E RECONHECIMENTO ECUMÊNICO
         ============================================= */}
      <section id="legado" className={`${styles.secao} secao-anchor`}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconConcilio size={22} style={{ color: '#8b6508' }} /></span> O Legado Transversal do Concílio
        </h2>

        <div style={{ marginBottom: "2.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            <IconCross size={18} style={{ color: '#8b6508' }} /> {legado.teologico.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legado.teologico.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {legado.teologico.pontos.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            <IconConcilio size={18} style={{ color: '#8b6508' }} /> {legado.eclesiastico.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legado.eclesiastico.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {legado.eclesiastico.pontos.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            <IconScales size={18} style={{ color: '#8b6508' }} /> {legado.politico.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legado.politico.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {legado.politico.pontos.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            🎨 {legado.cultural.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legado.cultural.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {legado.cultural.pontos.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "2.5rem", borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            🌐 {legado.ecumenico.titulo}
          </h3>
          <p className={styles.secaoTexto}>{legado.ecumenico.introducao}</p>
          <div className={styles.heresiasGrid} style={{ marginTop: "1rem" }}>
            {legado.ecumenico.pontos.map((pt, i) => (
              <div key={i} className={styles.heresiaCard}>
                <div className={styles.heresiaNome}>{pt.titulo}</div>
                <div className={styles.heresiaErro}>{pt.descricao}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #e0d7c6", paddingTop: "1.5rem" }}>
          <h3 style={{ color: "#8b6508", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            <IconScroll size={18} style={{ color: '#8b6508' }} /> Reconhecimento Ecumênico Oficial
          </h3>
          <p className={styles.secaoTexto}>
            <strong>Confirmação Ecumênica:</strong> {f.reconhecimento.comoEcumenico}.
          </p>
          <p className={styles.secaoTexto}>
            <strong>Aceito universalmente por:</strong> {f.reconhecimento.aceito.join(", ")}.
          </p>

          <div className={styles.destaque} style={{ textAlign: "left", marginTop: "1rem", borderLeftColor: "#bd3a29" }}>
            <strong>Nota de Recepção Histórica:</strong> {f.reconhecimento.controversias}
          </div>

          <p className={styles.secaoTexto} style={{ marginTop: "1.5rem", fontWeight: "500", fontSize: "1.1rem" }}>
            {legado.resumoFinal}
          </p>
        </div>
      </section>

      {/* =============================================
          RECEPÇÃO HISTÓRICA DO CONCÍLIO (382 – ATUALIDADE)
         ============================================= */}
      <section id="recepcao" className={`${styles.secao} secao-anchor`}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconHourglass size={22} style={{ color: '#8b6508' }} /></span> Linha do Tempo da Recepção Histórica (382 d.C. – Atualidade)
        </h2>

        <p className={styles.secaoTexto}>{resumoRecepcao}</p>

        <div className={styles.presidentesLista} style={{ marginTop: "1.5rem" }}>
          {recepcao.map((ev, i) => (
            <div key={i} className={styles.timelineCard}>
              <div className={styles.timelineHeader}>
                <span className={styles.timelineAno}>{ev.periodo}</span>
                <h4 className={styles.timelineTitulo}>{ev.titulo}</h4>
              </div>
              <p className={styles.timelineTexto}>{ev.descricao}</p>
              <p className={styles.timelineImportancia}>
                <strong>Importância histórica:</strong> {ev.importancia}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =============================================
          FONTES E BIBLIOGRAFIA
         ============================================= */}
      <section id="fontes" className={`${styles.secao} secao-anchor`}>
        <h2 className={styles.secaoTitulo}>
          <span className={styles.secaoIcone}><IconBooks size={22} style={{ color: '#8b6508' }} /></span> Fontes e Bibliografia
        </h2>

        <div className={styles.destaque} style={{ textAlign: "left", marginBottom: "2rem" }}>
          <strong style={{ color: "#8b6508" }}>Nota metodológica:</strong>
          <p style={{ marginTop: "0.5rem" }}>{resumoFontes.observacao}</p>
          <p style={{ marginTop: "0.75rem", fontSize: "0.9rem" }}>
            <strong>Totais:</strong> {resumoFontes.totalPrimarias} fontes primárias ·{" "}
            {resumoFontes.totalSecundarias} secundárias · {resumoFontes.totalModernas} modernas ·{" "}
            {resumoFontes.totalRecursos} recursos online
          </p>
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          1. Fontes Primárias — Narrativas Históricas
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesPrimariasHistoricas.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small style={{ color: "#8b6508", display: "block", marginTop: "0.3rem" }}>
                  <IconBook size={14} style={{ color: '#8b6508' }} /> {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          2. Fontes Primárias — Gregório de Nazianzo
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesPrimariasNazianzo.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small style={{ color: "#8b6508", display: "block", marginTop: "0.3rem" }}>
                  <IconBook size={14} style={{ color: '#8b6508' }} /> {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          3. Fontes Primárias — Outros Padres
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesPrimariasOutros.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small style={{ color: "#8b6508", display: "block", marginTop: "0.3rem" }}>
                  <IconBook size={14} style={{ color: '#8b6508' }} /> {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          4. Fontes Primárias — Documentos Oficiais
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesPrimariasDocumentos.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small style={{ color: "#8b6508", display: "block", marginTop: "0.3rem" }}>
                  <IconBook size={14} style={{ color: '#8b6508' }} /> {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          5. Fontes Secundárias Antigas (séc. IV–V)
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesSecundarias.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small style={{ color: "#8b6508", display: "block", marginTop: "0.3rem" }}>
                  <IconBook size={14} style={{ color: '#8b6508' }} /> {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          6. Fontes Modernas — Obras de Referência
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {fontesModernas.map((f, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{f.autor}</div>
              <div className={styles.heresiaLider}>
                <em>{f.titulo}</em> ({f.data}) · {f.idioma}
              </div>
              <div className={styles.heresiaErro}>{f.descricao}</div>
              <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#6b5839" }}>
                <strong>Relevância:</strong> {f.relevancia}
              </p>
              {f.disponibilidade && (
                <small style={{ color: "#8b6508", display: "block", marginTop: "0.3rem" }}>
                  <IconBook size={14} style={{ color: '#8b6508' }} /> {f.disponibilidade}
                </small>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ color: "#8b6508", fontSize: "1.2rem", marginBottom: "1rem" }}>
          7. Recursos Online e Coleções
        </h3>
        <div className={styles.heresiasGrid} style={{ marginBottom: "2rem" }}>
          {recursosOnline.map((r, i) => (
            <div key={i} className={styles.heresiaCard}>
              <div className={styles.heresiaNome}>{r.nome}</div>
              <div className={styles.heresiaErro}>{r.descricao}</div>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#8b6508", fontSize: "0.9rem", marginTop: "0.5rem", display: "inline-block" }}
              >
                🔗 {r.url}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.destaque} style={{ textAlign: "left" }}>
          <strong style={{ color: "#8b6508" }}><IconBook size={16} style={{ color: '#8b6508', verticalAlign: 'middle', marginRight: 6 }} /> Recomendações de leitura:</strong>
          <ul className={styles.resultadosLista} style={{ marginTop: "0.75rem" }}>
            {resumoFontes.recomendacaoLeitura.map((rec, i) => (
              <li key={i}>{rec}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* =============================================
          NAVEGAÇÃO PARA OS DOCUMENTOS
         ============================================= */}
      <nav className={styles.navLinks}>
        <Link
          href="/estudos/concilios/constantinopla-1/documentos"
          className={styles.navLink}
        >
          <IconScroll size={16} style={{ color: '#8b6508', verticalAlign: 'middle', marginRight: 6 }} /> Consultar Documentos e Cânones Integrais →
        </Link>
      </nav>
    </>
  )
}
