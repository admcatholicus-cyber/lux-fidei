import type { Metadata } from 'next';
import LiturgiaClient, { LiturgiaData } from './LiturgiaClient';

async function getLiturgiaData(): Promise<LiturgiaData | null> {
  try {
    const res = await fetch('https://api-lirtugico-lux-fidei.vercel.app/cn', {
      next: { revalidate: 14400 }, // Cache por 4 horas no servidor
    });

    if (res.ok) {
      const api = await res.json();
      return {
        liturgia: api.today?.entry_title || api.today?.titulo || '',
        data: api.today?.date || api.today?.data || '',
        cor: api.today?.color || api.today?.cor || 'verde',
        primeiraLeitura: api.today?.readings?.first_reading || api.today?.primeiraLeitura,
        salmo: api.today?.readings?.psalm || api.today?.salmo,
        segundaLeitura: api.today?.readings?.second_reading || api.today?.segundaLeitura,
        evangelho: api.today?.readings?.gospel || api.today?.evangelho,
      };
    }
  } catch (err) {
    console.error('Erro na API principal de liturgia:', err);
  }

  // Fallback para API secundária
  try {
    const res = await fetch('https://api-liturgia-diaria.vercel.app/cn', {
      next: { revalidate: 14400 },
    });

    if (res.ok) {
      const api = await res.json();
      return {
        liturgia: api.titulo || '',
        data: api.data || '',
        cor: api.cor || 'verde',
        primeiraLeitura: api.primeiraLeitura,
        salmo: api.salmo,
        segundaLeitura: api.segundaLeitura,
        evangelho: api.evangelho,
      };
    }
  } catch (err) {
    console.error('Erro na API fallback de liturgia:', err);
  }

  return null;
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLiturgiaData();
  const tituloLiturgia = data?.liturgia ? `: ${data.liturgia}` : '';
  
  return {
    title: `Liturgia Diária${tituloLiturgia} — Lux Fidei`,
    description: `Liturgia Diária da Igreja Católica com Evangelho, Primeira Leitura, Salmo Responsorial e Meditação.`,
  };
}

export default async function LiturgiaPage() {
  const data = await getLiturgiaData();

  return <LiturgiaClient initialData={data} />;
}