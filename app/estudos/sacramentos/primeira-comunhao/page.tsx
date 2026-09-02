// app/estudos/sacramentos/primeira-comunhao/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import styles from './primeira-comunhao.module.css'

// ============================================================
// DADOS
// ============================================================

const sidebarSections = [
    {
        titulo: 'Parte I — O Sacramento',
        links: [
            { href: '#o-que-e', num: 'I', label: 'O Que É a Primeira' },
            { href: '#idade', num: 'II', label: 'A Questão da Idade' },
            { href: '#pio-x', num: 'III', label: 'A Revolução de 1910' },
        ],
    },
    {
        titulo: 'Parte II — Preparação',
        links: [
            { href: '#confissao-primeira', num: 'IV', label: 'A Primeira Confissão' },
            { href: '#catequese', num: 'V', label: 'A Catequese' },
            { href: '#requisitos', num: 'VI', label: 'Requisitos' },
            { href: '#preparacao', num: 'VII', label: 'Preparação Prática' },
        ],
    },
    {
        titulo: 'Parte III — O Dia',
        links: [
            { href: '#dia', num: 'VIII', label: 'O Dia Por Dentro' },
            { href: '#rito', num: 'IX', label: 'O Rito Passo a Passo' },
            { href: '#depois', num: 'X', label: 'Os 15 Minutos Depois' },
        ],
    },
    {
        titulo: 'Parte IV — Vida e Dúvidas',
        links: [
            { href: '#santos', num: 'XI', label: 'Santos da Primeira' },
            { href: '#oracoes', num: 'XII', label: 'Orações para o Dia' },
            { href: '#vida-depois', num: 'XIII', label: 'A Vida Depois' },
            { href: '#duvidas', num: '★', label: 'Dúvidas Frequentes' },
        ],
    },
]

const historiaIdade = [
    {
        data: 'Séculos I-V',
        titulo: 'Comunhão junto com o Batismo',
        texto: `Nos primeiros séculos, não existia "Primeira Comunhão" como evento separado. Quando um adulto 
    era batizado na Vigília Pascal, recebia imediatamente a Crisma e a Eucaristia na mesma celebração. 
    Para crianças batizadas, a prática variava: em algumas regiões, recebiam a Eucaristia (uma gota do 
    Sangue de Cristo no dedo) logo após o batismo; em outras, esperavam alguns anos. Não havia idade 
    canônica única.`,
    },
    {
        data: 'Século IX',
        titulo: 'Separação dos sacramentos no Ocidente',
        texto: `Com o crescimento da Igreja e a impossibilidade dos bispos estarem presentes em todos os 
    batismos, no Ocidente a Confirmação foi separada do Batismo. A Eucaristia das crianças passou a ser 
    adiada — primeiro para os 7 anos, depois para idades cada vez mais tardias. No Oriente, a prática 
    antiga foi mantida e até hoje os bebês ortodoxos comungam após o batismo.`,
    },
    {
        data: '1215',
        titulo: 'Latrão IV — A Idade do Discernimento',
        texto: `O IV Concílio do Latrão estabeleceu como norma: quem atingiu "os anos do discernimento" 
    (annos discretionis) deve confessar-se e comungar pelo menos uma vez por ano, na Páscoa. Mas o 
    concílio não definiu uma idade exata. Cada região interpretou de forma diferente — geralmente entre 
    10 e 14 anos.`,
    },
    {
        data: 'Séculos XVI-XIX',
        titulo: 'O Endurecimento Jansenista',
        texto: `Sob influência do jansenismo (heresia que pregava extremo rigorismo moral), a idade da 
    Primeira Comunhão foi sendo adiada cada vez mais. Em muitas dioceses europeias, crianças só comungavam 
    aos 12, 14 ou até 16 anos. Os jansenistas exigiam preparação intelectual extensa e "perfeita disposição 
    moral" — coisas impossíveis para crianças. O resultado: gerações inteiras de fiéis morriam sem nunca 
    ter recebido a Eucaristia.`,
    },
    {
        data: '8 de agosto de 1910',
        titulo: 'Quam Singulari — A Reversão',
        texto: `O Papa Pio X publica o decreto Quam Singulari Christus Amore, que muda 700 anos de prática 
    em uma página. Estabelece: a idade da Primeira Comunhão é a "idade da razão" — em torno dos 7 anos. 
    O critério não é instrução completa, mas a capacidade de distinguir o Pão Eucarístico do pão comum 
    e desejar recebê-Lo com respeito. Foi uma das decisões mais revolucionárias da história moderna da 
    Igreja.`,
    },
    {
        data: '1983',
        titulo: 'Código de Direito Canônico atual',
        texto: `O CIC vigente (cânon 914) confirma a doutrina de Pio X: "É dever, em primeiro lugar dos pais 
    e de quem faz suas vezes, bem como do pároco, cuidar para que sejam preparadas, mediante adequada 
    formação, as crianças que chegaram ao uso da razão, e o quanto antes alimentadas com este divino 
    alimento, depois da prévia confissão sacramental."`,
    },
]

const ritoPassos = [
    {
        num: 'PASSO 1',
        titulo: 'A Entrada — Procissão das Crianças',
        texto: `Em vez da entrada normal do celebrante, na Missa de Primeira Comunhão as crianças entram 
    em procissão, geralmente carregando velas acesas. A vela é a mesma do Batismo — agora reaccendida. 
    Simboliza que aquela luz da fé, recebida na pia batismal anos antes pelos pais, agora será assumida 
    pessoalmente. Caminham em duplas, em silêncio, vestidas de branco. Os pais ficam de pé, observando.`,
    },
    {
        num: 'PASSO 2',
        titulo: 'A Renovação das Promessas Batismais',
        texto: `Antes da Liturgia da Palavra (ou após a homilia, dependendo da paróquia), o padre faz às 
    crianças as mesmas perguntas que foram feitas aos seus padrinhos no dia do Batismo: "Vocês renunciam 
    a Satanás? Creem em Deus Pai, criador do céu e da terra? Creem em Jesus Cristo, seu Filho? Creem no 
    Espírito Santo, na Santa Igreja Católica?" Cada criança responde em voz alta: "Sim, creio." É a 
    primeira profissão pessoal de fé.`,
    },
    {
        num: 'PASSO 3',
        titulo: 'A Liturgia da Palavra',
        texto: `As leituras escolhidas geralmente são João 6 (o Discurso do Pão da Vida) ou os relatos da 
    Última Ceia. A homilia é dirigida principalmente às crianças, em linguagem acessível. Muitos padres 
    fazem perguntas diretas: "Vocês sabem o que vão receber hoje?" É um momento pedagógico — última 
    catequese antes do encontro.`,
    },
    {
        num: 'PASSO 4',
        titulo: 'A Apresentação dos Dons',
        texto: `Em muitas paróquias, são as próprias crianças que levam o pão e o vinho ao altar na procissão 
    do ofertório. É gesto rico de significado: levam o que ainda é pão e vinho, sabendo que voltarão 
    para receber Cristo. As mãos da criança tocam a matéria que o Espírito Santo transformará. Algumas 
    crianças levam também flores, símbolos da própria vida que oferecem.`,
    },
    {
        num: 'PASSO 5',
        titulo: 'A Consagração — O Momento que Tudo Muda',
        texto: `Este é o momento central de toda a Missa, e em especial da Primeira Comunhão. O padre, na 
    pessoa de Cristo, pronuncia as palavras que transformam o pão e o vinho.`,
        extra: (
            <div style={{
                padding: '1.8rem 2.5rem',
                background: 'linear-gradient(135deg, #FFF8E1, #fff)',
                border: '2px solid #D4AF37',
                borderRadius: '14px',
                margin: '1.5rem 0',
                textAlign: 'center',
            }}>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#8B1428', fontWeight: 700, lineHeight: 1.8 }}>
                    &ldquo;Tomai, todos, e comei: isto é o meu Corpo,<br />
                    que será entregue por vós.&rdquo;
                </p>
                <p style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.8rem' }}>
                    Neste instante, o pão deixa de ser pão. As crianças aprenderam isso na catequese — agora
                    presenciam pela primeira vez sabendo o que estão vendo.
                </p>
            </div>
        ),
    },
    {
        num: 'PASSO 6',
        titulo: 'O Pai-Nosso — A Última Preparação',
        texto: `Imediatamente antes da Comunhão, toda a assembleia reza o Pai-Nosso de pé. As crianças 
    rezam junto. É a primeira vez que rezam o Pai-Nosso como participantes plenos da Mesa do Senhor — 
    não como espectadoras. Quando dizem "o pão nosso de cada dia nos dai hoje", estão pedindo literalmente 
    o que estão prestes a receber.`,
    },
    {
        num: 'PASSO 7',
        titulo: 'O "Senhor, eu não sou digno"',
        texto: `O padre eleva a hóstia e diz: "Eis o Cordeiro de Deus, que tira o pecado do mundo. Felizes 
    os convidados para a Ceia do Senhor!" Todos respondem com a frase do centurião romano (Mt 8,8): 
    "Senhor, eu não sou digno de que entreis em minha morada, mas dizei uma palavra e serei salvo." 
    Esta humildade explícita é parte essencial: ninguém é digno da Eucaristia — Cristo Se dá apesar 
    disso.`,
    },
    {
        num: 'PASSO 8',
        titulo: 'A Comunhão — O Primeiro Encontro',
        texto: `As crianças se aproximam em fila, geralmente acompanhadas dos pais ou padrinhos. Mãos juntas. 
    Olhar baixo. O padre apresenta a hóstia: "O Corpo de Cristo." A criança responde com firmeza: "Amém." 
    Recebe na boca (forma tradicional) ou nas mãos (palma esquerda sobre direita, formando um pequeno 
    trono). Volta ao lugar em silêncio. Nada de cumprimentos. Nada de olhar para os lados. Ajoelha-se, 
    fecha os olhos, e por uns segundos não está mais em uma igreja — está no Céu.`,
    },
]

