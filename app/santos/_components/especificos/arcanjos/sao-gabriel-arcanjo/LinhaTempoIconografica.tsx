"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import s from "@/app/santos/_styles/especificos/arcanjos/sao-gabriel-arcanjo/LinhaDoTempo.module.css";

type Ratio = "portrait" | "landscape" | "panoramic";

interface Obra {
  id: string;
  seculo: string;
  periodo: string;
  titulo: string;
  local: string;
  imagem: string;
  largura: number;   // dimensões reais do arquivo
  altura: number;    // Next/Image precisa para calcular height: auto
  ratio: Ratio;
  legenda: string;
  descricao: string;
  significado: string;
  badge: string;
}

const OBRAS: Obra[] = [
  {
    id: "santa-maria-maggiore",
    seculo: "Séc. V",
    periodo: "432–440 d.C.",
    titulo: "Mosaico da Anunciação",
    local: "Basílica de Santa Maria Maggiore, Roma",
    imagem: "/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/linha-tempo/01-santa-maria-maggiore.webp",
    largura: 1200,
    altura: 800,
    ratio: "landscape",
    legenda: "Mosaico do arco triunfal · Santa Maria Maggiore · Roma, séc. V",
    descricao: "Um dos registros figurativos mais antigos de Gabriel na arte cristã ocidental. O mosaico retrata a Anunciação em estilo paleobizantino: figuras hieráticas, fundo dourado e Maria entronizada como rainha — reflexo da recém-proclamada doutrina da Theotokos (431 d.C.).",
    significado: "Gabriel aparece em voo portando cetro imperial — linguagem visual da corte romana para comunicar a autoridade divina do mensageiro.",
    badge: "Mosaico · Séc. V",
  },
  {
    id: "iluminura-carolingia",
    seculo: "Séc. IX–X",
    periodo: "ca. 870–1000",
    titulo: "Anunciação Carolíngia",
    local: "Manuscrito iluminado, Europa Central",
    imagem: "/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/linha-tempo/02-iluminura-carolingia.webp",
    largura: 900,
    altura: 1200,
    ratio: "portrait",
    legenda: "Iluminura carolíngia · Pergaminho · séc. IX–X",
    descricao: "As iluminuras carolíngias introduziram Gabriel como portador do filactério — faixa com texto latino que torna a mensagem visível ao espectador. O fundo plano em ouro folha sublinha o caráter eterno e não-temporal da cena.",
    significado: "O filactério 'Ave, gratia plena' transforma o espectador em testemunha direta da Anunciação.",
    badge: "Iluminura · Pergaminho",
  },
  {
    id: "anjo-cabelos-dourados",
    seculo: "Séc. XII",
    periodo: "ca. 1130–1150",
    titulo: "Anjo de Cabelos Dourados",
    local: "Museu Russo, São Petersburgo",
    imagem: "/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/linha-tempo/03-anjo-cabelos-dourados.webp",
    largura: 800,
    altura: 1050,
    ratio: "portrait",
    legenda: "Ícone de Novgorod · Têmpera sobre madeira · séc. XII",
    descricao: "Ícone russo considerado um dos mais belos da tradição ortodoxa. O rosto de Gabriel ocupa quase toda a superfície, com cabelos em fios dourados finíssimos e olhar de profunda contemplação.",
    significado: "A proximidade extrema do rosto cria relação íntima com o observador — convite à contemplação mais que à narrativa.",
    badge: "Ícone · Novgorod",
  },
  {
    id: "ange-sourire-reims",
    seculo: "Séc. XIII",
    periodo: "1245–1255",
    titulo: "L'Ange au Sourire",
    local: "Catedral de Reims, França",
    imagem: "/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/linha-tempo/04-ange-sourire-reims.webp",
    largura: 700,
    altura: 1200,
    ratio: "portrait",
    legenda: "Escultura em pedra · Catedral de Reims · ca. 1250",
    descricao: "O 'Anjo Sorridente' é símbolo do Gótico Radiante francês: formas suavizadas, movimento natural e sorriso que humaniza o ser celeste. Contraste radical com a rigidez dos anjos paleobizantinos.",
    significado: "O sorriso de Reims inaugura a graciosidade como atributo angélico — Gabriel deixa de ser figura temível para ser portador de alegria.",
    badge: "Escultura gótica",
  },
  {
    id: "simone-martini",
    seculo: "Séc. XIV",
    periodo: "1333",
    titulo: "Anunciação com São Ansano",
    local: "Galleria degli Uffizi, Florença",
    imagem: "/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/linha-tempo/05-simone-martini.webp",
    largura: 1800,
    altura: 780,
    ratio: "panoramic",
    legenda: "Simone Martini e Lippo Memmi · Têmpera e ouro · 1333 · Uffizi",
    descricao: "Obra-prima do Gótico Internacional sienense. Gabriel chega em movimento dinâmico, com vestes de brocado e asas multicoloridas, portando ramo de oliveira e filactério dourado.",
    significado: "A diagonal de Gabriel versus a verticalidade de Maria cria tensão dramática sem romper a harmonia — equilíbrio do Gótico Cortês.",
    badge: "Têmpera e ouro · 1333",
  },
  {
    id: "fra-angelico",
    seculo: "Séc. XV",
    periodo: "ca. 1438–1445",
    titulo: "Anunciação do Corredor Norte",
    local: "Convento de San Marco, Florença",
    imagem: "/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/linha-tempo/06-fra-angelico.webp",
    largura: 1600,
    altura: 900,
    ratio: "panoramic",
    legenda: "Fra Angelico · Afresco · ca. 1440–1445 · San Marco, Florença",
    descricao: "Afresco pintado para a meditação dos frades dominicanos. Sem ouro, sem ornamentos — apenas luz, espaço e presença. Gabriel e Maria inclinam-se um ao outro em silêncio contemplativo.",
    significado: "A ausência de dourado é escolha teológica. Fra Angelico comunica que o sagrado habita o simples, não o suntuoso.",
    badge: "Afresco · San Marco",
  },
  {
    id: "leonardo",
    seculo: "Séc. XV",
    periodo: "ca. 1472–1476",
    titulo: "Anunciação",
    local: "Galleria degli Uffizi, Florença",
    imagem: "/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/linha-tempo/07-leonardo.webp",
    largura: 1800,
    altura: 670,
    ratio: "panoramic",
    legenda: "Leonardo da Vinci · Óleo e têmpera · ca. 1472 · Uffizi, Florença",
    descricao: "Primeira grande obra de Leonardo. A composição revoluciona o gênero: paisagem toscana real ao fundo, perspectiva atmosférica, Gabriel em jardim botânico meticuloso. As asas são de pássaro real.",
    significado: "Leonardo ancora o divino na natureza observada — as asas estudadas de pássaros reais marcam a ruptura renascentista.",
    badge: "Leonardo · ca. 1472",
  },
  {
    id: "el-greco",
    seculo: "Séc. XVI",
    periodo: "ca. 1596–1600",
    titulo: "Anunciação",
    local: "Museo del Prado, Madrid",
    imagem: "/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/linha-tempo/08-el-greco.webp",
    largura: 800,
    altura: 1150,
    ratio: "portrait",
    legenda: "El Greco · Óleo sobre tela · ca. 1596–1600 · Prado, Madrid",
    descricao: "El Greco transforma a Anunciação em visão mística: corpos alongados em espiral, cores vibrantes impossíveis, Gabriel descendo em turbilhão de anjos.",
    significado: "O alongamento dos corpos é linguagem teológica — El Greco pinta a tensão entre matéria e o impulso da alma ao divino.",
    badge: "El Greco · Maneirismo",
  },
  {
    id: "murillo",
    seculo: "Séc. XVII",
    periodo: "ca. 1660–1665",
    titulo: "Anunciação",
    local: "Museo del Prado, Madrid",
    imagem: "/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/linha-tempo/09-barroco-murillo.webp",
    largura: 870,
    altura: 1150,
    ratio: "portrait",
    legenda: "Bartolomé Esteban Murillo · Óleo · ca. 1660–1665 · Prado",
    descricao: "Murillo leva a Anunciação ao apogeu da ternura barroca: Gabriel desce envolto em querubins dourados, Maria ajoelhada em êxtase suave.",
    significado: "O Barroco de Murillo democratiza o sagrado em espaço doméstico, acessível a qualquer fiel.",
    badge: "Barroco · Sevilha",
  },
  {
  id: "blake",
  seculo: "Séc. XIX",
  periodo: "ca. 1806",
  titulo: "A Ressurreição dos Mortos",
  local: "British Museum, Londres",
  imagem: "/santos/biografia/arcanjos/sao-gabriel-arcanjo/iconografia/linha-tempo/10-trombeta-blake1.webp",
  largura: 850,
  altura: 1100,
  ratio: "portrait",
  legenda: "William Blake · Aquarela e tinta · ca. 1806",
  descricao: "Blake representa a ressurreição dos mortos ao som da trombeta: uma figura angelical paira sobre uma multidão de corpos que desperta e se eleva, criando uma cena dinâmica e visionária.",
  significado: "A trombeta anuncia o despertar dos mortos e a passagem da morte para a vida, evocando a ressurreição no Juízo Final.",
  badge: "Blake · Ressurreição",
},
];

