import styles from '../../_styles/biografia.module.css';

type IndiceItem = {
  href: string;
  label: string;
};

type IndiceProps = {
  titulo?: string;
  itens?: IndiceItem[];
};

export default function Indice({ titulo = 'Nesta página', itens }: IndiceProps) {
  // Proteção: se itens não for array válido ou estiver vazio, não renderiza nada
  if (!itens || !Array.isArray(itens) || itens.length === 0) {
    return null;
  }

  return (
    <nav className={styles.indice}>
      <h4 className={styles.indiceTitulo}>{titulo}</h4>
      <ol>
        {itens.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}