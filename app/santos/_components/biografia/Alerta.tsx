import styles from '../../_styles/biografia.module.css';

type AlertaTipo = 'padrao' | 'info' | 'verde';

type AlertaProps = {
  tipo?: AlertaTipo;
  children: React.ReactNode;
};

export default function Alerta({ tipo = 'padrao', children }: AlertaProps) {
  const cls =
    tipo === 'info' ? styles.alertaInfo :
    tipo === 'verde' ? styles.alertaVerde :
    styles.alerta;
  return <div className={cls}>{children}</div>;
}