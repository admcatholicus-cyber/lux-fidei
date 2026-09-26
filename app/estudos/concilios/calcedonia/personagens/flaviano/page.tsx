// estudos/concilios/calcedonia/personagens/flaviano/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'flaviano')!);

export default function FlavianoPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'flaviano')!} />;
}