const santosPrimeira = [
    {
        emoji: '🌹',
        nome: 'Beata Imelda Lambertini',
        epoca: 'Padroeira da Primeira Comunhão • 1322-1333',
        quote: `&ldquo;Como pode alguém receber Jesus e não morrer de amor?&rdquo;`,
        bio: `Filha de nobres de Bolonha, entrou no convento dominicano aos 9 anos. Pediu insistentemente 
    para fazer a Primeira Comunhão — mas a idade canônica da época (séc. XIV) era 14 anos. Foi negada 
    repetidas vezes.\n\nNo dia 12 de maio de 1333 (vigília da Ascensão), aos 11 anos, durante a Missa 
    conventual, todas as freiras viram uma hóstia luminosa pairar sobre a cabeça de Imelda. O capelão, 
    espantado, entendeu o sinal e deu-lhe a Comunhão. Imelda recebeu o Senhor pela primeira vez — e 
    pela única vez. Caiu morta em êxtase imediatamente após comungar. Seu corpo permanece incorrupto 
    até hoje na igreja de São Sigismundo em Bolonha.\n\nPio X (que reduziu a idade da Primeira Comunhão) 
    a proclamou padroeira universal da Primeira Comunhão em 1910.`,
    },
    {
        emoji: '👼',
        nome: 'Santo Tarcísio',
        epoca: 'Mártir da Eucaristia • Séc. III',
        quote: `&ldquo;Prefiro morrer a entregar o Senhor.&rdquo;`,
        bio: `Coroinha romano de 12 anos durante a perseguição de Valeriano (séc. III). Levava a Eucaristia 
    secretamente aos cristãos presos nas catacumbas — última comunhão antes do martírio.\n\nNum desses 
    trajetos, foi cercado por jovens pagãos que perceberam algo escondido sob sua túnica. Exigiram ver. 
    Tarcísio recusou. Foi espancado e apedrejado no meio da rua. Quando outros cristãos chegaram, encontraram 
    seu corpo morto — mas as mãos seguravam a Eucaristia, intacta, sobre o peito.\n\nÉ padroeiro dos 
    coroinhas e modelo das crianças que recebem a Primeira Comunhão. Mostra que a Eucaristia não é coisa 
    "de adulto": uma criança pode amá-La a ponto de morrer por Ela.`,
    },
    {
        emoji: '🕊️',
        nome: 'Santa Teresinha do Menino Jesus',
        epoca: 'Doutora da Igreja • 1873-1897',
        quote: `&ldquo;Foi um beijo de amor. Eu me sentia amada e dizia: 'Eu Vos amo, eu me dou a Vós 
    para sempre.'&rdquo;`,
        bio: `Carmelita francesa, fez a Primeira Comunhão aos 11 anos (8 de maio de 1884), idade canônica 
    da época na França. Preparou-se durante três meses com intensidade desproporcional para sua idade: 
    rezava muito, fazia pequenos sacrifícios secretos, "decorou" a alma com flores espirituais oferecidas 
    a Jesus.\n\nEla descreveu o dia da Primeira Comunhão como "o mais belo dia de minha vida". Chorou de 
    alegria durante a Missa — não por sentimentalismo, mas por superabundância. Disse depois: "Senti que 
    era amada, e disse também: 'Eu Vos amo, dou-me a Vós para sempre.' Aquele dia, nossa união era mais 
    que união: era fusão."\n\nA Primeira Comunhão de Santa Teresinha é um dos relatos mais belos e profundos 
    já escritos sobre esse sacramento. Está na sua autobiografia "História de uma Alma".`,
    },
    {
        emoji: '✝️',
        nome: 'Bl. Carlo Acutis',
        epoca: 'Beato • 1991-2006',
        quote: `&ldquo;A Eucaristia é a minha autoestrada para o céu.&rdquo;`,
        bio: `Adolescente italiano, beatificado em 2020. Fez a Primeira Comunhão antecipadamente, aos 7 anos, 
    com permissão especial (idade rara na Itália, onde costuma ser aos 9-10). A partir desse dia, fez 
    da Missa diária o centro de sua vida.\n\nDizia: "Estar diante do Santíssimo Sacramento é o que mais 
    me santifica." Tinha o hábito de chegar mais cedo à igreja para fazer a "visita ao Santíssimo" antes 
    da Missa, e permanecer 15 minutos em silêncio absoluto após comungar — uma disciplina rara em 
    adolescentes.\n\nMorreu de leucemia aos 15 anos, oferecendo todo o sofrimento "pelo Papa e pela 
    Igreja". Será o primeiro santo millennial canonizado. Seu corpo está exposto em Assis com sua 
    camiseta favorita: jeans, Nike e moletom — mostra que santidade não é incompatível com a juventude.`,
    },
    {
        emoji: '👑',
        nome: 'São Pio X',
        epoca: 'Papa • 1835-1914',
        quote: `&ldquo;Deixai vir a Mim as crianças. Não as priveis de Mim.&rdquo;`,
        bio: `Filho de um carteiro pobre da região do Vêneto. Tornou-se Papa em 1903. Sua maior obra: o 
    decreto Quam Singulari (1910), que devolveu a Eucaristia às crianças após 700 anos de adiamento.\n\nAntes 
    dele, milhões de crianças morriam sem nunca ter comungado — vítimas de epidemias, mortalidade infantil, 
    guerras. Pio X chorava ouvindo essas histórias. Disse: "Os santos não nasceram santos — tornaram-se. 
    E a Eucaristia é a fonte da santidade. Por que privar as crianças daquilo que mais precisam?"\n\nEm 
    pessoa, distribuía a Comunhão às crianças. Numa ocasião célebre, uma mãe levou seu filho de 4 anos 
    ao Papa, pedindo a bênção. Pio X perguntou ao menino: "Você sabe Quem está no altar?" O menino 
    respondeu: "Jesus." Pio X exclamou: "Levem-no para comungar amanhã!" — escandalizando os cardeais, 
    e mudando para sempre a prática da Igreja.`,
    },
]

const oracoes = [
    {
        titulo: '✨ Oração Antes da Comunhão',
        contexto: 'Para rezar na fila, em silêncio interior.',
        texto: `Senhor Jesus,
estou prestes a Vos receber pela primeira vez.

Sei que sou pequeno e Vós sois grande,
que sou pecador e Vós sois santo,
que sou pobre e Vós sois rei.

Mas sei também que me chamais.
Que descestes do céu por mim.
Que Vos fizestes pão para que eu pudesse Vos receber.

Vinde, Senhor Jesus.
Vinde ao meu coração.
Fazei dele Vossa morada.

Amém.`,
    },
    {
        titulo: '📿 Anima Christi (Após a Comunhão)',
        contexto: 'Oração do século XIV, favorita de Santo Inácio de Loyola. Rezada após a Comunhão.',
        texto: `Alma de Cristo, santificai-me.
Corpo de Cristo, salvai-me.
Sangue de Cristo, embriagai-me.
Água do lado de Cristo, lavai-me.
Paixão de Cristo, fortalecei-me.

Ó bom Jesus, ouvi-me.
Nas vossas chagas, escondei-me.
Não permitais que me aparte de vós.
Do inimigo mau, defendei-me.
Na hora da morte, chamai-me.

E mandai-me ir a vós,
para que com vossos santos vos louve
pelos séculos dos séculos.
Amém.`,
    },
    {
        titulo: '🙏 Ato de Contrição (Antes da Confissão)',
        contexto: 'Rezada antes ou durante a Primeira Confissão, que precede a Primeira Comunhão.',
        texto: `Meu Deus,
porque sois infinitamente bom
e porque Vos amo sobre todas as coisas,
pesa-me de todo o coração ter-Vos ofendido.

Proponho firmemente, com a Vossa graça,
não tornar a pecar,
fugir das ocasiões próximas de pecado,
confessar-me e cumprir a penitência que me for imposta.

Senhor, misericórdia! Perdoai-me!

Amém.`,
    },
    {
        titulo: '🌟 Oração de Santa Teresinha',
        contexto: 'Oração inspirada nos escritos da santa sobre sua Primeira Comunhão.',
        texto: `Jesus, eu não Vos peço muito.
Não Vos peço que me deis ouro,
nem que me façais grande aos olhos do mundo.

Peço apenas uma coisa:
que sejais sempre Vós a viver em mim.
Que cada Comunhão seja como esta primeira —
um beijo de amor entre Vós e a minha alma.

Eu sou pequena. Sereis sempre o meu Tudo.

Amém.`,
    },
]

