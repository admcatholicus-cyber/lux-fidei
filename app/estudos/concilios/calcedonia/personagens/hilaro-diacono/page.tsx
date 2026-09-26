// estudos/concilios/calcedonia/personagens/hilaro-diacono/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'hilaro-diacono')!);

export default function HilaroDiaconoPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'hilaro-diacono')!} />;
}
