"use client";

import { useMemo, useState } from "react";
import styles from '../../../../_styles/especificos/leigos/sao-isidoro-lavrador/IconografiaSantoIsidoro.module.css';

type Categoria = "Todas" | "O milagre dos anjos" | "Retratos e devocionais" | "O milagre da água" | "Esculturas e retábulos";
type Obra = { id: number; titulo: string; subtitulo: string; categoria: Exclude<Categoria, "Todas">; imagem: string; data: string; tecnica: string; autor: string; leitura: string; tipo: "vertical" | "horizontal" };

const base = "/santos/biografia/leigos/sao-isidoro-lavrador/iconografia";

const obras: Obra[] = [
  { id: 1, titulo: "O Lavrador sob a Luz Celestial", subtitulo: "Pintura pastoral clássica", categoria: "Retratos e devocionais", imagem: "1-lavrador-luz.webp", data: "Não datado", tecnica: "Óleo sobre tela", autor: "Anônimo", leitura: "O céu luminoso direciona o olhar do personagem para o alto, traduzindo a atitude contemplativa em meio ao trabalho braçal.", tipo: "vertical" },
  { id: 2, titulo: "A Família na Estalagem", subtitulo: "Cena intimista de época", categoria: "Retratos e devocionais", imagem: "2-familia-estalagem.webp", data: "Não datado", tecnica: "Óleo sobre tela", autor: "Anônimo", leitura: "Os fortes contrastes entre luz e sombra envolvem a família numa atmosfera de simplicidade e profunda dignidade terrena.", tipo: "vertical" },
  { id: 3, titulo: "A Procissão dos Anjos e dos Pastores", subtitulo: "Cena de aparição pastoral", categoria: "O milagre dos anjos", imagem: "3-procissao-anjos-pastores.webp", data: "Não datado", tecnica: "Óleo sobre tela", autor: "Anônimo", leitura: "A multidão, os animais e a corte angélica unificam os planos da composição, ligando o mundo rural ao celestial de forma grandiosa.", tipo: "horizontal" },
  { id: 4, titulo: "São Isidoro, o Lavrador", subtitulo: "Gravura em P&B", categoria: "O milagre dos anjos", imagem: "4-sao-isidoro-lavrador.webp", data: "Século XIX", tecnica: "Gravura", autor: "Luc-Olivier Merson", leitura: "O contraste profundo entre o santo imerso em devoção estática e o anjo monumental que conduz o arado em pleno vigor.", tipo: "horizontal" },
  { id: 5, titulo: "São Isidoro Lavrador", subtitulo: "O milagre no campo escuro", categoria: "O milagre dos anjos", imagem: "5-sao-isidoro-oracao.webp", data: "Não datado", tecnica: "Pintura religiosa", autor: "Anônimo", leitura: "Um céu dramático isola a figura luminosa do anjo e a paz do santo, criando uma fratura gloriosa na monotonia da paisagem.", tipo: "horizontal" },
  { id: 6, titulo: "São Isidoro e Santa Maria da Cabeça", subtitulo: "Êxtase campestre", categoria: "Retratos e devocionais", imagem: "6-sao-isidoro-e-santa-maria.webp", data: "Século XVII", tecnica: "Óleo sobre cobre", autor: "Atrib. Alonso del Arco", leitura: "A inclusão de Maria Toribia e das vinhetas de milagres ao fundo formam uma verdadeira catequese visual sobre o casal santo.", tipo: "horizontal" },
  { id: 7, titulo: "Lavrador entre os Devotos", subtitulo: "O patronato camponês", categoria: "Retratos e devocionais", imagem: "7-sao-isidoro-devotos.webp", data: "Não datado", tecnica: "Óleo sobre tela (desgastada)", autor: "Anônimo", leitura: "O chapéu ao peito e as figuras orantes atestam o caráter imediato do culto rural, preservado nas rachaduras da própria tela.", tipo: "vertical" },
  { id: 8, titulo: "São Isidoro Lavrador (Milagre da Água)", subtitulo: "A conversão do patrão", categoria: "O milagre da água", imagem: "8-sao-isidoro-milagre-agua.webp", data: "c. 1625–1630", tecnica: "Pintura barroca", autor: "Jusepe Leonardo Chabacier", leitura: "A figura monumental de Isidoro subjuga a paisagem, enquanto Juan de Vargas ajoelhado inverte a lógica hierárquica do século XII.", tipo: "vertical" },
  { id: 9, titulo: "São Isidoro Lavrador e os Anjos", subtitulo: "Corte celestial na semeadura", categoria: "O milagre dos anjos", imagem: "9-sao-isidoro-anjos-arando.webp", data: "Não datado", tecnica: "Pintura devocional", autor: "Anônimo", leitura: "Anjos músicos acompanham a faina do arado, inserindo a alegria sobrenatural diretamente no esforço físico da terra castelhana.", tipo: "horizontal" },
  { id: 10, titulo: "Lavrador com o Anjo e o Boi", subtitulo: "Estatuária sacra", categoria: "Esculturas e retábulos", imagem: "10-sao-isidoro-anjo-boi.webp", data: "Não datado", tecnica: "Escultura em madeira", autor: "Anônimo", leitura: "No espaço da igreja, os elementos do milagre (boi, arado e anjo pequeno) funcionam como chaves de leitura imediata para os fiéis.", tipo: "vertical" },
  { id: 11, titulo: "São Isidoro com Feixe de Trigo", subtitulo: "Imagem de retábulo dourado", categoria: "Esculturas e retábulos", imagem: "11-sao-isidoro-feixe-trigo.webp", data: "Não datado", tecnica: "Escultura policromada", autor: "Anônimo", leitura: "O feixe de trigo junto ao peito desloca o foco do arado para o fruto da colheita e a providência caritativa do santo.", tipo: "vertical" },
  { id: 12, titulo: "Lavrador em Retábulo Barroco", subtitulo: "A glorificação do santo rústico", categoria: "Esculturas e retábulos", imagem: "12-sao-isidoro-retabulo.webp", data: "Não datado", tecnica: "Escultura policromada", autor: "Anônimo", leitura: "A rusticidade da veste de Isidoro e seus bois contrastam belamente com o esplendor carregado da talha dourada barroca que o abriga.", tipo: "vertical" },
  { id: 13, titulo: "Imagem Procissional", subtitulo: "Templo iluminado", categoria: "Esculturas e retábulos", imagem: "13-sao-isidoro-igreja.webp", data: "Não datado", tecnica: "Escultura", autor: "Anônimo", leitura: "A figura sólida de Isidoro entre os tecidos vermelhos e a luz das velas traduz a permanência do culto litúrgico contemporâneo.", tipo: "horizontal" },
  { id: 14, titulo: "Os Anjos no Campo", subtitulo: "Devoção na paisagem arborizada", categoria: "O milagre dos anjos", imagem: "14-sao-isidoro-anjos-campo.webp", data: "Não datado", tecnica: "Óleo sobre tela", autor: "Anônimo", leitura: "A pá em primeiro plano ancora a cena no solo bruto, enquanto o céu nublado emoldura a operação invisível da graça nas costas do santo.", tipo: "vertical" },
];

