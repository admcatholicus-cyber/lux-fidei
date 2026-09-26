// estudos/concilios/calcedonia/personagens/juvenal/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'juvenal')!);

export default function JuvenalPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'juvenal')!} />;
}
