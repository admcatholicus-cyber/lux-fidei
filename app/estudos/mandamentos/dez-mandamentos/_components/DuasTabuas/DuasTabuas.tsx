 import CitacaoBiblica from '../CitacaoBiblica/CitacaoBiblica'
import styles from './duasTabuas.module.css'

export default function DuasTabuas() {
  const primeiraTabua = [
    "1º — Como AMAR a Deus (adoração exclusiva)",
    "2º — Como FALAR de Deus (respeito ao nome)",
    "3º — Como HONRAR o tempo de Deus (dia do Senhor)"
  ]

  const segundaTabua = [
    "4º — Honrar os pais e autoridades",
    "5º — Respeitar a vida",
    "6º — Respeitar o corpo e a sexualidade",
    "7º — Respeitar os bens alheios",
    "8º — Respeitar a verdade e a honra",
    "9º — Guardar a pureza do coração",
    "10º — Guardar o desprendimento interior"
  ]

  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>As Duas Tábuas da Lei</h2>

        <p className={styles.introducao}>
          Os Dez Mandamentos foram escritos em duas tábuas de pedra, divididos em dois grupos que refletem a ordem do amor: primeiro Deus, depois o próximo.
        </p>

        <div className={styles.tabuas}>
          {/* Primeira Tábua */}
          <div className={styles.tabua}>
            <h3 className={styles.tabulaTitulo}>Primeira Tábua</h3>
            <p className={styles.tabulaSubtitulo}>Deveres para com Deus</p>
            <p className={styles.tabulaRange}>Mandamentos 1º ao 3º</p>
            <ul className={styles.lista}>
              {primeiraTabua.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Segunda Tábua */}
          <div className={styles.tabua}>
            <h3 className={styles.tabulaTitulo}>Segunda Tábua</h3>
            <p className={styles.tabulaSubtitulo}>Deveres para com o próximo</p>
            <p className={styles.tabulaRange}>Mandamentos 4º ao 10º</p>
            <ul className={styles.lista}>
              {segundaTabua.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.nota}>
          Na segunda tábua, há uma progressão: os mandamentos 5º, 6º e 7º tratam de pecados de ação (o que fazemos), enquanto os mandamentos 8º, 9º e 10º tratam de pecados de intenção (o que pensamos e desejamos).
        </p>

        <CitacaoBiblica
          texto="Amarás o Senhor teu Deus de todo o teu coração, de toda a tua alma e de todo o teu entendimento. Este é o maior e o primeiro mandamento. O segundo é semelhante a este: Amarás o teu próximo como a ti mesmo. Destes dois mandamentos dependem toda a Lei e os Profetas"
          referencia="Mt 22,37-40"
        />
      </div>
    </section>
  )
}