const requisitos = [
    {
        icone: '💧',
        titulo: 'Estar Batizado',
        desc: `A Eucaristia pressupõe o Batismo. Não há exceção. Se a criança não foi batizada na infância, 
    deve receber primeiro o Batismo — geralmente no caminho catecumenal de adultos (RICA), que culmina 
    com os três sacramentos de iniciação juntos.`,
    },
    {
        icone: '🧠',
        titulo: 'Ter Atingido o Uso da Razão',
        desc: `Critério estabelecido por Pio X em 1910 e mantido pelo Código de Direito Canônico. Não significa 
    "entender tudo" sobre a Eucaristia — significa distinguir o pão eucarístico do pão comum, e desejar 
    recebê-Lo com respeito. Acontece geralmente entre 6 e 8 anos.`,
    },
    {
        icone: '📖',
        titulo: 'Ter Recebido Catequese Adequada',
        desc: `Não basta a idade. A criança precisa ter sido instruída nos fundamentos: Quem é Jesus, o que 
    aconteceu na Última Ceia, o que é a Missa, o que é o pecado, o que é a Confissão. A catequese é o 
    caminho — geralmente um ou dois anos antes do sacramento.`,
    },
    {
        icone: '🕊️',
        titulo: 'Estar em Estado de Graça',
        desc: `Sem pecado mortal na alma. Para crianças que atingiram o uso da razão, isto implica fazer 
    primeiro a Primeira Confissão. São Paulo é categórico: "Quem come o pão ou bebe o cálice do Senhor 
    indignamente será réu do Corpo e do Sangue do Senhor" (1Cor 11,27).`,
    },
    {
        icone: '⏱️',
        titulo: 'Observar o Jejum Eucarístico',
        desc: `Pelo menos 1 hora antes da Comunhão, abstenção de alimentos sólidos e bebidas — exceto água 
    e medicamentos. Para crianças pequenas, idosos e doentes, a Igreja é flexível. A finalidade do jejum 
    não é mortificação pesada, mas criar pequena "fome" para o verdadeiro Alimento.`,
    },
    {
        icone: '❤️',
        titulo: 'Ter Desejo Sincero',
        desc: `Talvez o mais importante: querer receber. Ninguém deve fazer a Primeira Comunhão "porque é 
    da idade" ou "porque é tradição da família". A criança precisa querer encontrar Jesus. Se este desejo 
    falta, é melhor esperar mais tempo, até que floresça.`,
    },
]

const preparacaoSteps = [
    {
        n: 1,
        titulo: 'A Catequese (1-2 anos antes)',
        texto: `A preparação propriamente dita começa muito antes. Em geral, a paróquia oferece um ou dois 
    anos de catequese semanal. As crianças aprendem: a história da salvação, quem é Jesus, o que são 
    os sacramentos, como rezar, o que é o pecado, como se confessar, o que acontece na Missa. Não é 
    decoreba — é formação. Os pais devem acompanhar, participar e reforçar em casa.`,
    },
    {
        n: 2,
        titulo: 'A Primeira Confissão (dias ou semanas antes)',
        texto: `Antes da Primeira Comunhão, a criança faz sua Primeira Confissão. Este momento merece atenção 
    própria: é o primeiro encontro com a misericórdia de Deus no sacramento. Idealmente acontece dias 
    antes — não no mesmo dia, para evitar atropelo emocional. Um bom confessor de crianças é fundamental: 
    paciente, gentil, capaz de explicar sem assustar.`,
    },
    {
        n: 3,
        titulo: 'A Última Semana — Silêncio e Oração',
        texto: `Na semana anterior à Primeira Comunhão, a família reduz distrações. Menos telas, menos 
    festas, mais oração em casa. Pode-se ler em família os relatos da Última Ceia (Mateus 26, Marcos 14, 
    Lucas 22) e o capítulo 6 do Evangelho de João. A criança deve sentir que algo grande está chegando 
    — e os pais devem viver isso com ela, não apenas organizar o buffet.`,
    },
    {
        n: 4,
        titulo: 'A Véspera — Vigília em Família',
        texto: `Na noite anterior, a família pode acender uma vela diante de uma imagem de Jesus, rezar 
    juntos uma oração ao Espírito Santo, conversar sobre o que vai acontecer no dia seguinte. Deitar 
    cedo. Não deixar para arrumar roupa, sapato, vela e cabelo no último minuto. O dia da Primeira 
    Comunhão deve começar com paz — não com nervosismo.`,
    },
    {
        n: 5,
        titulo: 'A Manhã — Jejum, Calma e Recolhimento',
        texto: `Jejum desde a meia-noite (idealmente) ou pelo menos 1 hora antes da Missa (regra mínima). 
    Acordar com tempo. Vestir-se com calma. Fazer uma breve oração em família antes de sair. Chegar à 
    igreja com pelo menos 20 minutos de antecedência — não correndo. Ao chegar, fazer um momento de 
    silêncio antes que os fotógrafos comecem.`,
    },
    {
        n: 6,
        titulo: 'O Momento — Sem Pressa, Sem Distração',
        texto: `Na hora de receber: caminhar com passo firme e respeitoso. Mãos juntas. Olhar baixo ou no 
    sacerdote. Responder "Amém" com convicção, não murmurando. Receber na boca ou nas mãos (palma 
    esquerda sobre direita formando um trono). Voltar ao lugar em silêncio total. Não cumprimentar 
    ninguém no caminho. Não olhar para os lados. Ajoelhar-se e fechar os olhos.`,
    },
    {
        n: 7,
        titulo: 'Os 15 Minutos Depois — O Tesouro',
        texto: `Os 15 minutos após a Comunhão são os mais preciosos do dia. Os teólogos clássicos ensinavam 
    que a presença sacramental de Cristo permanece enquanto as espécies (aparências do pão) ainda existem 
    no corpo — aproximadamente 10 a 15 minutos. Durante esse tempo, Cristo está fisicamente em você. 
    Não converse. Não pegue celular. Reze. Agradeça. Peça por alguém. Saboreie o silêncio.`,
    },
]

