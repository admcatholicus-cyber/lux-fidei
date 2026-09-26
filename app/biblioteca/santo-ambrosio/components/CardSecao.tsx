import Link from "next/link";
import styles from "../biblioteca-ambrosio.module.css";

type Props = {
  icone: string;
  titulo: string;
  descricao: string;
  contagem: string;
  href: string;
};

export default function CardSecao({
  icone,
  titulo,
  descricao,
  contagem,
  href,
}: Props) {
  return (
    <Link href={href} className={styles.cardSecao}>
      <div className={styles.cardSecaoIcone}>{icone}</div>
      <h3 className={styles.cardSecaoTitulo}>{titulo}</h3>
      <p className={styles.cardSecaoDescricao}>{descricao}</p>
      <span className={styles.cardSecaoContagem}>{contagem}</span>
      <span className={styles.cardSecaoAcao}>→ Acessar</span>
    </Link>
  );
}
