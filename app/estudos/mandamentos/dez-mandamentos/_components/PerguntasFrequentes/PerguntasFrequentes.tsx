'use client'

import { useState } from 'react'
import styles from './perguntasFrequentes.module.css'

const perguntas = [
  {
    pergunta: "Por que a Igreja mudou o sábado para o domingo?",
    resposta: "A Igreja não mudou o mandamento — cumpriu-o. Jesus Cristo ressuscitou no primeiro dia da semana (domingo), e desde os tempos apostólicos os cristãos se reúnem neste dia para celebrar a Eucaristia. O sábado judaico apontava para o descanso da criação; o domingo cristão celebra o descanso da NOVA criação em Cristo ressuscitado. O terceiro mandamento continua o mesmo: santificar um dia da semana dedicado ao Senhor. O que mudou foi o DIA da celebração, não o mandamento em si."
  },
  {
    pergunta: "Como explicar as imagens de santos se o 1º mandamento proíbe ídolos?",
    resposta: "O primeiro mandamento proíbe ADORAR imagens, não possuí-las. Deus mesmo ordenou fazer imagens no Antigo Testamento — dois querubins de ouro sobre a Arca da Aliança (Êx 25,18-20) e a serpente de bronze (Nm 21,8). A Igreja distingue: ADORAÇÃO (latria) é devida somente a Deus; VENERAÇÃO (dulia) é o respeito prestado aos santos como intercessores. Ao rezar diante de uma imagem, o católico não adora o objeto, mas se recorda de quem representa — assim como beijamos a foto de um ente querido sem estar adorando o papel."
  },
  {
    pergunta: "O 2º mandamento proíbe qualquer juramento?",
    resposta: "Não. O mandamento proíbe o USO EM VÃO do nome de Deus, não o juramento legítimo. Jurar em nome de Deus em situações graves e justas (como no tribunal, ao assumir um cargo público ou fazer votos religiosos) é permitido e até louvável, pois reconhece Deus como testemunha da verdade. O que Jesus condenou (Mt 5,34-37) foi o hábito judeu da época de jurar por qualquer coisa cotidiana. O cristão deve ter uma palavra tão verdadeira que dispense juramentos comuns — mas pode jurar quando a situação exige."
  },
  {
    pergunta: "Mentir nunca é permitido? E para proteger alguém?",
    resposta: "A mentira em si é sempre um mal moral, porque contradiz a natureza da linguagem (que existe para comunicar a verdade) e ofende a Deus, que é a Verdade. Porém, a Igreja distingue entre MENTIR e OMITIR uma verdade. Ninguém é obrigado a revelar toda verdade a todos — existe o direito à privacidade, ao segredo profissional, ao segredo confessional. Se alguém pergunta onde está escondido um inocente que caçadores querem matar, você pode se recusar a responder, mudar de assunto, ou dizer algo que não revele o esconderijo, sem afirmar diretamente uma mentira. A caridade e a prudência guiam essas situações."
  },
  {
    pergunta: "O que é \"cobiçar\" exatamente? Sentir atração já é pecado?",
    resposta: "Não. Sentir uma atração espontânea NÃO é pecado — é uma reação natural humana. Cobiçar, no sentido dos mandamentos 9º e 10º, significa ALIMENTAR VOLUNTARIAMENTE o desejo por algo ou alguém que não nos pertence. A diferença é clara: um pensamento ou atração que surge sem eu querer é apenas tentação. Se eu percebo, rejeito e me afasto, não há pecado — pelo contrário, há virtude. O pecado começa quando eu ESCOLHO cultivar aquele desejo, quando me deleito nele, quando busco situações para alimentá-lo. Jesus disse: 'quem olha com desejo' (Mt 5,28) — o verbo indica ação voluntária, não sensação involuntária."
  },
  {
    pergunta: "A numeração católica ou a protestante é a correta?",
    resposta: "Não é questão de 'correto' ou 'errado' — o conteúdo dos mandamentos é idêntico. A diferença está em COMO agrupar. Santo Agostinho, no século IV, unificou a proibição de ídolos ao primeiro mandamento (pois adorar ídolos JÁ É ter outros deuses) e dividiu a cobiça em dois mandamentos (cobiçar a mulher e cobiçar bens são pecados de naturezas diferentes). A Igreja Católica adotou essa divisão. Os protestantes, seguindo a tradição de Orígenes, separam a proibição de ídolos em um mandamento próprio e unem a cobiça em um só. Ambas as numerações preservam integralmente a lei de Deus."
  },
  {
    pergunta: "Se falto à Missa dominical, é sempre pecado grave?",
    resposta: "Faltar à Missa dominical por preguiça, desleixo ou por preferir outra atividade é pecado grave, sim — pois viola diretamente o terceiro mandamento e o preceito da Igreja. Mas existem causas que ELIMINAM ou DIMINUEM a gravidade: doença séria (própria ou de dependente), distância excessiva sem transporte, obrigação profissional inadiável (médicos, policiais, bombeiros), cuidado de crianças pequenas sem quem as guarde, tempestade violenta. Nesses casos não há pecado. A regra é: se você faltaria a um compromisso importante pelo mesmo motivo, esse motivo justifica faltar à Missa. Havendo dúvida, converse com um sacerdote."
  },
  {
    pergunta: "O 5º mandamento proíbe a legítima defesa?",
    resposta: "Não. A Igreja sempre reconheceu o direito e até o dever da legítima defesa, própria e do próximo. O Catecismo (CIC 2263-2265) ensina que quem defende sua vida ou a de outros não é culpado de homicídio, mesmo que o agressor morra em consequência da defesa, desde que a força usada seja PROPORCIONAL à ameaça. Além disso, quem tem responsabilidade sobre a vida de outros (pais, autoridades, policiais) tem o DEVER de defendê-los. O que o mandamento proíbe é o assassinato do INOCENTE, a violência gratuita, o ódio e a vingança pessoal. Defender a vida não é matar — é protegê-la."
  },
  {
    pergunta: "Os 10 Mandamentos ainda valem hoje ou foram substituídos por Jesus?",
    resposta: "Valem integralmente. Jesus foi categórico: 'Não penseis que vim abolir a Lei... não vim abolir, mas dar cumprimento' (Mt 5,17). Ele não substituiu os mandamentos — os APROFUNDOU. Onde a Lei dizia 'não matarás', Jesus disse 'nem sequer te ires contra o irmão'. Onde dizia 'não adulterarás', disse 'nem sequer olhes com desejo'. Cristo elevou o padrão: agora não basta cumprir a letra, é preciso viver o espírito da Lei. O 'Mandamento Novo' (amai-vos como Eu vos amei — Jo 13,34) não substitui os dez, mas dá a chave para cumpri-los: só o amor divino torna possível a verdadeira obediência."
  },
  {
    pergunta: "Preciso honrar meus pais mesmo se eles foram maus comigo?",
    resposta: "Sim, mas 'honrar' não significa concordar com tudo nem submeter-se ao abuso. Honrar os pais é um mandamento que se cumpre de formas diferentes conforme a situação. Se os pais foram bons, honrá-los é fácil: obediência, gratidão, cuidado. Se foram falhos ou até abusivos, honrá-los inclui: não os expor publicamente com ódio, rezar por eles, perdoá-los interiormente, e — sempre que possível sem se colocar em risco — desejar-lhes o bem. A Igreja NÃO exige que a vítima de abuso conviva com o abusador. A honra devida aos pais imperfeitos é a de reconhecer que Deus se serviu deles para nos dar a vida, mesmo que tenham falhado depois. O perdão é obrigatório; a proximidade não."
  }
]

export default function PerguntasFrequentes() {
  const [abertas, setAbertas] = useState<number[]>([])

  const toggle = (index: number) => {
    if (abertas.includes(index)) {
      setAbertas(abertas.filter(i => i !== index))
    } else {
      setAbertas([...abertas, index])
    }
  }

  return (
    <section className={styles.secao}>
      <div className={styles.container}>

        <h2 className={styles.titulo}>Perguntas Frequentes</h2>
        <p className={styles.subtitulo}>Dúvidas comuns sobre os Dez Mandamentos</p>

        <div className={styles.lista}>
          {perguntas.map((item, index) => {
            const estaAberta = abertas.includes(index)
            return (
              <article key={index} className={styles.item}>
                <button
                  className={`${styles.pergunta} ${estaAberta ? styles.perguntaAberta : ''}`}
                  onClick={() => toggle(index)}
                >
                  <span className={styles.numero}>{index + 1}</span>
                  <span className={styles.perguntaTexto}>{item.pergunta}</span>
                  <span className={`${styles.seta} ${estaAberta ? styles.setaAberta : ''}`}>▼</span>
                </button>
                {estaAberta && (
                  <div className={styles.resposta}>
                    <p>{item.resposta}</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}