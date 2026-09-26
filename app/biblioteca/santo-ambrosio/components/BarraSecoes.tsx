import Link from "next/link";
import styles from "../biblioteca-ambrosio.module.css";

type Props = {
  ativa?:
    | "indice"
    | "de-spiritu-sancto"
    | "de-officiis"
    | "de-fide"
    | "hinos-ambrosianos";
};

const itens = [
  { id: "indice", label: "Índice", href: "/biblioteca/santo-ambrosio" },
  {
    id: "de-spiritu-sancto",
    label: "De Spiritu Sancto",
    href: "/biblioteca/santo-ambrosio/de-spiritu-sancto",
  },
  {
    id: "de-officiis",
    label: "De Officiis Ministrorum",
    href: "/biblioteca/santo-ambrosio/de-officiis",
  },
  {
    id: "de-fide",
    label: "De Fide",
    href: "/biblioteca/santo-ambrosio/de-fide",
  },
  {
    id: "hinos-ambrosianos",
    label: "Hinos Ambrosianos",
    href: "/biblioteca/santo-ambrosio/hinos-ambrosianos",
  },
] as const;

export default function BarraSecoes({ ativa }: Props) {
  return (
    <nav className={styles.barraSecoes}>
      {itens.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`${styles.barraSecoesItem} ${
            ativa === item.id ? styles.barraSecoesItemAtivo : ""
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
