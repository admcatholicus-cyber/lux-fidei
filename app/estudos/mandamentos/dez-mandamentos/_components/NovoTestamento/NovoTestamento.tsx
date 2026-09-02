 import CitacaoBiblica from '../CitacaoBiblica/CitacaoBiblica'
import styles from './novoTestamento.module.css'

export default function NovoTestamento() {
  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Os Mandamentos no Novo Testamento</h2>

        {/* Subseção 1 — Cumprimento, não abolição */}
        <div className={styles.subsecao}>
          <h3 className={styles.subtitulo}>Cumprimento, não abolição</h3>
          <p className={styles.paragrafo}>
            Jesus deixou claro que não veio destruir ou anular os mandamentos do Antigo Testamento, mas dar-lhes pleno cumprimento. 'Dar cumprimento' significa elevar, completar e interiorizar: o que antes era uma regra externa passa a ser uma exigência do coração.
          </p>
          <CitacaoBiblica
            texto="Não penseis que vim abolir a Lei ou os Profetas. Não vim abolir, mas dar cumprimento"
            referencia="Mt 5,17"
          />
        </div>

        {/* Subseção 2 — Do ato ao coração */}
        <div className={styles.subsecao}>
          <h3 className={styles.subtitulo}>Do ato ao coração</h3>
          <p className={styles.paragrafo}>
            No Sermão da Montanha, Jesus usa a fórmula 'Ouvistes que foi dito... Eu, porém, vos digo...' para mostrar que os mandamentos vão além do ato externo e alcançam a intenção do coração:
          </p>
          <ul className={styles.listaSermao}>
            <li>
              Sobre o homicídio: 'Ouvistes que foi dito: Não matarás. Eu, porém, vos digo: todo aquele que se irar contra seu irmão será réu de juízo' (Mt 5,21-22)
            </li>
            <li>
              Sobre o adultério: 'Ouvistes que foi dito: Não cometerás adultério. Eu, porém, vos digo: todo aquele que olha para uma mulher com desejo já cometeu adultério no coração' (Mt 5,27-28)
            </li>
            <li>
              Sobre o juramento: 'Ouvistes que foi dito: Não jurarás falso. Eu, porém, vos digo: não jureis de modo algum. Seja o vosso falar: sim, sim; não, não' (Mt 5,33-37)
            </li>
          </ul>
        </div>

        {/* Subseção 3 — O Jovem Rico */}
        <div className={styles.subsecao}>
          <h3 className={styles.subtitulo}>Os mandamentos são o mínimo, não o máximo</h3>
          <p className={styles.paragrafo}>
            Um jovem rico perguntou a Jesus: 'Mestre, que farei de bom para ter a vida eterna?' Jesus respondeu citando os mandamentos. O jovem disse: 'Tudo isso tenho guardado desde a juventude. Que me falta ainda?' Jesus então pediu mais: 'Se queres ser perfeito, vai, vende o que tens, dá-o aos pobres e terás um tesouro no céu. Depois vem e segue-me.' O jovem foi embora triste, porque tinha muitos bens.
          </p>
          <CitacaoBiblica
            texto="Se queres ser perfeito, vai, vende o que tens, dá-o aos pobres e terás um tesouro no céu. Depois vem e segue-me"
            referencia="Mt 19,21"
          />
          <p className={styles.paragrafo}>
            A lição é clara: guardar os mandamentos é o ponto de partida da vida cristã, não o ponto de chegada. Jesus convida a ir além, a entregar tudo por amor.
          </p>
        </div>

        {/* Subseção 4 — O Mandamento Novo */}
        <div className={styles.subsecao}>
          <h3 className={styles.subtitulo}>Amar como Jesus amou</h3>
          <p className={styles.paragrafo}>
            Na Última Ceia, Jesus deu um mandamento que não substituiu os dez, mas elevou o padrão de forma radical. O Antigo Testamento dizia 'ama o próximo como a ti mesmo'. Jesus muda o parâmetro: não 'como a ti mesmo', mas 'como Eu vos amei' — um amor até a morte, total e gratuito.
          </p>
          <CitacaoBiblica
            texto="Dou-vos um mandamento novo: que vos ameis uns aos outros. Como eu vos amei, assim também vós deveis amar-vos uns aos outros"
            referencia="Jo 13,34"
          />
        </div>
      </div>
    </section>
  )
}

