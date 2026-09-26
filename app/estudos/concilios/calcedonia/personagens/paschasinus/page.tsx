// estudos/concilios/calcedonia/personagens/paschasinus/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'paschasinus')!);

export default function PaschasinusPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'paschasinus')!} />;
}
