"use client";

import { useState } from "react";
import styles from "../../../../_styles/especificos/apostolos/sao-lucas/galeria.module.css";

type Obra = {
  id: number;
  titulo: string;
  subtitulo: string;
  categoria: string;
  imagem: string;
  data: string;
  tecnica: string;
  fonte: string;
  url: string;
  leitura: string;
  tipo: "vertical" | "horizontal";
};

const base = "/santos/biografia/apostolos/sao-lucas/galeria";

const obras: Obra[] = [
    {
    id: 1,
    titulo: "São Lucas pintando a Virgem",
    subtitulo: "Giorgio Vasari",
    categoria: "Lucas Pintor",
    imagem: "lucas-vasari.webp", // Nome da imagem salva na pasta /sao-lucas/galeria
    data: "c. 1567–1572",
    tecnica: "Afresco",
    fonte: "Cappella dei Pittori, Basílica da Santissima Annunziata, Florença, Itália",
    url: "https://commons.wikimedia.org/wiki/Category:Cappella_di_San_Luca_(Santissima_Annunziata,_Florence)",
    leitura:
      "Afresco de Vasari para a Capela dos Pintores em Florença. A composição celebra São Lucas como o patrono celeste da Accademia delle Arti del Disegno, unindo inspiração divina, erudição e maestria técnica.",
    tipo: "vertical",
  },
   {
    id: 2,
    titulo: "São Lucas pintando a Virgem",
    subtitulo: "Maerten de Vos",
    categoria: "Lucas Pintor",
    imagem: "lucas-maerten-de-vos.webp", // Nome do arquivo salvo na pasta
    data: "1602",
    tecnica: "Óleo sobre painel (270 × 217 cm)",
    fonte: "Royal Museum of Fine Arts Antwerp (KMSKA), Antuérpia, Bélgica (Inv: 88)",
    url: "https://kmska.be/en",
    leitura:
      "Retábulo monumental produzido para a Guilda de São Lucas de Antuérpia. O evangelista é retratado no estúdio em plena atividade criativa, acompanhado pelo touro alado e por ferramentas tradicionais da pintura.",
    tipo: "vertical",
  },
  {
    id: 3,
    titulo: "São Lucas pintando a Virgem",
    subtitulo: "Domenico Cresti (Il Passignano)",
    categoria: "Lucas Pintor",
    imagem: "lucas-passignano.webp", // Nome do arquivo salvo na pasta
    data: "c. 1593–1598",
    tecnica: "Óleo sobre tela",
    fonte: "Gallerie degli Uffizi / Accademia delle Arti del Disegno, Florença, Itália",
    url: "https://www.uffizi.it/",
    leitura:
      "Obra de Il Passignano pertencente à coleção da prestigiada Accademia delle Arti del Disegno de Florença. A composição destaca a sobriedade devocional e a transição da pintura florentina para o maneirismo tardio.",
    tipo: "vertical",
  },
    {
    id: 4,
    titulo: "O evangelista São Lucas",
    subtitulo: "Francisco Sans Cabot",
    categoria: "Evangelista",
    imagem: "lucas-sans-cabot.webp", // Nome do arquivo salvo na pasta
    data: "c. 1875",
    tecnica: "Óleo sobre tela (287 × 242 cm)",
    fonte: "Museo del Prado / Museo de Jaén, Espanha (Cat: P006382)",
    url: "https://www.museodelprado.es/",
    leitura:
      "Composição monumental da pintura acadêmica espanhola do século XIX. O saint é representado com solenidade como o evangelista e autor bíblico, acompanhado de seus livros e atributos.",
    tipo: "vertical",
  },
   {
    id: 5,
    titulo: "São Lucas Evangelista",
    subtitulo: "Gabriel Mälesskircher",
    categoria: "Evangelista",
    imagem: "lucas-malesskircher.webp", // Nome do arquivo salvo na pasta
    data: "c. 1478",
    tecnica: "Óleo e têmpera sobre painel",
    fonte: "Museo Nacional Thyssen-Bornemisza, Madri (Inv: 1928.15)",
    url: "https://www.museothyssen.org/",
    leitura:
      "Pintura do gótico tardio alemão. Lucas é representado em seu scriptorium com trajes ricos, redigindo o Evangelho sob a companhia do touro alado, que segura o tinteiro para o santo.",
    tipo: "vertical",
  },
    {
    id: 6,
    titulo: "São Lucas pintando a Virgem Maria",
    subtitulo: "Derick Baegert",
    categoria: "Lucas Pintor",
    imagem: "lucas-derick-baegert.webp", // Nome do arquivo salvo na pasta
    data: "c. 1485–1490",
    tecnica: "Óleo sobre painel de madeira",
    fonte: "LWL-Museum für Kunst und Kultur (Landesmuseum), Münster, Alemanha",
    url: "https://www.lwl-kultur.de/",
    leitura:
      "Exemplo notável do gótico tardio da Baixa Renânia. O evangelista é representado com minucioso detalhe nórdico enquanto retrata a Virgem e o Menino, unindo realismo doméstico e atmosfera sagrada.",
    tipo: "vertical",
  },
    {
    id: 7,
    titulo: "São Lucas Evangelista",
    subtitulo: "Seguidor de Jacob Jordaens",
    categoria: "Evangelista",
    imagem: "lucas-jordaens-seguidor.webp", // Nome do arquivo salvo na pasta
    data: "Século XVII",
    tecnica: "Óleo sobre tela (64,5 × 52 cm)",
    fonte: "Escola Flamenga (Coleção particular)",
    url: "https://commons.wikimedia.org/",
    leitura:
      "Obra da escola barroca flamenga sob influência de Jacob Jordaens. O evangelista é retratado com naturalismo robusto e clarescuro dramático, focado na redação do texto sagrado.",
    tipo: "vertical",
  },
    {
    id: 8,
    titulo: "Coroação da Virgem com os Santos Lucas, Domingos e João Evangelista",
    subtitulo: "Bartolomeo Passerotti",
    categoria: "Evangelista",
    imagem: "lucas-passerotti.webp", // Nome do arquivo salvo na pasta
    data: "c. 1580",
    tecnica: "Óleo sobre tela",
    fonte: "Pinacoteca Nazionale di Bologna, Bolonha, Itália",
    url: "https://www.pinacotecabologna.beniculturali.it/",
    leitura:
      "Composição do maneirismo bolonhês. A glória celestial da Virgem é contemplada na terra por São Lucas e outros santos, estabelecendo a ligação entre o testemunho evangélico e a devoção mariana.",
    tipo: "vertical",
  },
    {
    id: 9,
    titulo: "São Lucas pinta a Virgem",
    subtitulo: "Domenico Cresti (Il Passignano)",
    categoria: "Lucas Pintor",
    imagem: "lucas-passignano-uffizi.webp", // Nome do arquivo salvo na pasta
    data: "c. 1599",
    tecnica: "Óleo sobre tela",
    fonte: "Galleria degli Uffizi, Florença, Itália",
    url: "https://www.uffizi.it/",
    leitura:
      "Segunda versão notável do tema por Passignano. O evangelista é retratado em momento de íntima devoção, pintando a Virgem Maria enquanto capta a luz e a solenidade da tradição mariana.",
    tipo: "vertical",
  },
    {
    id: 10,
    titulo: "São Lucas pintando a Virgem",
    subtitulo: "Afresco de Maglie",
    categoria: "Lucas Pintor",
    imagem: "lucas-afresco-maglie.webp", // Nome do arquivo salvo na pasta
    data: "c. 1602–1618",
    tecnica: "Afresco mural",
    fonte: "Igreja de Santa Maria delle Grazie, Maglie, Puglia, Itália",
    url: "https://commons.wikimedia.org/",
    leitura:
      "Afresco barroco localizado na abóbada da Igreja de Santa Maria delle Grazie em Maglie. A pintura mural integra a arquitetura sagrada e retrata o evangelista em grandes dimensões exercendo a arte da iconografia.",
    tipo: "horizontal",
  },
    {
    id: 11,
    titulo: "São Lucas pintando a Virgem",
    subtitulo: "Pintor italiano anônimo",
    categoria: "Lucas Pintor",
    imagem: "lucas-afresco-anonimo.webp", // Nome do arquivo salvo na pasta
    data: "Século XV–XVI",
    tecnica: "Afresco",
    fonte: "Afresco devocional (Itália)",
    url: "https://commons.wikimedia.org/",
    leitura:
      "Afresco italiano que preserva a tradição popular e espiritual de São Lucas como primeiro iconógrafo, marcando a transição da arte tardo-medieval para as formas renascentistas.",
    tipo: "vertical",
  },
    {
    id: 12,
    titulo: "São Lucas pintando a Virgem",
    subtitulo: "Domenico Piola e oficina",
    categoria: "Lucas Pintor",
    imagem: "lucas-domenico-piola.webp", // Nome do arquivo salvo na pasta
    data: "c. 1695",
    tecnica: "Afresco",
    fonte: "Igreja de San Luca, Gênova, Itália",
    url: "https://commons.wikimedia.org/",
    leitura:
      "Afresco do barroco genovês localizado na abside da igreja dedicada ao próprio santo. Piola compõe uma cena ilusionista de grande dinamismo, cercada por anjos que auxiliam o evangelista.",
    tipo: "horizontal",
  },
    {
    id: 13,
    titulo: "São Lucas",
    subtitulo: "Artista veneziano anônimo",
    categoria: "Lucas Pintor",
    imagem: "lucas-veneziano-anonimo.webp", // Nome do arquivo salvo na pasta
    data: "Século XVI",
    tecnica: "Óleo sobre tela (98 × 132 cm)",
    fonte: "Escola Veneziana (Coleção particular / Capitolium Art)",
    url: "https://commons.wikimedia.org/",
    leitura:
      "Exemplo da escola veneziana do século XVI. A composição retrata o evangelista exercendo o trabalho de pintor, destacando a riqueza cromática e a atmosfera acolhedora características do Renascimento em Veneza.",
    tipo: "horizontal",
  },
    {
    id: 14,
    titulo: "São Lucas Evangelista",
    subtitulo: "Pintor barroco (atribuição a confirmar)",
    categoria: "Evangelista",
    imagem: "lucas-escrevendo-touro-paleta.webp", // Nome do arquivo salvo na pasta
    data: "Século XVII",
    tecnica: "Óleo sobre tela",
    fonte: "Coleção a confirmar",
    url: "https://commons.wikimedia.org/",
    leitura:
      "O evangelista escreve o Evangelho com a pena, acompanhado do touro ao lado e da paleta com pincéis aos pés — síntese visual das três tradições de Lucas: historiador sagrado, médico da alma e pintor da Virgem.",
    tipo: "vertical",
  },
    {
    id: 15,
    titulo: "São Lucas pintando a Virgem",
    subtitulo: "Pintor nórdico (gótico tardio / Renascimento do Norte)",
    categoria: "Lucas Pintor",
    imagem: "lucas-pintando-atelier-nordico.webp", // Nome do arquivo salvo na pasta
    data: "Século XV–XVI",
    tecnica: "Óleo sobre painel",
    fonte: "Coleção a confirmar",
    url: "https://commons.wikimedia.org/",
    leitura:
      "No interior de um atelier iluminado, Lucas pinta a Virgem com o Menino sobre um cavalete. A auréola, a paleta e o pincel afirmam a tradição do evangelista como primeiro iconógrafo, em linguagem do gótico tardio setentrional.",
    tipo: "vertical",
  },
];