export default function LinhaDoTempo() {
  const [idx, setIdx] = useState(0);
  const obra = OBRAS[idx];

  const irPara = useCallback((i: number) => {
    setIdx(Math.max(0, Math.min(OBRAS.length - 1, i)));
  }, []);

  return (
    <section
      className={s.wrap}
      aria-label="Linha do tempo iconográfica de Gabriel Arcanjo"
    >
      <header className={s.header}>
        <span className={s.label}>Iconografia</span>
        <h2 className={s.titulo}>Gabriel Arcanjo na Arte</h2>
        <p className={s.sub}>
          Dez séculos de representação — do mosaico paleobizantino ao visionarismo romântico
        </p>
      </header>

      <div className={s.corpo}>
        {/* Trilha */}
        <ol className={s.trilha} aria-label="Obras em ordem cronológica">
          {OBRAS.map((o, i) => (
            <li key={o.id} className={s.item}>
              <button
                className={`${s.pino} ${i === idx ? s.pinoAtivo : ""}`}
                onClick={() => irPara(i)}
                aria-current={i === idx ? "true" : undefined}
                aria-label={`${o.seculo} — ${o.titulo}`}
              >
                <span className={s.pinoSeculo}>{o.seculo}</span>
                <span className={s.pinoPeriodo}>{o.periodo}</span>
                <span className={s.pinoTitulo}>{o.titulo}</span>
              </button>
            </li>
          ))}
        </ol>

        {/* Painel */}
        <article className={s.painel} aria-live="polite" aria-atomic="true">
          <figure className={s.figura}>
            <div className={s.figuraImgWrap} data-ratio={obra.ratio}>
              {/*
                width + height reais da imagem + style height:auto
                = Next/Image renderiza <img> com proporção natural
                = container se expande para acomodar a imagem inteira
                = sem corte, sem barras azuis
              */}
              <Image
                key={obra.id}
                src={obra.imagem}
                alt={`${obra.titulo} — ${obra.local}`}
                width={obra.largura}
                height={obra.altura}
                style={{ width: "100%", height: "auto" }}
                sizes="(max-width: 480px) 100vw, (max-width: 760px) 100vw, (max-width: 960px) calc(100vw - 230px), 720px"
                priority={idx === 0}
                quality={88}
              />
            </div>

            {/* Gradiente sobre a imagem */}
            <div className={s.figuraGradiente} aria-hidden="true" />

            {obra.badge && (
              <span className={s.figuraBadge} aria-hidden="true">
                {obra.badge}
              </span>
            )}

            <figcaption className={s.figuraCap}>
              {obra.legenda}
            </figcaption>
          </figure>

          {/* Texto */}
          <div className={s.painelConteudo}>
            <div className={s.painelTop}>
              <span className={s.painelSeculo}>
                {obra.seculo} · {obra.periodo}
              </span>
              <span className={s.painelLocal}>{obra.local}</span>
            </div>

            <h3 className={s.painelTitulo}>{obra.titulo}</h3>
            <p className={s.painelPeriodo}>{obra.local}</p>
            <p className={s.painelDesc}>{obra.descricao}</p>

            <div className={s.painelInfo}>
              <span className={s.infoLabel}>Significado iconográfico</span>
              <p className={s.infoValor}>{obra.significado}</p>
            </div>

            <nav className={s.nav} aria-label="Navegar entre obras">
              <button
                className={s.btnNav}
                onClick={() => irPara(idx - 1)}
                disabled={idx === 0}
                aria-label="Obra anterior"
              >
                ← Anterior
              </button>
              <span className={s.navCount}>{idx + 1} / {OBRAS.length}</span>
              <button
                className={s.btnNav}
                onClick={() => irPara(idx + 1)}
                disabled={idx === OBRAS.length - 1}
                aria-label="Próxima obra"
              >
                Próxima →
              </button>
            </nav>
          </div>
        </article>
      </div>
    </section>
  );
}