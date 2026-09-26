import type { Metadata } from 'next';
import JogosClient from './JogosClient';

export const metadata: Metadata = {
  title: 'Jogos Católicos — Lux Fidei',
  description: 'Coleção de jogos católicos inspirados na fé, na vida dos santos e na tradição cristã. Aprenda e reze brincando.',
  alternates: { canonical: 'https://lux-fidei.vercel.app/jogos' },
  openGraph: {
    title: 'Jogos Católicos — Lux Fidei',
    description: 'Coleção de jogos inspirados na fé e nos santos.',
    url: 'https://lux-fidei.vercel.app/jogos',
    siteName: 'Lux Fidei',
    locale: 'pt_BR',
    type: 'website',
  },
};

// ==========================================
// BANCO DE JOGOS — Adicione novos jogos aqui
// ==========================================
export const JOGOS = [
   {
    id: 'tap-lisieux',
    titulo: 'Tap Lisieux',
    subtitulo: 'Cultive rosas com Santa Teresinha',
    descricao: 'Cultive rosas e lute contra os pecados capitais ao lado de Santa Teresinha do Menino Jesus em um divertido jogo de clique inspirado na "pequena via" carmelita.',
    santo: 'Santa Teresinha do Menino Jesus',
    categoria: 'Clicker · Devoção',
    imagem: '/jogos/cards/tap-lisieux.png',
    link: '#',
    externo: false,
    status: 'em-breve',
    destaque: true,
  },
];

export default function JogosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Jogos Católicos — Lux Fidei",
    "description": "Coleção de jogos católicos inspirados na fé.",
    "url": "https://lux-fidei.vercel.app/jogos",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JogosClient jogos={JOGOS} />
    </>
  );
}