export default function GaleriaIconografiaSaoLucas() {
  const [selecionada, setSelecionada] = useState<Obra | null>(null);

  return (
    <section id="galeria-iconografica" className={styles.gallery} aria-label="Galeria iconográfica de São Lucas">
      <div className={styles.wall}>
        {obras.map((obra) => (
          <button
            key={obra.id}
            type="button"
            className={`${styles.artCard} ${obra.tipo === "horizontal" ? styles.horizontal : ""}`}
            onClick={() => setSelecionada(obra)}
          >
            <img src={`${base}/${obra.imagem}`} alt={obra.titulo} loading="lazy" />
            <span className={styles.cardShade} />
            <span className={styles.cardInfo}>
              <small>
                {String(obra.id).padStart(2, "0")} · {obra.categoria}
              </small>
              <strong>{obra.titulo}</strong>
              <em>{obra.subtitulo}</em>
            </span>
            <span className={styles.openMark} aria-hidden="true">
              ↗
            </span>
          </button>
        ))}
      </div>

      {selecionada && (
        <div className={styles.dialogLayer} role="presentation" onMouseDown={() => setSelecionada(null)}>
          <section
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-labelledby="obra-dialogo-titulo"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button type="button" className={styles.close} onClick={() => setSelecionada(null)} aria-label="Fechar ficha">
              ×
            </button>
            <img src={`${base}/${selecionada.imagem}`} alt={selecionada.titulo} />
            <div>
              <p className={styles.eyebrow}>{selecionada.categoria}</p>
              <h3 id="obra-dialogo-titulo">{selecionada.titulo}</h3>
              <p className={styles.dialogSubtitle}>{selecionada.subtitulo}</p>
              <p className={styles.dialogText}>{selecionada.leitura}</p>
              <dl>
                <div>
                  <dt>Datação</dt>
                  <dd>{selecionada.data}</dd>
                </div>
                <div>
                  <dt>Técnica</dt>
                  <dd>{selecionada.tecnica}</dd>
                </div>
                <div>
                  <dt>Fonte</dt>
                  <dd>{selecionada.fonte}</dd>
                </div>
              </dl>
              <a href={selecionada.url} target="_blank" rel="noreferrer">
                Ver referência do acervo ↗
              </a>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}