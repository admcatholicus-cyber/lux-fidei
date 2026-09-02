import styles from './duasVersoes.module.css'

export default function DuasVersoes() {
  return (
    <section className={styles.secao}>
      <div className={styles.container}>

        <h2 className={styles.titulo}>As Duas Versões do Decálogo</h2>
        <p className={styles.subtitulo}>Êxodo 20 e Deuteronômio 5</p>

        {/* INTRODUÇÃO */}
        <p className={styles.paragrafoIntro}>
          Poucos católicos sabem, mas os Dez Mandamentos aparecem DUAS VEZES na Bíblia, com pequenas diferenças. Em Êxodo 20,1-17, é a narrativa do momento em que Moisés recebeu os mandamentos no Sinai. Em Deuteronômio 5,6-21, é o próprio Moisés quem repete os mandamentos ao povo, quase 40 anos depois, antes de eles entrarem na Terra Prometida. As diferenças, embora pequenas, revelam ênfases teológicas importantes.
        </p>

        {/* DIFERENÇAS */}
        <h3 className={styles.subtitulo3}>Onde os textos diferem</h3>

        <div className={styles.diferenca}>
          <h4 className={styles.diferencaTitulo}>Diferença 1 — O motivo do descanso (3º mandamento)</h4>
          <div className={styles.comparacao}>
            <div className={styles.versao}>
              <span className={styles.versaoLabel}>ÊXODO 20,11</span>
              <p className={styles.versaoTexto}>&quot;Porque em seis dias fez o Senhor os céus e a terra... e descansou no sétimo dia&quot;</p>
              <p className={styles.versaoRazao}>Razão: <strong>a criação do mundo</strong></p>
            </div>
            <div className={styles.versao}>
              <span className={styles.versaoLabel}>DEUTERONÔMIO 5,15</span>
              <p className={styles.versaoTexto}>&quot;Lembra-te que foste escravo no Egito e que o Senhor teu Deus te libertou&quot;</p>
              <p className={styles.versaoRazao}>Razão: <strong>a libertação da escravidão</strong></p>
            </div>
          </div>
        </div>

        <div className={styles.diferenca}>
          <h4 className={styles.diferencaTitulo}>Diferença 2 — Ordem no 9º e 10º mandamento</h4>
          <div className={styles.comparacao}>
            <div className={styles.versao}>
              <span className={styles.versaoLabel}>ÊXODO 20,17</span>
              <p className={styles.versaoTexto}>&quot;Não cobiçarás a CASA do teu próximo. Não cobiçarás a MULHER...&quot;</p>
              <p className={styles.versaoRazao}>Ordem: <strong>casa primeiro, depois mulher</strong></p>
            </div>
            <div className={styles.versao}>
              <span className={styles.versaoLabel}>DEUTERONÔMIO 5,21</span>
              <p className={styles.versaoTexto}>&quot;Não cobiçarás a MULHER do teu próximo. Não desejarás a CASA...&quot;</p>
              <p className={styles.versaoRazao}>Ordem: <strong>mulher primeiro, depois casa</strong></p>
            </div>
          </div>
        </div>

        <div className={styles.diferenca}>
          <h4 className={styles.diferencaTitulo}>Diferença 3 — Verbos usados para a cobiça</h4>
          <div className={styles.comparacao}>
            <div className={styles.versao}>
              <span className={styles.versaoLabel}>ÊXODO</span>
              <p className={styles.versaoTexto}>Usa o mesmo verbo hebraico <em>chamad</em> (cobiçar) para tudo.</p>
            </div>
            <div className={styles.versao}>
              <span className={styles.versaoLabel}>DEUTERONÔMIO</span>
              <p className={styles.versaoTexto}>Usa dois verbos diferentes: <em>chamad</em> (cobiçar) para a mulher e <em>awah</em> (desejar) para os bens.</p>
              <p className={styles.versaoRazao}>Distingue mais claramente os dois pecados.</p>
            </div>
          </div>
        </div>

        {/* POR QUE DUAS VERSÕES */}
        <h3 className={styles.subtitulo3}>A pedagogia divina</h3>
        <p className={styles.paragrafo}>
          A existência de duas versões não é contradição, mas pedagogia divina. Cada versão foi dirigida a uma situação diferente do povo:
        </p>

        <div className={styles.pedagogia}>
          <div className={styles.pedagogiaCard}>
            <h4 className={styles.pedagogiaTitulo}>ÊXODO</h4>
            <p className={styles.pedagogiaSubtitulo}>Para o povo que acabou de sair do Egito</p>
            <p className={styles.pedagogiaTexto}>É o registro histórico do momento fundacional. O foco está na CRIAÇÃO como base da lei: Deus é o Criador de tudo, portanto tem autoridade para ordenar. O povo ainda vivia a experiência recente da libertação.</p>
          </div>
          <div className={styles.pedagogiaCard}>
            <h4 className={styles.pedagogiaTitulo}>DEUTERONÔMIO</h4>
            <p className={styles.pedagogiaSubtitulo}>Para o povo que entra na Terra Prometida</p>
            <p className={styles.pedagogiaTexto}>Escrito 40 anos depois, é a pregação de Moisés ao povo já educado no deserto. O foco muda para a LIBERTAÇÃO como base da lei: &quot;lembra-te que foste escravo&quot;. Deus quer que Israel nunca esqueça de onde veio e por que deve ser fiel.</p>
          </div>
        </div>

        {/* O QUE A IGREJA DIZ */}
        <h3 className={styles.subtitulo3}>A Tradição Católica</h3>
        <p className={styles.paragrafo}>
          A Igreja Católica sempre reconheceu ambas as versões como inspiradas por Deus. Os Padres da Igreja, especialmente Santo Agostinho, comentaram as diferenças mostrando que elas enriquecem, e não contradizem, o significado dos mandamentos. O texto que a catequese tradicional utiliza é uma síntese das duas versões, formulada para facilitar a memorização e a transmissão da fé.
        </p>

      </div>
    </section>
  )
}