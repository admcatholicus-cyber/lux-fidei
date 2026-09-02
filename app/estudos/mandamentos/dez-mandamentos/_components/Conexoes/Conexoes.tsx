 import Link from 'next/link'
import CitacaoBiblica from '../CitacaoBiblica/CitacaoBiblica'
import styles from './conexoes.module.css'

export default function Conexoes() {
  const cards = [
    {
      titulo: "Pecados Veniais e Mortais",
      descricao: "Os mandamentos nos mostram o que é pecado. Entenda a diferença entre pecado venial e mortal.",
      href: "/estudos/pecados/veniais-mortais"
    },
    {
      titulo: "Sacramento da Confissão",
      descricao: "Após o exame de consciência, o próximo passo é o Sacramento da Confissão.",
      href: "/estudos/sacramentos/confissao"
    },
    {
      titulo: "5 Mandamentos da Igreja",
      descricao: "Além dos 10 Mandamentos de Deus, a Igreja tem 5 mandamentos próprios para os fiéis.",
      href: "/estudos/mandamentos/cinco-mandamentos"
    },
    {
      titulo: "Virtudes Cardeais e Teologais",
      descricao: "Os mandamentos exigem virtudes. Conheça as virtudes que nos ajudam a cumpri-los.",
      href: "/estudos/virtudes"
    },
    {
      titulo: "Bem-aventuranças",
      descricao: "Jesus foi além dos mandamentos. As Bem-aventuranças são o retrato do cristão perfeito.",
      href: "/estudos/bem-aventurancas"
    }
  ]

  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Continue seu estudo</h2>

        <div className={styles.grid}>
          {cards.map((card) => (
            <Link href={card.href} className={styles.card} key={card.titulo}>
              <h3 className={styles.cardTitulo}>{card.titulo}</h3>
              <p className={styles.cardDescricao}>{card.descricao}</p>
              <span className={styles.cardSeta}>→</span>
            </Link>
          ))}
        </div>

        <CitacaoBiblica
          texto="Se me amais, guardareis os meus mandamentos"
          referencia="Jo 14,15"
        />
      </div>
    </section>
  )
}

