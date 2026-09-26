'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './documentos.module.css'

// Importação rigorosa de todos os módulos de dados (2A a 2K)
import { credoDossie } from './_data/2a-credo'
import { canonesTextoIntegral, colecoesLatinasCanones } from './_data/2b-canones-historia'
import { cartaSinodalEgipcios, breviariumMelitii } from './_data/2c-oficiais'
import { cartasConstantinoData } from './_data/2d-constantino'
import { dossieArianoData } from './_data/2e-ariano'
import { dossieAlexandrinoData, debateAutoriaAlexandrina } from './_data/2f-alexandrino'
import {
  sinodoAntioquiaDocumento,
  debateAutenticidadeAntioquia,
  emendaCabecalhoAntioquia,
} from './_data/2g-antioquia'
import { testemunhosDebatesData } from './_data/2h-testemunhos'
import { historiadoresAntigosData } from './_data/2i-historiadores'
import {
  provinciasAssinaturasData,
  tradicoesLinguisticasListas,
  analiseCriticaNumero318,
} from './_data/2j-assinaturas'
import { tabelaConcordanciaUrkunden } from './_data/2k-concordancia'

type AbaDossie =
  | '2a' | '2b' | '2c' | '2d' | '2e' | '2f' | '2g'
  | '2h' | '2i' | '2j' | '2k' | '2l' | '2m'

const ABAS_VALIDAS: AbaDossie[] = [
  '2a', '2b', '2c', '2d', '2e', '2f', '2g',
  '2h', '2i', '2j', '2k', '2l', '2m',
]

