// estudos/concilios/calcedonia/personagens/eudocia/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'eudocia')!);

export default function EudociaPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'eudocia')!} />;
}
