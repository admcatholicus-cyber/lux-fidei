import styles from './santosMandamentos.module.css'
const santos = [
  {
    numeroMandamento: '1º',
    mandamentoTitulo: 'Amar a Deus sobre todas as coisas',
    nomeSanto: 'São Francisco de Assis',
    anos: '1181-1226',
    frase: 'Meu Deus e meu tudo',
    historia: 'Filho de rico comerciante, renunciou a toda sua herança publicamente na praça de Assis, entregando até as roupas que vestia. Fez de Deus a única riqueza de sua vida. Vivia repetindo: "Meu Deus e meu tudo!" — resumo perfeito do primeiro mandamento.'
  },
  {
    numeroMandamento: '2º',
    mandamentoTitulo: 'Não tomar o Santo Nome de Deus em vão',
    nomeSanto: 'Santa Teresinha do Menino Jesus',
    anos: '1873-1897',
    frase: 'O nome de Jesus me abre o coração',
    historia: 'Carmelita francesa, morta aos 24 anos, escolheu como nome religioso "do Menino Jesus e da Santa Face", pois o Nome de Jesus era sua devoção mais profunda. Ensinou que pronunciar o nome de Jesus com amor já é uma oração que agrada a Deus.'
  },
  {
    numeroMandamento: '3º',
    mandamentoTitulo: 'Guardar domingos e festas de guarda',
    nomeSanto: 'São Josemaria Escrivá',
    anos: '1902-1975',
    frase: 'Santificar o domingo é santificar a semana',
    historia: 'Fundador da Opus Dei, ensinou que o domingo é o dia que dá sentido a toda a semana. Insistia que participar da Missa dominical não é uma obrigação pesada, mas o maior privilégio do cristão: encontrar-se com Cristo vivo na Eucaristia.'
  },
  {
    numeroMandamento: '4º',
    mandamentoTitulo: 'Honrar pai e mãe',
    nomeSanto: 'São Luís Gonzaga',
    anos: '1568-1591',
    frase: 'Honrei meus pais e agora honro meu Pai celeste',
    historia: 'Filho de nobres italianos, renunciou ao título de marquês e à riqueza para se tornar jesuíta. Mesmo contra a vontade inicial do pai, tratou-o sempre com respeito e obediência filial, escrevendo cartas cheias de veneração até convencê-lo com o exemplo de sua santidade.'
  },
  {
    numeroMandamento: '5º',
    mandamentoTitulo: 'Não matar',
    nomeSanto: 'Santa Gianna Beretta Molla',
    anos: '1922-1962',
    frase: 'Escolhi a vida do meu filho',
    historia: 'Médica italiana, mãe de família. Durante a quarta gravidez, descobriu um tumor no útero. Recusou o aborto e a histerectomia que salvariam sua vida, dizendo aos médicos: "Se tiverem que escolher entre mim e o bebê, escolham o bebê". Deu à luz sua filha e morreu uma semana depois.'
  },
  {
    numeroMandamento: '6º',
    mandamentoTitulo: 'Não pecar contra a castidade',
    nomeSanto: 'Santa Maria Goretti',
    anos: '1890-1902',
    frase: 'Não! É pecado! Deus não quer!',
    historia: 'Camponesa italiana, morta aos 11 anos por defender sua pureza. Um jovem tentou violentá-la; ela resistiu dizendo "É pecado, Deus não quer!". Ele a apunhalou 14 vezes. Antes de morrer, perdoou seu assassino. Ele se converteu na prisão e esteve presente na sua canonização.'
  },
  {
    numeroMandamento: '7º',
    mandamentoTitulo: 'Não roubar',
    nomeSanto: 'Santo Antônio de Pádua',
    anos: '1195-1231',
    frase: 'Devolvei ao pobre o que é do pobre',
    historia: 'Franciscano português, pregador incansável contra a usura e a exploração dos pobres. Ficou famoso por milagres de restituição: muitos ladrões e comerciantes desonestos, tocados por sua pregação, devolviam publicamente o que haviam roubado. Ainda hoje é invocado para recuperar coisas perdidas ou roubadas.'
  },
  {
    numeroMandamento: '8º',
    mandamentoTitulo: 'Não levantar falso testemunho',
    nomeSanto: 'São Filipe Néri',
    anos: '1515-1595',
    frase: 'As plumas ao vento',
    historia: 'Sacerdote romano famoso por sua alegria e sabedoria. Uma vez, uma mulher confessou o pecado de fofoca. Ele mandou-a pegar uma galinha, arrancar as penas pelo caminho e depois voltar. Quando ela voltou, mandou-a recolher todas as penas. Ela disse ser impossível. Ele respondeu: "Assim é a fofoca: uma vez espalhada, não pode mais ser recolhida".'
  },
  {
    numeroMandamento: '9º',
    mandamentoTitulo: 'Não cobiçar a mulher do próximo',
    nomeSanto: 'São Domingos Sávio',
    anos: '1842-1857',
    frase: 'Antes morrer que pecar!',
    historia: 'Aluno de São João Bosco, morto aos 14 anos. Vivia com tal pureza de coração que, quando outros meninos tentavam mostrar-lhe imagens impuras, ele fugia e recusava-se a olhar. Seu lema era: "A morte, mas não pecados". Canonizado por sua santidade juvenil extraordinária.'
  },
  {
    numeroMandamento: '10º',
    mandamentoTitulo: 'Não cobiçar as coisas alheias',
    nomeSanto: 'Serva de Deus Chiara Corbella',
    anos: '1984-2012',
    frase: 'Nasci para uma eternidade',
    historia: 'Jovem italiana, casada e mãe. Recebeu diagnóstico de câncer durante a gravidez. Recusou tratamentos que poderiam prejudicar o bebê. Após dar à luz, o câncer avançou. Morreu aos 28 anos, deixando escrito: "Nasci para uma eternidade". Viveu o desprendimento radical dos bens materiais — até da própria vida — por amor.'
  }
]

export default function SantosMandamentos() {
  return (
    <section className={styles.secao}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Santos e os Mandamentos</h2>
        <p className={styles.subtitulo}>Vidas que encarnaram cada mandamento em ato</p>

        <div className={styles.grid}>
          {santos.map((santo) => (
            <article key={santo.numeroMandamento} className={styles.card}>
              <div className={styles.cardTopo}>
                <span className={styles.numero}>{santo.numeroMandamento}</span>
                <span className={styles.mandamentoTitulo}>{santo.mandamentoTitulo}</span>
              </div>

              <h3 className={styles.nomeSanto}>{santo.nomeSanto}</h3>
              <span className={styles.anos}>{santo.anos}</span>

              <blockquote className={styles.frase}>
                &quot;{santo.frase}&quot;
              </blockquote>

              <p className={styles.historia}>{santo.historia}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}