function ConteudoDossie() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [abaAtiva, setAbaAtiva] = useState<AbaDossie>('2a')

  // Sincroniza a aba com o parâmetro ?aba= da URL
  useEffect(() => {
    const abaParam = searchParams.get('aba') as AbaDossie | null
    if (abaParam && ABAS_VALIDAS.includes(abaParam)) {
      setAbaAtiva(abaParam)
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }, [searchParams])

  const mudarAba = (novaAba: AbaDossie) => {
    setAbaAtiva(novaAba)
    router.push(`/estudos/concilios/niceia-1/documentos?aba=${novaAba}`, { scroll: false })
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pagina}>
        <button
          className={styles.btnVoltar}
          onClick={() => router.push('/estudos/concilios/niceia-1')}
        >
          ← Voltar para o Artigo do Concílio
        </button>

        <header className={styles.header}>
          <h1 className={styles.headerH1}>Dossiê Documental de Niceia I (325 d.C.)</h1>
          <p className={styles.headerSubtitulo}>
            Fontes primárias, textos críticos, tradução e aparato histórico da controvérsia
          </p>
        </header>

        {/* NAVEGAÇÃO DAS 13 ABAS (2A a 2M) */}
        <nav className={styles.navDossies}>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2a' ? styles.ativa : ''}`} onClick={() => mudarAba('2a')}>2A. O Credo</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2b' ? styles.ativa : ''}`} onClick={() => mudarAba('2b')}>2B. Cânones</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2c' ? styles.ativa : ''}`} onClick={() => mudarAba('2c')}>2C. Docs. Oficiais</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2d' ? styles.ativa : ''}`} onClick={() => mudarAba('2d')}>2D. Constantino I</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2e' ? styles.ativa : ''}`} onClick={() => mudarAba('2e')}>2E. Dossiê Ariano</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2f' ? styles.ativa : ''}`} onClick={() => mudarAba('2f')}>2F. Alexandrinos</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2g' ? styles.ativa : ''}`} onClick={() => mudarAba('2g')}>2G. Antioquia 325</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2h' ? styles.ativa : ''}`} onClick={() => mudarAba('2h')}>2H. Testemunhos</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2i' ? styles.ativa : ''}`} onClick={() => mudarAba('2i')}>2I. Historiadores</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2j' ? styles.ativa : ''}`} onClick={() => mudarAba('2j')}>2J. Assinaturas</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2k' ? styles.ativa : ''}`} onClick={() => mudarAba('2k')}>2K. Urkunden</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2l' ? styles.ativa : ''}`} onClick={() => mudarAba('2l')}>2L. Legislação</button>
          <button className={`${styles.btnDossieTab} ${abaAtiva === '2m' ? styles.ativa : ''}`} onClick={() => mudarAba('2m')}>2M. Liturgia</button>
        </nav>

        {/* 2A. O CREDO */}
        {abaAtiva === '2a' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>{credoDossie.titulo}</h2>

            <div className={styles.caixaTextoOriginal}>
              <span className={styles.labelLingua}>Texto Grego Original (Reconstrução Crítica)</span>
              {credoDossie.textos.grego}
            </div>

            <div className={styles.caixaTextoOriginal}>
              <span className={styles.labelLingua}>Texto Latino (Hilário, De synodis 84 / Dionísio Exíguo)</span>
              {credoDossie.textos.latim}
            </div>

            <div className={styles.caixaTextoOriginal}>
              <span className={styles.labelLingua}>Tradução em Português</span>
              {credoDossie.textos.portugues}
            </div>

            <h3>Notas Filológicas</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.tabelaDocumental}>
                <thead>
                  <tr>
                    <th>Termo Grego</th>
                    <th>Tradução</th>
                    <th>Explicação Filológica e Teológica</th>
                  </tr>
                </thead>
                <tbody>
                  {credoDossie.notasFilologicas.map((n, idx) => (
                    <tr key={idx}>
                      <td><strong>{n.termo}</strong><br /><em>({n.transcricao})</em></td>
                      <td>{n.traducao}</td>
                      <td>{n.explicacao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>Análise dos Anátemas Termo a Termo</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.tabelaDocumental}>
                <thead>
                  <tr>
                    <th>Anátema (Grego)</th>
                    <th>Tradução</th>
                    <th>Análise da Tese Ariana Rejeitada</th>
                  </tr>
                </thead>
                <tbody>
                  {credoDossie.anatemas.map((a, idx) => (
                    <tr key={idx}>
                      <td><strong>{a.termo}</strong></td>
                      <td>{a.traducao}</td>
                      <td>{a.analise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>Testemunhos do Texto e Tradição Manuscrita</h3>
            <p>{credoDossie.testemunhos.descricao}</p>
            <ul>
              {credoDossie.testemunhos.fontes.map((f, idx) => (
                <li key={idx}><strong>{f.autor}</strong> ({f.local}): {f.nota}</li>
              ))}
            </ul>
          </section>
        )}

        {/* 2B. CÂNONES */}
        {abaAtiva === '2b' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>2B. Os 20 Cânones (Texto Integral e Tradição Latina)</h2>
            {canonesTextoIntegral.map((c) => (
              <div
                key={c.numero}
                style={{
                  marginBottom: '24px',
                  borderBottom: '1px dashed #e0d4c0',
                  paddingBottom: '16px',
                }}
              >
                <h3>Cânone {c.numero}: {c.titulo}</h3>
                <p style={{ fontStyle: 'italic', color: '#5b2c83' }}>{c.termoGregoChave}</p>
                <p><strong>Tradução:</strong> {c.textoPortugues}</p>
                <p style={{ fontSize: '0.88rem', color: '#666' }}>
                  <strong>Comentário:</strong> {c.comentarioHistorico}
                </p>
              </div>
            ))}

            <h3>As 6 Coleções Latinas Antigas dos Cânones (C. H. Turner, EOMIA)</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.tabelaDocumental}>
                <thead>
                  <tr>
                    <th>Coleção / Versão</th>
                    <th>Código Turner</th>
                    <th>Data</th>
                    <th>História e Importância</th>
                  </tr>
                </thead>
                <tbody>
                  {colecoesLatinasCanones.map((col, idx) => (
                    <tr key={idx}>
                      <td><strong>{col.nome}</strong></td>
                      <td>{col.codigoTurner}</td>
                      <td>{col.dataOrigem}</td>
                      <td>{col.descricao}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 2C. DOCS OFICIAIS */}
        {abaAtiva === '2c' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>
              2C. Documentos Oficiais
              <span className={styles.badgeUrk}>{cartaSinodalEgipcios.numeroOpitz}</span>
            </h2>
            <h3>{cartaSinodalEgipcios.titulo}</h3>
            <p><strong>Fontes:</strong> {cartaSinodalEgipcios.fontesAntigas.join(' · ')}</p>
            <p><strong>Termo-chave:</strong> <em>{cartaSinodalEgipcios.termoChaveGrego}</em></p>
            <p>{cartaSinodalEgipcios.introducao}</p>

            <div className={styles.caixaTextoOriginal}>
              {cartaSinodalEgipcios.textoIntegralPortugues.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <h3 style={{ marginTop: '32px' }}>
              {breviariumMelitii.titulo}{' '}
              <span className={styles.badgeUrk}>{breviariumMelitii.numeroOpitz}</span>
            </h3>
            <p><strong>Fonte:</strong> {breviariumMelitii.fonteAntiga}</p>
            <p>{breviariumMelitii.contextoHistorico}</p>

            <div style={{ overflowX: 'auto' }}>
              <table className={styles.tabelaDocumental}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Bispo Meleciano</th>
                    <th>Sé Episcopal</th>
                    <th>Região do Egito</th>
                  </tr>
                </thead>
               <tbody>
  {breviariumMelitii.listaBispos.map((b: any) => (
    <tr key={b.numero}>
      <td>{b.numero}</td>
      <td><strong>{b.nome || b.bispo || b.nomeBispo}</strong></td>
      <td>{b.seEpiscopal}</td>
      <td>{b.regiao}</td>
    </tr>
  ))}
</tbody>
              </table>
            </div>
          </section>
        )}

        {/* 2D. CONSTANTINO I */}
        {abaAtiva === '2d' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>2D. Cartas e Edictos Imperiais de Constantino I</h2>
            {cartasConstantinoData.map((c) => (
              <div
                key={c.id}
                style={{
                  marginBottom: '28px',
                  borderBottom: '1px solid #e0d4c0',
                  paddingBottom: '20px',
                }}
              >
                <h3>
                  {c.titulo}
                  <span className={styles.badgeUrk}>{c.numeroOpitz}</span>
                </h3>
                <p><strong>Fonte Primária:</strong> {c.fonteAntiga}</p>
                <p><strong>Destinatários:</strong> {c.destinatarios}</p>
                <p><strong>Contexto:</strong> {c.contextoHistorico}</p>
                <div className={styles.caixaTextoOriginal}>{c.trechoChavePortugues}</div>
                <p style={{ fontSize: '0.88rem', color: '#5b2c83' }}>
                  <strong>Relevância Histórica:</strong> {c.importanciaDoc}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* 2E. DOSSIÊ ARIANO */}
        {abaAtiva === '2e' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>2E. Dossiê Ariano e Eusebiano Primitivo</h2>
            {dossieArianoData.map((d) => (
              <div
                key={d.id}
                style={{
                  marginBottom: '32px',
                  borderBottom: '1px solid #e0d4c0',
                  paddingBottom: '24px',
                }}
              >
                <h3>
                  {d.titulo}
                  {d.numeroOpitz && <span className={styles.badgeUrk}>{d.numeroOpitz}</span>}
                </h3>
                <p><strong>Autor:</strong> {d.autor} | <strong>Destinatários:</strong> {d.destinatarios}</p>
                <p><strong>Fonte:</strong> {d.fonteAntiga}</p>
                {d.termoChaveGrego && (
                  <p><strong>Termo Grego:</strong> <em>{d.termoChaveGrego}</em></p>
                )}
                <p>{d.contextoHistorico}</p>
                {d.notaCritica && <div className={styles.caixaAlerta}>{d.notaCritica}</div>}
                <div className={styles.caixaTextoOriginal}>{d.textoIntegralOuTrecho}</div>
              </div>
            ))}
          </section>
        )}

        {/* 2F. ALEXANDRINOS */}
        {abaAtiva === '2f' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>2F. Dossiê Alexandrino (Patriarca Alexandre)</h2>
            {dossieAlexandrinoData.map((doc) => (
              <div
                key={doc.id}
                style={{
                  marginBottom: '28px',
                  borderBottom: '1px solid #e0d4c0',
                  paddingBottom: '20px',
                }}
              >
                <h3>
                  {doc.titulo}
                  <span className={styles.badgeUrk}>{doc.numeroOpitz}</span>
                </h3>
                <p><strong>Fonte:</strong> {doc.fonteAntiga}</p>
                <p><strong>Termo Grego:</strong> <em>{doc.termoChaveGrego}</em></p>
                <p>{doc.contextoHistorico}</p>
                <div className={styles.caixaTextoOriginal}>{doc.textoIntegralOuTrecho}</div>
              </div>
            ))}

            <h3>{debateAutoriaAlexandrina.titulo}</h3>
            <p>{debateAutoriaAlexandrina.contexto}</p>
            {debateAutoriaAlexandrina.teses.map((t, idx) => (
              <div key={idx} className={styles.caixaAlerta}>
                <strong>{t.estudioso}:</strong> {t.argumento}
              </div>
            ))}
          </section>
        )}

        {/* 2G. ANTIOQUIA 325 */}
        {abaAtiva === '2g' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>
              2G. O Sínodo de Antioquia (Início de 325)
              <span className={styles.badgeUrk}>{sinodoAntioquiaDocumento.numeroOpitz}</span>
            </h2>
            <p><strong>Manuscrito:</strong> {sinodoAntioquiaDocumento.manuscritoFonte}</p>
            <p>
              <strong>Presidência Real:</strong> {sinodoAntioquiaDocumento.presidenciaReal} (
              {sinodoAntioquiaDocumento.bisposPresentes} bispos)
            </p>
            <p>{sinodoAntioquiaDocumento.contextoHistorico}</p>

            <div className={styles.caixaTextoOriginal}>
              {sinodoAntioquiaDocumento.trechosChavePortugues.map((t, idx) => (
                <p key={idx}>{t}</p>
              ))}
            </div>

            <h3>{debateAutenticidadeAntioquia.titulo}</h3>
            {debateAutenticidadeAntioquia.historico.map((h, idx) => (
              <div key={idx} style={{ marginBottom: '12px' }}>
                <strong>{h.fase}:</strong> {h.detalhes}
              </div>
            ))}

            <div className={styles.caixaAlerta}>
              <strong>{emendaCabecalhoAntioquia.titulo}:</strong>{' '}
              {emendaCabecalhoAntioquia.explicacao}
            </div>
          </section>
        )}

        {/* 2H. TESTEMUNHOS */}
        {abaAtiva === '2h' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>2H. Testemunhos sobre os Debates de Niceia</h2>
            {testemunhosDebatesData.map((t) => (
              <div
                key={t.id}
                style={{
                  marginBottom: '28px',
                  borderBottom: '1px solid #e0d4c0',
                  paddingBottom: '20px',
                }}
              >
                <h3>
                  {t.titulo}
                  {t.numeroOpitz && <span className={styles.badgeUrk}>{t.numeroOpitz}</span>}
                </h3>
                <p>
                  <strong>Autor:</strong> {t.autor} ({t.posicaoTeologica}) |{' '}
                  <strong>Fonte:</strong> {t.obraFonte}
                </p>
                <p>{t.contexto}</p>
                <div className={styles.caixaTextoOriginal}>{t.textoEpitomePortugues}</div>
                <p style={{ fontSize: '0.88rem', color: '#5b2c83' }}>
                  <strong>Relevância:</strong> {t.importanciaHistorica}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* 2I. HISTORIADORES */}
        {abaAtiva === '2i' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>2I. Historiadores Antigos — Tabela Comparativa de Fontes</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.tabelaDocumental}>
                <thead>
                  <tr>
                    <th>Autor e Obra</th>
                    <th>Data</th>
                    <th>Viés / Perspectiva</th>
                    <th>Proprium (O que só ele traz)</th>
                    <th>Documentos Preservados</th>
                  </tr>
                </thead>
                <tbody>
                  {historiadoresAntigosData.map((h) => (
                    <tr key={h.id}>
                      <td><strong>{h.autor}</strong><br /><em>{h.obra}</em></td>
                      <td>{h.dataComposicao}</td>
                      <td>{h.viesOuPerspectiva}</td>
                      <td>{h.proprium}</td>
                      <td>
                        <ul>
                          {h.documentosPreservados.map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 2J. ASSINATURAS */}
        {abaAtiva === '2j' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>2J. Listas de Assinaturas e Distribuição Geográfica</h2>

            <div className={styles.caixaAlerta}>
              <strong>{analiseCriticaNumero318.titulo}:</strong> {analiseCriticaNumero318.explicacao}
            </div>

            <h3>Distribuição por Províncias e Dioceses Imperiais</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.tabelaDocumental}>
                <thead>
                  <tr>
                    <th>Província Imperial</th>
                    <th>Diocese / Região</th>
                    <th>Bispos Reconstruídos</th>
                    <th>Bispos Notáveis</th>
                    <th>Observação Histórica</th>
                  </tr>
                </thead>
                <tbody>
                  {provinciasAssinaturasData.map((p) => (
                    <tr key={p.id}>
                      <td><strong>{p.provincia}</strong></td>
                      <td>{p.dioceseOuRegiao}</td>
                      <td>{p.numeroBisposReconstruido}</td>
                      <td>{p.bisposNotaveis.join(', ')}</td>
                      <td>{p.observacaoHistorica}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>As 6 Tradições Linguísticas dos Manuscritos das Listas</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.tabelaDocumental}>
                <thead>
                  <tr>
                    <th>Língua</th>
                    <th>Testemunhos Principais</th>
                    <th>Data</th>
                    <th>Valor Crítico</th>
                  </tr>
                </thead>
                <tbody>
                  {tradicoesLinguisticasListas.map((t, idx) => (
                    <tr key={idx}>
                      <td><strong>{t.lingua}</strong></td>
                      <td>{t.testemunhosPrincipais}</td>
                      <td>{t.dataTraducao}</td>
                      <td>{t.valorCritico}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 2K. TABELA URKUNDEN */}
        {abaAtiva === '2k' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>2K. Tabela de Concordância das Urkunden (Opitz 1 a 34)</h2>
            <div style={{ overflowX: 'auto' }}>
              <table className={styles.tabelaDocumental}>
                <thead>
                  <tr>
                    <th>Urk. #</th>
                    <th>Documento e Autores</th>
                    <th>Data</th>
                    <th>Fonte Primária Antiga</th>
                    <th>Edição Crítica</th>
                    <th>Tradução / Referência</th>
                    <th>Resumo</th>
                  </tr>
                </thead>
                <tbody>
                  {tabelaConcordanciaUrkunden.map((u) => (
                    <tr key={u.numeroOpitz}>
                      <td><strong>{u.numeroOpitz}</strong></td>
                      <td>
                        <strong>{u.tituloDocumento}</strong>
                        <br />
                        <em>{u.autorODestinatario}</em>
                      </td>
                      <td>{u.dataAproximada}</td>
                      <td>{u.fontePrimariaAntiga}</td>
                      <td>{u.edicaoCritica}</td>
                      <td>{u.referenciaTraducaoOnline}</td>
                      <td>{u.resumoConteudo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* 2L. LEGISLAÇÃO (placeholder — aguardando criação do arquivo _data/2l-legislacao.ts) */}
        {abaAtiva === '2l' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>
              2L. Legislação Civil e Eclesiástica pós-Niceia
            </h2>
            <div className={styles.caixaAlerta}>
              <strong>Seção em fase de finalização crítica.</strong> Contemplará as principais
              constituições dos Codex Theodosianus (CTh 16.1.2 <em>Cunctos populos</em> de 380;
              CTh 16.5.6 contra os arianos; CTh 16.10.2 sobre templos pagãos) e do Codex
              Justiniano (CJ 1.1.1 <em>De Summa Trinitate et de Fide Catholica</em>) que
              ratificam a fé nicena como lei imperial vigente. Incluirá também os cânones dos
              sínodos regionais pós-nicenos (Sárdica 343, Laodiceia c. 363, Toledo I 400) que
              ampliaram a recepção jurídico-eclesial dos decretos de 325.
            </div>
            <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
              Consulte também as abas <strong>2D (Cartas de Constantino)</strong> e{' '}
              <strong>2K (Urkunden)</strong> para a legislação primária imperial de 313–337.
            </p>
          </section>
        )}

        {/* 2M. LITURGIA (placeholder — aguardando criação do arquivo _data/2m-liturgia.ts) */}
        {abaAtiva === '2m' && (
          <section className={styles.secaoDossie}>
            <h2 className={styles.secaoDossieH2}>
              2M. Recepção do Credo nas Fontes Litúrgicas
            </h2>
            <div className={styles.caixaAlerta}>
              <strong>Seção em fase de finalização crítica.</strong> Contemplará a inserção do
              Credo Niceno-Constantinopolitano nas grandes tradições litúrgicas antigas:
              <ul style={{ marginTop: '12px', paddingLeft: '24px' }}>
                <li>
                  <strong>Tradição Siríaca Oriental</strong> — Anáfora dos Apóstolos Adai e
                  Mari (séc. IV–V)
                </li>
                <li>
                  <strong>Tradição Copta</strong> — Anáfora de São Basílio de Alexandria
                  (recensão copta)
                </li>
                <li>
                  <strong>Tradição Bizantina</strong> — Introdução do Credo na Divina Liturgia
                  de São João Crisóstomo por Timóteo de Constantinopla (511)
                </li>
                <li>
                  <strong>Tradição Hispano-Visigoda</strong> — Introdução do Credo na Missa
                  Romana pelo Concílio III de Toledo (589), sob Recaredo
                </li>
                <li>
                  <strong>Tradição Romana</strong> — Recepção tardia no Ordo Missae de
                  Bento VIII (1014)
                </li>
              </ul>
            </div>
            <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
              Consulte também a aba <strong>2A (Credo)</strong> para o texto grego, latino e
              vernáculo do Símbolo Niceno de 325.
            </p>
          </section>
        )}
      </div>
    </div>
  )
}

export default function DossieDocumentalNiceia() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            color: '#5b2c83',
            fontFamily: 'Georgia, serif',
            fontSize: '1.1rem',
          }}
        >
          Carregando Dossiê Documental...
        </div>
      }
    >
      <ConteudoDossie />
    </Suspense>
  )
}