 import styles from './citacaoBiblica.module.css'

interface Props {
  texto: string
  referencia: string
}

export default function CitacaoBiblica({ texto, referencia }: Props) {
  return (
    <blockquote className={styles.citacao}>
      <p className={styles.texto}>"{texto}"</p>
      <cite className={styles.referencia}>— {referencia}</cite>
    </blockquote>
  )
}