const duvidas = [
    {
        q: '❓ Meu filho tem só 7 anos — não é cedo demais?',
        a: `Pelo contrário: é exatamente a idade prevista pela Igreja desde 1910. Antes de Pio X, crianças 
    esperavam até 12-14 anos para comungar. Resultado: milhões morriam sem nunca ter recebido a Eucaristia. 
    Pio X chamou isso de "abominação".\n\nO critério não é compreensão completa — ninguém compreende a 
    Eucaristia completamente, nem o Papa, nem Santo Tomás de Aquino. O critério é: distinguir o Pão 
    Eucarístico do pão comum, saber que ali está Jesus, querer recebê-Lo com respeito.\n\nSe seu filho 
    sabe isso, ele está pronto. A fé infantil — simples, confiante, sem complicação — é o modelo da fé 
    adulta segundo o próprio Jesus: "Se não vos tornardes como crianças, não entrareis no Reino dos 
    Céus" (Mt 18,3).`,
    },
    {
        q: '❓ E se meu filho não souber explicar a transubstanciação?',
        a: `Tudo bem. Crianças de 7 anos não precisam saber definir "transubstanciação". Precisam saber 
    que ali está Jesus — não pão.\n\nO catecismo para crianças traduz isto de forma simples: "O padre 
    diz as palavras de Jesus e o pão se torna o Corpo de Jesus, mesmo continuando com aparência de 
    pão." Se a criança entende essa frase e crê nela, está pronta.\n\nA teologia formal vem com o tempo. 
    A fé vem primeiro. Adultos teólogos passam a vida estudando o sacramento — e ainda assim, no fim, 
    é mistério. A criança que ama Jesus na Eucaristia, mesmo sem saber explicar, está mais perto da 
    verdade do que o adulto que sabe explicar mas não ama.`,
    },
    {
        q: '❓ Precisa mesmo confessar antes da Primeira Comunhão?',
        a: `Sim — e isto é ensino expresso da Igreja, não invenção paroquial. O cânon 914 do Código de 
    Direito Canônico estabelece: a Primeira Comunhão deve ser feita "depois da prévia confissão 
    sacramental".\n\nRazões:\n\n• São Paulo adverte sobre comungar indignamente (1Cor 11,27)\n• Crianças 
    que atingiram o uso da razão podem cometer pecado mortal\n• A Primeira Confissão é também um sacramento 
    valioso por si mesmo — o primeiro encontro com a misericórdia de Deus\n\nPais que tentam pular a 
    Confissão "para não traumatizar" entendem mal a Confissão. Quando bem feita, com um padre gentil, 
    é uma experiência de libertação — não de medo. As crianças saem da Primeira Confissão geralmente 
    sorrindo, com leveza no coração.`,
    },
    {
        q: '❓ E se o pai/mãe não for praticante? Pode levar o filho?',
        a: `Pode — e deveria. Mas é hora de olhar para si mesmo.\n\nA Primeira Comunhão do filho é, em 
    muitos casos, a maior chamada de Deus aos pais para se converterem. Há algo profundamente incoerente 
    em levar o filho a receber Cristo enquanto os pais não comungam há anos. A criança percebe. Cedo ou 
    tarde pergunta: "Mãe, por que você não comunga?"\n\nO Catecismo é claro: os pais são os "primeiros 
    catequistas". Se vocês não vão à Missa, se não se confessam, se tratam a fé como hobby de fim de 
    semana, nenhuma catequista do mundo conseguirá ensinar ao seu filho o valor da Eucaristia. A maior 
    catequese é o exemplo.\n\nNão é tarde. Procurem o padre, confessem-se, voltem à Mesa do Senhor — 
    juntos com seu filho. A graça da Primeira Comunhão dele pode ser a sua segunda conversão.`,
    },
    {
        q: '❓ A festa depois é obrigatória? Quanto deve ser gasto?',
        a: `Festa não é obrigatória. Almoço em família, sim, é tradição bonita e legítima. Mas há uma 
    distorção contemporânea grave: gastar fortunas em buffets, fotógrafos profissionais, vestidos de 
    princesa, lembrancinhas caras, salões de festa.\n\nIsso transforma a Primeira Comunhão num casamento 
    infantil — quando o foco deveria ser Cristo recebido pela primeira vez. Muitas famílias humildes 
    se endividam para fazer "uma festa à altura" — e perdem o essencial.\n\nO essencial é: a criança 
    receber Jesus em estado de graça, com preparação espiritual séria. Tudo o mais é opcional. Uma 
    Primeira Comunhão pode ser celebrada com um almoço simples em casa e ser infinitamente mais bela 
    do que uma com 200 convidados e DJ.\n\nPergunta-teste: 20 anos depois, o que seu filho vai lembrar 
    — o sabor da Hóstia ou o sabor do bolo?`,
    },
    {
        q: '❓ Pode receber a Comunhão na boca ou nas mãos?',
        a: `Ambas as formas são permitidas pela Igreja. A escolha é da criança (ou família).\n\n• Na boca 
    (tradicional): a criança ajoelha-se ou inclina-se, abre a boca, recebe a hóstia diretamente do 
    sacerdote sobre a língua. Forma usada por quase 2.000 anos.\n\n• Nas mãos (permitida no Brasil 
    desde 1969): a criança apresenta as mãos formando um pequeno trono — palma esquerda sobre a direita. 
    Recebe a hóstia na palma esquerda. Leva à boca com a mão direita, ainda diante do sacerdote, e a 
    consome imediatamente.\n\nErros a evitar: não pegar a hóstia com os dedos como se fosse biscoito, 
    não sair do altar com a hóstia ainda na mão, não deixar partículas nas mãos. Após receber nas mãos, 
    deve-se conferir se não restou nenhuma partícula — qualquer migalha é Cristo.`,
    },
    {
        q: '❓ E se a criança engasgar ou cuspir a hóstia?',
        a: `Acontece. Especialmente com crianças nervosas no dia. A Igreja tem procedimento claro para isso:\n\nSe 
    a hóstia for cuspida ou cair: o sacerdote (ou ministro) recolhe imediatamente, consome reverentemente, 
    e o local é purificado. Não é "pecado" da criança — é acidente, e tratado como tal.\n\nSe a criança 
    engasgar: pode beber água depois. Engolir com dificuldade não invalida a Comunhão.\n\nPara evitar 
    nervosismo: pratique antes em casa, usando uma bolacha pequena, ensine a criança como abrir a boca, 
    receber, fechar, engolir devagar. Parece exagero, mas reduz drasticamente acidentes no dia.`,
    },
    {
        q: '❓ Crianças com autismo, deficiência intelectual ou alimentar podem comungar?',
        a: `Sim. A Igreja tem orientações específicas:\n\n• Autismo / deficiência intelectual: o critério 
    é a capacidade mínima de distinguir o Pão Eucarístico do comum e ter algum nível de devoção. Mesmo 
    casos severos, com preparação adaptada, podem comungar. Cada caso deve ser avaliado com o pároco.\n\n• 
    Doença celíaca / intolerância ao glúten: existem hóstias com baixíssimo teor de glúten aprovadas 
    pelo Vaticano. Em casos extremos, a criança pode comungar apenas no Sangue (vinho consagrado). 
    Converse com o pároco previamente.\n\n• Alergias múltiplas: o Vaticano permitiu, em casos médicos 
    documentados, soluções adaptadas. Nunca a criança deve ser excluída por questão médica.\n\nA Igreja 
    é mãe — não administra sacramentos com burocracia desumana. Há sempre solução pastoral. Converse 
    com o seu pároco.`,
    },
]

// ============================================================
// COMPONENTE
// ============================================================

