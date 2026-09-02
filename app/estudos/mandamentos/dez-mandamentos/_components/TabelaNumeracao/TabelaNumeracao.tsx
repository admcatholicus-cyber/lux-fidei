 import styles from './tabelaNumeracao.module.css'

export default function TabelaNumeracao() {
  const linhas = [
    {
      catolica: "1º — Amar a Deus sobre todas as coisas (inclui proibição de ídolos)",
      protestante: "1º — Não terás outros deuses"
    },
    {
      catolica: "(unido ao 1º mandamento)",
      protestante: "2º — Não farás imagem de escultura"
    },
    {
      catolica: "2º — Não tomar o nome de Deus em vão",
      protestante: "3º — Não tomarás o nome de Deus em vão"
    },
    {
      catolica: "3º — Guardar domingos e festas",
      protestante: "4º — Lembra-te do dia de sábado"
    },
    {
      catolica: "4º — Honrar pai e mãe",
      protestante: "5º — Honra teu pai e tua mãe"
    },
    {
      catolica: "5º — Não matar",
      protestante: "6º — Não matarás"
    },
    {
      catolica: "6º — Não pecar contra a castidade",
      protestante: "7º — Não adulterarás"
    },
    {
      catolica: "7º — Não roubar",
      protestante: "8º — Não roubarás"
    },
    {
      catolica: "8º — Não levantar falso testemunho",
      protestante: "9º — Não darás falso testemunho"
    },
    {
      catolica: "9º — Não cobiçar a mulher do próximo",
      protestante: "(unido ao 10º mandamento)"
    },
    {
      catolica: "10º — Não cobiçar as coisas alheias",
      protestante: "10º — Não cobiçarás (tudo junto)"
    }
  ]

  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Diferenças de Numeração entre Tradições Cristãs</h2>

        <p className={styles.explicacao}>
          Existem duas formas de numerar os Dez Mandamentos. A numeração que a Igreja Católica e os luteranos utilizam segue a tradição de Santo Agostinho (século IV). A numeração usada pelos ortodoxos e pela maioria das igrejas protestantes segue a tradição de Orígenes. O conteúdo é idêntico — apenas a forma de dividir é diferente.
        </p>

        <div className={styles.tabelaWrapper}>
          <table className={styles.tabela}>
            <thead>
              <tr>
                <th className={styles.th}>Católica </th>
                <th className={styles.th}>Protestante / Ortodoxa</th>
              </tr>
            </thead>
            <tbody>
              {linhas.map((linha, index) => (
                <tr key={index}>
                  <td className={styles.td}>{linha.catolica}</td>
                  <td className={styles.td}>{linha.protestante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className={styles.conclusao}>
          A diferença está em como agrupar: Santo Agostinho uniu a proibição de ídolos ao primeiro mandamento (pois adorar ídolos é ter outros deuses) e separou a cobiça em dois mandamentos distintos (cobiçar pessoa e cobiçar bens). O conteúdo total permanece o mesmo.
        </p>
      </div>
    </section>
  )
}

