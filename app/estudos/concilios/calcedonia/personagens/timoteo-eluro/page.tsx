// estudos/concilios/calcedonia/personagens/timoteo-eluro/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'timoteo-eluro')!);

export default function TimoteoEluroPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'timoteo-eluro')!} />;
}