export default function PrimeiraComunhaoPage() {
    const [sidebarAberta, setSidebarAberta] = useState(false)
    const [navEscondida, setNavEscondida] = useState(false)
    const [activeFaq, setActiveFaq] = useState<number | null>(null)
    const [activeSection, setActiveSection] = useState('')
    const ultimoScroll = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            if (sidebarAberta) return
            const scrollAtual = window.pageYOffset
            if (scrollAtual <= 80) {
                setNavEscondida(false)
                ultimoScroll.current = scrollAtual
                return
            }
            setNavEscondida(scrollAtual > ultimoScroll.current)
            ultimoScroll.current = scrollAtual
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [sidebarAberta])

    useEffect(() => {
        const ids = ['hero', 'o-que-e', 'idade', 'pio-x', 'confissao-primeira', 'catequese',
            'requisitos', 'preparacao', 'dia', 'rito', 'depois', 'santos', 'oracoes',
            'vida-depois', 'duvidas', 'final']
        const handleScroll = () => {
            let current = ''
            ids.forEach(id => {
                const el = document.getElementById(id)
                if (el && window.scrollY >= el.offsetTop - 120) current = id
            })
            setActiveSection(current)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setSidebarAberta(false) }
        document.addEventListener('keydown', handler)
        return () => document.removeEventListener('keydown', handler)
    }, [])

    useEffect(() => {
        document.body.style.overflow = sidebarAberta ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [sidebarAberta])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) {
                    const el = e.target as HTMLElement
                    el.style.opacity = '1'
                    el.style.transform = 'translateY(0)'
                }
            }),
            { threshold: 0.08 },
        )
        document.querySelectorAll('.animaItem').forEach(el => {
            const h = el as HTMLElement
            h.style.opacity = '0'
            h.style.transform = 'translateY(22px)'
            h.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
            observer.observe(h)
        })
        return () => observer.disconnect()
    }, [])

    const scrollTo = (href: string) => {
        setSidebarAberta(false)
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
            const top = el.getBoundingClientRect().top + window.pageYOffset - 80
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <div className={styles.pageWrapper}>

            {/* NAV */}
            <nav className={`${styles.navPrincipal} ${navEscondida ? styles.navEscondida : ''}`}>
                <div className={styles.navContainer}>
                    <Link href="/estudos" className={styles.btnVoltar}>
                        <span>←</span>
                        <span className={styles.btnVoltarTexto}>Voltar</span>
                    </Link>
                    <a href="#hero" className={styles.navLogo} onClick={e => { e.preventDefault(); scrollTo('#hero') }}>
                        <img
                            src="/estudos/sacramentos/primeira-comunhao/meuno-topo.png"
                            alt="Primeira Comunhão"
                            className={styles.navLogoImg}
                        />
                    </a>
                    <button className={styles.navToggle} onClick={() => setSidebarAberta(true)} aria-label="Abrir menu">
                        <span>☰</span>
                        <span className={styles.navToggleTexto}>Índice</span>
                    </button>
                </div>
            </nav>

            {/* SIDEBAR */}
            <div
                className={`${styles.sidebarOverlay} ${sidebarAberta ? styles.sidebarOverlayAtivo : ''}`}
                onClick={() => setSidebarAberta(false)}
            />
            <aside className={`${styles.sidebar} ${sidebarAberta ? styles.sidebarAtivo : ''}`}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.sidebarLogo}>
                        <span className={styles.sidebarLogoIcon}>⛪</span>
                        <span>Primeira Comunhão</span>
                    </div>
                    <button className={styles.sidebarFechar} onClick={() => setSidebarAberta(false)} aria-label="Fechar">
                        ✕
                    </button>
                </div>
                <div className={styles.sidebarConteudo}>
                    <p className={styles.sidebarSupratitulo}>O Primeiro Encontro</p>
                    <p className={styles.sidebarSubtitulo}>Navegue pelas seções</p>
                    {sidebarSections.map(grupo => (
                        <div key={grupo.titulo} className={styles.sidebarGrupo}>
                            <h4 className={styles.sidebarGrupoTitulo}>{grupo.titulo}</h4>
                            <ul className={styles.sidebarLinks}>
                                {grupo.links.map(link => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className={activeSection === link.href.replace('#', '') ? styles.ativoLink : ''}
                                            onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                                        >
                                            <span className={styles.sidebarNum}>{link.num}</span>
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className={styles.sidebarRodape}>
                    <p><em>«Deixai vir a Mim as crianças»</em></p>
                    <p className={styles.sidebarRodapeRef}>— Mt 19,14</p>
                </div>
            </aside>

            {/* HERO */}
            <header className={styles.hero} id="hero">
                <div className={styles.heroParticles}>
                    {Array.from({ length: 10 }).map((_, i) => <div key={i} className={styles.particle} />)}
                </div>
                <div className={styles.heroContent}>
                    <h1>Primeira Comunhão</h1>
                    <p className={styles.heroSubtitle}>
                        O primeiro encontro pessoal com Cristo na Eucaristia
                    </p>
                    <div className={styles.heroVerse}>
                        <p>
                            &ldquo;Deixai vir a Mim as crianças, e não as impeçais, porque delas é o Reino dos Céus.&rdquo;
                        </p>
                        <cite>— Mateus 19,14</cite>
                    </div>
                    <div className={styles.heroBtns}>
                        <a href="#o-que-e" className={`${styles.btn} ${styles.btnGold}`}
                            onClick={e => { e.preventDefault(); scrollTo('#o-que-e') }}>
                            Começar
                        </a>
                        <a href="#preparacao" className={`${styles.btn} ${styles.btnOutline}`}
                            onClick={e => { e.preventDefault(); scrollTo('#preparacao') }}>
                            Como Preparar
                        </a>
                    </div>
                </div>
            </header>

            <main>

                {/* SEÇÃO 1 — O QUE É */}
                <section id="o-que-e" className={styles.sectionWrapper}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>⛪ O Primeiro Encontro</span>
                            <h2>O Que É a Primeira Comunhão</h2>
                            <p>Não é uma cerimônia. É um instante que muda a vida espiritual para sempre.</p>
                        </div>

                        <div className={`${styles.card} ${styles.cardWine} animaItem`}>
                            <span className={styles.cardIcon}>🍞</span>
                            <h3>A Primeira de muitas — ou a única?</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                A Primeira Comunhão é, literalmente, a primeira vez que uma pessoa recebe o Corpo de Cristo
                                na Eucaristia. A partir desse dia, ela poderá comungar todos os domingos — e idealmente
                                todos os dias da vida.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                Mas atenção a uma distorção comum: a Primeira Comunhão é tratada por muitas famílias como
                                <em> cerimônia de encerramento</em> — fim da catequese, fim das obrigações religiosas
                                da criança. Na visão da Igreja, é exatamente o oposto: é a porta de entrada na vida
                                eucarística, que dura para sempre.
                            </p>
                            <p>
                                A criança não fez a Primeira Comunhão para ter feito. Fez para começar.
                            </p>
                        </div>

                        <div className={`${styles.grid2} animaItem`} style={{ marginTop: '2rem' }}>
                            <div className={styles.card}>
                                <span className={styles.cardIcon}>🔑</span>
                                <h3>O que muda nesse dia</h3>
                                <p>
                                    Até a Primeira Comunhão, a criança batizada participava da Missa como espectadora — via
                                    os pais comungarem, mas ela mesma ficava sentada ou recebia uma bênção no lugar da hóstia.
                                    Após a Primeira Comunhão, ela passa a participar plenamente do sacrifício eucarístico.
                                    É membro pleno da Mesa do Senhor.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <span className={styles.cardIcon}>🎯</span>
                                <h3>O que NÃO é</h3>
                                <p>
                                    Não é uma "formatura" da catequese. Não é uma festa social. Não é tradição de família
                                    cumprida. Não é etapa burocrática para depois fazer a Crisma. A Primeira Comunhão é,
                                    exclusivamente, o primeiro encontro pessoal e sacramental com Cristo presente sob as
                                    espécies do pão e do vinho.
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.quoteBlock} animaItem`}>
                            <p>
                                &ldquo;O dia da minha Primeira Comunhão ficou na minha alma como uma aurora sem sol poente.
                                Foi um beijo de amor entre Jesus e a minha pequena alma. Eu sentia que era amada e disse
                                também: 'Eu Vos amo, dou-me a Vós para sempre.'&rdquo;
                            </p>
                            <cite>— Santa Teresinha do Menino Jesus, lembrando sua Primeira Comunhão aos 11 anos</cite>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 2 — IDADE */}
                <section id="idade" className={styles.bgLight}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>🧒 Idade</span>
                            <h2>Por que a Idade é 7 Anos?</h2>
                            <p>Uma decisão que mudou em 1910 — e a razão por trás disso</p>
                        </div>

                        <div className={`${styles.historiaBox} animaItem`}>
                            <h3>🗓️ A "Idade da Razão"</h3>
                            <p>
                                A Igreja não estabelece uma idade fixa absoluta. O critério é teológico e psicológico:
                                a <strong>idade da razão</strong> — momento em que a criança começa a distinguir o bem
                                do mal, age com intenção, compreende o que faz. Para a Igreja, isso acontece em torno
                                dos 7 anos. Pode ser um pouco antes ou depois — depende de cada criança.
                            </p>
                            <p>
                                A partir dessa idade, a criança é considerada capaz de pecar conscientemente. E quem
                                pode pecar pode também se confessar. E quem se confessa pode comungar. A lógica é
                                interna: os três sacramentos da vida moral cristã (Confissão e Eucaristia) abrem-se
                                ao mesmo tempo.
                            </p>
                        </div>

                        <h3 style={{ color: '#8B1428', fontSize: '1.4rem', margin: '3rem 0 1.5rem' }}>
                            📜 Como chegamos aos 7 anos — A história
                        </h3>

                        <div className={styles.timeline}>
                            {historiaIdade.map((item, i) => (
                                <div key={i} className={`${styles.timelineItem} animaItem`}>
                                    <span className={styles.timelineDate}>{item.data}</span>
                                    <h3>{item.titulo}</h3>
                                    <p>{item.texto}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 3 — PIO X */}
                <section id="pio-x" className={styles.bgDark}>
                    <div className={styles.container}>
                        <div className={`${styles.sectionHeader} ${styles.sectionHeaderDark}`}>
                            <span className={styles.sectionTagDark}>👑 Quam Singulari</span>
                            <h2>1910 — O Decreto que Mudou Tudo</h2>
                            <p>Como um Papa filho de carteiro restaurou o direito das crianças à Eucaristia</p>
                        </div>

                        <div className={`${styles.destaqueBoxDark} animaItem`} style={{ marginTop: 0 }}>
                            <h3>📜 Quam Singulari Christus Amore — 8 de agosto de 1910</h3>
                            <p>
                                O Papa Pio X (1835-1914), italiano de origem humilde, assinou um decreto que cabia em
                                uma página — e mudou 700 anos de prática. Em essência: a Primeira Comunhão deve ser
                                feita na idade da razão (cerca de 7 anos), não aos 12, 14 ou mais como era costume.
                            </p>
                            <p>
                                O contexto: por séculos, sob influência jansenista, a Igreja havia adiado cada vez mais
                                a Primeira Comunhão. Os jansenistas exigiam &ldquo;perfeita preparação&rdquo;,
                                &ldquo;total compreensão&rdquo;, &ldquo;disposição imaculada&rdquo; — coisas impossíveis
                                para crianças. O resultado: gerações de crianças morriam sem nunca ter comungado. A mortalidade
                                infantil no século XIX ainda era altíssima. Pio X chorava ouvindo essas histórias.
                            </p>
                        </div>

                        <div className={`${styles.quoteBlock} ${styles.quoteBlockDark} animaItem`}>
                            <p>
                                &ldquo;Privar as crianças da Eucaristia até uma idade tardia, sob o pretexto de proteger
                                o sacramento, é coisa abominável. É contrária à vontade explícita de Cristo, que disse:
                                'Deixai vir a Mim as crianças.' É roubar das crianças seu maior amigo na hora em que
                                mais precisam Dele.&rdquo;
                            </p>
                            <cite>— São Pio X, Quam Singulari (1910)</cite>
                        </div>

                        <div className={`${styles.destaqueBoxDark} animaItem`}>
                            <h3>💎 Os quatro pontos centrais do decreto</h3>
                            <ol style={{ paddingLeft: '1.2rem', color: 'rgba(240,230,211,0.75)', lineHeight: 2 }}>
                                <li>
                                    <strong style={{ color: '#D4AF37' }}>A idade da Primeira Comunhão é a idade da razão</strong>
                                    {' '}— em torno dos 7 anos, podendo variar conforme cada criança.
                                </li>
                                <li>
                                    <strong style={{ color: '#D4AF37' }}>Não se exige &ldquo;perfeito conhecimento&rdquo;</strong>
                                    {' '}— basta que a criança distinga o Pão Eucarístico do pão comum.
                                </li>
                                <li>
                                    <strong style={{ color: '#D4AF37' }}>A obrigação é dos pais e do pároco</strong>
                                    {' '}— não podem retardar a Primeira Comunhão por considerar a criança &ldquo;imatura&rdquo;
                                    segundo critérios humanos exagerados.
                                </li>
                                <li>
                                    <strong style={{ color: '#D4AF37' }}>Crianças doentes ou em perigo de morte</strong>
                                    {' '}podem comungar em qualquer idade, desde que distingam o Pão Eucarístico.
                                </li>
                            </ol>
                        </div>

                        <div className={`${styles.destaqueBoxDark} animaItem`}>
                            <h3>🧒 A anedota que mudou tudo</h3>
                            <p>
                                Há um relato célebre, frequentemente contado para ilustrar o espírito de Pio X: uma mãe
                                inglesa levou seu filho de 4 anos para uma audiência papal. Pediu a bênção do Papa.
                            </p>
                            <p>
                                Pio X perguntou ao menino:
                            </p>
                            <p style={{ paddingLeft: '1.5rem', fontStyle: 'italic', color: '#D4AF37' }}>
                                — &ldquo;Quem está no Santíssimo Sacramento?&rdquo;
                            </p>
                            <p>
                                O menino respondeu sem hesitar:
                            </p>
                            <p style={{ paddingLeft: '1.5rem', fontStyle: 'italic', color: '#D4AF37' }}>
                                — &ldquo;Jesus Cristo.&rdquo;
                            </p>
                            <p>
                                Pio X virou-se aos cardeais presentes e disse:
                            </p>
                            <p style={{ paddingLeft: '1.5rem', fontStyle: 'italic', color: '#D4AF37' }}>
                                — &ldquo;Levem-no para comungar amanhã.&rdquo;
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Os cardeais escandalizaram-se: &ldquo;Mas Santidade, ele tem só 4 anos!&rdquo; Pio X respondeu:
                                &ldquo;Ele sabe Quem é Jesus na Eucaristia. Conhece e ama. O que mais é necessário?&rdquo;
                            </p>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 4 — PRIMEIRA CONFISSÃO */}
                <section id="confissao-primeira" className={styles.sectionWrapper}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>🕊️ Antes da Primeira</span>
                            <h2>A Primeira Confissão Vem Primeiro</h2>
                            <p>Sacramento esquecido — mas indispensável antes da Primeira Comunhão</p>
                        </div>

                        <div className={`${styles.card} ${styles.cardGold} animaItem`}>
                            <span className={styles.cardIcon}>📜</span>
                            <h3>A regra que muitos ignoram</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                O Código de Direito Canônico (cânon 914) é categórico: a Primeira Comunhão deve ser
                                precedida da Primeira Confissão. Não é tradição opcional — é lei da Igreja.
                            </p>
                            <p style={{ marginBottom: '1rem' }}>
                                A razão é simples: a criança que atingiu o uso da razão é capaz de pecar conscientemente.
                                E quem está em pecado mortal não pode receber a Eucaristia dignamente. São Paulo é direto:
                                <em> &ldquo;Quem come o pão ou bebe o cálice do Senhor indignamente será réu do Corpo
                                    e do Sangue do Senhor&rdquo;</em> (1Cor 11,27).
                            </p>
                            <p>
                                Mesmo que a criança não tenha pecados mortais (o que é provável aos 7 anos), a Confissão
                                limpa pecados veniais, fortalece a alma, e ensina desde cedo a disciplina sacramental.
                                É o &ldquo;banho&rdquo; antes do encontro.
                            </p>
                        </div>

                        <div className={`${styles.grid2} animaItem`} style={{ marginTop: '2rem' }}>
                            <div className={styles.card}>
                                <span className={styles.cardIcon}>⏰</span>
                                <h3>Quando fazer</h3>
                                <p>
                                    Idealmente, alguns dias ou semanas antes da Primeira Comunhão — não no mesmo dia,
                                    para evitar atropelo emocional. Em muitas paróquias, há uma celebração comunitária
                                    da Primeira Confissão para todo o grupo da catequese, semanas antes do dia marcado
                                    para a Primeira Comunhão.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <span className={styles.cardIcon}>💬</span>
                                <h3>Como funciona</h3>
                                <p>
                                    A criança vai sozinha ao confessionário (ou a uma sala adaptada). Confessa ao padre
                                    os pecados que conseguiu identificar. O padre orienta, eventualmente faz perguntas
                                    gentis, dá uma pequena penitência (geralmente algumas orações), e dá a absolvição.
                                    A criança sai com a alma limpa — pronta para comungar dignamente.
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.highlight} animaItem`}>
                            <h4>⚠️ Pais: NÃO &ldquo;protejam&rdquo; o filho da Confissão</h4>
                            <p>
                                Há pais que tentam evitar a Primeira Confissão &ldquo;para não traumatizar a criança&rdquo;.
                                Isso parte de mal-entendido sobre o sacramento. Quando bem feita, com um padre treinado
                                e gentil, a Primeira Confissão é uma das experiências mais leves e libertadoras da
                                infância. A criança não sai com medo — sai sorrindo. A Confissão não é tribunal; é abraço
                                de pai. Confiem no sacramento que a Igreja viveu por 2.000 anos.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 5 — CATEQUESE */}
                <section id="catequese" className={styles.sectionWrapper}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>📖 Formação</span>
                            <h2>A Catequese de Primeira Comunhão</h2>
                            <p>O que a criança precisa aprender antes — sem exageros, sem deficiências</p>
                        </div>

                        <div className={`${styles.card} animaItem`}>
                            <span className={styles.cardIcon}>🎯</span>
                            <h3>O equilíbrio que Pio X ensinou</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                A catequese para a Primeira Comunhão tem dois perigos opostos. O primeiro é o jansenismo
                                renascido: exigir que a criança saiba teologia complexa, decorar definições, dominar
                                conceitos abstratos. O segundo é o oposto: tratar como brincadeira, esvaziar de conteúdo,
                                não exigir nada.
                            </p>
                            <p>
                                O caminho correto está entre os dois. A criança precisa saber o essencial — com profundidade
                                acessível à sua idade, mas com verdadeira fé e respeito. Não decorar como papagaio, nem
                                ignorar como turista.
                            </p>
                        </div>

                        <div className={`${styles.grid2} animaItem`} style={{ marginTop: '2rem' }}>
                            <div className={styles.card}>
                                <span className={styles.cardIcon}>✅</span>
                                <h3>O que a criança precisa saber</h3>
                                <ul style={{ paddingLeft: '1.2rem', color: '#555', lineHeight: 1.9 }}>
                                    <li>Quem é Jesus — Filho de Deus que se fez homem</li>
                                    <li>O que aconteceu na Última Ceia</li>
                                    <li>O que é a Missa (sacrifício, não apenas reunião)</li>
                                    <li>Que a hóstia consagrada é o Corpo de Jesus — não pão</li>
                                    <li>Como se comporta dentro da igreja</li>
                                    <li>Como se confessa</li>
                                    <li>Como se faz uma boa Comunhão</li>
                                    <li>As orações básicas: Pai-Nosso, Ave-Maria, Glória, Credo, Ato de Contrição</li>
                                </ul>
                            </div>
                            <div className={styles.card}>
                                <span className={styles.cardIcon}>❌</span>
                                <h3>O que NÃO se deve exigir</h3>
                                <ul style={{ paddingLeft: '1.2rem', color: '#555', lineHeight: 1.9 }}>
                                    <li>Definir &ldquo;transubstanciação&rdquo; em latim</li>
                                    <li>Explicar todas as partes da Missa em sequência</li>
                                    <li>Decorar dezenas de orações em ordem</li>
                                    <li>Listar todos os sacramentos com efeitos</li>
                                    <li>Compreender perfeitamente o mistério eucarístico (nem o Papa compreende!)</li>
                                    <li>Passar em &ldquo;prova&rdquo; com nota alta</li>
                                    <li>Ter &ldquo;perfeita disposição moral&rdquo; (ninguém tem)</li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${styles.quoteBlock} animaItem`}>
                            <p>
                                &ldquo;Os adultos imaginam que as crianças precisam saber muito para comungar. Mas o
                                Senhor não disse: 'Deixai vir a Mim os instruídos.' Disse: 'Deixai vir a Mim as crianças.'
                                A criança que ama Jesus, mesmo sem saber explicá-Lo, está mais preparada do que o adulto
                                que sabe explicá-Lo mas não O ama.&rdquo;
                            </p>
                            <cite>— Espírito de Quam Singulari, paráfrase tradicional</cite>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 6 — REQUISITOS */}
                <section id="requisitos" className={styles.bgLight}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>✅ Requisitos</span>
                            <h2>Os Seis Requisitos para Receber</h2>
                            <p>O que a Igreja efetivamente pede — nem mais, nem menos</p>
                        </div>

                        <div className={styles.grid2}>
                            {requisitos.map((r, i) => (
                                <div key={i} className={`${styles.card} animaItem`}>
                                    <span className={styles.cardIcon}>{r.icone}</span>
                                    <h3>{r.titulo}</h3>
                                    <p>{r.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 7 — PREPARAÇÃO */}
                <section id="preparacao" className={styles.sectionWrapper}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>📋 Preparação</span>
                            <h2>Os 7 Passos da Preparação Real</h2>
                            <p>Do início da catequese aos 15 minutos após receber Cristo</p>
                        </div>

                        {preparacaoSteps.map(step => (
                            <div key={step.n} className={`${styles.step} animaItem`}>
                                <div className={styles.stepNumber}>{step.n}</div>
                                <div className={styles.stepContent}>
                                    <h3>{step.titulo}</h3>
                                    <p>{step.texto}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SEÇÃO 8 — O DIA */}
                <section id="dia" className={styles.bgDark}>
                    <div className={styles.container}>
                        <div className={`${styles.sectionHeader} ${styles.sectionHeaderDark}`}>
                            <span className={styles.sectionTagDark}>🌅 O Grande Dia</span>
                            <h2>O Dia Por Dentro</h2>
                            <p>Como deve ser vivido — para que não vire só um evento social</p>
                        </div>

                        <div className={`${styles.destaqueBoxDark} animaItem`} style={{ marginTop: 0 }}>
                            <h3>🌄 A manhã — silêncio antes da glória</h3>
                            <p>
                                O dia da Primeira Comunhão deve começar diferente dos outros. Não com despertador estridente,
                                pressa, fotógrafo já tirando fotos. Deve começar com silêncio, oração curta em família,
                                vestir-se com calma. A criança deve sentir, desde o despertar, que algo grande vai acontecer
                                — e que esse algo é dentro dela, não fora.
                            </p>
                            <p>
                                Café da manhã: nada. Jejum desde a meia-noite (idealmente) ou pelo menos 1 hora antes
                                da Missa. Apenas água, se necessário. Isso cria pequena &ldquo;fome&rdquo; que prepara
                                para o verdadeiro Alimento.
                            </p>
                        </div>

                        <div className={`${styles.destaqueBoxDark} animaItem`}>
                            <h3>👗 A vestimenta — branco que fala</h3>
                            <p>
                                O branco da Primeira Comunhão não é estética — é teologia em pano. Lembra a vestimenta
                                batismal: a alma lavada pelo Sangue de Cristo. As meninas geralmente vestem vestido
                                branco (estilo simples, não vestido de princesa); os meninos, terno escuro com camisa
                                branca ou alba branca.
                            </p>
                            <p>
                                Algumas tradições incluem véu (para meninas), laço no braço, ramalhete de flores, vela
                                acesa. Tudo isso é opcional — o essencial é a decência, o branco e a simplicidade. Fugir
                                do exagero: a roupa não pode competir com o sacramento.
                            </p>
                        </div>

                        <div className={`${styles.destaqueBoxDark} animaItem`}>
                            <h3>📷 O fotógrafo — sirva, não roube</h3>
                            <p>
                                Há uma praga moderna: fotógrafos profissionais que tratam a Primeira Comunhão como ensaio
                                fotográfico, fazendo a criança posar antes, durante e depois da Missa, atrapalhando a
                                liturgia, distraindo a assembleia. Isso descaracteriza o sacramento.
                            </p>
                            <p>
                                Regras saudáveis: o fotógrafo (profissional ou pai) fica em local discreto, não usa flash
                                durante a consagração nem durante a Comunhão, não interrompe ninguém. As fotos posadas
                                ficam para depois da Missa, fora da igreja. Durante a liturgia, a criança não está
                                posando — está rezando. Filmar para ver depois é bom; transformar o sacramento em sessão
                                de fotos é grave.
                            </p>
                        </div>

                        <div className={`${styles.destaqueBoxDark} animaItem`}>
                            <h3>🍰 A festa depois — proporção e foco</h3>
                            <p>
                                Almoço em família após a Missa é tradição linda e legítima. O problema começa quando a
                                festa vira casamento infantil: 200 convidados, buffet caríssimo, DJ, salão de festa
                                alugado, vestido de R$3 mil, lembrancinhas elaboradas, bolo cenográfico.
                            </p>
                            <p>
                                Famílias humildes se endividam para fazer &ldquo;à altura&rdquo;. Crianças passam o dia
                                cansadas, posando, comendo doces — e esquecem completamente que receberam Cristo pela
                                manhã. O foco se perdeu.
                            </p>
                            <p>
                                Faça um teste mental: 20 anos depois, o que você quer que seu filho lembre do dia? O
                                sabor da hóstia ou o sabor do bolo? A presença de Jesus ou a presença dos convidados?
                                A celebração eucarística ou a celebração social? Ajuste os investimentos ao que importa.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 9 — RITO */}
                <section id="rito" className={styles.sectionWrapper}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>🕯️ O Rito</span>
                            <h2>A Missa de Primeira Comunhão Passo a Passo</h2>
                            <p>Cada gesto tem significado. Conhecer aumenta a reverência.</p>
                        </div>

                        {ritoPassos.map((passo, i) => (
                            <div key={i} className={`${styles.ritoStep} animaItem`}>
                                <span className={styles.ritoStepNumber}>{passo.num}</span>
                                <h3>{passo.titulo}</h3>
                                <p>{passo.texto}</p>
                                {passo.extra}
                            </div>
                        ))}
                    </div>
                </section>

                {/* SEÇÃO 10 — 15 MINUTOS DEPOIS */}
                <section id="depois" className={styles.bgDark}>
                    <div className={styles.container}>
                        <div className={`${styles.sectionHeader} ${styles.sectionHeaderDark}`}>
                            <span className={styles.sectionTagDark}>⏱️ O Tesouro</span>
                            <h2>Os 15 Minutos Depois</h2>
                            <p>O tempo mais precioso do dia — e o mais frequentemente desperdiçado</p>
                        </div>

                        <div className={`${styles.destaqueBoxDark} animaItem`} style={{ marginTop: 0 }}>
                            <h3>📜 A doutrina dos teólogos clássicos</h3>
                            <p>
                                Os grandes teólogos da Eucaristia — Santo Tomás de Aquino, São Boaventura, Santo Afonso
                                — ensinavam que a presença sacramental de Cristo permanece no comungante enquanto as
                                <em> espécies</em> (aparências do pão) ainda existem dentro do corpo. Quando a digestão
                                começa a desfazer essas aparências, a presença sacramental cessa.
                            </p>
                            <p>
                                Em termos práticos: aproximadamente 10 a 15 minutos. Durante esse tempo,
                                <strong style={{ color: '#D4AF37' }}> Cristo está fisicamente em você</strong> — não
                                só espiritualmente. É o que Santa Teresa d&apos;Ávila chamava de &ldquo;audiência particular
                                com o Rei&rdquo;.
                            </p>
                        </div>

                        <div className={`${styles.grid2} animaItem`} style={{ marginTop: '2rem' }}>
                            <div className={styles.cardDark}>
                                <h3>❌ O que destrói esse momento</h3>
                                <ul style={{ paddingLeft: '1.2rem', color: 'rgba(240,230,211,0.75)', lineHeight: 2 }}>
                                    <li>Voltar ao banco cumprimentando todos</li>
                                    <li>Pegar celular para responder mensagens</li>
                                    <li>Olhar para os lados observando quem comunga</li>
                                    <li>Sair correndo no &ldquo;Ide em paz&rdquo;</li>
                                    <li>Conversar no estacionamento sobre o almoço</li>
                                    <li>Pensar em fotos, presentes, convidados</li>
                                    <li>Os pais arrastando a criança para tirar fotos</li>
                                </ul>
                            </div>
                            <div className={styles.cardDark}>
                                <h3>✅ O que aproveita esse momento</h3>
                                <ul style={{ paddingLeft: '1.2rem', color: 'rgba(240,230,211,0.75)', lineHeight: 2 }}>
                                    <li>Ajoelhar-se ou sentar-se em silêncio absoluto</li>
                                    <li>Fechar os olhos e &ldquo;conversar&rdquo; com Jesus</li>
                                    <li>Rezar a Anima Christi mentalmente</li>
                                    <li>Agradecer por algo específico do dia</li>
                                    <li>Pedir por uma pessoa concreta — pai, mãe, amigo doente</li>
                                    <li>Permanecer mais 5 minutos após a bênção final</li>
                                    <li>Sair da igreja ainda em silêncio interior</li>
                                </ul>
                            </div>
                        </div>

                        <div className={`${styles.quoteBlock} ${styles.quoteBlockDark} animaItem`}>
                            <p>
                                &ldquo;Quem se afasta apressadamente do altar depois da Comunhão age como o servo ingrato
                                que recebe um presente do rei e vai embora sem agradecer. Permaneçam ajoelhados. Adorem.
                                Saboreiem. Não há outro tempo igual a este — até a próxima Comunhão.&rdquo;
                            </p>
                            <cite>— São Filipe Neri</cite>
                        </div>

                        <div className={`${styles.destaqueBoxDark} animaItem`}>
                            <h3>👨‍👩‍👧 Pais: este momento é sua maior responsabilidade</h3>
                            <p>
                                Os 15 minutos após a Primeira Comunhão do seu filho serão lembrados por toda a vida —
                                no consciente ou inconsciente. Se vocês o arrastarem da igreja para tirar fotos, se
                                falarem alto, se ligarem celular para ver mensagens, vocês ensinarão que a Eucaristia
                                é um evento como outros. Se vocês permanecerem ajoelhados, em silêncio, olhos fechados,
                                ao lado dele — vocês ensinarão que Deus acabou de descer àquele coração pequeno.
                            </p>
                            <p>
                                Não há catequese mais poderosa do que essa. Seus filhos não fazem o que vocês falam.
                                Fazem o que vocês fazem.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 11 — SANTOS */}
                <section id="santos" className={styles.bgDark}>
                    <div className={styles.container}>
                        <div className={`${styles.sectionHeader} ${styles.sectionHeaderDark}`}>
                            <span className={styles.sectionTagDark}>👑 Modelos</span>
                            <h2>Santos que Viveram a Primeira Comunhão de Modo Heroico</h2>
                            <p>Modelos para crianças e exemplos para adultos</p>
                        </div>

                        <div className={styles.grid3}>
                            {santosPrimeira.map((s, i) => (
                                <div key={i} className={`${styles.santoCard} animaItem`}>
                                    <div className={styles.santoHeader}>
                                        <span className={styles.santoEmoji}>{s.emoji}</span>
                                        <h3>{s.nome}</h3>
                                        <span className={styles.santoEpoca}>{s.epoca}</span>
                                    </div>
                                    <div className={styles.santoBody}>
                                        <blockquote dangerouslySetInnerHTML={{ __html: s.quote }} />
                                        {s.bio.split('\n\n').map((p, j) => (
                                            <p key={j} style={{ marginBottom: '0.8rem' }}>{p}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 12 — ORAÇÕES */}
                <section id="oracoes" className={styles.sectionWrapper}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>📿 Orações</span>
                            <h2>Orações para o Dia</h2>
                            <p>Para antes, durante e depois — para a criança e para a família</p>
                        </div>

                        <div className={styles.grid2}>
                            {oracoes.map((o, i) => (
                                <div key={i} className={`${styles.oracaoBox} animaItem`}>
                                    <h3>{o.titulo}</h3>
                                    <p className={styles.oracaoContexto}>{o.contexto}</p>
                                    <p>
                                        {o.texto.split('\n').map((line, j) => (
                                            <span key={j}>{line || '\u00A0'}<br /></span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 13 — VIDA DEPOIS */}
                <section id="vida-depois" className={styles.bgLight}>
                    <div className={styles.container}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>🌱 Vida Cristã</span>
                            <h2>O Que Vem Depois — A Vida Eucarística</h2>
                            <p>A Primeira foi só a primeira. Agora começam todas as outras.</p>
                        </div>

                        <div className={`${styles.card} ${styles.cardWine} animaItem`}>
                            <span className={styles.cardIcon}>📅</span>
                            <h3>A obrigação real do católico</h3>
                            <p style={{ marginBottom: '1rem' }}>
                                A partir da Primeira Comunhão, o católico tem deveres concretos:
                            </p>
                            <ul style={{ paddingLeft: '1.2rem', color: '#555', lineHeight: 1.9 }}>
                                <li><strong>Missa todos os domingos e dias santos</strong> (preceito grave — falta não justificada é pecado mortal)</li>
                                <li><strong>Comunhão pelo menos uma vez por ano</strong>, na Páscoa (mínimo absoluto — &ldquo;Preceito Pascal&rdquo;)</li>
                                <li><strong>Confissão pelo menos uma vez por ano</strong> (se houver pecado mortal, antes da Comunhão pascal)</li>
                                <li><strong>Jejum eucarístico de 1 hora</strong> antes de cada Comunhão</li>
                            </ul>
                            <p style={{ marginTop: '1rem' }}>
                                Esses são os <em>mínimos</em>. Idealmente, a vida cristã é muito mais: Missa diária quando
                                possível, Comunhão sempre que em estado de graça, Confissão mensal, oração diária.
                            </p>
                        </div>

                        <div className={`${styles.grid3} animaItem`} style={{ marginTop: '2rem' }}>
                            <div className={styles.card}>
                                <span className={styles.cardIcon}>⛪</span>
                                <h3>Missa de domingo, sempre</h3>
                                <p>
                                    Não como peso, mas como encontro semanal. Quem ama Cristo na Primeira Comunhão não
                                    quer ficar uma semana inteira sem encontrá-Lo. Faltar à Missa dominical sem causa
                                    grave (doença, distância impossível, dever inadiável) é pecado mortal.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <span className={styles.cardIcon}>🕊️</span>
                                <h3>Confissão regular</h3>
                                <p>
                                    A vida cristã sem Confissão regular é como ar sem oxigênio. Idealmente: confissão
                                    mensal, mesmo sem pecados graves. Limpa pecados veniais, fortalece a alma, mantém
                                    a sensibilidade espiritual. Acostume-se desde a infância.
                                </p>
                            </div>
                            <div className={styles.card}>
                                <span className={styles.cardIcon}>🙏</span>
                                <h3>Oração diária</h3>
                                <p>
                                    Manhã e noite, pelo menos. Pai-Nosso, Ave-Maria, Glória ao Pai. Pode-se acrescentar:
                                    oração ao Anjo da Guarda, ato de contrição, ato de fé. Não precisa ser longa — precisa
                                    ser fiel. Crianças que rezam crescem como adultos que rezam.
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.highlight} animaItem`} style={{ marginTop: '2rem' }}>
                            <h4>⚠️ O perigo da &ldquo;Primeira e Última Comunhão&rdquo;</h4>
                            <p>
                                Estatística dolorosa: nas paróquias brasileiras, estima-se que cerca de 70% das crianças
                                que fazem a Primeira Comunhão deixam de frequentar a Missa dentro de poucos meses ou
                                anos. Tratam o sacramento como evento isolado da infância — passam a vida adulta sem
                                comungar. Voltam só para o casamento, batismo de filho, enterro.
                            </p>
                            <p>
                                A causa quase sempre é a mesma: pais que não praticam. Se vocês pararam de ir à Missa,
                                não esperem que seu filho continue. Se vocês fizeram da Primeira Comunhão um evento
                                social, não esperem que ele se torne místico. A continuidade depende, em primeiro lugar,
                                do exemplo em casa.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SEÇÃO 14 — DÚVIDAS */}
                <section id="duvidas" className={styles.bgDark}>
                    <div className={styles.container}>
                        <div className={`${styles.sectionHeader} ${styles.sectionHeaderDark}`}>
                            <span className={styles.sectionTagDark}>❓ Dúvidas</span>
                            <h2>Dúvidas Frequentes (Respostas Diretas)</h2>
                            <p>O que pais, padrinhos e catequistas mais perguntam</p>
                        </div>

                        {duvidas.map((item, i) => (
                            <div key={i} className={`${styles.accordionItem} animaItem`}>
                                <button
                                    className={styles.accordionHeader}
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    aria-expanded={activeFaq === i}
                                >
                                    <h3>{item.q}</h3>
                                    <span className={`${styles.accordionIcon} ${activeFaq === i ? styles.accordionIconRotated : ''}`}>
                                        ▼
                                    </span>
                                </button>
                                <div className={`${styles.accordionContent} ${activeFaq === i ? styles.accordionContentActive : ''}`}>
                                    {item.a.split('\n').map((line, j) =>
                                        line.trim() === '' ? null : (
                                            <p key={j} style={{ marginBottom: '0.8rem' }}>{line}</p>
                                        ),
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SEÇÃO 15 — FINAL */}
                <section id="final" className={styles.sectionWrapper}>
                    <div className={styles.container}>
                        <div className={`${styles.missaoHero} animaItem`}>
                            <h2>🍞 A Primeira é Só a Primeira</h2>
                            <p>
                                A Primeira Comunhão não é o destino. É a porta. A criança que recebeu Cristo pela primeira
                                vez agora pode recebê-Lo todas as semanas — todos os dias. O que era único agora deve
                                tornar-se diário.
                            </p>
                            <p>
                                Cada Missa é um aniversário da Primeira Comunhão. Cada Hóstia recebida é o mesmo Cristo,
                                a mesma graça, o mesmo encontro. Pode-se viver a vida inteira renovando, semana após
                                semana, a maravilha daquele primeiro dia.
                            </p>
                            <p style={{ fontSize: '1.05rem', color: '#F0D060', marginTop: '1.5rem' }}>
                                &ldquo;O Reino dos Céus pertence aos que se fazem como crianças.&rdquo; — Mateus 18,3
                            </p>
                            <div className={styles.missaoBtns}>
                                <a href="#santos" className={`${styles.btn} ${styles.btnGold}`}
                                    onClick={e => { e.preventDefault(); scrollTo('#santos') }}>
                                    Ver os Santos
                                </a>
                                <a href="#oracoes" className={`${styles.btn} ${styles.btnOutline}`}
                                    onClick={e => { e.preventDefault(); scrollTo('#oracoes') }}>
                                    Ler as Orações
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            {/* FOOTER */}
            <footer className={styles.footer}>
                <span className={styles.footerIcon}>⛪</span>
                <h3>Sacramento da Primeira Comunhão</h3>
                <p>Conteúdo baseado no Catecismo, no Código de Direito Canônico e no Decreto Quam Singulari</p>

                <div className={styles.footerLinks}>
                    {[
                        { href: '#o-que-e', label: 'O Que É' },
                        { href: '#idade', label: 'A Idade' },
                        { href: '#pio-x', label: 'Pio X' },
                        { href: '#confissao-primeira', label: 'Confissão' },
                        { href: '#preparacao', label: 'Preparação' },
                        { href: '#rito', label: 'O Rito' },
                        { href: '#depois', label: '15 Minutos' },
                        { href: '#duvidas', label: 'Dúvidas' },
                    ].map(l => (
                        <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); scrollTo(l.href) }}>
                            {l.label}
                        </a>
                    ))}
                </div>

                <div className={styles.footerBottom}>
                    <p>
                        Fontes principais: Catecismo da Igreja Católica (nn. 1322-1419), Decreto Quam Singulari
                        (Pio X, 1910), Código de Direito Canônico (cân. 913-923), História de uma Alma (Santa
                        Teresinha), e tradição litúrgica do Rito Romano.
                    </p>
                    <p style={{ marginTop: '0.5rem' }}>
                        &ldquo;Tomai, todos, e comei: isto é o meu Corpo.&rdquo; — Cristo na Última Ceia
                    </p>
                </div>
            </footer>

        </div>
    )
}