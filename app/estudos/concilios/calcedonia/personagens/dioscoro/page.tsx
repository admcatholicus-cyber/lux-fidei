// estudos/concilios/calcedonia/personagens/dioscoro/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'dioscoro')!);

export default function DioscoroPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'dioscoro')!} />;
}
