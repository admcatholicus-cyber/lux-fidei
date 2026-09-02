"use client";

/** Direção de estilo: Oratório em Camadas — parede de obras assimétrica e ficha curatorial expansível. */
import { useMemo, useState } from "react";

import styles from '../../../../../_styles/especificos/presbiteros/sao-filipe-neri/iconografia/IconografiaSaoFilipeNeri.module.css';

type Categoria = "Todas" | "Retratos" | "Vida & milagres" | "Gravuras" | "Escultura & espaço";
type Obra = { id: number; titulo: string; subtitulo: string; categoria: Exclude<Categoria, "Todas">; imagem: string; data: string; tecnica: string; fonte: string; url: string; leitura: string; tipo: "vertical" | "horizontal" };

const base = "/santos/biografia/presbiteros/sao-filipe-neri/iconografia";
const obras: Obra[] = [
  { id: 1, titulo: "São Filipe Néri", subtitulo: "Estátua monumental", categoria: "Escultura & espaço", imagem: "01-estatua-fundador-sao-pedro.jpg", data: "Época moderna", tecnica: "Escultura em mármore", fonte: "Basílica de São Pedro, Roma", url: "https://www.stpetersbasilica.info/Monuments/Monuments.htm", leitura: "O coração junto ao peito traduz em pedra o atributo mais reconhecível do santo.", tipo: "vertical" },
  { id: 2, titulo: "A Virgem aparece a São Filipe", subtitulo: "Cena de visão", categoria: "Vida & milagres", imagem: "02-virgem-aparece-a-sao-filipe-neri.jpg", data: "Século XVIII", tecnica: "Pintura devocional", fonte: "Newfields Collection", url: "https://collections.discovernewfields.org/", leitura: "A visão organiza o quadro entre a oração íntima e uma abertura para a glória celeste.", tipo: "vertical" },
  { id: 3, titulo: "Philippus Nerius", subtitulo: "Nicolas Dorigny, depois de Domenico Guidi", categoria: "Gravuras", imagem: "03-retrato-gravura-dorigny.jpg", data: "Século XVII", tecnica: "Gravura em cobre", fonte: "Wellcome Collection", url: "https://wellcomecollection.org/works", leitura: "O retrato impresso fixa o fundador como uma presença portátil, reproduzível e devocional.", tipo: "vertical" },
  { id: 4, titulo: "São Filipe Néri", subtitulo: "Giandomenico Tiepolo", categoria: "Retratos", imagem: "04-sao-filipe-neri-tiepolo.jpg", data: "Século XVIII", tecnica: "Pintura religiosa", fonte: "Wikimedia Commons", url: "https://commons.wikimedia.org/", leitura: "Luz e olhar ascendente pertencem ao vocabulário visual da experiência interior.", tipo: "vertical" },
  { id: 5, titulo: "São Filipe Néri com lírios", subtitulo: "Sebastiano Conca", categoria: "Retratos", imagem: "05-retrato-sebastiano-conca-restaurado.png", data: "Século XVIII", tecnica: "Óleo sobre tela", fonte: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Painting_of_Saint_Philip_Neri,_by_Sebastiano_Conca.jpg", leitura: "Lírios, livro, paramentos e mão sobre o peito sintetizam a gramática visual do santo.", tipo: "vertical" },
  { id: 6, titulo: "O coração dilatado", subtitulo: "Gravura devocional", categoria: "Gravuras", imagem: "06-coracao-de-sao-filipe-gravura.jpg", data: "Século XVIII–XIX", tecnica: "Gravura religiosa", fonte: "Denver Art Museum", url: "https://www.denverartmuseum.org/", leitura: "O atributo do coração concentra a memória de oração e caridade ardente.", tipo: "vertical" },
  { id: 7, titulo: "Retrato de São Filipe Néri", subtitulo: "Pintor italiano anônimo", categoria: "Retratos", imagem: "07-retrato-italiano-sec-xviii.jpg", data: "Século XVIII", tecnica: "Óleo sobre tela", fonte: "Wikimedia Commons", url: "https://commons.wikimedia.org/", leitura: "A economia de atributos aproxima o santo de um guia espiritual presente e acessível.", tipo: "vertical" },
  { id: 8, titulo: "O santo e os anjos", subtitulo: "Estampa catequética", categoria: "Gravuras", imagem: "08-gravura-historia-01.jpg", data: "Século XIX", tecnica: "Gravura em papel", fonte: "Look and Learn", url: "https://www.lookandlearn.com/", leitura: "A estampa leva episódios da vida dos santos a uma escala doméstica e formativa.", tipo: "vertical" },
  { id: 9, titulo: "São Filipe em glória", subtitulo: "Estampa devocional", categoria: "Gravuras", imagem: "09-gravura-historia-02.jpg", data: "Século XIX", tecnica: "Gravura em papel", fonte: "Look and Learn", url: "https://www.lookandlearn.com/", leitura: "A composição ascendente conduz o olhar do santo para o coro de anjos e a luz alta.", tipo: "vertical" },
  { id: 10, titulo: "O fundador do Oratório", subtitulo: "Estampa popular", categoria: "Gravuras", imagem: "10-gravura-historia-03.jpg", data: "Século XIX", tecnica: "Gravura em papel", fonte: "Look and Learn", url: "https://www.lookandlearn.com/", leitura: "A figura do fundador é comunicada por uma linguagem visual coesa e acolhedora.", tipo: "vertical" },
  { id: 11, titulo: "A alegria do santo", subtitulo: "Gravura de devoção", categoria: "Gravuras", imagem: "11-gravura-historia-04.jpg", data: "Século XIX", tecnica: "Gravura em papel", fonte: "Look and Learn", url: "https://www.lookandlearn.com/", leitura: "O gesto aberto sugere a alegria espiritual associada à memória filipina.", tipo: "vertical" },
  { id: 12, titulo: "Teto de um oratório filipino", subtitulo: "Espaço devocional romano", categoria: "Escultura & espaço", imagem: "12-afresco-oratorio-romano.jpg", data: "Época moderna", tecnica: "Afresco e arquitetura", fonte: "Registro visual de Roma", url: "https://www.tripadvisor.com/", leitura: "O entorno arquitetônico participa da iconografia e ensina a ver o santo em seu ambiente próprio.", tipo: "horizontal" },
  { id: 13, titulo: "São Filipe Néri", subtitulo: "Alessandro Algardi", categoria: "Escultura & espaço", imagem: "13-escultura-algardi.jpg", data: "Século XVII", tecnica: "Escultura em mármore", fonte: "Wikimedia Commons", url: "https://commons.wikimedia.org/", leitura: "A escultura barroca converte oração em gesto corporal: peito, pescoço e tecido em movimento.", tipo: "vertical" },
  { id: 14, titulo: "Estâncias de São Filipe Néri", subtitulo: "Memória romana", categoria: "Escultura & espaço", imagem: "14-estancia-romana-sao-filipe.jpg", data: "Contemporâneo", tecnica: "Fotografia de ambiente", fonte: "Roteiro visual de Roma", url: "https://www.catholicnewsagency.com/", leitura: "Quartos, relíquias e percursos urbanos mantêm o santo como uma presença ainda habitável.", tipo: "horizontal" },
  { id: 15, titulo: "San Felipe Neri", subtitulo: "Pintura devocional", categoria: "Retratos", imagem: "15-sao-filipe-neri-blanton.jpg", data: "Século XVIII", tecnica: "Óleo sobre tela", fonte: "Blanton Museum of Art", url: "https://blantonmuseum.org/collection/", leitura: "O santo surge como intercessor: olhar elevado e figura orientada por uma claridade mansa.", tipo: "vertical" },
  { id: 16, titulo: "São Filipe Néri", subtitulo: "Coleção de Budapeste", categoria: "Retratos", imagem: "16-sao-filipe-neri-budapeste.jpg", data: "Século XVII–XVIII", tecnica: "Óleo sobre tela", fonte: "Museum of Fine Arts, Budapest", url: "https://www.mfab.hu/", leitura: "O rosto iluminado é tratado como campo de escuta e resposta à graça.", tipo: "vertical" },
  { id: 17, titulo: "O Espírito Santo nas catacumbas", subtitulo: "Visão de Pentecostes", categoria: "Vida & milagres", imagem: "17-espirito-santo-nas-catacumbas.jpg", data: "Século XIX", tecnica: "Pintura histórica", fonte: "Artvee", url: "https://artvee.com/", leitura: "O ambiente subterrâneo e a luz alta encenam a irrupção da graça sobre a oração de Filipe.", tipo: "horizontal" },
  { id: 18, titulo: "São Filipe Néri", subtitulo: "Carlo Dolci", categoria: "Retratos", imagem: "18-retrato-carlo-dolci.jpg", data: "Século XVII", tecnica: "Óleo sobre tela", fonte: "The Metropolitan Museum of Art", url: "https://www.metmuseum.org/art/collection", leitura: "A austeridade deixa a luz trabalhar sobre a fisionomia e acentua a presença silenciosa.", tipo: "vertical" },
  { id: 19, titulo: "São Filipe Néri e a Virgem", subtitulo: "Painel devocional", categoria: "Vida & milagres", imagem: "19-sao-filipe-neri-devocional.jpg", data: "Século XVIII", tecnica: "Óleo sobre tela", fonte: "Wikimedia Commons", url: "https://commons.wikimedia.org/", leitura: "A visão mariana estabelece um eixo vertical entre a oração humana e a luz celeste.", tipo: "vertical" },
  { id: 20, titulo: "São Filipe Néri e os enfermos", subtitulo: "Cena de caridade", categoria: "Vida & milagres", imagem: "20-sao-filipe-e-os-enfermos.jpg", data: "Século XIX", tecnica: "Pintura devocional", fonte: "Arquivo de arte religiosa", url: "https://www.theamishcatholic.com/", leitura: "A iconografia pastoral troca o êxtase solitário por uma cena de cuidado, escuta e proximidade.", tipo: "vertical" },
  { id: 21, titulo: "A cura de Clemente VIII", subtitulo: "Pietro da Cortona", categoria: "Vida & milagres", imagem: "21-cura-de-clemente-viii.jpg", data: "Século XVII", tecnica: "Pintura histórica", fonte: "Wikimedia Commons", url: "https://commons.wikimedia.org/", leitura: "O milagre encena o encontro entre a fragilidade do papa e a humildade do padre.", tipo: "horizontal" },
  { id: 23, titulo: "Caminho para Roma", subtitulo: "Ciclo da vida de Filipe Néri", categoria: "Gravuras", imagem: "23-chegada-a-roma-gravura.jpg", data: "Século XVII", tecnica: "Gravura narrativa", fonte: "Rijksmuseum / Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/Category:Sc%C3%A8nes_uit_het_leven_van_Filippo_Neri", leitura: "A viagem atua como prólogo para a vocação romana do futuro fundador.", tipo: "vertical" },
  { id: 24, titulo: "Oração e coração", subtitulo: "Ciclo da vida de Filipe Néri", categoria: "Gravuras", imagem: "24-oracao-e-coracao-gravura.jpg", data: "Século XVII", tecnica: "Gravura narrativa", fonte: "Rijksmuseum / Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/Category:Sc%C3%A8nes_uit_het_leven_van_Filippo_Neri", leitura: "A oração é apresentada como acontecimento corporal, espelhando a força do atributo do coração.", tipo: "vertical" },
  { id: 25, titulo: "Memória diante do corpo do santo", subtitulo: "Ciclo da vida de Filipe Néri", categoria: "Gravuras", imagem: "25-memoria-postuma-gravura.jpg", data: "Século XVII", tecnica: "Gravura narrativa", fonte: "Rijksmuseum / Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/Category:Sc%C3%A8nes_uit_het_leven_van_Filippo_Neri", leitura: "A cena póstuma encerra a biografia visual com comunidade, luto e transmissão de memória.", tipo: "vertical" },
];

const filtros: Categoria[] = ["Todas", "Retratos", "Vida & milagres", "Gravuras", "Escultura & espaço"];

export function IconografiaGaleria() {
  const [filtro, setFiltro] = useState<Categoria>("Todas");
  const [selecionada, setSelecionada] = useState<Obra | null>(null);
  const visiveis = useMemo(() => obras.filter((obra) => filtro === "Todas" || obra.categoria === filtro), [filtro]);

  return (
    <section id="galeria-iconografica" className={styles.gallery} aria-labelledby="galeria-titulo">
      <header className={styles.galleryHead}>
        <div><p className={styles.eyebrow}>03 · Muro do museu</p><h2 id="galeria-titulo">25 obras para<br />olhar devagar</h2></div>
        <p>Retratos, episódios, esculturas, espaços e gravuras. Abra cada obra para ler a ficha curatorial e consultar sua fonte.</p>
      </header>
      <div className={styles.galleryControls} aria-label="Filtros da galeria">
        <div>{filtros.map((item) => <button key={item} type="button" className={filtro === item ? styles.isActive : ""} aria-pressed={filtro === item} onClick={() => setFiltro(item)}>{item}</button>)}</div>
        <span>{visiveis.length} obras visíveis</span>
      </div>
      <div className={styles.wall}>
        {visiveis.map((obra) => (
          <button key={obra.id} type="button" className={`${styles.artCard} ${obra.tipo === "horizontal" ? styles.horizontal : ""}`} onClick={() => setSelecionada(obra)}>
            <img src={`${base}/${obra.imagem}`} alt={obra.titulo} loading="lazy" />
            <span className={styles.cardShade} /><span className={styles.cardInfo}><small>{String(obra.id).padStart(2, "0")} · {obra.categoria}</small><strong>{obra.titulo}</strong><em>{obra.subtitulo}</em></span><span className={styles.openMark} aria-hidden="true">↗</span>
          </button>
        ))}
      </div>
      {selecionada && (
        <div className={styles.dialogLayer} role="presentation" onMouseDown={() => setSelecionada(null)}>
          <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="obra-dialogo-titulo" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className={styles.close} onClick={() => setSelecionada(null)} aria-label="Fechar ficha">×</button>
            <img src={`${base}/${selecionada.imagem}`} alt={selecionada.titulo} />
            <div><p className={styles.eyebrow}>{selecionada.categoria}</p><h3 id="obra-dialogo-titulo">{selecionada.titulo}</h3><p className={styles.dialogSubtitle}>{selecionada.subtitulo}</p><p className={styles.dialogText}>{selecionada.leitura}</p><dl><div><dt>Datação</dt><dd>{selecionada.data}</dd></div><div><dt>Técnica</dt><dd>{selecionada.tecnica}</dd></div><div><dt>Fonte</dt><dd>{selecionada.fonte}</dd></div></dl><a href={selecionada.url} target="_blank" rel="noreferrer">Ver referência do acervo ↗</a></div>
          </section>
        </div>
      )}
    </section>
  );
}
