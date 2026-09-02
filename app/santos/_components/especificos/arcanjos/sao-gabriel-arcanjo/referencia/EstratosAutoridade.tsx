import styles from "@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/referencia/EstratosAutoridade.module.css";

type Estrato = {
  nivel: string;
  titulo: string;
  descricao: string;
};

type EstratosAutoridadeProps = {
  itens: Estrato[];
};

export default function EstratosAutoridade({ itens }: EstratosAutoridadeProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.header}>
        <span className={styles.kicker}>Critério metodológico</span>
        <h3 className={styles.title}>Estratos de autoridade das fontes</h3>
        <p className={styles.subtitle}>
          Nem todas as afirmações sobre Gabriel possuem o mesmo peso
          epistemológico. Este dossiê distingue os seguintes estratos, em ordem
          decrescente de autoridade.
        </p>
      </div>

      <div className={styles.stack}>
        {itens.map((item, index) => (
          <article
            key={`estrato-${index}`}
            className={styles.layer}
            style={{ "--index": index } as React.CSSProperties}
          >
            <div className={styles.levelWrap}>
              <div className={styles.level}>
                <span className={styles.levelInner}>{item.nivel}</span>
              </div>
              {index < itens.length - 1 && (
                <div className={styles.connector} aria-hidden="true" />
              )}
            </div>

            <div className={styles.content}>
              <h4 className={styles.layerTitle}>{item.titulo}</h4>
              <p className={styles.layerText}>{item.descricao}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}