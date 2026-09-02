import styles from "@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/referencia/PatristicaGrid.module.css";

type PadreItem = {
  nome: string;
  periodo: string;
  destaque?: string;
  obra: string;
  contribuicao: string;
  edicao?: string;
  colecao?: string;
};

type PatristicaGridProps = {
  titulo?: string;
  introducao?: string;
  itens: PadreItem[];
};

export default function PatristicaGrid({
  titulo = "Padres da Igreja",
  introducao,
  itens,
}: PatristicaGridProps) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.kicker}>Tradição Patrística</span>
        <h3 className={styles.titulo}>{titulo}</h3>
        {introducao && <p className={styles.introducao}>{introducao}</p>}
      </div>

      <div className={styles.grid}>
        {itens.map((item, index) => (
          <article key={`${item.nome}-${index}`} className={styles.card}>
            <div className={styles.cardTop}>
              <div>
                <h4 className={styles.nome}>{item.nome}</h4>
                <p className={styles.periodo}>{item.periodo}</p>
              </div>
              {item.destaque && (
                <span className={styles.badge}>{item.destaque}</span>
              )}
            </div>

            <div className={styles.bloco}>
              <span className={styles.label}>Obra principal</span>
              <p className={styles.texto}>{item.obra}</p>
            </div>

            <div className={styles.bloco}>
              <span className={styles.label}>Contribuição</span>
              <p className={styles.texto}>{item.contribuicao}</p>
            </div>

            {(item.edicao || item.colecao) && (
              <div className={styles.footer}>
                {item.edicao && (
                  <p className={styles.meta}>
                    <strong>Edição:</strong> {item.edicao}
                  </p>
                )}
                {item.colecao && (
                  <p className={styles.meta}>
                    <strong>Coleção:</strong> {item.colecao}
                  </p>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}