// estudos/concilios/calcedonia/personagens/proterio/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'proterio')!);

export default function ProterioPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'proterio')!} />;
}
