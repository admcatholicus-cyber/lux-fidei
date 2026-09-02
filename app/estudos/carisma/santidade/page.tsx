import './_styles/base.css';

import Navigation from './_components/Navigation';
import Hero from './_components/Hero';
import IndiceCompleto from './_components/IndiceCompleto';
import Introducao from './_components/Introducao';
import Etimologia from './_components/Etimologia';
import Escrituras from './_components/Escrituras';
import TeologiaDogmatica from './_components/TeologiaDogmatica';
import Magisterio from './_components/Magisterio';
import Patristica from './_components/Patristica';
import Doutores from './_components/Doutores';
import Filosofia from './_components/Filosofia';
import Mistica from './_components/Mistica';
import Moral from './_components/Moral';
import VocacaoUniversal from './_components/VocacaoUniversal';
import SantosModelos from './_components/SantosModelos';
import Maria from './_components/Maria';
import Objecoes from './_components/Objecoes';
import SinteseFinal from './_components/SinteseFinal';
import Bibliografia from './_components/Bibliografia';
import Footer from './_components/Footer';
import BotaoTopo from './_components/BotaoTopo';
import ScrollBehavior from './_components/ScrollBehavior';
import AnimacaoEntrada from './_components/AnimacaoEntrada';

export const metadata = {
  title: 'Santidade — Compêndio Teológico | Lux Fidei',
  description:
    'Compêndio teológico completo sobre a santidade na tradição católica: bíblica, dogmática, moral, mística, filosófica, patrística, magisterial e hagiográfica.',
};

export default function SantidadePage() {
  return (
    <>
      {/* Font Awesome via CDN (adicione também no layout.tsx raiz se preferir global) */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      <Navigation />
      <Hero />
      <IndiceCompleto />

      <Introducao />
      <Etimologia />
      <Escrituras />
      <TeologiaDogmatica />
      <Magisterio />
      <Patristica />
      <Doutores />
      <Filosofia />
      <Mistica />
      <Moral />
      <VocacaoUniversal />
      <SantosModelos />
      <Maria />
      <Objecoes />
      <SinteseFinal />
      <Bibliografia />

      <Footer />
      <BotaoTopo />
      <ScrollBehavior />
      <AnimacaoEntrada />
    </>
  );
}