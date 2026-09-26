import type { Metadata } from 'next';
import Link from 'next/link';
import HomeInteractive from './HomeInteractive';
import './home.css';

// ==========================================
// 1. DADOS DO FEED (SUAS ATUALIZAÇÕES AQUI)
// ==========================================
const FEED_ATUALIZACOES = [
  {
    id: 1,
    data: "02 Set 2026",
    dataFormatada: { dia: "02", mes: "SET", ano: "2026" },
    tag: "NOVO SANTO",
    categoria: "Mártires",
    titulo: "Santa Afra de Augsburgo",
    subtitulo: "Padroeira das penitentes e mártir da Igreja primitiva",
    desc: "Adicionamos a biografia completa da mártir romana convertida do paganismo, com sua rica iconografia germânica, orações tradicionais e a história de seu martírio às margens do Lech.",
    imagem: "/inicio/atualizacao/01-set-santa-afra.png",
    link: "/santos/martires/santa-afra-de-augsburgo",
    destaque: true
  },
  {
    id: 2,
    data: "01 Set 2026",
    dataFormatada: { dia: "01", mes: "SET", ano: "2026" },
    tag: "NOVO SANTO",
    categoria: "Leigos",
    titulo: "São Domingos Sávio",
    subtitulo: "O jovem discípulo de Dom Bosco",
    desc: "Conheça a espiritualidade e a vida do jovem aluno do Oratório de Valdocco, canonizado por Pio XII como modelo de santidade juvenil.",
    imagem: "/inicio/atualizacao/02-set-sao-domingos-savio.png",
    link: "/santos/leigos/sao-domingos-savio",
    destaque: false
  },
  {
    id: 3,
    data: "30 Ago 2026",
    dataFormatada: { dia: "30", mes: "AGO", ano: "2026" },
    tag: "MELHORIA",
    categoria: "Sistema",
    titulo: "Liturgia Diária Otimizada",
    subtitulo: "Renderização instantânea no servidor",
    desc: "A página da Liturgia Diária foi reconstruída em Server Side Rendering (SSR), garantindo carregamento instantâneo do Evangelho, Salmos e Leituras.",
    imagem: null,
    link: "/liturgia_diaria",
    destaque: false
  }
];

// ==========================================
// 2. SEO PERFEITO (EXIGÊNCIA DO MANUS)
// ==========================================
export const metadata: Metadata = {
  title: 'Lux Fidei — Luz da Fé Católica',
  description: 'Enciclopédia católica, liturgia diária, hagiografia, teologia e história da Igreja. A sabedoria de dois mil anos ao alcance de quem busca.',
  alternates: { canonical: 'https://lux-fidei.vercel.app' },
  openGraph: {
    title: 'Lux Fidei — Luz da Fé Católica',
    description: 'A sabedoria de dois mil anos ao alcance de quem busca.',
    url: 'https://lux-fidei.vercel.app',
    siteName: 'Lux Fidei',
    images: [{ url: '/globe.svg', width: 800, height: 600 }],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lux Fidei",
    "url": "https://lux-fidei.vercel.app",
    "description": "Enciclopédia católica, liturgia diária, hagiografia e teologia.",
  };

  return (
    <div className="pagina-lux">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <HomeInteractive>
        <main id="inicio">
          
          {/* HERO ORIGINAL - INTOCADO */}
          <section className="abertura">
            <span className="ornamento-cruz">. . . &#10011; . . .</span>
            <h2>A sabedoria de dois mil anos<br/>ao alcance de quem busca</h2>
            <p className="epigraph">"Conhecereis a verdade, e a verdade vos libertara."</p>
            <p className="epigraph-ref">-- Joao 8, 32</p>
          </section>

        {/* NOVO FEED EDITORIAL */}
<section className="feed-atualizacoes">
  <div className="feed-heading">
    <span className="feed-ornamento">&#10047;</span>
    <h2 className="feed-titulo-principal">Novas Adições ao Acervo</h2>
    <p className="feed-subtitulo-principal">O que há de novo no Lux Fidei</p>
    <span className="feed-linha-dourada"></span>
  </div>

  <div className="feed-grid">
    {FEED_ATUALIZACOES.map((item, index) => (
      <article 
        key={item.id} 
        className={`feed-card ${item.destaque ? 'destaque' : ''} ${!item.imagem ? 'sem-imagem' : ''}`}
      >
        {/* COLUNA ESQUERDA - DATA */}
        <div className="feed-data-box">
          <span className="feed-data-dia">{item.dataFormatada.dia}</span>
          <span className="feed-data-mes">{item.dataFormatada.mes}</span>
          <span className="feed-data-ano">{item.dataFormatada.ano}</span>
        </div>

        {/* COLUNA CENTRAL - CONTEÚDO */}
        <div className="feed-conteudo">
          <div className="feed-meta">
            <span className="feed-categoria">{item.categoria}</span>
            <span className="feed-separador">·</span>
            <span className="feed-tag">{item.tag}</span>
          </div>

          <h3 className="feed-titulo-artigo">{item.titulo}</h3>
          <p className="feed-subtitulo-artigo">{item.subtitulo}</p>

          <div className="feed-corpo">
            <p>{item.desc}</p>
          </div>

          <Link href={item.link} className="feed-ler-mais">
            <span>Acessar conteúdo completo</span>
            <span className="feed-seta">&rarr;</span>
          </Link>
        </div>

        {/* COLUNA DIREITA - IMAGEM (se houver) */}
        {item.imagem && (
          <div className="feed-imagem-box">
            <img src={item.imagem} alt={item.titulo} />
          </div>
        )}
      </article>
    ))}
  </div>

  <div className="feed-rodape">
    <span className="feed-rodape-ornamento">&#10047; &nbsp; &nbsp; &#10047; &nbsp; &nbsp; &#10047;</span>
    <p>Novidades são adicionadas continuamente</p>
  </div>
</section>

          {/* CITAÇÃO FINAL ORIGINAL - INTOCADA */}
          <section className="citacao-magna">
            <blockquote>"A fe sem a razao fenece no mito e na supersticao; a razao sem a fe perde-se na desolacao do nada."</blockquote>
            <cite>-- Sao Joao Paulo II, Fides et Ratio</cite>
          </section>
          
        </main>
      </HomeInteractive>
    </div>
  );
}