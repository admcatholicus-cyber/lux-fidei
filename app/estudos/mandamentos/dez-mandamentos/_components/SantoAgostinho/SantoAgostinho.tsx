import styles from './santoAgostinho.module.css'

export default function SantoAgostinho() {
  return (
    <section className={styles.secao}>
      <div className={styles.container}>

        <h2 className={styles.titulo}>Santo Agostinho e o Decálogo</h2>
        <p className={styles.subtitulo}>O Doutor da Graça e sua influência sobre os mandamentos</p>

        

        {/* CONTRIBUIÇÃO */}
        <div className={styles.bloco}>
          <h3 className={styles.subtitulo3}>A organização dos Mandamentos</h3>
          <p className={styles.paragrafo}>
            Foi Santo Agostinho, no século IV, quem propôs a divisão do Decálogo em duas tábuas com a distribuição 3+7: três mandamentos sobre o amor a Deus, sete sobre o amor ao próximo. Esta divisão foi adotada oficialmente pela Igreja Católica e permanece até hoje no Catecismo.
          </p>
          <p className={styles.paragrafo}>
            Agostinho justificou sua divisão baseando-se no ensinamento de Jesus (Mt 22,37-40): o amor a Deus e o amor ao próximo são os dois grandes mandamentos que resumem toda a Lei. Ao dividir o Decálogo desta forma, ele quis mostrar que os mandamentos não são regras arbitrárias, mas expressões concretas destes dois amores fundamentais.
          </p>
        </div>

        {/* FRASE CÉLEBRE */}
        <div className={styles.bloco}>
          <h3 className={styles.subtitulo3}>Amor e Lei</h3>
          <p className={styles.paragrafo}>
            Para Santo Agostinho, os mandamentos não são um peso imposto de fora, mas o caminho natural do amor. Sua frase mais célebre resume esta visão:
          </p>

          <div className={styles.fraseCelebre}>
            <p className={styles.fraseTexto}>&quot;Ama e faze o que quiseres&quot;</p>
            <cite className={styles.fraseAutor}>— Santo Agostinho, Comentário à Primeira Carta de João</cite>
          </div>

          <p className={styles.paragrafo}>
            Muitos interpretam mal esta frase, pensando que Agostinho autoriza qualquer coisa. Na verdade, ele quer dizer o oposto: quem VERDADEIRAMENTE ama a Deus e ao próximo, naturalmente faz o que Deus manda, porque o amor autêntico não pode querer o mal. Os mandamentos são a expressão externa do que o amor verdadeiro já quer internamente.
          </p>
        </div>

       

      </div>
    </section>
  )
}