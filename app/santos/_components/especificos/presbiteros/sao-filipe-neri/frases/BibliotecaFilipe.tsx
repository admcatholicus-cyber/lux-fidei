import styles from '../../../../../_styles/especificos/presbiteros/sao-filipe-neri/frases/biblioteca.module.css';

export function BibliotecaFilipe({
  introducao,
  children,
}: {
  introducao?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.biblioteca}>
      {introducao && <div className={styles.introducao}>{introducao}</div>}
      <div className={styles.corpo}>{children}</div>
    </div>
  );
}

export function CapFilipe({
  id,
  numero,
  supratitulo,
  titulo,
  children,
}: {
  id: string;
  numero: string;
  supratitulo: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.capitulo} id={id}>
      <header className={styles.cabecalho}>
        <span className={styles.numero}>{numero}</span>
        <div>
          <p className={styles.supratitulo}>{supratitulo}</p>
          <h2>{titulo}</h2>
        </div>
      </header>
      <div className={styles.conteudo}>{children}</div>
    </section>
  );
}

export function MaximaFilipe({
  texto,
  fonte,
  grau = 'Tradição filipina',
}: {
  texto: string;
  fonte: string;
  grau?: string;
}) {
  return (
    <figure className={styles.maxima}>
      <blockquote>“{texto}”</blockquote>
      <figcaption>
        <span>{grau}</span>
        <strong>{fonte}</strong>
      </figcaption>
    </figure>
  );
}

export function TestemunhoFilipe({
  autor,
  qualificacao,
  obra,
  children,
}: {
  autor: string;
  qualificacao: string;
  obra: string;
  children: React.ReactNode;
}) {
  return (
    <blockquote className={styles.testemunho}>
      <p>{children}</p>
      <footer>
        <strong>{autor}</strong>
        <span>{qualificacao}</span>
        <em>{obra}</em>
      </footer>
    </blockquote>
  );
}
