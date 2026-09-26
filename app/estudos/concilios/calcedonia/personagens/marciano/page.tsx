// estudos/concilios/calcedonia/personagens/marciano/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'marciano')!);

export default function MarcianoPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'marciano')!} />;
}
