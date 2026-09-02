 import CitacaoBiblica from '../CitacaoBiblica/CitacaoBiblica'
import styles from './heroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Os Dez Mandamentos</h1>
        <p className={styles.subtitulo}>O Decálogo — as dez palavras de Deus ao seu povo</p>

        <div className={styles.conteudo}>
          <p className={styles.paragrafo}>
            A palavra 'Decálogo' vem do grego 'deka logoi', que significa 'dez palavras'. São os mandamentos que Deus entregou a Moisés no Monte Sinai, escritos pelo próprio dedo de Deus em duas tábuas de pedra. Israel acabava de ser libertado da escravidão no Egito e precisava aprender a viver como povo livre. Os mandamentos não foram dados para escravizar, mas para ensinar o caminho da verdadeira liberdade.
          </p>

          <p className={styles.paragrafo}>
            Os Dez Mandamentos encontram-se em dois livros da Bíblia: Êxodo 20,1-17 e Deuteronômio 5,6-21. Ambos os relatos são precedidos pela mesma declaração de Deus:
          </p>

          <CitacaoBiblica
            texto="Eu sou o Senhor teu Deus, que te fez sair da terra do Egito, da casa da servidão"
            referencia="Êx 20,2"
          />
        </div>
      </div>
    </section>
  )
}

