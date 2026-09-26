// estudos/concilios/calcedonia/personagens/pulqueria/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'pulqueria')!);

export default function PulqueriaPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'pulqueria')!} />;
}
