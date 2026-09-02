import Link from 'next/link';
import styles from '../biblioteca-filipe.module.css';

type Props = {
  ativa?: 'indice' | 'cartas' | 'maximas' | 'sonetos' | 'outros';
};

const itens = [
  { id: 'indice', label: 'Índice', href: '/biblioteca/sao-filipe-neri' },
  { id: 'cartas', label: 'Cartas', href: '/biblioteca/sao-filipe-neri/cartas' },
  { id: 'maximas', label: 'Máximas', href: '/biblioteca/sao-filipe-neri/maximas' },
  { id: 'sonetos', label: 'Sonetos', href: '/biblioteca/sao-filipe-neri/sonetos' },
  { id: 'outros', label: 'Outros', href: '/biblioteca/sao-filipe-neri/outros-escritos' },
] as const;

export default function BarraSecoes({ ativa }: Props) {
  return (
    <nav className={styles.barraSecoes}>
      {itens.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`${styles.barraSecoesItem} ${
            ativa === item.id ? styles.barraSecoesItemAtivo : ''
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}