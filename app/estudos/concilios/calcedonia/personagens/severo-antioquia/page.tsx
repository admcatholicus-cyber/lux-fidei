// estudos/concilios/calcedonia/personagens/severo-antioquia/page.tsx
import type { Metadata } from 'next';
import { personagensSecao } from '../_personagens';
import PersonagemTemplate, { metadataFor } from '../_PersonagemTemplate';

export const metadata: Metadata = metadataFor(personagensSecao.find(p => p.slug === 'severo-antioquia')!);

export default function SeveroAntioquiaPage() {
  return <PersonagemTemplate personagem={personagensSecao.find(p => p.slug === 'severo-antioquia')!} />;
}
