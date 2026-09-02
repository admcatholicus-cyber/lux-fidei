import styles from '../../../../_styles/especificos/apostolos/sao-lucas/frases/biblioteca.module.css';

interface CapituloNav {
  id: string;
  icone: string;
  label: string;
}

interface BibliotecaLucasProps {
  introducao?: React.ReactNode;
  capitulos: CapituloNav[];
  children: React.ReactNode;
}

export function BibliotecaLucas({ introducao, capitulos, children }: BibliotecaLucasProps) {
  return (
    <div className={styles.biblioteca}>
      {introducao && (
        <div className={styles.introducao}>
          {introducao}
        </div>
      )}


      <div className={styles.conteudo}>
        {children}
      </div>
    </div>
  );
}

interface CapLucasProps {
  id: string;
  icone: string;
  suprat?: string;
  titulo: string;
  contagem?: string;
  children: React.ReactNode;
}

export function CapLucas({ id, icone, suprat, titulo, contagem, children }: CapLucasProps) {
  return (
    <section id={id} className={styles.capitulo}>
      <header className={styles.capHeader}>
        <div className={styles.capIcone}>{icone}</div>
        <div className={styles.capTextos}>
          {suprat && <div className={styles.capSuprat}>{suprat}</div>}
          <h2 className={styles.capTitulo}>{titulo}</h2>
          {contagem && <div className={styles.capContagem}>{contagem}</div>}
        </div>
      </header>
      <div className={styles.capCorpo}>
        {children}
      </div>
    </section>
  );
}

interface SubsecaoLucasProps {
  titulo: string;
  children: React.ReactNode;
}

export function SubsecaoLucas({ titulo, children }: SubsecaoLucasProps) {
  return (
    <div className={styles.subsecao}>
      <h3 className={styles.subTitulo}>
        <span className={styles.subOrn}>◆</span>
        {titulo}
      </h3>
      <div className={styles.subCorpo}>
        {children}
      </div>
    </div>
  );
}