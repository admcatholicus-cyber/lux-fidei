'use client'

import styles from '../niceia-1.module.css'
import { TabsInternas } from './TabsInternas'
import { MitoCard } from './MitoCard'
import { mitosData } from '../_data/mitos'
import {
  posConcilioLinhaTempo,
  recepcaoLatinaData,
  recepcaoModernidadeData,
  recepcaoIslaData,
  recepcaoNeoArianismosData,
  lendasData,
  arqueologiaData,
  liturgiaFestaData,
  aniversario2025Data,
  bibliografiaData
} from '../_data/outrosDados'

export function SecaoLegado() {
  return (
    <>
      {/* 🔄 NOVA SEÇÃO: PÓS-CONCÍLIO (Itens 62–66) */}
      <section className={`${styles.secao} secao-anchor`} id="pos-concilio">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🔄 Pós-Concílio: A Longa Crise (339–381)</h2>
        </div>
        <p>A assinatura em 325 não encerrou a controvérsia. Foram necessários mais de 50 anos de lutas teológicas e políticas até a confirmação definitiva no Concílio de Constantinopla I (381).</p>
        
        <TabsInternas tabs={[
          {
            id: 'pos-linha',
            label: 'Linha do Tempo (339–383)',
            content: (
              <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                  {posConcilioLinhaTempo.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '0.75rem', fontSize: '0.92rem', borderBottom: '1px solid var(--borda, #eee)', paddingBottom: '0.5rem' }}>
                      <strong style={{ color: 'var(--cor-primaria, #0056b3)' }}>{item.ano}:</strong> {item.texto}
                    </li>
                  ))}
                </ul>
              </div>
            )
          },
          {
            id: 'pos-ocidente',
            label: 'Recepção no Ocidente',
            content: (
              <>
                <h3>{recepcaoLatinaData.titulo}</h3>
                <p>{recepcaoLatinaData.conteudo}</p>
              </>
            )
          },
          {
            id: 'pos-decisao381',
            label: 'O que 381 Decidiu',
            content: (
              <>
                <h3>O Concílio de Constantinopla I (381)</h3>
                <p>Convocado por Teodósio I apenas para o Oriente (150 bispos; Roma e o Ocidente ausentes). Reafirmou Niceia, condenou os pneumatômacos e expandiu o artigo sobre o Espírito Santo no Credo. Promulgou 4 cânones autênticos (Cân. 3: primazia de honra a Constantinopla após Roma). Reconhecido como ecumênico em Calcedônia (451).</p>
              </>
            )
          },
          {
            id: 'pos-germanico',
            label: 'Arianismo Germânico',
            content: (
              <>
                <h3>A Fé dos Povos Germânicos (341 – séc. VII)</h3>
                <p>Consagrado em 341 por Eusébio de Nicomédia, Úlfilas converteu os godos criando o alfabeto gótico e traduzindo a Bíblia. Os reinos Visigodo, Ostrogodo e Vândalo mantiveram o arianismo homoiano como identidade étnica. A crise encerrou-se com a conversão do rei Recaredo no III Concílio de Toledo (589).</p>
              </>
            )
          }
        ]} />
      </section>

      {/* 🌐 RECEPÇÃO ECUMÊNICA (Itens 67–71) */}
      <section className={`${styles.secao} secao-anchor`} id="recepcao">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🌐 Recepção Ecumênica Global</h2>
        </div>
        <p>O Credo de Niceia é a profissão de fé mais universal do cristianismo. Abaixo, a recepção pelas diferentes tradições:</p>

        {/* Tradições */}
        <div className={styles.recepcaoGrid}>
          <div className={styles.recepcaoCard}>
            <div className={styles.cardIconBox}>
              <svg viewBox="0 0 24 24"><path d="M12 2v20M5 7h14" /></svg>
            </div>
            <div className={styles.cardBody}>
              <h4 className={styles.cardTitle}>Igreja Católica</h4>
              <p className={styles.cardText}>
                Reconhece Niceia I como o 1.º dos 21 Concílios Ecumênicos. É a base da teologia sobre a Trindade e o Papado.
              </p>
            </div>
          </div>
          <div className={styles.recepcaoCard}>
            <div className={styles.cardIconBox}>
              <svg viewBox="0 0 24 24"><path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" /><circle cx="12" cy="10" r="2" /></svg>
            </div>
            <div className={styles.cardBody}>
              <h4 className={styles.cardTitle}>Ortodoxia Bizantina e Oriental</h4>
              <p className={styles.cardText}>
                Considerado o &ldquo;Concílio por excelência&rdquo;. Aceito por Coptas, Armênios, Etíopes e Gregos como o pilar inviolável da fé.
              </p>
            </div>
          </div>
          <div className={styles.recepcaoCard}>
            <div className={styles.cardIconBox}>
              <svg viewBox="0 0 24 24"><path d="M12 2v8M8 6l4 4 4-4M4 14c2 2 4 3 8 3s6-1 8-3" /><path d="M6 18c2 1 4 2 6 2s4-1 6-2" /></svg>
            </div>
            <div className={styles.cardBody}>
              <h4 className={styles.cardTitle}>Igrejas Protestantes e Anglicanas</h4>
              <p className={styles.cardText}>
                Luteranos, Presbiterianos, Anglicanos e Batistas reconhecem Niceia como a expressão fiel do ensino bíblico sobre a divindade de Cristo.
              </p>
            </div>
          </div>
        </div>

        {/* Reforma, Islã e Neo-arianismo */}
        <h3 className={styles.subtitulo}>Recepção por Tradições Não-Nicenas</h3>
        <div className={styles.naoNicenaContainer}>
          <div className={styles.barHorizontalCard}>
            <div className={styles.barIconBox}>
              <svg viewBox="0 0 24 24"><path d="M4 19V5a2 2 0 012-2h8l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2z" /><path d="M14 3v6h6" /><path d="M9 13h6M9 17h4" /></svg>
            </div>
            <div className={styles.barContentBox}>
              <h4 className={styles.barTitle}>{recepcaoModernidadeData.titulo}</h4>
              <p className={styles.barText}>{recepcaoModernidadeData.conteudo}</p>
            </div>
          </div>
          <div className={styles.barHorizontalCard}>
            <div className={styles.barIconBox}>
              <svg viewBox="0 0 24 24"><path d="M12 2C8 2 4 6 4 10c0 6 8 12 8 12s8-6 8-12c0-4-4-8-8-8z" /><circle cx="12" cy="10" r="2" /></svg>
            </div>
            <div className={styles.barContentBox}>
              <h4 className={styles.barTitle}>{recepcaoIslaData.titulo}</h4>
              <p className={styles.barText}>{recepcaoIslaData.conteudo}</p>
            </div>
          </div>
          <div className={styles.barHorizontalCard}>
            <div className={styles.barIconBox}>
              <svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </div>
            <div className={styles.barContentBox}>
              <h4 className={styles.barTitle}>{recepcaoNeoArianismosData.titulo}</h4>
              <p className={styles.barText}>{recepcaoNeoArianismosData.conteudo}</p>
            </div>
          </div>
        </div>

        {/* Impacto Duradouro */}
        <div>
          <h3 className={styles.subtitulo}>Impacto Duradouro na Civilização</h3>
          <div className={styles.impactoGrid}>
            <div className={styles.impactoCard}>
              <div className={styles.cardIconBox}>
                <svg viewBox="0 0 24 24"><path d="M3 21h18M3 7v14M21 7v14M6 7V4h12v3M9 21V11h6v10" /></svg>
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>Autoridade Conciliar</h4>
                <p className={styles.cardText}>
                  Estabeleceu a assembleia de bispos como autoridade máxima da Igreja.
                </p>
              </div>
            </div>
            <div className={styles.impactoCard}>
              <div className={styles.cardIconBox}>
                <svg viewBox="0 0 24 24"><path d="M12 2v20M5 7h14" /></svg>
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>Doutrina da Salvação</h4>
                <p className={styles.cardText}>
                  Garantiu a fé de que só o próprio Deus encarnado poderia salvar a humanidade.
                </p>
              </div>
            </div>
            <div className={styles.impactoCard}>
              <div className={styles.cardIconBox}>
                <svg viewBox="0 0 24 24"><path d="M7 11V7a5 5 0 0110 0v4M5 11h14v10H5z" /><path d="M12 15v4" /></svg>
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>Unidade Cristã</h4>
                <p className={styles.cardText}>
                  O único credo compartilhado por quase todas as vertentes cristãs no mundo.
                </p>
              </div>
            </div>
            <div className={styles.impactoCard}>
              <div className={styles.cardIconBox}>
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M3 9h18" /></svg>
              </div>
              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>Relação Igreja e Estado</h4>
                <p className={styles.cardText}>
                  Inaugurou a era em que o Estado romano interveio na organização eclesiástica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🕯️ DIMENSÃO LITÚRGICA, MUSICAL E ICONOGRÁFICA (Itens 72–76) */}
      <section className={`${styles.secao} secao-anchor`} id="liturgia">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🕯️ Liturgia, Música e Iconografia</h2>
        </div>
        <TabsInternas tabs={[
          {
            id: 'lit-festa',
            label: 'Festa dos 318 Padres',
            content: (
              <>
                <h3>{liturgiaFestaData.titulo}</h3>
                <p>{liturgiaFestaData.conteudo}</p>
              </>
            )
          },
          {
            id: 'lit-missa',
            label: 'Do Sínodo à Missa',
            content: (
              <>
                <h3>A Entrada do Credo na Liturgia Eucarística</h3>
                <p>O Símbolo Niceno não foi composto para o culto diário. Foi introduzido na missa em Antioquia (476) e Constantinopla (511) pelos monofisitas. No Ocidente, ingressou no III Concílio de Toledo (589) com a adição do Filioque para combater o arianismo visigótico, sendo adotado em Roma apenas em 1014 pelo Papa Bento VIII.</p>
              </>
            )
          },
          {
            id: 'lit-musica',
            label: 'O Credo na Música',
            content: (
              <>
                <h3>Grandes Obras Musicais</h3>
                <p>Do cantochão monódico (Credo I e III) à polifonia de Palestrina (Missa Papae Marcelli) e Machaut. O Credo atingiu o apogeu barroco na Missa em Si menor de J. S. Bach (Symbolum Nicenum), e no repertório clássico de Mozart, Beethoven (Missa Solemnis), Rachmaninoff, Pärt e a Missa dos Quilombos (1982).</p>
              </>
            )
          },
          {
            id: 'lit-iconografia',
            label: 'Iconografia Conciliar',
            content: (
              <>
                <h3>Representações Visuais</h3>
                <p>O tipo bizantino retrata Constantino I ao centro, os bispos em semicírculo com os pergaminhos do Credo, a Hetimasía (trono com o Evangelho) e Ário prostrado e vencido aos seus pés. Exemplares em Paris.gr. 510, Grande Meteoro e mosteiros da Bucovina.</p>
              </>
            )
          }
        ]} />
      </section>

      {/* ❌ MITOS POPULARES DESMENTIDOS (Item 77) */}
      <section className={`${styles.secao} secao-anchor`} id="mitos">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>❌ Mitos Populares Desmentidos</h2>
        </div>
        <p>Devido à cultura pop (como <em>O Código Da Vinci</em>) e panfletos anticatólicos, Niceia atrai muitas lendas modernas. Abaixo desmentimos as 12 principais:</p>
        <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
          {mitosData.map(mito => <MitoCard key={mito.id} {...mito} />)}
        </div>
      </section>

      {/* 🎨 LENDAS ANTIGAS E ARQUEOLOGIA (Itens 78–79) */}
      <section className={`${styles.secao} secao-anchor`} id="lendas-arqueologia">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🎨 Lendas Antigas e Arqueologia</h2>
        </div>
        <TabsInternas tabs={[
          ...lendasData.map((l, i) => ({
            id: `lenda-${i}`,
            label: l.titulo,
            content: <><h3>{l.titulo}</h3><p>{l.conteudo}</p></>
          })),
          {
            id: 'arq',
            label: 'Basílica Submersa',
            content: <><h3>{arqueologiaData.titulo}</h3><p>{arqueologiaData.conteudo}</p></>
          }
        ]} />
      </section>

      {/* 🎉 O JUBILEU DE 2025 (Item 80) */}
      <section className={`${styles.secao} secao-anchor`} id="aniversario-1700">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🎉 {aniversario2025Data.titulo}</h2>
        </div>
        <p>{aniversario2025Data.conteudo}</p>
        <ul style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
          {aniversario2025Data.pontos.map((pt, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{pt}</li>)}
        </ul>
      </section>

      {/* 📚 FONTES E HISTORIOGRAFIA (Itens 81–84) */}
      <section className={`${styles.secao} secao-anchor`} id="fontes">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>📚 Fontes e Historiografia</h2>
        </div>
        <TabsInternas tabs={[
          {
            id: 'bib1', label: 'Fontes Primárias',
            content: <ul>{bibliografiaData.oficiais.map((o, i) => <li key={i}>{o}</li>)}</ul>
          },
          {
            id: 'bib2', label: 'Em Português',
            content: <ul>{bibliografiaData.livrosPt.map((l, i) => <li key={i}>{l}</li>)}</ul>
          },
          {
            id: 'bib3', label: 'Acadêmica',
            content: <ul>{bibliografiaData.livrosEn.map((l, i) => <li key={i}>{l}</li>)}</ul>
          },
          {
            id: 'bib4', label: 'Fontes Online',
            content: <ul>{bibliografiaData.online.map((on, i) => <li key={i}>{on}</li>)}</ul>
          },
          {
            id: 'bib5', label: 'Crítica das Fontes',
            content: <ul>{bibliografiaData.criticaFontes.map((c, i) => <li key={i}>{c}</li>)}</ul>
          },
          {
            id: 'bib6', label: 'Aporias e Incertezas',
            content: <ul>{bibliografiaData.aporias.map((a, i) => <li key={i}>{a}</li>)}</ul>
          }
        ]} />
      </section>
    </>
  )
}