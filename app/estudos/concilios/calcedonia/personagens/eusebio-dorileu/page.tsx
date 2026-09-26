// estudos/concilios/calcedonia/personagens/eusebio-dorileu/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'eusebio-dorileu')!);

export default function EusebioDorileuPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'eusebio-dorileu')!} />;
}
