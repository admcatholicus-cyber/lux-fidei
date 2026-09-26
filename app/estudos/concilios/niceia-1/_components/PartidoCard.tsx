import styles from '../niceia-1.module.css'

interface PartidoCardProps {
  tipo: string
  titulo: string
  texto: string
}

export function PartidoCard({ tipo, titulo, texto }: PartidoCardProps) {
  const classMap: Record<string, string> = {
    ariano: styles.partidoAriano,
    niceno: styles.partidoNiceno,
    centro: styles.partidoCentro,
    homoiousiano: styles.partidoHomoiousiano,
    anomoio: styles.partidoAnomoio,
    marcelo: styles.partidoMarcelo,
  }

  return (
    <div className={`${styles.partidoCard} ${classMap[tipo] ?? ''}`}>
      <h4>{titulo}</h4>
      <p>{texto}</p>
    </div>
  )
}