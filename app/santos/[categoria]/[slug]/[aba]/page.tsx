import { notFound } from 'next/navigation';



import EstudoComparativo from '../../../_components/biografia/EstudoComparativo';
import Imagem from '../../../_components/biografia/Imagem';
import ImagemDestaque from '../../../_components/biografia/ImagemDestaque';
import Galeria from '../../../_components/biografia/Galeria';
import ComparacaoImagens from '../../../_components/biografia/ComparacaoImagens';
import ObraDestaque from '../../../_components/biografia/ObraDestaque';


import Section from '../../../_components/biografia/Section';
import Bloco from '../../../_components/biografia/Bloco';
import Capitular from '../../../_components/biografia/Capitular';
import Citacao from '../../../_components/biografia/Citacao';
import Nota from '../../../_components/biografia/Nota';
import Separador from '../../../_components/biografia/Separador';
import SecaoEscura from '../../../_components/biografia/SecaoEscura';
import PageHeader from '../../../_components/layout/PageHeader';
import Destaque from '../../../_components/biografia/Destaque';

import Grid from '../../../_components/biografia/Grid';
import Card from '../../../_components/biografia/Card';
import CardDestaque from '../../../_components/biografia/CardDestaque';
import { Badges, Badge } from '../../../_components/biografia/Badges';
import BlocoResumo from '../../../_components/biografia/BlocoResumo';
import Alerta from '../../../_components/biografia/Alerta';
import { Ficha, FichaItem } from '../../../_components/biografia/Ficha';
import { Metricas, Metrica } from '../../../_components/biografia/Metricas';
import { LinhaTempo, Passo } from '../../../_components/biografia/LinhaTempo';
import { Tabela } from '../../../_components/biografia/Tabela';
import Indice from '../../../_components/biografia/Indice';

import Antologia from '../../../_components/biografia/Antologia';
import Capitulo from '../../../_components/biografia/Capitulo';
import Subtema from '../../../_components/biografia/Subtema';
import Frase from '../../../_components/biografia/Frase';
import type { Metadata } from 'next';
import { gerarMetadataAba } from '../../../_lib/gerarMetadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string; slug: string; aba: string }>;
}): Promise<Metadata> {
  const { categoria, slug, aba } = await params;
  try {
    const { meta } = await import(
      `../../../_content/${categoria}/${slug}/meta`
    );
    return gerarMetadataAba(meta, aba);
  } catch {
    return {
      title: 'Lux Fidei — Santos da Igreja Católica',
      description:
        'Enciclopédia católica dos santos, doutores, apóstolos, mártires e arcanjos.',
    };
  }
}
export default async function AbaPage({
  params,
}: {
  params: Promise<{ categoria: string; slug: string; aba: string }>;
}) {
  const { categoria, slug, aba } = await params;

  try {
    const MDXContent = (
      await import(`../../../_content/${categoria}/${slug}/${aba}.mdx`)
    ).default;

    return (
      <MDXContent
        components={{
          Section,
          Bloco,
          Capitular,
          Citacao,
          Nota,
          Separador,
          SecaoEscura,
          PageHeader,
          Destaque,
          Grid,
          Card,
          CardDestaque,
          Badges,
          Badge,
          BlocoResumo,
          Alerta,
          Ficha,
          FichaItem,
          Metricas,
          Metrica,
          LinhaTempo,
          Passo,
          Tabela,
          Indice,
          Antologia,
          Capitulo,
          Subtema,
          Frase,
          Imagem,
          ImagemDestaque,
          Galeria,
          ComparacaoImagens,
          ObraDestaque,
          EstudoComparativo,
        }}
      />
    );
  } catch (error) {
    console.error('Erro ao carregar MDX:', error);
    notFound();
  }
}