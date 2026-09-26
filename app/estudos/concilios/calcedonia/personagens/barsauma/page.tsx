// estudos/concilios/calcedonia/personagens/barsauma/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'barsauma')!);

export default function BarsaumaPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'barsauma')!} />;
}