const filtros: Categoria[] = ["Todas", "O milagre dos anjos", "Retratos e devocionais", "O milagre da água", "Esculturas e retábulos"];

export function GaleriaIsidoro() {
  const [filtro, setFiltro] = useState<Categoria>("Todas");
  const [selecionada, setSelecionada] = useState<Obra | null>(null);
  
  const visiveis = useMemo(() => obras.filter((obra) => filtro === "Todas" || obra.categoria === filtro), [filtro]);

  return (
    <section id="galeria-iconografica" className={styles.gallery} aria-labelledby="galeria-titulo">
      <header className={styles.galleryHead}>
        <div>
          <p className={styles.eyebrow}>02 · Muro Curatorial</p>
          <h2 id="galeria-titulo">14 obras para contemplar</h2>
        </div>
        <p>Pinturas, retábulos e gravuras do lavrador. Clique em qualquer imagem para abrir a ficha de análise curatorial.</p>
      </header>
      
      <div className={styles.galleryControls} aria-label="Filtros da galeria">
        <div>
          {filtros.map((item) => (
            <button key={item} type="button" className={filtro === item ? styles.isActive : ""} aria-pressed={filtro === item} onClick={() => setFiltro(item)}>
              {item}
            </button>
          ))}
        </div>
        <span>{visiveis.length} obras visíveis</span>
      </div>

      <div className={styles.wall}>
        {visiveis.map((obra) => (
          <button 
            key={obra.id} 
            type="button" 
            className={`${styles.artCard} ${obra.tipo === "horizontal" ? styles.horizontal : styles.vertical}`} 
            onClick={() => setSelecionada(obra)}
          >
            <img src={`${base}/${obra.imagem}`} alt={obra.titulo} loading="lazy" />
            <span className={styles.cardShade} />
            <span className={styles.cardInfo}>
              <small>{String(obra.id).padStart(2, "0")} · {obra.categoria}</small>
              <strong>{obra.titulo}</strong>
              <em>{obra.subtitulo}</em>
            </span>
            <span className={styles.openMark} aria-hidden="true">↗</span>
          </button>
        ))}
      </div>

      {selecionada && (
        <div className={styles.dialogLayer} role="presentation" onMouseDown={() => setSelecionada(null)}>
          <section className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="obra-dialogo-titulo" onMouseDown={(event) => event.stopPropagation()}>
            <button type="button" className={styles.close} onClick={() => setSelecionada(null)} aria-label="Fechar ficha">×</button>
            <div className={styles.dialogImgBox}>
              <img src={`${base}/${selecionada.imagem}`} alt={selecionada.titulo} />
            </div>
            <div className={styles.dialogContent}>
              <p className={styles.eyebrow}>{selecionada.categoria}</p>
              <h3 id="obra-dialogo-titulo">{selecionada.titulo}</h3>
              <p className={styles.dialogSubtitle}>{selecionada.subtitulo}</p>
              <p className={styles.dialogText}>{selecionada.leitura}</p>
              <dl>
                <div><dt>Autor</dt><dd>{selecionada.autor}</dd></div>
                <div><dt>Datação</dt><dd>{selecionada.data}</dd></div>
                <div><dt>Técnica</dt><dd>{selecionada.tecnica}</dd></div>
              </dl>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}