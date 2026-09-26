'use client'

import styles from '../niceia-1.module.css'
import { Accordion } from './Accordion'
import { TabsInternas } from './TabsInternas'
import { CanonCard } from './CanonCard'
import { canonesData, tradicaoCanonicaData } from '../_data/canones'

// Mapeamento dos rótulos corretos para as abas da Tradição Canônica
const rotulosTradiroes: Record<string, string> = {
  apiario: 'Caso Apiário (419)',
  interpolacao: 'Interpolação do cân. 6 (451)',
  pseudo: 'Pseudo-cânones',
  justiniano: 'Justiniano (Nov. 131)',
  transmissao: 'Transmissão textual',
  comentadores: 'Os comentadores'
}

export function SecaoDisciplina() {
  return (
    <>
      {/* 1. OS 20 CÂNONES */}
      <section className={`${styles.secao} secao-anchor`} id="canones">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>⚖️ Os 20 Cânones Disciplinares</h2>
        </div>
        <p>Clique em qualquer cânone para expandir os detalhes. São a primeira legislação eclesiástica de alcance universal da história cristã.</p>
        
        <div className={styles.canonesGrid}>
          {canonesData.map(c => <CanonCard key={c.num} {...c} />)}
        </div>

    
      </section>

      {/* 2. TRADIÇÃO CANÔNICA POSTERIOR */}
      <section className={`${styles.secao} secao-anchor`} id="tradicao-canonica">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>📜 Tradição Canônica Posterior</h2>
        </div>
        <TabsInternas tabs={tradicaoCanonicaData.map((item) => {
          const chaveId = item.id.toLowerCase()
          let rotulo = item.titulo

          if (chaveId.includes('apiario')) rotulo = rotulosTradiroes.apiario
          else if (chaveId.includes('interpol')) rotulo = rotulosTradiroes.interpolacao
          else if (chaveId.includes('pseudo')) rotulo = rotulosTradiroes.pseudo
          else if (chaveId.includes('justin')) rotulo = rotulosTradiroes.justiniano
          else if (chaveId.includes('transm')) rotulo = rotulosTradiroes.transmissao
          else if (chaveId.includes('coment')) rotulo = rotulosTradiroes.comentadores
          else if (rotulosTradiroes[item.id]) rotulo = rotulosTradiroes[item.id]

          return {
            id: item.id,
            label: rotulo,
            content: <>
              <h3>{item.titulo}</h3>
              <p><strong>Resumo:</strong> {item.resumo}</p>
              <p>{item.conteudo}</p>
            </>
          }
        })} />
      </section>

      {/* 3. A QUESTÃO DA PÁSCOA (Itens 55, 56 e 57) */}
      <section className={`${styles.secao} secao-anchor`} id="pascoa">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>🌕 A Questão da Páscoa</h2>
        </div>
        <TabsInternas tabs={[
          {
            id: 'pas-antes',
            label: 'Antes de 325',
            content: (
              <>
                <h3>As divergências pascais pré-nicenas</h3>
                <p>
                  No século II, Policarpo de Esmirna e o papa Aniceto debateram em Roma (c. 155) divergências de calendário sem romper a comunhão. Por volta de 190, o papa Vítor I ameaçou excomungar as igrejas da Ásia Menor, gerando sínodos em Roma, Palestina (Teófilo de Cesareia, Narciso de Jerusalém), Ponto, Gália e Osroene, até a mediação pacificadora de Irineu de Lião.
                </p>
                <p>
                  O desafio técnico envolvia a fixação do equinócio vernal e o ciclo lunar (ciclos de 8, 16 e 19 anos propostos por Hipólito em 222 e Anatólio de Laodiceia c. 277; sínodo de Arles 314 cân. 1). Em 325, o quartodecimanismo estrito (14 de Nisã exato) era residual; a disputa real ocorria entre os "protopasquitas" sírios (que calculavam a Páscoa pelo calendário lunar judaico, por vezes celebrando antes do equinócio) e as sés de Alexandria e Roma, que exigiam a Páscoa sempre após o equinócio vernal.
                </p>
              </>
            )
          },
          {
            id: 'pas-decisao',
            label: 'A Decisão: o que temos e o que não temos',
            content: (
              <>
                <h3>O consenso e os registros textuais</h3>
                <p>
                  O concílio exigiu uniformidade universal: <em>"todos os irmãos do Oriente celebrem com Roma, Alexandria e nós"</em>. Constantino reforçou a determinação em tom fortemente antijudaico: <em>"nada em comum com os judeus"</em>.
                </p>
                <p>
                  <strong>O que não sobreviveu:</strong> Não há cânone pascal numérico entre os 20 cânones nicenos preservados. Estabeleceu-se uma divisão prática de funções: o Patriarcado de Alexandria (centro de ciência astronômica) calculava a data exata e informava a Sé de Roma, que comunicava universalmente as igrejas latinas.
                </p>
                <div className={styles.caixaAlerta}>
                  <strong>Nota Técnica:</strong> A famosa fórmula "primeiro domingo após a primeira lua cheia posterior ao equinócio da primavera" não é um cânone literal de 325, mas a síntese computacional do método astronômico alexandrino consagrado no concílio.
                </div>
              </>
            )
          },
          {
            id: 'pas-depois',
            label: 'Depois de 325 (341–2025)',
            content: (
              <>
                <h3>Desdobramentos históricos e o horizonte ecumênico</h3>
                <p>
                  O Concílio de Antioquia (341, cân. 1) depôs quem insistisse em celebrar com o cômputo judaico. Divergências de tabelas astronômicas causaram descompassos pontuais (em 387, Roma e Alexandria celebraram com 5 semanas de diferença). O ciclo alexandrino de 19 anos foi recepcionado no Ocidente por Vitório de Aquitânia (457) e consolidado por Dionísio Exíguo (525), que dessa tabela derivou a era cristã <em>Anno Domini</em>. No Sínodo de Whitby (664), a Bretanha celta adotou o modelo romano-alexandrino.
                </p>
                <p>
                  Com a introdução do calendário gregoriano (1582), reabriu-se a discrepância com as igrejas ortodoxas e orientais (que mantêm o calendário juliano), gerando diferenças de até cinco semanas. A Consulta de Alepo (1997, CMI/CEMO) propôs o cálculo astronômico exato baseado no meridiano de Jerusalém. Em <strong>2025</strong>, os 1700 anos do concílio coincidem com a celebração conjunta da Páscoa em <strong>20 de abril</strong> em todo o mundo cristão (<a href="#aniversario-1700">ver 🎉 Jubileu de 2025</a>), ensejando novas declarações conjuntas do Patriarca Bartolomeu e da Sé de Roma em vista de uma data unificada definitiva.
                </p>
              </>
            )
          }
        ]} />
      </section>

      {/* 4. O CISMA MELECIANO E OUTRAS HERESIAS (Itens 58, 59, 60 e 61) */}
      <section className={`${styles.secao} secao-anchor`} id="melecio">
        <div className={styles.secaoHeader}>
          <h2 className={styles.secaoH2}>✂️ O Cisma Meleciano e Outras Heresias</h2>
        </div>
        <TabsInternas tabs={[
          {
            id: 'mel1',
            label: 'Cisma Meleciano',
            content: (
              <>
                <p>O cisma do bispo Melécio de Licópolis dividiu profundamente o Egito durante as perseguições e exigiu intervenção direta dos Padres conciliares:</p>
                
                {/* Item 58: Origem do cisma */}
                <Accordion id="mel-origem" titulo={<><strong>1. Origem do cisma (305–311)</strong></>}>
                  <p>
                    Durante a perseguição de Diocleciano (305/306), Melécio de Licópolis ordenou presbíteros e diáconos em dioceses cujos bispos estavam presos ou exilados, intervindo inclusive na sé episcopal de Alexandria. Quatro bispos encarcerados (Hesíquio, Pacômio, Teodoro e Fileias) enviaram-lhe uma carta formal de repreensão; Pedro de Alexandria excomungou-o sumariamente.
                  </p>
                  <p>
                    A carta canônica de Pedro (306) estipulou as regras de penitência e readmissão que serviram de modelo para os cânones 11–14 de Niceia. Condenado aos trabalhos forçados nas minas de Faeno (Palestina), Melécio manteve uma postura rigorista inflexível contra a readmissão dos <em>lapsi</em> (cristãos que cederam à perseguição), fundando a facção autodenominada "Igreja dos Mártires", que contava com cerca de 29 bispos em 325.
                  </p>
                </Accordion>

                {/* Item 59: A solução de Niceia */}
                <Accordion id="mel-solucao" titulo={<><strong>2. A solução de Niceia e a <em>cheirotonía mystikōtéra</em></strong></>}>
                  <p>
                    A Carta Sinodal aos Alexandrinos estipulou uma saída conciliatória: Melécio permaneceu em Licópolis com dignidade episcopal nominal, mas privado do poder de ordenar clérigos. Os clérigos por ele ordenados foram admitidos após confirmação por uma "imposição de mãos mais mística" (<em>cheirotonía mystikōtéra</em>), mantendo seu posto hierárquico abaixo dos clérigos legítimos de Alexandre. Em caso de vacância diocesana, o bispo meleciano poderia suceder se eleito pelo povo e aprovado pelo bispo de Alexandria.
                  </p>
                  <p>
                    A historiografia discute se o termo significava reordenação sacramental (Hefele) ou um rito de reconciliação e bênção canônica (leitura majoritária atual), assemelhando-se à recepção benévola dos novacianos (cân. 8) e contrastando com o rebatismo obrigatório dos seguidores de Paulo de Samósata (cân. 19). Atanásio lamentou profundamente o compromisso: <em>"quem dera o sínodo nunca o tivesse admitido!"</em>
                  </p>
                </Accordion>

                {/* Item 60: O fracasso */}
                <Accordion id="mel-fracasso" titulo={<><strong>3. O fracasso: de João Arcaf a Isquiras (327–335)</strong></>}>
                  <p>
                    Com a morte de Melécio (c. 327), seu sucessor João Arcaf violou o acordo e aliou-se abertamente à facção eusebiana para desestabilizar Atanásio em Alexandria. Multiplicaram-se acusações forjadas contra o patriarca: a destruição do cálice sagrado do suposto presbítero Isquiras (ordenado pelo cismático Coluto, que não tinha ordens episcopais) e o assassinato de Arsênio de Hypsele, cuja "mão decepada" era exibida pelos detratores até Atanásio apresentar o homem vivo e ileso diante dos juízes.
                  </p>
                  <p>
                    Essas maquinações culminaram na deposição injusta de Atanásio no Sínodo de Tiro (335). O cisma meleciano persistiu no Alto Egito ao longo dos séculos, transmutando-se em comunidades monásticas identificadas em papiros até o século VIII.
                  </p>
                </Accordion>
              </>
            )
          },
          {
            id: 'mel2',
            label: 'Novacianos (Cân. 8)',
            content: (
              <>
                <h3>Os <em>Katharoi</em> ("Puros")</h3>
                <p>
                  Cisma de matriz rigorista surgido em Roma no século III sob Novaciano, que recusava a reconciliação canônica aos <em>lapsi</em> e aos que contraíam segundas núpcias. O Concílio de Niceia reconheceu a plena validade da fé trinitária novaciana: o Cânone 8 determinou que seus clérigos fossem recebidos na comunhão católica mediante imposição de mãos e confissão escrita de submissão aos decretos eclesiais, sem necessidade de reordenação.
                </p>
              </>
            )
          },
          {
            id: 'mel3',
            label: 'Paulianistas (Cân. 19)',
            content: (
              <>
                <h3>Adeptos de Paulo de Samósata</h3>
                <p>
                  Diferentemente dos novacianos, os discípulos de Paulo de Samósata (monarquianos dinâmicos condenados em Antioquia em 268) defendiam uma cristologia na qual Jesus era um mero homem sobre o qual o Logos repousara por habitação moral, sem verdadeira união substancial divina.
                </p>
              </>
            )
          },
          {
            id: 'mel4',
            label: 'Quadro Comparativo: Heresias e Cismas',
            content: (
              <>
                {/* Item 61: Quadro comparativo */}
                <h3>Critérios de Discernimento em Niceia</h3>
                <p>
                  A práxis conciliar estabeleceu uma distinção teológica e canônica basilar entre <strong>heresia</strong> (desvio substantivo da fé trinitária e cristológica) e <strong>cisma</strong> (ruptura disciplinar ou jurisdicional com fé ortodoxa intacta), ecoada pela patrística:
                </p>
                <div style={{ overflowX: 'auto' }}>
                  <table className={styles.tabelaComparativa} style={{ width: '100%', fontSize: '0.9rem', borderCollapse: 'collapse', marginTop: '0.75rem' }}>
                    <thead>
                      <tr style={{ background: 'var(--fundo-destaque, #f3f4f6)', textAlign: 'left' }}>
                        <th style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Grupo</th>
                        <th style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Classificação</th>
                        <th style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Decisão Nicena</th>
                        <th style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Tratamento Sacramental</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}><strong>Arianismo</strong></td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Heresia radical</td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Condenação dogmática e anátemas</td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Excomunhão e deposição de clérigos</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}><strong>Paulianistas</strong></td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Heresia trinitária</td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Cânone 19</td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Batismo inválido; <strong>rebatismo obrigatório</strong></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}><strong>Novacianos</strong></td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Cisma rigorista</td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Cânone 8</td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Batismo válido; acolhida por profissão de fé</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}><strong>Melecianos</strong></td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Cisma jurisdicional</td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Carta Sinodal aos Alexandrinos</td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Reconciliação por <em>cheirotonía mystikōtéra</em></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}><strong>Protopasquitas</strong></td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Divergência de calendário</td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Decreto pascal / Carta Imperial</td>
                        <td style={{ padding: '8px', border: '1px solid var(--borda, #ddd)' }}>Uniformização astronômica obrigatória</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )
          }
        ]} />
      </section>
    </>
  )
}