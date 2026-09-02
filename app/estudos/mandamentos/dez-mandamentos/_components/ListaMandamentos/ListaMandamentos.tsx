import { Mandamento } from '@/types/estudos/mandamentos/mandamento'
import MandamentoCard from '../MandamentoCard/MandamentoCard'
import styles from './listaMandamentos.module.css'

interface Props {
  mandamentos: Mandamento[]
}

export default function ListaMandamentos({ mandamentos }: Props) {
  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Os Dez Mandamentos</h2>
        <p className={styles.subtitulo}>Clique em cada mandamento para conhecê-lo em profundidade</p>
        <div className={styles.lista}>
          {mandamentos.map((mandamento) => (
            <MandamentoCard key={mandamento.id} mandamento={mandamento} />
          ))}
        </div>
      </div>
    </section>
  )
}