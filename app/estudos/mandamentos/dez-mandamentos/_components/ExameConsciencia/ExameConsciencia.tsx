 import { dezMandamentos } from '@/data/estudos/mandamentos/dezMandamentos'
import Link from 'next/link'
import styles from './exameConsciencia.module.css'

export default function ExameConsciencia() {
  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Exame de Consciência</h2>
        <p className={styles.subtitulo}>Um guia para examinar sua vida à luz dos Dez Mandamentos</p>

        {/* Bloco de instruções */}
        <div className={styles.instrucoes}>
          <h3 className={styles.instrucoesTitulo}>Como fazer o exame de consciência</h3>
          <ul className={styles.instrucoesLista}>
            <li>
              <strong>Para que serve:</strong> O exame de consciência é um olhar honesto sobre nossas ações, palavras e pensamentos à luz dos mandamentos de Deus. É o passo que antecede a confissão.
            </li>
            <li>
              <strong>Quando fazer:</strong> Antes de dormir (exame diário), antes da confissão (exame completo), ou em momentos de retiro e oração.
            </li>
            <li>
              <strong>Como fazer:</strong> Em silêncio, diante de Deus, com calma e honestidade. Sem ansiedade excessiva, confiando na misericórdia de Deus.
            </li>
          </ul>
        </div>

        {/* Perguntas por mandamento */}
        <div className={styles.perguntas}>
          {dezMandamentos.map((m) => (
            <div key={m.id} className={styles.mandamentoPerguntas}>
              <h4 className={styles.mandamentoTitulo}>
                {m.numero} — {m.titulo}
              </h4>
              <ul className={styles.perguntasLista}>
                {m.perguntasExame.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

