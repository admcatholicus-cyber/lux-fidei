import styles from '../../../../_styles/especificos/apostolos/sao-lucas/frases/biblioteca.module.css';

interface PassagemLucanaProps {
  titulo: string;
  referencia: string;
  contexto?: string;
  locutor?: string;
  observacao?: string;
  children: React.ReactNode;
}

export default function PassagemLucana({
  titulo,
  referencia,
  contexto,
  locutor,
  observacao,
  children,
}: PassagemLucanaProps) {
  return (
    <article className={styles.passagem}>
      <header className={styles.passHeader}>
        <div className={styles.passSelo}>Exclusivo de Lucas</div>
        <h4 className={styles.passTitulo}>{titulo}</h4>
        {contexto && <div className={styles.passContexto}>{contexto}</div>}
      </header>

      {locutor && (
        <div className={styles.passLocutor}>
          <span className={styles.passLocutorRotulo}>Voz de</span>
          <span className={styles.passLocutorNome}>{locutor}</span>
        </div>
      )}

      <div className={styles.passTexto}>
        {children}
      </div>

      <footer className={styles.passRodape}>
        <div className={styles.passReferencia}>{referencia}</div>
        {observacao && (
          <div className={styles.passObservacao}>{observacao}</div>
        )}
      </footer>
    </article>
  );
}