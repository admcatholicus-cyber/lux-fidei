// estudos/concilios/calcedonia/personagens/eutiques/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'eutiques')!);

export default function EutiquesPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'eutiques')!} />;
}
