// estudos/concilios/calcedonia/personagens/anatolio/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'anatolio')!);

export default function AnatolioPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'anatolio')!} />;
}
