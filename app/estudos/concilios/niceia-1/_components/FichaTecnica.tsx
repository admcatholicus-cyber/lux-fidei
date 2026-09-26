import styles from '../niceia-1.module.css'
import { fichaTecnica } from '../_data/ficha'

export function FichaTecnica() {
  return (
    <section className={`${styles.secao} secao-anchor`} id="ficha">
      <div className={styles.secaoHeader}>
        <h2 className={styles.secaoH2}>
          <span style={{ color: '#c5a059', marginRight: '10px' }}>I.</span> 
          Ficha Técnica
        </h2>
      </div>
      <div className={styles.caixaDestaque} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
        <div><strong>Nome:</strong> {fichaTecnica.nome}</div>
        <div><strong>Nomes Antigos:</strong> Νικαία Αʹ · ἡ ἐν Νικαίᾳ σύνοδος (hē en Nikaíā sýnodos) · Concilium Nicaenum Primum</div>
        <div><strong>Ano:</strong> {fichaTecnica.ano}</div>
        <div>
          <strong>Abertura:</strong> {fichaTecnica.dataAbertura.tradicional}
          <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '4px' }}>
            * {fichaTecnica.dataAbertura.nota}
          </div>
        </div>
        <div><strong>Encerramento:</strong> {fichaTecnica.dataEncerramento}</div>
        <div><strong>Local:</strong> Niceia, Bitínia (Edifício central do Palácio Imperial, atual İznik, Turquia)</div>
        <div><strong>Convocador:</strong> {fichaTecnica.convocador}</div>
        <div><strong>Presidência:</strong> {fichaTecnica.presidencia}</div>
        <div><strong>Papa:</strong> {fichaTecnica.papa}</div>
        <div><strong>Participantes:</strong> {fichaTecnica.participantes}</div>
        <div style={{ gridColumn: '1 / -1' }}><strong>Documentos:</strong> {fichaTecnica.documentos.join(' • ')}</div>
        <div style={{ gridColumn: '1 / -1' }}><strong>Numeração:</strong> {fichaTecnica.numeracao}</div>
        <div><strong>Festa Litúrgica:</strong> {fichaTecnica.festaLiturgica}</div>
        <div style={{ gridColumn: '1 / -1' }}><strong>Edições de Referência:</strong> {fichaTecnica.edicoesReferencia}</div>
      </div>
    </section>
  )
}
