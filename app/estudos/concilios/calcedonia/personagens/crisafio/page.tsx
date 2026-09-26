// estudos/concilios/calcedonia/personagens/crisafio/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'crisafio')!);

export default function CrisafioPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'crisafio')!} />;
}
