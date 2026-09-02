import CitacaoBiblica from '../CitacaoBiblica/CitacaoBiblica'
import styles from './monteSinai.module.css'

export default function MonteSinai() {
  return (
    <section className={styles.secao}>
      <div className={styles.container}>

        <h2 className={styles.titulo}>O Monte Sinai</h2>
        <p className={styles.subtitulo}>O lugar sagrado onde Deus se revelou</p>

        {/* SUBSEÇÃO 1 - Descrição do Monte */}
        <div className={styles.subsecao}>
          <h3 className={styles.subtitulo3}>O Monte Sagrado</h3>
          <p className={styles.paragrafo}>
            O Monte Sinai, também chamado Horeb nas Escrituras, é uma montanha localizada na Península do Sinai (atual Egito). Tradicionalmente identificado com o Jabal Musa (&quot;Montanha de Moisés&quot; em árabe), tem aproximadamente 2.285 metros de altura. Ali, no sopé desta montanha, o povo de Israel acampou por quase um ano após sair do Egito. Foi neste lugar deserto e imponente que Deus escolheu se revelar de modo único ao seu povo.
          </p>
          <div className={styles.curiosidade}>
            <span className={styles.curiosidadeTitulo}>Curiosidade</span>
            <p>No cume do Monte Sinai encontra-se hoje uma capela ortodoxa, e em seu sopé está o Mosteiro de Santa Catarina — o mosteiro cristão em funcionamento contínuo mais antigo do mundo, fundado no século VI.</p>
          </div>
        </div>

        {/* SUBSEÇÃO 2 - A Teofania */}
        <div className={styles.subsecao}>
          <h3 className={styles.subtitulo3}>A Teofania: Deus se manifesta</h3>
          <p className={styles.paragrafo}>
            &quot;Teofania&quot; vem do grego &quot;theós&quot; (Deus) + &quot;phaínō&quot; (manifestar-se). É o termo usado para descrever a manifestação visível de Deus. A Teofania do Sinai é uma das mais impressionantes de toda a Bíblia.
          </p>
          <CitacaoBiblica
            texto="Ao terceiro dia, ao romper da manhã, houve trovões e relâmpagos, uma nuvem espessa sobre a montanha, e um som de trombeta muito forte. Todo o povo, no acampamento, tremeu. Todo o monte Sinai fumegava, porque o Senhor descera sobre ele no meio do fogo. A fumaça subia como a fumaça de uma fornalha, e todo o monte tremia violentamente."
            referencia="Êx 19,16-18"
          />
          <p className={styles.paragrafo}>
            Deus se manifesta como fogo, fumaça, trovão e terremoto. Não porque Deus seja essas coisas, mas porque Ele quer mostrar sua transcendência e majestade. O povo tinha tanto medo que pediu a Moisés que falasse com Deus em seu lugar. Só Moisés subiu à montanha para receber os mandamentos.
          </p>
        </div>

        {/* SUBSEÇÃO 3 - A Aliança */}
        <div className={styles.subsecao}>
          <h3 className={styles.subtitulo3}>A Aliança selada com sangue</h3>
          <p className={styles.paragrafo}>
            Os Dez Mandamentos não são apenas leis: eles são a base de uma ALIANÇA entre Deus e o seu povo. Após entregar os mandamentos, Moisés escreveu tudo em um livro, ergueu um altar com doze pilares (um para cada tribo de Israel) e ofereceu sacrifícios. Depois, tomando o sangue das vítimas, aspergiu metade sobre o altar (representando Deus) e metade sobre o povo, dizendo:
          </p>
          <CitacaoBiblica
            texto="Este é o sangue da aliança que o Senhor fez convosco, conforme todas estas palavras"
            referencia="Êx 24,8"
          />
          <div className={styles.destaque}>
            <span className={styles.destaqueTitulo}>Conexão com Cristo</span>
            <p>Este gesto de Moisés antecipa a Nova Aliança selada por Jesus na Última Ceia, quando disse: &quot;Este é o meu sangue, o sangue da aliança, derramado por muitos&quot; (Mc 14,24). Na Missa, a cada consagração, essa mesma aliança se renova.</p>
          </div>
        </div>

        {/* SUBSEÇÃO 4 - O bezerro de ouro */}
        <div className={styles.subsecao}>
          <h3 className={styles.subtitulo3}>O bezerro de ouro e as segundas tábuas</h3>

          <h4 className={styles.subtitulo4}>O pecado do povo</h4>
          <p className={styles.paragrafo}>
            Enquanto Moisés permanecia no monte por 40 dias recebendo a Lei, o povo, ansioso pela demora, pediu a Aarão (irmão de Moisés) que fizesse um deus visível para adorar. Aarão cedeu: fundiu ouro e moldou um bezerro. O povo começou a adorá-lo como se fosse o deus que os havia tirado do Egito — violando o primeiro mandamento antes mesmo de recebê-lo formalmente.
          </p>

          <h4 className={styles.subtitulo4}>A quebra das tábuas</h4>
          <p className={styles.paragrafo}>
            Ao descer da montanha e ver a idolatria, Moisés, tomado de santa indignação, arremessou as duas tábuas de pedra ao chão, quebrando-as. Este gesto simbolizava a Aliança já quebrada pelo povo através da idolatria.
          </p>
          <CitacaoBiblica
            texto="Aproximando-se do acampamento, viu o bezerro e as danças, e a sua ira se acendeu. Lançou fora das mãos as tábuas, quebrando-as ao pé da montanha"
            referencia="Êx 32,19"
          />

          <h4 className={styles.subtitulo4}>As segundas tábuas</h4>
          <p className={styles.paragrafo}>
            Após interceder por Israel e obter o perdão de Deus, Moisés subiu novamente ao monte. Desta vez, foi ele mesmo quem talhou duas novas tábuas de pedra, mas foi Deus quem novamente escreveu os mandamentos nelas. As segundas tábuas foram guardadas na Arca da Aliança, o objeto mais sagrado de Israel.
          </p>

          <div className={styles.reflexao}>
            <p>A história das duas tábuas nos ensina algo profundo: mesmo quando o homem quebra a Aliança pelo pecado, Deus não desiste. Ele oferece uma segunda chance, uma nova aliança, uma nova possibilidade de fidelidade. Esta lógica atravessa toda a história da salvação.</p>
          </div>
        </div>

      </div>
    </section>
  )
}